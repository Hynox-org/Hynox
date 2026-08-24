import { NextResponse } from 'next/server';
import { verifyTurnstileToken } from '@/app/lib/turnstile';
import { sendEmail, BrevoError } from '@/app/lib/brevo';
import { appendToSheet } from '@/app/lib/google-sheets';
import { isValidRoleTitle } from '@/app/lib/careers';
import {
  careerTeamNotificationEmail,
  careerConfirmationEmail,
  type CareerSubmission,
} from '@/app/lib/email-templates';

/**
 * Kept below the ~4.5MB request body ceiling most serverless hosts enforce,
 * leaving room for the rest of the multipart payload.
 */
const MAX_RESUME_BYTES = 4 * 1024 * 1024;

const ALLOWED_RESUME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

const ALLOWED_RESUME_EXTENSIONS = ['.pdf', '.doc', '.docx'];

function clientIp(req: Request): string | undefined {
  return req.headers.get('x-forwarded-for')?.split(',')[0].trim();
}

/** Some browsers send a generic MIME type, so the extension is the fallback. */
function isAllowedResume(file: File): boolean {
  if (ALLOWED_RESUME_TYPES.has(file.type)) return true;
  const name = file.name.toLowerCase();
  return ALLOWED_RESUME_EXTENSIONS.some((ext) => name.endsWith(ext));
}

function text(form: FormData, key: string): string {
  const value = form.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const jobTitle = text(form, 'jobTitle');
    const name = text(form, 'name');
    const email = text(form, 'email');
    const phone = text(form, 'phone');
    const coverLetter = text(form, 'coverLetter');
    const additionalLinks = text(form, 'additionalLinks');
    const turnstileToken = text(form, 'turnstileToken');
    const resume = form.get('resume');

    if (!jobTitle || !name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Reject applications for roles that are no longer listed.
    if (!isValidRoleTitle(jobTitle)) {
      return NextResponse.json(
        { error: 'Please select a valid role from the list.' },
        { status: 400 }
      );
    }

    if (!(resume instanceof File) || resume.size === 0) {
      return NextResponse.json(
        { error: 'Please attach your resume.' },
        { status: 400 }
      );
    }
    if (!isAllowedResume(resume)) {
      return NextResponse.json(
        { error: 'Resume must be a PDF, DOC, or DOCX file.' },
        { status: 400 }
      );
    }
    if (resume.size > MAX_RESUME_BYTES) {
      return NextResponse.json(
        { error: 'Resume must be smaller than 4MB.' },
        { status: 400 }
      );
    }

    const isHuman = await verifyTurnstileToken(turnstileToken, clientIp(req));
    if (!isHuman) {
      return NextResponse.json(
        { error: 'Verification failed. Please complete the challenge and try again.' },
        { status: 400 }
      );
    }

    const submission: CareerSubmission = {
      jobTitle,
      name,
      email,
      phone,
      coverLetter,
      additionalLinks,
      resumeFileName: resume.name,
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    // Recording must not block the application: the notification email carries
    // the same details plus the resume itself, so failures are logged only.
    const sheetId = process.env.GOOGLE_SHEET_CAREERS_ID;
    if (sheetId) {
      try {
        await appendToSheet(sheetId, {
          jobTitle,
          name,
          email,
          // Existing rows store digits only, e.g. 918838133607.
          phone: phone.replace(/[^0-9]/g, ''),
          coverLetter: coverLetter || 'N/A',
          additionalLinks: additionalLinks || 'N/A',
        });
      } catch (error) {
        console.error('Failed to record application in Google Sheets:', error);
      }
    } else {
      console.error('GOOGLE_SHEET_CAREERS_ID is not configured; skipping Sheets record');
    }

    const companyEmail = process.env.COMPANY_EMAIL;
    if (!companyEmail) throw new Error('COMPANY_EMAIL is not configured');

    const resumeBase64 = Buffer.from(await resume.arrayBuffer()).toString('base64');

    // The team notification carries the resume, so a failure here fails the
    // request — otherwise the application would be lost entirely.
    await sendEmail({
      to: { email: companyEmail, name: 'HYNOX' },
      subject: `New Application: ${jobTitle} — ${name}`,
      html: careerTeamNotificationEmail(submission),
      replyTo: { email, name },
      attachment: [{ content: resumeBase64, name: resume.name }],
    });

    // The application is already captured above, so a failed confirmation is
    // logged rather than shown to the applicant as an error.
    try {
      await sendEmail({
        to: { email, name },
        subject: `Application received for ${jobTitle} — HYNOX`,
        html: careerConfirmationEmail(submission),
        replyTo: { email: companyEmail, name: 'HYNOX' },
      });
    } catch (error) {
      console.error('Failed to send confirmation email to applicant:', error);
    }

    return NextResponse.json({ message: 'Application received' }, { status: 200 });
  } catch (error) {
    console.error('Career application submission failed:', error);
    return NextResponse.json(
      {
        error: 'Failed to submit. Please try again.',
        // Brevo's own status and error code name the cause (rejected key,
        // unverified sender, IP restriction) without echoing any credential.
        // Nothing else is echoed: a thrown message can quote the value that
        // caused it, so the full error goes to the server log instead.
        ...(error instanceof BrevoError && {
          provider: 'brevo',
          status: error.status,
          code: error.code,
        }),
      },
      { status: 500 }
    );
  }
}

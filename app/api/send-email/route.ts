import { NextResponse } from 'next/server';
import { verifyTurnstileToken } from '@/app/lib/turnstile';
import { sendEmail } from '@/app/lib/brevo';
import { appendToSheet } from '@/app/lib/google-sheets';
import { serviceLabel } from '@/app/lib/contact-form';
import {
  teamNotificationEmail,
  userConfirmationEmail,
  type ContactSubmission,
} from '@/app/lib/email-templates';

function clientIp(req: Request): string | undefined {
  const forwarded = req.headers.get('x-forwarded-for');
  return forwarded?.split(',')[0].trim();
}

export async function POST(req: Request) {
  try {
    const { fullName, email, phone, service, message, source, turnstileToken } =
      await req.json();

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    const submission: ContactSubmission = {
      fullName,
      email,
      phone: phone || '',
      service: serviceLabel(service),
      message,
      source: source || 'Contact Form',
      submittedAt: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
      }),
    };

    // Recording the enquiry must not block delivery: the notification email
    // carries the same details, so a Sheets outage is logged rather than
    // failing the submission.
    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (sheetId) {
      try {
        await appendToSheet(sheetId, {
          submittedAt: submission.submittedAt,
          fullName: submission.fullName,
          email: submission.email,
          phone: submission.phone,
          service: submission.service,
          message: submission.message,
          source: submission.source,
        });
      } catch (error) {
        console.error('Failed to record submission in Google Sheets:', error);
      }
    } else {
      console.error('GOOGLE_SHEET_ID is not configured; skipping Sheets record');
    }

    const companyEmail = process.env.COMPANY_EMAIL;
    if (!companyEmail) throw new Error('COMPANY_EMAIL is not configured');

    // The team notification is the one email the enquiry cannot survive
    // without, so a failure here fails the request.
    await sendEmail({
      to: { email: companyEmail, name: 'HYNOX' },
      subject: `New Contact Form Submission from ${submission.fullName}`,
      html: teamNotificationEmail(submission),
      replyTo: { email: submission.email, name: submission.fullName },
    });

    // The user has already been captured as a lead at this point, so a failed
    // confirmation is logged without turning the submission into an error.
    try {
      await sendEmail({
        to: { email: submission.email, name: submission.fullName },
        subject: 'We have received your enquiry — HYNOX',
        html: userConfirmationEmail(submission),
        replyTo: { email: companyEmail, name: 'HYNOX' },
      });
    } catch (error) {
      console.error('Failed to send confirmation email to user:', error);
    }

    return NextResponse.json(
      { message: 'Submission received' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return NextResponse.json(
      { error: 'Failed to submit. Please try again.' },
      { status: 500 }
    );
  }
}

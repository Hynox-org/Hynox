export type ContactSubmission = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  source: string;
  submittedAt: string;
};

/** Submitted values are interpolated into HTML emails, so they must be escaped. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function paragraph(text: string): string {
  return escapeHtml(text).replace(/\r?\n/g, '<br>');
}

const BODY = 'margin:0;padding:24px;background:#f4f5f7;font-family:Arial,Helvetica,sans-serif;color:#1a1a1a;';
const CARD = 'max-width:600px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e4e6eb;';
const HEADER = 'background:#0b1c33;color:#ffffff;padding:24px 28px;';
const CONTENT = 'padding:24px 28px;';
const LABEL = 'padding:8px 0;font-size:13px;color:#6b7280;width:170px;vertical-align:top;';
const VALUE = 'padding:8px 0;font-size:14px;color:#111827;vertical-align:top;';
const FOOTER = 'padding:18px 28px;background:#f9fafb;font-size:12px;color:#6b7280;border-top:1px solid #e4e6eb;';

/** Internal notification with every submitted field. */
export function teamNotificationEmail(data: ContactSubmission): string {
  const rows: [string, string][] = [
    ['Name', data.fullName],
    ['Email', data.email],
    ['Phone', data.phone || 'Not provided'],
    ['Service of Interest', data.service],
    ['Source', data.source],
    ['Submitted At', data.submittedAt],
  ];

  return `<div style="${BODY}">
  <div style="${CARD}">
    <div style="${HEADER}">
      <h1 style="margin:0;font-size:18px;">New Contact Form Enquiry</h1>
      <p style="margin:6px 0 0;font-size:13px;opacity:0.8;">Submitted via the HYNOX website</p>
    </div>
    <div style="${CONTENT}">
      <table style="width:100%;border-collapse:collapse;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="${LABEL}">${escapeHtml(label)}</td><td style="${VALUE}">${escapeHtml(value)}</td></tr>`
          )
          .join('')}
      </table>
      <h2 style="margin:22px 0 8px;font-size:14px;color:#0b1c33;">Message</h2>
      <div style="font-size:14px;line-height:1.6;color:#111827;background:#f9fafb;border:1px solid #e4e6eb;border-radius:6px;padding:14px;">
        ${paragraph(data.message)}
      </div>
    </div>
    <div style="${FOOTER}">Reply directly to this email to respond to ${escapeHtml(data.fullName)}.</div>
  </div>
</div>`;
}

/** Confirmation sent to the person who submitted the form. */
export function userConfirmationEmail(data: ContactSubmission): string {
  return `<div style="${BODY}">
  <div style="${CARD}">
    <div style="${HEADER}">
      <h1 style="margin:0;font-size:18px;">Thank you for contacting HYNOX</h1>
    </div>
    <div style="${CONTENT}">
      <p style="margin:0 0 14px;font-size:14px;line-height:1.6;">Hi ${escapeHtml(data.fullName)},</p>
      <p style="margin:0 0 14px;font-size:14px;line-height:1.6;">
        Thank you for reaching out to us. We have successfully received your enquiry
        and a member of our team will get in touch with you shortly.
      </p>
      <p style="margin:0 0 8px;font-size:13px;color:#6b7280;">Here is a copy of what you sent us:</p>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="${LABEL}">Service of Interest</td><td style="${VALUE}">${escapeHtml(data.service)}</td></tr>
        <tr><td style="${LABEL}">Phone</td><td style="${VALUE}">${escapeHtml(data.phone || 'Not provided')}</td></tr>
      </table>
      <div style="font-size:14px;line-height:1.6;color:#111827;background:#f9fafb;border:1px solid #e4e6eb;border-radius:6px;padding:14px;margin-top:10px;">
        ${paragraph(data.message)}
      </div>
      <p style="margin:20px 0 0;font-size:14px;line-height:1.6;">
        Warm regards,<br><strong>Team HYNOX</strong>
      </p>
    </div>
    <div style="${FOOTER}">
      This is an automated confirmation. If you did not submit this enquiry, you can ignore this email.
    </div>
  </div>
</div>`;
}

export type CareerSubmission = {
  jobTitle: string;
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
  additionalLinks: string;
  resumeFileName: string;
  submittedAt: string;
};

/** Internal notification for a job application; the resume rides as an attachment. */
export function careerTeamNotificationEmail(data: CareerSubmission): string {
  const rows: [string, string][] = [
    ['Position', data.jobTitle],
    ['Name', data.name],
    ['Email', data.email],
    ['Phone', data.phone],
    ['Portfolio / Links', data.additionalLinks || 'Not provided'],
    ['Resume', data.resumeFileName],
    ['Submitted At', data.submittedAt],
  ];

  return `<div style="${BODY}">
  <div style="${CARD}">
    <div style="${HEADER}">
      <h1 style="margin:0;font-size:18px;">New Job Application</h1>
      <p style="margin:6px 0 0;font-size:13px;opacity:0.8;">${escapeHtml(data.jobTitle)}</p>
    </div>
    <div style="${CONTENT}">
      <table style="width:100%;border-collapse:collapse;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="${LABEL}">${escapeHtml(label)}</td><td style="${VALUE}">${escapeHtml(value)}</td></tr>`
          )
          .join('')}
      </table>
      <h2 style="margin:22px 0 8px;font-size:14px;color:#0b1c33;">Cover Letter</h2>
      <div style="font-size:14px;line-height:1.6;color:#111827;background:#f9fafb;border:1px solid #e4e6eb;border-radius:6px;padding:14px;">
        ${data.coverLetter ? paragraph(data.coverLetter) : 'Not provided'}
      </div>
    </div>
    <div style="${FOOTER}">
      The applicant's resume is attached to this email. Reply directly to respond to ${escapeHtml(data.name)}.
    </div>
  </div>
</div>`;
}

/** Confirmation sent to the applicant. */
export function careerConfirmationEmail(data: CareerSubmission): string {
  return `<div style="${BODY}">
  <div style="${CARD}">
    <div style="${HEADER}">
      <h1 style="margin:0;font-size:18px;">Application Received — HYNOX</h1>
    </div>
    <div style="${CONTENT}">
      <p style="margin:0 0 14px;font-size:14px;line-height:1.6;">Hi ${escapeHtml(data.name)},</p>
      <p style="margin:0 0 14px;font-size:14px;line-height:1.6;">
        Thank you for applying to HYNOX. We have successfully received your application for the
        <strong>${escapeHtml(data.jobTitle)}</strong> position, along with your resume.
      </p>
      <p style="margin:0 0 14px;font-size:14px;line-height:1.6;">
        Our hiring team will review your profile and reach out to you if your background
        matches what we are looking for.
      </p>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="${LABEL}">Position</td><td style="${VALUE}">${escapeHtml(data.jobTitle)}</td></tr>
        <tr><td style="${LABEL}">Resume</td><td style="${VALUE}">${escapeHtml(data.resumeFileName)}</td></tr>
        <tr><td style="${LABEL}">Submitted On</td><td style="${VALUE}">${escapeHtml(data.submittedAt)}</td></tr>
      </table>
      <p style="margin:20px 0 0;font-size:14px;line-height:1.6;">
        Warm regards,<br><strong>Team HYNOX</strong>
      </p>
    </div>
    <div style="${FOOTER}">
      This is an automated confirmation. If you did not apply, you can ignore this email.
    </div>
  </div>
</div>`;
}

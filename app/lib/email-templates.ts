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

/* -------------------------------------------------------------------------
 * Design tokens
 *
 * Taken from the site's own palette: near-black, white, neutral greys and a
 * single green accent. The green sits at roughly 2.6:1 against white, so it is
 * never used for text on the light card — only as a rule, a border, or as text
 * on the near-black header where it reaches about 7.5:1.
 * ---------------------------------------------------------------------- */

const INK = '#0a0a0a';
const INK_SOFT = '#3f3f46';
const MUTED = '#71717a';
const ACCENT = '#00b865';
const HAIRLINE = '#e7e7ea';
const CANVAS = '#f2f3f5';
const PANEL = '#fafafa';

const FONT =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif";

const COMPANY = {
  name: 'HYNOX',
  site: 'https://www.hynox.in',
  /**
   * Absolute and pointed at production on purpose: a preview deployment still
   * sends real email, and a relative or preview-host URL would break the logo
   * in the recipient's inbox. Served at 2x the rendered size for retina.
   */
  logo: 'https://www.hynox.in/images/hynox-logo-email.png',
  logoWidth: 91,
  logoHeight: 44,
  email: 'thehynoxofficial@gmail.com',
  phone: '+91 8870524355',
  address:
    '3rd Floor, Sri Govindaraj Tower, 38/4, Father Randy St, R.S. Puram, Coimbatore, Tamil Nadu 641002',
};

/* -------------------------------------------------------------------------
 * Building blocks
 * ---------------------------------------------------------------------- */

/**
 * Renders a label/value list. Two columns on desktop; the media query collapses
 * them to stacked blocks on narrow screens for clients that support it, and the
 * fixed label width keeps it readable in the ones that do not.
 */
function detailList(rows: [string, string][]): string {
  const cells = rows
    .map(([label, value], index) => {
      const divider = index === 0 ? '' : `border-top:1px solid ${HAIRLINE};`;
      return `<tr>
            <td class="dt-label" style="${divider}padding:12px 16px 12px 0;font-family:${FONT};font-size:13px;line-height:20px;color:${MUTED};vertical-align:top;width:38%;mso-line-height-rule:exactly;">${escapeHtml(label)}</td>
            <td class="dt-value" style="${divider}padding:12px 0;font-family:${FONT};font-size:14px;line-height:20px;color:${INK};vertical-align:top;font-weight:500;mso-line-height-rule:exactly;">${escapeHtml(value)}</td>
          </tr>`;
    })
    .join('');

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;border-collapse:collapse;">${cells}</table>`;
}

/** Long-form text (a message or cover letter) set apart in a bordered panel. */
function quotePanel(heading: string, content: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:0 0 8px;font-family:${FONT};font-size:11px;line-height:16px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:${MUTED};mso-line-height-rule:exactly;">${escapeHtml(heading)}</td>
          </tr>
          <tr>
            <td style="background:${PANEL};border:1px solid ${HAIRLINE};border-left:3px solid ${ACCENT};padding:16px 18px;font-family:${FONT};font-size:14px;line-height:23px;color:${INK_SOFT};mso-line-height-rule:exactly;">${content}</td>
          </tr>
        </table>`;
}

/**
 * A filled button. The padding sits on the cell rather than the anchor because
 * Outlook's Word renderer drops padding on inline elements.
 */
function button(href: string, label: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate;">
          <tr>
            <td bgcolor="${INK}" style="border-radius:6px;padding:14px 28px;">
              <a href="${href}" style="display:block;font-family:${FONT};font-size:14px;line-height:16px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:0.2px;mso-line-height-rule:exactly;">${escapeHtml(label)}</a>
            </td>
          </tr>
        </table>`;
}

type LayoutOptions = {
  /** The grey snippet shown next to the subject in the inbox list. */
  preheader: string;
  /** Small uppercase line above the title, inside the dark header. */
  eyebrow: string;
  title: string;
  /** Main content, already escaped. */
  body: string;
  /** Closing line in the footer, above the company details. */
  footnote: string;
};

/**
 * The shared shell every email is poured into.
 *
 * Built on tables rather than divs: Outlook on Windows renders through Word,
 * which ignores max-width, border-radius and much of the box model on div
 * elements, so a div-based card collapses to full bleed there.
 */
function layout({
  preheader,
  eyebrow,
  title,
  body,
  footnote,
}: LayoutOptions): string {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>${escapeHtml(title)}</title>
  <!--[if mso]>
  <xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>
  <![endif]-->
  <style>
    /* Progressive enhancement only — every critical style is also inline. */
    body { margin:0 !important; padding:0 !important; width:100% !important; }
    table { border-collapse:collapse; }
    img { border:0; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; }
    a { color:${INK}; }
    /* Stop iOS turning phone numbers and addresses into blue links. */
    a[x-apple-data-detectors] { color:inherit !important; text-decoration:none !important; }
    @media only screen and (max-width:620px) {
      .shell { width:100% !important; }
      .pad { padding-left:24px !important; padding-right:24px !important; }
      .dt-label, .dt-value { display:block !important; width:100% !important; }
      .dt-label { padding:12px 0 2px !important; }
      .dt-value { padding:0 0 12px !important; border-top:0 !important; }
      .title { font-size:20px !important; line-height:28px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:${CANVAS};">
  <div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">${escapeHtml(preheader)}</div>
  <div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;</div>

  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;background:${CANVAS};">
    <tr>
      <td align="center" style="padding:32px 12px;">

        <table role="presentation" class="shell" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px;max-width:600px;background:#ffffff;border:1px solid ${HAIRLINE};border-radius:12px;overflow:hidden;">

          <tr>
            <td class="pad" bgcolor="${INK}" style="background:${INK};padding:26px 36px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td valign="middle" style="padding-right:16px;">
                    <!-- Images are blocked by default in much of Outlook and
                         Gmail, so the alt text is styled to fall back to the
                         wordmark rather than an empty box. -->
                    <img src="${COMPANY.logo}" width="${COMPANY.logoWidth}" height="${COMPANY.logoHeight}" alt="${COMPANY.name}"
                      style="display:block;width:${COMPANY.logoWidth}px;height:${COMPANY.logoHeight}px;border:0;outline:none;text-decoration:none;font-family:${FONT};font-size:17px;font-weight:700;letter-spacing:3px;color:#ffffff;">
                  </td>
                  <td valign="middle" style="border-left:1px solid #2e2e33;padding-left:16px;">
                    <div style="font-family:${FONT};font-size:18px;line-height:23px;font-weight:700;letter-spacing:3.6px;color:#ffffff;mso-line-height-rule:exactly;">${COMPANY.name}</div>
                    <div style="font-family:${FONT};font-size:11px;line-height:16px;font-weight:600;letter-spacing:1.6px;text-transform:uppercase;color:${ACCENT};padding-top:6px;mso-line-height-rule:exactly;">${escapeHtml(eyebrow)}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="height:3px;line-height:3px;font-size:0;background:${ACCENT};">&nbsp;</td>
          </tr>

          <tr>
            <td class="pad" style="padding:34px 36px 0;">
              <h1 class="title" style="margin:0;font-family:${FONT};font-size:23px;line-height:31px;font-weight:700;letter-spacing:-0.4px;color:${INK};mso-line-height-rule:exactly;">${escapeHtml(title)}</h1>
            </td>
          </tr>

          <tr>
            <td class="pad" style="padding:20px 36px 34px;">${body}</td>
          </tr>

          <tr>
            <td class="pad" style="padding:22px 36px 26px;background:${PANEL};border-top:1px solid ${HAIRLINE};">
              <div style="font-family:${FONT};font-size:13px;line-height:20px;color:${INK_SOFT};mso-line-height-rule:exactly;">${footnote}</div>
              <div style="font-family:${FONT};font-size:12px;line-height:19px;color:${MUTED};padding-top:14px;mso-line-height-rule:exactly;">
                <strong style="color:${INK_SOFT};letter-spacing:1px;">${COMPANY.name}</strong><br>
                ${escapeHtml(COMPANY.address)}<br>
                <a href="tel:${COMPANY.phone.replace(/\s/g, '')}" style="color:${MUTED};text-decoration:none;">${escapeHtml(COMPANY.phone)}</a>
                &nbsp;&middot;&nbsp;
                <a href="mailto:${COMPANY.email}" style="color:${MUTED};text-decoration:none;">${escapeHtml(COMPANY.email)}</a>
                &nbsp;&middot;&nbsp;
                <a href="${COMPANY.site}" style="color:${MUTED};text-decoration:none;">hynox.in</a>
              </div>
            </td>
          </tr>

        </table>

        <div style="font-family:${FONT};font-size:11px;line-height:17px;color:#9b9ba3;padding:18px 12px 0;max-width:600px;">
          &copy; ${new Date().getFullYear()} ${COMPANY.name}. All rights reserved.
        </div>

      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Spacer between stacked blocks inside the body. */
function gap(height: number): string {
  return `<div style="height:${height}px;line-height:${height}px;font-size:0;">&nbsp;</div>`;
}

function lead(text: string): string {
  return `<p style="margin:0;font-family:${FONT};font-size:15px;line-height:24px;color:${INK_SOFT};mso-line-height-rule:exactly;">${text}</p>`;
}

/* -------------------------------------------------------------------------
 * Contact form
 * ---------------------------------------------------------------------- */

/** Internal notification with every submitted field. */
export function teamNotificationEmail(data: ContactSubmission): string {
  const rows: [string, string][] = [
    ['Name', data.fullName],
    ['Email', data.email],
    ['Phone', data.phone || 'Not provided'],
    ['Service of interest', data.service],
    ['Source', data.source],
    ['Received', data.submittedAt],
  ];

  const body = `${lead(
    `<strong style="color:${INK};">${escapeHtml(data.fullName)}</strong> submitted an enquiry through the website.`
  )}
      ${gap(22)}
      ${detailList(rows)}
      ${gap(26)}
      ${quotePanel('Message', paragraph(data.message))}
      ${gap(26)}
      ${button(`mailto:${escapeHtml(data.email)}`, `Reply to ${firstName(data.fullName)}`)}`;

  return layout({
    preheader: `${data.fullName} — ${data.service}. ${data.message.slice(0, 90)}`,
    eyebrow: 'Contact enquiry',
    title: 'New enquiry from the website',
    body,
    footnote: `Replying to this email goes straight to ${escapeHtml(data.fullName)} at ${escapeHtml(data.email)}.`,
  });
}

/** Confirmation sent to the person who submitted the form. */
export function userConfirmationEmail(data: ContactSubmission): string {
  const body = `${lead(`Hi ${escapeHtml(data.fullName)},`)}
      ${gap(14)}
      ${lead(
        'Thank you for reaching out. Your enquiry has reached our team and someone will be in touch shortly, usually within one business day.'
      )}
      ${gap(26)}
      ${detailList([
        ['Service of interest', data.service],
        ['Phone', data.phone || 'Not provided'],
        ['Submitted', data.submittedAt],
      ])}
      ${gap(26)}
      ${quotePanel('Your message', paragraph(data.message))}
      ${gap(28)}
      ${button(COMPANY.site, 'Explore our work')}
      ${gap(28)}
      ${lead(`Warm regards,<br><strong style="color:${INK};">Team ${COMPANY.name}</strong>`)}`;

  return layout({
    preheader: 'We have received your enquiry and will be in touch shortly.',
    eyebrow: 'Enquiry received',
    title: 'Thank you for contacting HYNOX',
    body,
    footnote:
      'This is an automated confirmation. If you did not submit this enquiry, you can safely ignore this email.',
  });
}

/* -------------------------------------------------------------------------
 * Careers
 * ---------------------------------------------------------------------- */

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

/** Button labels greet by first name; a single-word name is left as is. */
function firstName(name: string): string {
  return name.trim().split(/\s+/)[0] || name;
}

/** Internal notification for a job application; the resume rides as an attachment. */
export function careerTeamNotificationEmail(data: CareerSubmission): string {
  const rows: [string, string][] = [
    ['Position', data.jobTitle],
    ['Name', data.name],
    ['Email', data.email],
    ['Phone', data.phone],
    ['Portfolio / links', data.additionalLinks || 'Not provided'],
    ['Resume', data.resumeFileName],
    ['Received', data.submittedAt],
  ];

  const body = `${lead(
    `<strong style="color:${INK};">${escapeHtml(data.name)}</strong> applied for the <strong style="color:${INK};">${escapeHtml(data.jobTitle)}</strong> role.`
  )}
      ${gap(22)}
      ${detailList(rows)}
      ${gap(26)}
      ${quotePanel(
        'Cover letter',
        data.coverLetter
          ? paragraph(data.coverLetter)
          : `<span style="color:${MUTED};">Not provided</span>`
      )}
      ${gap(26)}
      ${button(`mailto:${escapeHtml(data.email)}`, `Reply to ${firstName(data.name)}`)}`;

  return layout({
    preheader: `${data.name} applied for ${data.jobTitle}. Resume attached.`,
    eyebrow: 'Job application',
    title: `New application — ${data.jobTitle}`,
    body,
    footnote: `The applicant's resume is attached to this email. Replying goes straight to ${escapeHtml(data.name)}.`,
  });
}

/** Confirmation sent to the applicant. */
export function careerConfirmationEmail(data: CareerSubmission): string {
  const body = `${lead(`Hi ${escapeHtml(data.name)},`)}
      ${gap(14)}
      ${lead(
        `Thank you for applying to ${COMPANY.name}. We have received your application for the <strong style="color:${INK};">${escapeHtml(data.jobTitle)}</strong> position, along with your resume.`
      )}
      ${gap(14)}
      ${lead(
        'Our hiring team reviews every application personally. If your background matches what the role needs, we will reach out to arrange a conversation.'
      )}
      ${gap(26)}
      ${detailList([
        ['Position', data.jobTitle],
        ['Resume', data.resumeFileName],
        ['Submitted', data.submittedAt],
      ])}
      ${gap(28)}
      ${lead(`Warm regards,<br><strong style="color:${INK};">Team ${COMPANY.name}</strong>`)}`;

  return layout({
    preheader: `Your application for ${data.jobTitle} has been received.`,
    eyebrow: 'Application received',
    title: 'Thank you for applying',
    body,
    footnote:
      'This is an automated confirmation. If you did not apply, you can safely ignore this email.',
  });
}

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

/** Button labels and headline greetings use the first name; a single-word name is left as is. */
function firstName(name: string): string {
  return name.trim().split(/\s+/)[0] || name;
}

/* -------------------------------------------------------------------------
 * Design tokens — "Mark" direction: the logo is the design, everything else
 * quiet. One brand colour per email type keys the CTA; all four always show
 * together in the footer stripe, echoing the dots in the HX mark itself.
 * ---------------------------------------------------------------------- */

const INK = '#0d0d0d';
const INK_SOFT = '#3a403d';
const STANDFIRST = '#5c625f';
const MUTED = '#9aa09c';
const HAIRLINE = '#eef1ef';
const PANEL = '#f6f8f9';

const BLUE = '#1894f8';
const CRIMSON = '#de0e3f';
const GREEN = '#24632c';
const GOLD = '#e1b808';

const FONT = "-apple-system,'Segoe UI',Arial,sans-serif";

/**
 * Host the email's images are loaded from. Email needs absolute URLs, and the
 * asset only exists on hosts that have this branch deployed — so a non-production
 * deployment points this at itself (EMAIL_ASSET_BASE_URL=https://dev.hynox.in)
 * rather than 404ing against production and falling back to alt text.
 *
 * Only assets follow the deployment. Links in the email still go to the public
 * site below, because that is where the recipient should land.
 */
const ASSET_BASE = (
  process.env.EMAIL_ASSET_BASE_URL || 'https://www.hynox.in'
).replace(/\/+$/, '');

const COMPANY = {
  name: 'HYNOX',
  site: 'https://www.hynox.in',
  /** The HX mark, served at 2x the rendered size so it stays crisp on retina. */
  logo: `${ASSET_BASE}/images/hynox_logo.jpg`,
  logoSize: 120,
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
            <td class="dt-label" style="${divider}padding:16px 16px 16px 0;font-family:${FONT};font-size:10.5px;line-height:18px;letter-spacing:1.6px;text-transform:uppercase;font-weight:700;color:${MUTED};vertical-align:top;width:40%;">${escapeHtml(label)}</td>
            <td class="dt-value" style="${divider}padding:16px 0;font-family:${FONT};font-size:15px;line-height:22px;color:${INK};font-weight:600;">${escapeHtml(value)}</td>
          </tr>`;
    })
    .join('');

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;border-collapse:collapse;border-top:1px solid ${HAIRLINE};">${cells}</table>`;
}

/** Long-form text (a message or cover letter) set apart in a soft panel. */
function quotePanel(heading: string, content: string): string {
  return `<div style="font-family:${FONT};font-size:10.5px;line-height:16px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;color:${MUTED};padding-bottom:12px;">${escapeHtml(heading)}</div>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;border-collapse:collapse;">
        <tr><td style="background:${PANEL};border-radius:12px;padding:22px 24px;font-family:${FONT};font-size:15px;line-height:26px;color:${INK_SOFT};">${content}</td></tr>
      </table>`;
}

/** A pill CTA in the email type's brand colour. */
function button(href: string, label: string, accent: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate;">
          <tr>
            <td bgcolor="${accent}" style="border-radius:999px;padding:15px 34px;">
              <a href="${href}" style="display:block;font-family:${FONT};font-size:14px;line-height:16px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.2px;">${escapeHtml(label)}</a>
            </td>
          </tr>
        </table>`;
}

/** The four brand dots from the HX mark, always shown together as a footer signature. */
function colorStripe(): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;border-collapse:collapse;">
        <tr>
          <td width="25%" bgcolor="${BLUE}" style="background:${BLUE};height:5px;line-height:5px;font-size:0;">&nbsp;</td>
          <td width="25%" bgcolor="${CRIMSON}" style="background:${CRIMSON};height:5px;line-height:5px;font-size:0;">&nbsp;</td>
          <td width="25%" bgcolor="${GREEN}" style="background:${GREEN};height:5px;line-height:5px;font-size:0;">&nbsp;</td>
          <td width="25%" bgcolor="${GOLD}" style="background:${GOLD};height:5px;line-height:5px;font-size:0;">&nbsp;</td>
        </tr>
      </table>`;
}

type LayoutOptions = {
  /** The grey snippet shown next to the subject in the inbox list. */
  preheader: string;
  /** Small uppercase line above the headline. */
  eyebrow: string;
  /** Big centred headline; may contain a `<br>` for a two-line break. */
  headline: string;
  /** Standfirst paragraph under the headline, already escaped. */
  standfirst: string;
  /** This email type's brand colour — keys the CTA. */
  accent: string;
  cta: { href: string; label: string };
  /** Rest of the body: detail list, quote panel, sign-off — already assembled HTML. */
  body: string;
};

/**
 * The shared shell every email is poured into: an oversized HX mark on white,
 * a large headline, one brand colour on the single CTA, everything else quiet.
 *
 * Built on tables rather than divs: Outlook on Windows renders through Word,
 * which ignores max-width and much of the box model on div elements, so a
 * div-based layout collapses to full bleed there.
 */
function layout({
  preheader,
  eyebrow,
  headline,
  standfirst,
  accent,
  cta,
  body,
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
  <title>${escapeHtml(eyebrow)}</title>
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
      .dt-label { padding:14px 0 2px !important; border-top:0 !important; }
      .dt-value { padding:0 0 14px !important; border-top:0 !important; }
      .headline { font-size:26px !important; line-height:32px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#ffffff;">
  <div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">${escapeHtml(preheader)}</div>
  <div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;</div>

  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;background:#ffffff;">
    <tr>
      <td align="center" style="padding:32px 12px;">

        <table role="presentation" class="shell" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px;max-width:600px;background:#ffffff;">

          <tr>
            <td align="center" style="padding:56px 40px 0;">
              <img src="${COMPANY.logo}" width="${COMPANY.logoSize}" height="${COMPANY.logoSize}" alt="${COMPANY.name}"
                style="display:block;width:${COMPANY.logoSize}px;height:${COMPANY.logoSize}px;border:0;outline:none;text-decoration:none;font-family:${FONT};font-size:20px;font-weight:700;letter-spacing:2px;color:${INK};">
            </td>
          </tr>

          <tr>
            <td class="pad" align="center" style="padding:18px 56px 0;">
              <div style="font-family:${FONT};font-size:10.5px;line-height:16px;font-weight:700;letter-spacing:2.6px;text-transform:uppercase;color:${MUTED};">${escapeHtml(eyebrow)}</div>
              <h1 class="headline" style="margin:14px 0 0;font-family:${FONT};font-size:34px;line-height:40px;font-weight:700;letter-spacing:-1.1px;color:${INK};">${headline}</h1>
              <div style="height:18px;line-height:18px;font-size:0;">&nbsp;</div>
              <p style="margin:0;font-family:${FONT};font-size:15.5px;line-height:26px;color:${STANDFIRST};">${standfirst}</p>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:30px 40px 0;">${button(cta.href, cta.label, accent)}</td>
          </tr>

          <tr>
            <td class="pad" style="padding:44px 56px 0;">${body}</td>
          </tr>

          <tr>
            <td style="padding:44px 56px 0;font-size:0;line-height:0;">${colorStripe()}</td>
          </tr>

          <tr>
            <td class="pad" align="center" style="padding:24px 56px 56px;">
              <div style="font-family:${FONT};font-size:12px;line-height:20px;color:${MUTED};">
                <strong style="color:${STANDFIRST};letter-spacing:2px;">${COMPANY.name}</strong><br>
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

function signOff(): string {
  return `<p style="margin:0;font-family:${FONT};font-size:15px;line-height:26px;color:${STANDFIRST};">Warm regards,<br><strong style="color:${INK};">Team ${COMPANY.name}</strong></p>`;
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

  const body = `${detailList(rows)}
      ${gap(34)}
      ${quotePanel('Message', paragraph(data.message))}`;

  return layout({
    preheader: `${data.fullName} — ${data.service}. ${data.message.slice(0, 90)}`,
    eyebrow: 'Contact enquiry',
    headline: `${escapeHtml(firstName(data.fullName))} wrote in.`,
    standfirst: `${escapeHtml(data.fullName)} submitted an enquiry through the website. Replying goes straight back to them.`,
    accent: GOLD,
    cta: { href: `mailto:${escapeHtml(data.email)}`, label: `Reply to ${escapeHtml(firstName(data.fullName))}` },
    body,
  });
}

/** Confirmation sent to the person who submitted the form. */
export function userConfirmationEmail(data: ContactSubmission): string {
  const body = `${detailList([
    ['Service of interest', data.service],
    ['Phone', data.phone || 'Not provided'],
    ['Submitted', data.submittedAt],
  ])}
      ${gap(34)}
      ${quotePanel('What you sent us', paragraph(data.message))}
      ${gap(38)}
      ${signOff()}`;

  return layout({
    preheader: 'We have received your enquiry and will be in touch shortly.',
    eyebrow: 'Enquiry received',
    headline: `Thanks, ${escapeHtml(firstName(data.fullName))}.<br>We&rsquo;re on it.`,
    standfirst:
      'Your enquiry reached the team. Someone will write back within one business day &mdash; usually sooner.',
    accent: BLUE,
    cta: { href: COMPANY.site, label: 'Explore our work' },
    body,
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

  const body = `${detailList(rows)}
      ${gap(34)}
      ${quotePanel(
        'Cover letter',
        data.coverLetter
          ? paragraph(data.coverLetter)
          : `<span style="color:${MUTED};">Not provided</span>`
      )}`;

  return layout({
    preheader: `${data.name} applied for ${data.jobTitle}. Resume attached.`,
    eyebrow: 'Job application',
    headline: `${escapeHtml(firstName(data.name))} applied for<br>${escapeHtml(data.jobTitle)}.`,
    standfirst: `The applicant's resume is attached to this email. Replying goes straight back to ${escapeHtml(firstName(data.name))}.`,
    accent: CRIMSON,
    cta: { href: `mailto:${escapeHtml(data.email)}`, label: `Reply to ${escapeHtml(firstName(data.name))}` },
    body,
  });
}

/** Confirmation sent to the applicant. */
export function careerConfirmationEmail(data: CareerSubmission): string {
  const body = `${detailList([
    ['Position', data.jobTitle],
    ['Resume', data.resumeFileName],
    ['Submitted', data.submittedAt],
  ])}
      ${gap(38)}
      ${signOff()}`;

  return layout({
    preheader: `Your application for ${data.jobTitle} has been received.`,
    eyebrow: 'Application received',
    headline: `Thanks, ${escapeHtml(firstName(data.name))}.<br>We&rsquo;ve got it.`,
    standfirst: `We have received your application for the <strong style="color:${INK};">${escapeHtml(data.jobTitle)}</strong> role, along with your resume. Our hiring team reviews every application personally.`,
    accent: GREEN,
    cta: { href: COMPANY.site, label: 'Explore our work' },
    body,
  });
}

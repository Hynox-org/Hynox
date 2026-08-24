const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

const SENDER_NAME = 'HYNOX';

type Attachment = {
  /** Base64-encoded file contents. */
  content: string;
  name: string;
};

type SendEmailOptions = {
  to: { email: string; name?: string };
  subject: string;
  html: string;
  /** Where replies should go — used so the team can reply straight to the enquirer. */
  replyTo?: { email: string; name?: string };
  attachment?: Attachment[];
};

/** Env vars sendEmail cannot run without, in the order they are reported. */
export const REQUIRED_BREVO_ENV = ['BREVO_API_KEY', 'EMAIL_USER'] as const;

/**
 * A rejection from Brevo's API. Carries the HTTP status and Brevo's own error
 * code (e.g. "unauthorized", "invalid_parameter") so the cause can be
 * surfaced to the caller without echoing the whole response body.
 */
export class BrevoError extends Error {
  constructor(
    readonly status: number,
    readonly code: string
  ) {
    super(`Brevo responded ${status} (${code})`);
    this.name = 'BrevoError';
  }
}

function errorCode(body: string): string {
  try {
    const parsed = JSON.parse(body) as { code?: string; message?: string };
    return parsed.code ?? parsed.message ?? 'unknown';
  } catch {
    return 'unknown';
  }
}

/**
 * Sends a transactional email through Brevo's HTTP API. Throws on failure so
 * the caller can decide whether a given email is critical to the request.
 */
export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
  attachment,
}: SendEmailOptions): Promise<void> {
  // Keys pasted into a dashboard often arrive wrapped across lines, and a
  // header value containing a newline makes fetch throw before the request is
  // ever sent, so strip whitespace rather than fail on a cosmetic difference.
  const apiKey = process.env.BREVO_API_KEY?.replace(/\s/g, '');
  const sender = process.env.EMAIL_USER?.trim();

  if (!apiKey) throw new Error('BREVO_API_KEY is not configured');
  if (!sender) throw new Error('EMAIL_USER is not configured');

  const res = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify({
      sender: { email: sender, name: SENDER_NAME },
      to: [to],
      subject,
      htmlContent: html,
      ...(replyTo ? { replyTo } : {}),
      ...(attachment?.length ? { attachment } : {}),
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error(`Brevo rejected the send (${res.status}):`, detail);
    throw new BrevoError(res.status, errorCode(detail));
  }
}

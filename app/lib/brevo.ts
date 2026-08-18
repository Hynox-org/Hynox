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
  const apiKey = process.env.BREVO_API_KEY;
  const sender = process.env.EMAIL_USER;

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
    throw new Error(`Brevo responded ${res.status}: ${detail}`);
  }
}

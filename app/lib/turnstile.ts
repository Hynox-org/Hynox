const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/**
 * Validates a Turnstile token against Cloudflare. Returns false for any
 * failure (missing token, missing secret, network error, rejected token) so
 * callers can treat it as a simple pass/fail gate.
 */
export async function verifyTurnstileToken(
  token: string | undefined,
  remoteIp?: string
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    console.error('Turnstile: TURNSTILE_SECRET_KEY is not configured');
    return false;
  }
  if (!token) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set('remoteip', remoteIp);

  try {
    const res = await fetch(VERIFY_URL, { method: 'POST', body });
    const data = (await res.json()) as {
      success: boolean;
      'error-codes'?: string[];
    };

    if (!data.success) {
      console.warn('Turnstile verification failed:', data['error-codes']);
    }
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification request failed:', error);
    return false;
  }
}

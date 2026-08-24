import { JWT } from 'google-auth-library';

const SHEETS_API = 'https://sheets.googleapis.com/v4/spreadsheets';
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export type SheetRecord = Record<string, string>;

/**
 * Private keys are stored in the environment on a single line with literal
 * "\n" sequences, which have to be turned back into real newlines before the
 * PEM can be parsed.
 */
function getPrivateKey(): string {
  const key = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  if (!key) throw new Error('GOOGLE_SHEETS_PRIVATE_KEY is not configured');
  return key.replace(/\\n/g, '\n');
}

async function getAccessToken(): Promise<string> {
  const email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  if (!email) throw new Error('GOOGLE_SHEETS_CLIENT_EMAIL is not configured');

  const client = new JWT({ email, key: getPrivateKey(), scopes: SCOPES });
  const { token } = await client.getAccessToken();
  if (!token) throw new Error('Google returned an empty access token');
  return token;
}

async function sheetsFetch(
  token: string,
  path: string,
  init?: RequestInit
): Promise<unknown> {
  const res = await fetch(`${SHEETS_API}/${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
      ...init?.headers,
    },
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Google Sheets responded ${res.status}: ${detail}`);
  }
  return res.json();
}

/** "Full Name" and "fullName" should both match the fullName field. */
function normalizeHeader(header: string): string {
  return header.toLowerCase().replace(/[^a-z0-9]/g, '');
}

async function getFirstTabTitle(token: string, sheetId: string): Promise<string> {
  const meta = (await sheetsFetch(
    token,
    `${sheetId}?fields=sheets.properties.title`
  )) as { sheets?: { properties: { title: string } }[] };

  const title = meta.sheets?.[0]?.properties.title;
  if (!title) throw new Error(`Spreadsheet ${sheetId} has no tabs`);
  return title;
}

async function getHeaderRow(
  token: string,
  sheetId: string,
  tab: string
): Promise<string[]> {
  const range = encodeURIComponent(`${tab}!A1:Z1`);
  const result = (await sheetsFetch(token, `${sheetId}/values/${range}`)) as {
    values?: string[][];
  };
  return result.values?.[0] ?? [];
}

/**
 * Appends a submission to the spreadsheet, ordering the values to match the
 * sheet's existing header row so we write into the columns it already uses.
 * If the sheet is empty, the record's own keys are written as the header row.
 */
export async function appendToSheet(
  sheetId: string,
  record: SheetRecord
): Promise<void> {
  const token = await getAccessToken();
  const tab = await getFirstTabTitle(token, sheetId);
  let headers = await getHeaderRow(token, sheetId, tab);

  if (headers.length === 0) {
    headers = Object.keys(record);
    await sheetsFetch(
      token,
      `${sheetId}/values/${encodeURIComponent(`${tab}!A1`)}?valueInputOption=RAW`,
      { method: 'PUT', body: JSON.stringify({ values: [headers] }) }
    );
  }

  // Index the record by normalized key so it can be looked up per column.
  const byNormalizedKey = new Map(
    Object.entries(record).map(([key, value]) => [normalizeHeader(key), value])
  );

  const row = headers.map((header) => {
    const normalized = normalizeHeader(header);
    const value = byNormalizedKey.get(normalized);
    byNormalizedKey.delete(normalized);
    return value ?? '';
  });

  // Anything left over has no column in the sheet — surface it rather than
  // silently dropping submitted data.
  if (byNormalizedKey.size > 0) {
    console.warn(
      'Google Sheets: no matching column for fields:',
      [...byNormalizedKey.keys()].join(', ')
    );
  }

  await sheetsFetch(
    token,
    `${sheetId}/values/${encodeURIComponent(`${tab}!A1`)}:append` +
      '?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS',
    { method: 'POST', body: JSON.stringify({ values: [row] }) }
  );
}

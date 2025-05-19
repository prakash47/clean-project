import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

// Lazy-initialize the Google Sheets client to avoid build-time execution
let sheetsClient: ReturnType<typeof google.sheets> | null = null;

const initializeSheetsClient = () => {
  if (sheetsClient) {
    return sheetsClient;
  }

  const credentials = process.env.GOOGLE_SHEETS_CREDENTIALS;
  if (!credentials) {
    throw new Error('GOOGLE_SHEETS_CREDENTIALS environment variable is not set');
  }

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(credentials),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  sheetsClient = google.sheets({ version: 'v4', auth });
  return sheetsClient;
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    name,
    email,
    phone,
    company,
    service,
    requirements,
    contactMethod,
    agreePrivacy,
  } = body;

  try {
    // Initialize the client at runtime
    const sheets = initializeSheetsClient();

    // Validate GOOGLE_SHEET_ID
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID environment variable is not set');
    }

    // Prepare the data to append to the Google Sheet
    const timestamp = new Date().toISOString();
    const values = [
      [
        timestamp, // Date
        name,
        email,
        phone,
        company || 'Not provided',
        Array.isArray(service) ? service.join(', ') : service, // Convert array to comma-separated string
        requirements,
        contactMethod,
        agreePrivacy ? 'Yes' : 'No',
      ],
    ];

    // Append the data to the Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:I',
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    });

    return NextResponse.json({ message: 'Data successfully sent to Google Sheets' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error sending data to Google Sheets:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Failed to send data to Google Sheets', error: errorMessage }, { status: 500 });
  }
}
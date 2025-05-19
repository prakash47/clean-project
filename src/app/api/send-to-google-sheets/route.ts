import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Google Sheets API client
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS!),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

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
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
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
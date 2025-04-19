/* eslint-disable */
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Dynamic params
    const title = searchParams.get('title') || 'Intention Infoservice';
    const description = searchParams.get('description') || 'Web Design, Development, Mobile Apps, Digital Marketing, and Custom Business Solutions';
    
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#f8fafc',
            padding: '40px'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '40px',
              width: '90%',
              height: '80%'
            }}
          >
            <div
              style={{
                fontSize: '60px',
                fontWeight: 'bold',
                color: '#3b82f6',
                marginBottom: '20px',
                textAlign: 'center'
              }}
            >
              Intention Infoservice
            </div>
            <div
              style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#1e293b',
                marginBottom: '20px',
                textAlign: 'center'
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: '24px',
                color: '#64748b',
                textAlign: 'center',
                maxWidth: '80%'
              }}
            >
              {description}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630
      }
    );
  } catch (e) {
    console.log(`Error generating OG image: ${e}`);
    return new Response('Failed to generate OG image', { status: 500 });
  }
}

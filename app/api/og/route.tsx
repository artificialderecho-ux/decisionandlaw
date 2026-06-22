import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const stateName = searchParams.get('name') || 'State';
  const stateAbbr = searchParams.get('state') || 'ST';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0b3d91 0%, #0057d8 60%, #3b82f6 100%)',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: 2, marginBottom: 16 }}>
            {stateAbbr}
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, textAlign: 'center', maxWidth: 980 }}>
            {stateName} AI Law
          </div>
          <div style={{ marginTop: 24, fontSize: 32, opacity: 0.95 }}>
            Decision&Law
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

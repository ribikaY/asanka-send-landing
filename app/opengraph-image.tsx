import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Asanka Send - Manage Money Back Home';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  try {
    // Get base URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
    
    // Image URLs
    const logoUrl = `${baseUrl}/images/logo/logo.svg`;
    const mockupUrl = `${baseUrl}/images/mock-ups/hero-mockup.png`;

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            background: 'linear-gradient(135deg, #b1efd1 0%, #FFE7AD 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Modern background pattern overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(7, 113, 57, 0.08) 0%, transparent 50%)',
              // zIndex: 1,
            }}
          />

          {/* Left side - Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '50px 90px 70px 90px',
              flex: '0 0 55%',
              position: 'relative',
              // zIndex: 2,
            }}
          >
            {/* Logo */}
            <div
              style={{
                display: 'flex',
              }}
            >
              <img
                src={logoUrl}
                alt="Asanka Send Logo"
                width={200}
                height={50}
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Main headline with modern styling */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginTop: 'auto',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <h1
                  style={{
                    fontSize: '70px',
                    fontWeight: 700,
                    lineHeight: 0.95,
                    color: '#043F00',
                    margin: 0,
                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.04em',
                    textShadow: '0 2px 20px rgba(53, 216, 41, 0.1)',
                  }}
                >
                  Manage Money
                </h1>
                <h2
                  style={{
                    fontSize: '70px',
                    fontWeight: 700,
                    lineHeight: 0.95,
                    color: '#043F00',
                    margin: 0,
                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: '-0.04em',
                    textShadow: '0 2px 20px rgba(4, 63, 0, 0.1)',
                  }}
                >
                  Back Home
                </h2>
              </div>
              
              {/* Modern accent design */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginTop: '12px',
                }}
              >
                <div
                  style={{
                    width: '100px',
                    height: '6px',
                    background: 'linear-gradient(90deg, #077139 0%, #b1efd1 100%)',
                    borderRadius: '4px',
                    boxShadow: '0 2px 8px rgba(7, 113, 57, 0.2)',
                  }}
                />
                <div
                  style={{
                    width: '60px',
                    height: '6px',
                    background: 'linear-gradient(90deg, #b1efd1 0%, rgba(177, 239, 209, 0.4) 100%)',
                    borderRadius: '4px',
                  }}
                />
                <div
                  style={{
                    width: '30px',
                    height: '6px',
                    background: 'linear-gradient(90deg, rgba(177, 239, 209, 0.4) 0%, rgba(177, 239, 209, 0.1) 100%)',
                    borderRadius: '4px',
                  }}
                />
              </div>

              {/* Subtle tagline */}
              <div
                style={{
                  display: 'flex',
                  marginTop: '26px',
                }}
              >
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#077139',
                    opacity: 0.8,
                    letterSpacing: '0.02em',
                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  }}
                >
                  Send money globally with confidence
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Mockup with modern effects */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              flex: '0 0 45%',
              position: 'relative',
              padding: '50px 40px',
              paddingBottom: '0px',
              // zIndex: 2,
            }}
          >
            {/* Mockup container with modern shadow and glow */}
            <div
              style={{
                display: 'flex',
                position: 'relative',
                // zIndex: 1,
                filter: 'drop-shadow(0 40px 80px rgba(4, 63, 0, 0.2)) drop-shadow(0 0 60px rgba(7, 113, 57, 0.15))',
                transform: 'translateY(10px)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                }}
              >
                <img
                  src={mockupUrl}
                  alt="Hero Mockup"
                  width={550}
                  height={630}
                  style={{
                    objectFit: 'contain',
                    borderRadius: '40px',
                  }}
                />
              </div>
            </div>
          </div>
      </div>
      ),
      {
        ...size,
      }
    );
  } catch (error: unknown) {
    console.error('Error generating OpenGraph image:', error);
    // Fallback image
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            background: 'linear-gradient(135deg, #b1efd1 0%, #FFE7AD 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Modern background pattern overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(7, 113, 57, 0.08) 0%, transparent 50%)',
              // zIndex: 1,
            }}
          />

          {/* Left side - Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '50px 90px',
              flex: '0 0 55%',
              position: 'relative',
              // zIndex: 2,
            }}
          >
            {/* Logo placeholder */}
            <div
              style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#043F00',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              Asanka Send
            </div>

            {/* Main headline */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginTop: 'auto',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <h1
                  style={{
                    fontSize: '70px',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: '#043F00',
                    margin: 0,
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    letterSpacing: '-0.04em',
                    textShadow: '0 2px 20px rgba(4, 63, 0, 0.1)',
                  }}
                >
                  Manage Money
                </h1>
                <h2
                  style={{
                    fontSize: '70px',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: '#043F00',
                    margin: 0,
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    letterSpacing: '-0.04em',
                    textShadow: '0 2px 20px rgba(4, 63, 0, 0.1)',
                  }}
                >
                  Back Home
                </h2>
              </div>
              
              {/* Modern accent design */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginTop: '12px',
                }}
              >
                <div
                  style={{
                    width: '100px',
                    height: '6px',
                    background: 'linear-gradient(90deg, #077139 0%, #b1efd1 100%)',
                    borderRadius: '4px',
                    boxShadow: '0 2px 8px rgba(7, 113, 57, 0.2)',
                  }}
                />
                <div
                  style={{
                    width: '60px',
                    height: '6px',
                    background: 'linear-gradient(90deg, #b1efd1 0%, rgba(177, 239, 209, 0.4) 100%)',
                    borderRadius: '4px',
                  }}
                />
                <div
                  style={{
                    width: '30px',
                    height: '6px',
                    background: 'linear-gradient(90deg, rgba(177, 239, 209, 0.4) 0%, rgba(177, 239, 209, 0.1) 100%)',
                    borderRadius: '4px',
                  }}
                />
              </div>

              {/* Subtle tagline */}
              <div
                style={{
                  marginTop: '26px',
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#077139',
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  opacity: 0.8,
                  letterSpacing: '0.02em',
                }}
              >
                Send money globally with confidence
              </div>
            </div>
          </div>

          {/* Right side - Empty space for mockup */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              flex: '0 0 45%',
              position: 'relative',
              padding: '50px 40px',
              paddingBottom: '0px',
              // zIndex: 2,
            }}
          >
            <div
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: '#077139',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                opacity: 0.6,
              }}
            >
              Asanka Send
            </div>
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  }
}

import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export const alt = 'TaskPulse - turn notes into a task board';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#060a0a',
          position: 'relative',
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        {/* Gradient glow */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '600px',
            background: 'radial-gradient(ellipse, rgba(13,148,136,0.25) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Logo */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '28px',
              background: 'linear-gradient(135deg, #2dd4bf 0%, #0f766e 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
              boxShadow: '0 0 80px rgba(13,148,136,0.5)',
            }}
          >
            <svg
              width="70"
              height="70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7v7"/><path d="M12 7v4"/><path d="M16 7v9"/>
            </svg>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: '#e0e0ea',
              marginBottom: '20px',
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            TaskPulse
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '36px',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #e0e0ea 0%, #787896 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '30px',
              textAlign: 'center',
            }}
          >
            Turn Notes Into a Task Board
          </div>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '20px',
            }}
          >
            {['Open-weight AI', 'Burnout Prevention', 'Free Forever'].map((feature) => (
              <div
                key={feature}
                style={{
                  padding: '12px 24px',
                  borderRadius: '100px',
                  background: 'rgba(13,148,136,0.12)',
                  border: '1px solid rgba(13,148,136,0.3)',
                  color: '#0d9488',
                  fontSize: '20px',
                  fontWeight: 600,
                }}
              >
                {feature}
              </div>
            ))}
          </div>

          {/* Bottom text */}
          <div
            style={{
              marginTop: '50px',
              fontSize: '24px',
              color: '#787896',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
              }}
            />
            taskpulse.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

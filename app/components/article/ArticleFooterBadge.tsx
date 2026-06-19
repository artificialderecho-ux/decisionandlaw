interface ArticleFooterBadgeProps {
  dffLink?: string;
}

export default function ArticleFooterBadge({
  dffLink = 'https://www.digitaldubai.ae/',
}: ArticleFooterBadgeProps) {
  return (
    <aside
      style={{
        marginTop: '64px',
        paddingTop: '32px',
        borderTop: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px',
        }}
      >
        <div
          style={{
            flexShrink: 0,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid rgba(0,0,0,0.1)',
            backgroundColor: 'rgba(0,0,0,0.03)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px',
          }}
        >
          <img
            src="/images/human-led-machine-oversight.svg"
            alt="DFF HMC — Human-Led, Machine Oversight"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div>
          <p
            style={{
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: '#6e6e73',
              margin: 0,
              marginBottom: '4px',
            }}
          >
            Liderado por humanos · Supervisado por IA
          </p>
          <p
            style={{
              fontSize: '14px',
              color: '#6e6e73',
              lineHeight: '1.625',
              maxWidth: '480px',
              margin: 0,
              marginBottom: '4px',
            }}
          >
            Contenido liderado por humanos con supervisión, revisión y corrección
            asistida por inteligencia artificial.
          </p>
          <a
            href={dffLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              fontSize: '12px',
              color: 'rgba(110,110,115,0.6)',
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0066cc';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(110,110,115,0.6)';
            }}
          >
            DFF HMC Classification System
          </a>
        </div>
      </div>
    </aside>
  );
}

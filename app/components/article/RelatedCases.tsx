import Link from 'next/link';

interface RelatedCase {
  title: string;
  slug: string;
}

interface RelatedCasesProps {
  cases: RelatedCase[];
}

export function RelatedCases({ cases }: RelatedCasesProps) {
  return (
    <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      <h2 style={{ 
        fontSize: '14px', 
        fontWeight: '600', 
        marginBottom: '20px', 
        color: '#6e6e73',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.08em'
      }}>
        Related Coverage
      </h2>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px'
      }}>
        {cases.map((caseItem, index) => (
          <Link
            key={index}
            href={`/news/${caseItem.slug}`}
            style={{ textDecoration: 'none' }}
          >
            <div style={{ 
              backgroundColor: '#fafafa', 
              border: '1px solid rgba(0,0,0,0.06)',
              borderRadius: '10px',
              padding: '20px 24px',
              transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '16px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0066cc';
              e.currentTarget.style.backgroundColor = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
              e.currentTarget.style.backgroundColor = '#fafafa';
            }}
            >
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  fontSize: '14px', 
                  fontWeight: '600', 
                  marginBottom: '6px', 
                  color: '#1a1a1a',
                  lineHeight: 1.3
                }}>
                  {caseItem.title}
                </h3>
                <span style={{ 
                  fontSize: '12px', 
                  color: '#0066cc',
                  fontWeight: '500',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  Read analysis
                  <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {cases.length === 0 && (
        <div style={{ textAlign: 'center', padding: '32px 0' }}>
          <p style={{ color: '#6e6e73', fontSize: '14px' }}>No related cases available at this time.</p>
        </div>
      )}
    </div>
  );
}

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
    <div style={{ marginTop: '48px' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: '#1a1a1a' }}>Related Coverage</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((case_, index) => (
          <Link
            key={index}
            href={`/news/${case_.slug}`}
            style={{ textDecoration: 'none' }}
          >
            <div style={{ 
              backgroundColor: '#ffffff', 
              border: '1px solid #e5e5e5',
              padding: '24px',
              transition: 'all 0.3s',
            }}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>
                    {case_.title}
                  </h3>
                </div>
                <svg className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#1a1a1a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              <div className="flex items-center text-sm" style={{ color: '#737373' }}>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <span>Read full analysis</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {cases.length === 0 && (
        <div className="text-center py-8">
          <p style={{ color: '#737373' }}>No related cases available at this time.</p>
        </div>
      )}
    </div>
  );
}

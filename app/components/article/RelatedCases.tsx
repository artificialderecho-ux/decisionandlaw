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
    <div className="my-12">
      <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Related Coverage</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((case_, index) => (
          <Link
            key={index}
            href={`/news/${case_.slug}`}
            className="group bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/50 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {case_.title}
                </h3>
              </div>
              <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            
            <div className="flex items-center text-sm text-gray-400">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span>Read full analysis</span>
            </div>
          </Link>
        ))}
      </div>
      
      {cases.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-400">No related cases available at this time.</p>
        </div>
      )}
    </div>
  );
}

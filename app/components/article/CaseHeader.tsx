'use client';

interface CaseHeaderProps {
  caseName: string;
  caseNumber: string;
  court: string;
  date: string;
  status: 'pre-trial' | 'decided' | 'appealed';
  aiTool: string;
  keyIssue: string;
}

export function CaseHeader({
  caseName,
  caseNumber,
  court,
  date,
  status,
  aiTool,
  keyIssue
}: CaseHeaderProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pre-trial':
        return 'bg-stone-100 text-stone-700 border-stone-300';
      case 'decided':
        return 'bg-stone-100 text-stone-700 border-stone-300';
      case 'appealed':
        return 'bg-stone-100 text-stone-700 border-stone-300';
      default:
        return 'bg-stone-100 text-stone-700 border-stone-300';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pre-trial':
        return 'Pre-Trial';
      case 'decided':
        return 'Decided';
      case 'appealed':
        return 'Appealed';
      default:
        return 'Unknown';
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
      <div className="container mx-auto px-4 py-8">
        {/* Status Badge */}
        <div className="mb-6">
          <span className={`px-4 py-2 text-sm font-medium border ${getStatusColor(status)}`}>
            {getStatusText(status)}
          </span>
        </div>

        {/* Case Name */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: '#1a1a1a' }}>
          {caseName}
        </h1>

        {/* Metadata Row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm mb-6" style={{ color: '#737373' }}>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>{caseNumber}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>{court}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{date}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>AI Tool: {aiTool}</span>
          </div>
        </div>

        {/* Key Issue */}
        <div style={{ backgroundColor: '#f4f4f5', borderLeft: '4px solid #1a1a1a', padding: '24px' }}>
          <div className="flex items-start space-x-3">
            <svg className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#1a1a1a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1a1a1a' }}>Key Issue</h3>
              <p className="leading-relaxed" style={{ color: '#737373' }}>{keyIssue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
        return 'rgba(0,102,204,0.08)';
      case 'decided':
        return 'rgba(34,197,94,0.1)';
      case 'appealed':
        return 'rgba(234,179,8,0.1)';
      default:
        return 'rgba(0,0,0,0.04)';
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'pre-trial':
        return '#0066cc';
      case 'decided':
        return '#16a34a';
      case 'appealed':
        return '#ca8a04';
      default:
        return '#6e6e73';
    }
  };

  const getStatusLabel = (status: string) => {
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
    <div style={{ backgroundColor: '#fafafa', borderRadius: '12px', padding: '32px', marginBottom: '32px', border: '1px solid rgba(0,0,0,0.06)' }}>
      {/* Status Badge */}
      <div style={{ marginBottom: '20px' }}>
        <span style={{
          display: 'inline-block',
          padding: '6px 14px',
          fontSize: '11px',
          fontWeight: '600',
          letterSpacing: '0.06em',
          textTransform: 'uppercase' as const,
          backgroundColor: getStatusColor(status),
          color: getStatusTextColor(status),
          borderRadius: '6px',
        }}>
          {getStatusLabel(status)}
        </span>
      </div>

      {/* Case Name */}
      <h1 style={{ 
        fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', 
        fontWeight: '700', 
        marginBottom: '24px', 
        color: '#1a1a1a',
        lineHeight: 1.15,
        letterSpacing: '-0.02em'
      }}>
        {caseName}
      </h1>

      {/* Metadata Row */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap' as const, 
        gap: '24px', 
        fontSize: '13px', 
        marginBottom: '24px',
        color: '#6e6e73'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <span>{caseNumber}</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
          </svg>
          <span>{court}</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
          <span>{date}</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
          </svg>
          <span style={{ color: '#0066cc', fontWeight: '500' }}>{aiTool}</span>
        </div>
      </div>

      {/* Key Issue */}
      <div style={{ 
        backgroundColor: '#ffffff', 
        borderLeft: '3px solid #0066cc', 
        padding: '20px 24px',
        borderRadius: '0 8px 8px 0'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          <svg width="20" height="20" style={{ color: '#0066cc', flexShrink: 0, marginTop: '2px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a', textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>Key Issue</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#6e6e73', margin: 0 }}>{keyIssue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

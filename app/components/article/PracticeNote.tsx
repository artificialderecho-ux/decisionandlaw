interface PracticeNoteProps {
  title: string;
  children: React.ReactNode;
}

export function PracticeNote({ title, children }: PracticeNoteProps) {
  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      border: '1px solid rgba(0,0,0,0.08)', 
      padding: '28px', 
      margin: '32px 0',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
        <div style={{ 
          width: '44px', 
          height: '44px', 
          backgroundColor: '#fafafa',
          border: '1px solid rgba(0,0,0,0.06)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <svg width="20" height="20" style={{ color: '#0066cc' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
        </div>
        
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: '#1a1a1a', letterSpacing: '-0.01em' }}>{title}</h3>
          <div style={{ fontSize: '14px', color: '#6e6e73', lineHeight: 1.7 }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

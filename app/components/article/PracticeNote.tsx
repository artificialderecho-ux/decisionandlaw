interface PracticeNoteProps {
  title: string;
  children: React.ReactNode;
}

export function PracticeNote({ title, children }: PracticeNoteProps) {
  return (
    <div style={{ backgroundColor: '#f4f4f5', border: '1px solid #e5e5e5', padding: '24px', margin: '32px 0' }}>
      <div className="flex items-start space-x-4">
        <div style={{ 
          width: '48px', 
          height: '48px', 
          backgroundColor: '#ffffff',
          border: '1px solid #e5e5e5',
          borderRadius: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <svg className="w-6 h-6" style={{ color: '#1a1a1a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
        </div>
        
        <div className="flex-1">
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '16px', color: '#1a1a1a' }}>{title}</h3>
          <div style={{ color: '#737373', lineHeight: '1.75' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

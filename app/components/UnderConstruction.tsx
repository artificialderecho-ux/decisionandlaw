export default function UnderConstruction({ section }: { section?: string }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6" style={{ backgroundColor: '#ffffff' }}>
      <div style={{ 
        border: '1px solid #e5e5e5', 
        borderRadius: '0', 
        padding: '48px', 
        maxWidth: '32rem', 
        margin: '0 auto',
        backgroundColor: '#f4f4f5'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '24px' }}>⚖</div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '12px', color: '#1a1a1a' }}>
          {section || 'This Section'} Is Coming Soon
        </h1>
        <p style={{ color: '#737373', marginBottom: '32px' }}>
          We're building something worth reading. Check back soon.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/" 
             style={{
               padding: '10px 20px', 
               backgroundColor: '#1a1a1a', 
               color: '#ffffff', 
               fontWeight: '600',
               fontSize: '0.875rem',
               textDecoration: 'none',
               transition: 'all 0.2s'
             }}>
            Back to Home
          </a>
          <a href="/news" 
             style={{
               padding: '10px 20px', 
               border: '1px solid #1a1a1a', 
               color: '#1a1a1a',
               fontSize: '0.875rem',
               textDecoration: 'none',
               transition: 'all 0.2s',
               backgroundColor: 'transparent'
             }}>
            Read Latest News
          </a>
        </div>
      </div>
    </div>
  )
}

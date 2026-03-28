interface KeyTakeawaysProps {
  items: string[];
}

export function KeyTakeaways({ items }: KeyTakeawaysProps) {
  return (
    <div style={{ backgroundColor: '#f4f4f5', borderLeft: '4px solid #1a1a1a', padding: '32px', margin: '32px 0' }}>
      <div className="flex items-center space-x-3 mb-6">
        <svg className="w-6 h-6" style={{ color: '#1a1a1a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-2xl font-bold" style={{ color: '#1a1a1a' }}>Key Takeaways for Practitioners</h2>
      </div>
      
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#e5e5e5' }}>
              <svg className="w-4 h-4" style={{ color: '#1a1a1a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="leading-relaxed" style={{ color: '#737373' }}>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

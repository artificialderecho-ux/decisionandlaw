'use client';

import Link from 'next/link';

interface ArticleDisclaimerProps {
  lastModified?: string;
}

export default function ArticleDisclaimer({ lastModified }: ArticleDisclaimerProps) {
  return (
    <>
      {/* Top disclaimer banner */}
      <div style={{
        backgroundColor: '#fef9c3',
        border: '1px solid #fef08a',
        borderRadius: '12px',
        padding: '16px 20px',
        marginBottom: '32px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
      }}>
        <svg width="20" height="20" fill="none" stroke="#ca8a04" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: '2px' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <div>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#854d0e', marginBottom: '4px' }}>
            Educational Content – Not Legal Advice
          </p>
          <p style={{ margin: 0, fontSize: '13px', color: '#92400e', lineHeight: 1.5 }}>
            This article provides general information. Consult a qualified attorney before taking action.
          </p>
        </div>
      </div>

      {/* Bottom disclaimer */}
      <div style={{
        marginTop: '48px',
        paddingTop: '32px',
        borderTop: '1px solid rgba(0,0,0,0.08)',
      }}>
        <div style={{
          backgroundColor: '#fafafa',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '24px',
        }}>
          <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px' }}>
            Disclaimer
          </h4>
          <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#6e6e73', marginBottom: '12px' }}>
            This analysis is for educational purposes only and does not constitute legal advice. The information provided is general in nature and may not apply to your specific situation. Laws and regulations change frequently; verify current requirements with qualified legal counsel in your jurisdiction.
          </p>
          <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#6e6e73', margin: 0 }}>
            <strong>Last Updated:</strong> {lastModified ? new Date(lastModified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Recently'}
          </p>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '13px' }}>
          <Link 
            href="/disclaimer"
            style={{ color: '#0066cc', textDecoration: 'none', fontWeight: '500' }}
          >
            Full Disclaimer
          </Link>
          <span style={{ color: '#d2d2d7' }}>|</span>
          <a 
            href="mailto:artificialderecho@gmail.com"
            style={{ color: '#0066cc', textDecoration: 'none', fontWeight: '500' }}
          >
            Report an Error
          </a>
        </div>
      </div>
    </>
  );
}

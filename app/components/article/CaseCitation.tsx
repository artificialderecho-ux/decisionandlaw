'use client';

import { useState } from 'react';

interface CaseCitationProps {
  caseName: string;
  caseNumber: string;
  court: string;
  document: string;
  docket: string;
  date: string;
}

export function CaseCitation({
  caseName,
  caseNumber,
  court,
  document,
  docket,
  date
}: CaseCitationProps) {
  const [copied, setCopied] = useState(false);

  const citation = `${caseName}, ${caseNumber}, ${court} (${date}) (${document}) (Docket No. ${docket})`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(citation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy citation:', err);
    }
  };

  return (
    <div style={{ backgroundColor: '#f4f4f5', border: '1px solid #e5e5e5', padding: '24px', margin: '32px 0' }}>
      <div className="flex items-center justify-between mb-4">
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1a1a1a' }}>Legal Citation</h3>
        <button
          onClick={copyToClipboard}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: '#ffffff',
            color: '#1a1a1a',
            border: '1px solid #e5e5e5',
            borderRadius: '0',
            cursor: 'pointer',
            fontSize: '0.875rem',
          }}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', padding: '16px', marginBottom: '16px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', lineHeight: '1.6', color: '#1a1a1a' }}>
          {citation}
        </p>
      </div>
      
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <span style={{ color: '#a1a1aa' }}>Case Name:</span>
          <span style={{ color: '#737373', marginLeft: '8px' }}>{caseName}</span>
        </div>
        <div>
          <span style={{ color: '#a1a1aa' }}>Case Number:</span>
          <span style={{ color: '#737373', marginLeft: '8px' }}>{caseNumber}</span>
        </div>
        <div>
          <span style={{ color: '#a1a1aa' }}>Court:</span>
          <span style={{ color: '#737373', marginLeft: '8px' }}>{court}</span>
        </div>
        <div>
          <span style={{ color: '#a1a1aa' }}>Date:</span>
          <span style={{ color: '#737373', marginLeft: '8px' }}>{date}</span>
        </div>
        <div>
          <span style={{ color: '#a1a1aa' }}>Document:</span>
          <span style={{ color: '#737373', marginLeft: '8px' }}>{document}</span>
        </div>
        <div>
          <span style={{ color: '#a1a1aa' }}>Docket No.:</span>
          <span style={{ color: '#737373', marginLeft: '8px' }}>{docket}</span>
        </div>
      </div>
    </div>
  );
}

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
    <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-6 my-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[#D4AF37]">Legal Citation</h3>
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-2 px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-lg hover:bg-[#D4AF37]/20 transition-colors"
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
              <span className="sr-only">Copy Citation</span>
            </>
          )}
        </button>
      </div>
      
      <div className="bg-[#0A0A0A] border border-[#D4AF37]/10 rounded-lg p-4">
        <p className="text-gray-300 font-mono text-sm leading-relaxed">
          {citation}
        </p>
      </div>
      
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-500">Case Name:</span>
          <span className="text-gray-300 ml-2">{caseName}</span>
        </div>
        <div>
          <span className="text-gray-500">Case Number:</span>
          <span className="text-gray-300 ml-2">{caseNumber}</span>
        </div>
        <div>
          <span className="text-gray-500">Court:</span>
          <span className="text-gray-300 ml-2">{court}</span>
        </div>
        <div>
          <span className="text-gray-500">Date:</span>
          <span className="text-gray-300 ml-2">{date}</span>
        </div>
        <div>
          <span className="text-gray-500">Document:</span>
          <span className="text-gray-300 ml-2">{document}</span>
        </div>
        <div>
          <span className="text-gray-500">Docket No.:</span>
          <span className="text-gray-300 ml-2">{docket}</span>
        </div>
      </div>
    </div>
  );
}

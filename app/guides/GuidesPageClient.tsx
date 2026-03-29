'use client';

import { useState } from 'react';
import Link from 'next/link';

const GUIDES = [
  {
    slug: 'ai-adoption-law-firms',
    title: 'AI Adoption in Law Firms: A Practical Framework',
    audience: 'Law firm leaders, practice managers, innovation officers',
    description: 'A step-by-step framework for evaluating, selecting, and implementing AI tools in legal practice. Includes a 12-month adoption roadmap.',
    readTime: '20 min',
    icon: 'building',
  },
  {
    slug: 'contract-review-ai',
    title: 'Contract Review with AI: From Pilot to Production',
    audience: 'Corporate counsel, contract managers, legal ops',
    description: 'How to move from testing AI contract review tools to enterprise-scale deployment. Covers data preparation, playbook configuration, and ROI measurement.',
    readTime: '18 min',
    icon: 'document',
  },
  {
    slug: 'ai-governance-ethics-legal-teams',
    title: 'AI Governance & Ethics for Legal Teams',
    audience: 'Compliance officers, GCs, risk managers',
    description: 'Establishing responsible AI policies, evaluating bias in legal AI tools, and navigating emerging regulations like the EU AI Act.',
    readTime: '25 min',
    icon: 'shield',
  },
  {
    slug: 'e-discovery-generative-ai-era',
    title: 'E-Discovery in the Generative AI Era',
    audience: 'Litigation support, e-discovery specialists, trial attorneys',
    description: 'How generative AI is transforming document review, managing AI-generated data, and preserving chain of custody in AI environments.',
    readTime: '22 min',
    icon: 'search',
  },
  {
    slug: 'ai-powered-legal-research-workflow',
    title: 'Building an AI-Powered Legal Research Workflow',
    audience: 'Litigators, researchers, law students',
    description: 'Moving beyond Boolean search to semantic retrieval. Best practices for combining AI research tools with primary source validation.',
    readTime: '15 min',
    icon: 'book',
  },
  {
    slug: 'roi-legal-ai',
    title: 'ROI of Legal AI: Metrics That Matter',
    audience: 'GCs, CFOs, legal ops, firm administrators',
    description: 'Beyond billable hours — measuring quality, consistency, and time-to-value. Frameworks for building the business case to leadership.',
    readTime: '20 min',
    icon: 'chart',
  },
];

const ICONS: Record<string, React.ReactNode> = {
  building: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
    </svg>
  ),
  document: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  search: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  book: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  ),
  chart: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
};

export default function GuidesPage() {
  const [hoveredGuide, setHoveredGuide] = useState<string | null>(null);

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 48px) clamp(48px, 8vw, 80px)' }}>
        <div style={{ marginBottom: 'clamp(32px, 6vw, 48px)' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0066cc', marginBottom: '12px' }}>
            AI Legal Practice Guides
          </div>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '700',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            color: '#1a1a1a',
            marginBottom: '16px',
          }}>
            Practice Guides
          </h1>
          <p style={{
            fontSize: '15px',
            lineHeight: '1.6',
            color: '#6e6e73',
            maxWidth: '560px',
            marginBottom: '12px',
          }}>
            Practical frameworks for legal professionals implementing AI. Each guide is designed to move from concept to action — whether you are evaluating tools, building policies, or measuring outcomes.
          </p>
          <p style={{ fontSize: '12px', color: '#8e8e93' }}>
            Last updated: March 2026
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '16px',
          marginBottom: 'clamp(32px, 5vw, 48px)',
        }}>
          {GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#ffffff',
                border: hoveredGuide === guide.slug ? '1px solid #0066cc' : '1px solid rgba(0,0,0,0.08)',
                borderRadius: '12px',
                padding: '28px 24px',
                textDecoration: 'none',
                transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                boxShadow: hoveredGuide === guide.slug ? '0 4px 12px rgba(0,102,204,0.1)' : 'none',
              }}
              onMouseEnter={() => setHoveredGuide(guide.slug)}
              onMouseLeave={() => setHoveredGuide(null)}
            >
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '16px',
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fafafa',
                  color: '#0066cc',
                  borderRadius: '10px',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}>
                  {ICONS[guide.icon]}
                </div>
                <span style={{
                  fontSize: '11px',
                  color: '#8e8e93',
                  fontWeight: '500',
                }}>
                  {guide.readTime}
                </span>
              </div>

              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '11px',
                  color: '#0066cc',
                  marginBottom: '8px',
                  fontWeight: '500',
                }}>
                  For: {guide.audience}
                </div>
                <h2 style={{
                  fontSize: '17px',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  lineHeight: 1.25,
                  marginBottom: '10px',
                }}>
                  {guide.title}
                </h2>
                <p style={{
                  fontSize: '13px',
                  lineHeight: '1.6',
                  color: '#6e6e73',
                  marginBottom: '16px',
                }}>
                  {guide.description}
                </p>
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontWeight: '500',
                color: '#0066cc',
                marginTop: 'auto',
              }}>
                Read guide
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12,5 19,12 12,19" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div style={{
          padding: '40px',
          backgroundColor: '#fafafa',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid rgba(0,0,0,0.06)',
        }}>
          <p style={{
            fontSize: '14px',
            color: '#6e6e73',
            marginBottom: '12px',
          }}>
            Looking for a specific topic?
          </p>
          <a
            href="mailto:contact@decisionandlaw.com"
            style={{
              fontSize: '13px',
              fontWeight: '500',
              color: '#0066cc',
              textDecoration: 'none',
            }}
          >
            Suggest a guide
          </a>
        </div>
      </div>
    </main>
  );
}

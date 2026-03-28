import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Legal Practice Guides | Decision&Law',
  description: 'Practical guides on AI adoption in law firms, contract review, e-discovery, legal research, and AI governance. Actionable frameworks for legal professionals.',
};

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
    slug: 'contract-review-ai-production',
    title: 'Contract Review with AI: From Pilot to Production',
    audience: 'Corporate counsel, contract managers, legal ops',
    description: 'How to move from testing AI contract review tools to enterprise-scale deployment. Covers data preparation, playbook configuration, and ROI measurement.',
    readTime: '18 min',
    icon: 'document',
  },
  {
    slug: 'ai-governance-ethics',
    title: 'AI Governance & Ethics for Legal Teams',
    audience: 'Compliance officers, GCs, risk managers',
    description: 'Establishing responsible AI policies, evaluating bias in legal AI tools, and navigating emerging regulations like the EU AI Act.',
    readTime: '25 min',
    icon: 'shield',
  },
  {
    slug: 'e-discovery-generative-ai',
    title: 'E-Discovery in the Generative AI Era',
    audience: 'Litigation support, e-discovery specialists, trial attorneys',
    description: 'How generative AI is transforming document review, managing AI-generated data, and preserving chain of custody in AI environments.',
    readTime: '22 min',
    icon: 'search',
  },
  {
    slug: 'ai-powered-legal-research',
    title: 'Building an AI-Powered Legal Research Workflow',
    audience: 'Litigators, researchers, law students',
    description: 'Moving beyond Boolean search to semantic retrieval. Best practices for combining AI research tools with primary source validation.',
    readTime: '15 min',
    icon: 'book',
  },
  {
    slug: 'roi-legal-ai-metrics',
    title: 'ROI of Legal AI: Metrics That Matter',
    audience: 'GCs, CFOs, legal ops, firm administrators',
    description: 'Beyond billable hours — measuring quality, consistency, and time-to-value. Frameworks for building the business case to leadership.',
    readTime: '20 min',
    icon: 'chart',
  },
];

const ICONS: Record<string, React.ReactNode> = {
  building: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
    </svg>
  ),
  document: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10,9 9,9 8,9" />
    </svg>
  ),
  shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  search: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  book: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  chart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
};

export default function GuidesPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a', paddingTop: '120px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px 100px' }}>
        <div style={{ marginBottom: '64px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '12px' }}>
            AI Legal Practice Guides
          </div>
          <h1 style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: '700',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            color: '#1a1a1a',
            marginBottom: '24px',
          }}>
            Practice Guides
          </h1>
          <p style={{
            fontSize: '17px',
            lineHeight: '1.7',
            color: '#737373',
            maxWidth: '560px',
            marginBottom: '16px',
          }}>
            Practical frameworks for legal professionals implementing AI. Each guide is designed to move from concept to action — whether you are evaluating tools, building policies, or measuring outcomes.
          </p>
          <p style={{ fontSize: '12px', color: '#a1a1aa' }}>
            Last updated: March 2026
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1px',
          backgroundColor: '#e5e5e5',
          marginBottom: '64px',
        }}>
          {GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#ffffff',
                padding: '36px 32px',
                textDecoration: 'none',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '20px',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f4f4f5',
                  color: '#1a1a1a',
                }}>
                  {ICONS[guide.icon]}
                </div>
                <span style={{
                  fontSize: '11px',
                  letterSpacing: '0.06em',
                  color: '#a1a1aa',
                }}>
                  {guide.readTime}
                </span>
              </div>

              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  color: '#737373',
                  marginBottom: '8px',
                }}>
                  For: {guide.audience}
                </div>
                <h2 style={{
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  lineHeight: '1.35',
                  marginBottom: '12px',
                }}>
                  {guide.title}
                </h2>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: '#737373',
                  marginBottom: '20px',
                }}>
                  {guide.description}
                </p>
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                color: '#1a1a1a',
                fontWeight: '500',
              }}>
                Read guide
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12,5 19,12 12,19" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div style={{
          padding: '48px',
          border: '1px solid #e5e5e5',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '15px',
            color: '#737373',
            marginBottom: '8px',
          }}>
            Looking for a specific topic?
          </p>
          <a
            href="mailto:contact@decisionandlaw.com"
            style={{
              fontSize: '14px',
              color: '#1a1a1a',
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            Suggest a guide
          </a>
        </div>
      </div>
    </main>
  );
}

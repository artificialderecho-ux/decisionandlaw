export const metadata = {
  title: 'AI Legal Tools Directory | Decision&Law',
  description: 'Curated directory of AI legal tools for research, contracts, e-discovery, and legal operations. Updated March 2026.',
};

const TOOLS = {
  'Research': [
    {
      name: 'Casetext (CoCounsel)',
      url: 'https://casetext.com',
      description: 'AI legal assistant for research, document review, and deposition preparation. Trusted by thousands of law firms.',
      bestFor: 'Litigation attorneys needing rapid case law analysis and draft generation.',
    },
    {
      name: 'Harvey',
      url: 'https://harvey.ai',
      description: 'Custom AI trained on practice areas including tax, corporate, and international law. Backed by OpenAI.',
      bestFor: 'Large law firms and in-house legal teams requiring domain-specialized AI.',
    },
    {
      name: 'vLex',
      url: 'https://vlex.com',
      description: 'Global legal intelligence platform with AI-powered search and analytics across jurisdictions.',
      bestFor: 'Cross-border legal research and comparative law analysis.',
    },
    {
      name: 'Jus Mundi (Jus AI)',
      url: 'https://jusmundi.com',
      description: 'AI agent specialized in international arbitration and cross-border dispute resolution.',
      bestFor: 'International arbitration practitioners and sovereign counsel.',
    },
  ],
  'Contracts': [
    {
      name: 'Ironclad',
      url: 'https://ironclad.ai',
      description: 'Contract lifecycle management with AI for drafting, negotiation, and compliance workflows.',
      bestFor: 'Legal ops teams managing high-volume contract portfolios.',
    },
    {
      name: 'LEGALFLY',
      url: 'https://legalfly.io',
      description: 'Privacy-first AI workspace with native Microsoft 365 integration and data anonymization.',
      bestFor: 'Organizations with strict data privacy requirements.',
    },
    {
      name: 'Evisort (by Workday)',
      url: 'https://evisort.com',
      description: 'AI contract analytics and extraction platform for enterprise-scale contract portfolios.',
      bestFor: 'Corporate legal departments needing contract data intelligence.',
    },
    {
      name: 'Spellbook',
      url: 'https://spellbook.legal',
      description: 'AI drafting assistant integrated with Microsoft Word, trained on contract language.',
      bestFor: 'Transactional lawyers and solo practitioners seeking drafting efficiency.',
    },
  ],
  'E-Discovery': [
    {
      name: 'Relativity',
      url: 'https://relativity.com',
      description: 'Industry-standard platform for e-discovery with generative AI capabilities.',
      bestFor: 'Litigation support teams handling complex discovery at scale.',
    },
    {
      name: 'Everlaw',
      url: 'https://everlaw.com',
      description: 'AI-powered e-discovery with data visualization and narrative-building tools.',
      bestFor: 'Trial teams constructing evidence-based case narratives.',
    },
  ],
  'Legal Ops': [
    {
      name: 'Brightflag',
      url: 'https://brightflag.com',
      description: 'AI-driven legal spend management and e-billing platform with analytics.',
      bestFor: 'Corporate legal departments optimizing outside counsel spend.',
    },
    {
      name: 'Thomson Reuters Legal Tracker',
      url: 'https://legaltracker.thomsonreuters.com',
      description: 'Matter management, e-billing, and analytics platform for in-house teams.',
      bestFor: 'Enterprise legal operations seeking integrated matter and spend visibility.',
    },
  ],
};

export default function ToolsPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a', paddingTop: '120px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px 100px' }}>
        <div style={{ marginBottom: '64px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '12px' }}>
            AI Legal Tools Directory
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
            AI Legal Tools
          </h1>
          <p style={{
            fontSize: '17px',
            lineHeight: '1.7',
            color: '#737373',
            maxWidth: '560px',
            marginBottom: '16px',
          }}>
            A curated directory of AI-powered tools for legal professionals. Each tool has been selected based on practical utility, market presence, and relevance to modern legal practice.
          </p>
          <p style={{ fontSize: '12px', color: '#a1a1aa' }}>
            Last updated: March 2026
          </p>
        </div>

        {Object.entries(TOOLS).map(([category, tools]) => (
          <section key={category} style={{ marginBottom: '80px' }}>
            <h2 style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#737373',
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: '1px solid #e5e5e5',
            }}>
              {category}
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '1px',
              backgroundColor: '#e5e5e5',
            }}>
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div>
                    <h3 style={{
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      marginBottom: '8px',
                      lineHeight: '1.3',
                    }}>
                      {tool.name}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: '#737373',
                      marginBottom: '12px',
                    }}>
                      {tool.description}
                    </p>
                  </div>
                  <div style={{
                    padding: '12px 14px',
                    backgroundColor: '#f4f4f5',
                    borderLeft: '2px solid #1a1a1a',
                  }}>
                    <p style={{
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#737373',
                      marginBottom: '4px',
                    }}>
                      Best for
                    </p>
                    <p style={{
                      fontSize: '14px',
                      lineHeight: '1.5',
                      color: '#1a1a1a',
                    }}>
                      {tool.bestFor}
                    </p>
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      color: '#1a1a1a',
                      textDecoration: 'none',
                      fontWeight: '500',
                      marginTop: '4px',
                    }}
                  >
                    Visit site
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div style={{
          padding: '48px',
          border: '1px solid #e5e5e5',
          textAlign: 'center',
          marginTop: '40px',
        }}>
          <p style={{
            fontSize: '15px',
            color: '#737373',
            marginBottom: '8px',
          }}>
            Know a tool we should list?
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
            Contact us
          </a>
        </div>
      </div>
    </main>
  );
}

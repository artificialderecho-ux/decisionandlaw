'use client';

import { useState } from 'react';
import AuthorAvatar from '@/app/components/AuthorAvatar';

export default function AuthorsPage() {
  const [hoveredAuthor, setHoveredAuthor] = useState<string | null>(null);

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 48px) clamp(48px, 8vw, 80px)' }}>
        <div style={{ marginBottom: 'clamp(32px, 6vw, 48px)' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0066cc', marginBottom: '12px' }}>
            Our Authors
          </div>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '700',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            color: '#1a1a1a',
            marginBottom: '16px',
          }}>
            Authors
          </h1>
          <p style={{
            fontSize: '15px',
            lineHeight: '1.6',
            color: '#6e6e73',
            maxWidth: '560px',
          }}>
            Voices shaping the conversation at the intersection of law, technology, and decision intelligence.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px',
        }}>
          {AUTHORS.map((author) => (
            <div
              key={author.name}
              style={{
                backgroundColor: '#ffffff',
                border: hoveredAuthor === author.name ? '1px solid #0066cc' : '1px solid rgba(0,0,0,0.08)',
                borderRadius: '12px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                boxShadow: hoveredAuthor === author.name ? '0 4px 12px rgba(0,102,204,0.1)' : 'none',
              }}
              onMouseEnter={() => setHoveredAuthor(author.name)}
              onMouseLeave={() => setHoveredAuthor(null)}
            >
              <AuthorAvatar initials={author.initials} size="lg" />

              <div>
                <h2 style={{
                  fontSize: '17px',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  marginBottom: '6px',
                  lineHeight: 1.2,
                }}>
                  {author.name}
                </h2>
                <p style={{
                  fontSize: '11px',
                  fontWeight: '500',
                  lineHeight: '1.5',
                  color: '#0066cc',
                  marginBottom: '10px',
                }}>
                  {author.title}
                </p>
                <p style={{
                  fontSize: '13px',
                  lineHeight: '1.6',
                  color: '#6e6e73',
                }}>
                  {author.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const AUTHORS = [
  {
    initials: 'EM',
    name: 'Elena Markov',
    title: 'Specialist in algorithmic decision systems and computational ethics',
    description: 'Independent researcher working at the intersection of formal logic and automated decision-making processes. She advises civil society organizations on AI accountability frameworks.',
  },
  {
    initials: 'JO',
    name: 'James Okafor',
    title: 'Specialist in regulatory risk analysis and automated compliance',
    description: 'Former fintech regulatory consultant who now writes about how AI systems interpret complex regulatory frameworks. Based between London and Lagos.',
  },
  {
    initials: 'SC',
    name: 'Sofia Chen',
    title: 'Obsessed with legal data visualization and computational argumentation',
    description: 'Interface designer for next-generation legal tech platforms. She believes information design can transform how judicial reasoning is understood.',
  },
  {
    initials: 'RM',
    name: 'Rafael Morales',
    title: 'Specialist in legal system interoperability and open standards',
    description: 'Software engineer turned legal data standardization advocate. Contributes to working groups developing ontologies for legal knowledge representation.',
  },
  {
    initials: 'AV',
    name: 'Anya Volkov',
    title: 'Specialist in cognitive accessibility of automated legal documents',
    description: 'Computational linguist focused on making legal language understandable for both humans and machines. She researches plain language automation.',
  },
  {
    initials: 'KA',
    name: 'Kwame Asante',
    title: 'Obsessed with language models applied to comparative jurisprudence',
    description: 'Self-taught NLP researcher working with multilingual legal corpora. He writes from Accra about how LLMs are reshaping legal analysis.',
  },
  {
    initials: 'IV',
    name: 'Isla Vinter',
    title: 'Specialist in privacy by design and algorithmic data governance',
    description: 'Former data protection advisor exploring the implications of generative AI on legal confidentiality and attorney-client privilege.',
  },
  {
    initials: 'HT',
    name: 'Hiro Tanaka',
    title: 'Obsessed with workflow automation and distributed decision-making',
    description: 'Open source tool builder for small law practices. He advocates for accessible legal technology that lowers barriers to justice.',
  },
];

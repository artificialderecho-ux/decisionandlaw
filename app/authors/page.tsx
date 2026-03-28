import AuthorAvatar from '@/app/components/AuthorAvatar';

export const metadata = {
  title: 'Authors | Decision&Law',
  description: 'Voices shaping the conversation at the intersection of law, technology, and decision intelligence.',
};

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

export default function AuthorsPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a', paddingTop: '120px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px 100px' }}>
        <div style={{ marginBottom: '64px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '12px' }}>
            Our Authors
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
            Authors
          </h1>
          <p style={{
            fontSize: '17px',
            lineHeight: '1.7',
            color: '#737373',
            maxWidth: '560px',
          }}>
            Voices shaping the conversation at the intersection of law, technology, and decision intelligence.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1px',
          backgroundColor: '#e5e5e5',
        }}>
          {AUTHORS.map((author) => (
            <div
              key={author.name}
              style={{
                backgroundColor: '#ffffff',
                padding: '40px 36px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <AuthorAvatar initials={author.initials} size="lg" />

              <div>
                <h2 style={{
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  marginBottom: '8px',
                  lineHeight: '1.3',
                }}>
                  {author.name}
                </h2>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.5',
                  color: '#737373',
                  marginBottom: '16px',
                }}>
                  {author.title}
                </p>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.7',
                  color: '#737373',
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

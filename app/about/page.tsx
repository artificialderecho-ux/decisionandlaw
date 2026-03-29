'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 48px) clamp(48px, 8vw, 80px)' }}>
        
        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0066cc', marginBottom: '12px' }}>
            About
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 44px)', fontWeight: '700', lineHeight: 1.1, letterSpacing: '-0.025em', color: '#1a1a1a', marginBottom: '24px' }}>
            About Us
          </h1>
        </div>

        <div style={{ fontSize: '17px', lineHeight: 1.7, color: '#1a1a1a', marginBottom: '48px' }}>
          <p style={{ marginBottom: '24px' }}>
            <strong>Decision & Law</strong> is an independent editorial platform dedicated to the intersection of artificial intelligence, law, and decision intelligence. Established in 2025, we provide analysis, news, and curated resources for legal professionals navigating the AI era.
          </p>
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', letterSpacing: '-0.02em' }}>
          Our Mission
        </h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '48px' }}>
          We believe that legal professionals require more than just news—they need frameworks. We translate complex regulatory shifts (from the EU AI Act to US state privacy laws) and technical concepts (from LLMs to e-discovery) into actionable intelligence.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', letterSpacing: '-0.02em' }}>
          Who We Serve
        </h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '16px' }}>
          Decision & Law is created for:
        </p>
        <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '48px', paddingLeft: '24px' }}>
          <li>Licensed attorneys in private practice</li>
          <li>In-house counsel and corporate legal departments</li>
          <li>Compliance officers and privacy professionals</li>
          <li>Paralegals and legal operations professionals</li>
          <li>Law students and legal academics</li>
        </ul>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '48px' }}>
          While the general public may access our content, Decision & Law specifically addresses the legal and business challenges facing qualified legal professionals. Our analyses assume familiarity with legal concepts and US/EU regulatory frameworks.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', letterSpacing: '-0.02em' }}>
          Our Standards
        </h2>
        
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px' }}>Editorial Independence</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Our content is created by a team of specialist writers and researchers (see our <Link href="/authors" style={{ color: '#0066cc', textDecoration: 'none' }}>Authors</Link> page). We maintain strict editorial independence:
        </p>
        <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '48px', paddingLeft: '24px' }}>
          <li>We do not accept compensation for editorial coverage</li>
          <li>Our tools directory and guides are curated based on utility, relevance, and public information</li>
          <li>We do not have financial relationships with tools or services we analyze</li>
          <li>Our only revenue comes from advertising and potential future advisory services</li>
        </ul>

        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px' }}>Content Accuracy & Updates</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '16px' }}>
          We commit to keeping our analyses current and accurate:
        </p>
        <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '24px', paddingLeft: '24px' }}>
          <li>Regulatory content is reviewed and updated within 7 days of material legal changes</li>
          <li>Tool evaluations are refreshed quarterly or when significant updates occur</li>
          <li>When errors are discovered, we publish corrections publicly with transparent notes</li>
          <li>We maintain a good-faith effort to reflect the state of law at the time of publication</li>
        </ul>
        <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#6e6e73', marginBottom: '48px' }}>
          For errors, corrections, or outdated information: <strong>artificialderecho@gmail.com</strong>
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px' }}>Transparency on AI Usage</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '16px' }}>
          Decision & Law content is authored by human writers and legal researchers. We do not currently use large language models (LLMs) to generate original analyses.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '16px' }}>
          If our editorial process changes to incorporate AI tools, we will:
        </p>
        <ol style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '48px', paddingLeft: '24px' }}>
          <li>Disclose this clearly in our Terms of Use</li>
          <li>Mark any tool-assisted sections transparently</li>
          <li>Maintain human review and fact-checking of all legal conclusions</li>
        </ol>

        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', letterSpacing: '-0.02em' }}>
          What We Are Not
        </h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '16px' }}>
          <strong>Decision & Law is not a law firm</strong>, does not provide legal advice, and does not form an attorney-client relationship.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '48px' }}>
          Readers should not rely solely on our content for legal strategy, compliance decisions, or litigation support. All analyses are general in nature and do not account for jurisdiction‑specific variations, industry nuances, or your organization&apos;s unique facts.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '48px' }}>
          <em>Before taking action based on our content, consult a qualified attorney licensed in your jurisdiction.</em>
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', letterSpacing: '-0.02em' }}>
          Contact
        </h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '48px' }}>
          General inquiries, corrections, and privacy questions: <strong>artificialderecho@gmail.com</strong>
        </p>

        <div style={{ paddingTop: '32px', borderTop: '1px solid rgba(0,0,0,0.08)', fontSize: '14px', lineHeight: 1.6, color: '#8e8e93', fontStyle: 'italic' }}>
          <p>Decision & Law is a publisher of information and analysis. Readers are solely responsible for determining the applicability of our content to their situation and should seek independent legal counsel before acting on any information.</p>
        </div>

      </div>
    </main>
  );
}

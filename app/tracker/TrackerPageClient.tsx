'use client';

import Link from 'next/link';

function StatCard({ number, label, accent = false }: { number: number; label: string; accent?: boolean }) {
  return (
    <div style={{
      backgroundColor: '#fafafa',
      borderRadius: '10px',
      padding: '20px',
      textAlign: 'center',
      border: '1px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{
        fontSize: 'clamp(28px, 4vw, 36px)',
        fontWeight: '700',
        color: accent ? '#0066cc' : '#1a1a1a',
        letterSpacing: '-0.02em',
        marginBottom: '4px',
      }}>
        {number}
      </div>
      <div style={{ fontSize: '11px', fontWeight: '500', color: '#8e8e93', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        {label}
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: '13px', color: '#6e6e73' }}>{label}</span>
      <span style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a' }}>{value}</span>
    </div>
  );
}

export default function TrackerPageClient() {
  const stats = {
    enacted: 16,
    activeLegislation: 15,
    monitoring: 12,
    noActivity: 7,
    totalFederal: 5,
    totalCases: 12
  };

  const cards = [
    {
      href: '/tracker/state',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      ),
      title: '50-State Index',
      description: 'Complete coverage of AI legislation and regulations across all 50 states. Track enacted laws, active bills, and regulatory developments by state.',
      link: 'Explore States',
    },
    {
      href: '/tracker/federal-ai-policy',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Federal AI Policy',
      description: 'Track federal AI initiatives including executive orders, agency guidance, and regulatory frameworks from the White House, FTC, EEOC, and NIST.',
      link: 'View Federal Policy',
    },
    {
      href: '/tracker/aba-opinions',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'ABA Opinions',
      description: 'American Bar Association ethics opinions and formal guidance on artificial intelligence usage in legal practice, competence requirements, and client confidentiality.',
      link: 'Read ABA Guidance',
    },
    {
      href: '/tracker/malpractice-cases',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c-.94 1.543.826 3.31 2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: 'Malpractice Cases',
      description: 'Track legal malpractice cases involving artificial intelligence, including AI research errors, confidentiality breaches, and competence issues.',
      link: 'View Cases',
    },
  ];

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 48px)' }}>
        <div style={{ marginBottom: 'clamp(48px, 8vw, 80px)' }}>
          <nav style={{ marginBottom: '32px' }}>
            <Link href="/" style={{ fontSize: '13px', color: '#6e6e73', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Home
            </Link>
          </nav>
          <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0066cc', marginBottom: '12px' }}>
            Live Tracker
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: '700', marginBottom: '16px', color: '#1a1a1a', letterSpacing: '-0.025em' }}>
            AI Regulation Tracker
          </h1>
          <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#6e6e73', maxWidth: '640px' }}>
            Track and monitor AI regulations, policies, and legal developments across different jurisdictions. Stay informed about legislation, case law, and ethical guidance.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '12px',
          marginBottom: 'clamp(48px, 8vw, 80px)',
        }}>
          <StatCard number={stats.enacted} label="States Enacted" accent />
          <StatCard number={stats.activeLegislation} label="Active Legislation" accent />
          <StatCard number={stats.monitoring} label="Monitoring" />
          <StatCard number={stats.noActivity} label="No Activity" />
          <StatCard number={stats.totalCases} label="Malpractice Cases" accent />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
          marginBottom: 'clamp(48px, 8vw, 80px)',
        }}>
          {cards.map((card) => (
            <Link key={card.href} href={card.href} style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '12px',
                padding: '32px',
                height: '100%',
                transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0066cc';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,102,204,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    backgroundColor: '#fafafa',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1a1a1a',
                  }}>
                    {card.icon}
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#8e8e93' }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#1a1a1a', letterSpacing: '-0.01em' }}>
                  {card.title}
                </h2>
                <p style={{ fontSize: '14px', lineHeight: '1.65', color: '#6e6e73', marginBottom: '20px' }}>
                  {card.description}
                </p>
                <span style={{ fontSize: '13px', fontWeight: '500', color: '#0066cc', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  {card.link}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div style={{
          backgroundColor: '#fafafa',
          borderRadius: '16px',
          padding: 'clamp(24px, 4vw, 40px)',
          border: '1px solid rgba(0,0,0,0.06)',
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px', color: '#1a1a1a', letterSpacing: '-0.01em' }}>
            Current Landscape
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '32px',
          }}>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: '#1a1a1a' }}>State Activity</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <SummaryRow label="Total States" value="50" />
                <SummaryRow label="With AI Laws" value={stats.enacted.toString()} />
                <SummaryRow label="Active Bills" value={stats.activeLegislation.toString()} />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: '#1a1a1a' }}>Federal Initiatives</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <SummaryRow label="Active Policies" value={stats.totalFederal.toString()} />
                <SummaryRow label="Agency Guidance" value="4+" />
                <SummaryRow label="Executive Orders" value="2" />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: '#1a1a1a' }}>Legal Impact</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <SummaryRow label="Malpractice Cases" value={stats.totalCases.toString()} />
                <SummaryRow label="ABA Opinions" value="6" />
                <SummaryRow label="Bar Guidance" value="15+" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

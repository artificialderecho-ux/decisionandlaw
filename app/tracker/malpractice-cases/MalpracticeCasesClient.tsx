'use client';

import Link from 'next/link';
import { type Article } from 'contentlayer/generated';
import AuthorAvatar from '@/app/components/AuthorAvatar';

const AUTHOR_INITIALS: Record<string, string> = {
  'Elena Markov': 'EM',
  'James Okafor': 'JO',
  'Sofia Chen': 'SC',
  'Rafael Morales': 'RM',
  'Anya Volkov': 'AV',
  'Kwame Asante': 'KA',
  'Isla Vinter': 'IV',
  'Hiro Tanaka': 'HT',
  'Decision & Law Editorial Team': 'DL',
};

function getInitials(authorName: string): string {
  return AUTHOR_INITIALS[authorName] || authorName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

function StatusBadge({ status }: { status?: string }) {
  const colors: Record<string, { bg: string; color: string }> = {
    decided: { bg: '#dcfce7', color: '#16a34a' },
    'pre-trial': { bg: '#fef9c3', color: '#ca8a04' },
    pending: { bg: '#fef9c3', color: '#ca8a04' },
    'in-force': { bg: '#dcfce7', color: '#16a34a' },
    proposed: { bg: '#e0e7ff', color: '#4f46e5' },
  };
  const style = colors[status || ''] || { bg: '#f4f4f5', color: '#737373' };

  return (
    <span style={{
      padding: '4px 10px',
      fontSize: '10px',
      fontWeight: '600',
      letterSpacing: '0.04em',
      backgroundColor: style.bg,
      color: style.color,
      borderRadius: '9999px',
      textTransform: 'capitalize',
    }}>
      {status || 'Unknown'}
    </span>
  );
}

function CaseCard({ article }: { article: Article }) {
  const initials = getInitials(article.author);

  return (
    <Link href={`/news/${article.slug}`} style={{ textDecoration: 'none' }}>
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: '12px',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
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
        <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <StatusBadge status={article.status} />
            <span style={{ fontSize: '12px', color: '#8e8e93' }}>
              {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </div>

          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#1a1a1a',
            marginBottom: '12px',
            lineHeight: '1.35',
            letterSpacing: '-0.01em',
            flex: 1,
          }}>
            {article.title}
          </h3>

          {article.caseName && (
            <div style={{
              fontSize: '11px',
              fontWeight: '600',
              color: '#0066cc',
              backgroundColor: 'rgba(0,102,204,0.06)',
              padding: '6px 10px',
              borderRadius: '6px',
              marginBottom: '12px',
              display: 'inline-block',
            }}>
              {article.caseName}
            </div>
          )}

          <p style={{
            fontSize: '13px',
            color: '#6e6e73',
            lineHeight: '1.6',
            marginBottom: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {article.metaDescription || article.ogDescription || ''}
          </p>

          {article.jurisdiction && (
            <div style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '11px', fontWeight: '600', color: '#8e8e93', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Jurisdiction
              </span>
              <div style={{ fontSize: '12px', color: '#1a1a1a', marginTop: '4px' }}>
                {article.jurisdiction.charAt(0).toUpperCase() + article.jurisdiction.slice(1)}
              </div>
            </div>
          )}

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            paddingTop: '12px',
            borderTop: '1px solid rgba(0,0,0,0.06)',
          }}>
            <AuthorAvatar initials={initials} size="sm" />
            <div style={{ fontSize: '12px', color: '#8e8e93', display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
              <span style={{ color: '#1a1a1a', fontWeight: '500' }}>{article.author}</span>
              {article.readingTime && (
                <>
                  <span>·</span>
                  <span>{article.readingTime} min read</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function MalpracticeCasesClient({ articles }: { articles: Article[] }) {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 48px)' }}>
        <div style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <nav style={{ marginBottom: '32px' }}>
            <Link href="/tracker" style={{ fontSize: '13px', color: '#6e6e73', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              AI Regulation Tracker
            </Link>
          </nav>
          <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0066cc', marginBottom: '12px' }}>
            Live Tracker
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: '700', marginBottom: '16px', color: '#1a1a1a', letterSpacing: '-0.025em' }}>
            AI Malpractice Cases
          </h1>
          <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#6e6e73', maxWidth: '560px' }}>
            Track legal malpractice cases involving artificial intelligence, including AI research errors, confidentiality breaches, and competence issues affecting legal professionals.
          </p>
        </div>

        {articles.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: 'clamp(48px, 8vw, 80px) 0',
            color: '#8e8e93',
          }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: '0 auto 16px', display: 'block', color: '#d1d5db' }}>
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p style={{ fontSize: '16px', fontWeight: '500', color: '#6e6e73', marginBottom: '8px' }}>No cases tracked yet</p>
            <p style={{ fontSize: '14px', color: '#8e8e93' }}>Check back soon for updates on AI-related malpractice cases.</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '16px',
          }}>
            {articles.map((article) => (
              <CaseCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

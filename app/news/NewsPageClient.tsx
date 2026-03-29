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

function ArticleCard({ article }: { article: Article }) {
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
            <span style={{
              padding: '4px 10px',
              fontSize: '10px',
              fontWeight: '600',
              letterSpacing: '0.04em',
              backgroundColor: 'rgba(0,102,204,0.08)',
              color: '#0066cc',
              borderRadius: '9999px',
              textTransform: 'uppercase',
            }}>
              {article.category}
            </span>
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

export default function NewsPageClient({ articles }: { articles: Article[] }) {
  const sortedArticles = [...articles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const categories = ['All', ...Array.from(new Set(articles.map(article => article.category)))];
  const featuredArticles = sortedArticles.filter(article => article.featured);
  const regularArticles = sortedArticles.filter(article => !article.featured);

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 48px)' }}>
        <div style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0066cc', marginBottom: '12px' }}>
            Coverage
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: '700', marginBottom: '16px', color: '#1a1a1a', letterSpacing: '-0.025em' }}>
            AI Legal News
          </h1>
          <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#6e6e73', maxWidth: '560px' }}>
            Stay informed about the latest developments in artificial intelligence legislation, case law, ethics, and regulatory changes affecting legal professionals.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          {categories.map((category) => (
            <Link
              key={category}
              href={category === 'All' ? '/news' : `/news?category=${category}`}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '500',
                textDecoration: 'none',
                backgroundColor: category === 'All' ? '#1a1a1a' : '#fafafa',
                color: category === 'All' ? '#ffffff' : '#1a1a1a',
                border: '1px solid rgba(0,0,0,0.08)',
                transition: 'all 0.15s cubic-bezier(0.25, 0.1, 0.25, 1)',
              }}
            >
              {category}
            </Link>
          ))}
        </div>

        {featuredArticles.length > 0 && (
          <div style={{ marginBottom: 'clamp(48px, 8vw, 80px)' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8e8e93', marginBottom: '24px' }}>
              Featured Stories
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '20px',
            }}>
              {featuredArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        )}

        <div style={{ marginBottom: 'clamp(48px, 8vw, 80px)' }}>
          <h2 style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8e8e93', marginBottom: '24px' }}>
            Latest Articles
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '16px',
          }}>
            {regularArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>

        <div style={{
          backgroundColor: '#fafafa',
          borderRadius: '16px',
          padding: 'clamp(32px, 5vw, 48px)',
          border: '1px solid rgba(0,0,0,0.06)',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '32px',
            alignItems: 'center',
          }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px', color: '#1a1a1a', letterSpacing: '-0.02em' }}>
                Stay Updated
              </h2>
              <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#6e6e73' }}>
                Get weekly updates on AI legal developments delivered to your inbox.
              </p>
            </div>
            <div>
              <Link
                href="/newsletter"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  backgroundColor: '#0066cc',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '600',
                  borderRadius: '8px',
                  transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
              >
                Subscribe to Newsletter
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

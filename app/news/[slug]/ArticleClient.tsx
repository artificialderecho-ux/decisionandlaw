'use client';

import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { 
  CaseHeader, 
  KeyTakeaways, 
  PracticeNote, 
  CaseCitation, 
  RelatedCases 
} from '../../components/article';
import ArticleDisclaimer from '../../components/article/ArticleDisclaimer';
import { BreadcrumbStructuredData, NewsArticleStructuredData } from '../../components/StructuredData';

interface ArticleClientProps {
  article: any;
}

export default function ArticleClient({ article }: ArticleClientProps) {
  const MDXContent = useMDXComponent(article.body.code);

  const getCategoryColor = () => ({
    backgroundColor: '#f4f4f5',
    color: '#737373',
    border: '1px solid #e5e5e5',
  });

  const tagStyle = {
    padding: '4px 8px',
    fontSize: '0.75rem',
    fontWeight: '500',
    backgroundColor: '#f4f4f5',
    color: '#737373',
    border: '1px solid #e5e5e5',
  };

  return (
    <>
      <NewsArticleStructuredData
        headline={article.title}
        datePublished={article.date}
        dateModified={article.lastModified || article.date}
        author={article.author}
        slug={article.slug}
        description={article.metaDescription || article.ogDescription || ''}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: 'https://decisionandlaw.com' },
          { name: 'News', url: 'https://decisionandlaw.com/news' },
          { name: article.title, url: `https://decisionandlaw.com/news/${article.slug}` },
        ]}
      />
      <div className="min-h-screen" style={{ backgroundColor: '#ffffff', color: '#1a1a1a' }}>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" style={{ color: '#1a1a1a', textDecoration: 'none' }}>
                Home
              </Link>
            </li>
            <li style={{ color: '#a1a1aa' }}>/</li>
            <li>
              <Link href="/news" style={{ color: '#1a1a1a', textDecoration: 'none' }}>
                News
              </Link>
            </li>
            <li style={{ color: '#a1a1aa' }}>/</li>
            <li style={{ color: '#737373' }}>{article.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <div style={{ marginBottom: '32px', paddingTop: '24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px', marginBottom: '20px' }}>
            <span style={{ ...tagStyle, fontSize: '11px', fontWeight: '600', padding: '4px 12px', letterSpacing: '0.04em' }}>{article.category}</span>
            {article.subcategory && (
              <span style={{ ...tagStyle, fontSize: '11px', fontWeight: '600', padding: '4px 12px', letterSpacing: '0.04em' }}>{article.subcategory}</span>
            )}
            {article.breaking && (
              <span style={{ ...tagStyle, fontSize: '11px', fontWeight: '600', padding: '4px 12px', letterSpacing: '0.04em', backgroundColor: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca' }}>
                Breaking
              </span>
            )}
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', 
            fontWeight: '700', 
            marginBottom: '20px', 
            color: '#1a1a1a', 
            lineHeight: 1.15,
            letterSpacing: '-0.025em'
          }}>
            {article.title}
          </h1>
          
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '20px', fontSize: '13px', color: '#6e6e73', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span style={{ fontWeight: '500', color: '#0066cc' }}>{article.author}</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>{new Date(article.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            
            {article.readingTime && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{article.readingTime} min read</span>
              </div>
            )}
            
            {article.wordCount && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <span>{article.wordCount.toLocaleString()} words</span>
              </div>
            )}
            
            {article.pdf && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15.75a2.25 2.25 0 012.25-2.25h6a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 01-2.25 2.25h-6a2.25 2.25 0 01-2.25-2.25v-2.25z" />
                </svg>
                <a href={article.pdf} target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', fontWeight: '500', textDecoration: 'none' }}>
                  Download PDF
                </a>
              </div>
            )}
          </div>

          {/* Topics */}
          {article.topics && article.topics.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px' }}>
              {article.topics.map((topic: string, index: number) => (
                <span 
                  key={index}
                  style={{ ...tagStyle, fontSize: '11px', padding: '4px 10px' }}
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Article Content */}
        <div style={{ maxWidth: '48rem' }}>
          <ArticleDisclaimer lastModified={article.lastModified || article.date} />
          <MDXContent 
            components={{
              CaseHeader,
              KeyTakeaways,
              PracticeNote,
              CaseCitation,
              RelatedCases,
              h1: ({ children }: any) => <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', marginTop: '40px', lineHeight: 1.2 }}>{children}</h1>,
              h2: ({ children }: any) => <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px', lineHeight: 1.3 }}>{children}</h2>,
              h3: ({ children }: any) => <h3 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px', lineHeight: 1.4 }}>{children}</h3>,
              p: ({ children }: any) => <p style={{ fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)', color: '#1a1a1a', lineHeight: 1.75, marginBottom: '20px', textAlign: 'justify' }}>{children}</p>,
              a: ({ href, children }: any) => (
                <a 
                  href={href} 
                  style={{ color: '#0066cc', textDecoration: 'none', fontWeight: '500' }}
                >
                  {children}
                </a>
              ),
              ul: ({ children }: any) => <ul style={{ fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)', listStyle: 'disc', paddingLeft: '24px', color: '#1a1a1a', marginBottom: '20px', lineHeight: 1.75 }}>{children}</ul>,
              ol: ({ children }: any) => <ol style={{ fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)', listStyle: 'decimal', paddingLeft: '24px', color: '#1a1a1a', marginBottom: '20px', lineHeight: 1.75 }}>{children}</ol>,
              li: ({ children }: any) => <li style={{ marginBottom: '10px' }}>{children}</li>,
              blockquote: ({ children }: any) => (
                <blockquote style={{ borderLeft: '3px solid #0066cc', paddingLeft: '20px', fontStyle: 'italic', color: '#6e6e73', margin: '20px 0', fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)' }}>
                  {children}
                </blockquote>
              ),
              code: ({ children }: any) => (
                <code style={{ backgroundColor: '#f4f4f5', color: '#1a1a1a', padding: '2px 6px', fontSize: '0.9em', borderRadius: '4px' }}>
                  {children}
                </code>
              ),
              pre: ({ children }: any) => (
                <pre style={{ backgroundColor: '#f4f4f5', border: '1px solid rgba(0,0,0,0.08)', padding: '20px', overflow: 'auto', marginBottom: '20px', borderRadius: '8px', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                  {children}
                </pre>
              ),
              hr: () => <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', margin: '40px 0' }} />,
            }}
          />
        </div>

        {/* Related Cases */}
        {article.relatedCases && article.relatedCases.length > 0 && (
          <RelatedCases 
            cases={article.relatedCases.map((caseSlug: string) => ({
              title: caseSlug,
              slug: caseSlug
            }))} 
          />
        )}

        {/* Back to News */}
        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #e5e5e5' }}>
          <Link 
            href="/news"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#1a1a1a', textDecoration: 'none' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to News</span>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}

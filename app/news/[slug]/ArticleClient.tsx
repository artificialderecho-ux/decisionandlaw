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
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span style={tagStyle}>{article.category}</span>
            {article.subcategory && (
              <span style={tagStyle}>{article.subcategory}</span>
            )}
            {article.breaking && (
              <span style={{ ...tagStyle, backgroundColor: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca' }}>
                Breaking
              </span>
            )}
            {article.featured && (
              <span style={tagStyle}>Featured</span>
            )}
            {article.premium && (
              <span style={tagStyle}>Premium</span>
            )}
          </div>
          
          <h1 style={{ fontSize: '2.25rem', fontWeight: '700', marginBottom: '24px', color: '#1a1a1a', lineHeight: '1.2' }}>
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm" style={{ color: '#737373' }}>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{article.author}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{new Date(article.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            
            {article.readingTime && (
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{article.readingTime} min read</span>
              </div>
            )}
            
            {article.wordCount && (
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{article.wordCount} words</span>
              </div>
            )}
          </div>

          {/* Topics */}
          {article.topics && article.topics.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {article.topics.map((topic: string, index: number) => (
                <span 
                  key={index}
                  style={tagStyle}
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Article Content */}
        <div style={{ maxWidth: '48rem' }}>
          <MDXContent 
            components={{
              CaseHeader,
              KeyTakeaways,
              PracticeNote,
              CaseCitation,
              RelatedCases,
              h1: ({ children }: any) => <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '24px', marginTop: '32px' }}>{children}</h1>,
              h2: ({ children }: any) => <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>{children}</h2>,
              h3: ({ children }: any) => <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>{children}</h3>,
              p: ({ children }: any) => <p style={{ color: '#737373', lineHeight: '1.75', marginBottom: '16px' }}>{children}</p>,
              a: ({ href, children }: any) => (
                <a 
                  href={href} 
                  style={{ color: '#1a1a1a', textDecoration: 'underline' }}
                >
                  {children}
                </a>
              ),
              ul: ({ children }: any) => <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: '#737373', marginBottom: '16px', lineHeight: '1.75' }}>{children}</ul>,
              ol: ({ children }: any) => <ol style={{ listStyle: 'decimal', paddingLeft: '24px', color: '#737373', marginBottom: '16px', lineHeight: '1.75' }}>{children}</ol>,
              li: ({ children }: any) => <li style={{ marginBottom: '8px' }}>{children}</li>,
              blockquote: ({ children }: any) => (
                <blockquote style={{ borderLeft: '4px solid #1a1a1a', paddingLeft: '16px', fontStyle: 'italic', color: '#737373', margin: '16px 0' }}>
                  {children}
                </blockquote>
              ),
              code: ({ children }: any) => (
                <code style={{ backgroundColor: '#f4f4f5', color: '#1a1a1a', padding: '2px 4px', fontSize: '0.875em' }}>
                  {children}
                </code>
              ),
              pre: ({ children }: any) => (
                <pre style={{ backgroundColor: '#f4f4f5', border: '1px solid #e5e5e5', padding: '16px', overflow: 'auto', marginBottom: '16px' }}>
                  {children}
                </pre>
              ),
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
  );
}

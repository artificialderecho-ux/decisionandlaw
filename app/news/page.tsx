import Link from 'next/link';
import { Metadata } from 'next';
import { allArticles } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export const metadata: Metadata = {
  title: 'AI Legal News 2025 | Decision&Law',
  description: 'Latest news and updates on artificial intelligence legislation, case law, ethics, and regulatory developments affecting legal professionals and the legal industry.',
  keywords: 'AI legal news, artificial intelligence legislation, AI case law, legal AI ethics, AI regulation updates',
  openGraph: {
    title: 'AI Legal News 2025 | Decision&Law',
    description: 'Latest AI legal developments and news for legal professionals',
    type: 'website',
  },
};

export default function NewsPage() {
  const sortedArticles = allArticles.sort((a, b) => 
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const categories = ['All', ...Array.from(new Set(allArticles.map(article => article.category)))];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Legislation':
        return 'bg-stone-100 text-stone-700 border-stone-300';
      case 'Case Law':
        return 'bg-stone-100 text-stone-700 border-stone-300';
      case 'Ethics':
        return 'bg-stone-100 text-stone-700 border-stone-300';
      case 'AI Regulation':
        return 'bg-stone-100 text-stone-700 border-stone-300';
      default:
        return 'bg-stone-100 text-stone-700 border-stone-300';
    }
  };

  const featuredArticles = sortedArticles.filter(article => article.featured);
  const regularArticles = sortedArticles.filter(article => !article.featured);

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
            <li style={{ color: '#1a1a1a' }}>News</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '24px', color: '#1a1a1a' }}>
            AI Legal News
          </h1>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#737373', maxWidth: '48rem' }}>
            Stay informed about the latest developments in artificial intelligence legislation, case law, ethics, 
            and regulatory changes affecting legal professionals.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                key={category}
                href={category === 'All' ? '/news' : `/news?category=${category}`}
                style={{
                  padding: '8px 16px',
                  borderRadius: '0',
                  fontWeight: '500',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                  backgroundColor: category === 'All' ? '#1a1a1a' : '#f4f4f5',
                  color: category === 'All' ? '#ffffff' : '#1a1a1a',
                  border: '1px solid #e5e5e5',
                }}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-16">
            <h2 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '32px', color: '#1a1a1a' }}>
              Featured Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Link 
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{ 
                    backgroundColor: '#ffffff', 
                    border: '1px solid #e5e5e5',
                    borderRadius: '0',
                    overflow: 'hidden',
                    transition: 'all 0.3s',
                  }}>
                    <div style={{ 
                      aspectRatio: '16/9', 
                      backgroundColor: '#f4f4f5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <svg style={{ width: '64px', height: '64px', color: '#737373' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div style={{ padding: '24px' }}>
                      <div className="flex items-center space-x-3 mb-3">
                        <span style={{
                          padding: '4px 8px',
                          borderRadius: '0',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          border: '1px solid #e5e5e5',
                          backgroundColor: '#f4f4f5',
                          color: '#737373',
                        }}>
                          {article.category}
                        </span>
                        <span style={{ color: '#a1a1aa', fontSize: '0.875rem' }}>
                          {new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: '#1a1a1a' }}>
                        {article.title}
                      </h3>
                      <p style={{ color: '#737373', lineHeight: '1.6', marginBottom: '16px' }}>
                        {article.metaDescription || article.ogDescription || ''}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-sm" style={{ color: '#a1a1aa' }}>
                          <span>{article.author}</span>
                          {article.readingTime && (
                            <>
                              <span>•</span>
                              <span>{article.readingTime} min read</span>
                            </>
                          )}
                        </div>
                        <svg style={{ width: '20px', height: '20px', color: '#1a1a1a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        <div className="mb-16">
          <h2 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '32px', color: '#1a1a1a' }}>
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Link 
                key={article.slug}
                href={`/news/${article.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e5e5e5',
                  borderRadius: '0',
                  padding: '24px',
                  transition: 'all 0.3s',
                }}>
                  <div className="flex items-center space-x-3 mb-4">
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '0',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      border: '1px solid #e5e5e5',
                      backgroundColor: '#f4f4f5',
                      color: '#737373',
                    }}>
                      {article.category}
                    </span>
                    <span style={{ color: '#a1a1aa', fontSize: '0.875rem' }}>
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '12px', color: '#1a1a1a' }}>
                    {article.title}
                  </h3>
                  <p style={{ color: '#737373', lineHeight: '1.6', marginBottom: '16px', fontSize: '0.875rem' }}>
                    {article.metaDescription || article.ogDescription || ''}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2" style={{ color: '#a1a1aa' }}>
                      <span>{article.author}</span>
                      {article.readingTime && (
                        <>
                          <span>•</span>
                          <span>{article.readingTime} min</span>
                        </>
                      )}
                    </div>
                    <svg style={{ width: '16px', height: '16px', color: '#1a1a1a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div style={{ backgroundColor: '#f4f4f5', border: '1px solid #e5e5e5', borderRadius: '0', padding: '32px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: '#1a1a1a' }}>
                Stay Updated
              </h2>
              <p style={{ color: '#737373', lineHeight: '1.7' }}>
                Get weekly updates on AI legal developments delivered to your inbox. Our newsletter covers legislation, 
                case law, ethics opinions, and regulatory changes affecting legal professionals.
              </p>
            </div>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e5e5',
                  borderRadius: '0',
                  color: '#1a1a1a',
                  outline: 'none',
                }}
              />
              <button style={{
                width: '100%',
                padding: '12px 24px',
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                fontWeight: '600',
                borderRadius: '0',
                border: 'none',
                cursor: 'pointer',
              }}>
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

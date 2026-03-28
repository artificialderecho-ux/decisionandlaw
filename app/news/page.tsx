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
  // Sort articles by date (newest first)
  const sortedArticles = allArticles.sort((a, b) => 
    compareDesc(new Date(a.date), new Date(b.date))
  );

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allArticles.map(article => article.category)))];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Legislation':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Case Law':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Ethics':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'AI Regulation':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const featuredArticles = sortedArticles.filter(article => article.featured);
  const regularArticles = sortedArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-[120px]">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-[#D4AF37] hover:text-[#B8941F] transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-white">News</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1] bg-clip-text text-transparent">
            AI Legal News
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
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
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  category === 'All'
                    ? 'bg-[#D4AF37] text-black'
                    : 'bg-[#1A1A1A] text-gray-300 hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] border border-[#D4AF37]/20'
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#D4AF37]">
              Featured Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Link 
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  className="group bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-[#D4AF37]/20 to-[#B8941F]/20 flex items-center justify-center">
                    <svg className="w-16 h-16 text-[#D4AF37]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      {article.breaking && (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                          Breaking
                        </span>
                      )}
                      <span className="text-gray-400 text-sm">
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#D4AF37] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {article.metaDescription || article.ogDescription || ''}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-sm text-gray-400">
                        <span>{article.author}</span>
                        {article.readingTime && (
                          <>
                            <span>•</span>
                            <span>{article.readingTime} min read</span>
                          </>
                        )}
                      </div>
                      <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#D4AF37]">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Link 
                key={article.slug}
                href={`/news/${article.slug}`}
                className="group bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                  {article.breaking && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                      Breaking
                    </span>
                  )}
                  <span className="text-gray-400 text-sm">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#D4AF37] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                  {article.metaDescription || article.ogDescription || ''}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <span>{article.author}</span>
                    {article.readingTime && (
                      <>
                        <span>•</span>
                        <span>{article.readingTime} min</span>
                      </>
                    )}
                  </div>
                  <svg className="w-4 h-4 text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#D4AF37]">
                Stay Updated
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Get weekly updates on AI legal developments delivered to your inbox. Our newsletter covers legislation, 
                case law, ethics opinions, and regulatory changes affecting legal professionals.
              </p>
            </div>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
              />
              <button className="w-full px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#B8941F] transition-colors">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

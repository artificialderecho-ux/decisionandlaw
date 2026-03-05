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

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'pre-trial':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'decided':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'appealed':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

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
            <li>
              <Link href="/news" className="text-[#D4AF37] hover:text-[#B8941F] transition-colors">
                News
              </Link>
            </li>
            <li className="text-white">{article.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
              {article.category}
            </span>
            {article.subcategory && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                {article.subcategory}
              </span>
            )}
            {article.breaking && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                Breaking
              </span>
            )}
            {article.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                Featured
              </span>
            )}
            {article.premium && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">
                Premium
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1] bg-clip-text text-transparent">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-400 text-sm mb-6">
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
                  className="px-3 py-1 bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-full text-xs text-gray-300"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <MDXContent 
            components={{
              // Custom components for MDX
              CaseHeader,
              KeyTakeaways,
              PracticeNote,
              CaseCitation,
              RelatedCases,
              h1: ({ children }) => <h1 className="text-3xl font-bold text-white mb-6">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl font-semibold text-white mb-3">{children}</h3>,
              p: ({ children }) => <p className="text-gray-300 leading-relaxed mb-4">{children}</p>,
              a: ({ href, children }: any) => (
                <a 
                  href={href} 
                  className="text-[#D4AF37] hover:text-[#B8941F] transition-colors underline"
                >
                  {children}
                </a>
              ),
              ul: ({ children }) => <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">{children}</ol>,
              li: ({ children }) => <li>{children}</li>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-[#D4AF37] pl-4 italic text-gray-400 my-4">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-[#1A1A1A] text-[#D4AF37] px-2 py-1 rounded text-sm">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-4 overflow-x-auto">
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
        <div className="mt-12 pt-8 border-t border-[#D4AF37]/20">
          <Link 
            href="/news"
            className="inline-flex items-center space-x-2 text-[#D4AF37] hover:text-[#B8941F] transition-colors"
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

import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Legal Guides & Resources 2025 | Decision&Law',
  description: 'Comprehensive guides and resources for lawyers navigating artificial intelligence in legal practice, including ethics, compliance, risk management, and best practices.',
  keywords: 'AI legal guides, artificial intelligence law practice, lawyer AI resources, legal AI compliance, AI ethics guides',
  openGraph: {
    title: 'AI Legal Guides & Resources 2025 | Decision&Law',
    description: 'Essential guides for lawyers using AI in legal practice',
    type: 'website',
  },
};

export default function GuidesPage() {
  const guides = [
    {
      id: 1,
      title: 'AI Competence & Ethics Guide',
      description: 'Comprehensive guide to maintaining professional competence when using AI tools, including ethical obligations, client disclosure requirements, and supervision best practices.',
      category: 'Ethics',
      difficulty: 'Beginner',
      readTime: '15 min read',
      icon: '⚖️',
      featured: true
    },
    {
      id: 2,
      title: 'AI Risk Management Framework',
      description: 'Step-by-step implementation guide for NIST AI Risk Management Framework in legal practice, including governance, mapping, measurement, and management functions.',
      category: 'Compliance',
      difficulty: 'Advanced',
      readTime: '25 min read',
      icon: '🛡️',
      featured: true
    },
    {
      id: 3,
      title: 'AI Contract Drafting Best Practices',
      description: 'Practical guide to using AI for contract drafting while ensuring accuracy, compliance, and client protection. Includes template validation and review protocols.',
      category: 'Practice Management',
      difficulty: 'Intermediate',
      readTime: '20 min read',
      icon: '📝',
      featured: false
    },
    {
      id: 4,
      title: 'Legal Research AI Verification',
      description: 'Essential protocols for verifying AI-generated legal research, including citation validation, authority checking, and quality control procedures.',
      category: 'Research',
      difficulty: 'Intermediate',
      readTime: '18 min read',
      icon: '🔍',
      featured: false
    },
    {
      id: 5,
      title: 'Client Confidentiality in AI Systems',
      description: 'Complete guide to protecting client confidentiality when using cloud-based AI tools, including data segregation, encryption, and vendor assessment.',
      category: 'Security',
      difficulty: 'Advanced',
      readTime: '22 min read',
      icon: '🔒',
      featured: false
    },
    {
      id: 6,
      title: 'AI Bias Detection & Mitigation',
      description: 'Comprehensive guide to identifying and mitigating algorithmic bias in legal AI systems, including testing protocols and fairness metrics.',
      category: 'Compliance',
      difficulty: 'Advanced',
      readTime: '30 min read',
      icon: '⚖️',
      featured: false
    },
    {
      id: 7,
      title: 'AI Policy Implementation Guide',
      description: 'Step-by-step guide to developing and implementing AI governance policies for law firms, including templates and best practices.',
      category: 'Practice Management',
      difficulty: 'Intermediate',
      readTime: '28 min read',
      icon: '📋',
      featured: false
    },
    {
      id: 8,
      title: 'Malpractice Prevention with AI',
      description: 'Essential strategies for preventing malpractice when using AI tools, including verification protocols, documentation requirements, and insurance considerations.',
      category: 'Risk Management',
      difficulty: 'Beginner',
      readTime: '16 min read',
      icon: '🛡️',
      featured: false
    },
    {
      id: 9,
      title: 'Federal AI Compliance Checklist',
      description: 'Comprehensive checklist for complying with federal AI regulations, including FTC guidance, EEOC requirements, and NIST standards.',
      category: 'Compliance',
      difficulty: 'Intermediate',
      readTime: '20 min read',
      icon: '✅',
      featured: false
    }
  ];

  const categories = ['All', 'Ethics', 'Compliance', 'Practice Management', 'Research', 'Security', 'Risk Management'];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Ethics':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Compliance':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Practice Management':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Research':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Security':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Risk Management':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
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
            <li className="text-white">Guides</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1] bg-clip-text text-transparent">
            AI Legal Guides
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Comprehensive guides and resources for lawyers navigating artificial intelligence in legal practice. 
            From ethics and compliance to risk management and best practices.
          </p>
        </div>

        {/* Featured Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#D4AF37]">
            Featured Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.filter(guide => guide.featured).map((guide) => (
              <Link 
                key={guide.id} 
                href={`/guides/${guide.id}`}
                className="group bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center text-2xl">
                    {guide.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(guide.category)}`}>
                        {guide.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(guide.difficulty)}`}>
                        {guide.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{guide.readTime}</span>
                  <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#D4AF37]">
            All Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Link 
                key={guide.id} 
                href={`/guides/${guide.id}`}
                className="group bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center text-xl">
                    {guide.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(guide.category)}`}>
                        {guide.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(guide.difficulty)}`}>
                        {guide.difficulty}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{guide.readTime}</span>
                  <svg className="w-4 h-4 text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#D4AF37]">
            Additional Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Reference</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/tracker" className="text-[#D4AF37] hover:text-[#B8941F] transition-colors">
                    AI Regulation Tracker
                  </Link>
                </li>
                <li>
                  <Link href="/tracker/federal-ai-policy" className="text-[#D4AF37] hover:text-[#B8941F] transition-colors">
                    Federal AI Policy
                  </Link>
                </li>
                <li>
                  <Link href="/tracker/malpractice-cases" className="text-[#D4AF37] hover:text-[#B8941F] transition-colors">
                    Malpractice Cases
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Compliance Tools</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-[#D4AF37] hover:text-[#B8941F] transition-colors">
                    AI Risk Assessment Template
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#D4AF37] hover:text-[#B8941F] transition-colors">
                    NIST Framework Checklist
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#D4AF37] hover:text-[#B8941F] transition-colors">
                    AI Policy Template
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Training</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-[#D4AF37] hover:text-[#B8941F] transition-colors">
                    AI Ethics CLE Courses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#D4AF37] hover:text-[#B8941F] transition-colors">
                    Risk Management Webinars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#D4AF37] hover:text-[#B8941F] transition-colors">
                    Certification Programs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

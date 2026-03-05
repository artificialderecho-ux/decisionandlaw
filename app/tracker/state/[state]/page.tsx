import { notFound } from 'next/navigation';
import Link from 'next/link';
import { states } from '../../../lib/states';
import { TRACKER_CONTENT } from '../../../lib/tracker-content';
import { Metadata } from 'next';

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = states.find(s => s.slug === stateSlug);
  
  if (!state) {
    return {
      title: 'State Not Found | Decision&Law',
      description: 'The requested state information could not be found.',
    };
  }

  return {
    title: `${state.name} AI Law for Lawyers 2025 | Decision&Law`,
    description: `Complete guide to AI regulations and legal requirements for lawyers in ${state.name}. Current status: ${state.aiLegalStatus === 'enacted' ? 'Comprehensive AI legislation enacted' : state.aiLegalStatus === 'active-legislation' ? 'Active AI legislation pending' : state.aiLegalStatus === 'monitoring' ? 'Monitoring AI developments' : 'No specific AI legislation'}.`,
    keywords: `${state.name} AI law, ${state.name} artificial intelligence regulations, ${state.name} legal AI requirements, ${state.abbreviation} AI compliance, ${state.name} bar association AI guidance`,
    openGraph: {
      title: `${state.name} AI Law for Lawyers 2025 | Decision&Law`,
      description: `AI regulations and legal framework for legal professionals in ${state.name}`,
      type: 'article',
    },
  };
}

// Make the component async to handle async params in Next.js 15
export default async function StateDetailPage({ params }: { params: Promise<{ state: string }> }) {
  // Await params as required in Next.js 15
  const { state: stateSlug } = await params;
  
  // Find the state by slug
  const state = states.find(s => s.slug === stateSlug);
  
  if (!state) {
    notFound();
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'enacted':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'active-legislation':
        return 'bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30';
      case 'monitoring':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      case 'no-activity':
        return 'bg-gray-800/20 text-gray-500 border-gray-700/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'enacted':
        return 'Enacted';
      case 'active-legislation':
        return 'Active Legislation';
      case 'monitoring':
        return 'Monitoring';
      case 'no-activity':
        return 'No Activity';
      default:
        return 'Unknown';
    }
  };

  const getIntroductoryPhrase = (name: string, status: string) => {
    switch (status) {
      case 'enacted':
        return `${name} has enacted comprehensive AI legislation affecting legal professionals statewide.`;
      case 'active-legislation':
        return `${name} is currently considering AI legislation that will impact legal practice and client services.`;
      case 'monitoring':
        return `${name} is actively monitoring AI developments while federal regulations continue to evolve.`;
      case 'no-activity':
        return `${name} has not yet enacted specific AI legislation, but federal rules still apply to legal practitioners.`;
      default:
        return `${name} AI regulatory landscape continues to evolve.`;
    }
  };

  const getLawyersContent = (name: string, status: string, slug: string) => {
    const trackerData = TRACKER_CONTENT[slug];
    
    if (trackerData) {
      return {
        title: `What Lawyers in ${name} Need to Know`,
        paragraphs: trackerData.lawyerGuidance
      };
    }
    
    // Fallback to generic content based on status
    switch (status) {
      case 'active-legislation':
        return {
          title: `What Lawyers in ${name} Need to Know`,
          paragraphs: [
            `Several AI-related bills are currently moving through ${name}'s legislature, with proposals ranging from comprehensive AI governance frameworks to targeted regulations for legal AI applications. The most significant legislation includes mandatory AI system registration, bias testing requirements, and enhanced client disclosure rules.`,
            
            `Law firms should prepare for potential compliance by conducting internal audits of current AI usage and developing governance policies. The proposed legislation includes grandfather clauses for existing systems but requires future AI implementations to meet new standards for transparency and accountability.`,
            
            `The state bar association is actively monitoring these developments and preparing guidance for legal practitioners. Attorneys should participate in comment periods and stay informed about legislative timelines, as some bills may take effect as early as 2025.`
          ]
        };
      case 'monitoring':
        return {
          title: `What Lawyers in ${name} Need to Know`,
          paragraphs: [
            `${name} has not enacted specific AI legislation but is actively monitoring developments at both state and federal levels. The state attorney general's office has established an AI task force studying potential regulatory approaches and their impact on legal practice.`,
            
            `Federal AI regulations continue to evolve, including FTC guidelines on AI transparency and consumer protection, EEOC guidance on AI bias in employment decisions, and NIST standards for AI risk management. These federal rules apply to legal practitioners in ${name} when using AI systems that affect consumer rights or employment decisions.`,
            
            `The state bar association has issued advisory opinions emphasizing the importance of AI competence and client disclosure. While no specific state requirements exist, attorneys should follow ABA guidance and implement best practices for AI usage in legal services, including regular bias testing and human oversight protocols.`
          ]
        };
      case 'no-activity':
        return {
          title: `What Lawyers in ${name} Need to Know`,
          paragraphs: [
            `${name} has not yet enacted specific AI legislation, and there are no active bills addressing artificial intelligence regulation. However, federal AI regulations still apply to legal practitioners, including FTC guidelines on AI transparency and EEOC guidance on preventing AI bias in legal services.`,
            
            `Existing ethical rules continue to govern AI usage, including requirements for technology competence, client confidentiality, and supervision of non-lawyer staff. Lawyers must ensure they understand AI tools they use and maintain appropriate quality control over AI-assisted work product.`,
            
            `Attorneys should monitor federal developments and neighboring state regulations that may influence future ${name} policy. Implementing voluntary AI governance policies now can help prepare for potential future regulation and demonstrate commitment to ethical AI usage.`
          ]
        };
      default:
        return {
          title: `What Lawyers in ${name} Need to Know`,
          paragraphs: [
            `The AI regulatory landscape in ${name} continues to evolve. Legal practitioners should stay informed about developments and maintain compliance with existing ethical rules regarding technology usage.`
          ]
        };
    }
  };

  const getStateContent = (slug: string) => {
    return TRACKER_CONTENT[slug];
  };

  const getRelatedStates = (currentRegion: string, currentSlug: string) => {
    return states
      .filter(s => s.region === currentRegion && s.slug !== currentSlug)
      .slice(0, 3);
  };

  const lawyersContent = getLawyersContent(state.name, state.aiLegalStatus, state.slug);
  const relatedStates = getRelatedStates(state.region, state.slug);
  const stateContent = getStateContent(state.slug);

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
              <Link href="/tracker" className="text-[#D4AF37] hover:text-[#B8941F] transition-colors">
                Tracker
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/tracker/state" className="text-[#D4AF37] hover:text-[#B8941F] transition-colors">
                States
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-white">{state.name}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1] bg-clip-text text-transparent">
                {state.name} AI Law
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-4">
                {stateContent?.summary || getIntroductoryPhrase(state.name, state.aiLegalStatus)}
              </p>
              <p className="text-gray-400">
                {state.abbreviation} • Capital: {state.capital} • {state.region} Region
              </p>
            </div>
            <span className={`px-6 py-3 rounded-full text-lg font-medium border ${getStatusColor(state.aiLegalStatus)}`}>
              {getStatusText(state.aiLegalStatus)}
            </span>
          </div>
        </div>

        {/* What Lawyers Need to Know */}
        <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-[#D4AF37]">
            {lawyersContent.title}
          </h2>
          
          <div className="space-y-6">
            {lawyersContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Active Bills */}
        {stateContent?.activeBills && stateContent.activeBills.length > 0 && (
          <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-[#D4AF37]">
              Active AI Legislation
            </h2>
            
            <div className="space-y-6">
              {stateContent.activeBills.map((bill, index) => (
                <div key={index} className="border-l-4 border-[#D4AF37] pl-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">
                      {bill.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      bill.status === 'Passed' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                      bill.status === 'In committee' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                      'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}>
                      {bill.status}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {bill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Resources */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-[#D4AF37]">
            Key Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* State Bar */}
            <a 
              href={state.barUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/50 hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center group-hover:bg-[#D4AF37]/30 transition-colors">
                  <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors mb-2">
                {state.barAssociation}
              </h3>
              <p className="text-gray-400 text-sm">
                State bar association for licensing, ethics guidance, and AI practice resources
              </p>
            </a>

            {/* State Legislature */}
            <a 
              href={state.legislatureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/50 hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center group-hover:bg-[#D4AF37]/30 transition-colors">
                  <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors mb-2">
                {state.name} Legislature
              </h3>
              <p className="text-gray-400 text-sm">
                Track AI legislation, bills, and regulatory updates in the state legislature
              </p>
            </a>

            {/* ABA Ethics Opinions */}
            <a 
              href="/tracker/aba-opinions"
              className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/50 hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center group-hover:bg-[#D4AF37]/30 transition-colors">
                  <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors mb-2">
                ABA Ethics Opinions
              </h3>
              <p className="text-gray-400 text-sm">
                American Bar Association guidance on AI ethics and professional responsibility
              </p>
            </a>
          </div>
        </div>

        {/* Related States */}
        {relatedStates.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-[#D4AF37]">
              Related States ({state.region})
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedStates.map((relatedState) => (
                <Link 
                  key={relatedState.slug}
                  href={`/tracker/state/${relatedState.slug}`}
                  className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/50 hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                      {relatedState.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(relatedState.aiLegalStatus)}`}>
                      {getStatusText(relatedState.aiLegalStatus)}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    {relatedState.abbreviation} • {relatedState.capital}
                  </p>
                  <div className="flex items-center text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors">
                    <span className="text-sm">View Details</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to States */}
        <div className="mt-12">
          <Link 
            href="/tracker/state" 
            className="inline-flex items-center text-[#D4AF37] hover:text-[#B8941F] transition-colors text-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All States
          </Link>
        </div>

        {/* Last Updated */}
        <div className="mt-16 mb-8">
          <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#D4AF37] mb-2">
                  Last Updated
                </h3>
                <p className="text-gray-400 text-sm">
                  {stateContent?.lastUpdated || new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m0 0V3m0 0h5.418M9 3h5.418a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-gray-300 text-sm leading-relaxed">
                This page is updated regularly as legislation evolves. Check back frequently for the latest developments in {state.name} AI regulations and compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

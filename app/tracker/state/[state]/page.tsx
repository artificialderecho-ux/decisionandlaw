import { notFound } from 'next/navigation';
import Link from 'next/link';
import { State, states } from '../../../lib/states';
import { TRACKER_CONTENT } from '../../../lib/tracker-content';
import { Metadata } from 'next';

const BASE_URL = 'decisionandlaw.com';

export function generateStaticParams() {
  return states.map((state) => ({ state: state.slug }));
}

function getStatusTextForSeo(status: State['aiLegalStatus']) {
  switch (status) {
    case 'enacted':
      return 'Comprehensive AI legislation enacted';
    case 'active-legislation':
      return 'Active AI legislation pending';
    case 'monitoring':
      return 'Monitoring AI developments';
    default:
      return 'No specific AI legislation';
  }
}

function getStateJsonLd(state: State, baseUrl: string) {
  const statusText = getStatusTextForSeo(state.aiLegalStatus);

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://${baseUrl}/tracker/state/${state.slug}#webpage`,
    'url': `https://${baseUrl}/tracker/state/${state.slug}`,
    'name': `${state.name} AI Law for Lawyers 2025`,
    'description': `Complete guide to AI regulations and legal requirements for lawyers in ${state.name}. Current status: ${statusText}.`,
    'inLanguage': 'en-US',
    'isPartOf': {
      '@type': 'WebSite',
      '@id': `https://${baseUrl}#website`,
      'url': `https://${baseUrl}`,
      'name': 'Decision&Law',
      'description': 'AI Legal Intelligence for US Professionals',
    },
    'mainEntity': {
      '@type': 'Thing',
      'name': `${state.name} AI Legal Landscape`,
      'about': {
        '@type': 'Thing',
        'name': 'Artificial Intelligence Law',
      },
    },
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': `https://${baseUrl}`
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Tracker',
          'item': `https://${baseUrl}/tracker`
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'States',
          'item': `https://${baseUrl}/tracker/state`
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': state.name,
          'item': `https://${baseUrl}/tracker/state/${state.slug}`
        }
      ]
    },
  };
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = states.find(s => s.slug === stateSlug);
  
  if (!state) {
    return {
      title: 'State Not Found | Decision&Law',
      description: 'The requested article could not be found.',
    };
  }

  const ogImageUrl = `/api/og?state=${state.abbreviation}&name=${encodeURIComponent(state.name)}`;

  return {
    title: `${state.name} AI Law for Lawyers 2025 | Decision&Law`,
    description: `Complete guide to AI regulations and legal requirements for lawyers in ${state.name}. Current status: ${state.aiLegalStatus === 'enacted' ? 'Comprehensive AI legislation enacted' : state.aiLegalStatus === 'active-legislation' ? 'Active AI legislation pending' : state.aiLegalStatus === 'monitoring' ? 'Monitoring AI developments' : 'No specific AI legislation'}.`,
    keywords: `${state.name} AI law, ${state.name} artificial intelligence regulations, ${state.name} legal AI requirements, ${state.abbreviation} AI compliance, ${state.name} bar association AI guidance`,
    alternates: {
      canonical: `https://${BASE_URL}/tracker/state/${stateSlug}`,
      languages: {
        'en-US': `https://${BASE_URL}/tracker/state/${stateSlug}`,
        'x-default': `https://${BASE_URL}/tracker/state/${stateSlug}`,
      },
    },
    openGraph: {
      title: `${state.name} AI Law for Lawyers 2025 | Decision&Law`,
      description: `AI regulations and legal framework for legal professionals in ${state.name}`,
      url: `https://${BASE_URL}/tracker/state/${stateSlug}`,
      type: 'article',
      siteName: 'Decision&Law',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${state.name} AI Law`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${state.name} AI Law for Lawyers 2025 | Decision&Law`,
      description: `AI regulations and legal framework for legal professionals in ${state.name}`,
      images: [ogImageUrl],
    },
  };
}

export default async function StateDetailPage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params;
  
  const state = states.find(s => s.slug === stateSlug);
  
  if (!state) {
    notFound();
  }

  const jsonLd = getStateJsonLd(state, BASE_URL);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'enacted':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'active-legislation':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'monitoring':
        return 'bg-gray-100 text-gray-600 border-gray-200';
      case 'no-activity':
        return 'bg-gray-100 text-gray-500 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
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
    <div className="min-h-screen bg-white text-[#1a1a1a] pt-[120px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-[#737373] hover:text-[#1a1a1a] transition-colors">
                Home
              </Link>
            </li>
            <li className="text-[#e5e5e5]">/</li>
            <li>
              <Link href="/tracker" className="text-[#737373] hover:text-[#1a1a1a] transition-colors">
                Tracker
              </Link>
            </li>
            <li className="text-[#e5e5e5]">/</li>
            <li>
              <Link href="/tracker/state" className="text-[#737373] hover:text-[#1a1a1a] transition-colors">
                States
              </Link>
            </li>
            <li className="text-[#e5e5e5]">/</li>
            <li className="text-[#1a1a1a]">{state.name}</li>
          </ol>
        </nav>

        <div className="mb-10">
          <div className="flex items-start justify-between gap-6 mb-6">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[#1a1a1a]">
                {state.name} AI Law
              </h1>
              <p className="text-base text-[#737373] leading-relaxed mb-3">
                {stateContent?.summary || getIntroductoryPhrase(state.name, state.aiLegalStatus)}
              </p>
              <p className="text-sm text-[#8e8e93]">
                {state.abbreviation} • {state.capital} • {state.region}
              </p>
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold border shrink-0 ${getStatusColor(state.aiLegalStatus)}`}>
              {getStatusText(state.aiLegalStatus)}
            </span>
          </div>
        </div>

        <div className="bg-[#fafafa] border border-[#e5e5e5] rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#1a1a1a]">
            {lawyersContent.title}
          </h2>
          
          <div className="space-y-4">
            {lawyersContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-[#6e6e73] leading-relaxed text-sm">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {stateContent?.activeBills && stateContent.activeBills.length > 0 && (
          <div className="bg-[#fafafa] border border-[#e5e5e5] rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#1a1a1a]">
              Active AI Legislation
            </h2>
            
            <div className="space-y-6">
              {stateContent.activeBills.map((bill, index) => (
                <div key={index} className="border-l-4 border-[#1a1a1a] pl-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-[#1a1a1a]">
                      {bill.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      bill.status === 'Passed' ? 'bg-green-100 text-green-800 border-green-200' :
                      bill.status === 'In committee' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                      'bg-gray-100 text-gray-600 border-gray-200'
                    }`}>
                      {bill.status}
                    </span>
                  </div>
                  <p className="text-[#737373] leading-relaxed">
                    {bill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#1a1a1a]">
            Key Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a 
              href={state.barUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#e5e5e5] p-4 hover:border-[#0066cc] hover:shadow-md transition-all duration-200 group flex items-start gap-3 h-auto"
            >
              <div className="w-8 h-8 bg-[#f4f4f5] flex items-center justify-center group-hover:bg-[#0066cc] group-hover:text-white transition-colors shrink-0 mt-1">
                <svg className="w-3.5 h-3.5 text-[#1a1a1a] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-[#1a1a1a] group-hover:text-[#0066cc] transition-colors mb-1">
                    {state.barAssociation}
                  </h3>
                  <svg className="w-4 h-4 text-[#737373] shrink-0 mt-1 group-hover:text-[#0066cc] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-[#737373] text-sm leading-relaxed">
                  Licensing, ethics guidance, and AI practice resources
                </p>
              </div>
            </a>

            <a 
              href={state.legislatureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#e5e5e5] p-4 hover:border-[#0066cc] hover:shadow-md transition-all duration-200 group flex items-start gap-3 h-auto"
            >
              <div className="w-8 h-8 bg-[#f4f4f5] flex items-center justify-center group-hover:bg-[#0066cc] group-hover:text-white transition-colors shrink-0 mt-1">
                <svg className="w-3.5 h-3.5 text-[#1a1a1a] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-[#1a1a1a] group-hover:text-[#0066cc] transition-colors mb-1">
                    {state.name} Legislature
                  </h3>
                  <svg className="w-4 h-4 text-[#737373] shrink-0 mt-1 group-hover:text-[#0066cc] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-[#737373] text-sm leading-relaxed">
                  Track AI legislation, bills, and regulatory updates
                </p>
              </div>
            </a>

            <a 
              href="/tracker/aba-opinions"
              className="bg-white border border-[#e5e5e5] p-4 hover:border-[#0066cc] hover:shadow-md transition-all duration-200 group flex items-start gap-3 h-auto"
            >
              <div className="w-8 h-8 bg-[#f4f4f5] flex items-center justify-center group-hover:bg-[#0066cc] group-hover:text-white transition-colors shrink-0 mt-1">
                <svg className="w-3.5 h-3.5 text-[#1a1a1a] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-[#1a1a1a] group-hover:text-[#0066cc] transition-colors mb-1">
                    ABA Ethics Opinions
                  </h3>
                  <svg className="w-4 h-4 text-[#737373] shrink-0 mt-1 group-hover:text-[#0066cc] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-[#737373] text-sm leading-relaxed">
                  AI ethics and professional responsibility guidance
                </p>
              </div>
            </a>
          </div>
        </div>

        {relatedStates.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#1a1a1a]">
              Related States ({state.region})
            </h2>
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-0">
              {relatedStates.map((relatedState) => (
                <Link 
                  key={relatedState.slug}
                  href={`/tracker/state/${relatedState.slug}`}
                  className="bg-white border border-[#e5e5e5] p-4 hover:border-[#0066cc] hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-semibold text-[#1a1a1a] group-hover:text-[#0066cc] transition-colors">
                      {relatedState.name}
                    </h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(relatedState.aiLegalStatus)}`}>
                      {getStatusText(relatedState.aiLegalStatus)}
                    </span>
                  </div>
                  <p className="text-[#737373] text-sm mb-3">
                    {relatedState.abbreviation} • {relatedState.capital}
                  </p>
                  <div className="flex items-center text-[#0066cc]">
                    <span className="text-sm font-medium">View Details</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12">
          <Link 
            href="/tracker/state" 
            className="inline-flex items-center text-[#737373] hover:text-[#1a1a1a] transition-colors text-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All States
          </Link>
        </div>

        <div className="mt-16 mb-8">
          <div className="bg-[#f4f4f5] border border-[#e5e5e5] p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  Last Updated
                </h3>
                <p className="text-[#737373] text-sm">
                  {stateContent?.lastUpdated || new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              <div className="w-12 h-12 bg-[#e5e5e5] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#737373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m0 0V3m0 0h5.418M9 3h5.418a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#e5e5e5]">
              <p className="text-[#737373] text-sm leading-relaxed">
                This page is updated regularly as legislation evolves. Check back frequently for the latest developments in {state.name} AI regulations and compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

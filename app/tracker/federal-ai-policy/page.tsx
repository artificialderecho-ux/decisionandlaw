import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Federal AI Policy Tracker 2025 | Decision&Law',
  description: 'Comprehensive guide to federal AI initiatives, executive orders, and agency guidance from the White House, FTC, EEOC, NIST, and other federal agencies affecting legal professionals.',
  keywords: 'federal AI policy, executive order AI, FTC AI guidance, EEOC AI guidance, NIST AI framework, federal AI regulations',
  openGraph: {
    title: 'Federal AI Policy Tracker 2025 | Decision&Law',
    description: 'Track federal AI initiatives and guidance affecting legal professionals',
    type: 'article',
  },
};

export default function FederalAIPolicyPage() {
  const federalInitiatives = [
    {
      name: 'Executive Order on AI (2023)',
      agency: 'White House',
      date: 'October 2023',
      summary: 'Comprehensive executive order establishing new standards for AI safety, security, and innovation. Directs federal agencies to develop AI governance frameworks and implement specific requirements for federal AI systems.',
      implications: 'Sets foundation for federal AI regulation, requires agencies to develop AI governance, establishes AI Safety Institute, affects federal contractors and AI vendors.'
    },
    {
      name: 'Blueprint for an AI Bill of Rights',
      agency: 'White House Office of Science and Technology Policy',
      date: 'October 2022',
      summary: 'Framework outlining five core principles for AI systems: safe and effective systems, algorithmic discrimination protections, data privacy, notice and explanation, and human alternatives.',
      implications: 'Provides guidance for AI development and deployment, influences federal agency rulemaking, serves as reference for state legislation and industry standards.'
    },
    {
      name: 'NIST AI Risk Management Framework',
      agency: 'National Institute of Standards and Technology',
      date: 'January 2023',
      summary: 'Comprehensive framework for managing AI risks through four core functions: govern, map, measure, and manage. Provides detailed guidance for AI risk assessment and mitigation.',
      implications: 'Becoming de facto standard for AI risk management, required for federal contractors, influences state AI legislation, essential for law firm AI governance.'
    },
    {
      name: 'FTC AI Guidance',
      agency: 'Federal Trade Commission',
      date: 'February 2023',
      summary: 'Business guidance emphasizing that existing laws apply to AI systems, focusing on truth in advertising, consumer protection, and preventing AI-enabled fraud and discrimination.',
      implications: 'Directly affects law firms using AI for client services, requires transparency in AI-assisted claims, establishes liability for deceptive AI practices.'
    },
    {
      name: 'EEOC AI Guidance',
      agency: 'Equal Employment Opportunity Commission',
      date: 'May 2022',
      summary: 'Technical guidance clarifying that Title VII applies to AI employment decisions, requiring employers to ensure AI systems do not discriminate based on protected characteristics.',
      implications: 'Affects law firms using AI in hiring and employment decisions, requires AI bias testing and validation, establishes liability for discriminatory AI outcomes.'
    }
  ];

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
            <li className="text-white">Federal AI Policy</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1] bg-clip-text text-transparent">
            Federal AI Policy
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Track federal AI initiatives, executive orders, and agency guidance that establish the national framework 
            for artificial intelligence governance and affect legal professionals nationwide.
          </p>
        </div>

        {/* Federal Initiatives */}
        <div className="space-y-8 mb-16">
          {federalInitiatives.map((initiative, index) => (
            <div key={index} className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <h2 className="text-2xl font-bold text-white">
                      {initiative.name}
                    </h2>
                    <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm font-medium">
                      {initiative.agency}
                    </span>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <span>📅 {initiative.date}</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-[#D4AF37] mb-3">
                    Summary
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {initiative.summary}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-[#D4AF37] mb-3">
                    Legal Implications
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {initiative.implications}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Takeaways */}
        <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#D4AF37]">
            Key Takeaways for Legal Professionals
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Compliance Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Federal AI guidance applies to all law firms using AI systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">AI risk management frameworks are becoming mandatory for federal contractors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Bias testing and validation required for employment-related AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Transparency and disclosure obligations for AI-assisted services</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Risk Management</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Implement NIST AI Risk Management Framework</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Conduct regular AI bias audits and impact assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Maintain documentation of AI system validation and testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Establish AI governance policies and oversight procedures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back to Tracker */}
        <div className="mt-12">
          <Link 
            href="/tracker" 
            className="inline-flex items-center text-[#D4AF37] hover:text-[#B8941F] transition-colors text-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Tracker
          </Link>
        </div>
      </div>
    </div>
  );
}

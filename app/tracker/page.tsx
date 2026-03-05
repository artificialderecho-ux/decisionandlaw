import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Regulation Tracker 2025 | Decision&Law',
  description: 'Comprehensive tracker of AI regulations, legislation, and legal developments affecting lawyers and legal professionals across all 50 states and federal agencies.',
  keywords: 'AI regulation tracker, artificial intelligence laws, legal AI compliance, state AI legislation, federal AI policy, lawyer AI guidance',
  openGraph: {
    title: 'AI Regulation Tracker 2025 | Decision&Law',
    description: 'Track AI regulations and legislation affecting legal professionals',
    type: 'website',
  },
};

export default function TrackerPage() {
  // Mock statistics - in real app these would come from API
  const stats = {
    enacted: 16,
    activeLegislation: 15,
    monitoring: 12,
    noActivity: 7,
    totalFederal: 5,
    totalCases: 12
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
            <li className="text-white">Tracker</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1] bg-clip-text text-transparent">
            AI Regulation Tracker
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Track and monitor AI regulations, policies, and legal developments across different jurisdictions. 
            Stay informed about legislation, case law, and ethical guidance affecting legal professionals.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">{stats.enacted}</div>
            <div className="text-gray-400 text-sm">States Enacted</div>
          </div>
          <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-6">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">{stats.activeLegislation}</div>
            <div className="text-gray-400 text-sm">Active Legislation</div>
          </div>
          <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">{stats.monitoring}</div>
            <div className="text-gray-400 text-sm">Monitoring</div>
          </div>
          <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-6">
            <div className="text-3xl font-bold text-gray-400 mb-2">{stats.noActivity}</div>
            <div className="text-gray-400 text-sm">No Activity</div>
          </div>
          <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">{stats.totalCases}</div>
            <div className="text-gray-400 text-sm">Malpractice Cases</div>
          </div>
        </div>

        {/* Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Link 
            href="/tracker/state" 
            className="group bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37]/50 hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center group-hover:bg-[#D4AF37]/30 transition-colors">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <svg className="w-6 h-6 text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-[#D4AF37] transition-colors">
              50-State Index
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Complete coverage of AI legislation and regulations across all 50 states. Track enacted laws, active bills, and regulatory developments by state.
            </p>
            <div className="flex items-center text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors">
              <span className="font-medium">Explore States</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link 
            href="/tracker/federal-ai-policy" 
            className="group bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37]/50 hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center group-hover:bg-[#D4AF37]/30 transition-colors">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <svg className="w-6 h-6 text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-[#D4AF37] transition-colors">
              Federal AI Policy
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Track federal AI initiatives including executive orders, agency guidance, and regulatory frameworks from the White House, FTC, EEOC, and NIST.
            </p>
            <div className="flex items-center text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors">
              <span className="font-medium">View Federal Policy</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link 
            href="/tracker/aba-opinions" 
            className="group bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37]/50 hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center group-hover:bg-[#D4AF37]/30 transition-colors">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <svg className="w-6 h-6 text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-[#D4AF37] transition-colors">
              ABA Opinions
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              American Bar Association ethics opinions and formal guidance on artificial intelligence usage in legal practice, competence requirements, and client confidentiality.
            </p>
            <div className="flex items-center text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors">
              <span className="font-medium">Read ABA Guidance</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link 
            href="/tracker/malpractice-cases" 
            className="group bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37]/50 hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center group-hover:bg-[#D4AF37]/30 transition-colors">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c-.94 1.543.826 3.31 2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c.94-1.543-.826-3.31-2.37-2.37a1.724 1.724 0 00-2.572-1.065c-.426-1.756-2.924-1.756-3.35 0a1.724 1.724 0 00-2.573 1.066c-1.543-.94-3.31.826-2.37 2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <svg className="w-6 h-6 text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-[#D4AF37] transition-colors">
              Malpractice Cases
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Track legal malpractice cases involving artificial intelligence, including AI research errors, confidentiality breaches, and competence issues in AI-assisted practice.
            </p>
            <div className="flex items-center text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors">
              <span className="font-medium">View Cases</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Quick Stats Summary */}
        <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#D4AF37]">
            Current Landscape
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">State Activity</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total States</span>
                  <span className="text-white font-medium">50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">With AI Laws</span>
                  <span className="text-green-400 font-medium">{stats.enacted}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Bills</span>
                  <span className="text-[#D4AF37] font-medium">{stats.activeLegislation}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Federal Initiatives</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Policies</span>
                  <span className="text-white font-medium">{stats.totalFederal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Agency Guidance</span>
                  <span className="text-blue-400 font-medium">4+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Executive Orders</span>
                  <span className="text-purple-400 font-medium">2</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Legal Impact</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Malpractice Cases</span>
                  <span className="text-white font-medium">{stats.totalCases}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">ABA Opinions</span>
                  <span className="text-[#D4AF37] font-medium">6</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bar Guidance</span>
                  <span className="text-green-400 font-medium">15+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

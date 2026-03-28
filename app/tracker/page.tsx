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
  const stats = {
    enacted: 16,
    activeLegislation: 15,
    monitoring: 12,
    noActivity: 7,
    totalFederal: 5,
    totalCases: 12
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
            <li style={{ color: '#1a1a1a' }}>Tracker</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="mb-16">
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '24px', color: '#1a1a1a' }}>
            AI Regulation Tracker
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#737373', lineHeight: '1.7', maxWidth: '48rem' }}>
            Track and monitor AI regulations, policies, and legal developments across different jurisdictions. 
            Stay informed about legislation, case law, and ethical guidance affecting legal professionals.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          <div style={{ backgroundColor: '#f4f4f5', border: '1px solid #e5e5e5', padding: '24px' }}>
            <div style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '8px', color: '#1a1a1a' }}>{stats.enacted}</div>
            <div style={{ fontSize: '0.875rem', color: '#737373' }}>States Enacted</div>
          </div>
          <div style={{ backgroundColor: '#f4f4f5', border: '1px solid #e5e5e5', padding: '24px' }}>
            <div style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '8px', color: '#1a1a1a' }}>{stats.activeLegislation}</div>
            <div style={{ fontSize: '0.875rem', color: '#737373' }}>Active Legislation</div>
          </div>
          <div style={{ backgroundColor: '#f4f4f5', border: '1px solid #e5e5e5', padding: '24px' }}>
            <div style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '8px', color: '#737373' }}>{stats.monitoring}</div>
            <div style={{ fontSize: '0.875rem', color: '#737373' }}>Monitoring</div>
          </div>
          <div style={{ backgroundColor: '#f4f4f5', border: '1px solid #e5e5e5', padding: '24px' }}>
            <div style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '8px', color: '#737373' }}>{stats.noActivity}</div>
            <div style={{ fontSize: '0.875rem', color: '#737373' }}>No Activity</div>
          </div>
          <div style={{ backgroundColor: '#f4f4f5', border: '1px solid #e5e5e5', padding: '24px' }}>
            <div style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '8px', color: '#1a1a1a' }}>{stats.totalCases}</div>
            <div style={{ fontSize: '0.875rem', color: '#737373' }}>Malpractice Cases</div>
          </div>
        </div>

        {/* Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Link 
            href="/tracker/state" 
            style={{ textDecoration: 'none' }}
          >
            <div style={{ 
              backgroundColor: '#ffffff', 
              border: '1px solid #e5e5e5',
              padding: '32px',
              transition: 'all 0.3s',
            }}>
              <div className="flex items-start justify-between mb-6">
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: '#f4f4f5',
                  border: '1px solid #e5e5e5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg className="w-8 h-8" style={{ color: '#1a1a1a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <svg className="w-6 h-6" style={{ color: '#1a1a1a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: '#1a1a1a' }}>
                50-State Index
              </h2>
              <p style={{ color: '#737373', lineHeight: '1.6', marginBottom: '16px' }}>
                Complete coverage of AI legislation and regulations across all 50 states. Track enacted laws, active bills, and regulatory developments by state.
              </p>
              <div style={{ color: '#1a1a1a' }}>
                <span style={{ fontWeight: '500' }}>Explore States</span>
                <svg className="w-4 h-4 ml-2" style={{ display: 'inline' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <Link 
            href="/tracker/federal-ai-policy" 
            style={{ textDecoration: 'none' }}
          >
            <div style={{ 
              backgroundColor: '#ffffff', 
              border: '1px solid #e5e5e5',
              padding: '32px',
              transition: 'all 0.3s',
            }}>
              <div className="flex items-start justify-between mb-6">
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: '#f4f4f5',
                  border: '1px solid #e5e5e5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg className="w-8 h-8" style={{ color: '#1a1a1a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <svg className="w-6 h-6" style={{ color: '#1a1a1a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: '#1a1a1a' }}>
                Federal AI Policy
              </h2>
              <p style={{ color: '#737373', lineHeight: '1.6', marginBottom: '16px' }}>
                Track federal AI initiatives including executive orders, agency guidance, and regulatory frameworks from the White House, FTC, EEOC, and NIST.
              </p>
              <div style={{ color: '#1a1a1a' }}>
                <span style={{ fontWeight: '500' }}>View Federal Policy</span>
                <svg className="w-4 h-4 ml-2" style={{ display: 'inline' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <Link 
            href="/tracker/aba-opinions" 
            style={{ textDecoration: 'none' }}
          >
            <div style={{ 
              backgroundColor: '#ffffff', 
              border: '1px solid #e5e5e5',
              padding: '32px',
              transition: 'all 0.3s',
            }}>
              <div className="flex items-start justify-between mb-6">
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: '#f4f4f5',
                  border: '1px solid #e5e5e5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg className="w-8 h-8" style={{ color: '#1a1a1a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <svg className="w-6 h-6" style={{ color: '#1a1a1a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: '#1a1a1a' }}>
                ABA Opinions
              </h2>
              <p style={{ color: '#737373', lineHeight: '1.6', marginBottom: '16px' }}>
                American Bar Association ethics opinions and formal guidance on artificial intelligence usage in legal practice, competence requirements, and client confidentiality.
              </p>
              <div style={{ color: '#1a1a1a' }}>
                <span style={{ fontWeight: '500' }}>Read ABA Guidance</span>
                <svg className="w-4 h-4 ml-2" style={{ display: 'inline' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <Link 
            href="/tracker/malpractice-cases" 
            style={{ textDecoration: 'none' }}
          >
            <div style={{ 
              backgroundColor: '#ffffff', 
              border: '1px solid #e5e5e5',
              padding: '32px',
              transition: 'all 0.3s',
            }}>
              <div className="flex items-start justify-between mb-6">
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: '#f4f4f5',
                  border: '1px solid #e5e5e5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg className="w-8 h-8" style={{ color: '#1a1a1a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c-.94 1.543.826 3.31 2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c.94-1.543-.826-3.31-2.37-2.37a1.724 1.724 0 00-2.572-1.065c-.426-1.756-2.924-1.756-3.35 0a1.724 1.724 0 00-2.573 1.066c-1.543-.94-3.31.826-2.37 2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <svg className="w-6 h-6" style={{ color: '#1a1a1a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: '#1a1a1a' }}>
                Malpractice Cases
              </h2>
              <p style={{ color: '#737373', lineHeight: '1.6', marginBottom: '16px' }}>
                Track legal malpractice cases involving artificial intelligence, including AI research errors, confidentiality breaches, and competence issues in AI-assisted practice.
              </p>
              <div style={{ color: '#1a1a1a' }}>
                <span style={{ fontWeight: '500' }}>View Cases</span>
                <svg className="w-4 h-4 ml-2" style={{ display: 'inline' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Stats Summary */}
        <div style={{ backgroundColor: '#f4f4f5', border: '1px solid #e5e5e5', padding: '32px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: '#1a1a1a' }}>
            Current Landscape
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '12px', color: '#1a1a1a' }}>State Activity</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span style={{ color: '#737373' }}>Total States</span>
                  <span style={{ color: '#1a1a1a', fontWeight: '500' }}>50</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#737373' }}>With AI Laws</span>
                  <span style={{ color: '#1a1a1a', fontWeight: '500' }}>{stats.enacted}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#737373' }}>Active Bills</span>
                  <span style={{ color: '#1a1a1a', fontWeight: '500' }}>{stats.activeLegislation}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '12px', color: '#1a1a1a' }}>Federal Initiatives</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span style={{ color: '#737373' }}>Active Policies</span>
                  <span style={{ color: '#1a1a1a', fontWeight: '500' }}>{stats.totalFederal}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#737373' }}>Agency Guidance</span>
                  <span style={{ color: '#1a1a1a', fontWeight: '500' }}>4+</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#737373' }}>Executive Orders</span>
                  <span style={{ color: '#1a1a1a', fontWeight: '500' }}>2</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '12px', color: '#1a1a1a' }}>Legal Impact</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span style={{ color: '#737373' }}>Malpractice Cases</span>
                  <span style={{ color: '#1a1a1a', fontWeight: '500' }}>{stats.totalCases}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#737373' }}>ABA Opinions</span>
                  <span style={{ color: '#1a1a1a', fontWeight: '500' }}>6</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#737373' }}>Bar Guidance</span>
                  <span style={{ color: '#1a1a1a', fontWeight: '500' }}>15+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

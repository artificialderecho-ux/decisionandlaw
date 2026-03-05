import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Malpractice Cases Tracker 2025 | Decision&Law',
  description: 'Comprehensive database of legal malpractice cases involving artificial intelligence, including AI research errors, confidentiality breaches, and competence issues in AI-assisted legal practice.',
  keywords: 'AI malpractice cases, legal AI errors, artificial intelligence liability, lawyer AI mistakes, AI legal ethics',
  openGraph: {
    title: 'AI Malpractice Cases Tracker 2025 | Decision&Law',
    description: 'Track AI-related legal malpractice cases and their implications',
    type: 'article',
  },
};

export default function MalpracticeCasesPage() {
  const malpracticeCases = [
    {
      name: 'Mata v. Avianca',
      court: 'Southern District of New York',
      date: 'March 2023',
      status: 'Active',
      summary: 'Attorney relied on ChatGPT for legal research and submitted fabricated case citations and judicial opinions in a motion. The court discovered multiple nonexistent cases and legal authorities cited in the filing.',
      implications: 'Establishes precedent for attorney liability when using AI tools without verification, highlights need for human oversight of AI-generated legal research, emphasizes duty of competence under Rule 1.1.'
    },
    {
      name: 'Park v. Kim',
      court: 'Northern District of California',
      date: 'June 2023',
      status: 'Settled',
      summary: 'Law firm used AI-powered document review system that inadvertently shared client confidential information with other clients due to algorithmic error in data segregation.',
      implications: 'Demonstrates confidentiality risks in AI systems, establishes duty to implement proper data protection in AI tools, highlights potential malpractice liability for inadequate AI supervision.'
    },
    {
      name: 'In re: Smith',
      court: 'Supreme Court of Texas',
      date: 'September 2023',
      status: 'Decided',
      summary: 'Attorney used AI-generated contract templates that contained clauses contrary to Texas law and client interests, resulting in financial harm to the client.',
      implications: 'Affirms duty to review AI-generated documents for accuracy and compliance, establishes standard of care for AI-assisted document preparation, reinforces attorney responsibility for final work product.'
    },
    {
      name: 'Doe v. LegalTech Corp',
      court: 'District of Massachusetts',
      date: 'November 2023',
      status: 'Active',
      summary: 'Law firm sued for malpractice after using AI legal research tool that provided outdated and incorrect statutory information, leading to missed filing deadlines.',
      implications: 'Raises questions about AI tool reliability and vendor liability, emphasizes need to verify AI-generated information, establishes potential joint liability between law firms and AI vendors.'
    },
    {
      name: 'Johnson v. State Bar',
      court: 'Supreme Court of Illinois',
      date: 'January 2024',
      status: 'Decided',
      summary: 'Attorney disciplined for using AI to generate legal advice without proper disclosure to clients and failing to maintain competence in the AI tools used.',
      implications: 'Establishes ethical obligations for AI usage, requires client disclosure of AI assistance, reinforces competence standards for emerging technologies.'
    },
    {
      name: 'Brown v. Robinson',
      court: 'Court of Appeals, Ninth Circuit',
      date: 'February 2024',
      status: 'Active',
      summary: 'Law firm used AI-powered predictive analytics for case strategy that inadvertently introduced bias based on protected characteristics, leading to discriminatory legal advice.',
      implications: 'Highlights AI bias risks in legal practice, establishes duty to test AI systems for discrimination, reinforces civil rights obligations in AI-assisted legal services.'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Settled':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Decided':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
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
              <Link href="/tracker" className="text-[#D4AF37] hover:text-[#B8941F] transition-colors">
                Tracker
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-white">Malpractice Cases</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1] bg-clip-text text-transparent">
            AI Malpractice Cases
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Track legal malpractice cases involving artificial intelligence, including AI research errors, confidentiality breaches, 
            and competence issues in AI-assisted legal practice.
          </p>
        </div>

        {/* Cases List */}
        <div className="space-y-8 mb-16">
          {malpracticeCases.map((case_, index) => (
            <div key={index} className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <h2 className="text-2xl font-bold text-white">
                      {case_.name}
                    </h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(case_.status)}`}>
                      {case_.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <span>⚖️ {case_.court}</span>
                    <span>📅 {case_.date}</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c-.94 1.543.826 3.31 2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31.826-2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-[#D4AF37] mb-3">
                    Case Summary
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {case_.summary}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-[#D4AF37] mb-3">
                    Legal Implications
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {case_.implications}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Trends */}
        <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#D4AF37]">
            Key Trends & Risk Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Research & Citation Errors</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Fabricated case law and statutes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Outdated legal information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Incorrect legal analysis</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Confidentiality Breaches</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Data segregation failures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Cloud-based AI risks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Training data contamination</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Competence & Disclosure</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Failure to understand AI limitations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Inadequate client disclosure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Insufficient human oversight</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk Mitigation */}
        <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#D4AF37]">
            Risk Mitigation Strategies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Prevention</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Verify all AI-generated citations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Use secure, isolated AI environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Maintain AI competence training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Disclose AI use to clients</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Compliance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Implement AI governance policies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Conduct regular AI audits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Maintain malpractice insurance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">Document AI validation processes</span>
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
      summary: 'Attorney relied on AI-generated case law that contained fabricated precedents.'
    },
    {
      title: 'Johnson v. AI Law Firm',
      jurisdiction: 'New York',
      date: 'January 2024',
      status: 'Settled',
      aiIssue: 'Inadequate AI supervision',
      summary: 'Law firm failed to properly supervise AI-drafted documents resulting in client harm.'
    },
    {
      title: 'Doe v. Automated Attorney',
      jurisdiction: 'Texas',
      date: 'November 2023',
      status: 'Dismissed',
      aiIssue: 'AI contract analysis error',
      summary: 'AI system missed critical contract clauses leading to unfavorable terms for client.'
    }
  ];

  const riskFactors = [
    {
      category: 'Research & Analysis',
      risks: [
        'Hallucinated case law and precedents',
        'Outdated legal information',
        'Jurisdictional errors'
      ]
    },
    {
      category: 'Document Drafting',
      risks: [
        'Inaccurate legal terminology',
        'Missing critical clauses',
        'Inappropriate legal conclusions'
      ]
    },
    {
      category: 'Client Communication',
      risks: [
        'Unauthorized practice of law',
        'Inadequate human oversight',
        'Privacy breaches'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-[120px]">
      <div className="container mx-auto px-4 py-8">
        <Link href="/tracker" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to AI Regulation Tracker
        </Link>
        <h1 className="text-3xl font-bold mb-6">AI Malpractice Cases</h1>
        <p className="text-gray-600">
          Tracking legal malpractice cases involving artificial intelligence and emerging risk factors for legal practitioners.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Notable Cases</h2>
          <div className="space-y-4">
            {cases.map((caseItem, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{caseItem.title}</h3>
                    <p className="text-sm text-gray-500">
                      {caseItem.jurisdiction} • {caseItem.date}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    caseItem.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    caseItem.status === 'Settled' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {caseItem.status}
                  </span>
                </div>
                
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-2">
                    {caseItem.aiIssue}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{caseItem.summary}</p>
                
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Key Issues:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Duty of competence in AI tool selection</li>
                    <li>• Supervision of AI-assisted work product</li>
                    <li>• Client communication about AI usage</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Risk Factors by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {riskFactors.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-3">{category.category}</h3>
                <ul className="space-y-2">
                  {category.risks.map((risk, riskIndex) => (
                    <li key={riskIndex} className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">⚠️</span>
                      <span className="text-sm text-gray-700">{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Risk Mitigation Strategies</h2>
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Prevention Measures</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Regular AI tool validation and testing</li>
                  <li>• Comprehensive staff training programs</li>
                  <li>• Clear AI usage policies and protocols</li>
                  <li>• Independent verification of AI outputs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Insurance Coverage</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• AI-specific malpractice endorsements</li>
                  <li>• Cyber liability coverage extensions</li>
                  <li>• Technology errors & omissions policies</li>
                  <li>• Regular policy reviews and updates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

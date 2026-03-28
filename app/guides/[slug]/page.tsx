import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  return [
    { slug: 'ai-adoption-law-firms' },
    { slug: 'contract-review-ai-production' },
    { slug: 'ai-governance-ethics' },
    { slug: 'e-discovery-generative-ai' },
    { slug: 'ai-powered-legal-research' },
    { slug: 'roi-legal-ai-metrics' },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guides: Record<string, { title: string; description: string }> = {
    'ai-adoption-law-firms': {
      title: 'AI Adoption in Law Firms: A Practical Framework',
      description: 'A step-by-step framework for evaluating, selecting, and implementing AI tools in legal practice.',
    },
    'contract-review-ai-production': {
      title: 'Contract Review with AI: From Pilot to Production',
      description: 'How to move from testing AI contract review tools to enterprise-scale deployment.',
    },
    'ai-governance-ethics': {
      title: 'AI Governance & Ethics for Legal Teams',
      description: 'Establishing responsible AI policies, evaluating bias in legal AI tools, and navigating regulations.',
    },
    'e-discovery-generative-ai': {
      title: 'E-Discovery in the Generative AI Era',
      description: 'How generative AI is transforming document review and managing AI-generated data.',
    },
    'ai-powered-legal-research': {
      title: 'Building an AI-Powered Legal Research Workflow',
      description: 'Moving beyond Boolean search to semantic retrieval. Best practices for combining AI research tools.',
    },
    'roi-legal-ai-metrics': {
      title: 'ROI of Legal AI: Metrics That Matter',
      description: 'Measuring quality, consistency, and time-to-value. Frameworks for building the business case.',
    },
  };

  const guide = guides[slug];
  if (!guide) return { title: 'Guide Not Found | Decision&Law' };

  return {
    title: `${guide.title} | Decision&Law`,
    description: guide.description,
  };
}

const GUIDE_CONTENT: Record<string, { audience: string; readTime: string; sections: { title: string; content: string }[] }> = {
  'ai-adoption-law-firms': {
    audience: 'Law firm leaders, practice managers, innovation officers',
    readTime: '20 min',
    sections: [
      {
        title: 'Executive Summary',
        content: 'This guide provides a structured approach to evaluating, selecting, and implementing AI tools within legal organizations. The framework is organized around three phases: Assessment, Selection, and Implementation.',
      },
      {
        title: 'Phase 1: Assessment',
        content: 'Begin by auditing current technology stack and identifying high-impact use cases. Focus on repetitive, time-intensive tasks with clear outcomes. Document existing pain points and quantify baseline metrics before introducing AI.',
      },
      {
        title: 'Phase 2: Selection',
        content: 'Evaluate vendors against security requirements, data handling practices, and integration capabilities. Request pilot periods with defined success criteria. Involve end users in evaluation to ensure practical usability.',
      },
      {
        title: 'Phase 3: Implementation',
        content: 'Start with a focused pilot team before broader rollout. Establish training programs and clear usage guidelines. Monitor adoption metrics and gather feedback for iterative improvement.',
      },
    ],
  },
  'contract-review-ai-production': {
    audience: 'Corporate counsel, contract managers, legal ops',
    readTime: '18 min',
    sections: [
      {
        title: 'Executive Summary',
        content: 'Moving AI contract review from proof-of-concept to production requires systematic preparation of data, configuration of playbooks, and measurement of outcomes. This guide walks through each stage.',
      },
      {
        title: 'Data Preparation',
        content: 'Clean and organize your contract repository before AI implementation. Establish clear taxonomy for contract types, clause categories, and risk ratings. Historical data quality directly impacts AI performance.',
      },
      {
        title: 'Playbook Configuration',
        content: 'Define your review criteria as explicit rules. Train the AI on your organization\'s preferred clause language and risk tolerance. Regularly update playbooks based on review outcomes.',
      },
      {
        title: 'ROI Measurement',
        content: 'Track time savings, error reduction, and consistency improvements. Compare AI-assisted review against manual benchmarks. Document case studies for stakeholder communication.',
      },
    ],
  },
  'ai-governance-ethics': {
    audience: 'Compliance officers, GCs, risk managers',
    readTime: '25 min',
    sections: [
      {
        title: 'Executive Summary',
        content: 'AI governance in legal practice requires balancing innovation with risk management. This guide covers policy development, bias evaluation, and regulatory compliance for legal teams.',
      },
      {
        title: 'Policy Development',
        content: 'Establish clear guidelines for approved AI use cases, data handling requirements, and human oversight expectations. Include provisions for documentation and audit trails.',
      },
      {
        title: 'Bias Evaluation',
        content: 'Regularly assess AI outputs for systematic biases. Test across demographic categories and document any identified disparities. Maintain transparency about AI limitations with stakeholders.',
      },
      {
        title: 'Regulatory Compliance',
        content: 'Monitor emerging AI regulations including the EU AI Act and sector-specific requirements. Align governance policies with current and anticipated compliance obligations.',
      },
    ],
  },
  'e-discovery-generative-ai': {
    audience: 'Litigation support, e-discovery specialists, trial attorneys',
    readTime: '22 min',
    sections: [
      {
        title: 'Executive Summary',
        content: 'Generative AI is fundamentally changing e-discovery workflows. This guide addresses document review, AI-generated content management, and evidentiary considerations.',
      },
      {
        title: 'Document Review Transformation',
        content: 'AI-assisted review now extends beyond classification to include summarization, privilege detection, and strategy development. Understand the capabilities and limitations of current tools.',
      },
      {
        title: 'AI-Generated Content',
        content: 'Identify and properly handle AI-generated documents within discovery sets. Establish protocols for authenticating AI-created materials and assessing their relevance.',
      },
      {
        title: 'Chain of Custody',
        content: 'Document AI tool usage in the discovery process. Maintain clear audit trails for AI-assisted decisions. Address opposing counsel concerns about AI involvement.',
      },
    ],
  },
  'ai-powered-legal-research': {
    audience: 'Litigators, researchers, law students',
    readTime: '15 min',
    sections: [
      {
        title: 'Executive Summary',
        content: 'Legal research has evolved beyond keyword matching to semantic understanding. This guide helps researchers leverage AI effectively while maintaining rigorous source validation.',
      },
      {
        title: 'Semantic Search Fundamentals',
        content: 'AI research tools understand conceptual relationships between legal terms. Learn to frame queries around legal concepts rather than specific keywords for better results.',
      },
      {
        title: 'Source Validation',
        content: 'Always verify AI-generated citations against primary sources. Use AI for discovery and hypothesis generation, but validate findings through traditional legal research methods.',
      },
      {
        title: 'Workflow Integration',
        content: 'Incorporate AI research tools into your existing research workflow. Combine multiple tools for comprehensive coverage. Document your research process for quality assurance.',
      },
    ],
  },
  'roi-legal-ai-metrics': {
    audience: 'GCs, CFOs, legal ops, firm administrators',
    readTime: '20 min',
    sections: [
      {
        title: 'Executive Summary',
        content: 'Measuring AI ROI requires looking beyond billable hour savings. This guide covers quality metrics, efficiency gains, and frameworks for presenting value to leadership.',
      },
      {
        title: 'Beyond Hours',
        content: 'Track consistency improvements, error reduction, and turnaround time. Measure client satisfaction and matter quality indicators. Quantify risk reduction where applicable.',
      },
      {
        title: 'Implementation Costs',
        content: 'Account for technology costs, training time, and workflow disruption. Include ongoing maintenance and vendor management resources. Calculate full cost of ownership.',
      },
      {
        title: 'Building the Business Case',
        content: 'Develop case studies with before-and-after comparisons. Create executive summaries with clear ROI calculations. Align metrics with organizational strategic priorities.',
      },
    ],
  },
};

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = GUIDE_CONTENT[slug];

  if (!guide) {
    notFound();
  }

  const titles: Record<string, string> = {
    'ai-adoption-law-firms': 'AI Adoption in Law Firms: A Practical Framework',
    'contract-review-ai-production': 'Contract Review with AI: From Pilot to Production',
    'ai-governance-ethics': 'AI Governance & Ethics for Legal Teams',
    'e-discovery-generative-ai': 'E-Discovery in the Generative AI Era',
    'ai-powered-legal-research': 'Building an AI-Powered Legal Research Workflow',
    'roi-legal-ai-metrics': 'ROI of Legal AI: Metrics That Matter',
  };

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a', paddingTop: '120px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 32px 100px' }}>
        <nav style={{ marginBottom: '48px' }}>
          <Link href="/guides" style={{ fontSize: '13px', color: '#737373', textDecoration: 'none' }}>
            ← Back to Guides
          </Link>
        </nav>

        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.08em', color: '#737373', marginBottom: '8px' }}>
            For: {guide.audience}
          </div>
          <span style={{ fontSize: '11px', letterSpacing: '0.06em', color: '#a1a1aa' }}>
            {guide.readTime} read
          </span>
        </div>

        <h1 style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
          fontSize: 'clamp(32px, 4vw, 44px)',
          fontWeight: '700',
          lineHeight: '1.15',
          letterSpacing: '-0.02em',
          color: '#1a1a1a',
          marginBottom: '48px',
        }}>
          {titles[slug]}
        </h1>

        {guide.sections.map((section, index) => (
          <section key={index} style={{ marginBottom: '48px' }}>
            <h2 style={{
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#737373',
              marginBottom: '16px',
              paddingBottom: '8px',
              borderBottom: '1px solid #e5e5e5',
            }}>
              {section.title}
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.75',
              color: '#1a1a1a',
            }}>
              {section.content}
            </p>
          </section>
        ))}

        <div style={{
          marginTop: '64px',
          padding: '32px',
          backgroundColor: '#f4f4f5',
          borderLeft: '2px solid #1a1a1a',
        }}>
          <p style={{
            fontSize: '14px',
            lineHeight: '1.7',
            color: '#737373',
            marginBottom: '16px',
          }}>
            This guide is part of the Decision&Law Practice Guides series. More comprehensive frameworks and downloadable resources coming soon.
          </p>
          <Link href="/guides" style={{
            fontSize: '13px',
            color: '#1a1a1a',
            textDecoration: 'none',
            fontWeight: '500',
          }}>
            View all guides →
          </Link>
        </div>
      </div>
    </main>
  );
}

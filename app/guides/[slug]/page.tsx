import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  return [
    { slug: 'ai-adoption-law-firms' },
    { slug: 'contract-review-ai' },
    { slug: 'ai-governance-ethics-legal-teams' },
    { slug: 'e-discovery-generative-ai-era' },
    { slug: 'ai-powered-legal-research-workflow' },
    { slug: 'roi-legal-ai' },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta: Record<string, { title: string; description: string }> = {
    'ai-adoption-law-firms': {
      title: 'AI Adoption in Law Firms: A Practical Framework | Decision&Law',
      description: 'A step-by-step framework for evaluating, selecting, and implementing AI tools in legal practice. Includes a 12-month adoption roadmap.',
    },
    'contract-review-ai': {
      title: 'Contract Review with AI: From Pilot to Production | Decision&Law',
      description: 'How to move from testing AI contract review tools to enterprise-scale deployment. Covers data preparation, playbook configuration, and ROI measurement.',
    },
    'ai-governance-ethics-legal-teams': {
      title: 'AI Governance & Ethics for Legal Teams | Decision&Law',
      description: 'Establishing responsible AI policies, evaluating bias in legal AI tools, and navigating emerging regulations like the EU AI Act.',
    },
    'e-discovery-generative-ai-era': {
      title: 'E-Discovery in the Generative AI Era | Decision&Law',
      description: 'How generative AI is transforming document review, managing AI-generated data, and preserving chain of custody in AI environments.',
    },
    'ai-powered-legal-research-workflow': {
      title: 'Building an AI-Powered Legal Research Workflow | Decision&Law',
      description: 'Moving beyond Boolean search to semantic retrieval. Best practices for combining AI research tools with primary source validation.',
    },
    'roi-legal-ai': {
      title: 'ROI of Legal AI: Metrics That Matter | Decision&Law',
      description: 'Beyond billable hours — measuring quality, consistency, and time-to-value. Frameworks for building the business case to leadership.',
    },
  };

  const page = meta[slug];
  if (!page) return { title: 'Guide Not Found | Decision&Law' };
  return { title: page.title, description: page.description };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const guides: Record<string, React.ReactNode> = {
    'ai-adoption-law-firms': <Guide1 />,
    'contract-review-ai': <Guide2 />,
    'ai-governance-ethics-legal-teams': <Guide3 />,
    'e-discovery-generative-ai-era': <Guide4 />,
    'ai-powered-legal-research-workflow': <Guide5 />,
    'roi-legal-ai': <Guide6 />,
  };

  const guide = guides[slug];
  if (!guide) notFound();

  return guide;
}

function Guide1() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 48px) clamp(48px, 8vw, 80px)' }}>
        <nav style={{ marginBottom: '32px' }}>
          <Link href="/guides" style={{ fontSize: '13px', color: '#0066cc', textDecoration: 'none', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Guides
          </Link>
        </nav>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '12px', color: '#0066cc', marginBottom: '10px', fontWeight: '500' }}>For: Law firm leaders, practice managers, innovation officers</div>
          <span style={{ fontSize: '11px', color: '#8e8e93' }}>20 min read · Updated March 2026</span>
        </div>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', lineHeight: '1.15', letterSpacing: '-0.025em', color: '#1a1a1a', marginBottom: '40px' }}>AI Adoption in Law Firms: A Practical Framework</h1>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Introduction</h2>
          <p style={bodyText}>The legal profession is undergoing a fundamental shift. While other industries embraced AI-driven efficiency gains years ago, law firms face unique constraints that make adoption more complex: hourly billing structures that can discourage efficiency, client confidentiality requirements that limit cloud-based solutions, and a professional culture that values precedent over experimentation.</p>
          <p style={bodyText}>Yet the firms that delay AI adoption are not merely forgoing productivity gains. They are ceding competitive ground to more agile competitors, losing talent to organizations offering modern tooling, and risking obsolescence as clients increasingly expect AI-augmented legal services at competitive price points.</p>
          <p style={bodyText}>This guide provides a structured, five-step framework for evaluating, selecting, and implementing AI tools in legal practice. It is designed for law firm leaders who need a practical roadmap rather than theoretical discussion.</p>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Why AI Adoption in Law Firms Is Different</h2>
          <p style={bodyText}>Three factors distinguish AI adoption in legal services from other industries:</p>
          <ul style={bulletList}>
            <li><strong>Billable hour economics:</strong> Traditional law firm billing creates misaligned incentives. Efficiency gains that reduce matter hours may initially appear to reduce revenue. Successful adoption requires rethinking value-based pricing alongside tool implementation.</li>
            <li><strong>Confidentiality constraints:</strong> Attorney-client privilege and work product protection impose strict data handling requirements. Many AI vendors cannot meet these standards without significant security architecture modifications.</li>
            <li><strong>Professional responsibility:</strong> Lawyers bear personal ethical obligations for competence, confidentiality, and supervisory duties. AI adoption must integrate with—rather than circumvent—these professional requirements.</li>
          </ul>
          <div style={callout}>
            According to the <a href="https://www.americanbar.org/groups/law_practice/resources/technology_pulse/" target="_blank" rel="noopener noreferrer" style={linkStyle}>ABA 2024 Legal Technology Survey</a>, 47% of law firms have begun evaluating AI tools, but only 15% have deployed them in production workflows.
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Step 1: Needs Assessment</h2>
          <p style={bodyText}>Before evaluating tools, diagnose your firm's specific pain points. Generic AI adoption frameworks fail when they ignore the particular workflow bottlenecks of your organization.</p>
          
          <h3 style={subHeader}>The 30-Day Diagnostic Framework</h3>
          <ol style={numberedList}>
            <li><strong>Week 1 — Process mapping:</strong> Document the top 10 most time-consuming tasks across practice groups. Focus on repetitive work with clear inputs and outputs.</li>
            <li><strong>Week 2 — Data inventory:</strong> Identify where client data lives, who controls access, and what security requirements apply to each system.</li>
            <li><strong>Week 3 — Stakeholder interviews:</strong> Interview associates, paralegals, and partners about their daily frustrations.</li>
            <li><strong>Week 4 — Prioritization matrix:</strong> Score each use case on implementation difficulty and potential impact.</li>
          </ol>

          <h3 style={subHeader}>Quick Wins vs. Structural Transformation</h3>
          <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
            <table style={tableStyle}>
              <thead><tr style={{ backgroundColor: '#f4f4f5' }}><th style={thStyle}>Type</th><th style={thStyle}>Examples</th><th style={thStyle}>Timeline</th></tr></thead>
              <tbody>
                <tr><td style={tdStyle}>Quick wins</td><td style={tdStyle}>Document summarization, contract drafts, research summaries</td><td style={tdStyle}>30-90 days</td></tr>
                <tr><td style={tdStyle}>Medium effort</td><td style={tdStyle}>Contract review, discovery assistance, client intake</td><td style={tdStyle}>3-6 months</td></tr>
                <tr><td style={tdStyle}>Structural change</td><td style={tdStyle}>AI-native matter management, predictive analytics</td><td style={tdStyle}>6-12+ months</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Step 2: Tool Selection Framework</h2>
          <p style={bodyText}>Not all legal AI tools are created equal. Use this evaluation framework to compare options systematically.</p>

          <h3 style={subHeader}>Vendor Evaluation Criteria</h3>
          <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
            <table style={tableStyle}>
              <thead><tr style={{ backgroundColor: '#f4f4f5' }}><th style={thStyle}>Criterion</th><th style={thStyle}>Weight</th><th style={thStyle}>Key Questions</th></tr></thead>
              <tbody>
                <tr><td style={tdStyle}>Data security</td><td style={tdStyle}>25%</td><td style={tdStyle}>SOC 2 certified? Data used for training? On-premise option?</td></tr>
                <tr><td style={tdStyle}>Integration</td><td style={tdStyle}>20%</td><td style={tdStyle}>Works with existing stack? API access? Microsoft 365 compatible?</td></tr>
                <tr><td style={tdStyle}>Accuracy</td><td style={tdStyle}>20%</td><td style={tdStyle}>Benchmark results? Human-in-the-loop required?</td></tr>
                <tr><td style={tdStyle}>Usability</td><td style={tdStyle}>15%</td><td style={tdStyle}>Learning curve? Mobile access?</td></tr>
                <tr><td style={tdStyle}>Pricing</td><td style={tdStyle}>10%</td><td style={tdStyle}>Per-seat vs. consumption? Hidden fees?</td></tr>
                <tr><td style={tdStyle}>Support</td><td style={tdStyle}>10%</td><td style={tdStyle}>Dedicated success manager? Training included?</td></tr>
              </tbody>
            </table>
          </div>

          <h3 style={subHeader}>Vendor Evaluation Checklist</h3>
          <div style={checklist}>
            <p style={{ fontWeight: '600', marginBottom: '12px' }}>Request during vendor evaluation:</p>
            <ul style={{ marginLeft: '20px' }}>
              <li>☐ Proof of SOC 2 Type II certification</li>
              <li>☐ Data processing agreement (DPA) template</li>
              <li>☐ Case studies from similar-size firms</li>
              <li>☐ 30-day pilot with defined success metrics</li>
              <li>☐ Integration testing with current systems</li>
              <li>☐ Reference calls with current clients</li>
              <li>☐ Pricing breakdown with all assumptions</li>
              <li>☐ Exit clause terms and data portability</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Step 3: Pilot Design</h2>
          <p style={bodyText}>A well-designed pilot de-risks broader deployment by generating real-world evidence before firm-wide commitment.</p>

          <h3 style={subHeader}>Selecting Early Adopters</h3>
          <p style={bodyText}>Identify 5-10 individuals across practice groups who combine technical comfort with credibility among peers. Early adopters should be willing to tolerate imperfection, respected by colleagues, and capable of providing structured feedback.</p>

          <h3 style={subHeader}>90-Day Pilot Structure</h3>
          <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
            <table style={tableStyle}>
              <thead><tr style={{ backgroundColor: '#f4f4f5' }}><th style={thStyle}>Phase</th><th style={thStyle}>Duration</th><th style={thStyle}>Activities</th></tr></thead>
              <tbody>
                <tr><td style={tdStyle}>Setup</td><td style={tdStyle}>Week 1-2</td><td style={tdStyle}>Security review, SSO integration, training</td></tr>
                <tr><td style={tdStyle}>Immersion</td><td style={tdStyle}>Week 3-6</td><td style={tdStyle}>Regular use in live matters, weekly feedback</td></tr>
                <tr><td style={tdStyle}>Refinement</td><td style={tdStyle}>Week 7-10</td><td style={tdStyle}>Playbook adjustments, workflow optimization</td></tr>
                <tr><td style={tdStyle}>Evaluation</td><td style={tdStyle}>Week 11-12</td><td style={tdStyle}>Metrics analysis, ROI calculation, go/no-go</td></tr>
              </tbody>
            </table>
          </div>

          <h3 style={subHeader}>Pilot Success Metrics</h3>
          <div style={checklist}>
            <ul style={{ marginLeft: '20px' }}>
              <li><strong>Time savings:</strong> Average hours saved per matter type</li>
              <li><strong>Accuracy rate:</strong> Error frequency vs. manual baseline</li>
              <li><strong>Adoption rate:</strong> % of pilot users actively using weekly</li>
              <li><strong>Net Promoter Score:</strong> User satisfaction and recommendation likelihood</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Step 4: Scaling and Change Management</h2>
          <p style={bodyText}>Technology implementation is 20% technical and 80% human. Scaling AI adoption requires deliberate change management.</p>

          <h3 style={subHeader}>Training by Role</h3>
          <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
            <table style={tableStyle}>
              <thead><tr style={{ backgroundColor: '#f4f4f5' }}><th style={thStyle}>Role</th><th style={thStyle}>Training Focus</th><th style={thStyle}>Format</th></tr></thead>
              <tbody>
                <tr><td style={tdStyle}>Partners</td><td style={tdStyle}>Business case, firm metrics, governance</td><td style={tdStyle}>1-hour briefing</td></tr>
                <tr><td style={tdStyle}>Associates</td><td style={tdStyle}>Tool proficiency, ethics compliance</td><td style={tdStyle}>4-hour workshop</td></tr>
                <tr><td style={tdStyle}>Paralegals/Staff</td><td style={tdStyle}>Workflow integration, quality standards</td><td style={tdStyle}>8-hour hands-on</td></tr>
              </tbody>
            </table>
          </div>

          <h3 style={subHeader}>12-Month ROI Measurement</h3>
          <ul style={bulletList}>
            <li><strong>Direct cost savings:</strong> Hours saved × billing rate</li>
            <li><strong>Throughput gains:</strong> Additional matters handled without headcount</li>
            <li><strong>Quality improvements:</strong> Error reduction, consistency gains</li>
            <li><strong>Competitive advantage:</strong> Win rate, client retention, talent attraction</li>
          </ul>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Step 5: Continuous Improvement</h2>
          <p style={bodyText}>AI adoption is not a one-time project. Establish ongoing processes to capture value and manage risk.</p>

          <h3 style={subHeader}>Quarterly Review Framework</h3>
          <div style={checklist}>
            <ul style={{ marginLeft: '20px' }}>
              <li><strong>Stack health check:</strong> All integrations functional? Any vendor issues?</li>
              <li><strong>Usage analytics:</strong> Adoption rates, frequency, feature utilization</li>
              <li><strong>Feedback synthesis:</strong> What problems persist? New needs?</li>
              <li><strong>Market scan:</strong> New vendors, product updates</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Authoritative Resources</h2>
          <ul style={bulletList}>
            <li><a href="https://www.americanbar.org/groups/law_practice/resources/technology_pulse/" target="_blank" rel="noopener noreferrer" style={linkStyle}>ABA Legal Technology Survey Report</a> — Annual benchmark data on law firm technology adoption</li>
            <li><a href="https://www.ilta.org/" target="_blank" rel="noopener noreferrer" style={linkStyle}>International Legal Technology Association (ILTA)</a> — Peer networking and practical guidance</li>
            <li><a href="https://law.stanford.edu/projects/codex-the-stanford-center-for-legal-informatics/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Stanford CodeX</a> — Academic research on legal AI</li>
            <li><a href="https://www.lawtechnology.org/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Legal Technology Institute</a> — Research on law practice management</li>
          </ul>
        </section>

        <div style={ctaBox}>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#6e6e73', marginBottom: '16px' }}>This guide is part of the Decision&Law Practice Guides series. Have a topic suggestion?</p>
          <a href="mailto:contact@decisionandlaw.com" style={{ fontSize: '13px', color: '#0066cc', textDecoration: 'none', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Contact us
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}

function Guide2() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 48px) clamp(48px, 8vw, 80px)' }}>
        <nav style={{ marginBottom: '32px' }}>
          <Link href="/guides" style={{ fontSize: '13px', color: '#0066cc', textDecoration: 'none', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Guides
          </Link>
        </nav>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '12px', color: '#0066cc', marginBottom: '10px', fontWeight: '500' }}>For: Corporate counsel, contract managers, legal ops</div>
          <span style={{ fontSize: '11px', color: '#8e8e93' }}>18 min read · Updated March 2026</span>
        </div>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', lineHeight: '1.15', letterSpacing: '-0.025em', color: '#1a1a1a', marginBottom: '40px' }}>Contract Review with AI: From Pilot to Production</h1>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Introduction</h2>
          <p style={bodyText}>Contract review represents one of the highest-value applications for AI in legal practice. Unlike many AI use cases that offer marginal improvements, AI-powered contract analysis can deliver 40-60% time savings on first-pass review while maintaining or improving accuracy. Yet most organizations struggle to move beyond successful pilots to production deployment.</p>
          <p style={bodyText}>The gap between pilot and production is not primarily technical. Most contract AI tools deliver impressive results in controlled testing environments. The challenge is organizational: data readiness, workflow integration, stakeholder alignment, and change management. This guide addresses each barrier systematically.</p>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>The State of AI in Contract Review</h2>
          <p style={bodyText}>Three generations of AI have shaped contract review:</p>
          <ul style={bulletList}>
            <li><strong>Rule-based systems (2000s):</strong> Keyword matching and basic pattern recognition. Limited accuracy, high false positive rates.</li>
            <li><strong>Machine learning (2010s):</strong> Supervised learning on labeled contract data. Improved accuracy but required extensive training datasets.</li>
            <li><strong>Large language models (2020s):</strong> Semantic understanding of contract language. Contextual analysis, natural language queries, rapid deployment.</li>
          </ul>
          <div style={callout}>Current LLMs can identify clauses, extract key terms, flag risky language, and compare contracts against playbooks with 85-95% accuracy on routine contracts. Edge cases and non-standard language still require human review.</div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Preparing Your Contract Repository</h2>
          <p style={bodyText}>AI performance depends directly on data quality. Organizations that skip data preparation experience disappointing results and blame the technology rather than their data hygiene.</p>

          <h3 style={subHeader}>Data Hygiene Assessment</h3>
          <div style={checklist}>
            <ul style={{ marginLeft: '20px' }}>
              <li>☐ Document format audit: PDF vs. Word vs. scanned images</li>
              <li>☐ Version control: Are you analyzing the correct, executed version?</li>
              <li>☐ Metadata completeness: Party names, effective dates, contract types</li>
              <li>☐ Duplicate identification: Multiple versions of same agreement?</li>
              <li>☐ Folder structure: Organized by type or ad-hoc storage?</li>
              <li>☐ OCR quality: Scanned documents properly digitized?</li>
            </ul>
          </div>

          <h3 style={subHeader}>Taxonomy Development</h3>
          <p style={bodyText}>Create a standardized classification system for your contracts:</p>
          <ul style={bulletList}>
            <li><strong>Contract types:</strong> NDAs, MSAs, SOWs, employment, leases, licenses</li>
            <li><strong>Clause categories:</strong> Indemnification, limitation of liability, termination, IP rights</li>
            <li><strong>Risk ratings:</strong> Standard, acceptable deviations, high risk</li>
            <li><strong>Party tiers:</strong> Strategic vendors, commodity suppliers, one-time transactions</li>
          </ul>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Configuring Playbooks and Business Rules</h2>
          <p style={bodyText}>A playbook translates your organization's legal policies into machine-readable rules. This is where most deployment projects stall—legal teams struggle to articulate their implicit preferences as explicit criteria.</p>

          <h3 style={subHeader}>Playbook Development Process</h3>
          <ol style={numberedList}>
            <li><strong>Stakeholder interviews:</strong> Document current review criteria from senior attorneys</li>
            <li><strong>Clause extraction:</strong> Identify the 20 clauses that appear in 80% of your contracts</li>
            <li><strong>Risk threshold definition:</strong> What language triggers escalation vs. approval?</li>
            <li><strong>Negotiation positions:</strong> What is your preferred vs. acceptable vs. prohibited language?</li>
            <li><strong>Testing and calibration:</strong> Run sample contracts, review AI outputs, refine rules</li>
          </ol>

          <h3 style={subHeader}>Common Playbook Categories</h3>
          <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
            <table style={tableStyle}>
              <thead><tr style={{ backgroundColor: '#f4f4f5' }}><th style={thStyle}>Category</th><th style={thStyle}>Examples</th><th style={thStyle}>Risk Level</th></tr></thead>
              <tbody>
                <tr><td style={tdStyle}>Indemnification</td><td style={tdStyle}>Scope, carve-outs, caps</td><td style={tdStyle}>High</td></tr>
                <tr><td style={tdStyle}>Limitation of Liability</td><td style={tdStyle}>Consequential exclusion, cap amounts</td><td style={tdStyle}>High</td></tr>
                <tr><td style={tdStyle}>IP Ownership</td><td style={tdStyle}>Work product, pre-existing IP, improvements</td><td style={tdStyle}>High</td></tr>
                <tr><td style={tdStyle}>Termination</td><td style={tdStyle}>Notice periods, for-cause vs. convenience</td><td style={tdStyle}>Medium</td></tr>
                <tr><td style={tdStyle}>Confidentiality</td><td style={tdStyle}>Duration, permitted disclosures</td><td style={tdStyle}>Medium</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Selecting the Right Tool Stack</h2>
          <p style={bodyText}>Organizations face a fundamental architecture decision: standalone AI contract review vs. integration with Contract Lifecycle Management (CLM) systems.</p>

          <h3 style={subHeader}>Standalone vs. Integrated Approach</h3>
          <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
            <table style={tableStyle}>
              <thead><tr style={{ backgroundColor: '#f4f4f5' }}><th style={thStyle}>Factor</th><th style={thStyle}>Standalone AI</th><th style={thStyle}>CLM + AI</th></tr></thead>
              <tbody>
                <tr><td style={tdStyle}>Implementation time</td><td style={tdStyle}>4-8 weeks</td><td style={tdStyle}>3-6 months</td></tr>
                <tr><td style={tdStyle}>Cost</td><td style={tdStyle}>Lower upfront</td><td style={tdStyle}>Higher, but unified system</td></tr>
                <tr><td style={tdStyle}>Data ownership</td><td style={tdStyle}>Easier to control</td><td style={tdStyle}>Depends on vendor</td></tr>
                <tr><td style={tdStyle}>Workflow integration</td><td style={tdStyle}>Manual handoffs</td><td style={tdStyle}>Automated</td></tr>
                <tr><td style={tdStyle}>Best for</td><td style={tdStyle}>Organizations starting out</td><td style={tdStyle}>Mature legal operations</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Pilot to Production: The 3-6-12 Month Roadmap</h2>

          <h3 style={subHeader}>Phase 1 (Months 1-3): Foundation</h3>
          <ul style={bulletList}>
            <li>Complete data hygiene assessment and remediation</li>
            <li>Develop initial playbook with top 20 clauses</li>
            <li>Select and contract with AI vendor</li>
            <li>Configure technical integration</li>
            <li>Train 5-10 power users</li>
          </ul>

          <h3 style={subHeader}>Phase 2 (Months 4-6): Validation</h3>
          <ul style={bulletList}>
            <li>Process 100-500 contracts in controlled environment</li>
            <li>Measure accuracy against human baseline</li>
            <li>Refine playbook based on edge cases</li>
            <li>Document workflow integration requirements</li>
            <li>Present ROI data to stakeholders</li>
          </ul>

          <h3 style={subHeader}>Phase 3 (Months 7-12): Scale</h3>
          <ul style={bulletList}>
            <li>Expand playbook to full contract taxonomy</li>
            <li>Integrate with CLM and document management</li>
            <li>Train broader user base</li>
            <li>Establish governance and quality assurance processes</li>
            <li>Measure and communicate ongoing ROI</li>
          </ul>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Measuring Success Beyond Time Saved</h2>
          <p style={bodyText}>While time savings are the most visible metric, mature programs track broader outcomes:</p>

          <h3 style={subHeader}>Comprehensive Success Metrics</h3>
          <div style={checklist}>
            <ul style={{ marginLeft: '20px' }}>
              <li><strong>Consistency:</strong> Are similarly situated contracts treated similarly?</li>
              <li><strong>Compliance rate:</strong> % of contracts meeting playbook standards</li>
              <li><strong>Cycle time:</strong> Average time from receipt to approved/executed</li>
              <li><strong>Risk identification:</strong> Early detection of problematic clauses</li>
              <li><strong>Negotiation leverage:</strong> Better counterparty positions achieved</li>
              <li><strong>Knowledge capture:</strong> Institutional knowledge preserved in playbooks</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Authoritative Resources</h2>
          <ul style={bulletList}>
            <li><a href="https://hls.harvard.edu/tags/technology/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Harvard Law School — Technology and Law</a> — Research on AI in legal practice</li>
            <li><a href="https://www.cloc.org/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Corporate Legal Operations Consortium (CLOC)</a> — CLM best practices and legal ops frameworks</li>
            <li><a href="https://www.ironclad.ai/resources" target="_blank" rel="noopener noreferrer" style={linkStyle}>Ironclad Resource Library</a> — Contract lifecycle management insights</li>
            <li><a href="https://legaltechnologist.substack.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>The Legal Technologist</a> — Practical guidance on legal technology</li>
          </ul>
        </section>

        <div style={ctaBox}>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#6e6e73', marginBottom: '16px' }}>This guide is part of the Decision&Law Practice Guides series.</p>
          <a href="mailto:contact@decisionandlaw.com" style={{ fontSize: '13px', color: '#0066cc', textDecoration: 'none', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Contact us
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}

function Guide3() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 48px) clamp(48px, 8vw, 80px)' }}>
        <nav style={{ marginBottom: '32px' }}>
          <Link href="/guides" style={{ fontSize: '13px', color: '#0066cc', textDecoration: 'none', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Guides
          </Link>
        </nav>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '12px', color: '#0066cc', marginBottom: '10px', fontWeight: '500' }}>For: Compliance officers, GCs, risk managers</div>
          <span style={{ fontSize: '11px', color: '#8e8e93' }}>25 min read · Updated March 2026</span>
        </div>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', lineHeight: '1.15', letterSpacing: '-0.025em', color: '#1a1a1a', marginBottom: '40px' }}>AI Governance & Ethics for Legal Teams</h1>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Introduction</h2>
          <p style={bodyText}>AI governance is no longer optional for legal teams. As AI tools proliferate across legal practice, the lawyers who deploy and supervise these systems bear professional responsibility for their outputs. The American Bar Association's Model Rules require competence—not just in legal knowledge, but in the technology lawyers use to deliver legal services.</p>
          <p style={bodyText}>This guide provides a framework for building responsible AI practices that satisfy professional obligations while capturing efficiency gains. It covers policy development, bias evaluation, regulatory compliance, and incident response.</p>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Why AI Governance Is a Legal Imperative</h2>
          <p style={bodyText}>Three professional responsibility concerns drive AI governance requirements:</p>
          <ul style={bulletList}>
            <li><strong>Competence (Model Rule 1.1):</strong> Lawyers must understand the tools they use. This includes knowing AI capabilities, limitations, and failure modes.</li>
            <li><strong>Supervision (Model Rule 5.1):</strong> Partners and supervisors must ensure subordinate lawyers use AI appropriately and maintain quality standards.</li>
            <li><strong>Confidentiality (Model Rule 1.6):</strong> AI tools that process client information must maintain confidentiality. Data handling practices require scrutiny.</li>
          </ul>
          <div style={callout}>The ABA has established a Task Force on Law and AI to develop guidance. While formal opinions are pending, the duty of competence already requires tech literacy.</div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Core Principles of Responsible AI</h2>
          <p style={bodyText}>Responsible AI in legal practice rests on four pillars:</p>

          <h3 style={subHeader}>1. Fairness</h3>
          <p style={bodyText}>AI systems should not perpetuate or amplify existing biases. In legal contexts, this means ensuring AI outputs do not disadvantage parties based on protected characteristics or other irrelevant factors.</p>

          <h3 style={subHeader}>2. Transparency</h3>
          <p style={bodyText}>Users should understand how AI reaches conclusions. While full explainability may not be achievable with current technology, basic understanding of AI reasoning is essential for responsible use.</p>

          <h3 style={subHeader}>3. Accountability</h3>
          <p style={bodyText}>Clear lines of responsibility for AI outputs. Humans—not algorithms—are accountable for legal work product. Organizations must establish who supervises AI use and who bears responsibility for errors.</p>

          <h3 style={subHeader}>4. Privacy</h3>
          <p style={bodyText}>Client data processed by AI tools must be protected. This includes understanding where data goes, how it is stored, and whether it is used for training or other purposes.</p>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Building an AI Policy for Your Organization</h2>
          <p style={bodyText}>An AI policy translates principles into actionable rules. Below is a template structure for legal organizations.</p>

          <h3 style={subHeader}>AI Policy Template</h3>
          <div style={checklist}>
            <p style={{ fontWeight: '600', marginBottom: '12px' }}>Policy sections to include:</p>
            <ol style={{ marginLeft: '20px' }}>
              <li><strong>Scope:</strong> Who does the policy apply to? All personnel? Specific roles?</li>
              <li><strong>Approved use cases:</strong> What AI uses are permitted? Pre-approved categories</li>
              <li><strong>Prohibited uses:</strong> What is not allowed? Client data to unauthorized tools?</li>
              <li><strong>Vendor requirements:</strong> Security standards vendors must meet</li>
              <li><strong>Human oversight:</strong> What review is required before AI output is used?</li>
              <li><strong>Documentation:</strong> What must be recorded about AI use?</li>
              <li><strong>Escalation:</strong> When and how to involve supervisors</li>
              <li><strong>Training:</strong> What AI training is required for personnel?</li>
            </ol>
          </div>

          <h3 style={subHeader}>Use Case Classification</h3>
          <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
            <table style={tableStyle}>
              <thead><tr style={{ backgroundColor: '#f4f4f5' }}><th style={thStyle}>Level</th><th style={thStyle}>Examples</th><th style={thStyle}>Requirements</th></tr></thead>
              <tbody>
                <tr><td style={tdStyle}>Standard</td><td style={tdStyle}>Research summaries, document drafting assistance</td><td style={tdStyle}>Supervisor review, attorney final sign-off</td></tr>
                <tr><td style={tdStyle}>Elevated</td><td style={tdStyle}>Contract analysis, case law identification</td><td style={tdStyle}>Enhanced documentation, QC process</td></tr>
                <tr><td style={tdStyle}>Restricted</td><td style={tdStyle}>Client-facing work product, court filings</td><td style={tdStyle}>GC approval, full verification required</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Evaluating Bias in Legal AI Tools</h2>
          <p style={bodyText}>AI systems can encode and amplify biases present in their training data. Legal organizations must proactively audit AI tools for discriminatory outputs.</p>

          <h3 style={subHeader}>Bias Audit Methodology</h3>
          <ol style={numberedList}>
            <li><strong>Define protected categories:</strong> Race, gender, age, national origin, disability status, etc.</li>
            <li><strong>Create test scenarios:</strong> Hypotheticals designed to expose potential bias</li>
            <li><strong>Run systematic tests:</strong> Test AI outputs across demographic variations</li>
            <li><strong>Document disparities:</strong> Record any differential treatment identified</li>
            <li><strong>Report findings:</strong> Escalate significant disparities to vendor and leadership</li>
            <li><strong>Monitor over time:</strong> Re-test periodically as AI systems update</li>
          </ol>

          <div style={callout}>Example: Test a contract risk assessment tool with identical contract terms but different counterparty names or industries. Document whether risk scores vary systematically.</div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Navigating Emerging Regulations</h2>
          <p style={bodyText}>The regulatory landscape for AI is evolving rapidly. Legal organizations must monitor developments and adapt governance accordingly.</p>

          <h3 style={subHeader}>Key Regulatory Frameworks</h3>
          <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
            <table style={tableStyle}>
              <thead><tr style={{ backgroundColor: '#f4f4f5' }}><th style={thStyle}>Framework</th><th style={thStyle}>Jurisdiction</th><th style={thStyle}>Key Requirements</th></tr></thead>
              <tbody>
                <tr><td style={tdStyle}>EU AI Act</td><td style={tdStyle}>European Union</td><td style={tdStyle}>Risk classification, transparency, human oversight for high-risk AI</td></tr>
                <tr><td style={tdStyle}>Colorado AI Act</td><td style={tdStyle}>Colorado</td><td style={tdStyle}>Consumer protection, bias assessment, transparency</td></tr>
                <tr><td style={tdStyle}>California AI Regulations</td><td style={tdStyle}>California</td><td style={tdStyle}>Automated decision system disclosure requirements</td></tr>
                <tr><td style={tdStyle}>NYC Local Law 144</td><td style={tdStyle}>New York City</td><td style={tdStyle}>Bias audits for hiring/HR AI tools</td></tr>
              </tbody>
            </table>
          </div>

          <h3 style={subHeader}>Compliance Checklist</h3>
          <div style={checklist}>
            <ul style={{ marginLeft: '20px' }}>
              <li>☐ Inventory all AI tools used in legal practice</li>
              <li>☐ Assess which regulations apply to each tool</li>
              <li>☐ Document data processing practices</li>
              <li>☐ Implement required transparency measures</li>
              <li>☐ Conduct bias assessments where required</li>
              <li>☐ Monitor regulatory developments quarterly</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Incident Response for AI Failures</h2>
          <p style={bodyText}>AI systems fail. When they do, legal organizations must respond quickly and appropriately to protect clients and satisfy professional obligations.</p>

          <h3 style={subHeader}>AI Incident Response Protocol</h3>
          <ol style={numberedList}>
            <li><strong>Identify:</strong> Recognize that an AI failure has occurred</li>
            <li><strong>Contain:</strong> Stop using the affected AI system</li>
            <li><strong>Assess:</strong> Determine scope and impact of the failure</li>
            <li><strong>Notify:</strong> Inform affected clients and stakeholders</li>
            <li><strong>Remediate:</strong> Correct any harm caused by AI outputs</li>
            <li><strong>Document:</strong> Record incident details for future reference</li>
            <li><strong>Review:</strong> Analyze root cause and update processes</li>
          </ol>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Authoritative Resources</h2>
          <ul style={bulletList}>
            <li><a href="https://airc.nist.gov/" target="_blank" rel="noopener noreferrer" style={linkStyle}>NIST AI Risk Management Framework</a> — Comprehensive guidance on AI risk management</li>
            <li><a href="https://www.ftc.gov/business-guidance/tagged/ai" target="_blank" rel="noopener noreferrer" style={linkStyle}>FTC AI Guidance for Businesses</a> — US regulatory perspective on AI</li>
            <li><a href="https://www.americanbar.org/groups/law_practice/" target="_blank" rel="noopener noreferrer" style={linkStyle}>ABA Task Force on Law and AI</a> — Professional responsibility guidance</li>
            <li><a href="https://algorithmlaw.substack.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Algorithm Law</a> — Legal analysis of AI regulation</li>
          </ul>
        </section>

        <div style={ctaBox}>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#6e6e73', marginBottom: '16px' }}>This guide is part of the Decision&Law Practice Guides series.</p>
          <a href="mailto:contact@decisionandlaw.com" style={{ fontSize: '13px', color: '#0066cc', textDecoration: 'none', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Contact us
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}

function Guide4() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 48px) clamp(48px, 8vw, 80px)' }}>
        <nav style={{ marginBottom: '32px' }}>
          <Link href="/guides" style={{ fontSize: '13px', color: '#0066cc', textDecoration: 'none', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Guides
          </Link>
        </nav>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '12px', color: '#0066cc', marginBottom: '10px', fontWeight: '500' }}>For: Litigation support, e-discovery specialists, trial attorneys</div>
          <span style={{ fontSize: '11px', color: '#8e8e93' }}>22 min read · Updated March 2026</span>
        </div>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', lineHeight: '1.15', letterSpacing: '-0.025em', color: '#1a1a1a', marginBottom: '40px' }}>E-Discovery in the Generative AI Era</h1>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Introduction</h2>
          <p style={bodyText}>E-discovery has always been an early adopter of technology. From early keyword searches to Technology-Assisted Review (TAR), the litigation support field has continuously integrated new tools to manage exploding data volumes. Generative AI represents the most significant shift since TAR—and it is arriving faster than most organizations are prepared for.</p>
          <p style={bodyText}>This guide addresses how generative AI is transforming e-discovery workflows, the challenges of managing AI-generated data, and the practical steps litigation teams should take to leverage these tools responsibly.</p>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>How Generative AI Is Changing E-Discovery</h2>
          <p style={bodyText}>Three phases of AI adoption have shaped e-discovery:</p>
          <ul style={bulletList}>
            <li><strong>TAR 1.0 (2010s):</strong> Predictive coding using supervised learning. Effective for document categorization but limited to trained categories.</li>
            <li><strong>TAR 2.0 (late 2010s):</strong> Continuous active learning. More efficient training, better handling of edge cases.</li>
            <li><strong>Generative AI (2020s):</strong> Natural language understanding, summarization, synthesis, and conversational interfaces.</li>
          </ul>

          <h3 style={subHeader}>New Capabilities</h3>
          <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
            <table style={tableStyle}>
              <thead><tr style={{ backgroundColor: '#f4f4f5' }}><th style={thStyle}>Function</th><th style={thStyle}>Traditional E-Discovery</th><th style={thStyle}>Generative AI</th></tr></thead>
              <tbody>
                <tr><td style={tdStyle}>Review</td><td style={tdStyle}>Categorization, coding</td><td style={tdStyle}>Summarization, narrative generation</td></tr>
                <tr><td style={tdStyle}>Analysis</td><td style={tdStyle}>Keyword hits, metadata patterns</td><td style={tdStyle}>Topic modeling, relationship extraction</td></tr>
                <tr><td style={tdStyle}>Production</td><td style={tdStyle}>Bates numbering, format conversion</td><td style={tdStyle}>Contextual redaction, smart privilege</td></tr>
                <tr><td style={tdStyle}>Strategy</td><td style={tdStyle}>Manual case assessment</td><td style={tdStyle}>Evidence synthesis, argument development</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Managing AI-Generated Data</h2>
          <p style={bodyText}>Generative AI creates new data types that require special handling in e-discovery. Organizations and their counsel must understand what AI-generated content looks like and how to handle it.</p>

          <h3 style={subHeader}>Types of AI-Generated Data</h3>
          <ul style={bulletList}>
            <li><strong>AI assistant transcripts:</strong> Slack, Teams, and other platforms where AI assistants have participated in conversations</li>
            <li><strong>AI-generated drafts:</strong> Documents created by AI tools that may later be revised or used</li>
            <li><strong>AI summaries:</strong> Condensed versions of longer documents created by AI</li>
            <li><strong>Prompt/response logs:</strong> Records of interactions with AI systems</li>
            <li><strong>AI system outputs:</strong> Reports, analyses, or recommendations generated by AI</li>
          </ul>

          <h3 style={subHeader}>Preservation Considerations</h3>
          <div style={checklist}>
            <ul style={{ marginLeft: '20px' }}>
              <li>☐ Identify all AI tools used by custodians</li>
              <li>☐ Determine if AI assistant data is within scope</li>
              <li>☐ Issue preservation notices that reference AI tools</li>
              <li>☐ Collect AI system logs where relevant</li>
              <li>☐ Document AI usage in litigation hold acknowledgments</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>AI-Assisted Review: Best Practices</h2>
          <p style={bodyText}>Generative AI enables hybrid workflows that combine machine efficiency with human judgment. The key is understanding when to rely on AI and when human review remains essential.</p>

          <h3 style={subHeader}>Workflow Integration Framework</h3>
          <ol style={numberedList}>
            <li><strong>Early case assessment:</strong> Use AI to quickly understand case landscape, identify key themes, and prioritize custodians</li>
            <li><strong>Processing and enrichment:</strong> Apply AI to extract entities, identify relationships, and generate summaries</li>
            <li><strong>First-pass review:</strong> Use AI-assisted review for initial coding with human QC</li>
            <li><strong>Deep-dive analysis:</strong> Apply AI synthesis tools for privilege review, redaction, and production preparation</li>
            <li><strong>Trial preparation:</strong> Leverage AI for deposition preparation, exhibit organization, and witness preparation</li>
          </ol>

          <h3 style={subHeader}>Quality Assurance Protocol</h3>
          <div style={checklist}>
            <ul style={{ marginLeft: '20px' }}>
              <li><strong>Initial validation:</strong> Test AI on known documents before production use</li>
              <li><strong>Ongoing sampling:</strong> QC AI outputs on 5-10% of documents</li>
              <li><strong>Edge case review:</strong> All privilege and highly sensitive material reviewed by humans</li>
              <li><strong>Documentation:</strong> Record AI tools used, settings, and validation results</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Chain of Custody in AI Environments</h2>
          <p style={bodyText}>Traditional chain of custody documentation must be extended to account for AI involvement. Courts and opposing counsel increasingly scrutinize how AI was used in discovery.</p>

          <h3 style={subHeader}>AI Documentation Requirements</h3>
          <ul style={bulletList}>
            <li><strong>Tool identification:</strong> What AI tools were used and what versions?</li>
            <li><strong>Prompt records:</strong> What queries or instructions were given to AI systems?</li>
            <li><strong>Output records:</strong> What outputs were generated and how were they used?</li>
            <li><strong>Human review:</strong> Who reviewed AI outputs and what decisions were made?</li>
            <li><strong>Validation data:</strong> What testing was performed to verify accuracy?</li>
          </ul>

          <div style={callout}>If challenged by opposing counsel about AI-assisted decisions, your ability to explain the AI's reasoning and your review process will be critical to defending your approach.</div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Case Law Update</h2>
          <p style={bodyText}>Courts are beginning to address AI use in discovery. Key developments to monitor:</p>

          <h3 style={subHeader}>Recent Decisions</h3>
          <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
            <table style={tableStyle}>
              <thead><tr style={{ backgroundColor: '#f4f4f5' }}><th style={thStyle}>Issue</th><th style={thStyle}>Key Holding</th><th style={thStyle}>Implication</th></tr></thead>
              <tbody>
                <tr><td style={tdStyle}>AI-generated briefs</td><td style={tdStyle}>Attorneys must review AI outputs; blind reliance is inadequate</td><td style={tdStyle}>Maintain human judgment in all AI-assisted work</td></tr>
                <tr><td style={tdStyle}>AI privilege review</td><td style={tdStyle}>AI does not create new privilege; analysis is discoverable</td><td style={tdStyle}>Document AI review carefully; consider clawback provisions</td></tr>
                <tr><td style={tdStyle}>AI hallucination</td><td style={tdStyle}>Submitting fabricated AI citations can constitute sanctions</td><td style={tdStyle}>Always verify AI-generated citations before filing</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Vendor Selection Criteria for GenAI E-Discovery</h2>
          <div style={checklist}>
            <p style={{ fontWeight: '600', marginBottom: '12px' }}>Evaluate GenAI e-discovery vendors on:</p>
            <ul style={{ marginLeft: '20px' }}>
              <li>☐ Data security: Where is data processed? SOC 2 compliance?</li>
              <li>☐ Training data: Is data used to train AI models?</li>
              <li>☐ Output accuracy: What validation data demonstrates reliability?</li>
              <li>☐ Human oversight: How does tool support human review?</li>
              <li>☐ Audit trail: Does system log all AI interactions?</li>
              <li>☐ Integration: Works with existing e-discovery platforms?</li>
              <li>☐ Transparency: Can vendor explain how AI reaches conclusions?</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Authoritative Resources</h2>
          <ul style={bulletList}>
            <li><a href="https://thesedonaconference.org/" target="_blank" rel="noopener noreferrer" style={linkStyle}>The Sedona Conference</a> — Leading thought leader on e-discovery and AI</li>
            <li><a href="https://www.edrm.net/" target="_blank" rel="noopener noreferrer" style={linkStyle}>EDRM (Electronic Discovery Reference Model)</a> — AI resources and standards</li>
            <li><a href="https://law.duke.edu/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Duke Law — AI in the Courts</a> — Academic research on AI and litigation</li>
            <li><a href="https://www.revintel.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>ReviewIntel</a> — E-discovery vendor analysis and guidance</li>
          </ul>
        </section>

        <div style={ctaBox}>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#6e6e73', marginBottom: '16px' }}>This guide is part of the Decision&Law Practice Guides series.</p>
          <a href="mailto:contact@decisionandlaw.com" style={{ fontSize: '13px', color: '#0066cc', textDecoration: 'none', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Contact us
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}

function Guide5() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 48px) clamp(48px, 8vw, 80px)' }}>
        <nav style={{ marginBottom: '32px' }}>
          <Link href="/guides" style={{ fontSize: '13px', color: '#0066cc', textDecoration: 'none', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Guides
          </Link>
        </nav>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '12px', color: '#0066cc', marginBottom: '10px', fontWeight: '500' }}>For: Litigators, researchers, law students</div>
          <span style={{ fontSize: '11px', color: '#8e8e93' }}>15 min read · Updated March 2026</span>
        </div>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', lineHeight: '1.15', letterSpacing: '-0.025em', color: '#1a1a1a', marginBottom: '40px' }}>Building an AI-Powered Legal Research Workflow</h1>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Introduction</h2>
          <p style={bodyText}>Legal research has always been about finding relevant authority. For decades, that meant mastering Boolean search syntax and navigating hierarchical classification systems. AI is fundamentally changing the nature of legal research—not by replacing human judgment, but by dramatically expanding the scope of what researchers can accomplish in a given time.</p>
          <p style={bodyText}>This guide helps researchers leverage AI effectively while maintaining the rigor that legal practice demands. The focus is on practical workflow integration, not vendor promotion.</p>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Beyond Boolean: Semantic Search Explained</h2>
          <p style={bodyText}>Traditional keyword search relies on exact matches. Semantic search understands meaning and context. This distinction matters enormously for legal research.</p>

          <h3 style={subHeader}>How Semantic Search Works</h3>
          <ul style={bulletList}>
            <li><strong>Concept mapping:</strong> AI maps legal terms to related concepts across jurisdictions</li>
            <li><strong>Relationship understanding:</strong> Understands how legal concepts relate (e.g., "negligence" relates to "duty," "breach," "causation")</li>
            <li><strong>Context awareness:</strong> Interprets queries based on surrounding context and user intent</li>
            <li><strong>Cross-language capability:</strong> Some systems understand legal concepts across languages</li>
          </ul>

          <h3 style={subHeader}>Query Formulation Strategies</h3>
          <div style={callout}>
            <p style={{ marginBottom: '8px' }}><strong>Instead of:</strong> "duty breach proximate cause negligence"</p>
            <p style={{ marginBottom: '8px' }}><strong>Try:</strong> "What elements must a plaintiff prove to establish a negligence claim against a property owner for injuries sustained on the premises?"</p>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Tool Comparison Matrix</h2>
          <p style={bodyText}>Major legal research platforms now include AI capabilities. Each has distinct strengths.</p>

          <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
            <table style={tableStyle}>
              <thead><tr style={{ backgroundColor: '#f4f4f5' }}><th style={thStyle}>Platform</th><th style={thStyle}>Strengths</th><th style={thStyle}>Best For</th></tr></thead>
              <tbody>
                <tr><td style={tdStyle}>Casetext (CoCounsel)</td><td style={tdStyle}>Fast synthesis, case law depth, deposition prep</td><td style={tdStyle}>Litigators, rapid turnaround</td></tr>
                <tr><td style={tdStyle}>Westlaw AI</td><td style={tdStyle}>Thomson Reuters corpus, CoCounsel integration</td><td style={tdStyle}>Full-service firms, comprehensive coverage</td></tr>
                <tr><td style={tdStyle}>Lexis+ AI</td><td style={tdStyle}>Nexis content, practical guidance links</td><td style={tdStyle}>Research-intensive practices</td></tr>
                <tr><td style={tdStyle}>vLex</td><td style={tdStyle}>Global coverage, Vincent AI</td><td style={tdStyle}>International and comparative research</td></tr>
                <tr><td style={tdStyle}>Free platforms</td><td style={tdStyle}>No cost, broad coverage</td><td style={tdStyle}>Initial exploration, non-billable research</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Validating AI-Generated Results</h2>
          <p style={bodyText}>AI can discover and synthesize faster than any human—but it can also hallucinate. Validation is not optional; it is the researcher's professional obligation.</p>

          <h3 style={subHeader}>Source Verification Protocol</h3>
          <ol style={numberedList}>
            <li><strong>Check citations:</strong> Every case citation must be verified in primary sources</li>
            <li><strong>Confirm holdings:</strong> Read the actual case to verify the AI's characterization</li>
            <li><strong>Check currency:</strong> Verify that cited cases have not been overruled or distinguished</li>
            <li><strong>Identify negative authority:</strong> AI may omit unfavorable precedent; actively search for contrary cases</li>
            <li><strong>Trace chain of reasoning:</strong> For AI-generated arguments, verify each step independently</li>
          </ol>

          <h3 style={subHeader}>Common AI Research Errors</h3>
          <div style={checklist}>
            <ul style={{ marginLeft: '20px' }}>
              <li><strong>Citation fabrication:</strong> AI invents case names and citations</li>
              <li><strong>Out-of-context quotes:</strong> Quotes are real but misrepresent holdings</li>
              <li><strong>Overgeneralization:</strong> Narrow holdings presented as general principles</li>
              <li><strong>Missing subsequent history:</strong> Cases cited without noting reversal or distinguished</li>
              <li><strong>Stale authority:</strong> Superseded rules presented as current law</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Integrating Research with Case Management</h2>
          <p style={bodyText}>AI research tools generate more output than traditional methods. Without proper organization, this creates a management challenge.</p>

          <h3 style={subHeader}>Research Organization System</h3>
          <ul style={bulletList}>
            <li><strong>Research memo structure:</strong> Document AI prompts, outputs, and verification separately</li>
            <li><strong>Source library:</strong> Maintain organized folders of verified authorities</li>
            <li><strong>Issue trees:</strong> Use visual frameworks to track legal theories and supporting authority</li>
            <li><strong>Date stamps:</strong> Track when research was conducted and when it was last verified</li>
          </ul>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Alerts and Monitoring Workflows</h2>
          <p style={bodyText}>Legal research is not a one-time activity. Ongoing monitoring ensures your research stays current.</p>

          <h3 style={subHeader}>Monitoring Strategy</h3>
          <ul style={bulletList}>
            <li><strong>Key case alerts:</strong> Set up notifications for cited and related cases</li>
            <li><strong>Legislation tracking:</strong> Monitor bills and regulations in relevant areas</li>
            
            <li><strong>Opposing party monitoring:</strong> Track cases involving opposing counsel or parties</li>
          </ul>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Ethical Considerations in AI Research</h2>
          <div style={callout}>
            <p style={{ marginBottom: '8px' }}>Under Model Rule 1.1 (Competence), lawyers must understand the tools they use. This includes understanding AI capabilities, limitations, and error patterns.</p>
            <p>Under Model Rule 5.1 (Supervision), partners must ensure that subordinate lawyers use AI appropriately and maintain quality standards.</p>
          </div>

          <h3 style={subHeader}>Best Practices</h3>
          <div style={checklist}>
            <ul style={{ marginLeft: '20px' }}>
              <li>☐ Always verify AI-generated citations in primary sources</li>
              <li>☐ Document your research methodology</li>
              <li>☐ Use AI for discovery, not for final conclusions without review</li>
              <li>☐ Stay current on AI error patterns and limitations</li>
              <li>☐ Report AI errors to platform vendors</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Authoritative Resources</h2>
          <ul style={bulletList}>
            <li><a href="https://www.law.georgetown.edu/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Georgetown Law — AI and Legal Research</a> — Academic perspective on AI in research</li>
            <li><a href="https://www.aallnet.org/" target="_blank" rel="noopener noreferrer" style={linkStyle}>AALL (American Association of Law Libraries)</a> — Professional guidance on legal research</li>
            <li><a href="https://www.law.com/legaltechnews/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Legaltech News</a> — Industry coverage of legal AI developments</li>
            <li><a href="https://lawreviewblog.law.georgetown.edu/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Georgetown Law Review Blog</a> — Scholarship on AI and law</li>
          </ul>
        </section>

        <div style={ctaBox}>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#6e6e73', marginBottom: '16px' }}>This guide is part of the Decision&Law Practice Guides series.</p>
          <a href="mailto:contact@decisionandlaw.com" style={{ fontSize: '13px', color: '#0066cc', textDecoration: 'none', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Contact us
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}

function Guide6() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 48px) clamp(48px, 8vw, 80px)' }}>
        <nav style={{ marginBottom: '32px' }}>
          <Link href="/guides" style={{ fontSize: '13px', color: '#0066cc', textDecoration: 'none', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Guides
          </Link>
        </nav>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '12px', color: '#0066cc', marginBottom: '10px', fontWeight: '500' }}>For: GCs, CFOs, legal ops, firm administrators</div>
          <span style={{ fontSize: '11px', color: '#8e8e93' }}>20 min read · Updated March 2026</span>
        </div>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', lineHeight: '1.15', letterSpacing: '-0.025em', color: '#1a1a1a', marginBottom: '40px' }}>ROI of Legal AI: Metrics That Matter</h1>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Introduction</h2>
          <p style={bodyText}>Legal AI ROI is harder to measure than most technology investments. The primary value proposition—time savings—often collides with billable hour economics that make efficiency gains look like revenue loss. Meanwhile, the most valuable benefits—quality improvements, risk reduction, competitive advantage—are genuinely difficult to quantify.</p>
          <p style={bodyText}>This guide provides a framework for measuring AI ROI that accounts for both hard and soft benefits, and for presenting findings to leadership in a compelling way.</p>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Beyond Billable Hours: A New ROI Framework</h2>
          <p style={bodyText}>The traditional ROI model—cost savings from reduced hours—is too narrow for AI investments. A comprehensive framework includes four value categories:</p>

          <h3 style={subHeader}>The Four Value Categories</h3>
          <ul style={bulletList}>
            <li><strong>Efficiency gains:</strong> Time saved, tasks automated, throughput increased</li>
            <li><strong>Quality improvements:</strong> Error reduction, consistency gains, outcome quality</li>
            <li><strong>Risk reduction:</strong> Better compliance, fewer mistakes, reduced exposure</li>
            <li><strong>Strategic value:</strong> Competitive advantage, talent attraction, client satisfaction</li>
          </ul>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Hard Metrics: Time, Cost, and Volume</h2>
          <p style={bodyText}>Hard metrics are the foundation of ROI analysis. They are measurable, comparable, and credible to financial stakeholders.</p>

          <h3 style={subHeader}>Measurement Framework</h3>
          <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
            <table style={tableStyle}>
              <thead><tr style={{ backgroundColor: '#f4f4f5' }}><th style={thStyle}>Metric</th><th style={thStyle}>How to Measure</th><th style={thStyle}>Benchmark</th></tr></thead>
              <tbody>
                <tr><td style={tdStyle}>Hours saved per matter</td><td style={tdStyle}>Track time before/after AI for similar matters</td><td style={tdStyle}>30-60% for routine tasks</td></tr>
                <tr><td style={tdStyle}>Throughput increase</td><td style={tdStyle}>Matters completed per period vs. baseline</td><td style={tdStyle}>15-40% depending on AI integration</td></tr>
                <tr><td style={tdStyle}>Cost per matter</td><td style={tdStyle}>Total cost including AI vs. traditional</td><td style={tdStyle}>20-50% reduction achievable</td></tr>
                <tr><td style={tdStyle}>Utilization rate</td><td style={tdStyle}>Billable hours as % of total hours</td><td style={tdStyle}>5-15% improvement</td></tr>
              </tbody>
            </table>
          </div>

          <h3 style={subHeader}>Measurement Process</h3>
          <ol style={numberedList}>
            <li><strong>Establish baseline:</strong> Document current time/cost for representative matters</li>
            <li><strong>Track AI usage:</strong> Monitor time spent using AI tools per matter</li>
            <li><strong>Measure outcomes:</strong> Document final time/cost for AI-assisted matters</li>
            <li><strong>Calculate delta:</strong> Compare before and after; adjust for other variables</li>
            <li><strong>Aggregate:</strong> Roll up across matters for portfolio-level view</li>
          </ol>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Soft Metrics: Quality, Consistency, Risk Reduction</h2>
          <p style={bodyText}>Soft metrics are harder to quantify but often more valuable than hard savings. They require careful measurement design.</p>

          <h3 style={subHeader}>Quality Metrics</h3>
          <div style={checklist}>
            <ul style={{ marginLeft: '20px' }}>
              <li><strong>Error rate:</strong> Defects, revisions, or callbacks per matter</li>
              <li><strong>Consistency score:</strong> Variance in outcomes across similar matters</li>
              <li><strong>Client satisfaction:</strong> Survey scores or Net Promoter Score</li>
              <li><strong>Win rate:</strong> Success rate on matters using AI vs. historical baseline</li>
            </ul>
          </div>

          <h3 style={subHeader}>Risk Metrics</h3>
          <div style={checklist}>
            <ul style={{ marginLeft: '20px' }}>
              <li><strong>Compliance rate:</strong> % of matters meeting regulatory requirements</li>
              <li><strong>Audit findings:</strong> Issues identified in internal/external audits</li>
              <li><strong>Client complaints:</strong> Formal complaints per matter type</li>
              <li><strong>Near-miss incidents:</strong> Caught errors before they caused harm</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Time-to-Value by Tool Type</h2>
          <p style={bodyText}>Different AI tools deliver value at different speeds. Understanding these timelines helps set realistic expectations.</p>

          <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
            <table style={tableStyle}>
              <thead><tr style={{ backgroundColor: '#f4f4f5' }}><th style={thStyle}>Tool Category</th><th style={thStyle}>Time to Value</th><th style={thStyle}>Peak ROI</th><th style={thStyle}>Typical Payback</th></tr></thead>
              <tbody>
                <tr><td style={tdStyle}>Research tools</td><td style={tdStyle}>Immediate</td><td style={tdStyle}>3-6 months</td><td style={tdStyle}>6-12 months</td></tr>
                <tr><td style={tdStyle}>Contract review</td><td style={tdStyle}>2-4 weeks</td><td style={tdStyle}>6-12 months</td><td style={tdStyle}>12-18 months</td></tr>
                <tr><td style={tdStyle}>E-discovery</td><td style={tdStyle}>Per-matter</td><td style={tdStyle}>Maturity-dependent</td><td style={tdStyle}>Per-matter</td></tr>
                <tr><td style={tdStyle}>Document drafting</td><td style={tdStyle}>2-4 weeks</td><td style={tdStyle}>3-6 months</td><td style={tdStyle}>6-12 months</td></tr>
                <tr><td style={tdStyle}>Legal ops automation</td><td style={tdStyle}>1-3 months</td><td style={tdStyle}>12-18 months</td><td style={tdStyle}>18-24 months</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Building the Business Case for Leadership</h2>
          <p style={bodyText}>Presenting AI ROI to leadership requires translating technical benefits into business language. Use this framework for executive presentations.</p>

          <h3 style={subHeader}>Executive Summary Template</h3>
          <div style={callout}>
            <p style={{ marginBottom: '12px' }}><strong>Investment:</strong> [Total cost including tools, training, implementation]</p>
            <p style={{ marginBottom: '12px' }}><strong>Annual benefit:</strong> [Hard savings + quantified soft benefits]</p>
            <p style={{ marginBottom: '12px' }}><strong>Payback period:</strong> [Months to recoup investment]</p>
            <p style={{ marginBottom: '12px' }}><strong>Strategic value:</strong> [Competitive, capability, risk factors]</p>
            <p><strong>Recommendation:</strong> [Approve/defer/expand pilot]</p>
          </div>

          <h3 style={subHeader}>Presentation Best Practices</h3>
          <ul style={bulletList}>
            <li><strong>Lead with business outcomes:</strong> Revenue, competitive position, risk—not technology features</li>
            <li><strong>Use comparable data:</strong> Industry benchmarks, peer firm examples</li>
            <li><strong>Show scenario analysis:</strong> Conservative vs. optimistic projections</li>
            <li><strong>Address objections proactively:</strong> Security, change management, vendor lock-in</li>
            <li><strong>Propose pilot:</strong> Lower-risk approach to build organizational confidence</li>
          </ul>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Common ROI Pitfalls and How to Avoid Them</h2>

          <h3 style={subHeader}>Pitfall 1: Measuring the Wrong Things</h3>
          <p style={bodyText}>Focusing only on billable hours misses the true value. Track quality, consistency, and risk outcomes.</p>

          <h3 style={subHeader}>Pitfall 2: Ignoring Implementation Costs</h3>
          <p style={bodyText}>Tool cost is often 30-40% of total investment. Include training, change management, and workflow redesign.</p>

          <h3 style={subHeader}>Pitfall 3: Short Time Horizon</h3>
          <p style={bodyText}>AI benefits often compound over time. Measure at 6, 12, and 24 months—not just 3 months post-implementation.</p>

          <h3 style={subHeader}>Pitfall 4: Not Counting Hidden Costs</h3>
          <p style={bodyText}>Productivity during learning curve, vendor management, and ongoing calibration all consume resources.</p>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={sectionHeader}>Authoritative Resources</h2>
          <ul style={bulletList}>
            <li><a href="https://www.gartner.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Gartner</a> — Market analysis on legal technology ROI</li>
            <li><a href="https://news.bloomberglaw.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Bloomberg Law</a> — Industry analysis on legal AI value</li>
            <li><a href="https://www.cloc.org/" target="_blank" rel="noopener noreferrer" style={linkStyle}>CLOC — Legal Operations Maturity Model</a> — Framework for measuring legal ops maturity</li>
            <li><a href="https://www.mckinsey.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>McKinsey Legal Practice</a> — Management consulting perspective on legal efficiency</li>
          </ul>
        </section>

        <div style={ctaBox}>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#6e6e73', marginBottom: '16px' }}>This guide is part of the Decision&Law Practice Guides series.</p>
          <a href="mailto:contact@decisionandlaw.com" style={{ fontSize: '13px', color: '#0066cc', textDecoration: 'none', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Contact us
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}

const sectionHeader: React.CSSProperties = { fontSize: '11px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0066cc', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid rgba(0,0,0,0.06)' };
const subHeader: React.CSSProperties = { fontSize: '15px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '28px' };
const bodyText: React.CSSProperties = { fontSize: '15px', lineHeight: '1.7', color: '#1a1a1a', marginBottom: '16px' };
const bulletList: React.CSSProperties = { fontSize: '15px', lineHeight: '1.7', color: '#1a1a1a', marginLeft: '24px', marginBottom: '16px' };
const numberedList: React.CSSProperties = { fontSize: '15px', lineHeight: '1.7', color: '#1a1a1a', marginLeft: '24px', marginBottom: '16px' };
const callout: React.CSSProperties = { fontSize: '14px', lineHeight: '1.6', color: '#1a1a1a', padding: '20px', backgroundColor: '#fafafa', borderLeft: '3px solid #0066cc', marginBottom: '20px', borderRadius: '0 8px 8px 0' };
const checklist: React.CSSProperties = { backgroundColor: '#fafafa', padding: '20px', marginBottom: '20px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.06)' };
const ctaBox: React.CSSProperties = { marginTop: '48px', padding: '32px', backgroundColor: '#fafafa', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.06)' };
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', fontSize: '14px', backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' };
const thStyle: React.CSSProperties = { padding: '14px 16px', textAlign: 'left', borderBottom: '1px solid rgba(0,0,0,0.06)', fontWeight: '600', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#6e6e73', backgroundColor: '#fafafa' };
const tdStyle: React.CSSProperties = { padding: '14px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', fontSize: '14px' };
const linkStyle: React.CSSProperties = { color: '#0066cc', textDecoration: 'none', fontWeight: '500' };

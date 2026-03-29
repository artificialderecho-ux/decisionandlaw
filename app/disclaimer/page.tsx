'use client';

import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 48px) clamp(48px, 8vw, 80px)' }}>
        
        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0066cc', marginBottom: '12px' }}>
            Legal
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 44px)', fontWeight: '700', lineHeight: 1.1, letterSpacing: '-0.025em', color: '#1a1a1a', marginBottom: '24px' }}>
            Disclaimer of Liability
          </h1>
          <p style={{ fontSize: '14px', color: '#8e8e93' }}>
            <strong>Effective Date:</strong> March 29, 2026
          </p>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>1. No Legal Advice – Critical Disclosure</h2>
        
        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>1.A What This Site Is NOT</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '16px' }}>
          <strong>DECISION & LAW DOES NOT PROVIDE LEGAL ADVICE.</strong>
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '16px' }}>
          Decision & Law is not a law firm, is not regulated by state bar associations, does not employ licensed attorneys, and is not authorized to provide legal representation or counsel.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Nothing on this Site constitutes: legal advice tailored to your specific situation, legal representation or advocacy, attorney‑client relationship or implied attorney‑client relationship, opinion of counsel on your legal obligations, certification or validation of compliance, or guarantee of legal or regulatory compliance.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>1.B When Using Our Content</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          Our analyses, tool reviews, and regulatory explanations are general educational information only.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          <strong>DO</strong> use our content as: starting point for your own research, educational background material, catalyst to consult qualified counsel, reference for understanding regulations, and trigger to ask your lawyer the right questions.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          <strong>DO NOT</strong> use our content as: your sole source of legal guidance, substitute for attorney consultation before action, representation that you are in compliance with law, basis for business strategy without legal review, or guidance for litigation, contracts, or regulatory proceedings.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>1.C Your Legal Responsibility</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          <strong>YOU</strong> are solely responsible for:
        </p>
        <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '24px', paddingLeft: '24px' }}>
          <li>Determining whether our analysis applies to your situation</li>
          <li>Consulting a qualified attorney licensed in your jurisdiction before action</li>
          <li>Conducting your own compliance assessment</li>
          <li>Evaluating how laws differ across jurisdictions</li>
          <li>Making informed legal and business decisions based on professional counsel</li>
        </ul>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Different states, industries, fact patterns, and organizational structures create dramatically different legal obligations. What applies to Company A&apos;s CCPA compliance, data retention, or AI governance may not apply to Company B.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          <strong>Before acting on anything you read here, you MUST consult a licensed attorney in your jurisdiction. Period.</strong>
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>1.D How Courts May View This Disclaimer</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Even with this disclaimer, some courts have found that sufficiently specific legal content can create an implicit attorney‑client relationship or a claim of professional negligence if the provider holds itself out as legal expert. This disclaimer does not protect us from all claims, nor does it eliminate your responsibility to seek proper counsel.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>2. No Warranty – Content Accuracy</h2>
        
        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>2.A Accuracy and Reliability</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          While we strive for accuracy, we make no representation or warranty regarding: accuracy of any information on the Site, completeness of our regulatory analysis, timeliness of our content (laws change), reliability or availability of the Site, freedom from errors, omissions, or outdated information, or that all links remain valid or current.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>2.B Laws Change Constantly</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          Regulatory landscape is in rapid flux: the EU AI Act evolves through guidance documents, US state privacy laws change annually, interpretive guidance from FTC, CCPA Enforcement Authorities, and state AGs changes, jurisprudence develops (new court decisions may override previous guidance), and AI itself changes (new models, capabilities, risks).
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          What was accurate on publication date may be outdated within weeks or months. We maintain good‑faith effort to update timely content within 7 calendar days of material regulatory changes. However, we cannot update every article simultaneously, and not all changes receive immediate coverage.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>2.C No Warranty on &quot;As Is&quot; Basis</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          THE SITE AND ALL CONTENT ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          DECISION & LAW DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO: IMPLIED WARRANTIES OF MERCHANTABILITY, IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, WARRANTY OF TITLE, WARRANTY OF NON‑INFRINGEMENT, WARRANTY THAT CONTENT IS ERROR‑FREE OR UNINTERRUPTED, and WARRANTY AGAINST DELAYS OR DEFECTS.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>3. Regulatory Content – Limitations</h2>
        
        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>3.A No Real‑Time Compliance Assurance</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          When we analyze regulations (CCPA, GDPR, EU AI Act, state privacy laws, etc.), our analysis reflects: official regulatory text, regulatory agency guidance documents, published case law and enforcement actions, and our professional interpretation and analysis.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Our analysis does <strong>NOT</strong> reflect: real‑time enforcement priorities of regulators, non‑public compliance positions of regulators, future regulatory changes not yet proposed, industry‑specific exemptions unique to your organization, or fact‑specific application to your technology or business model.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>3.B Regulatory Agencies Change Positions</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Regulatory authorities (AEPD, FTC, state AGs, etc.) issue guidance that is not binding until tested in enforcement or litigation. Regulators may change enforcement priorities, issue new guidance, settle enforcement actions creating precedent, or decline to investigate certain practices. None of this is predictable from published guidance alone. You need ongoing counsel.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>3.C Jurisdiction‑Specific Variations</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Laws with the same name (e.g., &quot;CCPA&quot;) differ by jurisdiction. Our content focuses on US federal law and EU law. Application to other jurisdictions is limited. Consult counsel in each jurisdiction where you operate.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>4. AI and Legal Technology Content – Special Limitations</h2>
        
        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>4.A No Certification or Validation</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          When we analyze or review AI systems, legal tech tools, or compliance software, we provide: analysis based on publicly available information, vendor documentation and marketing materials, published research and user feedback, and our professional assessment of capabilities and risks.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          We do <strong>NOT</strong> provide: independent security audits or penetration testing, validation that a tool complies with GDPR, CCPA, or other laws, certification of security, reliability, or fitness for purpose, testing of source code or internal architecture, or guarantee that vendor claims are accurate.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>4.B Tools Can Fail, Change, or Violate Law</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          Any AI system or legal tech tool can: experience data breaches or security incidents, change features or compliance posture after acquisition, misrepresent its capabilities or compliance status, become obsolete or unsupported, or violate regulations despite vendor claims.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          Inclusion of a tool in our Tools Directory does <strong>NOT</strong> mean: we endorse the tool, we verify its claims, it will not harm your organization, it complies with law, or it is appropriate for your risk tolerance.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Before adopting any tool: review the vendor&apos;s own security certifications (SOC 2, ISO 27001), conduct your own security assessment or hire a qualified auditor, review contracts and data processing terms, verify compliance with regulations applicable to your data and use case, and consult your legal, security, and compliance teams.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>4.C Our Content Is Not &quot;Official&quot; Guidance</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Our analysis of how an AI system should comply with GDPR is our interpretation, not official guidance from regulators. The AEPD, European Commission, ICO (UK), FTC, and other agencies may have different interpretations or enforcement priorities. Use our analysis as a starting point, not as your compliance roadmap.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>5. Third‑Party Content and Links</h2>
        
        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>5.A Links Are Not Endorsements</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          The Site contains links to third‑party websites, papers, tools, and resources. These links are provided for reference and convenience only. Linking to a source does <strong>NOT</strong> mean: we endorse the content, we verify its accuracy, it is available or functional, we agree with its conclusions, or we are responsible for its content.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>5.B No Monitoring of External Sites</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          We do not continuously monitor linked sites for accuracy or appropriateness, nor guarantee that links remain valid.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>5.C Third‑Party Liability</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Decision & Law is not responsible for: content, accuracy, or completeness of third‑party sites, privacy practices of third‑party services, security or compliance of third‑party tools, or any loss, harm, or damage arising from third‑party content or services.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>6. Limitation of Liability</h2>
        
        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>6.A Scope of Limitation</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          TO THE FULLEST EXTENT PERMITTED BY LAW, DECISION & LAW SHALL NOT BE LIABLE FOR:
        </p>
        <ol style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '24px', paddingLeft: '24px' }}>
          <li>Indirect or Consequential Damages: Lost profits, lost revenue, lost data, lost business opportunity, lost goodwill, business interruption</li>
          <li>Special or Incidental Damages: Costs of substitute goods, services, or solutions</li>
          <li>Damages from Reliance on Content: Any loss or harm arising from your reliance on analyses, tool reviews, or information on the Site</li>
          <li>Damages from Third Parties: Any claim by third parties based on your use of content or Site</li>
          <li>Regulatory Fines or Penalties: Damages arising from your non‑compliance with law, even if caused by outdated or erroneous information</li>
          <li>Data Breaches at Third Parties: Damages if a tool we reviewed or linked to experiences a data breach</li>
          <li>Lost Litigation or Failed Compliance: Any loss of legal action, failed compliance effort, or regulatory enforcement action</li>
        </ol>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>6.B Aggregate Liability Cap</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Even if Decision & Law has been advised of the possibility of such damages, the total liability of Decision & Law arising from your use of the Site shall not exceed the lesser of (i) actual damages proved, or (ii) $100 USD.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>6.C Jurisdictional Carve‑Outs</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Some jurisdictions do not allow limitations on liability for certain categories of damages. In those jurisdictions, the above limitations will apply to the maximum extent permitted by law.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>7. Regulatory Content – Error Correction</h2>
        
        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>7.A If You Discover an Error</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          If you find that our analysis of a regulation, law, or AI system is inaccurate, outdated, or misleading, please notify us:<br/>
          Email: <strong>artificialderecho@gmail.com</strong><br/>
          Subject: &quot;Correction Request&quot; or &quot;Error in [Article Title]&quot;
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>7.B Our Response Process</h3>
        <ol style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '24px', paddingLeft: '24px' }}>
          <li><strong>Acknowledgment (within 5 business days):</strong> We will confirm receipt of your correction request.</li>
          <li><strong>Investigation (within 10 business days):</strong> We will research the claim and verify accuracy.</li>
          <li><strong>Action:</strong> If valid, we update the article and credit you. If disputed, we explain our reasoning. If partially correct, we update the affected portion.</li>
        </ol>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>7.C Correction Notification</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          When we correct a material error, we will: (1) Update the article with corrected information, (2) Add a transparent correction note crediting you (with your consent), (3) Update the &quot;Last Updated&quot; date on the article, (4) Not rewrite history; the old version may be accessible in archives.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>7.D No Liability for Corrections or Updates</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          While we endeavor to correct errors, we have no obligation to do so and will not be liable for damages arising from errors or corrections.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>8. Compliance Representations</h2>
        
        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>8.A No Compliance Certification</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Decision & Law does not certify, validate, or audit the compliance status of any organization, tool, or system. When we state that &quot;Tool X is GDPR‑compliant&quot; based on vendor claims, we are providing information and analysis, not a compliance certification.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>8.B No Assumption of Responsibility</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Decision & Law does not assume responsibility for your organization&apos;s compliance with any law. Responsibility rests solely with: your organization&apos;s leadership, your legal counsel, your compliance officers, and your auditors and regulators.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>9. Dispute Resolution and Governing Law</h2>
        
        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>9.A Governing Law</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          These disclaimers and all claims arising from your use of the Site are governed by the laws of the State of Delaware, without regard to conflict of law principles.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>9.B Forum</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          You agree to exclusive jurisdiction in the Delaware Court of Chancery or the U.S. District Court for the District of Delaware. You consent to personal jurisdiction in Delaware.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>10. Contact and Questions</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '48px' }}>
          For questions about this Disclaimer:<br/>
          Email: <strong>artificialderecho@gmail.com</strong>
        </p>

        <div style={{ backgroundColor: '#fafafa', padding: '24px', borderRadius: '12px', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px' }}>Summary for Quick Reference</h3>
          <ul style={{ fontSize: '14px', lineHeight: 1.8, color: '#6e6e73', listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '8px' }}>🛑 This is not legal advice</li>
            <li style={{ marginBottom: '8px' }}>⚖️ Consult a lawyer before acting</li>
            <li style={{ marginBottom: '8px' }}>📅 Laws change; we update in good faith but not real‑time</li>
            <li style={{ marginBottom: '8px' }}>🔧 Tools can fail; do your own due diligence</li>
            <li style={{ marginBottom: '8px' }}>📜 No warranty of accuracy or fitness</li>
            <li style={{ marginBottom: '8px' }}>💰 We are not liable for your damages from reliance</li>
            <li>✋ You are responsible for your compliance</li>
          </ul>
        </div>

        <div style={{ paddingTop: '32px', borderTop: '1px solid rgba(0,0,0,0.08)', fontSize: '14px', color: '#8e8e93' }}>
          <p><strong>Last Updated:</strong> March 29, 2026</p>
        </div>

      </div>
    </main>
  );
}

'use client';

import Link from 'next/link';

export default function TermsPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 48px) clamp(48px, 8vw, 80px)' }}>
        
        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0066cc', marginBottom: '12px' }}>
            Legal
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 44px)', fontWeight: '700', lineHeight: 1.1, letterSpacing: '-0.025em', color: '#1a1a1a', marginBottom: '24px' }}>
            Terms of Use
          </h1>
          <p style={{ fontSize: '14px', color: '#8e8e93' }}>
            <strong>Effective Date:</strong> March 29, 2026
          </p>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>1. Acceptance of Terms</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '16px' }}>
          By accessing or using the website decisionandlaw.com (the &quot;Site&quot;), operated by Decision & Law LLC (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          These Terms apply to all visitors, users, and others who access or use the Site.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>2. Informational Purposes Only</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '16px' }}>
          The content on this Site is provided for general informational and educational purposes only. It is not intended to constitute legal advice or create an attorney-client relationship.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '16px' }}>
          You should not act or refrain from acting based on any information on this Site without seeking appropriate legal counsel. Different jurisdictions, industries, and factual circumstances may change the applicability of the information we provide.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>2.A Content Generation and Sources</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          <strong>Human Authorship:</strong> Decision & Law content is created by human researchers and legal writers. We do not currently use large language models (LLMs), ChatGPT, or other generative AI tools to produce original analyses or recommendations. All conclusions are reviewed and verified by qualified personnel.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          If we adopt AI-assisted tools in our editorial process, we will clearly disclose this in a prominent notice, and you will have the right to opt-out of AI-generated content.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          <strong>Verification and Currency:</strong> While we strive for accuracy, laws and regulations change constantly. We maintain a good‑faith commitment to update timely regulatory analyses (CCPA changes, EU AI Act guidance, etc.) within 7 calendar days of material changes. However, we cannot guarantee real‑time accuracy on all topics.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          <strong>No Legal Analysis is Certain:</strong> Legal interpretation involves judgment. While we provide what we believe to be accurate analyses, courts may interpret laws differently than we do, and legislatures may change laws suddenly. Our analysis reflects state of law as of the publication date.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>3. Intellectual Property</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '16px' }}>
          Unless otherwise indicated, the Site and all content, features, and functionality (including but not limited to text, graphics, logos, photographs, and code) are the exclusive property of Decision & Law LLC and are protected by US Copyright Law (17 U.S.C. § 101 et seq.) and international copyright treaties.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>3.A Your Limited License</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          You are granted a limited, non‑exclusive, non‑transferable license to access and view the Site for your personal, non‑commercial use only. This license does not permit:
        </p>
        <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '24px', paddingLeft: '24px' }}>
          <li>Reproduction, distribution, or publication of our content without attribution and written permission</li>
          <li>Modification, derivation, or creation of derivative works</li>
          <li>Use of our content in competitive services or products</li>
          <li>Public display or performance of our content</li>
          <li>Commercial use of any kind</li>
        </ul>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>3.B Fair Use for Citations</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          Educational use of limited portions of our content (up to 150 words per article) is permitted provided you:
        </p>
        <ol style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '24px', paddingLeft: '24px' }}>
          <li>Clearly attribute to Decision & Law</li>
          <li>Include a direct link to the original article</li>
          <li>Do not modify the text</li>
          <li>Do not use for commercial purposes (e.g., resale, paid courses, consulting deliverables without licensing)</li>
        </ol>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>3.C Permissions and Licensing</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Requests for reproduction beyond fair use require written permission. Contact: <strong>artificialderecho@gmail.com</strong>
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>4. User Conduct</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '16px' }}>
          You agree not to:
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>4.1 Legal Violations</h3>
        <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '24px', paddingLeft: '24px' }}>
          <li>Use the Site in any way that violates applicable federal, state, international, or local law</li>
          <li>Use the Site to facilitate fraud, misrepresentation, harassment, or illegal activity</li>
          <li>Use the Site to transmit any harmful code, malware, viruses, or destructive software</li>
        </ul>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>4.2 Site Integrity</h3>
        <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '24px', paddingLeft: '24px' }}>
          <li>Attempt to interfere with, disrupt, or damage the proper working of the Site</li>
          <li>Attempt to gain unauthorized access to the Site, user accounts, or connected systems</li>
          <li>Exploit security vulnerabilities or report them publicly without giving us reasonable opportunity to fix them (responsible disclosure)</li>
        </ul>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>4.3 Content Extraction and Competitive Use</h3>
        <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '24px', paddingLeft: '24px' }}>
          <li>Scrape, crawl, or use any automated means (including web scrapers, bots, spiders) to access, download, or extract Site content for competitive purposes</li>
          <li>Use our content to train, fine‑tune, validate, or test large language models (LLMs) or other AI systems, whether commercial or non‑commercial</li>
          <li>Build or feed our analyses into artificial intelligence systems without written permission</li>
          <li>Extract bulk data on tools, regulatory analysis, or trends to create competitive intelligence products</li>
        </ul>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>4.4 Republication and Commercial Resale</h3>
        <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '24px', paddingLeft: '24px' }}>
          <li>Republish, repackage, or resell our analysis or tool evaluations as your own work</li>
          <li>Incorporate our analyses into paid services, consulting deliverables, or reports without licensing</li>
          <li>Create derivative analyses or summaries of our content for sale or distribution</li>
          <li>Use our tool directory or rankings to promote competitive services</li>
          <li>Misrepresent our analysis as your original research or as official regulatory guidance</li>
        </ul>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>4.5 Impersonation and Misrepresentation</h3>
        <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '24px', paddingLeft: '24px' }}>
          <li>Misrepresent Decision & Law&apos;s analysis as official regulatory guidance, government position, or certification</li>
          <li>Claim falsely that Decision & Law endorses your product, service, or organization</li>
          <li>Impersonate Decision & Law or create unauthorized accounts in our name</li>
          <li>Use our logos, branding, or trademarks without permission</li>
          <li>Falsely suggest an affiliation, partnership, or investment relationship with Decision & Law</li>
        </ul>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>4.6 Harassment and Abuse</h3>
        <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '24px', paddingLeft: '24px' }}>
          <li>Post hateful, defamatory, or harassing comments</li>
          <li>Spam the Site with irrelevant content or advertisements</li>
          <li>Transmit unwanted solicitations or advertisements</li>
          <li>Harass other users or our team</li>
        </ul>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>5. Tools Directory – Editorial Standards and Disclaimer</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '16px' }}>
          Decision & Law maintains a curated directory of legal technology tools and AI applications. This directory is provided for informational and research purposes only.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>5.A Editorial Standards</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          We evaluate tools based on:
        </p>
        <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '24px', paddingLeft: '24px' }}>
          <li>Publicly available information, vendor documentation, and published reviews</li>
          <li>User feedback and adoption rates</li>
          <li>Stated compliance certifications (SOC 2, ISO 27001, etc.)</li>
          <li>Alignment with applicable regulations</li>
        </ul>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          We do not evaluate source code, internal systems architecture, or conduct independent security audits. We rely on vendor‑provided security documentation and third‑party certifications.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>5.B No Commercial Relationships</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          Decision & Law:
        </p>
        <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '24px', paddingLeft: '24px' }}>
          <li>Does <strong>NOT</strong> receive compensation, affiliate fees, revenue‑sharing, or other consideration from any tool listed in the directory</li>
          <li>Does <strong>NOT</strong> have equity stakes or partnerships with listed tools (except where publicly disclosed)</li>
          <li>Does <strong>NOT</strong> prioritize tools based on commercial relationships</li>
          <li>Maintains a complete list of any exceptions to this policy, updated quarterly</li>
        </ul>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>5.C Disclaimer on Tool Reliability</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          Inclusion in our Tools Directory is not an endorsement and does not create any liability on our part for the tool&apos;s performance or compliance.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          Decision & Law makes no warranty regarding any listed tool&apos;s:
        </p>
        <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '24px', paddingLeft: '24px' }}>
          <li>Legal compliance with GDPR, CCPA, HIPAA, FedRAMP, or any other regulation</li>
          <li>Security posture or freedom from data breaches</li>
          <li>Performance, reliability, or uptime</li>
          <li>Suitability for your organization&apos;s specific needs</li>
          <li>Accuracy of vendor claims or marketing statements</li>
        </ul>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '16px' }}>
          <strong>Your Responsibility:</strong> Before adopting any tool, you must:
        </p>
        <ol style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '24px', paddingLeft: '24px' }}>
          <li>Review the vendor&apos;s own privacy policy, terms of service, and compliance documentation</li>
          <li>Conduct your own security assessment or hire a qualified auditor</li>
          <li>Verify that the tool complies with applicable regulations in your jurisdiction</li>
          <li>Consult your legal and security teams before implementation</li>
        </ol>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>5.D Removal and Changes</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Decision & Law may remove tools from the directory without notice if: the vendor ceases operations, the tool is acquired and our assessment changes, new information indicates non‑compliance with law, substantial security incidents occur, or our assessment of the tool&apos;s relevance or utility changes. Removal does not imply misconduct by the vendor; it reflects our evolving assessment.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>5.E No Agency or Affiliation</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Inclusion in our Tools Directory does not create: an agency relationship between Decision & Law and the vendor, a partnership or joint venture, an endorsement or certification by Decision & Law, any liability on the vendor for our analysis of their tool, or any liability on Decision & Law for the vendor&apos;s conduct.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>6. Third‑Party Links</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          The Site may contain links to third‑party websites, content, and services. We do not endorse, monitor, or assume responsibility for: the content, accuracy, or completeness of third‑party sites; the privacy practices or data handling of third‑party services; the security, compliance, or legality of third‑party platforms; or any loss or damage arising from your use of third‑party services. Use third‑party links at your own risk.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>7. No Registration or User Accounts</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          The Site does not require user registration, email subscription, or account creation to access content. If you voluntarily provide contact information via email or contact form, see our <Link href="/privacy" style={{ color: '#0066cc', textDecoration: 'none' }}>Privacy Policy</Link> for how we handle that data.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>8. Limitation of Liability</h2>
        
        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>8.A General Disclaimer</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          TO THE FULLEST EXTENT PERMITTED BY LAW, Decision & Law makes no representations or warranties of any kind, express or implied, regarding: the accuracy, completeness, timeliness, or reliability of any information on the Site; that the Site will be uninterrupted, error‑free, or secure; that defects will be corrected; or that the Site or its content are free from harmful code or malware.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          THE SITE AND ALL CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON‑INFRINGEMENT.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>8.B Limitation on Damages</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          IN NO EVENT SHALL DECISION & LAW BE LIABLE FOR: any indirect, incidental, special, consequential, or punitive damages; loss of profits, revenue, data, use, or goodwill; damages arising from reliance on content, analysis, or recommendations; damages from third‑party claims based on your use of the Site; or costs of substitute goods or services. This limitation applies even if Decision & Law has been advised of the possibility of such damages.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>8.C Exclusive Remedy</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Your exclusive remedy for dissatisfaction with the Site is to cease using it.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>9. DMCA and Intellectual Property Infringement</h2>
        
        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>9.A Takedown Notices</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          If you believe that content on Decision & Law infringes your copyright or intellectual property rights, you may file a DMCA takedown notice. Your notice must include:
        </p>
        <ol style={{ fontSize: '16px', lineHeight: 1.8, color: '#6e6e73', marginBottom: '24px', paddingLeft: '24px' }}>
          <li>Identification of the copyrighted work</li>
          <li>Location of infringing content (specific URL)</li>
          <li>Your contact information</li>
          <li>Good faith statement</li>
          <li>Accuracy statement under penalty of perjury</li>
          <li>Your signature</li>
        </ol>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Send DMCA notices to: <strong>artificialderecho@gmail.com</strong>
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>9.B Counter‑Notice</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          If you believe content was removed in error, you may file a counter‑notice.
        </p>

        <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px', marginTop: '24px' }}>9.C Repeated Infringement</h3>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          Users who repeatedly infringe intellectual property rights will have their access to the Site terminated.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>10. Governing Law and Jurisdiction</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '12px' }}>
          You agree to submit to the exclusive jurisdiction of the state and federal courts located in Delaware for resolution of any disputes, claims, or controversies arising from or relating to these Terms or your use of the Site.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          <strong>10.A No Class Action:</strong> You agree that any legal proceeding shall be conducted on an individual basis (not as a class action, collective action, or representative action).
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>11. Severability</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions will remain in full force and effect.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>12. Entire Agreement</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          These Terms, along with our <Link href="/privacy" style={{ color: '#0066cc', textDecoration: 'none' }}>Privacy Policy</Link>, <Link href="/disclaimer" style={{ color: '#0066cc', textDecoration: 'none' }}>Disclaimer of Liability</Link>, and <Link href="/acceptable-use" style={{ color: '#0066cc', textDecoration: 'none' }}>Acceptable Use Policy</Link>, constitute the entire agreement between you and Decision & Law regarding use of the Site.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>13. Changes to These Terms</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '24px' }}>
          We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site following posted changes constitutes your acceptance of the modified Terms.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px', marginTop: '40px', letterSpacing: '-0.01em' }}>14. Contact</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '48px' }}>
          For questions, disputes, or requests regarding these Terms of Use:<br/>
          Email: <strong>artificialderecho@gmail.com</strong>
        </p>

        <div style={{ paddingTop: '32px', borderTop: '1px solid rgba(0,0,0,0.08)', fontSize: '14px', color: '#8e8e93' }}>
          <p><strong>Last Updated:</strong> March 29, 2026</p>
        </div>

      </div>
    </main>
  );
}

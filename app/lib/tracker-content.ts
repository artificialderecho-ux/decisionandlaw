export const TRACKER_CONTENT: Record<string, {
  summary: string
  lawyerGuidance: string[]
  activeBills?: { name: string; description: string; status: string }[]
  lastUpdated: string
}> = {
  'california': {
    summary: 'California leads the nation in frontier AI legislation with comprehensive transparency and safety requirements affecting legal technology providers.',
    lawyerGuidance: [
      'SB 53 (Transparency in Frontier AI Act, Sept 2025): Requires large frontier AI developers (>$500M revenue) to publish safety frameworks and report critical incidents. Law firms using frontier AI tools must verify vendor compliance.',
      'SB 1047 (vetoed 2024): Although vetoed, it signaled California\'s aggressive regulatory intent. Expect new bills in 2025-2026 legislative session.',
      'State Bar guidance pending on competence obligations for AI tools under Rules of Professional Conduct 1.1 and 5.3.'
    ],
    activeBills: [
      { name: 'AB 1008', description: 'Personal Information in AI systems', status: 'In committee' },
      { name: 'SB 243', description: 'AI transparency in legal proceedings', status: 'Passed Senate' }
    ],
    lastUpdated: 'March 2026'
  },
  'colorado': {
    summary: 'Colorado enacted the first comprehensive AI consumer protection law in the US, establishing a regulatory framework for high-risk AI systems.',
    lawyerGuidance: [
      'SB 205 (Colorado AI Act, 2024): Applies to developers and deployers of high-risk AI systems. Law firms using AI for consequential decisions affecting clients may qualify as deployers.',
      'Requires impact assessments and disclosure obligations for high-risk AI deployments.',
      'Colorado Bar Association has issued preliminary guidance on compliance obligations.'
    ],
    lastUpdated: 'March 2026'
  },
  'new-york': {
    summary: 'New York has enacted targeted AI legislation focusing on employment and bias prevention, with broader AI accountability bills advancing.',
    lawyerGuidance: [
      'Local Law 144 (NYC AI Bias Law): Requires bias audits for automated employment decision tools. Directly affects law firms using AI in hiring.',
      'NY State legislature advancing broader AI accountability bills in 2026.',
      'NYSBA issued formal opinion on attorney obligations when using AI research tools.'
    ],
    lastUpdated: 'March 2026'
  },
  'texas': {
    summary: 'Texas enacted one of the most comprehensive state AI regulatory frameworks in 2025.',
    lawyerGuidance: [
      'HB 149 (2025): Comprehensive regulation of AI systems with civil penalties. Covers health use, government use, and private sector deployments.',
      'SB 1964: AI regulation and data management requirements for governmental entities — impact assessments and notification obligations.',
      'HB 2818: Creates AI Division within the Department of Information Resources.',
      'HB 3512: Mandatory AI training programs for state agency employees and officials.',
      'SB 815: Insurance companies cannot deny health claims based solely on AI review — physician must exercise independent judgment.',
      'SB 2373: Criminal and civil liability for financial exploitation using AI-generated media or phishing.'
    ],
    lastUpdated: 'March 2026'
  },
  'florida': {
    summary: 'Florida is monitoring AI developments while considering targeted legislation for specific AI applications in professional services.',
    lawyerGuidance: [
      'No specific AI legislation enacted yet, but Florida Bar issued advisory opinions on AI competence.',
      'Monitor House AI Task Force recommendations expected 2026.',
      'Federal AI regulations continue to apply to Florida practitioners.'
    ],
    lastUpdated: 'March 2026'
  },
  'illinois': {
    summary: 'Illinois enacted AI restrictions in mental health, education, and employment sectors.',
    lawyerGuidance: [
      'HB 1806 (Wellness and Oversight for Psychological Resources Act): Licensed mental health professionals cannot allow AI to detect emotions or mental states of patients. All therapy communications remain confidential.',
      'HB 1859: AI cannot serve as the sole source of instruction in community college courses — faculty member required.',
      'HB 3178 (Digital Voice and Likeness Protection Act): Contracts for digital replicas of performers must meet specific conditions or are unenforceable.',
      'IL SB 2394: Technical reconciliation of AI employment law provisions.'
    ],
    lastUpdated: 'March 2026'
  },
  'massachusetts': {
    summary: 'Massachusetts is actively developing comprehensive AI legislation with strong consumer protection focus expected in 2026.',
    lawyerGuidance: [
      'Massachusetts AI Task Force developing comprehensive AI governance framework.',
      'Monitor bills expected in 2026 legislative session.',
      'Massachusetts Bar Association provides AI ethics guidance.'
    ],
    activeBills: [
      { name: 'H.1234', description: 'Massachusetts AI Act', status: 'Draft stage 2026' }
    ],
    lastUpdated: 'March 2026'
  },
  'washington': {
    summary: 'Washington State has enacted targeted AI legislation focusing on consumer protection and is developing broader AI governance framework.',
    lawyerGuidance: [
      'Washington AI Consumer Protection Act (2024): Regulates AI systems used in consumer-facing applications.',
      'Washington State Bar AI Task Force developing comprehensive guidance.',
      'Law firms using AI for client services may fall under consumer protection requirements.'
    ],
    lastUpdated: 'March 2026'
  },
  'oregon': {
    summary: 'Oregon is monitoring AI developments and considering legislation focused on AI transparency and accountability.',
    lawyerGuidance: [
      'Oregon Department of Justice studying AI regulatory approaches.',
      'Monitor 2026 legislative session for AI bills.',
      'Oregon State Bar provides AI ethics resources.'
    ],
    lastUpdated: 'March 2026'
  },
  'arizona': {
    summary: 'Arizona is developing AI legislation with focus on business-friendly innovation while protecting consumers.',
    lawyerGuidance: [
      'Arizona AI Task Force developing balanced regulatory framework.',
      'Monitor bills expected 2026 legislative session.',
      'State Bar of Arizona provides AI guidance for attorneys.'
    ],
    lastUpdated: 'March 2026'
  },
  'georgia': {
    summary: 'Georgia is monitoring AI developments and considering legislation for specific AI applications in professional services.',
    lawyerGuidance: [
      'Georgia Technology Authority studying AI impact assessment.',
      'Monitor 2026 legislative session for AI-related bills.',
      'State Bar of Georgia provides AI ethics guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'north-carolina': {
    summary: 'North Carolina is actively developing AI legislation with focus on government AI use and consumer protection.',
    lawyerGuidance: [
      'North Carolina AI Council developing comprehensive framework.',
      'Monitor bills expected in 2026 legislative session.',
      'North Carolina State Bar provides AI guidance for legal professionals.'
    ],
    lastUpdated: 'March 2026'
  },
  'michigan': {
    summary: 'Michigan is developing AI legislation focusing on AI in employment and consumer protection applications.',
    lawyerGuidance: [
      'Michigan Department of Labor and Economic Opportunity studying AI employment impacts.',
      'Monitor 2026 legislative session for AI bills.',
      'State Bar of Michigan provides AI ethics resources.'
    ],
    lastUpdated: 'March 2026'
  },
  'virginia': {
    summary: 'Virginia enacted targeted AI legislation focused on criminal justice oversight and synthetic media.',
    lawyerGuidance: [
      'HB 1642 (2025): AI-based tools used in criminal justice — pretrial release, sentencing, probation — require review and approval by a qualified human decision maker before use. Critical for criminal defense attorneys.',
      'SB 1053 / HB 2124: Synthetic digital content used to commit any criminal offense creates Class 1 misdemeanor and civil liability.',
      'HB 2692: Law enforcement officers prohibited from using AI-generated fake documents during custodial interrogations of children.'
    ],
    lastUpdated: 'March 2026'
  },
  'pennsylvania': {
    summary: 'Pennsylvania is actively developing comprehensive AI legislation with focus on consumer protection and AI governance.',
    lawyerGuidance: [
      'Pennsylvania AI Commission developing comprehensive framework.',
      'Monitor bills expected in 2026 legislative session.',
      'Pennsylvania Bar Association provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'ohio': {
    summary: 'Ohio is monitoring AI developments and considering legislation for AI applications in professional services.',
    lawyerGuidance: [
      'Ohio Department of Commerce studying AI regulatory approaches.',
      'Monitor 2026 legislative session for AI bills.',
      'Ohio State Bar provides AI ethics guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'new-jersey': {
    summary: 'New Jersey is developing AI legislation with focus on consumer protection and AI transparency.',
    lawyerGuidance: [
      'New Jersey AI Task Force developing comprehensive framework.',
      'Monitor bills expected in 2026 legislative session.',
      'New Jersey State Bar provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'indiana': {
    summary: 'Indiana is monitoring AI developments and considering business-friendly AI legislation.',
    lawyerGuidance: [
      'Indiana Economic Development Corporation studying AI impact.',
      'Monitor 2026 legislative session for AI bills.',
      'Indiana State Bar provides AI ethics guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'missouri': {
    summary: 'Missouri is monitoring AI developments and considering legislation for specific AI applications.',
    lawyerGuidance: [
      'Missouri Department of Economic Development studying AI.',
      'Monitor 2026 legislative session for AI-related bills.',
      'Missouri Bar provides AI guidance for attorneys.'
    ],
    lastUpdated: 'March 2026'
  },
  'maryland': {
    summary: 'Maryland enacted AI oversight requirements for state IT procurement and health insurance.',
    lawyerGuidance: [
      'SB 705 / HB 738 (2025): State government units face restrictions on AI procurement; Secretary of Information Technology oversees major AI development projects.',
      'HB 820: Health insurers using AI for utilization review must ensure AI tools are used appropriately — cannot deny claims solely based on algorithmic output.',
      'HB 956: Workgroup on AI Implementation monitors consumer protection implications.'
    ],
    lastUpdated: 'March 2026'
  },
  'wisconsin': {
    summary: 'Wisconsin is monitoring AI developments and considering legislation for AI applications.',
    lawyerGuidance: [
      'Wisconsin Department of Administration studying AI impact.',
      'Monitor 2026 legislative session for AI bills.',
      'Wisconsin State Bar provides AI ethics guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'tennessee': {
    summary: 'Tennessee is developing AI legislation with focus on business innovation and consumer protection.',
    lawyerGuidance: [
      'Tennessee Department of Economic Development studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'Tennessee Bar Association provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'minnesota': {
    summary: 'Minnesota is developing AI legislation with focus on consumer protection and AI governance.',
    lawyerGuidance: [
      'Minnesota Department of Commerce studying AI regulatory approaches.',
      'Monitor 2026 legislative session for AI bills.',
      'Minnesota State Bar provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'south-carolina': {
    summary: 'South Carolina is monitoring AI developments and considering legislation for AI applications.',
    lawyerGuidance: [
      'South Carolina Department of Commerce studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'South Carolina Bar provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'alabama': {
    summary: 'Alabama is monitoring AI developments and considering business-friendly AI legislation.',
    lawyerGuidance: [
      'Alabama Department of Commerce studying AI impact.',
      'Monitor 2026 legislative session for AI bills.',
      'Alabama State Bar provides AI ethics guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'louisiana': {
    summary: 'Louisiana is monitoring AI developments and considering legislation for specific AI applications.',
    lawyerGuidance: [
      'Louisiana Department of Economic Development studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'Louisiana State Bar provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'kentucky': {
    summary: 'Kentucky enacted broad AI transparency requirements for government use.',
    lawyerGuidance: [
      'SB 4 (2025): Any state department or agency must publicly disclose when AI is used to make decisions affecting individual citizens or businesses. Includes clear disclaimer requirements.',
      'Covers automated employment decisions, benefit determinations, and regulatory actions.',
      'Creates oversight framework relevant to any practice area involving state agency interactions.'
    ],
    lastUpdated: 'March 2026'
  },
  'oklahoma': {
    summary: 'Oklahoma is monitoring AI developments and considering business-friendly AI legislation.',
    lawyerGuidance: [
      'Oklahoma Department of Commerce studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'Oklahoma Bar Association provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'connecticut': {
    summary: 'Connecticut is developing AI legislation with focus on consumer protection and AI transparency.',
    lawyerGuidance: [
      'Connecticut Department of Consumer Protection studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'Connecticut Bar Association provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'utah': {
    summary: 'Utah has enacted comprehensive AI consumer protection and sector-specific AI regulations.',
    lawyerGuidance: [
      'SB 226 (AI Consumer Protection Amendments, 2025): Requires disclosures when generative AI is used in consumer transactions and regulated services. Creates liability for violations.',
      'HB 452: Mental health chatbot protections — prohibits certain uses of personal data, requires disclosures to users.',
      'SB 271: Unauthorized AI impersonation — criminal and civil liability for unauthorized commercial use of AI-recreated identities.',
      'SB 180: Law enforcement agencies must have written AI policies; AI-generated reports require human certification.'
    ],
    lastUpdated: 'March 2026'
  },
  'iowa': {
    summary: 'Iowa is monitoring AI developments and considering legislation for AI applications.',
    lawyerGuidance: [
      'Iowa Economic Development Authority studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'Iowa State Bar provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'nevada': {
    summary: 'Nevada enacted AI restrictions in emergency management and public school counseling.',
    lawyerGuidance: [
      'AB 325 (2025): AI is explicitly prohibited from making final decisions in emergency response planning and resource allocation — human decision makers required.',
      'AB 406: Public schools cannot use AI to perform functions of school counselors, psychologists, or social workers relating to student mental health.',
      'NV SB 263 and AB 35: Expanded criminal prohibitions covering AI-generated child sexual abuse material.'
    ],
    lastUpdated: 'March 2026'
  },
  'arkansas': {
    summary: 'Arkansas is monitoring AI developments and considering legislation for AI applications.',
    lawyerGuidance: [
      'Arkansas Economic Development Commission studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'Arkansas Bar Association provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'mississippi': {
    summary: 'Mississippi is monitoring AI developments and considering legislation for AI applications.',
    lawyerGuidance: [
      'Mississippi Development Authority studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'Mississippi Bar provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'kansas': {
    summary: 'Kansas is monitoring AI developments and considering business-friendly AI legislation.',
    lawyerGuidance: [
      'Kansas Department of Commerce studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'Kansas Bar Association provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'new-mexico': {
    summary: 'New Mexico is monitoring AI developments and considering legislation for AI applications.',
    lawyerGuidance: [
      'New Mexico Economic Development Department studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'State Bar of New Mexico provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'nebraska': {
    summary: 'Nebraska is monitoring AI developments and considering legislation for AI applications.',
    lawyerGuidance: [
      'Nebraska Department of Economic Development studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'Nebraska State Bar Association provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'west-virginia': {
    summary: 'West Virginia is monitoring AI developments and considering legislation for AI applications.',
    lawyerGuidance: [
      'West Virginia Development Office studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'West Virginia State Bar provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'idaho': {
    summary: 'Idaho is monitoring AI developments and considering business-friendly AI legislation.',
    lawyerGuidance: [
      'Idaho Department of Commerce studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'Idaho State Bar provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'hawaii': {
    summary: 'Hawaii is developing AI legislation with focus on consumer protection and AI governance.',
    lawyerGuidance: [
      'Hawaii Department of Business and Economic Development studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'Hawaii State Bar provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'new-hampshire': {
    summary: 'New Hampshire is monitoring AI developments and considering legislation for AI applications.',
    lawyerGuidance: [
      'New Hampshire Department of Business and Economic Affairs studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'New Hampshire Bar Association provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'maine': {
    summary: 'Maine is monitoring AI developments and considering legislation for AI applications.',
    lawyerGuidance: [
      'Maine Department of Economic and Community Development studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'Maine State Bar Association provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'rhode-island': {
    summary: 'Rhode Island is monitoring AI developments and considering legislation for AI applications.',
    lawyerGuidance: [
      'Rhode Island Department of Business Regulation studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'Rhode Island Bar Association provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'montana': {
    summary: 'Montana enacted 8 AI laws in 2025, one of the most active states outside California.',
    lawyerGuidance: [
      'HB 178 (2025): Limits government use of AI systems, prohibits certain uses, requires human review of AI recommendations.',
      'SB 212 (Right to Compute Act): Critical infrastructure AI deployers must develop NIST-aligned risk management policies.',
      'HB 513: Property rights in name, voice and visual likeness — civil liability for unauthorized AI commercial use.',
      'SB 25: Deepfakes in election communications are regulated with civil and criminal penalties.'
    ],
    lastUpdated: 'March 2026'
  },
  'delaware': {
    summary: 'Delaware is monitoring AI developments and considering legislation for AI applications.',
    lawyerGuidance: [
      'Delaware Department of State studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'Delaware State Bar Association provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'south-dakota': {
    summary: 'South Dakota is monitoring AI developments and considering legislation for AI applications.',
    lawyerGuidance: [
      'South Dakota Department of Labor and Regulation studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'State Bar of South Dakota provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'north-dakota': {
    summary: 'North Dakota is monitoring AI developments and considering legislation for AI applications.',
    lawyerGuidance: [
      'North Dakota Department of Commerce studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'State Bar of North Dakota provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'alaska': {
    summary: 'Alaska is monitoring AI developments and considering legislation for AI applications.',
    lawyerGuidance: [
      'Alaska Department of Commerce studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'Alaska Bar Association provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'wyoming': {
    summary: 'Wyoming is monitoring AI developments and considering business-friendly AI legislation.',
    lawyerGuidance: [
      'Wyoming Department of Workforce Services studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'Wyoming State Bar provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  },
  'vermont': {
    summary: 'Vermont is monitoring AI developments and considering legislation for AI applications.',
    lawyerGuidance: [
      'Vermont Department of Economic Development studying AI.',
      'Monitor 2026 legislative session for AI bills.',
      'Vermont Bar Association provides AI guidance.'
    ],
    lastUpdated: 'March 2026'
  }
};

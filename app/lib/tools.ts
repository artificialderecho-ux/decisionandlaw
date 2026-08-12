export type ToolCategory = 'Research' | 'Contracts' | 'E-Discovery' | 'Legal Ops';

export interface LegalTool {
  slug: string;
  name: string;
  url: string;
  description: string;
  bestFor: string;
  category: ToolCategory;
}

export const LEGAL_TOOLS: LegalTool[] = [
  {
    slug: 'casetext-cocounsel',
    name: 'Casetext (CoCounsel)',
    url: 'https://casetext.com',
    description: 'AI legal assistant for research, document review, and deposition preparation. Trusted by thousands of law firms.',
    bestFor: 'Litigation attorneys needing rapid case law analysis and draft generation.',
    category: 'Research',
  },
  {
    slug: 'harvey',
    name: 'Harvey',
    url: 'https://harvey.ai',
    description: 'Custom AI trained on practice areas including tax, corporate, and international law. Backed by OpenAI.',
    bestFor: 'Large law firms and in-house legal teams requiring domain-specialized AI.',
    category: 'Research',
  },
  {
    slug: 'vlex',
    name: 'vLex',
    url: 'https://vlex.com',
    description: 'Global legal intelligence platform with AI-powered search and analytics across jurisdictions.',
    bestFor: 'Cross-border legal research and comparative law analysis.',
    category: 'Research',
  },
  {
    slug: 'jus-ai',
    name: 'Jus Mundi (Jus AI)',
    url: 'https://jusmundi.com',
    description: 'AI agent specialized in international arbitration and cross-border dispute resolution.',
    bestFor: 'International arbitration practitioners and sovereign counsel.',
    category: 'Research',
  },
  {
    slug: 'ironclad',
    name: 'Ironclad',
    url: 'https://ironclad.ai',
    description: 'Contract lifecycle management with AI for drafting, negotiation, and compliance workflows.',
    bestFor: 'Legal ops teams managing high-volume contract portfolios.',
    category: 'Contracts',
  },
  {
    slug: 'legalfly',
    name: 'LEGALFLY',
    url: 'https://legalfly.io',
    description: 'Privacy-first AI workspace with native Microsoft 365 integration and data anonymization.',
    bestFor: 'Organizations with strict data privacy requirements.',
    category: 'Contracts',
  },
  {
    slug: 'evisort',
    name: 'Evisort (by Workday)',
    url: 'https://evisort.com',
    description: 'AI contract analytics and extraction platform for enterprise-scale contract portfolios.',
    bestFor: 'Corporate legal departments needing contract data intelligence.',
    category: 'Contracts',
  },
  {
    slug: 'spellbook',
    name: 'Spellbook',
    url: 'https://spellbook.legal',
    description: 'AI drafting assistant integrated with Microsoft Word, trained on contract language.',
    bestFor: 'Transactional lawyers and solo practitioners seeking drafting efficiency.',
    category: 'Contracts',
  },
  {
    slug: 'relativity',
    name: 'Relativity',
    url: 'https://relativity.com',
    description: 'Industry-standard platform for e-discovery with generative AI capabilities.',
    bestFor: 'Litigation support teams handling complex discovery at scale.',
    category: 'E-Discovery',
  },
  {
    slug: 'everlaw',
    name: 'Everlaw',
    url: 'https://everlaw.com',
    description: 'AI-powered e-discovery with data visualization and narrative-building tools.',
    bestFor: 'Trial teams constructing evidence-based case narratives.',
    category: 'E-Discovery',
  },
  {
    slug: 'brightflag',
    name: 'Brightflag',
    url: 'https://brightflag.com',
    description: 'AI-driven legal spend management and e-billing platform with analytics.',
    bestFor: 'Corporate legal departments optimizing outside counsel spend.',
    category: 'Legal Ops',
  },
  {
    slug: 'thomson-reuters-legal-tracker',
    name: 'Thomson Reuters Legal Tracker',
    url: 'https://legaltracker.thomsonreuters.com',
    description: 'Matter management, e-billing, and analytics platform for in-house teams.',
    bestFor: 'Enterprise legal operations seeking integrated matter and spend visibility.',
    category: 'Legal Ops',
  },
];

export const TOOL_CATEGORIES: ToolCategory[] = ['Research', 'Contracts', 'E-Discovery', 'Legal Ops'];

export const TOOLS_BY_CATEGORY = TOOL_CATEGORIES.reduce<Record<ToolCategory, LegalTool[]>>(
  (acc, category) => {
    acc[category] = LEGAL_TOOLS.filter((tool) => tool.category === category);
    return acc;
  },
  {
    Research: [],
    Contracts: [],
    'E-Discovery': [],
    'Legal Ops': [],
  },
);

export const TOOL_SLUGS = LEGAL_TOOLS.map((tool) => tool.slug);

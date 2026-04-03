import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Federal AI Policy Tracker | Decision&Law',
  description:
    'Key U.S. federal AI policy sources for legal teams, including White House, NIST, FTC, DOJ, EEOC, SEC, and Congress.',
  alternates: {
    canonical: 'https://decisionandlaw.com/tracker/federal-ai-policy',
  },
};

const FEDERAL_SOURCES = [
  {
    name: 'White House AI Hub',
    href: 'https://www.whitehouse.gov/ai/',
    note: 'Executive policy announcements and federal AI strategy updates.',
  },
  {
    name: 'NIST AI Risk Management Framework',
    href: 'https://www.nist.gov/itl/ai-risk-management-framework',
    note: 'Technical and governance baseline used across industries, including legal compliance programs.',
  },
  {
    name: 'FTC Business Guidance',
    href: 'https://www.ftc.gov/business-guidance',
    note: 'Consumer protection and unfair/deceptive practices guidance relevant to AI claims and product marketing.',
  },
  {
    name: 'DOJ Civil Rights Division',
    href: 'https://www.justice.gov/crt',
    note: 'Civil rights enforcement context for automated decision systems and bias-related risk.',
  },
  {
    name: 'EEOC AI and Employment Resources',
    href: 'https://www.eeoc.gov/ai-and-algorithmic-fairness-initiative',
    note: 'Employment discrimination and algorithmic fairness guidance relevant to HR/legal workflows.',
  },
  {
    name: 'SEC Proposed Rules & Guidance',
    href: 'https://www.sec.gov/rules/proposed.shtml',
    note: 'Proposed and final rules affecting AI disclosures, governance, and investor communications.',
  },
  {
    name: 'Congress.gov (AI Bills)',
    href: 'https://www.congress.gov/search?q=%7B%22source%22%3A%22legislation%22%2C%22search%22%3A%22artificial+intelligence%22%7D',
    note: 'Federal legislative pipeline for AI-related statutory developments.',
  },
];

export default function FederalAIPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-4 pb-16 pt-32 text-[#1a1a1a]">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#0066cc]">Tracker</p>
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Federal AI Policy Tracker</h1>
        <p className="mb-8 text-sm leading-relaxed text-[#6e6e73]">
          Curated starting points for monitoring U.S. federal AI policy. These sources are selected for legal teams needing authoritative updates.
        </p>

        <div className="space-y-4">
          {FEDERAL_SOURCES.map((source) => (
            <a
              key={source.name}
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-[#e5e5e5] p-5 transition hover:border-[#0066cc]"
            >
              <h2 className="mb-1 text-lg font-semibold">{source.name}</h2>
              <p className="text-sm text-[#6e6e73]">{source.note}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

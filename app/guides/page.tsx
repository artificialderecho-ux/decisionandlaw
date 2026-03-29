import GuidesPageClient from './GuidesPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Legal Practice Guides | Decision&Law',
  description: 'Practical guides on AI adoption in law firms, contract review, e-discovery, legal research, and AI governance. Actionable frameworks for legal professionals.',
  alternates: {
    canonical: 'https://decisionandlaw.com/guides',
  },
  openGraph: {
    title: 'AI Legal Practice Guides | Decision&Law',
    description: 'Practical guides on AI adoption in law firms, contract review, e-discovery, legal research, and AI governance.',
    url: 'https://decisionandlaw.com/guides',
    siteName: 'Decision&Law',
    type: 'website',
  },
};

export default function GuidesPage() {
  return <GuidesPageClient />;
}

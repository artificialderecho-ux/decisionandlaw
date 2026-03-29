import ToolsPageClient from './ToolsPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Legal Tools Directory | Decision&Law',
  description: 'Curated directory of AI tools for legal research, contract management, e-discovery, and legal operations. Updated March 2026.',
  alternates: {
    canonical: 'https://decisionandlaw.com/tools',
  },
  openGraph: {
    title: 'AI Legal Tools Directory | Decision&Law',
    description: 'Curated directory of AI tools for legal research, contract management, e-discovery, and legal operations.',
    url: 'https://decisionandlaw.com/tools',
    siteName: 'Decision&Law',
    type: 'website',
  },
};

export default function ToolsPage() {
  return <ToolsPageClient />;
}

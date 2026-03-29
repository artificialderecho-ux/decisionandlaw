import { Metadata } from 'next';
import TrackerPageClient from './TrackerPageClient';

export const metadata: Metadata = {
  title: 'AI Regulation Tracker | Decision&Law',
  description: 'Comprehensive tracker of AI regulations, legislation, and legal developments affecting lawyers and legal professionals across all 50 states and federal agencies.',
  alternates: {
    canonical: 'https://decisionandlaw.com/tracker',
  },
  openGraph: {
    title: 'AI Regulation Tracker | Decision&Law',
    description: 'Comprehensive tracker of AI regulations, legislation, and legal developments across all 50 states and federal agencies.',
    url: 'https://decisionandlaw.com/tracker',
    siteName: 'Decision&Law',
    type: 'website',
  },
};

export default function TrackerPage() {
  return <TrackerPageClient />;
}

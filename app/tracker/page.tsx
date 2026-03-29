import { Metadata } from 'next';
import TrackerPageClient from './TrackerPageClient';

export const metadata: Metadata = {
  title: 'AI Regulation Tracker 2025 | Decision&Law',
  description: 'Comprehensive tracker of AI regulations, legislation, and legal developments affecting lawyers and legal professionals across all 50 states and federal agencies.',
};

export default function TrackerPage() {
  return <TrackerPageClient />;
}

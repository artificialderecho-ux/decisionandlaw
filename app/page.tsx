import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: "Decision&Law – AI Legal Intelligence for US Professionals",
  description: "Legislation tracking, AI malpractice cases, tool reviews, and practice guides for legal experts navigating artificial intelligence.",
  alternates: {
    canonical: "https://decisionandlaw.com",
  },
  openGraph: {
    title: "Decision&Law – AI Legal Intelligence for US Professionals",
    description: "Legislation tracking, AI malpractice cases, tool reviews, and practice guides for legal experts navigating artificial intelligence.",
    url: "https://decisionandlaw.com",
    siteName: "Decision&Law",
    type: "website",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}

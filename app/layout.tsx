import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CookieBanner from "./components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const BASE_URL = 'https://decisionandlaw.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Decision&Law — AI Legal Intelligence for US Professionals",
    template: "%s | Decision&Law",
  },
  description: "Legislation tracking, AI malpractice cases, tool reviews, and practice guides for legal experts navigating artificial intelligence.",
  keywords: ["AI law", "artificial intelligence legal", "legal AI", "AI regulation", "AI legislation", "legal technology", "AI malpractice", "law firm AI", "AI tools legal"],
  authors: [{ name: "Decision&Law Editorial Team", url: BASE_URL }],
  creator: "Decision&Law",
  publisher: "Decision&Law",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Decision&Law",
    title: "Decision&Law — AI Legal Intelligence for US Professionals",
    description: "Legislation tracking, AI malpractice cases, tool reviews, and practice guides for legal experts navigating artificial intelligence.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@decisionandlaw",
    creator: "@decisionandlaw",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={BASE_URL} />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <a 
          href="#main-content" 
          className="skip-link focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

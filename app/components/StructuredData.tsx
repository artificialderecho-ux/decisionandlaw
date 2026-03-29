const BASE_URL = 'https://decisionandlaw.com';

export function WebsiteStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Decision&Law",
    "url": BASE_URL,
    "description": "Legislation tracking, AI malpractice cases, tool reviews, and practice guides for legal experts navigating artificial intelligence.",
    "publisher": {
      "@type": "Organization",
      "name": "Decision&Law",
      "url": BASE_URL,
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BASE_URL}/news?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function NewsArticleStructuredData({
  headline,
  datePublished,
  dateModified,
  author,
  slug,
  description,
}: {
  headline: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  slug: string;
  description: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": headline,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "url": `${BASE_URL}/news/${slug}`,
    "author": {
      "@type": "Person",
      "name": author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Decision&Law",
      "url": BASE_URL,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BASE_URL}/news/${slug}`,
    },
    "articleSection": "AI Legal News",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function HowToStructuredData({
  name,
  description,
  slug,
}: {
  name: string;
  description: string;
  slug: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "url": `${BASE_URL}/guides/${slug}`,
    "publisher": {
      "@type": "Organization",
      "name": "Decision&Law",
      "url": BASE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Decision&Law",
    "url": BASE_URL,
    "description": "AI legal intelligence for US professionals — legislation tracking, case law, tool reviews, and practice guides.",
    "sameAs": [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

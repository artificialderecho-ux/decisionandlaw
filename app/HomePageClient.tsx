'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { WebsiteStructuredData } from "./components/StructuredData"

const FEATURED_ARTICLES = [
  {
    slug: "california-sb-1047-ai-liability-lawyers",
    title: "California's SB-1047 and What It Means for Law Firm Liability",
    description: "The landmark AI safety bill creates new exposure for firms deploying AI in client-facing workflows. Here's what you need to know.",
    category: "Legislation",
    state: "California",
    date: "Mar 1, 2025",
    readingTime: 8,
  },
  {
    slug: "harvey-ai-review-2025",
    title: "Harvey AI Review 2025: Is It Worth the Enterprise Price?",
    description: "We put Harvey through its paces across research, drafting, and deposition prep. The results are nuanced.",
    category: "Tool Review",
    date: "Feb 28, 2025",
    readingTime: 12,
  },
  {
    slug: "aba-formal-opinion-512-ai",
    title: "ABA Formal Opinion 512: Competence in the Age of AI",
    description: "The ABA has spoken. Every attorney using AI tools must now meet a new standard of technological competence.",
    category: "ABA Ethics",
    date: "Feb 25, 2025",
    readingTime: 6,
  },
]

const TRACKER_HIGHLIGHTS = [
  { state: "California", status: "enacted", slug: "california" },
  { state: "New York", status: "enacted", slug: "new-york" },
  { state: "Texas", status: "active-legislation", slug: "texas" },
  { state: "Florida", status: "active-legislation", slug: "florida" },
  { state: "Colorado", status: "enacted", slug: "colorado" },
  { state: "Illinois", status: "active-legislation", slug: "illinois" },
]

const STATUS_COLORS: Record<string, { bg: string; text: string; label: string }> = {
  enacted: { bg: "rgba(34,197,94,0.1)", text: "#16a34a", label: "Enacted" },
  "active-legislation": { bg: "rgba(0,102,204,0.08)", text: "#0066cc", label: "Active" },
  monitoring: { bg: "rgba(0,0,0,0.04)", text: "#6e6e73", label: "Monitoring" },
  "no-activity": { bg: "rgba(0,0,0,0.04)", text: "#8e8e93", label: "No Activity" },
}

export default function HomePageClient() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <WebsiteStructuredData />
      <main style={{ backgroundColor: "#ffffff", minHeight: "100vh", color: "#1a1a1a" }}>
        {/* Hero */}
        <section style={{
          position: "relative",
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,102,204,0.06) 0%, transparent 60%)",
          }} />

          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px)", position: "relative", width: "100%" }}>
            <div style={{ maxWidth: "800px" }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "32px",
                padding: "6px 14px",
                border: "1px solid rgba(0,0,0,0.08)",
                backgroundColor: "rgba(0,0,0,0.02)",
                borderRadius: "9999px",
              }}>
                <div style={{ width: "6px", height: "6px", backgroundColor: "#0066cc", borderRadius: "50%" }} />
                <span style={{ fontSize: "11px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#6e6e73" }}>
                  AI & Law — Legal Intelligence
                </span>
              </div>

              <h1 style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                fontSize: "clamp(48px, 7vw, 80px)",
                fontWeight: "700",
                lineHeight: "1.03",
                letterSpacing: "-0.035em",
                color: "#1a1a1a",
                marginBottom: "28px",
              }}>
                Where Law Meets<br />
                <span style={{ color: "#0066cc" }}>Artificial Intelligence</span>
              </h1>

              <p style={{
                fontSize: "clamp(17px, 2vw, 20px)",
                lineHeight: "1.7",
                color: "#6e6e73",
                marginBottom: "48px",
                maxWidth: "540px",
              }}>
                Legislation tracking, tool reviews, and case law analysis for US legal professionals navigating the AI transformation.
              </p>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
                <Link
                  href="/news"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 28px",
                    backgroundColor: "#1a1a1a",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: "600",
                    letterSpacing: "0.04em",
                    borderRadius: "8px",
                    transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                >
                  View Latest News
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section style={{ backgroundColor: "#fafafa", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(64px, 10vw, 120px) clamp(16px, 4vw, 48px)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap" as const, gap: "16px" }}>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#0066cc", marginBottom: "8px" }}>
                  Latest Coverage
                </div>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "700", color: "#1a1a1a", margin: 0, letterSpacing: "-0.025em", lineHeight: 1.15 }}>
                  News
                </h2>
              </div>
              <Link href="/news" style={{ color: "#0066cc", textDecoration: "none", fontSize: "13px", fontWeight: "500", display: "flex", alignItems: "center", gap: "4px" }}>
                View all
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Latest News Entry - Horizontal */}
            <Link
              href={`/news/${FEATURED_ARTICLES[0].slug}`}
              style={{
                backgroundColor: "#ffffff",
                padding: "32px",
                borderRadius: "12px",
                border: "1px solid rgba(0,0,0,0.08)",
                textDecoration: "none",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "24px",
                marginBottom: "16px",
                transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#0066cc";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,102,204,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ flex: "1", minWidth: 0 }}>
                <div style={{
                  fontSize: "10px",
                  fontWeight: "600",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: "#0066cc",
                  marginBottom: "12px",
                }}>
                  {FEATURED_ARTICLES[0].category}{FEATURED_ARTICLES[0].state ? ` — ${FEATURED_ARTICLES[0].state}` : ""}
                </div>
                <h3 style={{
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: "700",
                  color: "#1a1a1a",
                  lineHeight: "1.2",
                  marginBottom: "16px",
                  letterSpacing: "-0.02em",
                }}>
                  {FEATURED_ARTICLES[0].title}
                </h3>
                <p style={{
                  color: "#6e6e73",
                  fontSize: "14px",
                  lineHeight: "1.65",
                  marginBottom: "16px",
                }}>
                  {FEATURED_ARTICLES[0].description}
                </p>
                <div style={{ fontSize: "11px", color: "#8e8e93", letterSpacing: "0.04em" }}>
                  {FEATURED_ARTICLES[0].date} · {FEATURED_ARTICLES[0].readingTime} min read
                </div>
              </div>
            </Link>

            {/* Next Three News Entries */}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "16px" }}>
              {FEATURED_ARTICLES.slice(1, 4).map((article) => (
                <Link
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "28px 24px",
                    borderRadius: "12px",
                    border: "1px solid rgba(0,0,0,0.08)",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#0066cc";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,102,204,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{
                    fontSize: "10px",
                    fontWeight: "600",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                    color: "#0066cc",
                    marginBottom: "12px",
                  }}>
                    {article.category}{article.state ? ` — ${article.state}` : ""}
                  </div>
                  <h3 style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    lineHeight: "1.3",
                    marginBottom: "12px",
                    letterSpacing: "-0.015em",
                  }}>
                    {article.title}
                  </h3>
                  <p style={{
                    color: "#6e6e73",
                    fontSize: "13px",
                    lineHeight: "1.65",
                    marginBottom: "16px",
                    flex: 1,
                  }}>
                    {article.description}
                  </p>
                  <div style={{ fontSize: "11px", color: "#8e8e93", letterSpacing: "0.04em" }}>
                    {article.date} · {article.readingTime} min read
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section style={{
          backgroundColor: "#ffffff",
          padding: "clamp(64px, 10vw, 120px) clamp(16px, 4vw, 48px)",
        }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap" as const, gap: "16px" }}>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#0066cc", marginBottom: "8px" }}>
                  AI Legal Tools Directory
                </div>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "700", color: "#1a1a1a", margin: 0, letterSpacing: "-0.025em", lineHeight: 1.15 }}>
                  Tools
                </h2>
                <p style={{ color: "#6e6e73", fontSize: "15px", marginTop: "8px" }}>
                  Curated AI tools for legal professionals
                </p>
              </div>
              <Link href="/tools" style={{ color: "#0066cc", textDecoration: "none", fontSize: "13px", fontWeight: "500", display: "flex", alignItems: "center", gap: "4px" }}>
                View all
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Latest Tool - Horizontal */}
            <a
              href="https://casetext.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#ffffff",
                padding: "32px",
                borderRadius: "12px",
                border: "1px solid rgba(0,0,0,0.08)",
                textDecoration: "none",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "24px",
                marginBottom: "16px",
                transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#0066cc";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,102,204,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ flex: "1", minWidth: 0 }}>
                <div style={{
                  fontSize: "10px",
                  fontWeight: "600",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: "#0066cc",
                  marginBottom: "12px",
                }}>
                  Research
                </div>
                <h3 style={{
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: "700",
                  color: "#1a1a1a",
                  lineHeight: "1.2",
                  marginBottom: "16px",
                  letterSpacing: "-0.02em",
                }}>
                  Casetext (CoCounsel)
                </h3>
                <p style={{
                  color: "#6e6e73",
                  fontSize: "14px",
                  lineHeight: "1.65",
                  marginBottom: "16px",
                }}>
                  AI legal assistant for research, document review, and deposition preparation. Trusted by thousands of law firms.
                </p>
                <div style={{
                  padding: "14px 16px",
                  backgroundColor: "#fafafa",
                  borderRadius: "8px",
                  borderLeft: "3px solid #0066cc",
                  marginBottom: "16px",
                }}>
                  <p style={{
                    fontSize: "10px",
                    fontWeight: "600",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#8e8e93",
                    marginBottom: "6px",
                  }}>
                    Best for
                  </p>
                  <p style={{
                    fontSize: "13px",
                    lineHeight: "1.5",
                    color: "#1a1a1a",
                  }}>
                    Litigation attorneys needing rapid case law analysis and draft generation.
                  </p>
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "500", color: "#0066cc" }}>
                  Visit site
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Next Three Tools */}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "16px" }}>
              {[
                {
                  name: "Harvey",
                  url: "https://harvey.ai",
                  description: "Custom AI trained on practice areas including tax, corporate, and international law. Backed by OpenAI.",
                  bestFor: "Large law firms and in-house legal teams requiring domain-specialized AI.",
                  category: "Research"
                },
                {
                  name: "Ironclad",
                  url: "https://ironclad.ai",
                  description: "Contract lifecycle management with AI for drafting, negotiation, and compliance workflows.",
                  bestFor: "Legal ops teams managing high-volume contract portfolios.",
                  category: "Contracts"
                },
                {
                  name: "Relativity",
                  url: "https://relativity.com",
                  description: "Industry-standard platform for e-discovery with generative AI capabilities.",
                  bestFor: "Litigation support teams handling complex discovery at scale.",
                  category: "E-Discovery"
                }
              ].map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "28px 24px",
                    borderRadius: "12px",
                    border: "1px solid rgba(0,0,0,0.08)",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#0066cc";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,102,204,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{
                    fontSize: "10px",
                    fontWeight: "600",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                    color: "#0066cc",
                    marginBottom: "12px",
                  }}>
                    {tool.category}
                  </div>
                  <h3 style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    lineHeight: "1.3",
                    marginBottom: "12px",
                    letterSpacing: "-0.015em",
                  }}>
                    {tool.name}
                  </h3>
                  <p style={{
                    color: "#6e6e73",
                    fontSize: "13px",
                    lineHeight: "1.65",
                    marginBottom: "16px",
                    flex: 1,
                  }}>
                    {tool.description}
                  </p>
                  <div style={{
                    padding: "14px 16px",
                    backgroundColor: "#fafafa",
                    borderRadius: "8px",
                    borderLeft: "3px solid #0066cc",
                    marginBottom: "16px",
                  }}>
                    <p style={{
                      fontSize: "10px",
                      fontWeight: "600",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#8e8e93",
                      marginBottom: "6px",
                    }}>
                      Best for
                    </p>
                    <p style={{
                      fontSize: "13px",
                      lineHeight: "1.5",
                      color: "#1a1a1a",
                    }}>
                      {tool.bestFor}
                    </p>
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "500", color: "#0066cc" }}>
                    Visit site
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Tracker Preview */}
        <section style={{
          backgroundColor: "#ffffff",
          padding: "clamp(64px, 10vw, 120px) clamp(16px, 4vw, 48px)",
        }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap" as const, gap: "16px" }}>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#0066cc", marginBottom: "8px" }}>
                  Live Tracker
                </div>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "700", color: "#1a1a1a", margin: 0, letterSpacing: "-0.025em", lineHeight: 1.15 }}>
                  AI Regulation Tracker
                </h2>
                <p style={{ color: "#6e6e73", fontSize: "15px", marginTop: "8px" }}>
                  Real-time status across all 50 US states
                </p>
              </div>
              <Link href="/tracker/state" style={{ color: "#0066cc", textDecoration: "none", fontSize: "13px", fontWeight: "500", display: "flex", alignItems: "center", gap: "4px" }}>
                Full Index
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Latest Tracker Item - Horizontal */}
            <Link
              href={`/tracker/state/${TRACKER_HIGHLIGHTS[0].slug}`}
              style={{
                backgroundColor: "#ffffff",
                padding: "32px",
                borderRadius: "12px",
                border: "1px solid rgba(0,0,0,0.08)",
                textDecoration: "none",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "24px",
                marginBottom: "16px",
                transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#0066cc";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,102,204,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ flex: "1", minWidth: 0 }}>
                <div style={{
                  fontSize: "10px",
                  fontWeight: "600",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: "#0066cc",
                  marginBottom: "12px",
                }}>
                  State Regulation
                </div>
                <h3 style={{
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: "700",
                  color: "#1a1a1a",
                  lineHeight: "1.2",
                  marginBottom: "16px",
                  letterSpacing: "-0.02em",
                }}>
                  {TRACKER_HIGHLIGHTS[0].state}
                </h3>
                <p style={{
                  color: "#6e6e73",
                  fontSize: "14px",
                  lineHeight: "1.65",
                  marginBottom: "16px",
                }}>
                  {(() => {
                    const status = STATUS_COLORS[TRACKER_HIGHLIGHTS[0].status];
                    return `${status.label} AI legislation and regulatory framework`;
                  })()}
                </p>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: STATUS_COLORS[TRACKER_HIGHLIGHTS[0].status].text,
                  backgroundColor: STATUS_COLORS[TRACKER_HIGHLIGHTS[0].status].bg,
                  padding: "6px 12px",
                  borderRadius: "9999px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase" as const,
                }}>
                  {STATUS_COLORS[TRACKER_HIGHLIGHTS[0].status].label}
                </div>
              </div>
            </Link>

            {/* Next Three Tracker Items */}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "16px" }}>
              {TRACKER_HIGHLIGHTS.slice(1, 4).map((item) => {
                const s = STATUS_COLORS[item.status]
                return (
                  <Link
                    key={item.slug}
                    href={`/tracker/state/${item.slug}`}
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "28px 24px",
                      borderRadius: "12px",
                      border: "1px solid rgba(0,0,0,0.08)",
                      textDecoration: "none",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#0066cc";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,102,204,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={{
                      fontSize: "10px",
                      fontWeight: "600",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase" as const,
                      color: "#0066cc",
                      marginBottom: "12px",
                    }}>
                      State Regulation
                    </div>
                    <h3 style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#1a1a1a",
                      lineHeight: "1.3",
                      marginBottom: "12px",
                      letterSpacing: "-0.015em",
                    }}>
                      {item.state}
                    </h3>
                    <p style={{
                      color: "#6e6e73",
                      fontSize: "13px",
                      lineHeight: "1.65",
                      marginBottom: "16px",
                      flex: 1,
                    }}>
                      {s.label} AI legislation and regulatory framework
                    </p>
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "11px",
                      fontWeight: "500",
                      color: s.text,
                      backgroundColor: s.bg,
                      padding: "4px 10px",
                      borderRadius: "9999px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase" as const,
                    }}>
                      {s.label}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <div style={{
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          backgroundColor: "#fafafa",
          padding: "32px clamp(16px, 4vw, 48px)",
          display: "flex",
          justifyContent: "center",
          gap: "clamp(32px, 8vw, 96px)",
          flexWrap: "wrap" as const,
        }}>
          {[
            { num: "50", label: "States Tracked" },
            { num: "12", label: "AI Laws Enacted" },
            { num: "23", label: "Bills in Progress" },
            { num: "47", label: "Tools Reviewed" },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "32px", fontWeight: "700", color: "#1a1a1a", letterSpacing: "-0.02em" }}>{num}</div>
              <div style={{ fontSize: "11px", fontWeight: "500", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#8e8e93", marginTop: "4px" }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Guides Section */}
        <section style={{ backgroundColor: "#fafafa", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(64px, 10vw, 120px) clamp(16px, 4vw, 48px)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap" as const, gap: "16px" }}>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#0066cc", marginBottom: "8px" }}>
                  AI Legal Practice Guides
                </div>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "700", color: "#1a1a1a", margin: 0, letterSpacing: "-0.025em", lineHeight: 1.15 }}>
                  Guides
                </h2>
                <p style={{ color: "#6e6e73", fontSize: "15px", marginTop: "8px" }}>
                  Practical frameworks for legal professionals implementing AI
                </p>
              </div>
              <Link href="/guides" style={{ color: "#0066cc", textDecoration: "none", fontSize: "13px", fontWeight: "500", display: "flex", alignItems: "center", gap: "4px" }}>
                View all
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Latest Guide - Horizontal */}
            <Link
              href="/guides/ai-adoption-law-firms"
              style={{
                backgroundColor: "#ffffff",
                padding: "32px",
                borderRadius: "12px",
                border: "1px solid rgba(0,0,0,0.08)",
                textDecoration: "none",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "24px",
                marginBottom: "16px",
                transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#0066cc";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,102,204,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ flex: "1", minWidth: 0 }}>
                <div style={{
                  fontSize: "10px",
                  fontWeight: "600",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: "#0066cc",
                  marginBottom: "12px",
                }}>
                  Practice Guide
                </div>
                <h3 style={{
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: "700",
                  color: "#1a1a1a",
                  lineHeight: "1.2",
                  marginBottom: "16px",
                  letterSpacing: "-0.02em",
                }}>
                  AI Adoption in Law Firms: A Practical Framework
                </h3>
                <p style={{
                  color: "#6e6e73",
                  fontSize: "14px",
                  lineHeight: "1.65",
                  marginBottom: "16px",
                }}>
                  A step-by-step framework for evaluating, selecting, and implementing AI tools in legal practice. Includes a 12-month adoption roadmap.
                </p>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#0066cc",
                  marginBottom: "16px",
                }}>
                  For: Law firm leaders, practice managers, innovation officers
                </div>
                <div style={{ fontSize: "11px", color: "#8e8e93", letterSpacing: "0.04em" }}>
                  20 min read
                </div>
              </div>
            </Link>

            {/* Next Three Guides */}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "16px" }}>
              {[
                {
                  title: "Contract Review with AI: From Pilot to Production",
                  description: "How to move from testing AI contract review tools to enterprise-scale deployment. Covers data preparation, playbook configuration, and ROI measurement.",
                  audience: "Corporate counsel, contract managers, legal ops",
                  readTime: "18 min",
                  slug: "contract-review-ai"
                },
                {
                  title: "AI Governance & Ethics for Legal Teams",
                  description: "Establishing responsible AI policies, evaluating bias in legal AI tools, and navigating emerging regulations like the EU AI Act.",
                  audience: "Compliance officers, GCs, risk managers",
                  readTime: "25 min",
                  slug: "ai-governance-ethics-legal-teams"
                },
                {
                  title: "E-Discovery in the Generative AI Era",
                  description: "How generative AI is transforming document review, managing AI-generated data, and preserving chain of custody in AI environments.",
                  audience: "Litigation support, e-discovery specialists, trial attorneys",
                  readTime: "22 min",
                  slug: "e-discovery-generative-ai-era"
                }
              ].map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "28px 24px",
                    borderRadius: "12px",
                    border: "1px solid rgba(0,0,0,0.08)",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#0066cc";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,102,204,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{
                    fontSize: "10px",
                    fontWeight: "600",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                    color: "#0066cc",
                    marginBottom: "12px",
                  }}>
                    Practice Guide
                  </div>
                  <h3 style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    lineHeight: "1.3",
                    marginBottom: "12px",
                    letterSpacing: "-0.015em",
                  }}>
                    {guide.title}
                  </h3>
                  <p style={{
                    color: "#6e6e73",
                    fontSize: "13px",
                    lineHeight: "1.65",
                    marginBottom: "16px",
                    flex: 1,
                  }}>
                    {guide.description}
                  </p>
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#0066cc",
                    marginBottom: "16px",
                  }}>
                    For: {guide.audience}
                  </div>
                  <div style={{ fontSize: "11px", color: "#8e8e93", letterSpacing: "0.04em" }}>
                    {guide.readTime} min read
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Authors Section */}
        <section style={{
          backgroundColor: "#ffffff",
          padding: "clamp(64px, 10vw, 120px) clamp(16px, 4vw, 48px)",
        }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap" as const, gap: "16px" }}>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#0066cc", marginBottom: "8px" }}>
                  Our Authors
                </div>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "700", color: "#1a1a1a", margin: 0, letterSpacing: "-0.025em", lineHeight: 1.15 }}>
                  Authors
                </h2>
                <p style={{ color: "#6e6e73", fontSize: "15px", marginTop: "8px" }}>
                  Voices shaping the conversation at the intersection of law, technology, and decision intelligence
                </p>
              </div>
              <Link href="/authors" style={{ color: "#0066cc", textDecoration: "none", fontSize: "13px", fontWeight: "500", display: "flex", alignItems: "center", gap: "4px" }}>
                View all
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Latest Author - Horizontal */}
            <div style={{
              backgroundColor: "#ffffff",
              padding: "32px",
              borderRadius: "12px",
              border: "1px solid rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "24px",
              marginBottom: "16px",
              transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}>
              <div style={{
                width: "80px",
                height: "80px",
                backgroundColor: "#fafafa",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0066cc",
                border: "1px solid rgba(0,0,0,0.06)",
                fontSize: "24px",
                fontWeight: "600",
                flexShrink: 0,
              }}>
                EM
              </div>
              <div style={{ flex: "1", minWidth: 0 }}>
                <div style={{
                  fontSize: "10px",
                  fontWeight: "600",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: "#0066cc",
                  marginBottom: "12px",
                }}>
                  Featured Author
                </div>
                <h3 style={{
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: "700",
                  color: "#1a1a1a",
                  lineHeight: "1.2",
                  marginBottom: "16px",
                  letterSpacing: "-0.02em",
                }}>
                  Elena Markov
                </h3>
                <p style={{
                  color: "#0066cc",
                  fontSize: "14px",
                  lineHeight: "1.65",
                  marginBottom: "16px",
                  fontWeight: "500",
                }}>
                  Specialist in algorithmic decision systems and computational ethics
                </p>
                <p style={{
                  color: "#6e6e73",
                  fontSize: "14px",
                  lineHeight: "1.65",
                  marginBottom: "16px",
                }}>
                  Independent researcher working at the intersection of formal logic and automated decision-making processes. She advises civil society organizations on AI accountability frameworks.
                </p>
              </div>
            </div>

            {/* Next Three Authors */}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "16px" }}>
              {[
                {
                  initials: "JO",
                  name: "James Okafor",
                  title: "Specialist in regulatory risk analysis and automated compliance",
                  description: "Former fintech regulatory consultant who now writes about how AI systems interpret complex regulatory frameworks. Based between London and Lagos."
                },
                {
                  initials: "SC",
                  name: "Sofia Chen",
                  title: "Obsessed with legal data visualization and computational argumentation",
                  description: "Interface designer for next-generation legal tech platforms. She believes information design can transform how judicial reasoning is understood."
                },
                {
                  initials: "RM",
                  name: "Rafael Morales",
                  title: "Specialist in legal system interoperability and open standards",
                  description: "Software engineer turned legal data standardization advocate. Contributes to working groups developing ontologies for legal knowledge representation."
                }
              ].map((author) => (
                <div
                  key={author.name}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "12px",
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                >
                  <div style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#fafafa",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0066cc",
                    border: "1px solid rgba(0,0,0,0.06)",
                    fontSize: "18px",
                    fontWeight: "600",
                    flexShrink: 0,
                  }}>
                    {author.initials}
                  </div>

                  <div>
                    <h3 style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#1a1a1a",
                      marginBottom: "6px",
                      lineHeight: 1.2,
                    }}>
                      {author.name}
                    </h3>
                    <p style={{
                      fontSize: "11px",
                      fontWeight: "500",
                      lineHeight: "1.5",
                      color: "#0066cc",
                      marginBottom: "10px",
                    }}>
                      {author.title}
                    </p>
                    <p style={{
                      fontSize: "13px",
                      lineHeight: "1.6",
                      color: "#6e6e73",
                    }}>
                      {author.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

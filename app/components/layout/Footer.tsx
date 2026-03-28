"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const FOOTER_LINKS = {
  News: [
    { label: "Legislation", href: "/news/legislation" },
    { label: "Case Law", href: "/news/case-law" },
    { label: "Ethics", href: "/news/ethics" },
    { label: "AI Regulation", href: "/news/legislation/ai-regulation" },
  ],
  Tools: [
    { label: "All Tools", href: "/tools" },
    { label: "Solo Practitioners", href: "/tools/for-solo-practitioners" },
    { label: "Small Firms", href: "/tools/for-small-firms" },
    { label: "Compare", href: "/tools/compare" },
  ],
  Tracker: [
    { label: "50-State Index", href: "/tracker/state" },
    { label: "Federal AI Policy", href: "/tracker/federal-ai-policy" },
    { label: "ABA Opinions", href: "/tracker/aba-opinions" },
    { label: "Malpractice Cases", href: "/tracker/malpractice-cases" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Authors", href: "/authors" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "Guides", href: "/guides" },
  ],
}

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <footer style={{
      backgroundColor: "#f4f4f5",
      borderTop: "1px solid #e5e5e5",
      paddingTop: isMobile ? "32px" : "64px",
      fontFamily: "var(--font-sans)",
      color: "#1a1a1a",
      marginTop: "auto",
    }} aria-label="Site footer">
      {/* Main footer content */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: isMobile ? "0 16px" : "0 32px",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr 1fr",
        gap: isMobile ? "24px" : "48px",
      }}>
        {/* Brand column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div style={{
              width: "28px",
              height: "28px",
              background: "#1a1a1a",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              flexShrink: 0,
            }} />
            <span style={{
              fontSize: "17px",
              fontWeight: "700",
              color: "#1a1a1a",
              letterSpacing: "0.02em",
            }}>
              Decision<span style={{ color: "#1a1a1a" }}>&</span>Law
            </span>
          </div>
          <p style={{
            color: "#737373",
            fontSize: "14px",
            lineHeight: "1.7",
            marginBottom: "24px",
            fontFamily: "var(--font-serif)",
          }}>
            Legal intelligence for AI era. Covering legislation, case law, and emerging tools for US legal professionals.
          </p>
          <Link
            href="/newsletter"
            style={{
              display: "inline-block",
              padding: "10px 24px",
              border: "1px solid #1a1a1a",
              color: "#1a1a1a",
              textDecoration: "none",
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              transition: "all 0.2s",
            }}
          >
            Get Newsletter →
          </Link>
          <p style={{ marginTop: "32px", fontSize: "11px", color: "#a1a1aa", letterSpacing: "0.05em" }}>
            &copy; {new Date().getFullYear()} decisionandlaw.com<br />
            Not legal advice.
          </p>
        </div>

        {/* Link columns */}
        {!isMobile && Object.entries(FOOTER_LINKS).map(([section, links]) => (
          <div key={section}>
            <h4 style={{
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#1a1a1a",
              marginBottom: "20px",
              fontFamily: "var(--font-sans)",
            }}>
              {section}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: "#737373",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontFamily: "var(--font-sans)",
                      transition: "color 0.2s",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Mobile links */}
        {isMobile && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {Object.entries(FOOTER_LINKS).map(([section, links]) => (
              <div key={section}>
                <h4 style={{
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#1a1a1a",
                  marginBottom: "12px",
                  fontFamily: "var(--font-sans)",
                }}>
                  {section}
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        style={{
                          color: "#737373",
                          textDecoration: "none",
                          fontSize: "13px",
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: "1200px",
        margin: isMobile ? "32px auto 0" : "48px auto 0",
        padding: isMobile ? "16px" : "20px 32px",
        borderTop: "1px solid #e5e5e5",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: isMobile ? "12px" : "0",
        fontSize: isMobile ? "10px" : "11px",
        color: "#737373",
        letterSpacing: "0.06em",
      }}>
        <span style={{ textAlign: isMobile ? "center" : "left" }}>
          DECISIONANDLAW.COM
        </span>
        <div style={{ display: "flex", gap: "16px" }}>
          <Link href="/privacy" style={{ color: "#737373", textDecoration: "none" }}>Privacy</Link>
          <Link href="/terms" style={{ color: "#737373", textDecoration: "none" }}>Terms</Link>
          <Link href="/advertise" style={{ color: "#737373", textDecoration: "none" }}>Advertise</Link>
        </div>
      </div>
    </footer>
  )
}

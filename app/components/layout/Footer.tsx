"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const FOOTER_LINKS = {
  Coverage: [
    { label: "News", href: "/news" },
    { label: "Tools", href: "/tools" },
    { label: "Tracker", href: "/tracker" },
    { label: "Guides", href: "/guides" },
  ],
  Resources: [
    { label: "50-State Index", href: "/tracker/state" },
    { label: "Federal AI Policy", href: "/tracker/federal-ai-policy" },
    { label: "ABA Opinions", href: "/tracker/aba-opinions" },
    { label: "Authors", href: "/authors" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "mailto:artificialderecho@gmail.com" },
  ],
  Legal: [
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "IP Policy", href: "/ip-policy" },
    { label: "Acceptable Use", href: "/acceptable-use" },
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

  const footerStyle: React.CSSProperties = {
    backgroundColor: "#fafafa",
    borderTop: "1px solid rgba(0, 0, 0, 0.06)",
    marginTop: "auto",
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: isMobile ? "48px 20px 32px" : "80px 32px 40px",
  }

  const brandStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  }

  const logoStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }

  const logoIconStyle: React.CSSProperties = {
    width: "24px",
    height: "24px",
    background: "#1a1a1a",
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    flexShrink: 0,
  }

  const logoTextStyle: React.CSSProperties = {
    fontSize: "15px",
    fontWeight: "700",
    color: "#1a1a1a",
    letterSpacing: "0.01em",
  }

  const descriptionStyle: React.CSSProperties = {
    color: "#6e6e73",
    fontSize: "14px",
    lineHeight: "1.7",
    maxWidth: "320px",
  }

  const ctaStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 20px",
    backgroundColor: "#0066cc",
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "600",
    borderRadius: "6px",
    transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
  }

  const columnTitleStyle: React.CSSProperties = {
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#1a1a1a",
    marginBottom: "16px",
  }

  const linkStyle: React.CSSProperties = {
    color: "#6e6e73",
    textDecoration: "none",
    fontSize: "14px",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    transition: "color 0.15s cubic-bezier(0.25, 0.1, 0.25, 1)",
  }

  const copyrightStyle: React.CSSProperties = {
    marginTop: "40px",
    fontSize: "11px",
    color: "#8e8e93",
    letterSpacing: "0.02em",
  }

  const bottomBarStyle: React.CSSProperties = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: isMobile ? "24px 20px" : "24px 32px",
    borderTop: "1px solid rgba(0, 0, 0, 0.06)",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
  }

  const bottomTextStyle: React.CSSProperties = {
    fontSize: "11px",
    color: "#8e8e93",
    letterSpacing: "0.06em",
  }

  const legalLinkStyle: React.CSSProperties = {
    color: "#6e6e73",
    textDecoration: "none",
    fontSize: "11px",
    letterSpacing: "0.04em",
  }

  return (
    <footer style={footerStyle} aria-label="Site footer">
      <div style={containerStyle}>
          <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.5fr 1fr 1fr 1fr 1fr",
          gap: isMobile ? "40px" : "48px",
        }}>
          {/* Brand column */}
          <div style={brandStyle}>
            <div style={logoStyle}>
              <div style={logoIconStyle} />
              <span style={logoTextStyle}>
                Decision<span style={{ fontWeight: "400", opacity: 0.4 }}>&</span>Law
              </span>
            </div>
            <p style={descriptionStyle}>
              Legal intelligence for the AI era. Legislation tracking, tool reviews, and analysis for US legal professionals.
            </p>
          </div>

          {/* Link columns */}
          {!isMobile && Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 style={columnTitleStyle}>{section}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={linkStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#6e6e73")}
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
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
            }}>
              {Object.entries(FOOTER_LINKS).map(([section, links]) => (
                <div key={section}>
                  <h4 style={columnTitleStyle}>{section}</h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          style={{ ...linkStyle, fontSize: "13px" }}
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

        <p style={copyrightStyle}>
          © {new Date().getFullYear()} Decision&Law. Not legal advice.
        </p>
      </div>

      {/* Bottom bar */}
      <div style={bottomBarStyle}>
        <span style={bottomTextStyle}>DECISIONANDLAW.COM</span>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "flex-end" }}>
          <Link href="/terms" style={legalLinkStyle}>Terms</Link>
          <Link href="/privacy" style={legalLinkStyle}>Privacy</Link>
          <Link href="/disclaimer" style={legalLinkStyle}>Disclaimer</Link>
          <Link href="/ip-policy" style={legalLinkStyle}>IP Policy</Link>
          <Link href="/acceptable-use" style={legalLinkStyle}>Acceptable Use</Link>
          <button 
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).CookieConsent?.show) {
                (window as any).CookieConsent.show();
              }
            }}
            style={{ ...legalLinkStyle, background: "none", border: "none", cursor: "pointer", padding: 0, font: "inherit", letterSpacing: "0.04em" }}
          >
            Cookie Settings
          </button>
        </div>
      </div>
    </footer>
  )
}

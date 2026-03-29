"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const NAV_ITEMS = [
  { label: "News", href: "/news" },
  { label: "Tools", href: "/tools" },
  { label: "Tracker", href: "/tracker" },
  { label: "Guides", href: "/guides" },
  { label: "Authors", href: "/authors" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const headerStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
    backgroundColor: scrolled || mobileOpen 
      ? "rgba(255, 255, 255, 0.8)" 
      : "transparent",
    backdropFilter: scrolled || mobileOpen 
      ? "blur(20px) saturate(180%)" 
      : "none",
    WebkitBackdropFilter: scrolled || mobileOpen 
      ? "blur(20px) saturate(180%)" 
      : "none",
    borderBottom: scrolled || mobileOpen 
      ? "1px solid rgba(0, 0, 0, 0.06)" 
      : "none",
  }

  const navStyle: React.CSSProperties = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: isMobile ? "0 20px" : "0 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: isMobile ? "48px" : "52px",
  }

  const logoStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    flexShrink: 0,
  }

  const logoIconStyle: React.CSSProperties = {
    width: isMobile ? "22px" : "24px",
    height: isMobile ? "22px" : "24px",
    background: "#1a1a1a",
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    flexShrink: 0,
  }

  const logoTextStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
  }

  const logoMainStyle: React.CSSProperties = {
    fontSize: isMobile ? "15px" : "16px",
    fontWeight: "700",
    color: "#1a1a1a",
    letterSpacing: "0.01em",
    lineHeight: 1.1,
  }

  const logoSubStyle: React.CSSProperties = {
    fontSize: "8px",
    letterSpacing: "0.12em",
    color: "#6e6e73",
    textTransform: "uppercase",
    marginTop: "2px",
  }

  const navLinksStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  }

  const navLinkStyle = (isActive: boolean = false): React.CSSProperties => ({
    padding: "8px 14px",
    color: isActive ? "#1a1a1a" : "#6e6e73",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: 500,
    letterSpacing: "0.02em",
    borderRadius: "6px",
    transition: "all 0.15s cubic-bezier(0.25, 0.1, 0.25, 1)",
    opacity: 1,
  })

  const ctaStyle: React.CSSProperties = {
    padding: "8px 18px",
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    borderRadius: "6px",
    transition: "all 0.15s cubic-bezier(0.25, 0.1, 0.25, 1)",
    marginLeft: "12px",
  }

  const mobileMenuButtonStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    color: "#1a1a1a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  const mobileMenuStyle: React.CSSProperties = {
    position: "fixed",
    top: isMobile ? "52px" : "56px",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#ffffff",
    padding: "24px 20px",
    overflowY: "auto" as const,
    zIndex: 99,
    borderTop: "1px solid rgba(0, 0, 0, 0.06)",
  }

  const mobileNavItemStyle: React.CSSProperties = {
    display: "block",
    padding: "16px 0",
    color: "#1a1a1a",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: "500",
    borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
    transition: "opacity 0.15s",
  }

  const mobileCtaStyle: React.CSSProperties = {
    display: "block",
    marginTop: "24px",
    padding: "16px 24px",
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "600",
    textAlign: "center" as const,
    borderRadius: "8px",
  }

  return (
    <>
      <header style={headerStyle}>
        <div style={navStyle}>
          {/* Logo */}
          <Link href="/" style={logoStyle}>
            <div style={logoIconStyle} />
            {!isMobile && (
              <div style={logoTextStyle}>
                <span style={logoMainStyle}>
                  Decision<span style={{ fontWeight: "400", opacity: 0.5 }}>&</span>Law
                </span>
                <span style={logoSubStyle}>AI Legal Intelligence</span>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <nav style={navLinksStyle} role="navigation" aria-label="Main navigation">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={navLinkStyle()}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#1a1a1a"
                      e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.04)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#6e6e73"
                      e.currentTarget.style.backgroundColor = "transparent"
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Link
                href="/newsletter"
                style={ctaStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.85"
                  e.currentTarget.style.transform = "scale(1.02)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1"
                  e.currentTarget.style.transform = "scale(1)"
                }}
              >
                Subscribe
              </Link>
            </>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={mobileMenuButtonStyle}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && mobileOpen && (
          <nav style={mobileMenuStyle} role="navigation" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={mobileNavItemStyle}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/newsletter"
              onClick={() => setMobileOpen(false)}
              style={mobileCtaStyle}
            >
              Subscribe to Newsletter
            </Link>
          </nav>
        )}
      </header>
      
      {/* Spacer for fixed header */}
      <div style={{ height: isMobile ? "48px" : "52px" }} />
    </>
  )
}

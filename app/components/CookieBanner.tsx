'use client';

import { useState, useEffect } from 'react';

declare global {
  interface Window {
    CookieConsent?: {
      show: () => void;
      hide: () => void;
      acceptAll: () => void;
      rejectAll: () => void;
    };
  }
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    } else {
      const parsed = JSON.parse(consent);
      setAnalyticsEnabled(parsed.analytics ?? false);
    }

    window.CookieConsent = {
      show: () => setIsVisible(true),
      hide: () => setIsVisible(false),
      acceptAll: () => handleAcceptAll(),
      rejectAll: () => handleRejectAll(),
    };

    return () => {
      delete window.CookieConsent;
    };
  }, []);

  const saveConsent = (analytics: boolean) => {
    localStorage.setItem('cookie-consent', JSON.stringify({ analytics, timestamp: Date.now() }));
    if (analytics) {
      window.location.reload();
    }
    setIsVisible(false);
    setAnalyticsEnabled(analytics);
  };

  const handleAcceptAll = () => {
    saveConsent(true);
  };

  const handleRejectAll = () => {
    saveConsent(false);
  };

  const handleCustomize = () => {
    saveConsent(analyticsEnabled);
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      borderTop: '1px solid rgba(0,0,0,0.08)',
      boxShadow: '0 -4px 24px rgba(0,0,0,0.1)',
      zIndex: 9999,
      padding: '20px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div style={{ flex: '1', minWidth: '280px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', marginBottom: '6px' }}>
              We value your privacy
            </h3>
            <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#6e6e73', margin: 0 }}>
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
              By clicking &quot;Accept All&quot;, you consent to our use of cookies.{' '}
              <a href="/privacy" style={{ color: '#0066cc', textDecoration: 'none' }}>Learn more</a>
            </p>
          </div>
          
          {!showCustomize ? (
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setShowCustomize(true)}
                style={{
                  padding: '10px 16px',
                  backgroundColor: '#fafafa',
                  color: '#1a1a1a',
                  border: '1px solid rgba(0,0,0,0.12)',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                Customize
              </button>
              <button
                onClick={handleRejectAll}
                style={{
                  padding: '10px 16px',
                  backgroundColor: '#fafafa',
                  color: '#1a1a1a',
                  border: '1px solid rgba(0,0,0,0.12)',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                Reject Non‑Essential
              </button>
              <button
                onClick={handleAcceptAll}
                style={{
                  padding: '10px 16px',
                  backgroundColor: '#1a1a1a',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                Accept All
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '400px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                backgroundColor: '#fafafa',
                borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.08)',
              }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a' }}>Analytics Cookies</div>
                  <div style={{ fontSize: '11px', color: '#8e8e93' }}>Help us understand site usage</div>
                </div>
                <button
                  onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                  style={{
                    width: '44px',
                    height: '24px',
                    borderRadius: '12px',
                    backgroundColor: analyticsEnabled ? '#0066cc' : '#d2d2d7',
                    border: 'none',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    position: 'absolute',
                    top: '2px',
                    left: analyticsEnabled ? '22px' : '2px',
                    transition: 'left 0.2s ease',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  }} />
                </button>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                backgroundColor: '#fafafa',
                borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.08)',
              }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a' }}>Essential Cookies</div>
                  <div style={{ fontSize: '11px', color: '#8e8e93' }}>Required for site to function</div>
                </div>
                <div style={{
                  padding: '4px 10px',
                  backgroundColor: 'rgba(0,102,204,0.1)',
                  color: '#0066cc',
                  borderRadius: '9999px',
                  fontSize: '10px',
                  fontWeight: '600',
                }}>
                  Always On
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setShowCustomize(false)}
                  style={{
                    padding: '10px 16px',
                    backgroundColor: '#fafafa',
                    color: '#1a1a1a',
                    border: '1px solid rgba(0,0,0,0.12)',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '500',
                    cursor: 'pointer',
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleCustomize}
                  style={{
                    padding: '10px 16px',
                    backgroundColor: '#0066cc',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

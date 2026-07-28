import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const COOKIE_CONSENT_KEY = 'c2_analytics_consent';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const consentData = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consentData) {
        setShowBanner(true);
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  function saveConsent(analytics) {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ analytics, timestamp: Date.now() }));
    } catch {
      /* ignore */
    }
    setShowBanner(false);
  }

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t shadow-lg"
      style={{ background: '#ffffff', borderColor: '#eeeeee' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p
          className="text-xs leading-relaxed sm:max-w-3xl"
          style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
        >
          We use cookies to improve your experience and analyze site traffic. By clicking
          "Accept", you consent to our use of cookies. See our{' '}
          <Link to="/privacy" className="underline hover:text-primary">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => saveConsent(false)}
            className="px-4 py-2 rounded text-xs font-bold uppercase tracking-wide border-2 transition-colors hover:bg-gray-50"
            style={{ borderColor: '#3c4c63', color: '#3c4c63', fontFamily: 'var(--font-sans)' }}
          >
            Decline
          </button>
          <button
            onClick={() => saveConsent(true)}
            className="px-4 py-2 rounded text-xs font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
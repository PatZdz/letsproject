"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to prevent hydration issues
    const timer = setTimeout(() => {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setIsVisible(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1D1E22] bg-opacity-95 backdrop-blur-sm z-50 px-4 md:px-0">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-[#F6F4F1] text-sm text-center sm:text-left">
          <p className="opacity-80">
            We use cookies to enhance your browsing experience. By continuing to use our website, you agree to our{' '}
            <Link href="/policies/cookies_policy" className="text-[#3257A5] hover:underline">
              Cookie Policy
            </Link>.
          </p>
        </div>
        <button
          onClick={acceptCookies}
          className="w-full sm:w-auto px-6 py-2 bg-[#3257A5] text-[#F6F4F1] text-sm font-medium rounded-lg hover:bg-opacity-90 transition-all"
        >
          Accept
        </button>
      </div>
    </div>
  );
}

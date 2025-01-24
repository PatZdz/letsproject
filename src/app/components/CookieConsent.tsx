"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setIsVisible(true);
      } else {
        setCookieSettings(JSON.parse(consent));
      }
    }
  }, []);

  const saveCookieSettings = (settings: CookieSettings) => {
    localStorage.setItem('cookieConsent', JSON.stringify(settings));
    setIsVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveCookieSettings(allAccepted);
  };

  const rejectAll = () => {
    const allRejected = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    saveCookieSettings(allRejected);
  };

  const savePreferences = () => {
    saveCookieSettings(cookieSettings);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[600px] bg-white shadow-2xl rounded-2xl z-[9999] border border-gray-100">
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="text-[#1D1E22] font-medium mb-2">Cookie Settings</h3>
            <p className="text-sm text-gray-600">
              We use cookies to enhance your browsing experience. By continuing to use our website, you agree to our{' '}
              <Link href="/policies/cookies_policy" className="text-[#3257A5] font-medium hover:underline">
                Cookie Policy
              </Link>.
            </p>
          </div>
        </div>

        {showSettings ? (
          <>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600">
                  Necessary Cookies
                  <p className="text-xs opacity-75">Required for the website to function properly</p>
                </label>
                <input
                  type="checkbox"
                  checked={cookieSettings.necessary}
                  disabled
                  className="accent-[#3257A5]"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600">
                  Analytics Cookies
                  <p className="text-xs opacity-75">Help us improve our website</p>
                </label>
                <input
                  type="checkbox"
                  checked={cookieSettings.analytics}
                  onChange={(e) => setCookieSettings({...cookieSettings, analytics: e.target.checked})}
                  className="accent-[#3257A5]"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600">
                  Marketing Cookies
                  <p className="text-xs opacity-75">Used for targeted advertising</p>
                </label>
                <input
                  type="checkbox"
                  checked={cookieSettings.marketing}
                  onChange={(e) => setCookieSettings({...cookieSettings, marketing: e.target.checked})}
                  className="accent-[#3257A5]"
                />
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <button
                onClick={savePreferences}
                className="btn-primary !px-6 !py-2.5 !text-sm"
              >
                Save Preferences
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <div className="flex flex-row justify-center gap-3 order-1 sm:order-none">
              <button
                onClick={rejectAll}
                className="px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={toggleSettings}
                className="px-6 py-2.5 text-sm font-medium text-[#3257A5] hover:text-[#264380] transition-colors"
              >
                Customize
              </button>
            </div>
            <button
              onClick={acceptAll}
              className="btn-primary !px-6 !py-2.5 !text-sm order-2 sm:order-none"
            >
              Accept All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (consent === null) {
      // Show consent popup if no choice has been made
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md bg-white rounded-xl shadow-lg p-6 z-50"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">
                Cookie Notice
              </h3>
              <p className="text-sm text-gray-600">
                We use cookies to enhance your experience on our website. By
                continuing to use this site, you agree to our use of cookies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#F86808] text-white rounded-lg font-medium hover:bg-[#F86808]/90 transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="w-full sm:w-auto px-6 py-2.5 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Decline
              </button>
              <Link
                href="/policies#cookies"
                className="w-full sm:w-auto px-6 py-2.5 text-gray-600 rounded-lg font-medium hover:text-[#F86808] transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

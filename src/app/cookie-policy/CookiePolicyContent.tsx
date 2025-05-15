"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function CookiePolicyContent() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Cookie Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Understanding how we use cookies to improve your experience
            </motion.p>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <div className="space-y-6 text-gray-600">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  What Are Cookies?
                </h2>
                <p>
                  Cookies are small text files that are placed on your device
                  when you visit our website. They help us provide you with a
                  better experience by remembering your preferences, analyzing
                  how our platform is used, and personalizing content.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Types of Cookies We Use
                </h2>
                <ul className="list-disc pl-5 space-y-4">
                  <li>
                    <strong>Essential Cookies:</strong>
                    <p>
                      Required for basic website functionality. These cannot be
                      disabled as they are necessary for the website to work
                      properly.
                    </p>
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong>
                    <p>
                      Help us understand how visitors interact with our website,
                      allowing us to improve our services and user experience.
                    </p>
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong>
                    <p>
                      Remember your settings and preferences to enhance your
                      browsing experience on future visits.
                    </p>
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong>
                    <p>
                      Used to deliver relevant advertisements and track the
                      effectiveness of our marketing campaigns.
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Managing Cookies
                </h2>
                <p className="mb-4">
                  You can control and manage cookies in various ways:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Browser Settings: You can modify your browser settings to
                    accept, reject, or delete cookies
                  </li>
                  <li>
                    Cookie Preferences: Use our cookie preference center to
                    customize your cookie settings
                  </li>
                  <li>
                    Third-Party Tools: Various tools and add-ons can help manage
                    cookies and tracking
                  </li>
                </ul>
                <p className="mt-4">
                  Please note that disabling certain cookies may limit your
                  access to some features of our platform.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Updates to This Policy
                </h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect
                  changes in our practices or for operational, legal, or
                  regulatory reasons. We encourage you to review this policy
                  periodically.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about our Cookie Policy, please{" "}
                  <a href="/contact" className="text-[#F86808] hover:underline">
                    contact us
                  </a>
                  .
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

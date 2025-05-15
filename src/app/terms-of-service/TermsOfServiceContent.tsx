"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function TermsOfServiceContent() {
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
              Terms of Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Please read these terms carefully before using our platform.
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
                  1. Agreement to Terms
                </h2>
                <p>
                  By using InNout&apos;s services, you agree to these terms.
                  Please read them carefully before using our platform. These
                  terms constitute a legally binding agreement between you and
                  InNout.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  2. User Responsibilities
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide accurate account information</li>
                  <li>Maintain account security</li>
                  <li>Use the service in compliance with laws</li>
                  <li>Respect delivery personnel and restaurants</li>
                  <li>Ensure delivery address accuracy</li>
                  <li>Maintain appropriate conduct when using our services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  3. Order Policies
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Orders are subject to restaurant availability</li>
                  <li>Delivery times may vary based on conditions</li>
                  <li>Cancellation policies apply as specified</li>
                  <li>Payment is required before order processing</li>
                  <li>Minimum order requirements may apply</li>
                  <li>Delivery zones are subject to limitations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  4. Service Modifications
                </h2>
                <p>
                  We reserve the right to modify these terms at any time.
                  Continued use of our services constitutes acceptance of
                  updated terms. We may also modify, suspend, or discontinue any
                  aspect of our services at any time.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  5. Limitation of Liability
                </h2>
                <p>
                  InNout is not liable for any indirect, incidental, special,
                  consequential, or punitive damages arising from your use of
                  our services. This includes but is not limited to loss of
                  profits, data, or other intangible losses.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  6. Contact Us
                </h2>
                <p>
                  If you have any questions about these Terms of Service, please{" "}
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

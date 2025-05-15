"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function PrivacyPolicyContent() {
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
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Please read our privacy policy carefully to understand how we
              handle your personal information.
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
                  Information We Collect
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Personal information (name, email, phone number)</li>
                  <li>Delivery address and preferences</li>
                  <li>Order history and payment information</li>
                  <li>Device information and usage data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  How We Use Your Information
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Process and deliver your orders</li>
                  <li>Improve our services and user experience</li>
                  <li>Send relevant updates and promotions</li>
                  <li>Ensure platform security and prevent fraud</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Information Sharing
                </h2>
                <p>
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information with:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Delivery partners to fulfill your orders</li>
                  <li>Payment processors to handle transactions</li>
                  <li>Service providers who assist our operations</li>
                  <li>Law enforcement when required by law</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational security
                  measures to protect your personal information from
                  unauthorized access, disclosure, alteration, and destruction.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Your Rights
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Access your personal information</li>
                  <li>Request corrections to your data</li>
                  <li>Delete your account and data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with supervisory authorities</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about our Privacy Policy, please{" "}
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

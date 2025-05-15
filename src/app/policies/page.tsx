"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function PoliciesPage() {
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
              Legal Policies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Please read our policies carefully to understand our practices
              regarding your personal information and how we operate.
            </motion.p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Privacy Policy */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At InNout, we take your privacy seriously. This policy
                  describes how we collect, use, and protect your personal
                  information.
                </p>
                <h3 className="text-lg font-semibold text-gray-900">
                  Information We Collect
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Personal information (name, email, phone number)</li>
                  <li>Delivery address and preferences</li>
                  <li>Order history and payment information</li>
                  <li>Device information and usage data</li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-900">
                  How We Use Your Information
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Process and deliver your orders</li>
                  <li>Improve our services and user experience</li>
                  <li>Send relevant updates and promotions</li>
                  <li>Ensure platform security and prevent fraud</li>
                </ul>
                <p>
                  We implement appropriate security measures to protect your
                  personal information and never share it with third parties
                  without your consent.
                </p>
              </div>
            </motion.section>

            {/* Terms of Service */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  By using InNout&apos;s services, you agree to these terms.
                  Please read them carefully before using our platform.
                </p>
                <h3 className="text-lg font-semibold text-gray-900">
                  User Responsibilities
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide accurate account information</li>
                  <li>Maintain account security</li>
                  <li>Use the service in compliance with laws</li>
                  <li>Respect delivery personnel and restaurants</li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-900">
                  Order Policies
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Orders are subject to restaurant availability</li>
                  <li>Delivery times may vary based on conditions</li>
                  <li>Cancellation policies apply as specified</li>
                  <li>Payment is required before order processing</li>
                </ul>
                <p>
                  We reserve the right to modify these terms at any time.
                  Continued use of our services constitutes acceptance of
                  updated terms.
                </p>
              </div>
            </motion.section>

            {/* Cookie Policy */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Cookie Policy
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We use cookies and similar technologies to enhance your
                  experience on our platform. This policy explains how we use
                  these technologies.
                </p>
                <h3 className="text-lg font-semibold text-gray-900">
                  Types of Cookies We Use
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Essential cookies for site functionality</li>
                  <li>Analytics cookies to improve our service</li>
                  <li>Preference cookies to remember your settings</li>
                  <li>Marketing cookies for relevant advertisements</li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-900">
                  Managing Cookies
                </h3>
                <p>
                  You can control cookie preferences through your browser
                  settings. However, disabling certain cookies may limit your
                  access to some features.
                </p>
                <p>
                  We respect your privacy choices and provide clear options for
                  managing cookie preferences on our platform.
                </p>
              </div>
            </motion.section>

            {/* Refund Policy */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Refund Policy
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We strive to ensure your satisfaction with every order. Our
                  refund policy is designed to be fair and transparent.
                </p>
                <h3 className="text-lg font-semibold text-gray-900">
                  Eligible Refund Scenarios
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Order not received within guaranteed delivery time</li>
                  <li>Items received damaged or incorrect</li>
                  <li>Quality issues with food or products</li>
                  <li>Technical issues causing order failure</li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-900">
                  Refund Process
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Report issues within 24 hours of delivery</li>
                  <li>Provide order details and reason for refund</li>
                  <li>Refund processed within 5-7 business days</li>
                  <li>Choice of wallet credit or original payment method</li>
                </ul>
                <p>
                  For specific refund requests, please contact our customer
                  support team with your order details.
                </p>
              </div>
            </motion.section>
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 md:mt-16 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Have Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about our policies, please don&apos;t
              hesitate to contact us.
            </p>
            <a
              href="mailto:support@innout.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#F86808] text-white rounded-xl font-medium hover:bg-[#F86808]/90 transition-all"
            >
              Contact Support
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function RefundPolicyContent() {
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
              Refund Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Our commitment to fair and transparent refund processes
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
                  Our Refund Commitment
                </h2>
                <p>
                  At InNout, we strive to ensure your complete satisfaction with
                  every order. We understand that sometimes things may not go as
                  planned, which is why we have a comprehensive refund policy in
                  place to protect our customers.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Eligible Refund Scenarios
                </h2>
                <ul className="list-disc pl-5 space-y-4">
                  <li>
                    <strong>Late Delivery:</strong>
                    <p>
                      Orders not received within the guaranteed delivery time
                      frame may be eligible for a full or partial refund.
                    </p>
                  </li>
                  <li>
                    <strong>Quality Issues:</strong>
                    <p>
                      If you receive food or products that don&apos;t meet our
                      quality standards or are damaged during delivery.
                    </p>
                  </li>
                  <li>
                    <strong>Incorrect Items:</strong>
                    <p>
                      If you receive items different from what you ordered or if
                      items are missing from your order.
                    </p>
                  </li>
                  <li>
                    <strong>Technical Issues:</strong>
                    <p>
                      If technical problems cause order failures or duplicate
                      charges.
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Refund Process
                </h2>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <strong>Report the Issue:</strong>
                    <p>
                      Contact our customer support within 24 hours of delivery
                      to report any issues with your order.
                    </p>
                  </li>
                  <li>
                    <strong>Provide Information:</strong>
                    <p>
                      Submit your order details and explain the reason for the
                      refund request. Photos may be required for quality issues.
                    </p>
                  </li>
                  <li>
                    <strong>Review Process:</strong>
                    <p>
                      Our team will review your request and respond within 24-48
                      hours.
                    </p>
                  </li>
                  <li>
                    <strong>Refund Processing:</strong>
                    <p>
                      Approved refunds are processed within 5-7 business days,
                      depending on your payment method.
                    </p>
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Refund Options
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Wallet credit for future orders (instant)</li>
                  <li>Refund to original payment method (5-7 business days)</li>
                  <li>Replacement order (subject to availability)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Non-Refundable Cases
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Orders cancelled after the restaurant has started preparing
                  </li>
                  <li>Personal preference issues not related to quality</li>
                  <li>Incorrect delivery address provided by customer</li>
                  <li>Orders reported after 24 hours of delivery</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p>
                  For refund requests or questions about our refund policy,
                  please{" "}
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

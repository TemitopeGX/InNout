"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is InNout?",
          answer:
            "InNout is Nigeria's premier platform for food ordering and grocery shopping. We connect customers with local restaurants and provide fresh groceries delivered to your doorstep.",
        },
        {
          question: "How do I get started with InNout?",
          answer:
            "Simply download our app from the App Store or Play Store, create an account, and you can start ordering food or shopping for groceries right away.",
        },
        {
          question: "Which cities do you operate in?",
          answer:
            "We currently operate in major cities across Nigeria including Lagos, Abuja, Port Harcourt, and more. Check the app to see if we deliver to your area.",
        },
      ],
    },
    {
      category: "Food Ordering",
      questions: [
        {
          question: "How do I place a food order?",
          answer:
            "Browse through our list of restaurants, select your favorite dishes, add them to your cart, and proceed to checkout. We'll handle the delivery for you.",
        },
        {
          question: "Can I customize my order?",
          answer:
            "Yes, you can add special instructions for your order, such as spice level preferences or ingredient modifications. Just add your notes during checkout.",
        },
        {
          question: "How long does food delivery take?",
          answer:
            "Delivery times vary depending on your location and the restaurant. On average, food delivery takes 30-45 minutes from order confirmation.",
        },
      ],
    },
    {
      category: "Grocery Shopping",
      questions: [
        {
          question: "How does grocery shopping work?",
          answer:
            "Browse through our InNout Market section, select your items, and choose your preferred delivery time. We'll deliver fresh groceries to your doorstep.",
        },
        {
          question: "What types of groceries do you sell?",
          answer:
            "We offer a wide range of fresh produce, household items, pantry staples, and more. Our selection includes fruits, vegetables, meat, dairy, and other essential items.",
        },
        {
          question: "How long does grocery delivery take?",
          answer:
            "Grocery delivery typically takes 1-2 hours from order confirmation. You can select your preferred delivery time slot during checkout.",
        },
      ],
    },
    {
      category: "Payment & Pricing",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept various payment methods including bank transfers, credit/debit cards, and cash on delivery. All payments are secure and encrypted.",
        },
        {
          question: "Are there any delivery fees?",
          answer:
            "Delivery fees vary based on your location and order type. The fee will be clearly displayed during checkout before you confirm your order.",
        },
        {
          question: "Do you offer any discounts or promotions?",
          answer:
            "Yes, we regularly offer promotions and discounts. Check the app for current deals, and you can also subscribe to our newsletter for updates on special offers.",
        },
      ],
    },
    {
      category: "Vendor Partnership",
      questions: [
        {
          question: "How can I become a vendor partner?",
          answer:
            "Visit our vendor registration page, fill out the application form, and our team will review your application. We'll contact you within 2-3 business days.",
        },
        {
          question: "What are the benefits of partnering with InNout?",
          answer:
            "Partner vendors get access to our large customer base, marketing support, analytics dashboard, and efficient order management system.",
        },
        {
          question: "What are the requirements to become a vendor?",
          answer:
            "Requirements include a valid business registration, food safety certifications (for restaurants), and the ability to maintain quality standards.",
        },
      ],
    },
    {
      category: "Customer Support",
      questions: [
        {
          question: "How can I contact customer support?",
          answer:
            "You can reach our 24/7 customer support through the app, email (support@innout.com), or phone (+234 123 456 7890).",
        },
        {
          question: "What if I have an issue with my order?",
          answer:
            "If you encounter any issues with your order, contact our customer support team immediately. We'll help resolve the problem and ensure your satisfaction.",
        },
        {
          question: "How do I track my order?",
          answer:
            "You can track your order in real-time through the app. We'll send you updates on your order status, including when it's being prepared and delivered.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about InNout&apos;s services and
              features.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <div
                      key={faqIndex}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <button
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                        onClick={() =>
                          setOpenIndex(
                            openIndex === categoryIndex * 3 + faqIndex
                              ? null
                              : categoryIndex * 3 + faqIndex
                          )
                        }
                      >
                        <span className="font-semibold text-gray-900">
                          {faq.question}
                        </span>
                        <svg
                          className={`w-5 h-5 text-gray-500 transform transition-transform ${
                            openIndex === categoryIndex * 3 + faqIndex
                              ? "rotate-180"
                              : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openIndex === categoryIndex * 3 + faqIndex && (
                        <div className="px-6 py-4 bg-gray-50">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our customer support
            team is here to help.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="tel:+2341234567890"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Call Us
            </a>
            <a
              href="mailto:support@innout.com"
              className="bg-white text-orange-500 px-8 py-4 rounded-lg border-2 border-orange-500 hover:bg-orange-50 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

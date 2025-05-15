import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | InNout Food Delivery & Grocery Shopping",
  description:
    "Learn how InNout protects your personal data, ensures secure transactions, and maintains your privacy. Our comprehensive privacy policy explains data collection, usage, sharing practices, and your rights.",
  keywords:
    "privacy policy, data protection, personal information, GDPR compliance, data security, user privacy, InNout privacy, food delivery privacy, online grocery privacy",
  openGraph: {
    title: "Privacy Policy | InNout Food Delivery & Grocery Shopping",
    description:
      "Learn how InNout protects your personal data, ensures secure transactions, and maintains your privacy. Our comprehensive privacy policy explains data collection, usage, sharing practices, and your rights.",
    type: "website",
    url: "https://innout.com/privacy-policy",
    siteName: "InNout",
    locale: "en_US",
    images: [
      {
        url: "https://innout.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InNout Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | InNout Food Delivery & Grocery Shopping",
    description:
      "Learn how InNout protects your personal data, ensures secure transactions, and maintains your privacy. Our comprehensive privacy policy explains data collection, usage, sharing practices, and your rights.",
    images: ["https://innout.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://innout.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

import PrivacyPolicyContent from "./PrivacyPolicyContent";

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}

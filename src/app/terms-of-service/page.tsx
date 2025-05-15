import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | InNout Food Delivery & Grocery Shopping",
  description:
    "Read our comprehensive terms of service to understand your rights and obligations when using InNout's food delivery and grocery shopping platform. Learn about order policies, user responsibilities, and service terms.",
  keywords:
    "terms of service, user agreement, legal terms, service terms, food delivery terms, grocery shopping terms, InNout terms, order policies, user responsibilities",
  openGraph: {
    title: "Terms of Service | InNout Food Delivery & Grocery Shopping",
    description:
      "Read our comprehensive terms of service to understand your rights and obligations when using InNout's food delivery and grocery shopping platform. Learn about order policies, user responsibilities, and service terms.",
    type: "website",
    url: "https://innout.com/terms-of-service",
    siteName: "InNout",
    locale: "en_US",
    images: [
      {
        url: "https://innout.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InNout Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | InNout Food Delivery & Grocery Shopping",
    description:
      "Read our comprehensive terms of service to understand your rights and obligations when using InNout's food delivery and grocery shopping platform. Learn about order policies, user responsibilities, and service terms.",
    images: ["https://innout.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://innout.com/terms-of-service",
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

import TermsOfServiceContent from "./TermsOfServiceContent";

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />;
}

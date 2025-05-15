import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | InNout - Food & Grocery Delivery",
  description:
    "Learn about how InNout uses cookies and similar technologies to enhance your experience. Our cookie policy explains what cookies we use and how you can control them.",
  keywords:
    "cookie policy, cookies, tracking, privacy, browser cookies, InNout cookies",
  openGraph: {
    title: "Cookie Policy | InNout - Food & Grocery Delivery",
    description:
      "Learn about how InNout uses cookies and similar technologies to enhance your experience. Our cookie policy explains what cookies we use and how you can control them.",
    type: "website",
    url: "https://innout.com/cookie-policy",
    siteName: "InNout",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | InNout - Food & Grocery Delivery",
    description:
      "Learn about how InNout uses cookies and similar technologies to enhance your experience. Our cookie policy explains what cookies we use and how you can control them.",
  },
  alternates: {
    canonical: "https://innout.com/cookie-policy",
  },
};

import CookiePolicyContent from "./CookiePolicyContent";

export default function CookiePolicyPage() {
  return <CookiePolicyContent />;
}

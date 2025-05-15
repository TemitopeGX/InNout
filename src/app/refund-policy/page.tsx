import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | InNout - Food & Grocery Delivery",
  description:
    "Learn about InNout's refund policy for food delivery and grocery orders. Find out how to request a refund and understand our fair refund process.",
  keywords:
    "refund policy, money back, order issues, refund process, InNout refunds",
  openGraph: {
    title: "Refund Policy | InNout - Food & Grocery Delivery",
    description:
      "Learn about InNout's refund policy for food delivery and grocery orders. Find out how to request a refund and understand our fair refund process.",
    type: "website",
    url: "https://innout.com/refund-policy",
    siteName: "InNout",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | InNout - Food & Grocery Delivery",
    description:
      "Learn about InNout's refund policy for food delivery and grocery orders. Find out how to request a refund and understand our fair refund process.",
  },
  alternates: {
    canonical: "https://innout.com/refund-policy",
  },
};

import RefundPolicyContent from "./RefundPolicyContent";

export default function RefundPolicyPage() {
  return <RefundPolicyContent />;
}

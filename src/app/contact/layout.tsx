import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with InNout. We're here to help with all your food delivery and grocery shopping needs in Osogbo.",
  openGraph: {
    title: "Contact InNout - Food Delivery & Supermarket",
    description:
      "Get in touch with InNout. We're here to help with all your food delivery and grocery shopping needs in Osogbo.",
    images: ["/contact-og.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

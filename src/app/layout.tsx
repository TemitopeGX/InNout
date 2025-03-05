import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#F86808",
};

export const metadata: Metadata = {
  title: "InNout - Food Delivery & Supermarket",
  description:
    "Your one-stop solution for food delivery and grocery shopping in Osogbo. Order delicious meals and groceries online for quick delivery.",
  metadataBase: new URL("https://innout.com"),
  keywords: [
    "food delivery",
    "grocery delivery",
    "online food ordering",
    "supermarket",
    "Osogbo",
    "Nigerian cuisine",
  ],
  authors: [{ name: "InNout" }],
  openGraph: {
    title: "InNout - Food Delivery & Supermarket",
    description:
      "Your one-stop solution for food delivery and grocery shopping in Osogbo. Order delicious meals and groceries online for quick delivery.",
    url: "https://innout.com",
    siteName: "InNout",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InNout - Food Delivery & Supermarket",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InNout - Food Delivery & Supermarket",
    description:
      "Your one-stop solution for food delivery and grocery shopping in Osogbo. Order delicious meals and groceries online for quick delivery.",
    images: ["/twitter-image.jpg"],
    creator: "@innout",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  other: {
    "apple-mobile-web-app-title": "InNout",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}

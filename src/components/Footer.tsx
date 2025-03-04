"use client";

import Link from "next/link";
import Image from "next/image";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#3B544E] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="InNout Logo"
                width={140}
                height={50}
                className="w-auto h-10"
              />
            </Link>
            <p className="text-gray-300 text-sm">
              Your one-stop solution for food delivery and grocery shopping in
              Osogbo.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com/innout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F86808] transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/innout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F86808] transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/innout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F86808] transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#menu"
                  className="text-gray-300 hover:text-[#F86808] transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-gray-300 hover:text-[#F86808] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-gray-300 hover:text-[#F86808] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#F86808] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FiMapPin className="w-5 h-5 text-[#F86808]" />
                <span className="text-gray-300">
                  123 Main Street, Osogbo, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-[#F86808]" />
                <a
                  href="tel:+2348012345678"
                  className="text-gray-300 hover:text-[#F86808] transition-colors"
                >
                  +234 801 234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="w-5 h-5 text-[#F86808]" />
                <a
                  href="mailto:hello@innout.com"
                  className="text-gray-300 hover:text-[#F86808] transition-colors"
                >
                  hello@innout.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/policies"
                  className="text-gray-300 hover:text-[#F86808] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/policies#terms"
                  className="text-gray-300 hover:text-[#F86808] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/policies#cookies"
                  className="text-gray-300 hover:text-[#F86808] transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/policies#refund"
                  className="text-gray-300 hover:text-[#F86808] transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} InNout. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

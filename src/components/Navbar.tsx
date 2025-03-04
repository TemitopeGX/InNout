"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-lg border-b border-white/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="InNout Logo"
              width={140}
              height={50}
              className="w-auto h-10 md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="./"
              className="text-gray-800 hover:text-[#F86808] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-[#F86808] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-[#F86808] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-[#F86808] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Download App Button (Desktop) */}
          <div className="hidden md:block">
            <motion.a
              href="#app-showcase"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-[#F86808] text-white rounded-xl font-medium inline-flex items-center gap-2 hover:bg-[#F86808]/90 transition-colors"
            >
              <FiDownload className="w-5 h-5" />
              Download App
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-800 hover:text-[#F86808] transition-colors"
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="/#menu"
                className="block py-2 text-gray-800 hover:text-[#F86808] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/#services"
                className="block py-2 text-gray-800 hover:text-[#F86808] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="block py-2 text-gray-800 hover:text-[#F86808] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-gray-800 hover:text-[#F86808] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <motion.a
                href="#app-showcase"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="block w-full px-6 py-2.5 bg-[#F86808] text-white rounded-xl font-medium text-center hover:bg-[#F86808]/90 transition-colors"
              >
                Download App
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

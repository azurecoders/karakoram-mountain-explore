"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Home, Search, ArrowRight, Mountain } from "lucide-react";

const popularLinks = [
  {
    label: "K2 Base Camp Expedition",
    href: "/experiences/k2-base-camp-expedition",
  },
  {
    label: "Fairy Meadows Trek",
    href: "/experiences/fairy-meadows",
  },
  {
    label: "Hunza Valley Tour",
    href: "/experiences/hunza-valley",
  },
  { label: "All Experiences", href: "/experiences" },
];

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white py-4">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#014090]/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F56907]/[0.05] rounded-full blur-3xl pointer-events-none" />

      {/* Dotted trail line background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07]"
        preserveAspectRatio="none"
      >
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#17345B" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-xl mx-auto text-center">
          {/* Compass icon with rotating animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative inline-flex items-center justify-center mb-5"
          >
            <div className="absolute inset-0 bg-[#014090]/5 rounded-full scale-[2.2]" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#17345B] flex items-center justify-center shadow-xl shadow-[#17345B]/20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Compass size={40} className="text-white" strokeWidth={1.5} />
              </motion.div>
            </div>
          </motion.div>

          {/* 404 */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#F56907] font-bold text-sm tracking-[0.2em] mb-4"
          >
            ERROR 404
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17345B] leading-tight mb-4 pt-6"
          >
            Looks like this trail doesn't exist.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10 max-w-md mx-auto"
          >
            The page you're looking for may have been moved, renamed, or never
            charted. Let's get you back on the right path.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative max-w-md mx-auto mb-8"
          >
            <Search
              size={16}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search for a destination or trip..."
              className="w-full border border-gray-200 rounded-full pl-12 pr-32 py-4 text-sm outline-none focus:border-[#014090] transition-colors"
            />
            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#014090] hover:bg-[#F56907] text-white text-sm font-semibold px-5 rounded-full transition-colors">
              Search
            </button>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
          >
            <Link
              href="/"
              className="group flex items-center gap-2 bg-[#014090] hover:bg-[#F56907] text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300"
            >
              <Home size={16} />
              Back to Home
            </Link>
            <Link
              href="/experiences"
              className="group flex items-center gap-2 border border-gray-200 hover:border-[#014090] text-[#17345B] font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300"
            >
              <Mountain size={16} />
              Explore Trips
            </Link>
          </motion.div>

          {/* Popular links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="pt-8 border-t border-gray-100"
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Or check out these popular trips
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {popularLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-1.5 bg-gray-50 hover:bg-[#014090]/5 text-[#17345B] text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-colors"
                >
                  {link.label}
                  <ArrowRight
                    size={12}
                    className="text-gray-400 group-hover:text-[#F56907] group-hover:translate-x-0.5 transition-all"
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

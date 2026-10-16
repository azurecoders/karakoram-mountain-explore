"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const links = [
  { label: "Expeditions", href: "/experiences" },
  { label: "Trekking", href: "/experiences" },
  { label: "Tours", href: "/experiences" },
  { label: "Mountaineering", href: "/experiences" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll effect for the floating navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <>
      {/* Desktop & Mobile Header */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 flex justify-center ${
          isScrolled ? "pt-1 px-4 sm:px-6" : "pt-0 px-0"
        }`}
      >
        <nav
          className={`w-full max-w-7xl flex items-center justify-between transition-all duration-500 bg-white backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 rounded-full px-6 py-2 mt-4
          }`}
        >
          {/* Left: Mobile Menu Toggle */}
          <div className="flex-1 lg:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#003B8F] transition-colors"
            >
              <Menu
                size={24}
                className="transition-transform group-hover:scale-110"
              />
            </button>
          </div>

          {/* Left: Desktop Links */}
          <div className="hidden lg:flex flex-1 items-center gap-8 xl:gap-10">
            {links.slice(0, 2).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[12px] font-bold uppercase tracking-[0.15em] text-gray-600 transition-all hover:text-[#003B8F] relative group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#FF6B00] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Center: Logo Container (Adjusted for wider aspect ratio) */}
          <Link
            href="/"
            className="flex-shrink-0 relative z-50 transition-transform duration-300 hover:scale-[1.02] flex justify-center"
          >
            <div
              className={`relative transition-all duration-500 ${
                isScrolled
                  ? "h-10 w-[200px] sm:h-12 sm:w-[240px]"
                  : "h-12 w-[220px] sm:h-16 sm:w-[280px]"
              }`}
            >
              <Image
                src="/logo.jpeg"
                alt="Karakoram Mountain Explore"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Right: Desktop Links & CTA */}
          <div className="flex-1 flex items-center justify-end gap-8 xl:gap-10">
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {links.slice(2, 4).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[12px] font-bold uppercase tracking-[0.15em] text-gray-600 transition-all hover:text-[#003B8F] relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#FF6B00] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className="group flex items-center gap-2 bg-[#FF6B00] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#003B8F] hover:shadow-lg hover:shadow-[#003B8F]/20"
            >
              <span className="hidden sm:inline">Book</span> Now
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </nav>
      </header>

      {/* Cinematic Full-Screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col"
          >
            {/* Close Button Header */}
            <div className="container mx-auto px-6 md:px-8 pt-6 flex justify-between items-center">
              <button
                onClick={() => setMenuOpen(false)}
                className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gray-500 hover:text-[#003B8F] transition-colors"
              >
                <X
                  size={24}
                  className="transition-transform group-hover:rotate-90 duration-300 text-[#FF6B00]"
                />
                Close
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 container mx-auto px-6 md:px-8 flex flex-col justify-center">
              <ul className="space-y-6">
                {links.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * i,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group inline-flex items-center gap-4 text-4xl sm:text-5xl md:text-7xl font-bold text-[#003B8F] hover:text-[#FF6B00] transition-colors tracking-tight"
                    >
                      {link.label}
                      <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#FF6B00]">
                        <ArrowRight
                          size={40}
                          className="w-8 h-8 md:w-10 md:h-10"
                        />
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Footer / Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="container mx-auto px-6 md:px-8 pb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-gray-100 pt-8"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6B00] mb-4">
                  Get in touch
                </p>
                <a
                  href="mailto:hello@karakoramtours.com"
                  className="block text-lg font-medium text-gray-800 hover:text-[#003B8F] transition-colors mb-2"
                >
                  hello@karakoramtours.com
                </a>
                <a
                  href="tel:+923001234567"
                  className="flex items-center gap-2 text-lg font-medium text-gray-800 hover:text-[#003B8F] transition-colors"
                >
                  <Phone size={18} className="text-[#FF6B00]" />
                  +92 300 123 4567
                </a>
              </div>

              <div className="flex gap-6">
                {[BsFacebook, BsTwitter, BsInstagram].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-gray-400 hover:text-[#003B8F] transition-colors"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

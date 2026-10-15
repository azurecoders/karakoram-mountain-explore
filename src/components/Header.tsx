"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react";

const leftLinks = [
  { label: "Expeditions", href: "/expeditions" },
  { label: "Tours", href: "/tours" },
];

const rightLinks = [
  { label: "Trekking", href: "/trekking" },
  { label: "Rock Climbing", href: "/rock-climbing" },
];

const NavLink = ({ label, href }: { label: string; href: string }) => (
  <Link
    href={href}
    className="relative group text-[15px] font-semibold text-[#17345B]/80 hover:text-[#014090] transition-colors duration-300"
  >
    {label}
    <span className="absolute left-0 -bottom-1.5 h-[2px] w-0 bg-[#F56907] group-hover:w-full transition-all duration-300 ease-out" />
  </Link>
);

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block bg-[#17345B] text-white/70 text-xs">
        <div className="container mx-auto px-6 flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a
              href="tel:+923001234567"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={12} />
              +92 300 123 4567
            </a>
            <a
              href="mailto:hello@karakoramtours.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={12} />
              hello@karakoramtours.com
            </a>
          </div>
          <p className="text-white/50">
            Fifteen years of guiding the Karakoram
          </p>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[auto_1fr] lg:grid-cols-[1fr_auto_1fr] items-center h-20">
            {/* Mobile: hamburger | Desktop: left links */}
            <div className="flex items-center gap-10">
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="lg:hidden text-[#014090] p-1 -ml-1"
              >
                <Menu size={28} />
              </button>

              <ul className="hidden lg:flex items-center gap-10 justify-end w-full pr-10 border-r border-gray-200 h-10">
                {leftLinks.map((link) => (
                  <li key={link.label}>
                    <NavLink {...link} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo - fixed box so it's always centered & contained cleanly */}
            <Link
              href="/"
              className="flex items-center justify-self-center lg:px-8"
            >
              <div className="relative h-14 w-[160px] sm:h-16 sm:w-[190px]">
                <Image
                  src="/logo.jpeg"
                  alt="Karakoram Tours"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop: right links + CTA */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center gap-10 pl-10 border-l border-gray-200 h-10">
                {rightLinks.map((link) => (
                  <li key={link.label}>
                    <NavLink {...link} />
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="group ml-8 flex items-center gap-2 bg-[#014090] hover:bg-[#F56907] text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-orange-500/20 whitespace-nowrap"
              >
                Book Now
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>

            {/* Mobile: Book Now shortcut */}
            <Link
              href="/book"
              className="lg:hidden justify-self-end bg-[#014090] text-white font-semibold text-xs px-4 py-2 rounded-full whitespace-nowrap"
            >
              Book Now
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile drawer menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 left-0 bottom-0 w-[82%] max-w-sm bg-white z-[70] lg:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
                <div className="relative h-10 w-[140px]">
                  <Image
                    src="/logo.jpeg"
                    alt="Karakoram Tours"
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="text-[#17345B] p-1"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Drawer links */}
              <div className="flex-1 overflow-y-auto px-5 py-4">
                <ul className="space-y-1">
                  {[...leftLinks, ...rightLinks].map((link, i) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.06 * i }}
                      className="border-b border-gray-100"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between py-4 text-[#17345B] text-lg font-semibold hover:text-[#014090] transition-colors"
                      >
                        {link.label}
                        <ArrowRight size={16} className="text-gray-300" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Drawer footer */}
              <div className="px-5 py-5 border-t border-gray-100 space-y-3">
                <Link
                  href="/book"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#014090] text-white font-semibold text-sm py-3.5 rounded-full w-full"
                >
                  Book Now
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:+923001234567"
                  className="flex items-center justify-center gap-2 border border-gray-200 text-[#17345B] font-semibold text-sm py-3.5 rounded-full w-full"
                >
                  <Phone size={15} />
                  +92 300 123 4567
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

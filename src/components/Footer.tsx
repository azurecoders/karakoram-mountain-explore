"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { useEffect, useState } from "react";

const exploreLinks = [
  { label: "Expeditions", href: "/expeditions" },
  { label: "Trekking", href: "/trekking" },
  { label: "Cultural Tours", href: "/tours" },
  { label: "Outdoor Events", href: "/events" },
  { label: "Custom Itinerary", href: "/custom" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Guides", href: "/guides" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const supportLinks = [
  { label: "FAQs", href: "/faq" },
  { label: "Booking Policy", href: "/booking-policy" },
  { label: "Safety Guidelines", href: "/safety" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const socials = [
  { icon: BsInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: BsTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: BsYoutube, href: "https://youtube.com", label: "Youtube" },
];

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#0d1f3a] relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#014090] via-[#F56907] to-[#014090]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 lg:pt-20">
        {/* Newsletter row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-12 sm:pb-14 border-b border-white/10">
          <div className="max-w-md">
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
              Join the expedition list
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Route announcements, seasonal openings, and the occasional story
              from the mountains. No spam.
            </p>
          </div>

          <form className="flex w-full lg:w-auto lg:min-w-[380px] gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-[#F56907] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#F56907] hover:bg-white hover:text-[#17345B] text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors shrink-0 flex items-center gap-1.5"
            >
              Subscribe
              <ArrowUpRight size={15} />
            </button>
          </form>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-12 gap-x-6 gap-y-10 py-14 sm:py-16">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-6 lg:col-span-4 pr-0 lg:pr-10">
            <Link href="/" className="inline-flex items-center gap-2 mb-5">
              <span className="text-white text-2xl font-bold tracking-tight">
                Karakoram<span className="text-[#F56907]">Tours</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Fifteen years of guiding travelers through the Karakoram — from
              first-time trekkers to seasoned mountaineers.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={15} className="text-[#F56907] shrink-0" />
                <span>Skardu, Gilgit-Baltistan, Pakistan</span>
              </div>
              <a
                href="tel:+923001234567"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors w-fit"
              >
                <Phone size={15} className="text-[#F56907] shrink-0" />
                <span>+92 300 123 4567</span>
              </a>
              <a
                href="mailto:hello@karakoramtours.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors w-fit"
              >
                <Mail size={15} className="text-[#F56907] shrink-0" />
                <span>hello@karakoramtours.com</span>
              </a>
            </div>
          </div>

          {/* Explore links */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#F56907] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#F56907] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#F56907] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 py-6 border-t border-white/10">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © {year ?? "2026"} Karakoram Tours. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#F56907] hover:bg-[#F56907] transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

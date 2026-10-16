import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

// Replaced generic icons with premium editorial text labels
const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Youtube", href: "https://youtube.com" },
];

const Footer = () => {
  return (
    <footer className="bg-[#081221] text-white overflow-hidden font-sans pt-24 lg:pt-32 flex flex-col justify-between relative border-t border-[#17345B]">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 xl:px-32 z-10">
        {/* Top: The Invitation (Newsletter) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-24 pb-20 border-b border-white/10">
          <div className="max-w-2xl">
            <span className="flex items-center gap-3 text-[#F56907] text-[10px] font-bold uppercase tracking-[0.25em] mb-8">
              <span className="w-6 h-[1px] bg-[#F56907]" />
              The Dispatch
            </span>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">
              Stories from the summit. <br />
              <span className="text-gray-500 italic font-serif">
                Delivered to your inbox.
              </span>
            </h3>
          </div>

          <form action="#" className="w-full lg:max-w-md group relative">
            <div className="flex items-center border-b border-gray-600 focus-within:border-[#F56907] transition-colors duration-500 pb-4">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full bg-transparent text-lg font-light text-white outline-none placeholder:text-gray-600"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="shrink-0 text-gray-400 hover:text-[#F56907] transition-colors duration-300 group-focus-within:text-white"
                aria-label="Subscribe"
              >
                <ArrowRight
                  size={24}
                  strokeWidth={1.5}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
            <p className="absolute -bottom-6 left-0 text-[10px] text-gray-500 tracking-wider">
              Route announcements & seasonal openings. No spam.
            </p>
          </form>
        </div>

        {/* Middle: Editorial Navigation & Basecamp Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 py-20 lg:py-24">
          {/* Left: Contact/Location Dossier */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-12 sm:gap-24 lg:gap-16 pr-0 lg:pr-12">
            <div>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.25em] mb-6">
                Basecamp Location
              </p>
              <address className="not-italic text-xl sm:text-2xl font-light leading-snug text-gray-300">
                Skardu, Gilgit-Baltistan <br />
                <span className="text-white">Pakistan</span>
              </address>
            </div>

            <div>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.25em] mb-6">
                Direct Comms
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+923001234567"
                  className="block text-xl sm:text-2xl font-light text-gray-300 hover:text-[#F56907] transition-colors focus-visible:outline-none focus-visible:text-[#F56907]"
                >
                  +92 300 123 4567
                </a>
                <a
                  href="mailto:hello@karakoramtours.com"
                  className="block text-xl sm:text-2xl font-light text-gray-300 hover:text-[#F56907] transition-colors focus-visible:outline-none focus-visible:text-[#F56907]"
                >
                  hello@karakoramtours.com
                </a>
              </div>
            </div>
          </div>

          {/* Right: Navigation Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-6">
            <div className="flex flex-col">
              <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.25em] mb-8">
                Explore
              </h4>
              <ul className="space-y-4">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm lg:text-base font-light transition-colors focus-visible:outline-none focus-visible:text-[#F56907]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.25em] mb-8">
                Company
              </h4>
              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm lg:text-base font-light transition-colors focus-visible:outline-none focus-visible:text-[#F56907]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col col-span-2 sm:col-span-1 mt-8 sm:mt-0">
              <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.25em] mb-8">
                Support
              </h4>
              <ul className="space-y-4 flex flex-col flex-wrap sm:block h-32 sm:h-auto">
                {supportLinks.map((link) => (
                  <li key={link.label} className="w-1/2 sm:w-full">
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm lg:text-base font-light transition-colors focus-visible:outline-none focus-visible:text-[#F56907]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom: Legal & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-8 border-t border-white/10">
          <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
            © <span suppressHydrationWarning>2026</span> Karakoram Tours. All
            rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-6 sm:gap-10">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-colors focus-visible:outline-none focus-visible:text-[#F56907]"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Massive Brand Watermark Anchor */}
      <div className="w-full flex justify-center pointer-events-none select-none pb-4 sm:pb-0 overflow-hidden translate-y-[25%] sm:translate-y-0">
        <span className="text-[16.5vw] font-bold leading-[0.75] tracking-tighter text-[#17345B]/30 pb-3 whitespace-nowrap drop-shadow-sm">
          KARAKORAM
        </span>
      </div>
    </footer>
  );
};

export default Footer;

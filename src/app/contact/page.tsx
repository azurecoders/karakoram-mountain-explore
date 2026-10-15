"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

/* ---------------------------------- */
/* DATA                                */
/* ---------------------------------- */

const contactChannels = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+92 300 123 4567",
    sub: "Mon – Sat, 9am – 7pm PKT",
    href: "tel:+923001234567",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@karakoramtours.com",
    sub: "We reply within 24 hours",
    href: "mailto:hello@karakoramtours.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+92 300 123 4567",
    sub: "Fastest way to reach us",
    href: "https://wa.me/923001234567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Skardu, Gilgit-Baltistan",
    sub: "Pakistan",
    href: "#map",
  },
];

const subjects = [
  "General Inquiry",
  "Trip Booking",
  "Custom Itinerary Request",
  "Partnership / Collaboration",
  "Other",
];

const socials = [
  { icon: BsInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: BsFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: BsTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: BsYoutube, href: "https://youtube.com", label: "Youtube" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.08 },
  }),
};

/* ---------------------------------- */
/* PAGE                                */
/* ---------------------------------- */

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <main className="bg-white">
      {/* ---------- HEADER ---------- */}
      <section className="relative bg-[#17345B] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F56907]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#014090]/40 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-24 sm:pb-32">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#F56907] font-semibold text-sm tracking-wide mb-3"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white max-w-2xl leading-tight mb-5"
          >
            Let's plan your next journey.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base max-w-lg"
          >
            Whether you have a question about an upcoming trip or want a
            completely custom itinerary — our team is ready to help.
          </motion.p>
        </div>
      </section>

      {/* ---------- CONTACT CHANNELS (overlapping header) ---------- */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {contactChannels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <motion.a
                key={channel.title}
                href={channel.href}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="group bg-white rounded-2xl p-5 sm:p-6 shadow-lg shadow-gray-200/50 border border-gray-100 hover:border-[#014090]/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#014090]/5 group-hover:bg-[#014090] flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon
                    size={18}
                    className="text-[#014090] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h4 className="font-bold text-[#17345B] text-sm mb-1">
                  {channel.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#014090] font-semibold mb-0.5 break-words">
                  {channel.value}
                </p>
                <p className="text-[11px] sm:text-xs text-gray-400">
                  {channel.sub}
                </p>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* ---------- FORM + INFO ---------- */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-sm"
            >
              {!submitted ? (
                <>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#17345B] mb-2">
                    Send us a message
                  </h2>
                  <p className="text-gray-500 text-sm mb-8">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-semibold text-[#17345B] mb-2 block">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#014090] transition-colors placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[#17345B] mb-2 block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#014090] transition-colors placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-semibold text-[#17345B] mb-2 block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 234 567 8900"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#014090] transition-colors placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[#17345B] mb-2 block">
                          Subject
                        </label>
                        <select
                          required
                          defaultValue=""
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#014090] transition-colors text-gray-600 cursor-pointer"
                        >
                          <option value="" disabled>
                            Select a topic
                          </option>
                          {subjects.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#17345B] mb-2 block">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us about the trip you're planning..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#014090] transition-colors resize-none placeholder:text-gray-400"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group flex items-center justify-center gap-2 bg-[#014090] hover:bg-[#F56907] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 disabled:opacity-70 w-full sm:w-auto"
                    >
                      {loading ? "Sending..." : "Send Message"}
                      {!loading && (
                        <Send
                          size={16}
                          className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"
                        />
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#17345B] mb-2">
                    Message sent successfully
                  </h3>
                  <p className="text-gray-500 text-sm max-w-sm">
                    Thanks for reaching out — a member of our team will get back
                    to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[#014090] font-semibold text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Side info */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="space-y-6"
            >
              {/* Office hours card */}
              <div className="bg-[#17345B] rounded-3xl p-7 sm:p-8 text-white">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-white/10 p-2.5 rounded-xl">
                    <Clock size={18} />
                  </div>
                  <h4 className="font-bold">Office Hours</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-gray-300">Monday – Friday</span>
                    <span className="font-semibold">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-gray-300">Saturday</span>
                    <span className="font-semibold">10:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="font-semibold text-gray-400">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick help card */}
              <div className="border border-gray-100 rounded-3xl p-7 sm:p-8">
                <h4 className="font-bold text-[#17345B] mb-2">
                  Looking for quick answers?
                </h4>
                <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                  Check our frequently asked questions before reaching out — you
                  might find what you need right away.
                </p>
                <a
                  href="/faq"
                  className="group inline-flex items-center gap-2 text-[#014090] font-semibold text-sm hover:text-[#F56907] transition-colors"
                >
                  Visit FAQ page
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              {/* Socials */}
              <div className="border border-gray-100 rounded-3xl p-7 sm:p-8">
                <h4 className="font-bold text-[#17345B] mb-5">
                  Follow our journeys
                </h4>
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
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#014090] hover:border-[#014090] transition-all duration-300"
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- MAP ---------- */}
      <section
        id="map"
        className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#17345B] mb-2">
                Find us on the map
              </h2>
              <p className="text-gray-500 text-sm max-w-md">
                Our base office is located in Skardu — the gateway to the
                Karakoram.
              </p>
            </div>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[#014090] font-semibold text-sm hover:text-[#F56907] transition-colors shrink-0"
            >
              Get Directions
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1_shCR2GBQSJDH40-v1_YhzY_GhqmCRK7&ehbc=2E312F"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              title="Office location map"
              className="w-full"
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}

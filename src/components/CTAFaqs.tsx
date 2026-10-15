"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, Phone, Mail, ArrowRight } from "lucide-react";

/* ---------------------------------- */
/* CTA SECTION                        */
/* ---------------------------------- */

const avatars = [
  "https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1557977275-d261356f567f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
];

const CTASection = () => {
  return (
    <section className="relative bg-[#17345B] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <p className="text-[#F56907] font-semibold text-sm tracking-wide mb-4">
              Ready when you are
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[3.3rem] font-bold text-white leading-[1.15] mb-6 max-w-xl">
              Your next trip shouldn't just be planned.
              <br className="hidden sm:block" /> It should be{" "}
              <span className="italic font-serif font-normal">earned.</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md mb-8">
              Tell us where you want to go, and we'll handle the logistics, the
              permits, and the details — so all that's left for you to do is
              show up and climb, trek, or wander.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button className="group bg-[#F56907] hover:bg-white text-white hover:text-[#17345B] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-lg transition-all duration-300 flex items-center gap-2">
                Plan My Trip
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-lg border border-white/25 hover:border-white/60 transition-colors">
                Talk to an Expert
              </button>
            </div>

            {/* Social proof row - understated */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-2 ring-[#17345B]"
                  >
                    <Image
                      src={src}
                      alt="Traveler"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-gray-300 text-xs sm:text-sm">
                <span className="text-white font-semibold">500+ travelers</span>{" "}
                planned their trip with us this year
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-72 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?q=80&w=1259&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="Traveler overlooking the Karakoram range"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17345B]/50 to-transparent" />
          </div>
        </div>
      </div>

      {/* Thin accent line at the base */}
      <div className="h-1 w-full bg-gradient-to-r from-[#014090] via-[#F56907] to-[#014090]" />
    </section>
  );
};

/* ---------------------------------- */
/* FAQ SECTION                        */
/* ---------------------------------- */

const faqs = [
  {
    question: "How far in advance should I book my trip?",
    answer:
      "For major expeditions like K2 or Gasherbrum, we recommend booking 6–8 months ahead due to permit processing times. Treks and cultural tours can often be arranged with 4–6 weeks notice.",
  },
  {
    question: "Do I need prior trekking experience?",
    answer:
      "It depends on the trip. Our Easy and Moderate-rated tours are suitable for first-timers with reasonable fitness. Challenging and Extreme expeditions require prior high-altitude experience, which we'll confirm during booking.",
  },
  {
    question: "What's included in the trip price?",
    answer:
      "Accommodation, meals during the trek, a certified guide, porters, permits, and ground transport are included. International flights and personal gear are not, though we provide a full checklist in advance.",
  },
  {
    question: "Can I customize an existing itinerary?",
    answer:
      "Yes. Most of our tours can be adjusted for duration, group size, or added stops. Reach out with what you have in mind and we'll put together a tailored plan within 48 hours.",
  },
  {
    question: "What happens if the weather affects our route?",
    answer:
      "Guide safety calls take priority over itineraries. In the rare case of rerouting, your guide will adjust in real time, and significant itinerary changes are communicated to you immediately.",
  },
];

const FAQItem = ({
  faq,
  isOpen,
  onClick,
  index,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex items-start sm:items-center justify-between gap-4 py-5 sm:py-6 text-left group"
      >
        <div className="flex items-start sm:items-center gap-4 sm:gap-5">
          <span className="text-xs sm:text-sm font-mono text-gray-400 pt-1 sm:pt-0 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`text-base sm:text-lg font-semibold transition-colors ${
              isOpen
                ? "text-[#014090]"
                : "text-[#17345B] group-hover:text-[#014090]"
            }`}
          >
            {faq.question}
          </span>
        </div>
        <span
          className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-[#014090] border-[#014090] rotate-45"
              : "border-gray-300 group-hover:border-[#014090]"
          }`}
        >
          <Plus
            size={14}
            className={
              isOpen ? "text-white" : "text-gray-500 group-hover:text-[#014090]"
            }
          />
        </span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed pb-5 sm:pb-6 pl-[2.1rem] sm:pl-[2.6rem] pr-8 max-w-xl">
          {faq.answer}
        </p>
      </motion.div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
          {/* Left: Intro + contact card */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#17345B] leading-tight mb-4">
              Questions, answered.
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
              Everything you need to know before booking. Can't find what you're
              looking for? Reach out directly.
            </p>

            <div className="border border-gray-200 rounded-2xl p-5 sm:p-6 space-y-4 max-w-sm">
              <a
                href="tel:+923001234567"
                className="flex items-center gap-3 group"
              >
                <div className="bg-[#014090]/5 p-2.5 rounded-lg group-hover:bg-[#014090] transition-colors">
                  <Phone
                    size={16}
                    className="text-[#014090] group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Call us</p>
                  <p className="text-sm font-semibold text-[#17345B]">
                    +92 300 123 4567
                  </p>
                </div>
              </a>

              <div className="h-px bg-gray-100" />

              <a
                href="mailto:hello@yourtours.com"
                className="flex items-center gap-3 group"
              >
                <div className="bg-[#014090]/5 p-2.5 rounded-lg group-hover:bg-[#014090] transition-colors">
                  <Mail
                    size={16}
                    className="text-[#014090] group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email us</p>
                  <p className="text-sm font-semibold text-[#17345B]">
                    hello@yourtours.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Accordion */}
          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTASection, FAQSection };

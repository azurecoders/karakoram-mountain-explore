"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";

/* ---------------------------------- */
/* CTA SECTION                        */
/* ---------------------------------- */

const CTASection = () => {
  return (
    <section className="relative bg-[#17345B] w-full flex flex-col lg:flex-row min-h-[80vh] overflow-hidden">
      {/* Left: Typography & Actions */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-32 py-20 lg:py-32 z-10">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-[1px] bg-[#F56907]" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#F56907]">
            Ready when you are
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold text-white leading-[1.05] tracking-tight mb-8">
          Your next trip shouldn't just be planned.{" "}
          <span className="block mt-2 lg:mt-4 text-[#F56907] italic font-serif font-light tracking-normal">
            It should be earned.
          </span>
        </h2>

        <p className="text-gray-300 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-xl mb-12">
          Tell us where you want to go, and we'll handle the logistics, the
          permits, and the details. All that's left for you to do is show up and
          climb.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
          <button className="group relative bg-[#F56907] text-white px-8 py-5 flex items-center justify-between sm:justify-center gap-6 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#17345B]">
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            <span className="relative z-10 text-xs font-bold uppercase tracking-[0.15em] group-hover:text-[#17345B] transition-colors duration-500">
              Plan My Trip
            </span>
            <ArrowRight
              size={18}
              className="relative z-10 group-hover:translate-x-1 group-hover:text-[#17345B] transition-all duration-500"
            />
          </button>

          <button className="group px-8 py-5 flex items-center justify-center gap-4 border border-white/20 hover:border-white/60 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white">
              Talk to an Expert
            </span>
          </button>
        </div>
      </div>

      {/* Right: Edge-to-Edge Cinematic Image */}
      <div className="relative w-full lg:w-[45%] h-[500px] lg:h-auto overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?q=80&w=1259&auto=format&fit=crop"
          alt="Climber overlooking the Karakoram range"
          fill
          className="object-cover transition-transform duration-[20s] hover:scale-110"
        />
        {/* Subtle gradient to merge the image seamlessly on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#17345B] via-[#17345B]/20 to-transparent opacity-80 lg:opacity-40" />
      </div>
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
    <div className="border-b border-[#17345B]/10">
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-6 py-8 sm:py-10 text-left group focus-visible:outline-none focus-visible:bg-gray-50"
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#014090] shrink-0 mt-2 sm:mt-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`text-xl sm:text-2xl lg:text-3xl font-light tracking-tight transition-colors duration-300 pr-4 ${
              isOpen
                ? "text-[#F56907]"
                : "text-[#17345B] group-hover:text-[#014090]"
            }`}
          >
            {faq.question}
          </span>
        </div>
        <span
          className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            isOpen
              ? "rotate-[135deg] bg-[#F56907] text-white"
              : "bg-gray-100 text-[#17345B] group-hover:bg-[#014090] group-hover:text-white"
          }`}
        >
          <Plus size={16} strokeWidth={2} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 sm:pl-[4.5rem] pr-8 lg:pr-24">
              <p className="text-gray-600 text-base lg:text-lg font-light leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 sm:px-12 lg:px-20 xl:px-32 py-24 lg:py-40 border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left: Editorial Intro & Integrated Contact (Sticky) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#17345B] leading-[1.1] tracking-tight mb-6">
                Logistics <br className="hidden lg:block" />& Details.
              </h2>
              <p className="text-gray-500 text-base lg:text-lg font-light leading-relaxed mb-16 lg:mb-24 max-w-sm">
                Everything you need to know before joining an expedition. If you
                require further clarification, reach out to our basecamp team
                directly.
              </p>

              {/* Integrated Contact List - Architectural style rather than a box */}
              <div className="space-y-10">
                <div className="group">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 group-hover:text-[#F56907] transition-colors">
                    Direct Line
                  </p>
                  <a
                    href="tel:+923001234567"
                    className="inline-flex items-center gap-4 text-xl sm:text-2xl font-light text-[#17345B] hover:text-[#014090] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#014090]"
                  >
                    +92 300 123 4567
                    <ArrowRight
                      size={18}
                      className="text-[#F56907] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </a>
                </div>

                <div className="group">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 group-hover:text-[#F56907] transition-colors">
                    Email Inquiry
                  </p>
                  <a
                    href="mailto:hello@yourtours.com"
                    className="inline-flex items-center gap-4 text-xl sm:text-2xl font-light text-[#17345B] hover:text-[#014090] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#014090]"
                  >
                    hello@yourtours.com
                    <ArrowRight
                      size={18}
                      className="text-[#F56907] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Accordion Index */}
          <div className="lg:col-span-8 lg:mt-0 mt-8 border-t border-[#17345B]/10 lg:border-none">
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

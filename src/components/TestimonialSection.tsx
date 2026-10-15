"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "United Kingdom",
    trip: "K2 Base Camp Expedition",
    image:
      "https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    rating: 5,
    review:
      "An absolutely life-changing experience. The guides were incredibly knowledgeable, safety was never compromised, and the views of K2 were beyond anything I could've imagined. This team truly understands how to craft an unforgettable journey.",
  },
  {
    id: 2,
    name: "James Carter",
    location: "Canada",
    trip: "Fairy Meadows Trek",
    image:
      "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    rating: 5,
    review:
      "From start to finish, everything was perfectly organized. The local insights and personal attention made this trek feel completely unique. I've traveled extensively, but this was by far one of the best-managed trips I've been on.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Spain",
    trip: "Hunza Valley Cultural Tour",
    image:
      "https://images.unsplash.com/photo-1557977275-d261356f567f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    rating: 5,
    review:
      "The warmth of the local culture combined with breathtaking landscapes made this tour unforgettable. Our guide shared stories and history that brought every village to life. I'd book with them again in a heartbeat.",
  },
  {
    id: 4,
    name: "Michael Chen",
    location: "Australia",
    trip: "Rush Lake Trek",
    image:
      "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    rating: 5,
    review:
      "Professional, passionate, and precise — this team exceeded every expectation. The logistics were flawless even in remote terrain, and the camaraderie among the group made the challenging trek feel effortless.",
  },
];

const TestimonialSection = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  const goTo = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(next, 5500);
    return () => clearInterval(interval);
  }, [autoPlay, next]);

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 60 : -60,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -60 : 60,
    }),
  };

  const current = testimonials[active];

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#17345B] to-[#0d2142]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F56907]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#014090]/30 rounded-full blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm">
            <Star size={14} className="text-[#F56907]" fill="#F56907" />
            <span className="text-xs font-semibold text-white tracking-wide uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Stories From Our Travelers
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Real experiences from adventurers who trusted us with their journey
            of a lifetime.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          {/* Decorative quote icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0 bg-[#F56907] rounded-2xl p-3 sm:p-4 shadow-xl shadow-[#F56907]/30 z-10"
          >
            <Quote size={24} className="text-white fill-white" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden min-h-[380px] sm:min-h-[340px] flex items-center"
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                  {/* Avatar */}
                  <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 shrink-0">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden ring-4 ring-[#014090]/10 shrink-0">
                      <Image
                        src={current.image}
                        alt={current.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="sm:hidden">
                      <p className="font-bold text-[#17345B]">{current.name}</p>
                      <p className="text-xs text-gray-500">
                        {current.location}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-[#F56907] text-[#F56907]"
                        />
                      ))}
                    </div>

                    <p className="text-[#17345B] text-base sm:text-lg lg:text-xl leading-relaxed font-medium mb-6">
                      "{current.review}"
                    </p>

                    <div className="hidden sm:flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="font-bold text-[#17345B] text-lg">
                          {current.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {current.location}
                        </p>
                      </div>
                      <span className="bg-[#014090]/5 text-[#014090] text-xs font-semibold px-3 py-1.5 rounded-full">
                        {current.trip}
                      </span>
                    </div>

                    <div className="sm:hidden pt-4 border-t border-gray-100">
                      <span className="bg-[#014090]/5 text-[#014090] text-xs font-semibold px-3 py-1.5 rounded-full">
                        {current.trip}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 sm:gap-6 mt-8 sm:mt-10">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="bg-white/10 hover:bg-[#F56907] border border-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="relative h-2 rounded-full transition-all duration-500 overflow-hidden"
                  style={{ width: i === active ? "28px" : "8px" }}
                >
                  <span
                    className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                      i === active ? "bg-[#F56907]" : "bg-white/30"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="bg-white/10 hover:bg-[#F56907] border border-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Pause, Play, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "United Kingdom",
    trip: "K2 Base Camp Expedition",
    image:
      "https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?q=80&w=764&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=800&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1557977275-d261356f567f?w=800&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=687&auto=format&fit=crop",
    rating: 5,
    review:
      "Professional, passionate, and precise — this team exceeded every expectation. The logistics were flawless even in remote terrain, and the camaraderie among the group made the challenging trek feel effortless.",
  },
];

const ROTATE_MS = 8000;
const pad = (n: number) => String(n).padStart(2, "0");

const TestimonialSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [engaged, setEngaged] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const playing = !paused && !engaged && !reduceMotion;

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(
      () => setActive((p) => (p + 1) % testimonials.length),
      ROTATE_MS,
    );
    return () => clearTimeout(t);
  }, [playing, active]);

  const goTo = (index: number) => {
    setActive((index + testimonials.length) % testimonials.length);
    setPaused(true);
  };

  return (
    <section
      aria-roledescription="carousel"
      className="relative bg-[#001A43] text-white overflow-hidden py-24 md:py-32 selection:bg-[#FF6B00] selection:text-white"
      onMouseEnter={() => setEngaged(true)}
      onMouseLeave={() => setEngaged(false)}
      onFocus={() => setEngaged(true)}
      onBlur={() => setEngaged(false)}
    >
      {/* Decorative oversized background quote */}
      <span
        aria-hidden="true"
        className="absolute top-10 left-10 md:top-20 md:left-20 text-[20rem] font-serif leading-none text-white/[0.03] select-none pointer-events-none"
      >
        &ldquo;
      </span>

      <div className="container relative mx-auto px-6 lg:px-12 max-w-7xl z-10">
        {/* Editorial Header */}
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="mb-6 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF6B00]">
              <span aria-hidden="true" className="h-px w-8 bg-[#FF6B00]" />
              Traveler Journals
            </p>
            <h2 className="font-light text-4xl md:text-6xl lg:text-7xl tracking-tight text-white/90">
              Stories from <br className="hidden md:block" />
              <span className="font-serif italic text-white">
                our explorers.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <button
                onClick={() => goTo(active - 1)}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white hover:text-[#001A43] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => goTo(active + 1)}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white hover:text-[#001A43] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] cursor-pointer"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </header>

        {/* Main Layout: Image Left, Content Right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Portrait Image */}
          <div className="lg:col-span-4 relative">
            <div className="relative aspect-[3/4] w-full sm:w-2/3 lg:w-full mx-auto overflow-hidden rounded-[2rem] bg-white/5">
              {testimonials.map((t, i) => (
                <Image
                  key={t.id}
                  src={t.image}
                  alt={i === active ? `Portrait of ${t.name}` : ""}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  aria-hidden={i !== active}
                  className={`object-cover transition-all duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    i === active
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                />
              ))}
            </div>

            {/* Minimalist Progress Indicators */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-1 transition-all duration-500 rounded-full ${
                    active === i
                      ? "h-8 bg-[#FF6B00]"
                      : "h-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Quote & Details */}
          <div className="lg:col-span-8 relative h-[380px] sm:h-[300px] lg:h-[400px]">
            {testimonials.map((t, i) => {
              const isActive = active === i;
              return (
                <div
                  key={t.id}
                  aria-hidden={!isActive}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-[1s] ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isActive
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 translate-y-8 invisible"
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-8">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star
                        key={s}
                        size={16}
                        className="fill-[#FF6B00] text-[#FF6B00]"
                      />
                    ))}
                  </div>

                  <blockquote className="mb-10">
                    <p className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-[1.4] text-white/95 tracking-wide">
                      &ldquo;{t.review}&rdquo;
                    </p>
                  </blockquote>

                  <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
                    <div>
                      <p className="font-serif text-xl md:text-2xl text-white mb-1">
                        {t.name}
                      </p>
                      <p className="text-sm text-white/50">{t.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6B00] mb-1">
                        Journey
                      </p>
                      <p className="text-sm text-white/80">{t.trip}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Play/Pause Control */}
        <div className="mt-12 flex justify-center lg:justify-end">
          {!reduceMotion && (
            <button
              onClick={() => setPaused(!paused)}
              className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-300"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 group-hover:border-white/50 transition-colors">
                {paused ? (
                  <Play size={10} className="fill-current ml-0.5" />
                ) : (
                  <Pause size={10} className="fill-current" />
                )}
              </span>
              {paused ? "Resume" : "Pause"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mountain,
  CalendarDays,
  ArrowRight,
  Compass,
} from "lucide-react";

const destinations = [
  {
    id: 1,
    title: "Hunza Valley",
    tagline: "Where Mountains Touch the Sky",
    image:
      "https://images.unsplash.com/photo-1783981486603-01e972384d73?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    altitude: "2,438m",
    bestSeason: "Apr – Oct",
    treks: "12 Treks",
  },
  {
    id: 2,
    title: "Skardu",
    tagline: "Gateway to the Giants",
    image:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    altitude: "2,228m",
    bestSeason: "May – Sep",
    treks: "18 Treks",
  },
  {
    id: 3,
    title: "Fairy Meadows",
    tagline: "Heaven on Earth",
    image:
      "https://images.unsplash.com/photo-1762386084184-022a12e08b37?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    altitude: "3,300m",
    bestSeason: "Jun – Sep",
    treks: "8 Treks",
  },
  {
    id: 4,
    title: "Deosai Plains",
    tagline: "Land of the Giants",
    image:
      "https://images.unsplash.com/photo-1437209484568-e63b90a34f8b?q=80&w=1189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    altitude: "4,114m",
    bestSeason: "Jul – Sep",
    treks: "6 Treks",
  },
  {
    id: 5,
    title: "Shimshal",
    tagline: "The Hidden Valley",
    image:
      "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    altitude: "3,100m",
    bestSeason: "Jun – Aug",
    treks: "5 Treks",
  },
];

const ExploreDestinations = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#014090]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#F56907]/10 border border-[#F56907]/20 rounded-full px-4 py-1.5 mb-5">
            <Compass size={14} className="text-[#F56907]" />
            <span className="text-xs font-semibold text-[#F56907] tracking-wide uppercase">
              Top Destinations
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17345B] leading-tight mb-4">
            Explore The Karakoram
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Hover or tap each destination to uncover what makes it
            unforgettable.
          </p>
        </motion.div>

        {/* Expanding Panels */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 h-[640px] sm:h-[600px] lg:h-[520px] w-full">
          {destinations.map((dest, i) => {
            const isActive = active === i;
            return (
              <div
                key={dest.id}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
                  isActive ? "flex-[4]" : "flex-[1]"
                }`}
              >
                {/* Image */}
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover transition-transform duration-700"
                />

                {/* Overlay gradient */}
                <div
                  className={`absolute inset-0 transition-all duration-700 ${
                    isActive
                      ? "bg-gradient-to-t from-[#17345B]/95 via-[#17345B]/30 to-transparent"
                      : "bg-gradient-to-t from-[#17345B]/80 via-[#17345B]/10 to-transparent lg:bg-gradient-to-b lg:from-[#17345B]/20 lg:via-transparent lg:to-[#17345B]/70"
                  }`}
                />

                {/* Index number badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white text-xs font-bold z-10">
                  0{i + 1}
                </div>

                {/* Collapsed label - mobile (horizontal) */}
                {!isActive && (
                  <div className="lg:hidden absolute inset-0 flex items-center justify-between px-5 sm:px-6">
                    <span className="text-white font-bold text-base sm:text-lg">
                      {dest.title}
                    </span>
                    <ArrowRight size={18} className="text-white/60" />
                  </div>
                )}

                {/* Collapsed label - desktop (vertical rotated) */}
                {!isActive && (
                  <div className="hidden lg:flex absolute inset-0 items-end justify-center pb-10">
                    <span className="text-white font-bold text-lg tracking-wide whitespace-nowrap -rotate-90 origin-center">
                      {dest.title}
                    </span>
                  </div>
                )}

                {/* Expanded content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                      className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7 lg:p-8 z-10"
                    >
                      <span className="inline-flex items-center gap-1.5 text-[#F56907] text-xs sm:text-sm font-semibold mb-2 w-fit">
                        <MapPin size={14} />
                        Karakoram Range
                      </span>
                      <h3 className="text-white text-2xl sm:text-3xl font-bold mb-1.5 leading-tight">
                        {dest.title}
                      </h3>
                      <p className="text-white/75 text-sm mb-5 max-w-xs">
                        {dest.tagline}
                      </p>

                      {/* Stats row */}
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
                        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5 text-xs text-white">
                          <Mountain size={13} />
                          <span>{dest.altitude}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5 text-xs text-white">
                          <CalendarDays size={13} />
                          <span>{dest.bestSeason}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-[#F56907] rounded-full px-3 py-1.5 text-xs text-white font-semibold">
                          <span>{dest.treks}</span>
                        </div>
                      </div>

                      <button className="group/btn flex items-center gap-2 bg-white text-[#17345B] font-semibold text-sm px-5 py-3 rounded-full w-fit hover:bg-[#014090] hover:text-white transition-all duration-300">
                        Explore Destination
                        <ArrowRight
                          size={16}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreDestinations;

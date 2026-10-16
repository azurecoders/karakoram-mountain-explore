"use client";

import {
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Play,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center bg-[#050505] overflow-hidden selection:bg-[#F56907] selection:text-white">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1565073182887-6bcefbe225b1?q=80&w=2500&auto=format&fit=crop"
          alt="Karakoram mountain landscape"
          fill
          priority
          className="object-cover scale-[1.02] transform-gpu motion-safe:animate-[kenburns_20s_ease-out_infinite_alternate]"
          sizes="100vw"
        />
        {/* Refined overlays: Subtle vignette and bottom fade for UI readability */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050505]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Main Editorial Typography */}
      <div className="relative z-10 flex flex-col items-center text-center w-full px-4 mt-[-10vh] md:mt-[-15vh]">
        <div className="overflow-hidden mb-6">
          <span className="block text-[10px] md:text-xs font-semibold uppercase tracking-[0.4em] text-white/70 animate-fade-in-up">
            Exclusive Karakoram Expeditions
          </span>
        </div>

        <h1 className="flex flex-col items-center text-white drop-shadow-2xl">
          <span className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-medium tracking-[-0.04em] leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
            ELEVATE
          </span>
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif italic font-light tracking-wide text-white/90 mt-2 md:mt-0">
            your perspective.
          </span>
        </h1>

        {/* Minimalist CTAs */}
        <div className="flex items-center gap-6 md:gap-10 mt-12 md:mt-16 opacity-0 animate-fade-in-up animation-delay-300">
          <button className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-70">
            <span className="h-[1px] w-8 bg-white transition-all duration-300 group-hover:w-12" />
            Discover
          </button>

          <button className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:text-[#F56907]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 backdrop-blur-sm transition-all duration-300 group-hover:border-[#F56907] group-hover:bg-[#F56907]/10">
              <Play size={14} className="ml-1 fill-current" />
            </div>
            Watch Film
          </button>
        </div>
      </div>

      {/* Floating Glassmorphism Booking Panel */}
      <div className="absolute bottom-6 md:bottom-12 w-full px-4 md:px-8 z-20 flex justify-center">
        <div className="w-full max-w-5xl rounded-[2rem] md:rounded-full bg-white/10 border border-white/20 backdrop-blur-xl p-2 md:p-3 shadow-2xl flex flex-col md:flex-row md:items-center">
          <div className="flex flex-col md:flex-row flex-1 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {/* Destination Input */}
            <div className="flex-1 p-4 md:px-8 relative group">
              <label
                htmlFor="destination"
                className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/60 mb-1.5"
              >
                <MapPin size={12} strokeWidth={2} />
                Destination
              </label>
              <input
                id="destination"
                type="text"
                placeholder="Where to?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent text-white text-base md:text-lg font-medium outline-none placeholder:text-white/40 focus:placeholder:text-transparent transition-all"
              />
            </div>

            {/* Date Input */}
            <div className="flex-1 p-4 md:px-8 relative group">
              <label
                htmlFor="date"
                className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/60 mb-1.5"
              >
                <Calendar size={12} strokeWidth={2} />
                Date
              </label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent text-white text-base md:text-lg font-medium outline-none appearance-none cursor-pointer [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50 hover:[&::-webkit-calendar-picker-indicator]:opacity-100"
              />
            </div>

            {/* Guests Select */}
            <div className="flex-1 p-4 md:px-8 relative group">
              <label
                htmlFor="guests"
                className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/60 mb-1.5"
              >
                <Users size={12} strokeWidth={2} />
                Guests
              </label>
              <div className="relative">
                <select
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent text-white text-base md:text-lg font-medium outline-none cursor-pointer appearance-none"
                >
                  <option value="" disabled className="text-gray-900">
                    Add guests
                  </option>
                  <option value="1" className="text-gray-900">
                    1 Explorer
                  </option>
                  <option value="2" className="text-gray-900">
                    2 Explorers
                  </option>
                  <option value="3-5" className="text-gray-900">
                    3-5 Explorers
                  </option>
                  <option value="6+" className="text-gray-900">
                    6+ Explorers
                  </option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="mt-2 md:mt-0 w-full md:w-16 h-14 md:h-16 flex-shrink-0 bg-[#F56907] hover:bg-[#d45804] text-white rounded-2xl md:rounded-full flex items-center justify-center transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#F56907] focus:ring-offset-2 focus:ring-offset-[#050505] group"
          >
            <span className="md:hidden font-semibold uppercase tracking-widest text-sm mr-2">
              Search
            </span>
            <ArrowRight
              size={20}
              className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-rotate-45"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>

      {/* Global CSS for Animations (Add to your globals.css or Tailwind config) */}
      <style jsx global>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes kenburns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </section>
  );
};

export default Hero;

"use client";

import { CTASection, FAQSection } from "@/components/CTAFaqs";
import DiscoverExperiences from "@/components/DiscoverExperiences";
import ExploreDestinations from "@/components/ExploreDestinations";
import MomentsEmotions from "@/components/MomentsEmotions";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Search,
  Mountain,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-image-new.jpg"
            alt="Scenic mountain landscape"
            fill
            priority
            className="object-cover"
          />
          {/* Gradient Overlay for depth & readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex items-center container mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-12">
          <div className="max-w-2xl space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium animate-fade-in">
              <Mountain size={16} className="text-[#F56907]" />
              <span>Premium Karakoram Expeditions</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.4] text-white tracking-tight">
              Your Journey,{" "}
              <span className="block mt-2">
                Our{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-white bg-gradient-to-r from-[#F56907] to-[#ff8534] px-4 sm:px-6 py-1.5 rounded-2xl shadow-lg shadow-orange-500/30">
                    Passion.
                  </span>
                </span>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-lg leading-relaxed">
              Discover the untouched beauty of the Karakoram Mountains with our
              expertly crafted expeditions, designed for explorers at heart.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="group bg-[#014090] hover:bg-[#012d66] transition-all duration-300 text-white font-semibold py-3.5 px-6 sm:py-4 sm:px-7 rounded-full flex items-center gap-3 shadow-lg shadow-blue-900/40 hover:shadow-xl hover:shadow-blue-900/50 hover:-translate-y-0.5 cursor-pointer">
                <span className="text-sm sm:text-base">
                  Explore Destinations
                </span>
                <div className="bg-white rounded-full p-1.5 sm:p-2 text-[#014090] group-hover:text-[#F56907] transition-colors duration-300 group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </div>
              </button>

              <button className="text-white font-semibold py-3.5 px-6 sm:py-4 sm:px-7 rounded-full border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-sm sm:text-base cursor-pointer">
                Watch Video
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-6 text-white">
              <div>
                <p className="text-2xl sm:text-3xl font-bold">15+</p>
                <p className="text-xs sm:text-sm text-gray-300">
                  Years Experience
                </p>
              </div>
              <div className="w-px h-10 bg-white/30" />
              <div>
                <p className="text-2xl sm:text-3xl font-bold">500+</p>
                <p className="text-xs sm:text-sm text-gray-300">
                  Happy Travelers
                </p>
              </div>
              <div className="w-px h-10 bg-white/30" />
              <div>
                <p className="text-2xl sm:text-3xl font-bold">50+</p>
                <p className="text-xs sm:text-sm text-gray-300">Destinations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search / Filter Panel */}
        <div className="relative z-20 container mx-auto px-6 sm:px-8 lg:px-12 pb-10 sm:pb-14">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-full shadow-2xl p-4 sm:p-3 border border-white/50">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-2">
              {/* Destination */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3 sm:py-2 rounded-xl sm:rounded-full hover:bg-gray-50 transition-colors">
                <div className="bg-[#014090]/10 p-2 rounded-full shrink-0">
                  <MapPin size={18} className="text-[#014090]" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block text-xs font-medium text-gray-500">
                    Destination
                  </label>
                  <input
                    type="text"
                    placeholder="Where to go?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full text-sm font-semibold text-gray-800 placeholder:text-gray-400 placeholder:font-normal outline-none bg-transparent"
                  />
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-gray-200" />

              {/* Date */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3 sm:py-2 rounded-xl sm:rounded-full hover:bg-gray-50 transition-colors">
                <div className="bg-[#014090]/10 p-2 rounded-full shrink-0">
                  <Calendar size={18} className="text-[#014090]" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block text-xs font-medium text-gray-500">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full text-sm font-semibold text-gray-800 outline-none bg-transparent"
                  />
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-gray-200" />

              {/* Guests */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3 sm:py-2 rounded-xl sm:rounded-full hover:bg-gray-50 transition-colors">
                <div className="bg-[#014090]/10 p-2 rounded-full shrink-0">
                  <Users size={18} className="text-[#014090]" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block text-xs font-medium text-gray-500">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full text-sm font-semibold text-gray-800 outline-none bg-transparent cursor-pointer"
                  >
                    <option value="">Select guests</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3-5">3-5 People</option>
                    <option value="6+">6+ People</option>
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button className="bg-gradient-to-r from-[#F56907] to-[#ff8534] hover:shadow-lg hover:shadow-orange-500/40 transition-all duration-300 text-white font-semibold py-4 px-8 rounded-xl sm:rounded-full flex items-center justify-center gap-2 shrink-0">
                <Search size={18} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <MomentsEmotions />
      <WhyChooseUs />
      <DiscoverExperiences />
      <TestimonialSection />
      <ExploreDestinations />
      <CTASection />
      <FAQSection />
    </>
  );
}

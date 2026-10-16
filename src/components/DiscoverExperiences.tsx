"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Clock, Mountain, Star, ArrowRight } from "lucide-react";

const categories = [
  { id: "all", label: "All Experiences" },
  { id: "expeditions", label: "Expeditions" },
  { id: "trekking", label: "Trekking" },
  { id: "tours", label: "Tours" },
  { id: "outdoor", label: "Outdoor Events" },
];

const experiences = [
  {
    id: 1,
    category: "expeditions",
    title: "K2 Base Camp Expedition",
    location: "Baltoro Glacier, Gilgit-Baltistan",
    image:
      "https://images.unsplash.com/photo-1565073182887-6bcefbe225b1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    duration: "18 Days",
    groupSize: "8-12",
    difficulty: "Challenging",
    rating: 4.9,
    reviews: 124,
    price: "1,850",
  },
  {
    id: 2,
    category: "trekking",
    title: "Fairy Meadows Trek",
    location: "Nanga Parbat, Diamer",
    image:
      "https://images.unsplash.com/photo-1566679056462-2075774c8c07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    duration: "5 Days",
    groupSize: "4-10",
    difficulty: "Moderate",
    rating: 4.8,
    reviews: 203,
    price: "480",
  },
  {
    id: 3,
    category: "tours",
    title: "Hunza Valley Cultural Tour",
    location: "Hunza, Gilgit-Baltistan",
    image:
      "https://images.unsplash.com/photo-1578589591337-864142c03335?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    duration: "7 Days",
    groupSize: "2-15",
    difficulty: "Easy",
    rating: 4.9,
    reviews: 312,
    price: "650",
  },
  {
    id: 4,
    category: "outdoor",
    title: "Deosai Plains Camping",
    location: "Deosai National Park",
    image:
      "https://images.unsplash.com/photo-1594717527389-a590b56e8d0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    duration: "3 Days",
    groupSize: "6-20",
    difficulty: "Easy",
    rating: 4.7,
    reviews: 156,
    price: "320",
  },
  {
    id: 5,
    category: "trekking",
    title: "Rush Lake Trek",
    location: "Nagar Valley",
    image:
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    duration: "8 Days",
    groupSize: "4-8",
    difficulty: "Challenging",
    rating: 4.8,
    reviews: 98,
    price: "720",
  },
  {
    id: 6,
    category: "expeditions",
    title: "Gasherbrum II Expedition",
    location: "Karakoram Range",
    image:
      "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    duration: "35 Days",
    groupSize: "6-10",
    difficulty: "Extreme",
    rating: 5.0,
    reviews: 47,
    price: "4,200",
  },
];

const DiscoverExperiences = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredExperiences =
    activeCategory === "all"
      ? experiences
      : experiences.filter((exp) => exp.category === activeCategory);

  return (
    <section className="bg-[#F8FAFC] py-20 md:py-32 selection:bg-[#014090] selection:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Editorial Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-[#F56907] font-bold tracking-widest text-xs uppercase mb-3 block">
              Curated Adventures
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#17345B] tracking-tight leading-tight">
              Discover the Karakoram
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-xl">
              Immerse yourself in our premier selection of expeditions, treks,
              and cultural tours. Find your next unforgettable journey.
            </p>
          </div>

          {/* Minimalist Pill Filters */}
          <div
            className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x"
            role="tablist"
            aria-label="Filter experiences"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#014090] snap-start ${
                    isActive
                      ? "bg-[#17345B] text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-100 hover:text-[#17345B]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Premium Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((exp) => (
            <a
              href={`#tour-${exp.id}`}
              key={exp.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#014090]"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 overflow-hidden bg-gray-100">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[11px] font-bold text-[#17345B] uppercase tracking-wider shadow-sm">
                  {categories.find((c) => c.id === exp.category)?.label}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta Header */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <MapPin size={14} className="shrink-0" />
                    <span className="text-sm font-medium line-clamp-1">
                      {exp.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-md">
                    <Star
                      size={12}
                      className="text-[#F56907] fill-[#F56907] shrink-0"
                    />
                    <span className="text-xs font-bold text-[#F56907]">
                      {exp.rating}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#17345B] leading-tight mb-4 group-hover:text-[#014090] transition-colors line-clamp-1">
                  {exp.title}
                </h3>

                {/* Clean Feature Row */}
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <Clock size={16} className="text-gray-400 shrink-0" />
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-gray-300" />
                  <div className="flex items-center gap-1.5">
                    <Mountain size={16} className="text-gray-400 shrink-0" />
                    <span className="font-medium">{exp.difficulty}</span>
                  </div>
                </div>

                {/* Elegant Footer */}
                <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-0.5">
                      Starting from
                    </span>
                    <span className="text-lg font-extrabold text-[#17345B]">
                      Rs. {exp.price}
                    </span>
                  </div>

                  {/* Circular Hover Button */}
                  <div className="w-10 h-10 rounded-full bg-gray-50 text-[#17345B] flex items-center justify-center group-hover:bg-[#014090] group-hover:text-white transition-colors duration-300">
                    <ArrowRight
                      size={18}
                      className="transform group-hover:translate-x-0.5 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredExperiences.length === 0 && (
          <div className="text-center py-24 bg-white rounded-2xl border border-gray-100 shadow-sm mt-8">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-[#17345B] mb-2">
              No experiences found
            </h3>
            <p className="text-gray-500">
              We couldn't find any journeys matching this category.
            </p>
          </div>
        )}

        {/* View All CTA */}
        <div className="mt-12 flex justify-center border-t border-gray-200 pt-10">
          <button className="px-6 py-3 bg-white border border-gray-300 text-[#17345B] font-medium rounded-lg hover:bg-gray-50 hover:text-[#014090] hover:border-gray-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#014090] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 cursor-pointer">
            View Complete Catalogue
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverExperiences;

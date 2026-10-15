"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Users,
  Star,
  TrendingUp,
  ArrowRight,
  Mountain,
  Compass,
  Tent,
  Map,
} from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: Compass },
  { id: "expeditions", label: "Expeditions", icon: Mountain },
  { id: "trekking", label: "Trekking", icon: Tent },
  { id: "tours", label: "Tours", icon: Map },
  { id: "outdoor", label: "Outdoor Events", icon: TrendingUp },
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

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-50 text-green-700 border-green-200",
  Moderate: "bg-amber-50 text-amber-700 border-amber-200",
  Challenging: "bg-orange-50 text-orange-700 border-orange-200",
  Extreme: "bg-red-50 text-red-700 border-red-200",
};

const DiscoverExperiences = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredExperiences =
    activeCategory === "all"
      ? experiences
      : experiences.filter((exp) => exp.category === activeCategory);

  return (
    <section className="relative bg-gradient-to-b from-gray-50/50 to-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#014090]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F56907]/10 border border-[#F56907]/20 rounded-full px-4 py-1.5 mb-5">
            <Compass size={14} className="text-[#F56907]" />
            <span className="text-xs font-semibold text-[#F56907] tracking-wide uppercase">
              Explore With Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17345B] leading-tight mb-4">
            Discover Your Next Adventure
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            From high-altitude expeditions to cultural tours, find the perfect
            journey tailored to your sense of adventure.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? "bg-[#014090] text-white border-[#014090] shadow-lg shadow-[#014090]/25"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#014090]/30 hover:text-[#014090]"
                }`}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-60 overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Difficulty badge */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-sm ${difficultyColors[exp.difficulty]}`}
                >
                  {exp.difficulty}
                </div>

                {/* Rating badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-[#17345B]">
                  <Star size={12} className="fill-[#F56907] text-[#F56907]" />
                  {exp.rating}
                </div>

                {/* Location on image */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-xs font-medium">
                  <MapPin size={13} />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#17345B] mb-3 leading-snug group-hover:text-[#014090] transition-colors">
                  {exp.title}
                </h3>

                {/* Details row */}
                <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#014090]" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={14} className="text-[#014090]" />
                    <span>{exp.groupSize} People</span>
                  </div>
                  <div className="flex items-center gap-1 ml-auto text-gray-400">
                    ({exp.reviews} reviews)
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400">Starting from</span>
                    <p className="text-xl font-bold text-[#17345B]">
                      Rs. {exp.price}
                      <span className="text-xs font-normal text-gray-400">
                        {" "}
                        /person
                      </span>
                    </p>
                  </div>
                  <button className="group/btn flex items-center gap-1.5 bg-[#014090]/5 hover:bg-[#F56907] text-[#014090] hover:text-white font-semibold text-sm px-4 py-2.5 rounded-full transition-all duration-300">
                    Details
                    <ArrowRight
                      size={14}
                      className="group-hover/btn:translate-x-0.5 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="flex justify-center mt-12 sm:mt-14">
          <button className="group flex items-center gap-2 border-2 border-[#014090] text-[#014090] hover:bg-[#014090] hover:text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300">
            View All Experiences
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverExperiences;

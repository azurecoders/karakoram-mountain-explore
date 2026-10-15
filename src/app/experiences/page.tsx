"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  SlidersHorizontal,
  Heart,
  Star,
  MapPin,
  Clock,
  Users,
  Mountain,
  Tent,
  Map as MapIcon,
  TrendingUp,
  ArrowRight,
  X,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

/* ---------------------------------- */
/* DATA                                */
/* ---------------------------------- */

const categories = [
  { id: "expeditions", label: "Expeditions", icon: Mountain },
  { id: "trekking", label: "Trekking", icon: Tent },
  { id: "tours", label: "Tours", icon: MapIcon },
  { id: "outdoor", label: "Outdoor Events", icon: TrendingUp },
];

const difficulties = ["Easy", "Moderate", "Challenging", "Extreme"];

const experiences = [
  {
    id: 1,
    category: "expeditions",
    title: "K2 Base Camp Expedition",
    slug: "k2-base-camp-expedition",
    location: "Baltoro Glacier, Gilgit-Baltistan",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    duration: 18,
    groupSize: "8-12",
    difficulty: "Challenging",
    rating: 4.9,
    reviews: 124,
    price: 1850,
    code: "KT-K2-018",
  },
  {
    id: 2,
    category: "trekking",
    title: "Fairy Meadows Trek",
    slug: "fairy-meadows-trek",
    location: "Nanga Parbat, Diamer",
    image:
      "https://adventurepakistan.com/wp-content/uploads/2025/09/fairy-meadows-Trek-11.jpg",
    duration: 5,
    groupSize: "4-10",
    difficulty: "Moderate",
    rating: 4.8,
    reviews: 203,
    price: 480,
    code: "KT-FM-005",
  },
  {
    id: 3,
    category: "tours",
    title: "Hunza Valley Cultural Tour",
    slug: "hunza-valley-cultural-tour",
    location: "Hunza, Gilgit-Baltistan",
    image:
      "https://images.unsplash.com/photo-1702936387071-3d44e76dccfe?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    duration: 7,
    groupSize: "2-15",
    difficulty: "Easy",
    rating: 4.9,
    reviews: 312,
    price: 650,
    code: "KT-HV-007",
  },
  {
    id: 4,
    category: "outdoor",
    title: "Deosai Plains Camping",
    slug: "deosai-plains-camping",
    location: "Deosai National Park",
    image:
      "https://images.unsplash.com/photo-1602391833977-358a52198938?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    duration: 3,
    groupSize: "6-20",
    difficulty: "Easy",
    rating: 4.7,
    reviews: 156,
    price: 320,
    code: "KT-DP-003",
  },
  {
    id: 5,
    category: "trekking",
    title: "Rush Lake Trek",
    slug: "rush-lake-trek",
    location: "Nagar Valley",
    image:
      "https://images.unsplash.com/photo-1559310589-2673bfe16970?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    duration: 8,
    groupSize: "4-8",
    difficulty: "Challenging",
    rating: 4.8,
    reviews: 98,
    price: 720,
    code: "KT-RL-008",
  },
  {
    id: 6,
    category: "expeditions",
    title: "Gasherbrum II Expedition",
    slug: "gasherbrum-ii-expedition",
    location: "Karakoram Range",
    image:
      "https://images.unsplash.com/photo-1787035957656-4fdf60760685?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    duration: 35,
    groupSize: "6-10",
    difficulty: "Extreme",
    rating: 5.0,
    reviews: 47,
    price: 4200,
    code: "KT-G2-035",
  },
  {
    id: 7,
    category: "tours",
    title: "Skardu Heritage Tour",
    slug: "skardu-heritage-tour",
    location: "Skardu, Gilgit-Baltistan",
    image:
      "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    duration: 6,
    groupSize: "2-12",
    difficulty: "Easy",
    rating: 4.6,
    reviews: 87,
    price: 540,
    code: "KT-SK-006",
  },
  {
    id: 8,
    category: "trekking",
    title: "Shimshal Pass Trek",
    slug: "shimshal-pass-trek",
    location: "Shimshal Valley",
    image:
      "https://images.unsplash.com/photo-1783981486603-01e972384d73?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    duration: 10,
    groupSize: "4-8",
    difficulty: "Challenging",
    rating: 4.7,
    reviews: 62,
    price: 890,
    code: "KT-SP-010",
  },
  {
    id: 9,
    category: "outdoor",
    title: "Naltar Valley Camping",
    slug: "naltar-valley-camping",
    location: "Naltar, Gilgit",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    duration: 2,
    groupSize: "6-20",
    difficulty: "Easy",
    rating: 4.5,
    reviews: 134,
    price: 210,
    code: "KT-NV-002",
  },
];

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-50 text-green-700 border-green-200",
  Moderate: "bg-amber-50 text-amber-700 border-amber-200",
  Challenging: "bg-orange-50 text-orange-700 border-orange-200",
  Extreme: "bg-red-50 text-red-700 border-red-200",
};

/* ---------------------------------- */
/* TICKET-STYLE CARD                   */
/* ---------------------------------- */

const ExperienceCard = ({ exp }: { exp: (typeof experiences)[0] }) => {
  const [liked, setLiked] = useState(false);
  const category = categories.find((c) => c.id === exp.category);
  const CategoryIcon = category?.icon ?? MapIcon;

  return (
    <div className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-1.5 overflow-visible">
      {/* Image */}
      <div className="relative h-52 sm:h-56 rounded-t-2xl sm:rounded-t-3xl overflow-hidden">
        <Image
          src={exp.image}
          alt={exp.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

        {/* Wishlist */}
        <button
          onClick={() => setLiked(!liked)}
          aria-label="Save to wishlist"
          className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-transform hover:scale-110 z-10"
        >
          <Heart
            size={16}
            className={
              liked ? "fill-[#F56907] text-[#F56907]" : "text-gray-500"
            }
          />
        </button>

        {/* Category chip */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[11px] font-bold text-[#17345B] z-10">
          <CategoryIcon size={12} className="text-[#014090]" />
          {category?.label}
        </div>

        {/* Location + rating on image */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between z-10">
          <div className="flex items-center gap-1.5 text-white text-xs font-medium">
            <MapPin size={13} />
            <span className="line-clamp-1">{exp.location}</span>
          </div>
          <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-[11px] font-bold text-[#17345B] shrink-0">
            <Star size={11} className="fill-[#F56907] text-[#F56907]" />
            {exp.rating}
          </div>
        </div>
      </div>

      {/* Perforation / ticket tear line */}
      <div className="relative h-0">
        <div className="absolute -top-px left-0 right-0 border-t-2 border-dashed border-gray-200" />
        <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-[#f7f9fb] sm:bg-[#f9fafb]" />
        <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#f7f9fb] sm:bg-[#f9fafb]" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-base sm:text-lg font-bold text-[#17345B] leading-snug group-hover:text-[#014090] transition-colors">
            {exp.title}
          </h3>
          <span
            className={`shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold border whitespace-nowrap ${difficultyColors[exp.difficulty]}`}
          >
            {exp.difficulty}
          </span>
        </div>

        {/* Stats pills */}
        <div className="flex items-center flex-wrap gap-2 mb-5">
          <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg text-xs text-gray-600">
            <Clock size={13} className="text-[#014090]" />
            {exp.duration} {exp.duration === 1 ? "Day" : "Days"}
          </div>
          <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg text-xs text-gray-600">
            <Users size={13} className="text-[#014090]" />
            {exp.groupSize}
          </div>
          <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg text-xs text-gray-400">
            ({exp.reviews} reviews)
          </div>
        </div>

        {/* Footer - styled like a ticket stub */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-[10px] text-gray-400 font-mono tracking-wider mb-0.5">
              {exp.code}
            </p>
            <p className="text-lg sm:text-xl font-bold text-[#17345B]">
              Rs. {exp.price.toLocaleString()}
              <span className="text-xs font-normal text-gray-400">
                {" "}
                /person
              </span>
            </p>
          </div>
          <Link
            href={`/experiences/${exp.slug}`}
            className="group/btn flex items-center gap-1.5 bg-[#014090] hover:bg-[#F56907] text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-full transition-all duration-300 cursor-poiner"
          >
            View Details
            <ArrowRight
              size={13}
              className="group-hover/btn:translate-x-0.5 transition-transform"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ---------------------------------- */
/* MAIN PAGE                           */
/* ---------------------------------- */

export default function ExperiencesPage() {
  const [search, setSearch] = useState("");
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [activeDifficulties, setActiveDifficulties] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortBy, setSortBy] = useState("popular");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleCategory = (id: string) =>
    setActiveCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );

  const toggleDifficulty = (d: string) =>
    setActiveDifficulties((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d],
    );

  const clearFilters = () => {
    setActiveCategories([]);
    setActiveDifficulties([]);
    setMaxPrice(5000);
    setSearch("");
  };

  const filtered = useMemo(() => {
    let result = experiences.filter((exp) => {
      const matchSearch =
        exp.title.toLowerCase().includes(search.toLowerCase()) ||
        exp.location.toLowerCase().includes(search.toLowerCase());
      const matchCategory =
        activeCategories.length === 0 ||
        activeCategories.includes(exp.category);
      const matchDifficulty =
        activeDifficulties.length === 0 ||
        activeDifficulties.includes(exp.difficulty);
      const matchPrice = exp.price <= maxPrice;
      return matchSearch && matchCategory && matchDifficulty && matchPrice;
    });

    if (sortBy === "price-low")
      result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === "price-high")
      result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === "rating")
      result = [...result].sort((a, b) => b.rating - a.rating);
    if (sortBy === "duration")
      result = [...result].sort((a, b) => a.duration - b.duration);

    return result;
  }, [search, activeCategories, activeDifficulties, maxPrice, sortBy]);

  const activeFilterCount = activeCategories.length + activeDifficulties.length;

  const FiltersPanel = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-bold text-[#17345B] text-sm mb-4">Category</h4>
        <div className="space-y-2.5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const checked = activeCategories.includes(cat.id);
            return (
              <label
                key={cat.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div
                  onClick={() => toggleCategory(cat.id)}
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors shrink-0 ${
                    checked
                      ? "bg-[#014090] border-[#014090]"
                      : "border-gray-300 group-hover:border-[#014090]"
                  }`}
                >
                  {checked && (
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                      <path
                        d="M1 4.5L4 7.5L10 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <Icon size={15} className="text-gray-400" />
                <span className="text-sm text-gray-600">{cat.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <h4 className="font-bold text-[#17345B] text-sm mb-4">Difficulty</h4>
        <div className="flex flex-wrap gap-2">
          {difficulties.map((d) => {
            const active = activeDifficulties.includes(d);
            return (
              <button
                key={d}
                onClick={() => toggleDifficulty(d)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold border transition-all ${
                  active
                    ? "bg-[#014090] text-white border-[#014090]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#014090]/40"
                }`}
              >
                {d}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-[#17345B] text-sm">Max Price</h4>
          <span className="text-sm font-semibold text-[#F56907]">
            ${maxPrice.toLocaleString()}
          </span>
        </div>
        <input
          type="range"
          min={200}
          max={5000}
          step={100}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-[#014090]"
        />
        <div className="flex justify-between text-[11px] text-gray-400 mt-1">
          <span>$200</span>
          <span>$5,000+</span>
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs font-semibold text-[#F56907] hover:underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <main className="bg-[#f9fafb] min-h-screen">
      {/* Page header */}
      <section className="bg-[#17345B] py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#F56907] font-semibold text-sm tracking-wide mb-3">
            Our Collection
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 max-w-xl">
            Every experience, one place to find it.
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-lg">
            Browse expeditions, treks, cultural tours, and outdoor events —
            filtered the way you want to explore them.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-10">
          {/* Sidebar - desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-[#17345B] text-base mb-6">
                Filters
              </h3>
              <FiltersPanel />
            </div>
          </aside>

          {/* Main content */}
          <div>
            {/* Search + sort bar */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between mb-6 sm:mb-8">
              <div className="relative flex-1 max-w-md">
                <Search
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search by name or location..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-full pl-11 pr-4 py-3 text-sm outline-none focus:border-[#014090] transition-colors"
                />
              </div>

              <div className="flex items-center gap-3">
                {/* Mobile filter trigger */}
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 bg-white border border-gray-200 px-4 py-3 rounded-full text-sm font-semibold text-[#17345B] shrink-0"
                >
                  <SlidersHorizontal size={15} />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="bg-[#F56907] text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </button>

                {/* Sort dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-200 rounded-full pl-4 pr-9 py-3 text-sm font-medium text-[#17345B] outline-none focus:border-[#014090] cursor-pointer"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="duration">Shortest Duration</option>
                  </select>
                  <ChevronDown
                    size={14}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Active filter tags */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {activeCategories.map((c) => (
                  <span
                    key={c}
                    className="flex items-center gap-1.5 bg-[#014090]/5 text-[#014090] text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {categories.find((cat) => cat.id === c)?.label}
                    <X
                      size={12}
                      className="cursor-pointer"
                      onClick={() => toggleCategory(c)}
                    />
                  </span>
                ))}
                {activeDifficulties.map((d) => (
                  <span
                    key={d}
                    className="flex items-center gap-1.5 bg-[#014090]/5 text-[#014090] text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {d}
                    <X
                      size={12}
                      className="cursor-pointer"
                      onClick={() => toggleDifficulty(d)}
                    />
                  </span>
                ))}
              </div>
            )}

            {/* Results count */}
            <p className="text-sm text-gray-500 mb-5">
              Showing{" "}
              <span className="font-semibold text-[#17345B]">
                {filtered.length}
              </span>{" "}
              experiences
            </p>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
                {filtered.map((exp) => (
                  <ExperienceCard key={exp.id} exp={exp} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                <p className="text-gray-400 text-sm mb-4">
                  No experiences match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-[#014090] font-semibold text-sm hover:underline"
                >
                  Clear filters and try again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-[#17345B] text-lg">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={22} className="text-gray-500" />
              </button>
            </div>
            <FiltersPanel />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full bg-[#014090] text-white font-semibold py-3.5 rounded-full mt-8"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Star,
  MapPin,
  Clock,
  Users,
  Mountain,
  Share2,
  Heart,
  Check,
  X as XIcon,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  Phone,
  AlertTriangle,
  Backpack,
  HeartPulse,
  Radio,
  Camera,
  Calendar,
  ArrowRight,
} from "lucide-react";

/* ---------------------------------- */
/* DATA                                */
/* ---------------------------------- */

const gallery = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1480497490787-505ec076689f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1472791108553-c9405341e398?q=80&w=1237&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
];

const highlights = [
  "Trek through the legendary Baltoro Glacier, one of the longest glaciers outside the polar regions",
  "Panoramic views of four 8,000m peaks including K2, Broad Peak, and the Gasherbrums",
  "Camp beneath Concordia — widely regarded as the most spectacular mountain amphitheater on Earth",
  "Guided by certified high-altitude mountaineers with 10+ years of regional experience",
];

const quickFacts = [
  { icon: Clock, label: "Duration", value: "18 Days" },
  { icon: Mountain, label: "Max Altitude", value: "5,150m" },
  { icon: Users, label: "Group Size", value: "8–12 People" },
  { icon: Calendar, label: "Best Season", value: "Jun – Sep" },
];

const itinerary = [
  {
    day: "Day 1–2",
    title: "Arrival in Islamabad & Flight to Skardu",
    detail:
      "Arrive in Islamabad, overnight stay, then take a scenic flight to Skardu (weather permitting) with views of Nanga Parbat along the way.",
    altitude: "2,228m",
    stay: "Hotel",
  },
  {
    day: "Day 3–4",
    title: "Drive to Askole, Trek Begins",
    detail:
      "Jeep drive through the Shigar Valley to Askole, the last village before the wilderness. Trek begins toward Jhola camp along the Braldu River.",
    altitude: "3,150m",
    stay: "Camping",
  },
  {
    day: "Day 5–9",
    title: "Trekking the Baltoro Glacier",
    detail:
      "Multi-day trek across the Baltoro Glacier via Paiju, Urdukas, and Goro II, with increasing views of the Trango Towers and Masherbrum.",
    altitude: "4,200m",
    stay: "Camping",
  },
  {
    day: "Day 10–12",
    title: "Concordia & K2 Base Camp",
    detail:
      "Arrive at Concordia, then push to K2 Base Camp for an acclimatization day with unobstructed views of K2's southern face.",
    altitude: "5,150m",
    stay: "Camping",
  },
  {
    day: "Day 13–17",
    title: "Return Trek via Gondogoro La (Optional)",
    detail:
      "Return via the same route or the more technical Gondogoro La pass for experienced trekkers, descending toward Hushe village.",
    altitude: "3,200m",
    stay: "Camping",
  },
  {
    day: "Day 18",
    title: "Drive to Skardu & Departure",
    detail:
      "Jeep transfer back to Skardu, farewell dinner, and flight back to Islamabad.",
    altitude: "2,228m",
    stay: "Hotel",
  },
];

const included = [
  "Certified mountain guide & support crew",
  "All camping equipment (tents, kitchen, dining)",
  "Porter services for group & personal gear",
  "All meals during the trek",
  "Permits & national park fees",
  "Domestic flights (Islamabad–Skardu, weather permitting)",
  "Emergency oxygen & first-aid kit",
  "Satellite phone for emergency communication",
];

const notIncluded = [
  "International flights",
  "Pakistan visa fees",
  "Travel insurance (mandatory)",
  "Personal trekking gear (sleeping bag, boots)",
  "Tips for guides & porters",
  "Meals in Islamabad/Skardu hotels",
];

const pricingTiers = [
  {
    name: "Standard",
    price: 1850,
    description: "Shared camping, group trekking pace",
    features: [
      "Shared tents (2 per tent)",
      "Standard meal plan",
      "Group pace itinerary",
      "Basic first-aid kit",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: 2450,
    description: "Enhanced comfort & flexibility",
    features: [
      "Private tent option",
      "Upgraded meal plan",
      "Flexible pacing with extra guide",
      "Full medical kit + oxygen",
    ],
    highlighted: true,
  },
  {
    name: "Private Group",
    price: 3200,
    description: "Fully customized for your group",
    features: [
      "Custom start dates",
      "Private guide & crew",
      "Tailored itinerary",
      "Dedicated support vehicle",
    ],
    highlighted: false,
  },
];

const safetyPoints = [
  {
    icon: HeartPulse,
    title: "Altitude Acclimatization",
    description:
      "Built-in rest days and gradual elevation gain following internationally recognized acclimatization protocols.",
  },
  {
    icon: Radio,
    title: "Emergency Communication",
    description:
      "Satellite phones and radio contact maintained throughout the trek, even in zones without cellular coverage.",
  },
  {
    icon: Backpack,
    title: "Certified Equipment",
    description:
      "All group gear is inspected and maintained to international mountaineering safety standards before every expedition.",
  },
  {
    icon: ShieldCheck,
    title: "Experienced Guides",
    description:
      "Every lead guide holds high-altitude certification and has completed this specific route multiple times.",
  },
];

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "inclusions", label: "Inclusions" },
  { id: "pricing", label: "Pricing" },
  { id: "safety", label: "Safety" },
  { id: "location", label: "Location" },
];

const difficultyColors: Record<string, string> = {
  Challenging: "bg-orange-50 text-orange-700 border-orange-200",
};

/* ---------------------------------- */
/* PAGE                                */
/* ---------------------------------- */

export default function ExperienceDetailPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [openDay, setOpenDay] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState("overview");
  const [liked, setLiked] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-120px 0px -70% 0px" },
    );
    navItems.forEach((item) => {
      const el = sectionRefs.current[item.id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="bg-white">
      {/* ---------- BREADCRUMB ---------- */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-1.5 text-xs text-gray-500 overflow-x-auto whitespace-nowrap">
          <span>Home</span>
          <ChevronRight size={12} />
          <span>Expeditions</span>
          <ChevronRight size={12} />
          <span className="text-[#17345B] font-medium">
            K2 Base Camp Expedition
          </span>
        </div>
      </div>

      {/* ---------- GALLERY ---------- */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 sm:gap-3 h-[280px] sm:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden">
          <div
            className="col-span-4 sm:col-span-2 row-span-2 relative cursor-pointer group"
            onClick={() => {
              setActiveImage(0);
              setLightboxOpen(true);
            }}
          >
            <Image
              src={gallery[0]}
              alt="Main view"
              fill
              className="object-cover group-hover:brightness-90 transition-all"
            />
          </div>
          {gallery.slice(1, 5).map((img, i) => (
            <div
              key={i}
              className="hidden sm:block relative cursor-pointer group"
              onClick={() => {
                setActiveImage(i + 1);
                setLightboxOpen(true);
              }}
            >
              <Image
                src={img}
                alt={`Gallery ${i + 2}`}
                fill
                className="object-cover group-hover:brightness-90 transition-all"
              />
              {i === 3 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-2 text-white font-semibold text-sm">
                  <Camera size={16} />
                  View all photos
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ---------- LIGHTBOX ---------- */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 text-white/70 hover:text-white"
          >
            <XIcon size={28} />
          </button>
          <div className="relative w-full max-w-4xl h-[60vh]">
            <Image
              src={gallery[activeImage]}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex gap-2 mt-5">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                  activeImage === i
                    ? "border-[#F56907]"
                    : "border-transparent opacity-60"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ---------- HEADER ---------- */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold border bg-orange-50 text-orange-700 border-orange-200">
                Challenging
              </span>
              <div className="flex items-center gap-1 text-sm">
                <Star size={14} className="fill-[#F56907] text-[#F56907]" />
                <span className="font-semibold text-[#17345B]">4.9</span>
                <span className="text-gray-400">(124 reviews)</span>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17345B] leading-tight mb-2">
              K2 Base Camp Expedition
            </h1>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm">
              <MapPin size={14} />
              Baltoro Glacier, Gilgit-Baltistan, Pakistan
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setLiked(!liked)}
              className="flex items-center gap-2 border border-gray-200 hover:border-gray-300 px-4 py-2.5 rounded-full text-sm font-medium text-[#17345B] transition-colors"
            >
              <Heart
                size={15}
                className={liked ? "fill-[#F56907] text-[#F56907]" : ""}
              />
              Save
            </button>
            <button className="flex items-center gap-2 border border-gray-200 hover:border-gray-300 px-4 py-2.5 rounded-full text-sm font-medium text-[#17345B] transition-colors">
              <Share2 size={15} />
              Share
            </button>
          </div>
        </div>
      </section>

      {/* ---------- STICKY SUB-NAV ---------- */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 sm:px-5 py-4 text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeSection === item.id
                    ? "text-[#014090]"
                    : "text-gray-500 hover:text-[#17345B]"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#F56907]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- MAIN CONTENT ---------- */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-14">
          {/* LEFT: content */}
          <div className="space-y-16 sm:space-y-20">
            {/* OVERVIEW */}
            <div
              id="overview"
              ref={(el) => {
                sectionRefs.current["overview"] = el;
              }}
              className="scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-[#17345B] mb-5">
                Overview
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
                The K2 Base Camp Expedition is the definitive Karakoram trekking
                experience — an 18-day journey across the Baltoro Glacier to the
                foot of the world's second-highest peak. Along the way, you'll
                pass beneath four of the planet's fourteen 8,000m giants,
                culminating at Concordia, often called the "Throne Room of the
                Mountain Gods."
              </p>

              {/* Quick facts grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
                {quickFacts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div
                      key={fact.label}
                      className="bg-gray-50 rounded-xl p-4 text-center"
                    >
                      <Icon size={18} className="text-[#014090] mx-auto mb-2" />
                      <p className="text-sm font-bold text-[#17345B]">
                        {fact.value}
                      </p>
                      <p className="text-[11px] text-gray-500">{fact.label}</p>
                    </div>
                  );
                })}
              </div>

              <h3 className="font-bold text-[#17345B] mb-4">Trip Highlights</h3>
              <ul className="space-y-3">
                {highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm sm:text-base text-gray-600 leading-relaxed"
                  >
                    <span className="shrink-0 w-5 h-5 rounded-full bg-[#F56907]/10 text-[#F56907] flex items-center justify-center text-[11px] font-bold mt-0.5">
                      {i + 1}
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* ITINERARY */}
            <div
              id="itinerary"
              ref={(el) => {
                sectionRefs.current["itinerary"] = el;
              }}
              className="scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-[#17345B] mb-5">
                Day-by-Day Itinerary
              </h2>
              <div className="space-y-3">
                {itinerary.map((item, i) => {
                  const isOpen = openDay === i;
                  return (
                    <div
                      key={i}
                      className="border border-gray-100 rounded-2xl overflow-hidden bg-white"
                    >
                      <button
                        onClick={() => setOpenDay(isOpen ? null : i)}
                        className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left"
                      >
                        <div className="flex items-center gap-4">
                          <span className="shrink-0 w-14 sm:w-16 text-center bg-[#014090]/5 text-[#014090] text-xs font-bold py-2 rounded-lg">
                            {item.day}
                          </span>
                          <span className="font-semibold text-[#17345B] text-sm sm:text-base">
                            {item.title}
                          </span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 pb-5 sm:pl-[5.5rem]">
                            <p className="text-sm text-gray-500 leading-relaxed mb-3">
                              {item.detail}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span className="flex items-center gap-1.5">
                                <Mountain
                                  size={13}
                                  className="text-[#F56907]"
                                />
                                {item.altitude}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Backpack
                                  size={13}
                                  className="text-[#F56907]"
                                />
                                {item.stay}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* INCLUSIONS */}
            <div
              id="inclusions"
              ref={(el) => {
                sectionRefs.current["inclusions"] = el;
              }}
              className="scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-[#17345B] mb-6">
                What's Included
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-10">
                <div>
                  <h4 className="text-sm font-bold text-green-700 mb-4 flex items-center gap-2">
                    <Check size={16} /> Included
                  </h4>
                  <ul className="space-y-3">
                    {included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-gray-600"
                      >
                        <Check
                          size={15}
                          className="text-green-600 shrink-0 mt-0.5"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-red-600 mb-4 flex items-center gap-2">
                    <XIcon size={16} /> Not Included
                  </h4>
                  <ul className="space-y-3">
                    {notIncluded.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-gray-600"
                      >
                        <XIcon
                          size={15}
                          className="text-red-400 shrink-0 mt-0.5"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* PRICING */}
            <div
              id="pricing"
              ref={(el) => {
                sectionRefs.current["pricing"] = el;
              }}
              className="scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-[#17345B] mb-6">
                Choose Your Package
              </h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {pricingTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`relative rounded-2xl p-6 border-2 transition-all ${
                      tier.highlighted
                        ? "border-[#014090] bg-[#014090]/[0.03] shadow-lg"
                        : "border-gray-100"
                    }`}
                  >
                    {tier.highlighted && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F56907] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    )}
                    <h4 className="font-bold text-[#17345B] mb-1">
                      {tier.name}
                    </h4>
                    <p className="text-xs text-gray-500 mb-4">
                      {tier.description}
                    </p>
                    <p className="text-2xl font-bold text-[#17345B] mb-5">
                      Rs. {tier.price.toLocaleString()}
                      <span className="text-xs font-normal text-gray-400">
                        {" "}
                        /person
                      </span>
                    </p>
                    <ul className="space-y-2.5 mb-6">
                      {tier.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-xs text-gray-600"
                        >
                          <Check
                            size={13}
                            className="text-[#014090] shrink-0 mt-0.5"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full py-2.5 rounded-full text-sm font-semibold transition-colors ${
                        tier.highlighted
                          ? "bg-[#014090] text-white hover:bg-[#F56907]"
                          : "border border-gray-200 text-[#17345B] hover:border-[#014090]"
                      }`}
                    >
                      Select
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* SAFETY */}
            <div
              id="safety"
              ref={(el) => {
                sectionRefs.current["safety"] = el;
              }}
              className="scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-[#17345B] mb-6">
                Safety & Preparation
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
                {safetyPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className="flex gap-4 p-5 rounded-2xl bg-gray-50"
                    >
                      <div className="bg-[#014090] p-2.5 rounded-xl h-fit shrink-0">
                        <Icon size={18} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#17345B] text-sm mb-1.5">
                          {point.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <AlertTriangle
                  size={18}
                  className="text-amber-600 shrink-0 mt-0.5"
                />
                <p className="text-sm text-amber-800 leading-relaxed">
                  This expedition reaches altitudes above 5,000m. A medical
                  checkup and travel insurance covering high-altitude trekking
                  is mandatory before departure. Please disclose any
                  pre-existing conditions during booking.
                </p>
              </div>
            </div>

            {/* LOCATION / MAP */}
            <div
              id="location"
              ref={(el) => {
                sectionRefs.current["location"] = el;
              }}
              className="scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-[#17345B] mb-5">
                Route & Location
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
                The expedition begins in Askole and follows the Baltoro Glacier
                to K2 Base Camp. Explore the full route map below.
              </p>
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1_shCR2GBQSJDH40-v1_YhzY_GhqmCRK7&ehbc=2E312F"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Expedition route map"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Sticky booking sidebar */}
          <aside className="lg:relative">
            <div className="lg:sticky lg:top-28 border border-gray-100 rounded-2xl sm:rounded-3xl p-6 shadow-lg shadow-gray-100/50">
              <div className="flex items-baseline justify-between mb-1">
                <p className="text-2xl font-bold text-[#17345B]">
                  Rs. 1,850
                  <span className="text-sm font-normal text-gray-400">
                    {" "}
                    /person
                  </span>
                </p>
                <div className="flex items-center gap-1 text-sm">
                  <Star size={13} className="fill-[#F56907] text-[#F56907]" />
                  <span className="font-semibold text-[#17345B]">4.9</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mb-6">
                Based on double occupancy
              </p>

              <div className="space-y-3 mb-5">
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1.5 block">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#014090] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1.5 block">
                    Travelers
                  </label>
                  <select className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#014090] cursor-pointer">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3-5 People</option>
                    <option>6+ People</option>
                  </select>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-[#014090] hover:bg-[#F56907] text-white font-semibold py-3.5 rounded-full transition-colors mb-3">
                Book This Expedition
                <ArrowRight size={16} />
              </button>
              <button className="w-full flex items-center justify-center gap-2 border border-gray-200 text-[#17345B] font-semibold py-3.5 rounded-full hover:border-[#014090] transition-colors mb-6">
                <Phone size={15} />
                Request a Call Back
              </button>

              <div className="pt-5 border-t border-gray-100 space-y-3">
                {quickFacts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div
                      key={fact.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="flex items-center gap-2 text-gray-500">
                        <Icon size={14} className="text-[#014090]" />
                        {fact.label}
                      </span>
                      <span className="font-semibold text-[#17345B]">
                        {fact.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

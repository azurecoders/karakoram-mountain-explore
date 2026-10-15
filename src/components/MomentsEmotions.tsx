"use client";

import Image from "next/image";
import { Heart, MapPin, ArrowUpRight } from "lucide-react";

type Moment = {
  id: number;
  image: string;
  title: string;
  location: string;
  emotion: string;
  /** Tailwind grid placement classes (mobile = 2 cols, desktop = 4 cols) */
  layout: string;
  /** `sizes` hint so next/image loads the right file per breakpoint */
  sizes: string;
  /** "feature" gets larger type + accent badge */
  variant: "feature" | "default";
};

const moments: Moment[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    title: "Summit Sunrise",
    location: "K2 Base Camp",
    emotion: "Triumph",
    layout: "col-span-2 row-span-2",
    sizes: "(min-width: 1024px) 50vw, 100vw",
    variant: "feature",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&auto=format&fit=crop&q=70&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    title: "Village Smiles",
    location: "Hunza Valley",
    emotion: "Joy",
    layout: "col-span-1 row-span-2",
    sizes: "(min-width: 1024px) 25vw, 50vw",
    variant: "default",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=70&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    title: "Lakeside Serenity",
    location: "Attabad Lake",
    emotion: "Peace",
    layout: "col-span-1 row-span-1",
    sizes: "(min-width: 1024px) 25vw, 50vw",
    variant: "default",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=800&auto=format&fit=crop&q=70&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    title: "Trail Companions",
    location: "Fairy Meadows",
    emotion: "Friendship",
    layout: "col-span-1 row-span-1",
    sizes: "(min-width: 1024px) 25vw, 50vw",
    variant: "default",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=1200&auto=format&fit=crop&q=70&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    title: "Starlit Camps",
    location: "Deosai Plains",
    emotion: "Wonder",
    layout: "col-span-2 lg:col-span-4 row-span-1",
    sizes: "100vw",
    variant: "default",
  },
];

const MomentCard = ({ moment, index }: { moment: Moment; index: number }) => {
  const isFeature = moment.variant === "feature";

  return (
    <article
      className={`group relative isolate overflow-hidden rounded-2xl sm:rounded-3xl bg-[#17345B] shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:shadow-2xl hover:shadow-[#17345B]/20 focus-within:ring-2 focus-within:ring-[#F56907] ${moment.layout}`}
    >
      <Image
        src={moment.image}
        alt={`${moment.title} — ${moment.location}`}
        fill
        sizes={moment.sizes}
        priority={index === 0}
        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#17345B]/90 via-[#17345B]/15 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

      {/* Top row: index number + hover arrow */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3 sm:p-5">
        <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] sm:text-xs font-semibold tracking-widest text-white/90 backdrop-blur-md ring-1 ring-white/20">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md ring-1 ring-white/20 transition-all duration-300 -translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-[#F56907] group-hover:ring-[#F56907]">
          <ArrowUpRight size={15} />
        </span>
      </div>

      {/* Caption */}
      <div
        className={`absolute inset-x-0 bottom-0 transition-transform duration-500 translate-y-1 group-hover:translate-y-0 ${
          isFeature ? "p-5 sm:p-8" : "p-3.5 sm:p-5"
        }`}
      >
        <span
          className={`inline-block rounded-full font-bold text-white ${
            isFeature
              ? "bg-[#F56907] px-3.5 py-1 text-xs mb-3"
              : "bg-[#014090] px-2.5 py-1 text-[10px] sm:text-[11px] mb-2"
          }`}
        >
          {moment.emotion}
        </span>

        <h4
          className={`font-bold leading-tight text-white ${
            isFeature
              ? "text-2xl sm:text-3xl lg:text-4xl mb-2"
              : "text-sm sm:text-lg mb-1"
          }`}
        >
          {moment.title}
        </h4>

        <div
          className={`flex items-center gap-1.5 text-white/80 ${
            isFeature ? "text-sm sm:text-base" : "text-[11px] sm:text-sm"
          }`}
        >
          <MapPin
            size={isFeature ? 16 : 13}
            className="shrink-0 text-[#F56907]"
          />
          <span className="truncate">{moment.location}</span>
        </div>
      </div>
    </article>
  );
};

const MomentsEmotions = () => {
  return (
    <section
      aria-labelledby="moments-heading"
      className="relative overflow-hidden"
    >
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#F56907]/5 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-24 h-80 w-80 rounded-full bg-[#014090]/5 blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        {/* Header */}
        <div className="mb-10 sm:mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#014090]/10 bg-[#014090]/5 px-4 py-1.5">
              <Heart size={14} className="text-[#F56907]" fill="#F56907" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#014090]">
                Captured Memories
              </span>
            </div>

            <h3
              id="moments-heading"
              className="text-3xl font-bold leading-[1.1] tracking-tight text-[#17345B] sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              Moments &{" "}
              <span className="relative inline-block text-[#014090]">
                Emotions
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1 5.5C40 2 160 2 199 5.5"
                    stroke="#F56907"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-gray-500 sm:text-base">
              Every journey tells a story. Here&apos;s a glimpse into the
              unforgettable experiences our travelers carry home.
            </p>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5 flex-1 max-w-md pb-2">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-gray-300" />
            <button
              type="button"
              className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-[#014090]/15 bg-white px-6 py-3 text-sm font-semibold text-[#014090] shadow-sm transition-all duration-300 hover:border-[#F56907] hover:bg-[#F56907] hover:text-white hover:shadow-lg hover:shadow-[#F56907]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F56907] focus-visible:ring-offset-2"
            >
              View Gallery
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>

        {/* Bento grid
            Mobile  (2 cols): hero · tall + 2 stacked · wide banner
            Desktop (4 cols): hero (2x2) · tall · 2 stacked · full-width banner */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5 auto-rows-[150px] sm:auto-rows-[200px] lg:auto-rows-[230px]">
          {moments.map((moment, index) => (
            <MomentCard key={moment.id} moment={moment} index={index} />
          ))}
        </div>

        {/* Mobile / tablet CTA */}
        <div className="mt-10 flex justify-center lg:hidden">
          <button
            type="button"
            className="group inline-flex items-center gap-2 rounded-full bg-[#014090] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#014090]/20 transition-all duration-300 hover:bg-[#F56907] hover:shadow-[#F56907]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F56907] focus-visible:ring-offset-2"
          >
            View Full Gallery
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MomentsEmotions;

"use client";

import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

type Moment = {
  id: number;
  image: string;
  title: string;
  location: string;
  emotion: string;
  layout: string;
  sizes: string;
};

// Layout maps perfectly to a 3-column desktop grid
const moments: Moment[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    title: "Summit Sunrise",
    location: "K2 Base Camp",
    emotion: "Triumph",
    layout: "col-span-1 md:col-span-2 md:row-span-2",
    sizes: "(min-width: 768px) 66vw, 100vw",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&auto=format&fit=crop&q=70&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    title: "Village Smiles",
    location: "Hunza Valley",
    emotion: "Joy",
    layout: "col-span-1 md:col-span-1 md:row-span-1",
    sizes: "(min-width: 768px) 33vw, 100vw",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=70&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    title: "Lakeside Serenity",
    location: "Attabad Lake",
    emotion: "Peace",
    layout: "col-span-1 md:col-span-1 md:row-span-1",
    sizes: "(min-width: 768px) 33vw, 100vw",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=800&auto=format&fit=crop&q=70&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    title: "Trail Companions",
    location: "Fairy Meadows",
    emotion: "Friendship",
    layout: "col-span-1 md:col-span-1 md:row-span-1",
    sizes: "(min-width: 768px) 33vw, 100vw",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=1200&auto=format&fit=crop&q=70&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    title: "Starlit Camps",
    location: "Deosai Plains",
    emotion: "Wonder",
    layout: "col-span-1 md:col-span-2 md:row-span-1",
    sizes: "(min-width: 768px) 66vw, 100vw",
  },
];

const MomentsEmotions = () => {
  return (
    <section className="bg-white py-20 md:py-32 selection:bg-[#F56907] selection:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <span className="text-[#F56907] font-semibold tracking-[0.2em] text-xs uppercase mb-4 block">
              Captured Memories
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#17345B] tracking-tight font-light mb-6">
              Moments &{" "}
              {/* Using serif and italic for an elegant, magazine-like contrast */}
              <span className="font-serif italic text-[#014090]">Emotions</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg font-light">
              Every journey tells a story. Discover the raw, unfiltered
              experiences our travelers carry home from the Karakoram.
            </p>
          </div>

          <button className="group relative inline-flex items-center gap-3 pb-2 text-sm font-semibold uppercase tracking-widest text-[#17345B] transition-colors hover:text-[#014090] cursor-pointer">
            Explore Gallery
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
            <span className="absolute bottom-0 left-0 h-[1px] w-full bg-gray-200" />
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#014090] transition-all duration-500 ease-out group-hover:w-full" />
          </button>
        </div>

        {/*
          Asymmetrical Editorial Grid
          Mobile: Stacked, but hero is taller
          Desktop: 3 columns, perfectly interlaced
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[340px]">
          {moments.map((moment, index) => (
            <article
              key={moment.id}
              className={`group relative overflow-hidden rounded-[2rem] bg-gray-100 ${moment.layout} transform-gpu`}
            >
              {/* Cinematic Image Zoom */}
              <Image
                src={moment.image}
                alt={`${moment.title} in ${moment.location}`}
                fill
                sizes={moment.sizes}
                priority={index === 0}
                className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
              />

              {/* Refined Gradient Overlay (Darkens gently only at the bottom for text readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1629]/90 via-[#0a1629]/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

              {/* Glassmorphism Emotion Pill */}
              <div className="absolute top-6 left-6 z-10">
                <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-semibold tracking-widest text-white uppercase backdrop-blur-md transition-all duration-500 group-hover:bg-white/20">
                  {moment.emotion}
                </span>
              </div>

              {/* Content area: Slides up slightly on hover */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-8 z-10 translate-y-2 transition-transform duration-500 ease-out group-hover:translate-y-0">
                <div className="flex flex-col">
                  <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-2 leading-tight">
                    {moment.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-white/80 text-sm">
                    <MapPin size={15} className="text-[#F56907]" />
                    <span>{moment.location}</span>
                  </div>
                </div>

                {/* Elegant Hover Action Button */}
                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#17345B] opacity-0 shadow-lg transition-all duration-500 ease-out translate-x-4 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowRight
                    size={20}
                    className="transform transition-transform duration-300 group-hover:-rotate-45"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentsEmotions;

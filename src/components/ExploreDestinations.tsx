// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   MapPin,
//   Mountain,
//   CalendarDays,
//   ArrowRight,
//   Compass,
// } from "lucide-react";

// const destinations = [
//   {
//     id: 1,
//     title: "Hunza Valley",
//     tagline: "Where Mountains Touch the Sky",
//     image:
//       "https://images.unsplash.com/photo-1783981486603-01e972384d73?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     altitude: "2,438m",
//     bestSeason: "Apr – Oct",
//     treks: "12 Treks",
//   },
//   {
//     id: 2,
//     title: "Skardu",
//     tagline: "Gateway to the Giants",
//     image:
//       "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     altitude: "2,228m",
//     bestSeason: "May – Sep",
//     treks: "18 Treks",
//   },
//   {
//     id: 3,
//     title: "Fairy Meadows",
//     tagline: "Heaven on Earth",
//     image:
//       "https://images.unsplash.com/photo-1762386084184-022a12e08b37?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     altitude: "3,300m",
//     bestSeason: "Jun – Sep",
//     treks: "8 Treks",
//   },
//   {
//     id: 4,
//     title: "Deosai Plains",
//     tagline: "Land of the Giants",
//     image:
//       "https://images.unsplash.com/photo-1437209484568-e63b90a34f8b?q=80&w=1189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     altitude: "4,114m",
//     bestSeason: "Jul – Sep",
//     treks: "6 Treks",
//   },
//   {
//     id: 5,
//     title: "Shimshal",
//     tagline: "The Hidden Valley",
//     image:
//       "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     altitude: "3,100m",
//     bestSeason: "Jun – Aug",
//     treks: "5 Treks",
//   },
// ];

// const ExploreDestinations = () => {
//   const [active, setActive] = useState(0);

//   return (
//     <section className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
//       {/* Decorative background */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#014090]/[0.03] rounded-full blur-3xl pointer-events-none" />

//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="text-center max-w-xl mx-auto mb-10 sm:mb-14"
//         >
//           <div className="inline-flex items-center gap-2 bg-[#F56907]/10 border border-[#F56907]/20 rounded-full px-4 py-1.5 mb-5">
//             <Compass size={14} className="text-[#F56907]" />
//             <span className="text-xs font-semibold text-[#F56907] tracking-wide uppercase">
//               Top Destinations
//             </span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17345B] leading-tight mb-4">
//             Explore The Karakoram
//           </h2>
//           <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
//             Hover or tap each destination to uncover what makes it
//             unforgettable.
//           </p>
//         </motion.div>

//         {/* Expanding Panels */}
//         <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 h-[640px] sm:h-[600px] lg:h-[520px] w-full">
//           {destinations.map((dest, i) => {
//             const isActive = active === i;
//             return (
//               <div
//                 key={dest.id}
//                 onMouseEnter={() => setActive(i)}
//                 onClick={() => setActive(i)}
//                 className={`relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
//                   isActive ? "flex-[4]" : "flex-[1]"
//                 }`}
//               >
//                 {/* Image */}
//                 <Image
//                   src={dest.image}
//                   alt={dest.title}
//                   fill
//                   className="object-cover transition-transform duration-700"
//                 />

//                 {/* Overlay gradient */}
//                 <div
//                   className={`absolute inset-0 transition-all duration-700 ${
//                     isActive
//                       ? "bg-gradient-to-t from-[#17345B]/95 via-[#17345B]/30 to-transparent"
//                       : "bg-gradient-to-t from-[#17345B]/80 via-[#17345B]/10 to-transparent lg:bg-gradient-to-b lg:from-[#17345B]/20 lg:via-transparent lg:to-[#17345B]/70"
//                   }`}
//                 />

//                 {/* Index number badge */}
//                 <div className="absolute top-4 left-4 sm:top-5 sm:left-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white text-xs font-bold z-10">
//                   0{i + 1}
//                 </div>

//                 {/* Collapsed label - mobile (horizontal) */}
//                 {!isActive && (
//                   <div className="lg:hidden absolute inset-0 flex items-center justify-between px-5 sm:px-6">
//                     <span className="text-white font-bold text-base sm:text-lg">
//                       {dest.title}
//                     </span>
//                     <ArrowRight size={18} className="text-white/60" />
//                   </div>
//                 )}

//                 {/* Collapsed label - desktop (vertical rotated) */}
//                 {!isActive && (
//                   <div className="hidden lg:flex absolute inset-0 items-end justify-center pb-10">
//                     <span className="text-white font-bold text-lg tracking-wide whitespace-nowrap -rotate-90 origin-center">
//                       {dest.title}
//                     </span>
//                   </div>
//                 )}

//                 {/* Expanded content */}
//                 <AnimatePresence>
//                   {isActive && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 10 }}
//                       transition={{ duration: 0.4, delay: 0.15 }}
//                       className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7 lg:p-8 z-10"
//                     >
//                       <span className="inline-flex items-center gap-1.5 text-[#F56907] text-xs sm:text-sm font-semibold mb-2 w-fit">
//                         <MapPin size={14} />
//                         Karakoram Range
//                       </span>
//                       <h3 className="text-white text-2xl sm:text-3xl font-bold mb-1.5 leading-tight">
//                         {dest.title}
//                       </h3>
//                       <p className="text-white/75 text-sm mb-5 max-w-xs">
//                         {dest.tagline}
//                       </p>

//                       {/* Stats row */}
//                       <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
//                         <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5 text-xs text-white">
//                           <Mountain size={13} />
//                           <span>{dest.altitude}</span>
//                         </div>
//                         <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5 text-xs text-white">
//                           <CalendarDays size={13} />
//                           <span>{dest.bestSeason}</span>
//                         </div>
//                         <div className="flex items-center gap-1.5 bg-[#F56907] rounded-full px-3 py-1.5 text-xs text-white font-semibold">
//                           <span>{dest.treks}</span>
//                         </div>
//                       </div>

//                       <button className="group/btn flex items-center gap-2 bg-white text-[#17345B] font-semibold text-sm px-5 py-3 rounded-full w-fit hover:bg-[#014090] hover:text-white transition-all duration-300">
//                         Explore Destination
//                         <ArrowRight
//                           size={16}
//                           className="group-hover/btn:translate-x-1 transition-transform"
//                         />
//                       </button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExploreDestinations;

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// type Destination = {
//   id: number;
//   title: string;
//   tagline: string;
//   image: string;
//   altitude: string;
//   bestSeason: string;
//   treks: number;
//   /**
//    * Route to the destination page. The "Explore" link is only rendered when
//    * this is set, so nothing points at a page that doesn't exist.
//    */
//   href?: string;
// };

// const destinations: Destination[] = [
//   {
//     id: 1,
//     title: "Hunza Valley",
//     tagline: "Where Mountains Touch the Sky",
//     image:
//       "https://images.unsplash.com/photo-1783981486603-01e972384d73?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     altitude: "2,438m",
//     bestSeason: "Apr – Oct",
//     treks: 12,
//   },
//   {
//     id: 2,
//     title: "Skardu",
//     tagline: "Gateway to the Giants",
//     image:
//       "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     altitude: "2,228m",
//     bestSeason: "May – Sep",
//     treks: 18,
//   },
//   {
//     id: 3,
//     title: "Fairy Meadows",
//     tagline: "Heaven on Earth",
//     image:
//       "https://images.unsplash.com/photo-1762386084184-022a12e08b37?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     altitude: "3,300m",
//     bestSeason: "Jun – Sep",
//     treks: 8,
//   },
//   {
//     id: 4,
//     title: "Deosai Plains",
//     tagline: "Land of the Giants",
//     image:
//       "https://images.unsplash.com/photo-1437209484568-e63b90a34f8b?q=80&w=1189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     altitude: "4,114m",
//     bestSeason: "Jul – Sep",
//     treks: 6,
//   },
//   {
//     id: 5,
//     title: "Shimshal",
//     tagline: "The Hidden Valley",
//     image:
//       "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     altitude: "3,100m",
//     bestSeason: "Jun – Aug",
//     treks: 5,
//   },
// ];

// const focusRing =
//   "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F56907]";

// const ExploreDestinations = () => {
//   const [active, setActive] = useState(0);

//   return (
//     <section
//       aria-labelledby="destinations-heading"
//       className="relative bg-white"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
//         {/* Header */}
//         <header className="mb-12 grid gap-8 sm:mb-16 lg:mb-20 lg:grid-cols-12 lg:items-end">
//           <div className="lg:col-span-8">
//             <p className="mb-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#014090]">
//               <span aria-hidden="true" className="h-px w-10 bg-[#F56907]" />
//               Top Destinations
//             </p>
//             <h2
//               id="destinations-heading"
//               className="font-serif text-5xl leading-[0.98] tracking-tight text-[#17345B] sm:text-6xl lg:text-8xl"
//             >
//               Explore
//               <span className="block italic text-[#014090] lg:pl-24">
//                 the Karakoram
//               </span>
//             </h2>
//           </div>
//           <p className="max-w-xs text-base leading-relaxed text-gray-600 lg:col-span-4 lg:pb-2">
//             Select a destination to uncover what makes it unforgettable.
//           </p>
//         </header>

//         <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-10">
//           {/* Index: horizontal scroller on small screens, large serif list on lg */}
//           <nav
//             aria-label="Destinations"
//             className="lg:col-span-5 lg:self-start"
//           >
//             <ul className="-mx-4 flex gap-x-7 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-col lg:gap-x-0 lg:overflow-visible lg:border-b lg:border-[#17345B]/20 lg:px-0 lg:pb-0">
//               {destinations.map((dest, i) => {
//                 const isActive = active === i;
//                 return (
//                   <li key={dest.id} className="shrink-0 lg:shrink">
//                     <button
//                       type="button"
//                       aria-pressed={isActive}
//                       onClick={() => setActive(i)}
//                       className={`group flex items-baseline gap-4 whitespace-nowrap border-b-2 pb-2 text-left font-serif text-xl transition-colors duration-300 motion-reduce:transition-none lg:w-full lg:justify-between lg:border-b-0 lg:border-t lg:py-5 lg:text-4xl lg:leading-none xl:text-5xl ${focusRing} ${
//                         isActive
//                           ? "border-[#F56907] text-[#17345B] lg:border-t-[#F56907]"
//                           : "border-transparent text-gray-500 hover:text-[#17345B] lg:border-t-[#17345B]/20"
//                       }`}
//                     >
//                       <span>{dest.title}</span>
//                       <span className="hidden font-sans text-sm tabular-nums tracking-wide text-gray-600 lg:inline">
//                         {dest.altitude}
//                       </span>
//                     </button>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>

//           {/* Selected destination: stacked layers crossfade, so layout never jumps */}
//           <div className="lg:col-span-7">
//             <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#17345B] lg:aspect-[6/5]">
//               {destinations.map((dest, i) => {
//                 const isActive = active === i;
//                 return (
//                   <Image
//                     key={dest.id}
//                     src={dest.image}
//                     alt={`${dest.title} — ${dest.tagline}`}
//                     fill
//                     priority={i === 0}
//                     sizes="(min-width: 1024px) 58vw, 100vw"
//                     aria-hidden={!isActive}
//                     className={`object-cover transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
//                       isActive ? "opacity-100" : "opacity-0"
//                     }`}
//                   />
//                 );
//               })}
//             </div>

//             <div className="mt-5 grid">
//               {destinations.map((dest, i) => {
//                 const isActive = active === i;
//                 return (
//                   <div
//                     key={dest.id}
//                     aria-hidden={!isActive}
//                     className={`col-start-1 row-start-1 border-t border-[#17345B]/20 pt-5 transition-opacity duration-500 motion-reduce:transition-none ${
//                       isActive ? "opacity-100" : "invisible opacity-0"
//                     }`}
//                   >
//                     <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#014090]">
//                       Karakoram Range
//                     </p>
//                     <p className="mt-2 font-serif text-2xl italic leading-snug text-[#17345B] sm:text-3xl">
//                       {dest.tagline}
//                     </p>

//                     <dl className="mt-6 grid max-w-xl grid-cols-3 gap-4">
//                       <div>
//                         <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-600">
//                           Altitude
//                         </dt>
//                         <dd className="mt-1.5 font-serif text-2xl text-[#17345B] sm:text-3xl">
//                           {dest.altitude}
//                         </dd>
//                       </div>
//                       <div>
//                         <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-600">
//                           Best Season
//                         </dt>
//                         <dd className="mt-1.5 font-serif text-2xl text-[#17345B] sm:text-3xl">
//                           {dest.bestSeason}
//                         </dd>
//                       </div>
//                       <div>
//                         <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-600">
//                           Treks
//                         </dt>
//                         <dd className="mt-1.5 font-serif text-2xl text-[#17345B] sm:text-3xl">
//                           {dest.treks}
//                         </dd>
//                       </div>
//                     </dl>

//                     {dest.href && (
//                       <Link
//                         href={dest.href}
//                         tabIndex={isActive ? 0 : -1}
//                         className={`group mt-7 inline-flex items-center gap-3 border-b-2 border-[#17345B] pb-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#17345B] transition-colors duration-300 hover:border-[#F56907] hover:text-[#014090] motion-reduce:transition-none ${focusRing}`}
//                       >
//                         Explore {dest.title}
//                         <ArrowRight
//                           size={16}
//                           aria-hidden="true"
//                           className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:transform-none"
//                         />
//                       </Link>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExploreDestinations;

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Destination = {
  id: number;
  title: string;
  tagline: string;
  image: string;
  altitude: string;
  bestSeason: string;
  treks: number;
  href?: string;
};

const destinations: Destination[] = [
  {
    id: 1,
    title: "Hunza Valley",
    tagline: "Where Mountains Touch the Sky",
    image:
      "https://images.unsplash.com/photo-1783981486603-01e972384d73?q=80&w=2000&auto=format&fit=crop",
    altitude: "2,438m",
    bestSeason: "Apr – Oct",
    treks: 12,
    href: "/destinations/hunza",
  },
  {
    id: 2,
    title: "Skardu",
    tagline: "Gateway to the Giants",
    image:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2000&auto=format&fit=crop",
    altitude: "2,228m",
    bestSeason: "May – Sep",
    treks: 18,
    href: "/destinations/skardu",
  },
  {
    id: 3,
    title: "Fairy Meadows",
    tagline: "Heaven on Earth",
    image:
      "https://images.unsplash.com/photo-1762386084184-022a12e08b37?q=80&w=2000&auto=format&fit=crop",
    altitude: "3,300m",
    bestSeason: "Jun – Sep",
    treks: 8,
    href: "/destinations/fairy-meadows",
  },
  {
    id: 4,
    title: "Deosai Plains",
    tagline: "Land of the Giants",
    image:
      "https://images.unsplash.com/photo-1437209484568-e63b90a34f8b?q=80&w=2000&auto=format&fit=crop",
    altitude: "4,114m",
    bestSeason: "Jul – Sep",
    treks: 6,
    href: "/destinations/deosai",
  },
  {
    id: 5,
    title: "Shimshal",
    tagline: "The Hidden Valley",
    image:
      "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2000&auto=format&fit=crop",
    altitude: "3,100m",
    bestSeason: "Jun – Aug",
    treks: 5,
    href: "/destinations/shimshal",
  },
];

const ExploreDestinations = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#F8FAFC] py-24 md:py-32 selection:bg-[#FF6B00] selection:text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Editorial Header */}
        <header className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span aria-hidden="true" className="h-[1px] w-12 bg-[#FF6B00]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF6B00]">
              Discover
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#001A43] tracking-tight leading-[1.1]">
              Explore <br className="hidden md:block" />
              <span className="font-serif italic text-[#003B8F]">
                the Karakoram.
              </span>
            </h2>
            <p className="max-w-sm text-base text-gray-500 font-light leading-relaxed pb-2">
              Select a destination below to uncover the unique landscapes,
              altitudes, and trekking routes that define the region.
            </p>
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Oversized Interactive Menu */}
          <nav
            aria-label="Destinations"
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <ul className="flex flex-col border-t border-gray-200">
              {destinations.map((dest, i) => {
                const isActive = active === i;
                return (
                  <li key={dest.id} className="border-b border-gray-200">
                    <button
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActive(i)}
                      className="group relative w-full flex items-center justify-between py-6 md:py-8 text-left focus-visible:outline-none focus-visible:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-baseline gap-6">
                        <span
                          className={`text-xs font-bold font-sans tracking-[0.2em] transition-colors duration-500 ${
                            isActive
                              ? "text-[#FF6B00]"
                              : "text-gray-300 group-hover:text-gray-400"
                          }`}
                        >
                          0{i + 1}
                        </span>
                        <span
                          className={`text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight cursor-pointer transition-all duration-500 ${
                            isActive
                              ? "text-[#001A43] translate-x-2"
                              : "text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1"
                          }`}
                        >
                          {dest.title}
                        </span>
                      </div>

                      {/* Active Indicator Arrow */}
                      <span
                        className={`transition-all duration-500 transform ${
                          isActive
                            ? "opacity-100 translate-x-0 text-[#FF6B00]"
                            : "opacity-0 -translate-x-4 text-gray-300"
                        }`}
                      >
                        <ArrowUpRight size={28} strokeWidth={1.5} />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Column: Cinematic Image & Metadata */}
          <div className="lg:col-span-7">
            {/* Image Container */}
            <div className="relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-gray-100 shadow-2xl shadow-[#001A43]/5">
              {destinations.map((dest, i) => {
                const isActive = active === i;
                return (
                  <Image
                    key={dest.id}
                    src={dest.image}
                    alt={dest.title}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    aria-hidden={!isActive}
                    className={`object-cover transition-all duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  />
                );
              })}

              {/* Soft vignette overlay for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50" />
            </div>

            {/* Metadata Container (Crossfading) */}
            <div className="relative mt-8 h-auto min-h-[160px]">
              {destinations.map((dest, i) => {
                const isActive = active === i;
                return (
                  <div
                    key={dest.id}
                    aria-hidden={!isActive}
                    className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${
                      isActive
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6B00] mb-2">
                          Destination Overview
                        </p>
                        <p className="font-serif text-2xl md:text-3xl text-[#001A43] italic leading-snug">
                          {dest.tagline}
                        </p>
                      </div>

                      {dest.href && (
                        <Link
                          href={dest.href}
                          tabIndex={isActive ? 0 : -1}
                          className="group inline-flex items-center gap-3 shrink-0 text-xs font-bold uppercase tracking-[0.15em] text-[#001A43] transition-colors hover:text-[#FF6B00]"
                        >
                          Discover
                          <span className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 group-hover:border-[#FF6B00] transition-colors">
                            <ArrowUpRight
                              size={16}
                              className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </span>
                        </Link>
                      )}
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-gray-200">
                      <div>
                        <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">
                          Altitude
                        </dt>
                        <dd className="font-serif text-xl md:text-2xl text-[#001A43]">
                          {dest.altitude}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">
                          Season
                        </dt>
                        <dd className="font-serif text-xl md:text-2xl text-[#001A43]">
                          {dest.bestSeason}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">
                          Routes
                        </dt>
                        <dd className="font-serif text-xl md:text-2xl text-[#001A43]">
                          {dest.treks} Treks
                        </dd>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreDestinations;

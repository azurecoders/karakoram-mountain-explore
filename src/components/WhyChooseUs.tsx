"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Safety First Approach",
    description:
      "Certified guides, premium equipment, and rigorous safety protocols on every single expedition.",
  },
  {
    title: "15+ Years of Expertise",
    description:
      "Deep local knowledge of the Karakoram region, built through years of trusted, on-the-ground experience.",
  },
  {
    title: "Small Group Sizes",
    description:
      "Intimate group experiences that ensure personal attention and a genuine connection to nature.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees. What you see is what you pay — honest and straightforward pricing for every journey.",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock assistance before, during, and after your trip for complete peace of mind.",
  },
  {
    title: "Custom Itineraries",
    description:
      "Tailored travel plans designed meticulously around your pace, interests, and sense of adventure.",
  },
];

const stats = [
  { value: "500+", label: "Happy Travelers" },
  { value: "50+", label: "Destinations" },
  { value: "15+", label: "Years Experience" },
];

const WhyChooseUs = () => {
  return (
    <section aria-labelledby="why-heading" className="bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 max-w-7xl">
        {/* Editorial Header */}
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span aria-hidden="true" className="h-[1px] w-12 bg-[#F56907]" />
              <span className="text-[#014090] text-xs font-bold uppercase tracking-[0.25em]">
                Why Choose Us
              </span>
            </div>
            <h2
              id="why-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#17345B] tracking-tight leading-[1.1]"
            >
              Adventures crafted with <br className="hidden md:block" />
              <span className="font-serif italic text-[#014090]">
                care &amp; expertise.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base md:text-lg leading-relaxed text-gray-500 font-light pb-2">
            We don&apos;t just plan trips — we design experiences. Every detail
            is thoughtfully handled so you can focus on the journey itself.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column: Photograph & Stats (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-max">
            <figure className="relative group">
              {/* Image Container with elegant rounded corners */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-xl shadow-[#17345B]/10">
                <Image
                  src="https://images.unsplash.com/photo-1600255940203-05fd89e1d7af?w=1200&auto=format&fit=crop&q=70&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  alt="Guide leading travelers on a mountain trail"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>

              {/* Stats Grid */}
              <figcaption className="mt-8 md:mt-10">
                <dl className="grid grid-cols-3 gap-6 divide-x divide-gray-200">
                  {stats.map((stat, idx) => (
                    <div
                      key={stat.label}
                      className={idx === 0 ? "pr-4" : "px-4"}
                    >
                      <dd className="font-serif text-3xl md:text-4xl text-[#17345B] mb-2">
                        {stat.value}
                      </dd>
                      <dt className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 leading-tight">
                        {stat.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </figcaption>
            </figure>
          </div>

          {/* Right Column: Interactive Features List */}
          <div className="lg:col-span-7">
            <div className="border-t border-gray-200">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="group relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 border-b border-gray-200 py-8 transition-all duration-500 hover:border-[#17345B]"
                >
                  {/* Number Indicator */}
                  <span className="text-sm font-semibold tracking-widest text-gray-300 transition-colors duration-500 group-hover:text-[#F56907] pt-1 sm:w-12 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl md:text-3xl font-serif text-[#17345B] mb-3 transition-colors duration-300 group-hover:text-[#014090]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed max-w-lg font-light transition-all duration-500 sm:group-hover:translate-x-2">
                      {feature.description}
                    </p>
                  </div>

                  {/* Elegant Hover Arrow */}
                  <div className="hidden sm:flex items-center justify-center shrink-0 pt-2 opacity-0 -translate-x-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0">
                    <ArrowRight size={24} className="text-[#F56907]" />
                  </div>
                </div>
              ))}
            </div>

            {/* Optional CTA to anchor the bottom of the list */}
            <div className="mt-12 flex justify-start">
              <button className="group relative inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#17345B] transition-colors hover:text-[#014090]">
                Speak with an Expert
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
                <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#014090] transition-all duration-500 ease-out group-hover:w-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Users,
  Award,
  Headphones,
  Compass,
  Wallet,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safety First Approach",
    description:
      "Certified guides, premium equipment, and rigorous safety protocols on every expedition.",
  },
  {
    icon: Award,
    title: "15+ Years of Expertise",
    description:
      "Deep local knowledge of the Karakoram region, built through years of trusted experience.",
  },
  {
    icon: Users,
    title: "Small Group Sizes",
    description:
      "Intimate group experiences that ensure personal attention and a genuine connection to nature.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description:
      "No hidden fees. What you see is what you pay — honest pricing for every journey.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance before, during, and after your trip for complete peace of mind.",
  },
  {
    icon: Compass,
    title: "Custom Itineraries",
    description:
      "Tailored travel plans designed around your pace, interests, and sense of adventure.",
  },
];

const stats = [
  { value: "500+", label: "Happy Travelers" },
  { value: "50+", label: "Destinations" },
  { value: "15+", label: "Years Experience" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.08 },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-[#014090]/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F56907]/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image with floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-[4/4.5] max-w-md mx-auto lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1600255940203-05fd89e1d7af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="Guide leading travelers on a mountain trail"
                width={1080}
                height={1920}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17345B]/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge - top */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-5 -right-3 sm:top-6 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 sm:p-5 flex items-center gap-3 max-w-[200px]"
            >
              <div className="bg-[#F56907]/10 p-2.5 rounded-full shrink-0">
                <CheckCircle2 size={20} className="text-[#F56907]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#17345B] leading-tight">
                  98% Satisfaction
                </p>
                <p className="text-xs text-gray-500">Verified Reviews</p>
              </div>
            </motion.div>

            {/* Floating stats card - bottom */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: -10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-right-6 lg:-right-10 bg-[#014090] rounded-2xl shadow-xl shadow-[#014090]/30 p-5 sm:p-6 flex gap-5 sm:gap-6"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-white text-lg sm:text-2xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-white/70 text-[10px] sm:text-xs whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#014090]/5 border border-[#014090]/10 rounded-full px-4 py-1.5 mb-5">
                <Award size={14} className="text-[#014090]" />
                <span className="text-xs font-semibold text-[#014090] tracking-wide uppercase">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17345B] leading-tight mb-5">
                Adventures Crafted With{" "}
                <span className="text-[#F56907]">Care & Expertise</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10 max-w-lg">
                We don't just plan trips — we design experiences. Every detail
                is thoughtfully handled so you can focus on what matters most:
                the journey itself.
              </p>
            </motion.div>

            {/* Feature list */}
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={fadeUp}
                    className="group flex gap-4 p-4 sm:p-5 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                  >
                    <div className="bg-[#014090]/5 group-hover:bg-[#F56907] p-3 rounded-xl h-fit shrink-0 transition-colors duration-300">
                      <Icon
                        size={20}
                        className="text-[#014090] group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#17345B] text-sm sm:text-base mb-1.5 leading-snug">
                        {feature.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

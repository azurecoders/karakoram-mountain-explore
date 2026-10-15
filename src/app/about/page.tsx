"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mountain, Heart, ShieldCheck, Leaf, ArrowRight } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { BsInstagram } from "react-icons/bs";

/* ---------------------------------- */
/* DATA                                */
/* ---------------------------------- */

const values = [
  {
    icon: ShieldCheck,
    title: "Safety Above All",
    description:
      "No summit or view is worth a compromised safety protocol. Every route is planned with redundancy in mind.",
  },
  {
    icon: Heart,
    title: "Genuine Hospitality",
    description:
      "Our guides and porters come from the valleys we trek through — you're welcomed as family, not a transaction.",
  },
  {
    icon: Leaf,
    title: "Responsible Travel",
    description:
      "Leave-no-trace practices and direct support to local communities are built into every itinerary we run.",
  },
];

const milestones = [
  { year: "2009", label: "Founded in Skardu with two guides and a jeep" },
  { year: "2014", label: "Led our first K2 Base Camp expedition" },
  { year: "2018", label: "Expanded into cultural tours across Hunza & Nagar" },
  { year: "2023", label: "Crossed 500+ travelers guided safely home" },
];

const team = [
  {
    name: "Ali Raza",
    role: "Founder & Lead Guide",
    image:
      "https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    name: "Salman Ahmed",
    role: "Operations Director",
    image:
      "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    name: "Hassan Karim",
    role: "Senior Mountain Guide",
    image:
      "https://images.unsplash.com/photo-1676809441325-d14c08c21f64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    name: "Zara Shah",
    role: "Travel Experience Lead",
    image:
      "https://images.unsplash.com/photo-1582711404110-8f94382f4dcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.08 },
  }),
};

/* ---------------------------------- */
/* PAGE                                */
/* ---------------------------------- */

export default function AboutPage() {
  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section className="relative h-[60vh] min-h-[420px] w-full flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1622918497523-53fc9a535744?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="Our team on a mountain trail"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3a]/90 via-[#0d1f3a]/40 to-[#0d1f3a]/20" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#F56907] font-semibold text-sm tracking-wide mb-3"
          >
            About Karakoram Tours
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white max-w-2xl leading-tight"
          >
            Guided by mountains. Built on trust.
          </motion.h1>
        </div>
      </section>

      {/* ---------- OUR STORY ---------- */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1653234775445-e1519a91c079?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  alt="Founder guiding a trek"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-44 h-56 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1630152196074-e3fd02ed7e82?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  alt="Local porter on the trail"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#17345B] leading-tight mb-6">
                It started with a single trail, and a promise to do it right.
              </h2>
              <div className="space-y-4 text-gray-500 text-sm sm:text-base leading-relaxed">
                <p>
                  In 2009, our founder Ali Raza left a desk job to guide a small
                  group of friends through Hunza. What was meant to be a
                  one-time trip turned into a realization: the Karakoram
                  deserved tour operators who treated it — and its people — with
                  real respect.
                </p>
                <p>
                  Fifteen years later, we've grown into a team of certified
                  guides, local porters, and planners who've walked these trails
                  more times than we can count. But the promise hasn't changed —
                  every trip we run supports the communities we pass through,
                  and every traveler leaves having experienced something real.
                </p>
              </div>

              <div className="flex items-center gap-10 mt-8 pt-8 border-t border-gray-100">
                <div>
                  <p className="text-3xl font-bold text-[#014090]">15+</p>
                  <p className="text-xs text-gray-500 mt-1">Years Guiding</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#014090]">500+</p>
                  <p className="text-xs text-gray-500 mt-1">Travelers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#014090]">50+</p>
                  <p className="text-xs text-gray-500 mt-1">Local Staff</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- VALUES ---------- */}
      <section className="bg-[#f7f9fc] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#17345B] leading-tight mb-4">
              What we won't compromise on
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              These aren't slogans on a wall — they're the standards we hold
              every guide, itinerary, and partnership to.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-100 hover:border-[#014090]/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#014090] flex items-center justify-center mb-6">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#17345B] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- TIMELINE ---------- */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#17345B] leading-tight mb-4">
                Fifteen years, one trail at a time
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-sm">
                A brief look at how a small idea in Skardu grew into a team
                trusted by travelers worldwide.
              </p>
            </div>

            <div>
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 sm:gap-10 pb-8 last:pb-0"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-[#F56907] font-bold text-sm sm:text-base shrink-0 w-14">
                      {m.year}
                    </span>
                  </div>
                  <div className="relative pl-6 border-l-2 border-gray-200 last:border-transparent pb-2">
                    <span className="absolute -left-[7px] top-0.5 w-3 h-3 rounded-full bg-[#014090]" />
                    <p className="text-[#17345B] font-medium text-sm sm:text-base leading-relaxed">
                      {m.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TEAM ---------- */}
      <section className="bg-[#17345B] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
                The people behind the trail
              </h2>
              <p className="text-gray-300 text-sm sm:text-base max-w-md">
                Certified, experienced, and genuinely invested in every journey
                they lead.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="group"
              >
                <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#F56907] transition-colors"
                    >
                      <LiaLinkedin size={14} />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#F56907] transition-colors"
                    >
                      <BsInstagram size={14} />
                    </a>
                  </div>
                </div>
                <h4 className="text-white font-bold text-sm sm:text-base">
                  {member.name}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CLOSING CTA ---------- */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f7f9fc] rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-lg">
              <Mountain
                size={28}
                className="text-[#F56907] mx-auto lg:mx-0 mb-4"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#17345B] leading-tight mb-3">
                Ready to see the Karakoram for yourself?
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Let's talk about which trail is right for you.
              </p>
            </div>
            <a
              href="/book"
              className="group flex items-center gap-2 bg-[#014090] hover:bg-[#F56907] text-white font-semibold text-sm sm:text-base px-7 py-4 rounded-full transition-all duration-300 shrink-0"
            >
              Plan Your Trip
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

import { CTASection, FAQSection } from "@/components/CTAFaqs";
import DiscoverExperiences from "@/components/DiscoverExperiences";
import ExploreDestinations from "@/components/ExploreDestinations";
import Hero from "@/components/Hero";
import MomentsEmotions from "@/components/MomentsEmotions";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <MomentsEmotions />
      <WhyChooseUs />
      <DiscoverExperiences />
      <TestimonialSection />
      <ExploreDestinations />
      <CTASection />
      <FAQSection />
    </>
  );
}

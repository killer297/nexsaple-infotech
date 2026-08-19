"use client";

import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Stats from "@/components/Stats";
import PortfolioPreview from "@/components/PortfolioPreview";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <ServicesSection />
      <Stats />
      <PortfolioPreview />
      <Process />
      <Testimonials />
      <CTASection />
    </>
  );
}

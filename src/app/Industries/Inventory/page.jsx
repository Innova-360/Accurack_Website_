import Ratings from "@/components/common/Ratings";
import Hero from "@/components/ui/HeroSection/Hero";
import React from "react";
import AutomationFeaturesSection from "./_components/AutomationFeaturesSection";
import { HeroBanner } from "@/components/common/Banner";
import Testimonials from "@/components/common/Testimonials";

const page = () => {
  return (
    <>
      <Hero
        badgeText="Manufacturing Inventory Solutions"
        heading="Precision Production, Optimized Supply."
        description="Optimize your production process with AI-driven tools, ensuring material availability and streamlined operations."
        primaryBtnText="Book a Demo"
        primaryBtnLink="/book-demo"
        secondaryBtnText="Start Free Trial"
        secondaryBtnLink="/free-trial"
        imageSrc="/Images/IndustriesAssests/Integration/integration-dashboard.png"
        imageAlt="Accurack Integration dashboard preview"
        bgColor="bg-background"
        textColor="text-primary"
        descColor="text-foreground/70"
        badgeColor="border border-primary text-primary"
        headingSize="text-4xl sm:text-5xl lg:text-6xl leading-[1.1]"
        descSize="text-base sm:text-lg"
        containerPadding="px-6 md:px-12"
        reverse={false}
      />

      <Ratings />
      <AutomationFeaturesSection />
      <HeroBanner backgroundImage="/Images/IndustriesAssests/Inventory/banner.png" />
      <Testimonials />
    </>
  );
};

export default page;

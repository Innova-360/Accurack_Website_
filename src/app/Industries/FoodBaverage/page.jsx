import Ratings from "@/components/common/Ratings";
import Hero from "@/components/ui/HeroSection/Hero";
import React from "react";
import BaveragesFeaturesSection from "./_components/BaveragesFeaturesSection";
import Testimonials from "@/components/common/Testimonials";
import TransformSection from "@/components/common/Transform";

const page = () => {
  return (
    <>
      <Hero
        badgeText="Seamless Sales, Happy Customers."
        heading="Food & Beverage Inventory Solutions: Freshness, Safety, Profit."
        description="Manage perishable inventory with precision, ensure food safety, and optimize supply chains from farm to table."
        primaryBtnText="Book a Demo"
        primaryBtnLink="/Demo"
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
      <BaveragesFeaturesSection />
      <Testimonials />
      <TransformSection />
    </>
  );
};

export default page;

import InventoryFeatures from "@/app/Solutions/AllinoneSolutions/_components/CardSection";
import Ratings from "@/components/common/Ratings";
import Hero from "@/components/ui/HeroSection/Hero";
import React from "react";
import TransformSection from "@/components/common/Transform";
import TeamSection from "@/components/common/Officer";
import VisionCard from "@/components/common/VisionCard";
import ExpertiseList from "@/components/common/ExpertiseList";

const page = () => {
  const expertiseItems = [
    {
      title: "AI & Machine Learning",
      description:
        "Powering predictive analytics and intelligent automation, we help businesses stay ahead of the curve with data-driven insights and smarter decision-making.",
    },
    {
      title: "Software Development & UX Design",
      description:
        "We craft robust, scalable, and intuitive platforms that deliver seamless performance and experiences your customers will love.",
    },
    {
      title: "Customer Success & Support",
      description:
        "Our commitment goes beyond solutions—we empower users, provide continuous support, and ensure long-term growth for your business.",
    },
    {
      title: "Logistics & Supply Chain Optimization",
      description:
        "With deep expertise across warehouse and distribution, we streamline operations and keep your supply chain running smoothly.",
    },
    {
      title: "Business Operations & Growth",
      description:
        "From strategy to execution, we guide teams toward efficiency, profitability, and sustainable growth.",
    },
  ];

  return (
    <>
      <Hero
        badgeText="Our Core Team"
        heading="Meet the Innovators Behind Accurack"
        description="Optimize stock, streamline operations, and enhance efficiency with Accurack's intelligent AI Warehouse Suite."
        primaryBtnText="Book a Demo"
        primaryBtnLink="/book-demo"
        secondaryBtnText="Start Free Trial"
        secondaryBtnLink="/free-trial"
        imageSrc="/Images/AboutAssests/Story/hero.png"
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

      <VisionCard
        quote="Our vision is to be the leading global provider of AI‑driven inventory and warehouse & retail management solutions, empowering every business, regardless of size, to achieve operational excellence and sustainable growth."
        bgImage="/Images/AboutAssests/Team/visionBG.png"
        leftLayerClassName="bg-[#0B6D7E]/90"
        rightLayerClassName="bg-[#1E3653]/90"
      />

      <TeamSection whiteBg />

      <ExpertiseList items={expertiseItems} />

      <TransformSection />
    </>
  );
};

export default page;

"use client";

import React from "react";
import InventoryFeatures from "@/app/Solutions/AllinoneSolutions/_components/CardSection";
import Ratings from "@/components/common/Ratings";
import Hero from "@/components/ui/HeroSection/Hero";
import TimelineComponent from "./_components/TimeLine";
import TransformSection from "@/components/common/Transform";
import SuspenseWrapper from "@/components/common/SuspenseWrapper";

const page = () => {
  const cards1 = [
    {
      icon: "/Images/Dropdownassests/Solutions/AllinoneSolutions/Icon.png",
      title: "Smart Forecasting",
      text: "Predict demand Optimize online inventory and fulfillment.Sync product listings, stock levels, and order updates across multiple e-commerce platforms in real time.Leverage AI-driven demand forecasting to reduce overselling, minimize returns.",
    },
    {
      icon: "/Images/Dropdownassests/Solutions/AllinoneSolutions/Icon.png",
      title: "Real-Time Tracking",
      text: "Monitor your Optimize online inventory and fulfillment.Sync product listings, stock levels, and order updates across multiple e-commerce platforms in real time.Leverage AI-driven demand forecasting to reduce overselling, minimize returns.",
    },
    {
      icon: "/Images/Dropdownassests/Solutions/AllinoneSolutions/Icon.png",
      title: "Warehouse Automation",
      text: "Optimize online inventory and fulfillment.Sync product listings, stock levels, and order updates across multiple e-commerce platforms in real time.Leverage AI-driven demand forecasting to reduce overselling, minimize returns.",
    },
  ];

  const cards2 = [...cards1]; // reuse same structure

  const timelineData = [
    { year: "2019", title: "Accurack Founded", description: "Vision to solve inventory challenges with AI.", isPrimary: false },
    { year: "2020", title: "Accurack Founded", description: "Vision to solve inventory challenges with AI.", isPrimary: true },
    { year: "2021", title: "Accurack Founded", description: "Vision to solve inventory challenges with AI.", isPrimary: true },
    { year: "2022", title: "Accurack Founded", description: "Vision to solve inventory challenges with AI.", isPrimary: true },
    { year: "2023", title: "Accurack Founded", description: "Vision to solve inventory challenges with AI.", isPrimary: true },
  ];

  const customerImpactData = {
    title: "Customer Impact",
    description: "Accurack is built to reduce operational errors, minimize stockouts, and significantly boost efficiency...",
    testimonial: {
      quote: "Accurack has transformed our warehouse operations. We have seen a 30% reduction in errors...",
      name: "Artemisia Udinese",
      role: "Warehouse Manager",
      image: "/Images/AboutAssests/Story/image1.png",
    },
    mainImage: "/Images/AboutAssests/Story/image.png",
    imageAlt: "Professional businessman",
  };

  return (
    <>
      <Hero
        badgeText="About us"
        heading="Your Friendly Neighborhood inventory management"
        description="Optimize stock, streamline operations, and enhance efficiency with Accurack's intelligent AI Warehouse Suite."
        primaryBtnText="Book a Demo"
        primaryBtnLink="/Demo"
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

      <Ratings theme="dark" />

      <SuspenseWrapper>
        <InventoryFeatures
          layout="center"
          title="A Unified Platform for Wholesale & Retail"
          subtitle="Discover why businesses partner with us to overcome challenges and fuel growth. From streamlining inventory to expanding into new markets, these success stories show how Cin7 helps companies reach new heights."
          background="/Images/Dropdownassests/Solutions/AllinoneSolutions/Cardbg.png"
          className="lg:grid-cols-3"
          cards={cards1}
        />
      </SuspenseWrapper>

      <SuspenseWrapper>
        <TimelineComponent
          title="Timeline of key achievements"
          subtitle="Utilize warehouse management software..."
          timelineItems={timelineData}
          customerImpact={customerImpactData}
          className="my-custom-class"
        />
      </SuspenseWrapper>

      <SuspenseWrapper>
        <InventoryFeatures
          layout="center"
          title="Community Involvement"
          subtitle="Discover why businesses partner with us to overcome challenges and fuel growth. From streamlining inventory to expanding into new markets, these success stories show how Cin7 helps companies reach new heights."
          background="/Images/Dropdownassests/Solutions/AllinoneSolutions/Cardbg.png"
          className="lg:grid-cols-3"
          cards={cards2}
        />
      </SuspenseWrapper>

      <SuspenseWrapper>
        <TransformSection />
      </SuspenseWrapper>
    </>
  );
};

export default page;

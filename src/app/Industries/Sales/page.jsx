import ImpactStory from "@/components/common/ImpactStory";
import { Lisiting } from "@/components/common/Listing";
import Ratings from "@/components/common/Ratings";
import Testimonials from "@/components/common/Testimonials";
import TransformSection from "@/components/common/Transform";
import Hero from "@/components/ui/HeroSection/Hero";
import React from "react";

const page = () => {
  const salesFeatures = [
    {
      title: "Unified Inventory Sync (Online & In-Store)",
      description:
        "Keep your online store and physical retail locations perfectly synchronized. Accurack ensures real-time inventory updates across all channels, preventing overselling and stockouts.",
      image: "/Images/IndustriesAssests/Sales/card-1.jpg",
    },
    {
      title: "Multi-Channel Sales Tracking",
      description:
        "Monitor and manage orders from all your sales channels – website, marketplaces (Amazon, eBay), and brick-and-mortar stores – from a single, unified platform.",
      image: "/Images/IndustriesAssests/Sales/card-2.jpg",
    },
    {
      title: "Streamlined E-commerce Logistics",
      description:
        "Optimize order fulfillment, picking, packing, and shipping for your online sales. Integrate with major carriers to automate label generation and track deliveries efficiently.",
      image: "/Images/IndustriesAssests/Sales/card-3.jpg",
    },
    {
      title: "AI-Powered Demand Forecasting for Retail",
      description:
        "Leverage AI to predict customer demand for specific products and locations, optimizing stock allocation and reducing carrying costs across your retail network.",
      image: "/Images/IndustriesAssests/Sales/card-4.jpg",
    },
  ];

  return (
    <>
      <Hero
        badgeText="Seamless Sales, Happy Customers."
        heading="Retail & E-commerce Optimization"
        description="Manage multi-channel sales, synchronize inventory, and streamline logistics with ease"
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
      <Lisiting features={salesFeatures} columns={1} />
      <ImpactStory
        bgImage="/Images/Dropdownassests/Solutions/AllinoneSolutions/Bgimpact.jpg"
        overlayColor="bg-bgpic2/90"
        topIcon="/Images/Dropdownassests/Solutions/AllinoneSolutions/invertedcommas1.png"
        heading="Transforming Businesses: An Impact Story"
        subText="See how HM Warehouse leveraged Accurack's AI-driven insights to reduce their inventory holding costs by 20%."
        beforeTitle="Before Accurack"
        beforeText="HM Warehouse, a regional retailer, faced unpredictable stockouts and excessive holding costs. Manual forecasting methods couldn’t keep up with fluctuating consumer demand. Resulted in lost sales and operational inefficiencies."
        afterTitle="After Implementing Accurack"
        afterText="Adopted AI-powered forecasting and multi-warehouse management. Gained real-time visibility and predictive insights."
        sixMonthTitle="Within six months:"
        sixMonthText="Reduced inventory holding costs by 20%. Increased order fulfillment speed by 15%. Enabled focus on expanding market reach."
        outcomeTitle="Outcome"
        outcomeText="A strong example of how Accurack’s commitment to Innovation and Customer Success drives tangible results."
        bottomLeftLogo="/Images/Dropdownassests/Solutions/AllinoneSolutions/TJXLogo.png"
        bottomLeftText="AHM Warehouse"
        bottomRightIcon="/Images/Dropdownassests/Solutions/AllinoneSolutions/invertedcommas2.png"
        circleImage="/Images/IndustriesAssests/Sales/impact.png"
      />
      <Testimonials />
      <TransformSection />
    </>
  );
};

export default page;

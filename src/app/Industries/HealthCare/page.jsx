import ImpactStory from "@/components/common/ImpactStory";
import { Lisiting } from "@/components/common/Listing";
import Ratings from "@/components/common/Ratings";
import Testimonials from "@/components/common/Testimonials";
import TransformSection from "@/components/common/Transform";
import Hero from "@/components/ui/HeroSection/Hero";
import React from "react";

const page = () => {
  const healthCareFeatures = [
    {
      title: "Strict Compliance & Traceability (FDA/USDA)",
      description:
        "Meet stringent regulatory requirements with robust lot and serial number tracking, expiration date management, and detailed audit trails for all medical supplies and pharmaceuticals.",
      image: "/Images/IndustriesAssests/HealthCare/card-1.jpg",
    },
    {
      title: "Real-Time Medical Supply Tracking",
      description:
        "Gain instant visibility into critical medical supplies, equipment, and pharmaceuticals across multiple locations. Prevent shortages and ensure timely access to essential items.",
      image: "/Images/IndustriesAssests/HealthCare/card-2.jpg",
    },
    {
      title: "AI-Powered Supply Forecasting",
      description:
        "Accurately predict demand for medical supplies based on patient volume, historical data, and seasonal trends. Optimize purchasing and reduce waste for costly items.",
      image: "/Images/IndustriesAssests/HealthCare/card-3.jpg",
    },
    {
      title: "Optimized Medical Logistics",
      description:
        "Manage the specialized logistics of medical deliveries, including temperature-controlled items and sensitive equipment. Track shipments and ensure secure, on-time delivery.",
      image: "/Images/IndustriesAssests/HealthCare/card-4.jpg",
    },
  ];

  return (
    <>
      <Hero
        badgeText="Seamless Sales, Happy Customers."
        heading="Healthcare Inventory Management: Precision, Compliance, Care."
        description="Manage multi-channel sales, synchronize inventory, and streamline logistics with ease."
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
      <Lisiting
        title="Healthcare & Medical Solutions"
        features={healthCareFeatures}
        columns={2}
      />
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

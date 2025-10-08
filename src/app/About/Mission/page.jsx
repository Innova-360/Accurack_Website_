import Ratings from "@/components/common/Ratings";
import Hero from "@/components/ui/HeroSection/Hero";
import React from "react";
import {
  Card,
  CommunitySection,
  GearIcon,
  TrophyIcon,
  BoxIcon,
  SearchIcon,
  ShieldIcon,
  StatItem,
} from "./_components/CommunitySection";
import TeamSection from "@/components/common/Officer";
import ImpactStory from "@/components/common/ImpactStory";
import { MissionBanner } from "@/components/common/Banner2.0";

const page = () => {

  const stats = [
    { label: "Total users", value: "7,000+" },
    { label: "Revenue generated", value: "$1.7M" },
    { label: "Customer Rating", value: "4.8" },
    { label: "Orders processed per year", value: "2.9M" },
  ];

  const values = [
    {
      title: "Innovation",
      body: "Continuously evolving with cutting–edge AI and technology to solve complex problems.",
      icon: <GearIcon key={"gear"} className="h-7 w-7 text-primary" />,
    },
    {
      title: "Reliability",
      body: "Delivering a robust, secure, and consistently performing platform you can trust.",
      icon: <ShieldIcon key={"shield"} className="h-7 w-7 text-primary" />,
    },
    {
      title: "Scalability",
      body: "Building solutions that grow with your business, from startup to enterprise.",
      icon: <BoxIcon key={"box"} className="h-7 w-7 text-primary" />,
    }, 
    {
      title: "Transparency",
      body: "Clear communication, honest practices, and straightforward pricing.",
      icon: <SearchIcon key={"search"} className="h-7 w-7 text-primary" />,
    },
  ];

  const highlightCard = (
    <Card key={"highlight"} className="p-5 md:p-8 min-w-[85%] snap-center">
      <div className="flex items-center gap-3">
        <TrophyIcon className="h-6 w-6 text-primary" />
        <h3 className="text-lg md:text-xl font-semibold">Customer Success</h3>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        Dedicated to empowering our users with tools and support that ensure
        their growth.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4">
        {stats.map((s) => (
          <StatItem key={s.label} label={s.label} value={s.value} />
        ))}
      </div>
    </Card>
  );

  return (
    <>
      <Hero
        badgeText="Our Mission"
        heading="Driving Efficiency Through AI Innovation"
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
      <MissionBanner
        title="Our Mission"
        description="AccuRack makes supply chains smarter. We deliver a single platform for retail, wholesale, e-commerce, and 3PL that turns complexity into clarity—driving efficiency, profitability, and growth."
        backgroundImageUrl="/Images/AboutAssests/Mission/MissonBanner.png"
        overlayColor="bg-[#006678]/90"
      />
      <CommunitySection
        title="Community Involvement"
        description="Discover why businesses partner with us to overcome challenges and fuel growth. These success stories show how we help companies reach new heights."
        stats={stats}
        values={values}
        highlightCard={highlightCard}
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
        circleImage="/Images/Dropdownassests/Solutions/AllinoneSolutions/Girl.png"
      />
      <TeamSection whiteBg />
      <MissionBanner
        title="Our Promise"
        description="At AccuRack, we don’t just manage your operations — we transform them.

Our promise is simple: a platform that’s intelligent enough to forecast, powerful enough to  scale, and simple enough to use daily."
        backgroundImageUrl="/Images/AboutAssests/Mission/MissonBanner.png"
        overlayColor="bg-[#006678]/90"
      />
    </>
  );
};

export default page;

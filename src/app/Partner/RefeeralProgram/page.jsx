"use client"
import Hero from "@/components/ui/HeroSection/Hero";
import SurSection from "@/components/common/Ratings";
import RefeeralCard from "./_components/RefeeralCard";
import JoinCard from "./_components/JoinCard";
import Testimonials from "@/components/common/Testimonials";
import RefeeralContact from "./_components/RefeeralContact";

import React from "react";

const page = () => {
  return (
    <>
      <Hero
        heading="Join Our Referral Program: Share Accurack, Earn Rewards"
        description="Refer businesses to Accurack and receive exciting incentives for every successful conversion."
        primaryBtnText="Join the Referral Program Now"
        primaryBtnLink="/book-demo"
        secondaryBtnText="Start Free Trial"
        secondaryBtnLink="/free-trial"
        imageSrc="/Images/Dropdownassests/Partners/RefeeralProgram/Refeeral.png"
        imageAlt="Accurack dashboard preview"
        bgColor="bg-background"
        textColor="text-primary"
        descColor="text-foreground/70"
        badgeColor="border border-primary text-primary"
        headingSize="text-4xl sm:text-5xl lg:text-5xl leading-[1.1]"
        descSize="text-base sm:text-lg"
        containerPadding="px-6 md:px-12"
        imageStyleType="custom"
        imageWrapperClass="rounded-[30px] border-[1px] px-5  border-picborder shadow-[-4px_4px_19.8px_0px_rgba(33,34,44,0.16)]  border-solid p-[23px] gap-[16px]"
        imageWrapperClass2="rounded-[21px]"
        reverse={false}
      />
      <SurSection />
      <RefeeralCard />
      <JoinCard />
      <Testimonials />
      <RefeeralContact />
    </>
  );
};

export default page;

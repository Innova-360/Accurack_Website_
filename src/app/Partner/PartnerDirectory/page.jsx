import Hero from "@/components/ui/HeroSection/Hero";
import SurSection from "@/components/common/Ratings";
import PartnerType from "./_components/PartnersType";
import ImpactStory from "@/components/common/ImpactStory";
import Testimonials from "@/components/common/Testimonials";
import LeadingSection from "./_components/Leading";
import PartnerContact from "./_components/PartnerContact";

export default function PartnerDirectory() {
  return (
    <>
      <Hero
        heading="Partner with Accurack: Grow Together"
        description="Collaborate with Accurack to expand your business, offer enhanced solutions, and drive mutual success."
        primaryBtnText="Become an Accurack Partner"
        primaryBtnLink="/book-demo"
        secondaryBtnText="Start Free Trial"
        secondaryBtnLink="/free-trial"
        imageSrc="/Images/Dropdownassests/Partners/PartnersDirectory/Partner.png"
        imageAlt="Accurack dashboard preview"
        bgColor="bg-background"
        textColor="text-primary"
        descColor="text-foreground/70"
        badgeColor="border border-primary text-primary"
        headingSize="text-4xl sm:text-5xl lg:text-6xl leading-[1.1]"
        descSize="text-base sm:text-lg"
        containerPadding="px-6 md:px-12"
        imageStyleType="custom"
        imageWrapperClass="rounded-[30px] border-[1px] px-5 py-5 border-picborder shadow-[-4px_4px_19.8px_0px_rgba(33,34,44,0.16)]  border-solid p-[23px] gap-[16px]"
        imageWrapperClass2="rounded-[21px]"
        reverse={false}
      />

      <SurSection />
      <PartnerType />

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
        circleImage="/Images/Dropdownassests/Partners/PartnersDirectory/Girl.png"
      />

      <Testimonials />
      <LeadingSection />
      <PartnerContact />
    </>
  );
}

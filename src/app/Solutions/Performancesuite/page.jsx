import Perfomance from "../../../components/Solutions/Performancesuite/Perfomance"
import SurSection from "@/components/common/Ratings";
import AnalyticsSection from "../../../components/Solutions/Performancesuite/Analytics"
import TeamSection from "@/components/common/Officer"
import ForecastingSection from "../../../components/Solutions/Performancesuite/Forecasting"
import Hero from "@/components/ui/HeroSection/Hero";





export default function Perfomancesuite() {
  return (
    <>
      <Hero
        badgeText="Performance Suite"
        heading="Actionable Insights with Accurack's Performance Suite."
        description="Optimize stock, streamline operations, and enhance
efficiency with Accurack's intelligent AI Warehouse Suite."
        primaryBtnText="Book a Demo"
        primaryBtnLink="/book-demo"
        secondaryBtnText="Start Free Trial"
        secondaryBtnLink="/free-trial"
        imageSrc="/Images/Dropdownassests/Solutions/Perfomancesuite/Perfomance.png"
        imageAlt="Accurack dashboard preview"
        bgColor="bg-background"
        textColor="text-primary"
        descColor="text-foreground/70"
        badgeColor="border border-primary text-primary "
        headingSize="text-4xl sm:text-5xl lg:text-6xl leading-[1.1]"
        descSize="text-base sm:text-lg"
        containerPadding="px-6 md:px-12"
        reverse={false}
      />
      <SurSection />
      <AnalyticsSection />
      <TeamSection />
      <ForecastingSection />
    </>
  );
}
import SurSection from "@/components/common/Ratings";
import TeamSection from "@/components/common/Officer";
import Hero from "@/components/ui/HeroSection/Hero";
import AnalyticsSection from "./_components/Analytics";
import ForecastingSection from "@/components/common/Forecasting";

export default function Perfomancesuite() {
  return (
    <>
      <Hero
        badgeText="Performance Suite"
        heading="Actionable Insights with Accurack's Performance Suite."
        description="Optimize stock, streamline operations, and enhance
efficiency with Accurack's intelligent AI Warehouse Suite."
        primaryBtnText="Book a Demo"
        primaryBtnLink="/Demo"
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
      <TeamSection whiteBg />
      <ForecastingSection />
    </>
  );
}

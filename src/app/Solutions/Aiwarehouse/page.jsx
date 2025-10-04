
import Warehousing from "../../../components/Solutions/Aiwarehouse/WareHousing"
import SurSection from "@/components/common/Ratings"
import SurSection from "@/components/common/Slider"
import CommunitySection from "../../../components/Solutions/Aiwarehouse/Community"
import TeamSection from "@/components/common/Officer"
import TransformSection from "@/components/common/Transform"
import Hero from "@/components/ui/HeroSection/Hero"




export default function Aiwarehouse() {
  return (
    <>
      <Hero
        badgeText="Predictive AI"
        heading="Smarter Warehousing: Powered by Predictive AI"
        description="Optimize stock, streamline operations, and enhance
efficiency with Accurack's intelligent AI Warehouse Suite."
        primaryBtnText="Book a Demo"
        primaryBtnLink="/book-demo"
        secondaryBtnText="Start Free Trial"
        secondaryBtnLink="/free-trial"
        imageSrc="/Images/Homeassests/Heroimage/accurack-dashboard.png"
        imageAlt="Accurack dashboard preview"
        bgColor="bg-background"
        textColor="text-primary"
        descColor="text-foreground/70"
        badgeColor="border border-primary text-primary"
        headingSize="text-4xl sm:text-5xl lg:text-6xl leading-[1.1]"
        descSize="text-base sm:text-lg"
        containerPadding="px-6 md:px-12"
        reverse={false}
      />
      <SurSection />
      <CommunitySection />
      <TeamSection />
      <TransformSection />
    </>
  );
}
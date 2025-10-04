import SurSection from "@/components/common/Ratings"
import InventoryFeatures from "../../../components/Solutions/AllinoneSolutions/CardSection"
import ImpactStory from "../../../components/Solutions/AllinoneSolutions/ImpactStory";
import TransformSection from "@/components/common/Transform"
import Hero from "@/components/ui/HeroSection/Hero";




export default function AllinoneSolutions() {
  return (
    <>
      <Hero
        badgeText="All in one Solution"
        heading={<>The Unified Hub <br /> for Your Entire Business</>}
        description="Optimize stock, streamline operations, and enhance efficiency with Accurack's intelligent AI Warehouse Suite."
        primaryBtnText="Book a Demo"
        primaryBtnLink="/book-demo"
        secondaryBtnText="Start Free Trial"
        secondaryBtnLink="/free-trial"
        imageSrc="/Images/Dropdownassests/Solutions/AllinoneSolutions/Hub.png"
        imageAlt="Inventory Section"
        textColor="text-heading"
        descColor="text-text"
        badgeColor="text-heading border-heading"
        headingSize="text-[42px] lg:text-[60px] leading-tight"
        descSize="text-[18px] lg:text-[20px] leading-[32px]"
        containerPadding="px-6 lg:px-14 py-12"
        reverse={false}
      />
      <SurSection />
      <InventoryFeatures />
      <ImpactStory />
      <TransformSection />
    </>
  );
}
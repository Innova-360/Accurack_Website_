import SurSection from "@/components/common/Ratings";
import Inventory from "../../../components/Solutions/InventorySolution/InventorySolutions"
import AdvancedFeatures from "../../../components/Solutions/InventorySolution/MangementFeatures"
import TransformSection from "@/components/common/Transform"
import Section from "@/components/ui/HeroSection/Hero"




export default function InSolutions() {
  return (
      <>
        
        <Section
          badgeText="Never Miss a Beat"
          heading={<>Precision <br /> Inventory <br /> Management</>}
          description="Optimize stock, streamline operations, and enhance efficiency with Accurack's intelligent AI Warehouse Suite."
          primaryBtnText="Book a Demo"
          primaryBtnLink="/book-demo"
          secondaryBtnText="Start Free Trial"
          secondaryBtnLink="/free-trial"
          imageSrc="/Images/Dropdownassests/Solutions/InventorySolutions/Inventory1.png"
          imageAlt="Inventory Section"
          
          
          textColor="text-heading"
          descColor="text-text"
          badgeColor="text-heading border-heading"
          headingSize="text-[42px]  lg:text-[60px] leading-tight"
          descSize="text-[18px] lg:text-[20px] leading-[32px]"
          containerPadding="px-6 lg:px-14 py-12"
          reverse={false}
        />
        <SurSection />
        <AdvancedFeatures />
        <TransformSection />
      </>
      );
}
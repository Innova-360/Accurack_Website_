import SurSection from "@/components/common/Ratings";
import Inventory from "./_components/InventorySolutions"
import AdvancedFeatures from "./_components/MangementFeatures"
import TransformSection from "@/components/common/Transform"




export default function InSolutions() {
  return (
      <>
        <Inventory />
        <SurSection />
        <AdvancedFeatures />
        <TransformSection />
      </>
      );
}
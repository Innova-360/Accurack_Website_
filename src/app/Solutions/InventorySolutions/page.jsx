import SurSection from "@/components/common/Ratings";
import Inventory from "../../../components/Solutions/InventorySolution/InventorySolutions"
import AdvancedFeatures from "../../../components/Solutions/InventorySolution/MangementFeatures"
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
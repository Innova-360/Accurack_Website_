import SurSection from "@/components/common/Slider";
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
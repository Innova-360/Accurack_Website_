import SurSection from "../../../components/Solutions/InventorySolution/Slider";
import Inventory from "../../../components/Solutions/InventorySolution/InventorySolutions"
import AdvancedFeatures from "../../../components/Solutions/InventorySolution/MangementFeatures"
import TransformSection from "../../../components/Solutions/InventorySolution/Transform"




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
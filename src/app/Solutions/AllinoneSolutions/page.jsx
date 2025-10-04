import SurSection from "@/components/common/Slider";
import InventoryFeatures from "../../../components/Solutions/AllinoneSolutions/CardSection";
import ImpactStory from "@/components/common/ImpactStory";
import TransformSection from "@/components/common/Transform";

export default function AllinoneSolutions() {
  return (
    <>
     
      <SurSection />
      <InventoryFeatures />
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
        circleImage="/Images/Dropdownassests/Solutions/AllinoneSolutions/Girl.png"
      />
      <TransformSection />
    </>
  );
}

import SurSection from "@/components/common/Ratings"
import Hero from "@/components/ui/HeroSection/Hero";
import ImpactStory from "@/components/common/ImpactStory";
import TransformSection from "@/components/common/Transform";
import InventoryFeatures from "./_components/CardSection";

export default function AllinoneSolutions() {
  return (
    <>
      <Hero
        badgeText="All in one Solution"
        heading={<>The Unified Hub <br /> for Your Entire Business</>}
        description="Optimize stock, streamline operations, and enhance efficiency with Accurack's intelligent AI Warehouse Suite."
        primaryBtnText="Book a Demo"
        primaryBtnLink="/Demo"
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
      <InventoryFeatures
        title="Advanced Inventory Management Features"
        subtitle="Join hundreds of businesses optimizing their operations with Accurack."
        background="/Images/Dropdownassests/Solutions/AllinoneSolutions/Cardbg.png"
        mainCard={{
          icon: "/Images/Dropdownassests/Solutions/AllinoneSolutions/Icon.png",
          title: "For E-Commerce",
          text: "Optimize online inventory and fulfillment.Sync product listings, stock levels, and order updates across multiple e-commerce platforms in real time.Leverage AI-driven demand forecasting to reduce overselling, minimize returns.",
          iconWidth: 32.71,
          iconHeight: 32.71,
          variant: "dark", // you can pass 'glow', 'classic', 'simple'
        }}
        cards={[
          {
            icon: "/Images/Dropdownassests/Solutions/AllinoneSolutions/Icon.png",
            title: "Smart Forecasting",
            text: "Predict demand Optimize online inventory and fulfillment.Sync product listings, stock levels, and order updates across multiple e-commerce platforms in real time.Leverage AI-driven demand forecasting to reduce overselling, minimize returns.",
          },
          {
            icon: "/Images/Dropdownassests/Solutions/AllinoneSolutions/Icon.png",
            title: "Real-Time Tracking",
            text: "Monitor your Optimize online inventory and fulfillment.Sync product listings, stock levels, and order updates across multiple e-commerce platforms in real time.Leverage AI-driven demand forecasting to reduce overselling, minimize returns.",
          },
          {
            icon: "/Images/Dropdownassests/Solutions/AllinoneSolutions/Icon.png",
            title: "Warehouse Automation",
            text: "Optimize online inventory and fulfillment.Sync product listings, stock levels, and order updates across multiple e-commerce platforms in real time.Leverage AI-driven demand forecasting to reduce overselling, minimize returns.",
          },
          {
            icon: "/Images/Dropdownassests/Solutions/AllinoneSolutions/Icon.png",
            title: "Multi-Channel Sync",
            text: "Optimize online inventory and fulfillment.Sync product listings, stock levels, and order updates across multiple e-commerce platforms in real time.Leverage AI-driven demand forecasting to reduce overselling, minimize returns.",
          },
        ]}
      />

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

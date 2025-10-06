"use client";

import Img from "@/components/ui/Image";


export default function CommunitySection() {
  return (
    <section className="w-full bg-background py-16">
      {/* Top Heading + Paragraph */}
      <div className="max-w-[800px] mx-auto text-center px-4">
        <h2 className="font-medium font-heading text-[48px] leading-[61px] text-text">
          Community Involvement
        </h2>
        <p className="mt-6 font-body text-[16px] leading-[24px] text-light font-normal">
          Discover why businesses partner with us to overcome challenges and fuel
          growth. From streamlining inventory to expanding into new markets,
          these success stories show how Cin7 helps companies reach new heights.
        </p>
      </div>

      {/* Feature Sections */}
      <div className="mt-16 flex flex-col gap-12 px-6 sm:px-8 lg:px-12">
        <FeatureBlock
          heading="AI Forecasting & Demand Prediction"
          text="Leverage advanced AI algorithms to accurately predict future demand, optimize stock levels, and minimize both stockouts and excess inventory. Make data-driven decisions, not guesses."
          image="/Images/Dropdownassests/Solutions/Aiwarehouse/Ai.png"
          bg="bg-feature1"
          reverse={false}
        />

        <FeatureBlock
          heading="AI-Driven Stock Transfers"
          text="Automate and optimize stock transfers between warehouses based on AI-driven demand predictions and inventory levels, shipment,  logitics, ensuring optimal distribution and reducing shipping costs."
          image="/Images/Dropdownassests/Solutions/Aiwarehouse/Driven.jpg"
          bg="bg-feature2"
          reverse={true}
        />

        <FeatureBlock
          heading="Warehouse Mapping"
          text="Gain a comprehensive, real-time overview of inventory across all your warehouse locations. Track goods in transit and manage stock allocation from a single dashboard."
          image="/Images/Dropdownassests/Solutions/Aiwarehouse/Warehouse.jpg"
          bg="bg-feature3"
          reverse={false}
        />

        <FeatureBlock
          heading="Operational Efficiency & Cost Reduction"
          text="Accurack's AI optimizes picking paths, storage layouts, and replenishment schedules, leading to significant reductions in labor costs, carrying costs, and improved order fulfillment times."
          image="/Images/Dropdownassests/Solutions/Aiwarehouse/Cost.jpg"
          bg="bg-feature4"
          reverse={true}
        />
      </div>
    </section>
  );
}

/* ✅ Reusable Feature Block */
function FeatureBlock({ heading, text, image, bg, reverse }) {
  return (
    <div
      className={`w-full max-w-[1312px] mx-auto min-h-[304px] rounded-[25px] flex ${bg} 
        flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""}`}
    >
      {/* Text Block */}
      <div
        className={`flex-1 flex flex-col justify-start p-5 sm:p-8 lg:p-12 
        ${
          reverse
            ? "items-end text-right sm:items-end sm:text-right"
            : "items-start text-left sm:items-start sm:text-left"
        }`}
      >
        <h3 className="font-medium text-[24px] leading-[32px] text-text font-body mb-4 whitespace-normal">
          {heading}
        </h3>
        <p className="text-[16px] leading-[24px] font-body text-shade font-normal">
          {text}
        </p>
      </div>

      {/* Image Block */}
      <div
        className={`flex-1 flex items-end lg:items-center lg:justify-center 
        p-3 sm:p-6 md:p-8 lg:p-12
        ${
          reverse
            ? "justify-start sm:justify-start md:pl-2" // 👈 left-corner image ko aur chipkaya
            : "justify-end sm:justify-end md:pr-2" // right-corner image same hi rakhi
        }`}
      >
        <div className="w-[260px] sm:w-[320px] md:w-[360px] lg:w-[412px] h-[170px] sm:h-[190px] lg:h-[211px] rounded-[19px] border-2 border-background shadow-[10px_9px_0px_0px_rgba(8,6,76,0.31)] overflow-hidden">
          <Img
            src={image}
            alt="Feature"
            width={412}
            height={211}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

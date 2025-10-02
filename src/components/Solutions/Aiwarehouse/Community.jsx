"use client";

import Img from "../../Image/Image";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function CommunitySection() {
  return (
    <section className="w-full bg-white py-16">
      {/* Top Heading + Paragraph */}
      <div className="max-w-[800px] mx-auto text-center px-4">
        <h2
          style={{ fontFamily: "var(--font-lora)" }}
          className="font-medium text-[48px] leading-[61px] text-black"
        >
          Community Involvement
        </h2>
        <p
          style={{ fontFamily: "var(--font-jakarta)" }}
          className="mt-6 text-[16px] leading-[24px] text-gray-500 font-normal"
        >
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
          bg="#E2EEF0"
          reverse={false}
        />

        <FeatureBlock
          heading="AI-Driven Stock Transfers"
          text="Automate and optimize stock transfers between warehouses based on AI-driven demand predictions and inventory levels, shipment,  logitics, ensuring optimal distribution and reducing shipping costs."
          image="/Images/Dropdownassests/Solutions/Aiwarehouse/Driven.jpg"
          bg="#F0F3F6"
          reverse={true}
        />

        <FeatureBlock
          heading="Warehouse Mapping"
          text="Gain a comprehensive, real-time overview of inventory across all your warehouse locations. Track goods in transit and manage stock allocation from a single dashboard."
          image="/Images/Dropdownassests/Solutions/Aiwarehouse/Warehouse.jpg"
          bg="#E2EEF0"
          reverse={false}
        />

        <FeatureBlock
          heading="Operational Efficiency & Cost Reduction"
          text="Accurack's AI optimizes picking paths, storage layouts, and replenishment schedules, leading to significant reductions in labor costs, carrying costs, and improved order fulfillment times."
          image="/Images/Dropdownassests/Solutions/Aiwarehouse/Cost.jpg"
          bg="#F0F3F6"
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
      className={`w-full max-w-[1312px] mx-auto rounded-[25px] flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
      style={{ backgroundColor: bg, minHeight: "304px" }}
    >
      {/* Text */}
      <div
        className={`flex-1 flex flex-col justify-start p-6 sm:p-10 lg:p-12 ${
          reverse
            ? "lg:items-end lg:text-right lg:-translate-y-2 lg:translate-x-4"
            : "lg:items-start lg:text-left lg:-translate-y-0 lg:translate-x-0"
        }`}
      >
        <h3
          style={{ fontFamily: "var(--font-jakarta)" }}
          className="font-medium text-[24px] leading-[32px] text-gray-900 mb-4 whitespace-nowrap"
        >
          {heading}
        </h3>
        <p
          style={{ fontFamily: "var(--font-jakarta)" }}
          className="text-[16px] leading-[24px] text-gray-600 font-normal"
        >
          {text}
        </p>
      </div>

      {/* Image - Fixed Position, no movement */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 lg:p-12">
        <div
          className="rounded-[19px] border-2 border-white shadow-[10px_9px_0px_0px_rgba(8,6,76,0.31)] overflow-hidden"
          style={{ width: "412px", height: "211px" }}
        >
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

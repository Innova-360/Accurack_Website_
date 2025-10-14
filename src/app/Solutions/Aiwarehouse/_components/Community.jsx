"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

export default function CommunitySection() {
  const features = useMemo(
    () => [
      {
        heading: "AI Forecasting & Demand Prediction",
        text: "Leverage advanced AI algorithms to accurately predict future demand, optimize stock levels, and minimize both stockouts and excess inventory. Make data-driven decisions, not guesses.",
        image: "/Images/Dropdownassests/Solutions/Aiwarehouse/Ai.png",
        bg: "bg-feature1",
      },
      {
        heading: "AI-Driven Stock Transfers",
        text: "Automate and optimize stock transfers between warehouses based on AI-driven demand predictions and inventory levels, shipment, logistics, ensuring optimal distribution and reducing shipping costs.",
        image: "/Images/Dropdownassests/Solutions/Aiwarehouse/Driven.jpg",
        bg: "bg-feature2",
        reverse: true,
      },
      {
        heading: "Warehouse Mapping",
        text: "Gain a comprehensive, real-time overview of inventory across all your warehouse locations. Track goods in transit and manage stock allocation from a single dashboard.",
        image: "/Images/Dropdownassests/Solutions/Aiwarehouse/Warehouse.jpg",
        bg: "bg-feature3",
      },
      {
        heading: "Operational Efficiency & Cost Reduction",
        text: "Accurack's AI optimizes picking paths, storage layouts, and replenishment schedules, leading to significant reductions in labor costs, carrying costs, and improved order fulfillment times.",
        image: "/Images/Dropdownassests/Solutions/Aiwarehouse/Cost.jpg",
        bg: "bg-feature4",
        reverse: true,
      },
    ],
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-background py-16 overflow-hidden">
        {/* Heading */}
        <div className="max-w-[800px] mx-auto text-center px-4">
          <m.h2
            className="font-medium font-heading text-3xl md:text-[48px] leading-tight text-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Community Involvement
          </m.h2>

          <m.p
            className="mt-6 font-body text-sm leading-[24px] text-light font-normal"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Discover why businesses partner with us to overcome challenges and fuel
            growth. From streamlining inventory to expanding into new markets,
            these success stories show how Cin7 helps companies reach new heights.
          </m.p>
        </div>

        {/* Features */}
        <div className="mt-16 flex flex-col gap-12 px-6 sm:px-8 lg:px-12">
          {features.map((f, i) => (
            <FeatureBlock key={i} {...f} />
          ))}
        </div>
      </section>
    </LazyMotion>
  );
}

/* ✅ Reusable & Optimized Feature Block */
function FeatureBlock({ heading, text, image, bg, reverse }) {
  return (
    <m.div
      className={`w-full max-w-[1312px] mx-auto min-h-[304px] rounded-[25px] flex ${bg} 
      flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Text Section */}
      <div
        className={`flex-1 flex flex-col justify-start p-5 sm:p-8 lg:p-12 
        ${
          reverse
            ? "items-end text-right sm:items-end sm:text-right"
            : "items-start text-left sm:items-start sm:text-left"
        }`}
      >
        <h3 className="font-medium font-heading text-2xl md:text-[24px] leading-[32px] text-text mb-4">
          {heading}
        </h3>
        <p className="text-sm md:text-[16px] leading-[24px] font-body text-shade font-normal">
          {text}
        </p>
      </div>

      {/* Image Section */}
      <div
        className={`flex-1 flex items-end lg:items-center lg:justify-center 
        p-3 sm:p-6 md:p-8 lg:p-12
        ${reverse ? "justify-start md:pl-2" : "justify-end md:pr-2"}`}
      >
        <div className="relative w-[260px] sm:w-[320px] md:w-[360px] lg:w-[412px] aspect-[16/9] rounded-[19px] border-2 border-background shadow-[10px_9px_0px_0px_rgba(8,6,76,0.31)] overflow-hidden">
          <Image
            src={image}
            alt={heading}
            fill
            priority={false}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </m.div>
  );
}

"use client";

import Image from "next/image";
import Header from "@/components/ui/Headers/Header";
import Card from "@/components/ui/Card/Card";



export default function BaveragesFeaturesSection() {
  const cards = [
    {
      icon: "/Images/Dropdownassests/Solutions/Perfomancesuite/Tick.png",
      title: "End-to-End Traceability for Food Safety",
      text: "Track every ingredient and finished product with robust lot and serial number tracking, expiration dates, and detailed history. Essential for food safety, recalls, and regulatory compliance.",
    },
    {
      icon: "/Images/Dropdownassests/Solutions/Perfomancesuite/Tick.png",
      title: "Real-Time Perishable Inventory Tracking",
      text: "Monitor perishable stock levels in real-time, including 'best by' and 'use by' dates. Minimize spoilage, reduce waste, and ensure product freshness.",
    },
    {
      icon: "/Images/Dropdownassests/Solutions/Perfomancesuite/Tick.png",
      title: "AI-Powered Demand Forecasting for Fresh Goods",
      text: "Leverage Accurack's AI to accurately predict demand for perishable items, optimizing purchasing and production to reduce spoilage and maximize freshness for customers",
    },
    {
      icon: "/Images/Dropdownassests/Solutions/Perfomancesuite/Tick.png",
      title: "Optimized Refrigerated Logistics",
      text: "Manage the unique challenges of food & beverage logistics, including temperature-controlled shipping and cold chain management. Track deliveries and ensure product integrity.",
    },
  ];

  return (
    <section className="w-full bg-background py-20 px-4 sm:px-8 lg:px-16">
      <Header title="Food & Beverage Solutions" />

      {/* ✅ Main Layout */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        {/* Left Image */}
        <div className="flex-shrink-0">
          <Image
            src="/Images/Dropdownassests/Solutions/Perfomancesuite/Sideimg.png"
            alt="Analytics"
            width={352}
            height={587}
            className="rounded-3xl object-cover"
          />
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {cards.map((card, idx) => (
            <Card
              key={idx}
              icon={card.icon}
              title={card.title}
              text={card.text}
              iconWidth={16}
              iconHeight={16}
              variant="classic"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

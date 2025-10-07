"use client";

import Image from "next/image";
import Header from "@/components/ui/Headers/Header";
import Card from "@/components/ui/Card/Card";
import { motion } from "framer-motion";

export default function AutomationFeaturesSection() {
  const cards = [
    {
      icon: "/Images/Dropdownassests/Solutions/Perfomancesuite/Tick.png",
      title: "Real-Time Inventory Tracking for Production",
      text: "Monitor raw materials, work-in-progress (WIP), and finished goods in real-time. Ensure components are always available for production, preventing costly delays.",
    },
    {
      icon: "/Images/Dropdownassests/Solutions/Perfomancesuite/Tick.png",
      title: "AI-Powered Material Forecasting",
      text: "Leverage Accurack's AI to accurately predict future material needs based on production schedules and sales forecasts. Optimize purchasing and minimize holding costs for raw materials.",
    },
    {
      icon: "/Images/Dropdownassests/Solutions/Perfomancesuite/Tick.png",
      title: "Automated Purchasing & BOM Management",
      text: "Streamline material orders with automated purchase orders triggered by production demands. Manage complex Bills of Materials (BOMs) with ease, ensuring accurate assembly",
    },
    {
      icon: "/Images/Dropdownassests/Solutions/Perfomancesuite/Tick.png",
      title: "Compliance & Lot/Serial Traceability",
      text: "Maintain strict compliance with industry regulations. Track lot and serial numbers for every component and finished product, providing complete traceability essential for quality control and recalls.",
    },
  ];

  return (
    <section className="w-full bg-background py-20 px-4 sm:px-8 lg:px-16">
      <Header title="Food & Beverage Solutions" />

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <Image
            src="/Images/Dropdownassests/Solutions/Perfomancesuite/Sideimg.png"
            alt="Analytics"
            width={352}
            height={587}
            className="rounded-3xl object-cover"
            onError={(e) => {
              e.target.src = "/api/placeholder/352/587";
            }}
          />
        </motion.div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-[900px]">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
              className="w-full max-w-[400px]"
            >
              <Card
                icon={card.icon}
                title={card.title}
                text={card.text}
                iconWidth={16}
                iconHeight={16}
                variant="classic"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

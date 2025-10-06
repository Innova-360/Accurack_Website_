"use client";

import Image from "next/image";
import Header from "@/components/ui/Headers/Header";
import Card from "@/components/ui/Card/Card";

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

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section>
      <Header title="Connect & Automate Your Business" />

      {/* ✅ Main Layout */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Image */}
        <motion.div variants={item}>
          <Image
            src="/Images/Dropdownassests/Solutions/InventorySolutions/Sideimg.png"
            alt="Feature"
            width={500}
            height={500}
          />
        </motion.div>

        {/* Right Cards */}
        <div>
          {cards.map((card, idx) => (
            <motion.div key={idx} variants={item}>
              <Card icon={card.icon} title={card.title} text={card.text} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

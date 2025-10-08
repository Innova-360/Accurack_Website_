"use client";
import { motion } from "framer-motion";
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

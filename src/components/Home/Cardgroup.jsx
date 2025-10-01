"use client";

import Card from "../Card/Card";
import { motion } from "motion/react";

export default function CardSection() {
  return (
    <section
      className="py-12 sm:py-16"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #B9FFF2 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 ml-2 sm:ml-6 lg:ml-17">
        {/* 🔹 Heading */}
        <div
          style={{ fontFamily: "'Lora', serif" }}
          className="flex flex-col items-start text-left mb-12 gap-2"
        >
          {/* Top Rated text */}
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
            className="px-4 py-1 border border-[#000000] rounded-[7px] text-[16px] font-medium"
          >
            Top Rated
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
            className="font-medium text-[48px] leading-[100%] text-[#070709]"
          >
            Find Out Why We’re Rated #1
          </motion.h2>
        </div>

        {/* 🔹 Cards Row */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="flex gap-6 overflow-x-auto lg:overflow-visible pb-4"
        >
          <Card
            icon="/Images/Cardsection/Frame.png"
            title="AI Forecasting"
            text="Accurately predict demand with AI to make smarter purchasing decisions and optimize inventory levels."
          />
          <Card
            icon="/Images/Cardsection/Multi.png"
            title="Multi-Warehouse Management"
            text="Centralize control of all your storage spaces to streamline transfers and logistics."
          />
          <Card
            icon="/Images/Cardsection/Advance.PNG"
            title="Advanced Analytics"
            text="Get real-time stock visibility across all locations to reduce errors and prevent stockouts."
          />
          <Card
            icon="/Images/cardsection/Bus.PNG"
            title="Seamless Logistics"
            text="Streamline your supply chain with real-time visibility and automated workflows for a smooth end-to-end logistics experience."
          />
          <Card
            icon="/Images/cardsection/ChartLineUp.png"
            title="Inventory Tracking"
            text="Track stock in real-time across all locations to reduce errors and prevent stockouts. Build custom reports of your choice."
          />
        </motion.div>
      </div>
    </section>
  );
}

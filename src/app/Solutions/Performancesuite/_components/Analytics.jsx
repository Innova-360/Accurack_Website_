"use client";

import Image from "next/image";
import Header from "@/components/ui/Headers/Header";
import Card from "@/components/ui/Card/Card";



export default function AnalyticsSection() {
  const cards = [
    {
      icon: "/Images/Dropdownassests/Solutions/Perfomancesuite/Tick.png",
      title: "Customizable Reports",
      text: "Generate tailored reports for every aspect of your business – sales performance, inventory valuation, vendor reliability, purchasing trends, and more. Get the data you need, exactly how you need it.",
    },
    {
      icon: "/Images/Dropdownassests/Solutions/Perfomancesuite/Tick.png",
      title: "Real-Time Dashboards",
      text: "Access intuitive, real-time dashboards that provide an instant snapshot of your key performance indicators (KPIs). Monitor inventory levels, sales velocity, and operational efficiency at a glance.",
    },
    {
      icon: "/Images/Dropdownassests/Solutions/Perfomancesuite/Tick.png",
      title: "Vendor Perfomance Tracking",
      text: "Evaluate your suppliers with precision. Track fulfillment rates, delivery times, and product quality to optimize your purchasing strategy and build stronger vendor relationships",
    },
    {
      icon: "/Images/Dropdownassests/Solutions/Perfomancesuite/Tick.png",
      title: "Actionable Business Insights",
      text: "Move beyond raw data. Accurack's analytics transform complex information into clear, actionable insights, empowering you to make strategic decisions that drive profitability and growth.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16">
      <Header title="Analytics & Reporting" />

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

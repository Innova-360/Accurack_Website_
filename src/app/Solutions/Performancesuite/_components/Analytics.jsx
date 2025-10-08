"use client";

import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useMemo } from "react";
import Header from "@/components/ui/Headers/Header";
import Card from "@/components/ui/Card/Card";

export default function AnalyticsSection() {
  const cards = useMemo(
    () => [
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
        title: "Vendor Performance Tracking",
        text: "Evaluate your suppliers with precision. Track fulfillment rates, delivery times, and product quality to optimize your purchasing strategy and build stronger vendor relationships.",
      },
      {
        icon: "/Images/Dropdownassests/Solutions/Perfomancesuite/Tick.png",
        title: "Actionable Business Insights",
        text: "Move beyond raw data. Accurack's analytics transform complex information into clear, actionable insights, empowering you to make strategic decisions that drive profitability and growth.",
      },
    ],
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-background py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
        <Header title="Analytics & Reporting" />

        {/* ✅ Main Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left Image */}
          <m.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/Images/Dropdownassests/Solutions/Perfomancesuite/Sideimg.png"
              alt="Analytics"
              width={352}
              height={587}
              loading="lazy"
              className="rounded-3xl object-cover shadow-lg"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </m.div>

          {/* Right Cards */}
          <m.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {cards.map((card, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <Card
                  icon={card.icon}
                  title={card.title}
                  text={card.text}
                  iconWidth={16}
                  iconHeight={16}
                  variant="classic"
                />
              </m.div>
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}

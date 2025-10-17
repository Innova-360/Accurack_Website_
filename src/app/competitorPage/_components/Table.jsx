"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faExclamationTriangle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function CompareTable() {


  const icons = {
    tick: { icon: faCheck, color: "#00A63E" },
    warn: { icon: faExclamationTriangle, color: "#E17100" },
    cross: { icon: faTimes, color: "#E7000B" },
  };

  const brands = [
    { name: "Accurack", logo: "/Images/CompetitorPage/Accurack.png" },
    { name: "Fishbowl", logo: "/Images/CompetitorPage/Fish.png" },
    { name: "Katana MRP", logo: "/Images/CompetitorPage/Katana.png" },
    { name: "Sortly", logo: "/Images/CompetitorPage/Sortly.png" },
    { name: "Brightpearl", logo: "/Images/CompetitorPage/Bright.png" },
  ];

  const rows = [
    {
      feature: "Pricing & Value",
      accurack: {
        type: "tick",
        text: "Custom Pricing based on needs. Flexible pricing based on customer requirements.",
      },
      comp1: {
        type: "warn",
        text: "Starting at $400/mo + $599 per integration",
      },
      comp2: {
        type: "warn",
        text: "$99–$799/mo + added user costs and 3rd-party apps",
      },
      comp3: {
        type: "warn",
        text: "Affordable, but limited in scope (no advanced features)",
      },
      comp4: {
        type: "warn",
        text: "$1,000–$1,500/mo, hidden costs for EDI, integrations",
      },
    },
    {
      feature: "Integrations",
      accurack: {
        type: "tick",
        text: "100+ native integrations, including CRM, ERP, and shipping platforms. Custom integrations available within 7 days.",
      },
      comp1: { type: "warn", text: "~45" },
      comp2: { type: "cross", text: "27" },
      comp3: { type: "cross", text: "Few" },
      comp4: {
        type: "warn",
        text: "~67, but EDI/payments rely on 3rd parties",
      },
    },
    {
      feature: "Implementation Speed",
      accurack: {
        type: "tick",
        text: "Quick SaaS onboarding with physical customer support.",
      },
      comp1: { type: "cross", text: "Requires onsite servers" },
      comp2: { type: "tick", text: "Fairly quick" },
      comp3: { type: "warn", text: "Easy but limited" },
      comp4: { type: "warn", text: "Clunky onboarding, reliance on partners" },
    },
    {
      feature: "Inventory Management",
      accurack: {
        type: "tick",
        text: "Advanced real-time inventory with automation, customizable capacity management, and forecasting.",
      },
      comp1: {
        type: "warn",
        text: "Robust WMS, but requires servers for full functionality",
      },
      comp2: {
        type: "warn",
        text: "Good real-time inventory, but geared for small manufacturers",
      },
      comp3: {
        type: "warn",
        text: "Mobile-first tracking, good for small/simple setups",
      },
      comp4: {
        type: "warn",
        text: "Strong retail focus, but limited for advanced inventory complexity",
      },
    },
    {
      feature: "Warehouse Management",
      accurack: {
        type: "tick",
        text: "Full warehouse management with customizable layouts, cross-docking, cold storage, and buffer zone management.",
      },
      comp1: {
        type: "warn",
        text: "On-premise or hosted setups often required for full functionality",
      },
      comp2: {
        type: "warn",
        text: "Some parts may be add-ons in certain plan tiers",
      },
      comp3: { type: "cross", text: "Not available" },
      comp4: {
        type: "cross",
        text: "Lacks advanced warehouse management features",
      },
    },
    {
      feature: "Supplier Management",
      accurack: {
        type: "tick",
        text: "Full supplier management, performance tracking, and automated purchasing workflows.",
      },
      comp1: { type: "warn", text: "Has limitations and requires add-ons" },
      comp2: {
        type: "warn",
        text: "Lacks supplier performance tracking and deep analytics",
      },
      comp3: {
        type: "warn",
        text: "Lacks supplier performance tracking and deep analytics",
      },
      comp4: { type: "tick", text: "Available" },
    },
    {
      feature: "Native B2B Portal & Payments",
      accurack: {
        type: "tick",
        text: "Native B2B portal with integrated payments and customizable features.",
      },
      comp1: { type: "warn", text: "Extra fee" },
      comp2: { type: "cross", text: "Not available" },
      comp3: { type: "warn", text: "Available only as paid add-on ($200/mo)" },
      comp4: { type: "cross", text: "Relies on Shopify, no native B2B" },
    },
    {
      feature: "Manufacturing Built-in",
      accurack: {
        type: "tick",
        text: "Built-in BOMs, batch/serial tracking, final assembly, and scheduling.",
      },
      comp1: { type: "warn", text: "Available (requires onsite servers)" },
      comp2: { type: "warn", text: "MRP-focused, but basic scheduling" },
      comp3: { type: "cross", text: "Not available" },
      comp4: { type: "cross", text: "Not supported" },
    },
    {
      feature: "Sales Order Automation",
      accurack: {
        type: "tick",
        text: "Full automation for sales orders, including integrations for fast order fulfillment.",
      },
      comp1: { type: "cross", text: "Not available" },
      comp2: { type: "cross", text: "Not available" },
      comp3: { type: "warn", text: "Requires add-ons/workarounds" },
      comp4: { type: "warn", text: "Limited automation; inefficiencies" },
    },
    {
      feature: "Reporting & Analytics",
      accurack: {
        type: "tick",
        text: "Advanced built-in reporting with real-time analytics and customizable dashboards.",
      },
      comp1: {
        type: "warn",
        text: "Limited, often custom reports take months",
      },
      comp2: { type: "cross", text: "Needs 3rd-party app" },
      comp3: { type: "warn", text: "Basic" },
      comp4: { type: "warn", text: "Weak analytics; incomplete exports" },
    },
    {
      feature: "Multi-Currency Support",
      accurack: {
        type: "tick",
        text: "Full multi-currency support with real-time exchange rate management.",
      },
      comp1: { type: "cross", text: "US/Canada only" },
      comp2: { type: "warn", text: "Only higher plans" },
      comp3: { type: "warn", text: "Limited tax coverage" },
      comp4: { type: "warn", text: "Limited; gaps in accounting" },
    },
    {
      feature: "Customer Support",
      accurack: {
        type: "tick",
        text: "Physical customer support for onboarding, and ongoing dedicated support through multiple channels including email, phone, and chat.",
      },
      comp1: { type: "warn", text: "Limited, mostly email-based" },
      comp2: { type: "warn", text: "Limited support" },
      comp3: { type: "warn", text: "Limited support" },
      comp4: { type: "warn", text: "Limited support; mostly self-service" },
    },
  ];

  return (

    <div className="w-full flex flex-col items-center px-4 py-16 bg-white">
  <h1 className="font-heading font-medium text-5xl leading-[48px] tracking-[-0.02em] text-center text-rowline2 mb-10">
    Compare Accurack vs Competitors
  </h1>

  {/* TABLE WRAPPER */}
  <div className="w-full flex justify-center md:justify-start md:pl-6">
  <div className="w-full overflow-x-auto md:overflow-x-visible">
    <table className="min-w-[700px] md:w-[1279px] border border-border1 rounded-[12px] text-sm md:text-base border-separate border-spacing-0">

        <thead className="bg-tablehead">
          <tr>
            {/* Fixed Feature Header */}
            <th className="py-5 px-3 text-left w-[180px] font-bold text-desclight border border-border1 sticky left-0 bg-tablehead z-20">
              Features
            </th>

            {/* Brand Headers */}
            {brands.map((brand, i) => (
              <th
                key={i}
                className={`py-4 px-4 text-center border min-w-[220px] md:min-w-0 ${
                  brand.name === "Accurack"
                    ? "bg-tablecol border border-tablecolbord"
                    : "border-border1"
                }`}
              >
                <div className="flex flex-col justify-center">
                  <div className="relative w-[42px] h-[47px] mb-2">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[16px] font-bold text-left  text-desclight">
                    {brand.name}
                  </p>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="text-center">
              {/* Fixed Feature Column */}
              <td className="border border-border1 text-left px-4 py-3 text-[15px] font-bold text-desclight align-top w-[180px] bg-white sticky left-0 z-10">
                {row.feature}
              </td>

              {/* Scrollable competitor columns */}
              {["accurack", "comp1", "comp2", "comp3", "comp4"].map((col, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 min-w-[220px] md:min-w-0 ${
                    col === "accurack"
                      ? "bg-tablecol border border-tablecolbord"
                      : "border border-border1"
                  }`}
                >
                  <div className="flex items-start pl-4 h-full">
                    <FontAwesomeIcon
                      icon={icons[row[col].type].icon}
                      color={icons[row[col].type].color}
                      className="w-4 h-4 flex-shrink-0 mt-[2px] mr-[2px]"
                    />
                    <span className="text-desclight  font-normal text-[16px] leading-[24px] tracking-[0px]">
                      {row[col].text}
                    </span>
                  </div>
                </td>
              ))}                                                                
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>





    





    





    




    












    
  );
}

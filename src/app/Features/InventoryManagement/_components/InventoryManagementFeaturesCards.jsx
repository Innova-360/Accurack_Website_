"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faBell,
  faBarcode,
  faHistory,
  faMapMarkedAlt,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import Card from "@/components/ui/Card/Card";
import Header from "@/components/ui/Headers/Header";

// --- Data ---
const CardData = [
  {
    icon: faBoxOpen,
    title: "Real-Time Tracking",
    text: "Instantly monitor stock levels, movements, and locations. Every scan, sale, and transfer updates your inventory in real-time.",
  },
  {
    icon: faBell,
    title: "Automated Alerts & Reorder Points",
    text: "Set smart low-stock alerts and auto-generate purchase orders at reorder points — stay ahead of stockouts effortlessly.",
  },
  {
    icon: faBarcode,
    title: "Efficient Barcode Scanning",
    text: "Accelerate receiving, picking, and counting with integrated barcode scanning, reducing human error across operations.",
  },
  {
    icon: faHistory,
    title: "Comprehensive Inventory History",
    text: "View every item’s full audit trail: who moved it, when, and where. Gain complete transparency and compliance-ready logs.",
  },
  {
    icon: faMapMarkedAlt,
    title: "Seamless Multi-Location Support",
    text: "Unify inventory across warehouses, outlets, and mobile units. Manage transfers intelligently and maximize visibility.",
  },
  {
    icon: faCheckCircle,
    title: "Compliance & Traceability",
    text: "Meet regulations with robust lot and serial tracking — perfect for industries like healthcare and food supply chains.",
  },
];

export default function InventoryManagementFeaturesCards() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-gradient-to-b from-white to-[#F8FAFB] py-16 overflow-hidden">
        {/* ✅ Section Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Header
            title="Core Inventory Management Features"
            className="mb-10 text-center"
          />
        </m.div>

        {/* ✅ Cards Grid */}
        <m.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {CardData.map((card, i) => (
            <m.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Card
                icon={
                  <FontAwesomeIcon
                    icon={card.icon}
                    className="text-[28px] text-[#1D3557]"
                  />
                }
                title={card.title}
                text={card.text}
                variant="glow"
                iconWidth={28}
                iconHeight={28}
                iconGlow
              />
            </m.div>
          ))}
        </m.div>
      </section>
    </LazyMotion>
  );
}

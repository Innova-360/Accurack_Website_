"use client";


import Card from "@/components/ui/Card/Card";
import Header from "@/components/ui/Headers/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faBell, faBarcode, faHistory, faMapMarkedAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const CardData = [
  {
    icon: <FontAwesomeIcon icon={faBoxOpen} className="fa-3x" />,
    title: "Real-Time Tracking",
    text: "Instantly monitor stock levels, movements, and locations. Every scan, every sale, every transfer updates your inventory in real-time.",
  },
  {
    icon: <FontAwesomeIcon icon={faBell} className="fa-3x" />,
    title: "Automated Alerts & Reorder Points",
    text: "Never run out of critical stock. Set customizable low-stock alerts and automatically trigger purchase orders when inventory reaches predefined reorder points, ensuring optimal stock levels.",
  },
  {
    icon: <FontAwesomeIcon icon={faBarcode} className="fa-3x" />,
    title: "Efficient Barcode Scanning",
    text: "Speed up receiving, picking, packing, and cycle counting. Use mobile devices with integrated barcode scanning for fast, accurate data entry and reduced human error across your operations.",
  },
  {
    icon: <FontAwesomeIcon icon={faHistory} className="fa-3x" />,
    title: "Comprehensive Inventory History",
    text: "Access a detailed audit trail of every item's journey. Track who moved what, when, and where, providing complete transparency and supporting compliance and quality control.",
  },
  {
    icon: <FontAwesomeIcon icon={faMapMarkedAlt} className="fa-3x" />,
    title: "Seamless Multi-Location Support",
    text: "Manage inventory across multiple warehouses, retail outlets, and even mobile units. Gain a unified view of your entire stock portfolio and optimize transfers between locations.",
  },
  {
    icon: <FontAwesomeIcon icon={faCheckCircle} className="fa-3x" />,
    title: "Compliance & Traceability",
    text: "Meet industry regulations with robust lot and serial number tracking. Essential for industries like food & beverage and healthcare, ensuring complete product traceability from origin to customer.",
  },
];

export default function InventoryManagementFeaturesCards() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#F8FAFB] py-16">
      {/* Section Header */}
      <Header title="Core Inventory Management Features" className="mb-10 text-center" />

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {CardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            text={card.text}
            className="bg-white rounded-3xl p-2 py-6 border border-primary-bright shadow-[0px_11px_0px_0px_rgba(0,_0,_0,_0.1)] transition-all duration-300"
            contentClass="flex flex-col items-center text-center"
            titleClass="font-semibold text-xl text-primary mt-4"
            textClass="text-sm text-gray-500 leading-6 mt-2"
            iconWrapperClass="flex items-center justify-center text-line"
            iconWidth={28}
            iconHeight={28}
            iconGlow
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Img from "../../ui/Image/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-regular-svg-icons";
import { faGear, faCheckDouble } from "@fortawesome/free-solid-svg-icons";

export default function AdvancedFeatures() {
  const tabs = [
    "Real-Time Tracking",
    "Automated Replenishment",
    "Barcode Scanning",
    "Multi-Location Support",
    "Inventory History & Traceability",
  ];

  const images = [
    "/Images/Dropdownassests/Solutions/InventorySolutions/Realtime.png",
    "/Images/Dropdownassests/Solutions/InventorySolutions/Automated.png",
    "/Images/Dropdownassests/Solutions/InventorySolutions/Barcode.png",
    "/Images/Dropdownassests/Solutions/InventorySolutions/Multi.png",
    "/Images/Dropdownassests/Solutions/InventorySolutions/History.png",
  ];

  const backgrounds = [
    "#85DEED",
    "#85EDD8",
    "#ADD6FF",
    "#E5DFB1",
    "#ECDAFA",
  ];

  const [active, setActive] = useState(0);

  const IconWrapper = ({ icon }) => (
    <div
      className="flex items-center justify-center"
      style={{
        width: 40,
        height: 40,
        backgroundColor: "#0B6D7E1A",
        borderRadius: "50%",
        padding: 8,
      }}
    >
      <FontAwesomeIcon icon={icon} size="lg" color="#0B6D7E" />
    </div>
  );

  return (
    <section className="w-full bg-white py-12 overflow-hidden no-scrollbar">
      <div className="max-w-[1253px] mx-auto px-6 lg:px-20">
        {/* Heading */}
        <h2
          className="mx-auto text-center"
          style={{
            fontFamily: "Lora, serif",
            fontWeight: 500,
            fontSize: "32px",
            lineHeight: "48px",
            letterSpacing: "-2%",
            color: "#0D0D0D",
          }}
        >
          Advanced Inventory Management Features
        </h2>

        {/* Tabs */}
        <div className="mt-8 flex justify-center">
          <nav
            className="flex justify-between gap-6 lg:gap-10 no-scrollbar overflow-hidden"
            style={{
              maxWidth: "1100px",
              width: "100%",
            }}
          >
            {tabs.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="relative pb-4 focus:outline-none text-center"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: isActive ? 600 : 400,
                    fontSize: "clamp(13px, 1.2vw, 18px)", // responsive size
                    color: "#000",
                    maxWidth: "260px", // ✅ bigger width for long text
                    whiteSpace: "normal", // ✅ allow full text
                  }}
                  title={t}
                >
                  {t}
                  <span
                    className="absolute left-0 bottom-0 h-[2px] transition-all"
                    style={{
                      width: isActive ? "100%" : "0%",
                      backgroundColor: "#0B6D7E",
                    }}
                  />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        <div
          className="mt-12 flex flex-col lg:flex-row items-start gap-10 p-8 rounded-lg"
          style={{ backgroundColor: backgrounds[active] }}
        >
          {/* Left */}
          <div className="w-full lg:w-1/2">
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "20px",
                color: "#2B3954",
                marginBottom: "12px",
              }}
            >
              {tabs[active]}
            </h3>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#2B3954",
                marginBottom: "24px",
              }}
            >
              Automate repetitive tasks to free up your team for strategic
              growth.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <IconWrapper icon={faFaceFrown} />
                <p style={{ fontSize: "16px", color: "#000" }}>
                  <strong>The Problem:</strong> Retail Co. struggled with manual
                  inventory tracking and frequent stockouts, which resulted in
                  lost sales and customer frustration.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <IconWrapper icon={faGear} />
                <p style={{ fontSize: "16px", color: "#000" }}>
                  <strong>The Solution:</strong> Accurack implemented its
                  AI-powered platform to provide real-time inventory tracking,
                  multi-warehouse visibility, and a robust AI forecasting engine.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <IconWrapper icon={faCheckDouble} />
                <p style={{ fontSize: "16px", color: "#000" }}>
                  <strong>The Result:</strong> A 30% reduction in stockouts, a
                  15% improvement in order fulfillment accuracy, and a
                  significant boost in customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div
              style={{
                width: 368,
                height: 368,
                boxShadow: "16px 17px 0 rgba(0,0,0,0.31)",
              }}
            >
              <Img
                key={active}
                src={images[active]}
                alt={tabs[active]}
                width={368}
                height={368}
                quality={100}
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Remove scrollbar CSS */}
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

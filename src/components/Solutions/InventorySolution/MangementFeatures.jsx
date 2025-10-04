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

  const backgrounds = ["bg-bg1", "bg-bg2", "bg-bg3", "bg-bg4", "bg-bg5"];

  const [active, setActive] = useState(0);

  const IconWrapper = ({ icon }) => (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-iconbg p-2">
      <FontAwesomeIcon icon={icon} className="text-line text-lg" />
    </div>
  );

  return (
    <section className="w-full bg-white py-12 overflow-hidden no-scrollbar">
      <div className="max-w-[1253px] mx-auto px-6 lg:px-20">
        {/* Heading */}
        <h2 className="mx-auto text-center font-heading font-medium text-[32px] leading-[48px] tracking-[-0.02em] text-text">
          Advanced Inventory Management Features
        </h2>

        {/* Tabs - same for desktop and mobile */}
        <div className="mt-8 flex justify-center">
          <nav className="flex justify-between gap-6 lg:gap-10 no-scrollbar overflow-x-auto lg:overflow-hidden max-w-[1100px] w-full">
            {tabs.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t}
                  onMouseEnter={() =>
                    window.innerWidth >= 1024 && setActive(i)
                  } // Desktop hover only
                  onClick={() => setActive(i)} // Mobile + Desktop click
                  className={`relative pb-4 focus:outline-none text-center font-body font-normal max-w-[260px] whitespace-nowrap text-[clamp(13px,1.2vw,18px)] ${
                    isActive ? "font-semibold" : "font-normal"
                  } text-text`}
                >
                  {t}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] transition-all ${isActive ? "w-full bg-line" : "w-0"
                      }`}
                  />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        <div
          className={`mt-12 flex flex-col lg:flex-row items-start gap-10 p-8 rounded-lg ${backgrounds[active]}`}
        >
          {/* Mobile Image First */}
          <div className="block lg:hidden w-full flex justify-center mb-6">
            <div className="w-[300px] sm:w-[368px] h-auto shadow-[12px_12px_0_rgba(0,0,0,0.25)]">
              <Img
                key={active}
                src={images[active]}
                alt={tabs[active]}
                width={368}
                height={368}
                quality={100}
                priority
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Left (Desktop Text) */}
          <div className="w-full lg:w-1/2">
            <h3 className="font-heading font-semibold text-[20px] text-text mb-3 text-center lg:text-left">
              {tabs[active]}
            </h3>
            <p className="font-body font-normal text-[16px] text-desc mb-6 text-center lg:text-left">
              Automate repetitive tasks to free up your team for strategic
              growth.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <IconWrapper icon={faFaceFrown} />
                <p className="text-[16px] font-body text-text">
                  The Problem: Retail Co. struggled with manual inventory
                  tracking and frequent stockouts, which resulted in lost sales
                  and customer frustration.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <IconWrapper icon={faGear} />
                <p className="text-[16px] font-body text-text">
                  The Solution: Accurack implemented its AI-powered platform to
                  provide real-time inventory tracking, multi-warehouse
                  visibility, and a robust AI forecasting engine.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <IconWrapper icon={faCheckDouble} />
                <p className="text-[16px] font-body text-text">
                  The Result: A 30% reduction in stockouts, a 15% improvement in
                  order fulfillment accuracy, and a significant boost in
                  customer satisfaction.
                </p>
              </div>
            </div>

            {/* Mobile slider dots INSIDE content */}
            <div className="flex justify-center items-center gap-2 mt-6 lg:hidden">
              {tabs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    active === i ? "bg-line scale-125" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right (Desktop Image) */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center lg:justify-end">
            <div className="w-[368px] h-[368px] shadow-[16px_17px_0_rgba(0,0,0,0.31)]">
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

    </section>
  );
}

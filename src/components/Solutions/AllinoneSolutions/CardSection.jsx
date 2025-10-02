"use client";

import Image from "next/image";
import Card from "../../Card/Card"; // apne Card ka sahi path lagao

export default function InventoryFeatures() {
  return (
    <section className="relative w-full bg-gray-900 text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/Images/Dropdownassests/Solutions/AllinoneSolutions/Cardbg.png"
          alt="background"
          fill
          className="object-cover opacity-20 -top-[350px]"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 🔹 Left Side Content */}
          <div>
            <h2 className="font-[Lora] font-medium text-[32px] sm:text-[40px] lg:text-[48px] leading-[130%] tracking-[-0.02em] text-white max-w-[598px] mb-6">
              Advanced Inventory Management Features
            </h2>
            <p className="font-normal text-[16px] leading-[24px] text-gray-500 max-w-[612px]">
              Join hundreds of businesses optimizing their operations with
              Accurack.
            </p>
          </div>

          {/* 🔹 Top Right Large Card */}
          <div className="flex justify-start">
            <Card
              icon="/Images/Dropdownassests/Solutions/AllinoneSolutions/Icon.png"
              title="For E-Commerce"
              text="Optimize online inventory and fulfillment. Sync product listings, stock levels, and order updates across multiple e-commerce platforms in real time. Leverage AI-driven demand forecasting to reduce overselling, minimize returns."
              className="w-full max-w-[643px] h-auto min-h-[327px] bg-white/5 backdrop-blur-md rounded-[20px] p-6 flex flex-col items-start text-left border border-white/15"
              contentClass="items-start text-left"
              titleClass="font-jakarta font-medium text-[20px] leading-[120%] text-white mt-6 mb-4"
              textClass="font-jakarta font-normal text-[16px] leading-[140%] text-white max-w-[350px]"
              iconWrapperClass="w-[63.23px] h-[58px] rounded-[158.08px] bg-white/10 flex items-center justify-center p-[12.65px] mb-2"
              iconWidth={32.71}
              iconHeight={32.71}
            />
          </div>
        </div>

        {/* 🔹 Bottom 4 Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <Card
                key={i}
                icon="/Images/Dropdownassests/Solutions/AllinoneSolutions/Icon.png"
                title="For E-Commerce"
                text="Optimize online inventory and fulfillment. Sync product listings, stock levels, and order updates across multiple e-commerce platforms in real time. Leverage AI-driven demand forecasting to reduce overselling, minimize returns."
                className="w-full h-auto min-h-[327px] bg-white/5 backdrop-blur-md rounded-[20px] p-6 flex flex-col items-start text-left border border-white/15"
                contentClass="items-start text-left"
                titleClass="font-jakarta font-medium text-[20px] leading-[120%] text-white mt-6 mb-4"
                textClass="font-jakarta font-normal text-[16px] leading-[140%] text-white max-w-[350px]"
                iconWrapperClass="w-[63.23px] h-[58px] rounded-[158.08px] bg-white/10 flex items-center justify-center p-[12.65px] mb-2"
                iconWidth={32.71}
                iconHeight={32.71}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

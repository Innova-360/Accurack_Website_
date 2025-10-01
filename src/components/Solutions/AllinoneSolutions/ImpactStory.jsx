"use client";

import Image from "next/image";

export default function ImpactStory() {
  return (
    <section className="relative w-full text-white overflow-hidden">
      {/* 🔹 Background Image + Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/Images/Dropdownassests/Solutions/AllinoneSolutions/Bgimpact.jpg" // apna bg image path lagao
          alt="background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#074854E5]" /> {/* overlay */}
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* 🔹 Left Content */}
        <div className="flex flex-col">
          {/* top icon */}
          <Image
            src="/Images/Dropdownassests/Solutions/AllinoneSolutions/invertedcommas1.png" // apna icon path
            alt="top icon"
            width={32}
            height={35.16}
            className="mb-6"
          />

          {/* main heading */}
          <h2 className="font-[Lora] font-medium text-[28px] sm:text-[36px] lg:text-[48px] leading-[130%] tracking-[-0.02em] text-white max-w-[712px] mb-6">
            Transforming Businesses: An Impact Story
          </h2>

          {/* sub text */}
          <p className="font-jakarta font-normal text-[16px] leading-[100%] text-[#FCFCFCE5] mb-8">
            See how HM Warehouse leveraged Accurack's AI-driven insights to
            reduce their inventory holding costs by 20%.
          </p>

          {/* Before Accurack */}
          <h3 className="font-jakarta font-semibold text-[18px] leading-[26px] text-white mb-2">
            Before Accurack
          </h3>
          <p className="font-jakarta font-normal text-[16px] leading-[100%] text-white mb-6">
            HM Warehouse, a regional retailer, faced unpredictable stockouts and
            excessive holding costs. Manual forecasting methods couldn’t keep up
            with fluctuating consumer demand. Resulted in lost sales and
            operational inefficiencies.
          </p>

          {/* After Accurack */}
          <h3 className="font-jakarta font-semibold text-[18px] leading-[100%] text-white mb-2">
            After Implementing Accurack
          </h3>
          <p className="font-jakarta font-normal text-[16px] leading-[100%] text-white mb-6">
            Adopted AI-powered forecasting and multi-warehouse management. <br /> Gained
            real-time visibility and predictive insights.
          </p>

          {/* Within six months */}
          <h3 className="font-jakarta font-semibold text-[18px] leading-[100%] text-white mb-2">
            Within six months:
          </h3>
          <p className="font-jakarta font-normal text-[16px] leading-[100%] text-white mb-6">
            Reduced inventory holding costs by 20%. <br /> Increased order fulfillment
            speed by 15%. <br /> Enabled focus on expanding market reach.
          </p>

          {/* Outcome */}
          <h3 className="font-jakarta font-semibold text-[18px] leading-[100%] text-white mb-2">
            Outcome
          </h3>
          <p className="font-jakarta font-normal text-[16px] leading-[100%] text-white mb-8">
            A strong example of how Accurack’s commitment to Innovation and
            Customer Success drives tangible results.
          </p>

          {/* bottom row (icon + text + right icon) */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/Images/Dropdownassests/Solutions/AllinoneSolutions/TJXLogo.png"
                alt="warehouse icon"
                width={54}
                height={31.75}
              />
              <span className="font-jakarta font-medium text-[18px] leading-[28px] text-white">
                AHM Warehouse
              </span>
            </div>

            <Image
              src="/Images/Dropdownassests/Solutions/AllinoneSolutions/invertedcommas2.png"
              alt="right icon"
              width={32}
              height={35.16}
            />
          </div>
        </div>

        
      </div>
        
{/* 🔹 Right Content (circle image in right corner clipped) */}
<div className="relative flex justify-end items-end">
  <div className="absolute right-0 bottom-0 translate-x-1/8 translate-y-1/6 w-[400px] h-[400px] lg:w-[660px] lg:h-[660px] overflow-hidden rounded-full">
    <Image
      src="/Images/Dropdownassests/Solutions/AllinoneSolutions/Girl.png"
      alt="Impact Story"
      fill
      className="object-cover"
    />
  </div>
</div>


        
    </section>
  );
}

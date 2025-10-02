"use client";

import Image from "next/image";
import Card from "../Card/Card";

export default function CustomerStoriesSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-20 flex flex-col gap-10 max-w-[1280px] mx-auto">
      {/* 🔹 Heading */}
      <h2
        style={{ fontFamily: "'Lora', serif" }}
        className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] leading-[38px] sm:leading-[46px] lg:leading-[54px] text-center text-gray-900 mb-10 sm:mb-14"
      >
        Customer Success Stories
      </h2>

      {/* 🔹 3 Customers with Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 justify-items-center w-full">
        {/* Ross */}
        <div className="flex flex-col items-center gap-6 w-full max-w-[400px]">
          <div className="text-center">
            <Image
              src="/Images/Homeassests/Customersection/Ross.png"
              alt="Customer 1"
              width={80}
              height={80}
              className="rounded-full mx-auto mb-2 object-cover"
            />
            <h3 className="font-jakarta font-semibold text-lg text-gray-900">
              Ross Geller
            </h3>
            <p className="font-inter font-normal text-[16px] leading-[24px] text-gray-500">
              Retail Manager
            </p>
          </div>
          <Card
            icon="/Images/Homeassests/Customersection/New.png"
            title="Better Forecasting"
            text="AccuRack gave us complete control over inventory while freeing up cash flow like never before."
            extraIcon="/Images/Homeassests/Customersection/Star.png"
            extraText="4.7"
            bottomIcon="/Images/Homeassests/Customersection/inverted.png"
          />
        </div>

        {/* Joey */}
        <div className="flex flex-col items-center gap-6 w-full max-w-[400px]">
          <div className="text-center">
            <Image
              src="/Images/Homeassests/Customersection/Joe.png"
              alt="Customer 2"
              width={80}
              height={80}
              className="rounded-full mx-auto mb-2 object-cover"
            />
            <h3 className="font-jakarta font-semibold text-lg text-gray-900">
              Joey Tribbiani
            </h3>
            <p className="font-inter font-normal text-[16px] leading-[24px] text-gray-500">
              Retail Manager
            </p>
          </div>
          <Card
            icon="/Images/Homeassests/Customersection/V.png"
            title="Team Collaboration"
            text="AccuRack's granular employee model offers complete tracking, ensuring full control and accountability."
            extraIcon="/Images/Homeassests/Customersection/Star.png"
            extraText="4.7"
            bottomIcon="/Images/Homeassests/Customersection/inverted.png"
            disableHover={true} // 🔹 hover off
          />
        </div>

        {/* Rachel */}
        <div className="flex flex-col items-center gap-6 w-full max-w-[400px]">
          <div className="text-center">
            <Image
              src="/Images/Homeassests/Customersection/Girl.jpg"
              alt="Customer 3"
              width={80}
              height={80}
              className="rounded-full mx-auto mb-2 object-cover"
            />
            <h3 className="font-jakarta font-semibold text-lg text-gray-900">
              Rachel Green
            </h3>
            <p className="font-inter font-normal text-[16px] leading-[24px] text-gray-500">
              Retail Manager
            </p>
          </div>
          <Card
            icon="/Images/Homeassests/Customersection/X.png"
            title="Faster Scaling"
            text="Managing permissions, billing, and user actions is effortless with AccuRack's Super Admin features."
            extraIcon="/Images/Homeassests/Customersection/Star.png"
            extraText="4.7"
            bottomIcon="/Images/Homeassests/Customersection/inverted.png"
          />
        </div>
      </div>
    </section>
  );
}

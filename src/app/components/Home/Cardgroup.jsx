"use client";

import Card from "../Card/Card";

export default function EmpowerSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🔹 Heading */}
        <div className="flex flex-col items-center text-center mb-12 max-w-[1200px] mx-auto gap-2">
          <h2 className="font-volkhov font-medium text-[28px] sm:text-[36px] lg:text-[48px] leading-[100%] text-gray-900">
            How Accurack <span className="text-[#0E3646]">Empowers</span>
          </h2>
          <h2 className="font-volkhov font-medium text-[28px] sm:text-[36px] lg:text-[48px] leading-[100%] text-gray-900">
            Your Business
          </h2>
        </div>

        {/* 🔹 First row: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-items-center mb-10">
          <Card
            icon="/Images/Cardsection/Frame.png"
            title="AI Forecasting"
            text="Accurately predict demand with AI to make smarter purchasing decisions and optimize inventory levels."
          />
          <Card
            icon="/Images/Cardsection/Multi.png"
            title="Multi-Warehouse Management"
            text="Centralize control of all your storage spaces to streamline transfers and logistics."
          />
          <Card
            icon="/Images/Cardsection/Advance.PNG"
            title="Advanced Analytics"
            text="Get real-time stock visibility across all locations to reduce errors and prevent stockouts."
          />
        </div>

        {/* 🔹 Second row: 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 justify-items-center max-w-4xl mx-auto">
          <Card
            icon="/Images/cardsection/Bus.PNG"
            title="Seamless Logistics"
            text="Streamline your supply chain with real-time visibility and automated workflows for a smooth end-to-end logistics experience."
          />
          <Card
            icon="/Images/cardsection/ChartLineUp.png"
            title="Inventory Tracking"
            text="Track stock in real-time across all locations to reduce errors and prevent stockouts. Build custom reports of your choice."
          />
        </div>
      </div>
    </section>
  );
}

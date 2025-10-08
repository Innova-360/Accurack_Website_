"use client";

import Image from "next/image";
import Header from "@/components/ui/Headers/Header";
import Card from "@/components/ui/Card/Card";



export default function PartnerType() {
  const cards = [
    {
      icon: "/Images/Dropdownassests/Partners/PartnersDirectory/Icon1.png",
      title: "Resellers",
      text: "Offer Accurack to your clients, expand your portfolio, and earn commissions on every sale.",
    },
    {
      icon: "/Images/Dropdownassests/Partners/PartnersDirectory/Icon2.png",
      title: "Integrators",
      text: "Build custom integrations with Accurack, delivering enhanced solutions to your clients.",
    },
    {
      icon: "/Images/Dropdownassests/Partners/PartnersDirectory/Icon3.png",
      title: "Technology Partners.",
      text: "Connect your software with Accurack to create a seamless ecosystem of tools",
    },
    {
      icon: "/Images/Dropdownassests/Partners/PartnersDirectory/Icon4.png",
      title: "Referral Partners",
      text: "Earn rewards simply by referring businesses to Accurack.",
    },
  ];

  return (
    <section className="w-full bg-background py-20 px-4 sm:px-8 lg:px-16">
      <Header title="Partner Types" />

      {/* ✅ Main Layout */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        {/* Left Image */}
        <div className="flex-shrink-0">
          <Image
            src="/Images/Dropdownassests/Partners/PartnersDirectory/PartnerTypes.png"
            alt="Analytics"
            width={352}
            height={580}
            className="rounded-3xl object-cover h-105"
          />
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {cards.map((card, idx) => (
            <Card
              key={idx}
              icon={card.icon}
              title={card.title}
              text={card.text}
              iconWidth={160}
              iconHeight={16}
              variant="classic"
              iconType="2"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

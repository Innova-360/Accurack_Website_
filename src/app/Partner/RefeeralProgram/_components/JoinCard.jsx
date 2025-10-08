"use client";

import Image from "next/image";
import Header from "@/components/ui/Headers/Header";
import Card from "@/components/ui/Card/Card";

export default function JoinCard() {
  const cards = [
    {
      icon: "/Images/Dropdownassests/Partners/RefeeralProgram/Dollar.png",
      title: "Cash Commissions",
      text: "Earn 15% commission on initial subscriptions.",
    },
    {
      icon: "/Images/Dropdownassests/Partners/RefeeralProgram/Account.png",
      title: "Account Credits",
      text: "Receive $100 credit toward your own Accurack plan.",
    },
    {
      icon: "/Images/Dropdownassests/Partners/RefeeralProgram/Discount.png",
      title: "Exclusive Discounts",
      text: "Unlock partner-only offers on Accurack services.",
    },
    {
      icon: "/Images/Dropdownassests/Partners/RefeeralProgram/Access.png",
      title: "Early Access",
      text: "Be the first to test new features before public release.",
    },
  ];

  return (
    <section className="w-full bg-background py-20 px-4 sm:px-8 lg:px-16 flex flex-col items-center text-center">
      {/* ✅ Responsive Heading (nowrap on desktop, wrap on mobile) */}
      <div className="text-center max-w-[90%] sm:max-w-full sm:whitespace-nowrap mx-auto">
        <Header title="Why Join the Referral Program?" />
      </div>

      {/* ✅ Cards Row */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1200px]">
        {cards.map((card, idx) => (
          <Card
            key={idx}
            icon={card.icon}
            title={card.title}
            text={card.text}
            variant="simple"
            iconWidth={90}
            iconHeight={20}
          />
        ))}
      </div>
    </section>
  );
}

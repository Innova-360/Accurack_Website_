"use client";

import Card from "@/components/ui/Card/Card";

export default function RefeeralCard() {
  const cards = [
    {
      heading: "Step 01",
      title: "Sign Up",
      text: "Join the Accurack Referral Program in under a minute.",
    },
    {
      heading: "Step 02",
      title: "Refer a Business",
      text: "Share your unique referral link or submit a lead.",
    },
    {
      heading: "Step 03",
      title: "They Convert",
      text: "Once your referral subscribes, the process is complete.",
    },
    {
      heading: "Step 04",
      title: "Earn Rewards:",
      text: "Get rewarded with commissions, credits, or discounts.",
    },
  ];

  return (
    <section className="w-full bg-background py-20 px-4 sm:px-8 lg:px-16">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* ✅ Desktop Layout */}
        {/* Left Column (2 Cards) */}
        <div className="hidden lg:flex flex-col gap-8 w-full lg:w-1/3">
          <Card
            heading={cards[0].heading}
            title={cards[0].title}
            text={cards[0].text}
            variant="classic"
          />
          <Card
            heading={cards[1].heading}
            title={cards[1].title}
            text={cards[1].text}
            variant="classic"
          />
        </div>

        {/* Center Heading + Description */}
        <div className="order-1 lg:order-none flex flex-col items-center justify-center text-center max-w-[400px]">
          <h2 className="font-heading text-[32px] sm:text-[40px] font-medium text-text leading-tight mb-3">
            How the Referral Program Works
          </h2>
          <p className="text-[16px] font-body sm:text-[18px] text-light leading-[140%]">
            It’s quick and simple — just follow these four easy steps to start earning rewards.
          </p>
        </div>

        {/* Right Column (2 Cards) */}
        <div className="hidden lg:flex flex-col gap-8 w-full lg:w-1/3">
          <Card
            heading={cards[2].heading}
            title={cards[2].title}
            text={cards[2].text}
            variant="classic"
          />
          <Card
            heading={cards[3].heading}
            title={cards[3].title}
            text={cards[3].text}
            variant="classic"
          />
        </div>
      </div>

      {/* ✅ Mobile Layout (only visible on small screens) */}
      <div className="flex flex-col lg:hidden mt-12 gap-8">
        {cards.map((card, index) => (
          <Card
            key={index}
            heading={card.heading}
            title={card.title}
            text={card.text}
            variant="classic"
          />
        ))}
      </div>
    </section>
  );
}

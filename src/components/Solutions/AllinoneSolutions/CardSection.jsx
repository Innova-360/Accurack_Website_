"use client";

import Image from "next/image";
import Card from "../../ui/Card/Card";

export default function InventoryFeatures({
  title = "Advanced Inventory Management Features",
  subtitle = "Join hundreds of businesses optimizing their operations with Accurack.",
  background = "/Images/Dropdownassests/Solutions/AllinoneSolutions/Cardbg.png",
  mainCard,
  cards = [],
  className = "",
}) {
  // 🔹 Helper — returns consistent props for cards
  const getCardProps = (card) => {
    const hasBg = !!card.bgImage;

    // 🔹 Remove blur and light bg if bgImage exists
    const baseClass = hasBg
      ? "relative overflow-hidden bg-black/60 border border-white/10 rounded-[20px] p-6 flex flex-col justify-end items-start text-left min-h-[327px]"
      : "bg-white/5 backdrop-blur-md border border-white/15 rounded-[20px] p-6 flex flex-col justify-end items-start text-left min-h-[327px]";

    return {
      ...card,
      className: `${baseClass} ${card.className || ""}`,
    };
  };

  return (
    <section
      className={`relative w-full bg-black text-white overflow-hidden ${className}`}
    >
      {/* 🔹 Section Background */}
      {background && (
        <div className="absolute inset-0">
          <Image
            src={background}
            alt="background"
            fill
            className="object-cover opacity-20 -top-[350px]"
          />
        </div>
      )}

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16 py-12 sm:py-16 lg:py-24">
        {/* 🔹 Header + Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-[Lora] font-medium text-[32px] sm:text-[40px] lg:text-[48px] leading-[130%] tracking-[-0.02em] text-white max-w-[598px] mb-6">
              {title}
            </h2>
            {subtitle && (
              <p className="font-normal text-[16px] leading-[24px] text-gray-500 max-w-[612px]">
                {subtitle}
              </p>
            )}
          </div>

          {/* 🔹 Main Card */}
          {mainCard && (
            <div className="flex justify-start relative">
              {mainCard.bgImage && (
                <>
                  {/* Background Image */}
                  <div className="absolute inset-0 rounded-[20px] overflow-hidden">
                    <Image
                      src={mainCard.bgImage}
                      alt="main card background"
                      fill
                      className="object-cover opacity-40"
                    />
                  </div>
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/50 rounded-[20px]" />
                </>
              )}
              <Card
                {...getCardProps(mainCard)}
                className={`relative z-10 ${mainCard.className || "max-w-[643px]"}`}
              />
            </div>
          )}
        </div>

        {/* 🔹 Bottom Cards */}
        {cards.length > 0 && (
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {cards.map((card, i) => (
              <div key={i} className="relative">
                {card.bgImage && (
                  <>
                    <div className="absolute inset-0 rounded-[20px] overflow-hidden">
                      <Image
                        src={card.bgImage}
                        alt={`card background ${i}`}
                        fill
                        className="object-cover opacity-40"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/50 rounded-[20px]" />
                  </>
                )}

                <Card {...getCardProps(card)} className="relative z-10" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
  
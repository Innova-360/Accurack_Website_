"use client";

import Image from "next/image";
import { LazyMotion, m } from "framer-motion";
import Header from "../ui/Headers/Header";

// ✅ Lazy load Framer Motion features for faster initial load

const loadFeatures = async () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function FourCardSection({ title, cards, imageClassName }) {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  return (
    <LazyMotion features={loadFeatures}>
      <section className="w-full max-w-6xl mx-auto px-6 py-10">
        <Header title={title} />

        <div className="flex flex-col gap-7 justify-center items-center w-full lg:flex-row">
          {/* Left Column */}
          <div className="flex flex-col gap-7 w-full lg:h-[150vh] relative">
            {cards.slice(0, 2).map((card, index) => (
              <m.div
                key={index}
                className={`relative flex-1 rounded-2xl overflow-hidden ${
                  index === 0 ? "rounded-tl-[130px]" : "rounded-bl-[130px]"
                }`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`${imageClassName || "object-cover"}`}
                  placeholder="blur"
                  blurDataURL="/Images/placeholder.webp"
                  {...(index === 0 ? { priority: true } : { loading: "lazy" })}
                />
                <div
                  className={`absolute inset-0 flex ${
                    index === 0 ? "items-end" : "items-start"
                  } justify-center text-left text-white bg-black/30 p-6`}
                >
                  <div className="max-w-[80%]">
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-300 font-normal leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </m.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-7 w-full lg:h-[150vh] relative">
            {cards.slice(2, 4).map((card, index) => (
              <m.div
                key={index + 2}
                className={`relative flex-1 rounded-2xl overflow-hidden ${
                  index === 0 ? "rounded-tr-[130px]" : "rounded-br-[130px]"
                }`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index + 2}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="/Images/placeholder.webp"
                />
                <div
                  className={`absolute inset-0 flex ${
                    index === 0 ? "items-end" : "items-start"
                  } justify-center text-right text-white bg-black/30 p-6`}
                >
                  <div className="max-w-[80%]">
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-300 font-normal leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

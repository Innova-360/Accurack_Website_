"use client";

import { useState, memo } from "react";
import dynamic from "next/dynamic";
import { LazyMotion, m, domAnimation } from "framer-motion";
import Button from "../ui/Button/Button";
import SuspenseWrapper from "../common/SuspenseWrapper";

// ✅ Lazy-load Img (helps bundle size + SSR safety)
const Img = dynamic(() => import("../ui/Image"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse bg-gray-100 w-[120px] h-[40px] rounded-md" />
  ),
});

function HeroSection() {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  // ✅ Memoize motion variants to avoid recreating objects on every render
  const fadeInLeft = {
    hidden: { x: -150, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeInUp = {
    hidden: { y: -150, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut", delay: 0.3 } },
  };

  return (
    <section className="w-full -mt-10 h-screen flex items-center justify-center bg-white overflow-hidden">
      <div
        className="
          w-full h-full
          px-4 sm:px-6 lg:px-[100px]
          py-10 sm:py-12 lg:py-20
          grid grid-cols-1 lg:grid-cols-2
          items-center text-center lg:text-left
          lg:gap-8 sm:gap-12 
        "
      >
        <LazyMotion features={domAnimation}>
          {/* ✅ Left Side */}
          <m.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left -mt-[9px]"
          >
            <h1
              className="max-w-[700px] font-title lg:font-black font-extrabold
              text-[24px] sm:text-[36px] lg:text-[70px]
              leading-[30px] sm:leading-[90px] lg:leading-[70.5px]
              text-[#03414B] lg:[font-stretch:expanded]"
            >
              The Smarter <br />
              Way to Manage <br />
              Inventory.
            </h1>

            <p
              className="mt-5 text-[#000000] font-body font-normal 
              text-[14px] sm:text-[12px] lg:text-[20px]
              leading-[22px] sm:leading-[66px] lg:leading-[30px]
              tracking-normal max-w-[600px]"
            >
              Discover our story, mission, and the team <br />
              behind the AI-powered solution transforming <br />
              inventory management.
            </p>

            {/* ✅ Buttons */}
            <div
              className="mt-8 sm:mb-20 flex flex-col sm:flex-row gap-4 sm:gap-6 
              justify-center lg:justify-start items-center lg:items-start w-full"
            >
              {[
                {
                  id: "demo",
                  href: "/book-demo",
                  defaultClasses:
                    "bg-gradient-to-r from-[#00B6BC] to-[#0C6676] text-white",
                  hoverClasses: "bg-[#8BEEFF] text-black w-[200px]",
                  text: "Book a Demo",
                },
                {
                  id: "trial",
                  href: "/free-trial",
                  defaultClasses: "bg-white text-[#03414B]",
                  hoverClasses: "bg-[#8BEEFF] text-black w-[200px]",
                  text: "Start Free Trial",
                },
              ].map(({ id, href, defaultClasses, hoverClasses, text }) => (
                <div
                  key={id}
                  onMouseEnter={() => setHoveredBtn(id)}
                  onMouseLeave={() => setHoveredBtn(null)}
                  className={`flex items-center justify-center gap-2
                    w-[184px] h-[48px] rounded-full border border-[#02404B]
                    transition-all duration-300 ease-in-out
                    ${
                      hoveredBtn === id
                        ? hoverClasses
                        : defaultClasses
                    }`}
                >
                  <Button
                    href={href}
                    className="!bg-transparent !text-inherit !w-full !h-full flex items-center justify-center gap-2 rounded-full"
                  >
                    <span>{text}</span>
                    {hoveredBtn === id && (
                      <SuspenseWrapper>
                        <Img
                          src="/Images/Homeassests/Heroimage/Ariconre.png"
                          alt="Arrow Icon"
                          width={26}
                          height={22}
                          className="object-contain"
                          fallback="/Images/Homeassests/Heroimage/back.jpg"
                        />
                      </SuspenseWrapper>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </m.div>

          {/* ✅ Right Side */}
          <m.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative ml-0 lg:ml-16 flex justify-center items-center lg:h-[90vh]"
          >
            <SuspenseWrapper>
              <Img
                src="/Images/Homeassests/Heroimage/Stores-2.png"
                alt="Decorative store overlay"
                width={230}
                height={60}
                className="hidden lg:block absolute top-45 left-70 z-20 object-contain"
                fallback="/Images/Homeassests/Heroimage/Stores-2.png"
              />
              <Img
                src="/Images/Homeassests/Heroimage/Stores.png"
                alt="Decorative store overlay"
                width={250}
                height={50}
                className="hidden lg:block absolute top-60 -left-30 z-20 object-contain"
                fallback="/Images/Homeassests/Heroimage/Stores.png"
              />
              <Img
                src="/Images/Homeassests/Heroimage/Loader.png"
                alt="Hero Section"
                width={951}
                height={536}
                className="object-contain w-[90%] sm:w-[380px] lg:w-[800px] mt-10 sm:-mt-10 lg:mt-38"
                fallback="/Images/Homeassests/Heroimage/Loader.png"
              />
            </SuspenseWrapper>

            {/* ✅ Stats (hidden on mobile) */}
            <m.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="hidden lg:flex absolute -top-1 right-10 flex-col items-start text-left"
            >
              <div className="flex items-center gap-3">
                <Img
                  src="/Images/Homeassests/Heroimage/Arrow.png"
                  alt="Arrow Icon"
                  width={24}
                  height={24}
                  className="object-contain bg-transparent"
                  fallback="/Images/Homeassests/Heroimage/back.jpg"
                />
                <span
                  className="text-[#03414B] font-bold text-[28px] lg:text-[52px] leading-[61px]"
                  style={{ fontFamily: "'Base Neue Trial', sans-serif" }}
                >
                  130%
                </span>
                <span className="text-[#03414B] font-bold text-base">Growth</span>
              </div>

              <p className="mt-2 text-[#050506] text-[16px] lg:text-[18px] leading-[110%] font-medium max-w-[220px]">
                Top used website for warehouse management
              </p>
            </m.div>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}

// ✅ Memoize entire HeroSection (since props don't change)
export default memo(HeroSection);

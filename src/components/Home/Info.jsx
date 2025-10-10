"use client";
import Image from "next/image";
import FloatingSquare from "../common/FloatingSquare";
import PendulumDroplet from "../common/PendulumAnimation";
import SuspenseWrapper from "../common/SuspenseWrapper";
import { BackgroundVector } from "./BackgroundVector";
import InfoTabs from "./InfoTab";
import { ScrollStickyShowcase } from "./Scroll-Sticky-Showcase";
import Button from "../ui/Button/Button";
import { motion } from "framer-motion";

export default function Info({ primaryBtnText, primaryBtnLink }) {
  const items = [
    {
      id: "section-1",
      heading: "All In One Solution",
      subheading: "Scalable Growth",
      description:
        "Automate repetitive tasks to free up your team for strategic growth. Track inventory, forecast demand, and gain multi-warehouse visibility with ease.",
      bullets: [
        "The Problem: Retail Co. struggled with manual inventory tracking and frequent stockouts, which resulted in lost sales and customer frustration.",
        "The Solution: Accurack implemented its AI-powered platform to provide real-time inventory tracking, multi-warehouse visibility, and a robust AI forecasting engine.",
        "The Result: A 30% reduction in stockouts, a 15% improvement in order fulfillment accuracy, and a significant boost in customer satisfaction.",
      ],
      mediaSrc: "/Images/Homeassests/HomeImages/screen.png",
      mediaAlt: "Product dashboard UI",
      mediaType: "image",
      shapeImageSrc: "/Images/Homeassests/HomeImages/Shape-green.png",
      shapeColor: "var(--color-chart-4)",
    },
    {
      id: "section-2",
      heading: "Inventory Solution",
      subheading: "Inventory Solution",
      description:
        "Centralize SKU data and automate replenishment using AI-powered thresholds that adapt to seasonality.",
      bullets: [
        "The Problem: Retail Co. struggled with manual inventory tracking and frequent stockouts, which resulted in lost sales and customer frustration.",
        "The Solution: Accurack implemented its AI-powered platform to provide real-time inventory tracking, multi-warehouse visibility, and a robust AI forecasting engine.",
        "The Result: A 30% reduction in stockouts, a 15% improvement in order fulfillment accuracy, and a significant boost in customer satisfaction.",
      ],
      mediaSrc: "/Images/Homeassests/HomeImages/screen.png",
      mediaAlt: "Inventory solution mockup",
      mediaType: "image",
      shapeImageSrc: "/Images/Homeassests/HomeImages/Shape-yellow.png",
      shapeColor: "var(--color-chart-5)",
    },
    {
      id: "section-3",
      heading: "AI Warehouse Suite",
      subheading: "Performance Suite",
      description:
        "Monitor key KPIs across operations with a live command center designed for distributed teams.",
      bullets: [
        "The Problem: Retail Co. struggled with manual inventory tracking and frequent stockouts, which resulted in lost sales and customer frustration.",
        "The Solution: Accurack implemented its AI-powered platform to provide real-time inventory tracking, multi-warehouse visibility, and a robust AI forecasting engine.",
        "The Result: A 30% reduction in stockouts, a 15% improvement in order fulfillment accuracy, and a significant boost in customer satisfaction.",
      ],
      mediaSrc: "/Images/Homeassests/HomeImages/screen.png",
      mediaAlt: "Performance suite mockup",
      mediaType: "image",
      shapeImageSrc: "/Images/Homeassests/HomeImages/Shape-blue.png",
      shapeColor: "var(--color-chart-2)",
    },
    {
      id: "section-4",
      heading: "Performance Suite",
      subheading: "Scalable Growth",
      description:
        "Automate repetitive tasks to free up your team for strategic growth. Track inventory, forecast demand, and gain multi-warehouse visibility with ease.",
      bullets: [
        "The Problem: Retail Co. struggled with manual inventory tracking and frequent stockouts, which resulted in lost sales and customer frustration.",
        "The Solution: Accurack implemented its AI-powered platform to provide real-time inventory tracking, multi-warehouse visibility, and a robust AI forecasting engine.",
        "The Result: A 30% reduction in stockouts, a 15% improvement in order fulfillment accuracy, and a significant boost in customer satisfaction.",
      ],
      mediaSrc: "/Images/Homeassests/HomeImages/screen.png",
      mediaAlt: "Product dashboard UI",
      mediaType: "image",
      shapeImageSrc: "/Images/Homeassests/HomeImages/Shape-green.png",
      shapeColor: "var(--color-chart-4)",
    },
  ];

  return (
    <main className="relative bg-white mx-auto max-w-8xl h-full space-y-8 py-16 md:space-y-16 md:py-24 lg:py-32">
      {/* Left side: Pendulum */}
      <div className="absolute hidden lg:block xl:-left-100 bottom-38 w-[50vw] h-full pointer-events-none">
        <PendulumDroplet />
      </div>

      {/* Header section */}
      <div className="relative z-10 flex lg:-mt-30 flex-col items-center justify-center text-center px-1 py-10 sm:py-16 lg:py-24 gap-6 max-w-6xl mx-auto">
        <div className="inline-flex font-heading items-center bg-white text-black justify-center font-lora font-medium text-[16px] leading-[100%] px-4 py-1 rounded-[7px]">
          Discover Accurack
        </div>
        <h1 className="text-gray-900 font-heading text-lg sm:text-3xl md:text-4xl font-semibold max-w-3xl">
          See How Accurack Saves You <br /> Time & Money{" "}
        </h1>
        <p className="text-gray-400 font-body text-sm sm:text-3xl md:text-sm max-w-xl">
          Accurack's advanced features meet the challenging demands of your
          industry and alleviate unnecessary pain points, saving you valuable
          time and money.
        </p>
      </div>

      {/* Right side: Floating Square */}
      <div className="lg:absolute sm:hidden lg:left-[57%] xl:left-[60%] w-[50vw] h-full top-30 hidden lg:block pointer-events-none">
        <FloatingSquare />
      </div>

      {/* BackgroundVector with ScrollStickyShowcase */}
      <div className="relative z-10">
        <BackgroundVector>
          <div className="relative w-full mx-auto h-full flex max-w-6xl flex-col items-center">
            <div className="w-full flex flex-col items-center justify-center gap-8">
              <Image
                src="/Images/Homeassests/HomeImages/info-logo.png"
                alt="Top Logo"
                width={100}
                height={142}
                className="w-29 h-29 mt-10 object-contain"
              />
              <InfoTabs />
            </div>
            <SuspenseWrapper>
              <ScrollStickyShowcase items={items} />
            </SuspenseWrapper>
          </div>

          {/* --- ✅ CTA Section (Book a Demo) --- */}
          <section
            className="
    relative 
    bg-transparent 
    flex flex-col items-center justify-end 
    text-center 
    rounded-t-[30px] sm:rounded-t-[40px] 
    px-4 sm:px-9 md:px-8 
    pb-8 sm:pb-10
  "
          >
            <p
              className="
      text-gray-700 
      text-sm sm:text-base md:text-lg 
      leading-relaxed 
      max-w-md sm:max-w-md md:max-w-2xl
    "
            >
              Book a <span className="font-semibold">30-minute call</span> to
              discuss your plans, needs, and goals.{" "}
              <br className="hidden sm:block" />
              We'll get on the same page, align, and{" "}
              <span className="font-semibold">create an action plan.</span>
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="
      mt-6 sm:mt-8 
      flex flex-col sm:flex-row 
      gap-3 sm:gap-5 md:gap-6 
      justify-center items-center
    "
            >
              {primaryBtnText && (
                <Button
                  href={primaryBtnLink}
                  className="
          group relative
          w-[170px] sm:w-[85px] md:w-[193px] 
          h-[46px] sm:h-[50px] md:h-[51px]
          px-5 py-3
          rounded-[40px]
          font-body font-bold 
          text-[14px] sm:text-[15px] md:text-[16px] 
          text-white
          bg-gradient-to-r from-cyan-400 to-teal-600
          flex items-center justify-center
          overflow-hidden
          hover:shadow-lg
          transition-all duration-300
        "
                >
                  <span
                    className={`mr-6 sm:mr-8 md:mr-7 ${
                      primaryBtnText.length > 16
                        ? "mr-10 sm:mr-12"
                        : "lg:transition-transform lg:duration-700 lg:ease-in-out lg:group-hover:translate-x-6"
                    }`}
                  >
                    {primaryBtnText}
                  </span>

                  <span
                    className="
            absolute right-[10px] top-1/2 -translate-y-1/2 
            flex items-center justify-center 
            w-[38px] sm:w-[42px] md:w-[44px] 
            h-[38px] sm:h-[42px] md:h-[44px] 
            rounded-full bg-white
            lg:transition-all lg:duration-700 lg:ease-in-out 
            lg:group-hover:-translate-x-[130px] lg:group-hover:rotate-180
          "
                  >
                    <span className="block lg:hidden w-[20px] sm:w-[24px] h-[18px] sm:h-[22px] bg-[url('/Images/Navassests/ReArrowRight.png')] bg-no-repeat bg-center"></span>
                    <span className="hidden lg:block w-[22px] sm:w-[26px] h-[20px] sm:h-[24px] bg-[url('/Images/Navassests/ReArrow.png')] bg-no-repeat bg-center"></span>
                  </span>
                </Button>
              )}
            </motion.div>
          </section>

          {/* --- ✅ Bottom Mirrored Animated Shapes --- */}
        </BackgroundVector>
        {/* --- Bottom Shapes (absolute positioned) --- */}
        <div className="relative w-full h-[10vh] pointer-events-none overflow-visible hidden md:block">
          {/* Left Pendulum (reversed) */}
          <div className="absolute -left-90 -bottom-18 w-[45vw] h-full flex justify-center items-end">
            <PendulumDroplet
              reverse
              gradientStart="#800080"
              gradientEnd="#800080"
              blurColor="rgb(194,158,229)"
            />
          </div>

          {/* Right Floating Square */}
          <div className="absolute -right-10 -bottom-80 w-[45vw] h-full flex justify-center items-end">
            <FloatingSquare
              gradientStart="rgb(110,194,255)"
              gradientEnd="#0d9488"
              shadowColor="#A7F3D0"
              triangleColor="rgb(194,158,229)"
              rotation={45}
              duration={5}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

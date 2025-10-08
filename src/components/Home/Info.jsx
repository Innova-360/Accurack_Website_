import SuspenseWrapper from "../common/SuspenseWrapper";
import { BackgroundVector } from "./BackgroundVector";
import InfoTabs from "./InfoTab";
import { ScrollStickyShowcase } from "./Scroll-Sticky-Showcase";

export default function Info() {
  // Demo content. Replace with your real sections.
  const items = [
    {
      id: "section-1",
      heading: "Scalable Growth",
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
      heading: "Performance Suite",
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
  ];

  return (
    <main className="relative bg-white mx-auto max-w-8xl h-full space-y-8 py-16 md:space-y-16 md:py-24 lg:py-32">
      <BackgroundVector>
        <div className="relative w-full mx-auto z-100 h-full flex max-w-6xl flex-col items-center">
          <div className="flex flex-col items-center justify-center text-center px-4 py-10 sm:py-16 lg:py-24 gap-6">
            <div className="inline-flex font-heading items-center bg-white text-black justify-center font-lora font-medium text-[16px] leading-[100%] px-4 py-1 rounded-[7px]">
              Discover Accurack
            </div>
            <h1 className="text-gray-900 font-heading text-lg sm:text-3xl md:text-4xl font-semibold max-w-3xl">
              See How Accurack Saves You <br /> Time & Money{" "}
            </h1>
            <p className="text-gray-400 font-body text-sm sm:text-3xl md:text-sm max-w-xl">
              Accurack’s advanced features meet the challenging demands of your
              industry and alleviate unnecessary pain points, saving you
              valuable time and money.
            </p>

            <SuspenseWrapper>
              <InfoTabs />
            </SuspenseWrapper>
          </div>

          <SuspenseWrapper>
            <ScrollStickyShowcase items={items} />
          </SuspenseWrapper>
        </div>
      </BackgroundVector>
    </main>
  );
}

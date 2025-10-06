import IndustriesMarquee from "./IndustriesMarquee";

const Industries = () => {
  return (
    <div className="w-[100vw] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#D5ECF0_115.91%)] min-h-[500px] flex flex-col items-center justify-center text-center">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-10 sm:py-16 lg:py-24 gap-2">
        <div
          style={{ fontFamily: "'Lora', serif" }}
          className="inline-flex items-center justify-center border font-lora font-medium text-[16px] leading-[100%] px-4 py-1 rounded-[7px] text-[#18BDA0]"
        >
          Discover Accurack
        </div>
        <h1
          style={{ fontFamily: "'Lora', serif" }}
          className="text-gray-900 text-lg sm:text-3xl md:text-4xl font-semibold max-w-3xl"
        >
          Our Integrations Power Diverse Industries
        </h1>
        <p className="text-gray-400 text-sm sm:text-3xl md:text-sm max-w-xl">
          Accurack integrates with the tools you already use, streamlining
          operations across ecommerce, wholesale, logistics, and beyond.
        </p>
      </div>

      <IndustriesMarquee />

      <button
        style={{
          fontFamily: "'Lora', serif",
        }}
        className="p-4 cursor-pointer w-60 border border-[#fffff] rounded-full mt-10 mb-20 bg-[#18BDA0] hover:bg-[#0f9e87] transition-colors duration-300 flex items-center justify-center gap-3"
      >
        <span className="text-white text-sm sm:text-lg md:text-sm font-medium">
          Explore All Integrations
        </span>
      </button>

      <div className="relative h-[20vh] w-full bg-[rgba(219, 239, 242, 1)] overflow-hidden">
        {/* SVG curve at the bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[100px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            fillOpacity="1"
            d="M0,280 C480,0 960,0 1440,280 L1440,320 L0,920 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Industries;

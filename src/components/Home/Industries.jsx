import Button from "../ui/Button/Button";
import IndustriesMarquee from "./IndustriesMarquee";

const Industries = () => {
  return (
    <div className="w-[100vw] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#D5ECF0_115.91%)] min-h-[500px] flex flex-col items-center justify-center text-center">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-10 sm:py-16 lg:py-24 gap-2">
        <div
          className="inline-flex font-heading items-center justify-center border font-medium text-[16px] leading-[100%] px-4 py-1 rounded-[7px] text-[#18BDA0]"
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

      <Button
        href="/book-demo"
        className="group relative w-[293px] h-[51px] px-[25px] py-[15px] rounded-[44px] font-body font-bold text-[16px] leading-[100%] text-background bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 flex items-center justify-center overflow-hidden"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-[10px]">
          Explore All Integration
        </span>
        <span className="absolute right-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center justify-center w-[44px] h-[44px] rounded-full bg-white">
          <span className="w-[20px] h-[20px] bg-gradient-primary-2 mask-center mask-contain mask-no-repeat [mask-image:url('/Images/Navassests/ReArrow.png')]"></span>
        </span>
      </Button>

      <div className="relative h-[20vh] w-full bg-[rgba(219, 239, 242, 1)] overflow-hidden">
        {/* SVG curve at the bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[100px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#EFEFEF"
            fillOpacity="1"
            d="M0,280 C480,0 960,0 1440,280 L1440,320 L0,920 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Industries;

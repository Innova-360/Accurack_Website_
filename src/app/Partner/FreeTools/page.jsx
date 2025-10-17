
import Hero from "@/components/ui/HeroSection/Hero";
import SurSection from "@/components/common/Ratings";
import StockSection from "./_components/StockLevels";
import SneakPeekSection from "./_components/SneakPeekSection";
import BarcodeSection from "./_components/BarcodeSection";
import FreeToolContact from "./_components/FreeToolContact";

const page = () => {
  return (
    <>
      <Hero
        heading="Free Tools: Empower Your Inventory Management"
        description="Access complimentary resources to optimize your inventory, calculate ROI, and streamline operations."
        primaryBtnText="Accurack Partner"
        primaryBtnLink="/book-demo"
        secondaryBtnText="Start Free Trial"
        secondaryBtnLink="/free-trial"
        imageSrc="/Images/Dropdownassests/Partners/FreeTools/FreeTools.png"
        imageAlt="Accurack dashboard preview"
        bgColor="bg-background"
        textColor="text-primary"
        descColor="text-foreground/70"
        badgeColor="border border-primary text-primary"
        headingSize="text-4xl sm:text-5xl lg:text-5xl leading-[1.1]"
        descSize="text-base sm:text-lg"
        containerPadding="px-6 md:px-12"
        imageStyleType="custom"
        imageWrapperClass="rounded-[30px] border-[1px] px-5 py-5 border-picborder shadow-[-4px_4px_19.8px_0px_rgba(33,34,44,0.16)]  border-solid p-[23px] gap-[16px]"
        imageWrapperClass2="rounded-[21px]"
        reverse={false}
      />

      <SurSection />
      <StockSection />
      <SneakPeekSection />
      <BarcodeSection />
      <FreeToolContact />
    </>
  );
};

export default page;

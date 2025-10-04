import Hero from "@/components/ui/HeroSection/Hero"


export default function Inventory() {
  return (
    <Hero
      badgeText="Never Miss a Beat"
      heading={<>Precision <br /> Inventory <br /> Management</>}
      description="Optimize stock, streamline operations, and enhance efficiency with Accurack's intelligent AI Warehouse Suite."
      primaryBtnText="Book a Demo"
      primaryBtnLink="/book-demo"
      secondaryBtnText="Start Free Trial"
      secondaryBtnLink="/free-trial"
      imageSrc="/Images/Dropdownassests/Solutions/InventorySolutions/Inventory1.png"
      imageAlt="Inventory Section"


      textColor="text-heading"
      descColor="text-text"
      badgeColor="text-heading border-heading"
      headingSize="text-[42px]  lg:text-[60px] leading-tight"
      descSize="text-[18px] lg:text-[20px] leading-[32px]"
      containerPadding="px-6 lg:px-14 py-12"
      reverse={false}
    />
  )
}
import Hero from "@/components/ui/HeroSection/Hero";
import SurSection from "@/components/common/Ratings";
import ComparisonTable from "./_components/Table";
import ROISection from "./_components/RoiSection";
import TransformSection from "@/components/common/Transform";
import ForecastingSection from "@/components/common/Forecasting";
import TestimonialsComponent from "@/components/common/Testimonials";


export default function CompetitorPage() {
  return (
    <>
      <Hero
        heading="Accurack vs Leading Alternatives:"
        description="Accurack goes beyond traditional inventory software. With built-in supplier, warehouse, and order management, automated workflows, and 700+ integrations, Cin7 gives product businesses a single source of truth to connect, scale, and grow—without the complexity."
        primaryBtnText="Book a Demo"
        primaryBtnLink="/book-demo"
        secondaryBtnText="Start Free Trial"
        secondaryBtnLink="/free-trial"
        imageSrc="/Images/CompetitorPage/Hero.webp"
        imageAlt="Accurack dashboard preview"
        bgColor="bg-background"
        textColor="text-primary"
        descColor="text-foreground/70"
        headingSize="text-4xl sm:text-5xl lg:text-5xl leading-[1.1]"
        descSize="text-base sm:text-lg"
        containerPadding="px-6 md:px-12"
        imageStyleType="custom"
        imageWrapperClass="absolute  
         w-[90%] h-auto 
         sm:w-[500px] sm:h-[360px] 
         md:w-[580px] md:h-[400px] 
         lg:w-[643px] lg:h-[441px] lg:translate-x-0
         bg-white border border-[#D1D1D1] 
         rounded-[30px] p-4 sm:p-6 md:p-[20px] lg:p-[23px] 
         flex gap-4 opacity-100 
         shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
        showImageLayers={false}
        showImageBorder={false}
        reverse={false}
      />
      <SurSection />
      <ComparisonTable />
      <ROISection />
      <TransformSection />
      <ForecastingSection />
      <TestimonialsComponent />
    </>
  );
}

import Ratings from "@/components/common/Ratings";
import Hero from "@/components/ui/HeroSection/Hero";
import TransformSection from "@/components/common/Transform";
import ForecastingSection from "@/components/common/Forecasting";
import Testimonials from "@/components/common/Testimonials";
import FourCardSection from "@/components/common/FourCardSection";

export default function page() {
  const cardData = [
    {
      image: "/Images/SalesManagement/2.png",
      title: "Comprehensive Order Tracking",
      description:
        "Monitor every stage of your sales orders: from 'New' to 'Picked,' 'Packed,' and 'Shipped.' Gain real-time visibility into fulfillment progress and keep customers informed.",
    },
    {
      image: "/Images/SalesManagement/3.png",
      title: "Integrated CRM Capabilities",
      description:
        "Manage customer data, track interactions, and view purchase history directly within Accurack. Build stronger customer relationships and personalize sales efforts.",
    },
    {
      image: "/Images/SalesManagement/1.png",
      title: "Flexible Fulfillment Options",
      description:
        "Choose between manual assignment for specific control or automatic workflows to streamline high-volume order processing. Accurack adapts to your operational needs.",
    },
    {
      image: "/Images/SalesManagement/2.png",
      title: "Powerful Sales Analytics",
      description:
        "Access real-time sales performance metrics, identify top-selling products, analyze customer purchasing patterns, and forecast future sales with precision. Drive data-driven sales strategies.",
    },
  ];

  return (
    <div>
      <Hero
        badgeText="Optimization"
        heading="Optimize Your Sales Process: From Order to Delivery."
        description="C Streamline order management, gain customer insights, and boost sales efficiency."
        primaryBtnText="Book a Demo"
        primaryBtnLink="/book-demo"
        secondaryBtnText="Start Free Trial"
        secondaryBtnLink="/free-trial"
        imageSrc="/Images/Homeassests/Heroimage/Loader.png"
        imageAlt="Accurack dashboard preview"
        bgColor="bg-background"
        textColor="text-primary"
        descColor="text-foreground/70"
        badgeColor="border border-primary text-primary"
        headingSize="text-4xl sm:text-5xl lg:text-6xl leading-[1.1]"
        descSize="text-base sm:text-lg"
        containerPadding="px-6 md:px-12"
        reverse={false}
      />
      <Ratings />
      <FourCardSection
        imageClassName={"object-cover"}
        title="Sales & Customer Management"
        cards={cardData}
      />
      ;
      <Testimonials />
      <ForecastingSection />
      <TransformSection />
    </div>
  );
}

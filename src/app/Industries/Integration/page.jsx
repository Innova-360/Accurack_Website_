import FourCardSection from "@/components/common/FourCardSection";
import Ratings from "@/components/common/Ratings";
import Hero from "@/components/ui/HeroSection/Hero";
import React from "react";

const page = () => {
  const cardData = [
    {
      image: "/Images/SalesManagement/2.png",
      title: "Accounting Integrations",
      description:
        "Streamline your financials. Accurack offers deep, two-way synchronization with QuickBooks (Desktop & Online), Xero, and Avalara, ensuring your inventory and sales data seamlessly flows into your accounting system.",
    },
    {
      image: "/Images/SalesManagement/3.png",
      title: "E-commerce Integrations",
      description:
        "Manage multi-channel sales effortlessly. Connect Accurack with leading e-commerce platforms like Shopify, Amazon, and WooCommerce to synchronize inventory, orders, and customer data.",
    },
    {
      image: "/Images/SalesManagement/1.png",
      title: "Shipping & Logistics Integrations",
      description:
        "Optimize your deliveries. Integrate with major shipping carriers such as FedEx, UPS, and DHL to automate label generation, track shipments, and manage logistics efficiently.",
    },
    {
      image: "/Images/SalesManagement/2.png",
      title: "CRM & ERP Integrations",
      description:
        "Enhance customer relationships and operational oversight. Accurack connects with popular CRM systems like Salesforce and ERP solutions to provide a holistic view of your business.",
    },
  ];

  return (
    <>
      <Hero
        badgeText="CRM & ERP"
        heading="Seamless Integrations: Unify Your Workflows."
        description="Connect Accurack with your essential business tools for a truly unified and automated operation."
        primaryBtnText="Book a Demo"
        primaryBtnLink="/book-demo"
        secondaryBtnText="Start Free Trial"
        secondaryBtnLink="/free-trial"
        imageSrc="/Images/IndustriesAssests/Integration/integration-dashboard.png"
        imageAlt="Accurack Integration dashboard preview"
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
      <FourCardSection title="Sales & Customer Management" cards={cardData} />;
    </>
  );
};

export default page;

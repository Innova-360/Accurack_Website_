import CardSection from "@/components/Home/CardGroup";
import CustomerStoriesSection from "@/components/Home/CustomerStories";
import Features from "@/components/Home/Features";
import ForecastingSection from "@/components/Home/ForecastingSection";
import HeroSection from "@/components/Home/Hero";
import Industries from "@/components/Home/Industries";
import Info from "@/components/Home/Info";
import IntegrationsSection from "@/components/Home/IntegrationsSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <CardSection /> */}
      {/* <IntegrationsSection /> */}
      <ForecastingSection />
      <Info />
      <Industries />
      {/* <CustomerStoriesSection /> */}
      <Features />
    </>
  );
}

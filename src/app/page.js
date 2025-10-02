import HeroSection from "@/components/Home/Hero";
import CardSection from "@components/Home/Cardgroup"
import CustomerStoriesSection from "@components/Home/CustomerStories"
import IntegrationsSection from "@components/Home/IntegrationsSection"
import ForecastingSection from "@components/Home/ForecastingSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <CardSection />
      <IntegrationsSection />
      <ForecastingSection   />
      <CustomerStoriesSection />
    </>
  );
}

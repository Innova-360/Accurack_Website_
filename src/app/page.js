import Marquee from "@/components/common/Marquee";
import { BlogsSection } from "@/components/Home/BlogSection";
import CardSection from "@/components/Home/CardGroup";
import ContactForm from "@/components/Home/ContactForm";
import ContactSection from "@/components/Home/ContectSection";
import { TrialCtaSection } from "@/components/Home/CtaTrial";
import CustomerStoriesSection from "@/components/Home/CustomerStories";
import FAQSection from "@/components/Home/FaqSection";
import Features from "@/components/Home/Features";
import ForecastingSection from "@/components/Home/ForecastingSection";
import HeroSection from "@/components/Home/Hero";
import Industries from "@/components/Home/Industries";
import Info from "@/components/Home/Info";
import IntegrationsSection from "@/components/Home/IntegrationsSection";
import InventoryDesign from "@/components/Home/InventoryDesign";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee/>
      {/* <CardSection /> */}
      {/* <IntegrationsSection /> */}
      <ForecastingSection />
      <Info />
      <Industries />
      {/* <CustomerStoriesSection /> */}
      <Features />
      <InventoryDesign />
      <BlogsSection />
      <FAQSection />
      <ContactSection/>
      <TrialCtaSection/>
    </>
  );
}

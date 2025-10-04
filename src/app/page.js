import HeroSection from "@/components/Home/Hero";
import CardSection from "@/components/Home/CardGroup";
import CustomerStoriesSection from "@/components/Home/CustomerStories";
import IntegrationsSection from "@/components/Home/IntegrationsSection";
import ForecastingSection from "@/components/Home/ForecastingSection";
import Marquee from "@/components/common/Marquee";
import { BlogsSection } from "@/components/Home/BlogSection";
import ContactForm from "@/components/Home/ContactForm";
import ContactSection from "@/components/Home/ContectSection";
import { TrialCtaSection } from "@/components/Home/CtaTrial";
import FAQSection from "@/components/Home/FaqSection";
import Features from "@/components/Home/Features";
import Industries from "@/components/Home/Industries";
import Info from "@/components/Home/Info";
import InventoryDesign from "@/components/Home/InventoryDesign";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <CardSection />
      <IntegrationsSection />
      <ForecastingSection />
      <Info />
      <Industries />
      <CustomerStoriesSection />
      <Features />
      <InventoryDesign />
      <BlogsSection />
      <FAQSection />
      <ContactSection />
      <ContactForm />
      <TrialCtaSection />
    </>
  );
}

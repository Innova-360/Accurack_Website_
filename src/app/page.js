import HeroSection from "@/components/Home/Hero";
import ForecastingSection from "@/components/Home/ForecastingSection";
import Marquee from "@/components/common/Marquee";
import { BlogsSection } from "@/components/Home/BlogSection";
import ContactSection from "@/components/Home/ContectSection";
import { TrialCtaSection } from "@/components/Home/CtaTrial";
import FAQSection from "@/components/Home/FaqSection";
import Features from "@/components/Home/Features";
import Industries from "@/components/Home/Industries";
import Info from "@/components/Home/Info";
import InventoryDesign from "@/components/Home/InventoryDesign";
import Testimonials from "@/components/common/Testimonials";
import Ratings from "@/components/common/Ratings";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Ratings theme="dark" />
      {/* <CardSection /> */}
      {/* <IntegrationsSection /> */}
      <ForecastingSection />
      <Info />
      <Industries />
      <Testimonials />
      <Features />
      <InventoryDesign />
      <BlogsSection />
      <FAQSection />
      <ContactSection />
      <TrialCtaSection />
    </>
  );
}

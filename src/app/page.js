import HeroSection from "@/components/Home/Hero";
import ForecastingSection from "@/components/Home/ForecastingSection";
import Marquee from "@/components/common/Marquee";
import ContactSection from "@/components/Home/ContectSection";
import TrialCtaSection from "@/components/Home/CtaTrial";
import FAQSection from "@/components/Home/FaqSection";
import Features from "@/components/Home/Features";
import Industries from "@/components/Home/Industries";
import Info from "@/components/Home/Info";
import InventoryDesign from "@/components/Home/InventoryDesign";
import Testimonials from "@/components/common/Testimonials";
import Ratings from "@/components/common/Ratings";
import BlogsSection from "@/components/Home/BlogSection";
import TeamSection from "@/components/common/Officer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Ratings theme="dark" />
      {/* <CardSection /> */}
      <Info />
      <Industries />
      <ForecastingSection />
      {/* <IntegrationsSection /> */}
      <Features />
      <InventoryDesign />
      <TeamSection/>
      <BlogsSection />
      <FAQSection />
      <ContactSection />
      <Testimonials />
      <TrialCtaSection />
    </>
  );
}

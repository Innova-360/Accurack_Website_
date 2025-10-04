import Ratings from "@/components/common/Ratings";
import Hero from "@/components/ui/HeroSection/Hero";
import InventoryFeatures from "@/components/Solutions/AllinoneSolutions/CardSection";
import ImpactStory from "@/components/Solutions/AllinoneSolutions/ImpactStory";
import TransformSection from "@/components/common/Transform";
import ForecastingSection from "@/components/Home/ForecastingSection";
import Testimonials from "@/components/common/Testimonials";
import FourCardSection from "@/components/common/FourCardSection";

export default function page() {
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
                imageSrc="/Images/Homeassests/Heroimage/accurack-dashboard.png"
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


            <FourCardSection />
            <Testimonials />
            <ForecastingSection />
            <TransformSection />
        </div>
    )
}

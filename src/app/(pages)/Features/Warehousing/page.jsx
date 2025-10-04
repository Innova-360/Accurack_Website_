import Ratings from "@/components/common/Ratings";
import Hero from "@/components/ui/HeroSection/Hero";
import TransformSection from "@/components/common/Transform";
import ForecastingSection from "@/components/Solutions/Performancesuite/Forecasting";
import Testimonials from "@/components/common/Testimonials";
import FourCardSection from "@/components/common/FourCardSection";
import ImpactStory from "@/components/Solutions/AllinoneSolutions/ImpactStory";
import WarehouseAndLogisticsManagement from "@/components/Features/Warehousing/WarehouseAndLogisticsManagement";

export default function page() {
    return (
        <div>
            <Hero
                badgeText="Efficient Multi-Warehouse Management"
                heading="Smarter Storage, Faster Fulfillment."
                description="Optimize stock across all locations with AI-driven insights and streamlined operations."
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



            <WarehouseAndLogisticsManagement />
            <ImpactStory />
            <ForecastingSection />
            <TransformSection />
        </div>
    )
}

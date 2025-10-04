import Ratings from "@/components/common/Ratings";
import Hero from "@/components/ui/HeroSection/Hero";
import InventoryFeatures from "@/components/Solutions/AllinoneSolutions/CardSection";
import ImpactStory from "@/components/Solutions/AllinoneSolutions/ImpactStory";
import TransformSection from "@/components/common/Transform";

export default function page() {
    return (
        <div>
            <Hero
                badgeText="Real-Time"
                heading="Streamlined Supplier Integrations: Optimize Your Procurement."
                description="Connect seamlessly with your vendors, automate purchase orders, and gain full visibility into your supply chain."
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
            <InventoryFeatures />
            <ImpactStory />
            <TransformSection />
        </div>
    )
}

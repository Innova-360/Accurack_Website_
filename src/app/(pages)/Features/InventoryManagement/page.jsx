import Ratings from "@/components/common/Ratings";
import InventoryManagementFeaturesCards from "@/components/Features/InventoryManagement/inventoryManagementFeaturesCards";
import Hero from "@/components/ui/HeroSection/Hero";

export default function page() {
    return (
        <div>
            <Hero
                badgeText="Real-Time"
                heading="Real-Time Inventory Control: Your Stock, Always in Sight."
                description="Achieve precision tracking for all your locations, from warehouse to retail floor."
                primaryBtnText="Book a Demo"
                primaryBtnLink="/book-demo"
                secondaryBtnText="Start Free Trial"
                secondaryBtnLink="/free-trial"
                imageSrc="/Images/Homeassests/Heroimage/accurack-dashboard.png"
                imageAlt="Accurack dashboard preview"
                bgColor="bg-background"
                textColor="text-primary"
                descColor="text-foreground/70"
                badgeColor="border border-primary text-primary bg-primary/10"
                headingSize="text-4xl sm:text-5xl lg:text-6xl leading-[1.1]"
                descSize="text-base sm:text-lg"
                containerPadding="px-6 md:px-12"
                reverse={false}
            />
            <Ratings />
            <InventoryManagementFeaturesCards />
        </div>
    )
}

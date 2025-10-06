import Ratings from "@/components/common/Ratings";
import Hero from "@/components/ui/HeroSection/Hero";
import TransformSection from "@/components/common/Transform";
import Card from "@/components/ui/Card/Card";
import Header from "@/components/ui/Headers/Header";
import ImpactStory from "@/components/common/ImpactStory";

const cardData = [
    {
        icon: "/Images/Features/Accounting/accurack-1.png",
        title: "Real-Time Expense Tracking",
        text: "Monitor all your business expenses in real-time. Accurack helps you categorize costs, track spending, and gain immediate insights into your financial health.",
    }, {
        icon: "/Images/Features/Accounting/accurack-2.png",
        title: "Effortless Invoice Generation",
        text: "Create professional invoices directly from sales orders with a few clicks. Automate billing, track payments, and ensure accurate financial records.",
    }, {
        icon: "/Images/Features/Accounting/graph.png",
        title: "Seamless Integration with Leading Platforms",
        text: "Achieve true data synchronization. Accurack integrates deeply with QuickBooks (Desktop & Online) and Xero, automatically pushing inventory, sales, and purchasing data to your accounting system, eliminating manual entry.",
    }, {
        icon: "/Images/Features/Accounting/hands.png",
        title: "Customizable Financial Reporting",
        text: "Generate comprehensive financial reports tailored to your needs. Gain insights into profitability, cost of goods sold, inventory valuation, and more for smarter financial planning.",
    },

];

export default function page() {
    return (
        <div>
            <Hero
                badgeText="Financial Clarity"
                heading="Integrated Accounting Solutions: Financial Clarity, Effortless Sync."
                description="Streamline financial tracking, reporting, and reconciliation with seamless accounting integrations."
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


            <div className="w-full py-12 md:py-16 bg-background max-w-5xl mx-auto ">
                <Header title="Financial Management & Accounting." />
                <Card
                    icon="/Images/Features/Accounting/list.png"
                    title="GAAP Compliance &  Audit Trails"
                    text="Ensure your financial records are accurate and compliant with generally accepted accounting principles (GAAP). Accurack maintains detailed audit trails for all transactions, simplifying audits."
                    iconWidth={32.71}
                    iconHeight={32.71}
                    variant="simple"
                />
                <div className="grid mx-auto grid-cols-1 xl:grid-cols-2 gap-8 px-6 lg:px-0 py-12 md:py-16">
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            text={card.text}
                            iconWidth={32.71}
                            iconHeight={32.71}
                            variant="simple"
                            className="text-center"
                        />
                    ))
                    }
                </div>
            </div>

            <ImpactStory />
            <TransformSection />
        </div>
    )
}

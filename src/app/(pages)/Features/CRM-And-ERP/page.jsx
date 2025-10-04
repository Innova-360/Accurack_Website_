import Ratings from "@/components/common/Ratings";
import Hero from "@/components/ui/HeroSection/Hero";
import TransformSection from "@/components/common/Transform";
import Testimonials from "@/components/common/Testimonials";
import Card from "@/components/ui/Card/Card";
import Header from "@/components/ui/Headers/Header";
import InventoryFeatures from "@/components/Solutions/AllinoneSolutions/CardSection";

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
                badgeText="CRM & ERP"
                heading="Unify Your Business: Integrated CRM & ERP."
                description="Manage customers, optimize operations, and gain holistic insights from one powerful platform."
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



            <InventoryFeatures
                title="Business Growth & Scalability"
                subtitle="Join hundreds of businesses optimizing their operations with Accurack."
                background="/Images/Features/CRM-ERP/factory.png"
                mainCard={{
                    bgImage: "/Images/Features/CRM-ERP/customers.jpg",
                    title: "Comprehensive Customer Management",
                    text: "Track every customer interaction, manage contact details, view purchase history, and segment your customer base. Build stronger relationships and personalize your sales and marketing efforts.",
                    variant: "dark",
                }}
                cards={[
                    {
                        bgImage: "/Images/Features/CRM-ERP/factory.png",
                        title: "Integrated ERP Tools",
                        text: "Beyond inventory, Accurack provides essential ERP functionalities to manage your entire supply chain, production processes, and even basic HR functions, all within a unified system.",
                    },
                    {
                        bgImage: "/Images/Features/CRM-ERP/graph.png",
                        title: "Holistic Analytics & Insights",
                        text: "Gain a 360-degree view of your business. Analyze customer behavior, sales trends, operational efficiency, and financial performance from integrated dashboards for smarter decision-making.",
                    },
                    {
                        bgImage: "/Images/Features/CRM-ERP/hands.png",
                        title: "Seamless Integration with External CRMs",
                        text: "Connect Accurack with popular CRM platforms like Salesforce and Zoho to ensure consistent customer data across all your systems, enhancing sales and marketing efforts.",
                    },
                    {
                        bgImage: "/Images/Features/CRM-ERP/office.png",
                        title: "Scalability for Enterprise Growth",
                        text: "Accurack is built to scale with your ambitions. As your business grows, our platform adapts to handle increased data volumes, complex workflows, and expanding operational needs.",
                    },
                ]}
            />




            <Testimonials />
            <TransformSection />
        </div>
    )
}

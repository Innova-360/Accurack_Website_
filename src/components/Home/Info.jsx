import { BackgroundVector } from "./BackgroundVector"
import { ScrollStickyShowcase } from "./Scroll-Sticky-Showcase"

export default function Info() {
    // Demo content. Replace with your real sections.
    const items = [
        {
            id: "section-1",
            heading: "Scalable Growth",
            description:
                "Automate repetitive tasks to free up your team for strategic growth. Track inventory, forecast demand, and gain multi-warehouse visibility with ease.",
            bullets: [
                "Reduce stockouts by up to 30%",
                "Improve order accuracy and fulfillment speed",
                "Real-time insights and alerts",
            ],
            mediaSrc: "/Images/Homeassests/HomeImages/screen.png",
            mediaAlt: "Product dashboard UI",
            mediaType: "image",
            shapeImageSrc: "/Images/Homeassests/HomeImages/Shape-green.png",
            shapeColor: "var(--color-chart-4)",
        },
        {
            id: "section-2",
            heading: "Inventory Solution",
            description:
                "Centralize SKU data and automate replenishment using AI-powered thresholds that adapt to seasonality.",
            bullets: ["Smart reorder points", "Vendor performance tracking", "Aging stock reports"],
            mediaSrc: "/Images/Homeassests/HomeImages/screen.png",
            mediaAlt: "Inventory solution mockup",
            mediaType: "image",
            shapeImageSrc: "/Images/Homeassests/HomeImages/Shape-yellow.png",
            shapeColor: "var(--color-chart-5)",
        },
        {
            id: "section-3",
            heading: "Performance Suite",
            description:
                "Monitor key KPIs across operations with a live command center designed for distributed teams.",
            bullets: ["Custom dashboards", "Anomaly detection", "Role-based access control"],
            mediaSrc: "/Images/Homeassests/HomeImages/screen.png",
            mediaAlt: "Performance suite mockup",
            mediaType: "image",
            shapeImageSrc: "/Images/Homeassests/HomeImages/Shape-blue.png",
            shapeColor: "var(--color-chart-2)",
        },
    ]

    return (
        <main className="relative bg-white mx-auto max-w-8xl border h-full space-y-8 py-16 md:space-y-16 md:py-24 lg:py-32">
            <BackgroundVector>
                <div className="relative w-full mx-auto h-full border flex max-w-6xl flex-col items-center" style={{ zIndex: 100 }}>
                    <ScrollStickyShowcase items={items} />
                </div>
            </BackgroundVector>
        </main>
    )
}
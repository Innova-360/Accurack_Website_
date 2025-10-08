
const props = {
    title: "Analytics & Reporting",
    description:
        "Access intuitive, real-time dashboards that provide an instant snapshot of your key performance indicators (KPIs). Monitor inventory levels, sales velocity, and operational efficiency at a glance.",
};

export default function Header(
    { title, description, className, headingClassName } = props
) {
    return (
        <div className={`flex justify-center flex-col text-center items-center mb-12 w-full ${className}`}>
            <h2
                className={`font-heading font-medium text-[48px] w-full leading-[60px] tracking-[-0.02em] text-gray-900 max-w-[544px] ${headingClassName}`}
            >
                {title}
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                {description}
            </p>
        </div >
    )
}

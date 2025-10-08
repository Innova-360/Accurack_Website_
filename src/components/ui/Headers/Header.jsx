
const props = {
    title: "Analytics & Reporting",
    description:
        "Access intuitive, real-time dashboards that provide an instant snapshot of your key performance indicators (KPIs). Monitor inventory levels, sales velocity, and operational efficiency at a glance.",
};

export default function Header(
    { title, description } = props
) {
    return (
        <div className="flex justify-center text-center mb-12 w-full" >
            <h2
                className={`font-heading font-medium text-[48px] w-full leading-[60px] tracking-[-0.02em] text-gray-900 max-w-[544px]`}
            >
                {title}
            </h2>
            <p>
                {description}
            </p>
        </div >
    )
}

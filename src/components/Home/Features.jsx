import { FeatureCardGrid } from "./FeatureCard";

const Features = () => {
  const features = [
    {
      title: "Inbound Order Management",
      description:
        "Utilize WMS that covers every stage of your supply chain.",
      arrow: "/Images/Homeassests/FeaturesSection/arrow.png",
    },
    {
      title: "Pack Station",
      description:
        "Utilize WMS that covers every stage of your supply chain.",

      arrow: "/Images/Homeassests/FeaturesSection/arrow.png",
    },
    {
      title: "Shipping Management",
      description:
        "Utilize WMS that covers every stage of your supply chain.",
      arrow: "/Images/Homeassests/FeaturesSection/arrow.png",
    },
    {
      title: "Inventory Control",
      description:
        "Utilize WMS that covers every stage of your supply chain.",
      arrow: "/Images/Homeassests/FeaturesSection/arrow.png",
    },
    {
      title: "Reporting & Analytics",
      description:
        "Utilize WMS that covers every stage of your supply chain.",
      arrow: "/Images/Homeassests/FeaturesSection/arrow.png",
    },
    {
      title: "B2B Payments",
      description:
        "Utilize WMS that covers every stage of your supply chain.",
      arrow: "/Images/Homeassests/FeaturesSection/arrow.png",
    },
  ];

  return (
    <div
      className="w-[100vw] min-h-[500px] flex flex-col items-center
         justify-center text-center"
    >
      {/* Heading */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-10 sm:py-16 lg:py-24 gap-2">
        <div
          className="inline-flex font-heading items-center justify-center border font-lora font-medium text-[16px] leading-[100%] px-4 py-1 rounded-[7px] text-[#18BDA0]"
        >
          Features
        </div>

        <h1
          className="text-gray-900 font-heading text-3xl md:text-4xl 
                    font-semibold max-w-3xl"
        >
          Key Features Of Our WMS
        </h1>
        <p className="text-gray-400 text-sm sm:text-3xl md:text-sm max-w-xl">
          Utilize warehouse management software that covers every stage of your
          supply chain.
        </p>
      </div>
      <FeatureCardGrid features={features} />
    </div>
  );
};

export default Features;

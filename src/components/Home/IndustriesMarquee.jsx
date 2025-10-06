"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { name: "Axure", src: "/Images/Homeassests/IndustriesSection/Group.png" },
  { name: "Android", src: "/Images/Homeassests/IndustriesSection/Group-1.png" },
  { name: "Microsoft", src: "/Images/Homeassests/IndustriesSection/Group-2.png" },
  { name: "Hubspot", src: "/Images/Homeassests/IndustriesSection/Group-3.png" },
  { name: "amazon", src: "/Images/Homeassests/IndustriesSection/Group-4.png" },
  { name: "wooCommerce", src: "/Images/Homeassests/IndustriesSection/Group-5.png" },
  { name: "Google Maps", src: "/Images/Homeassests/IndustriesSection/Group-6.png" },
  { name: "Fed Ex", src: "/Images/Homeassests/IndustriesSection/Group-7.png" },
  { name: "Paypal", src: "/Images/Homeassests/IndustriesSection/Group-8.png" },
  { name: "Dropbox", src: "/Images/Homeassests/IndustriesSection/Group-9.png" },
  { name: "UPS", src: "/Images/Homeassests/IndustriesSection/Group-10.png" },
  { name: "stripe", src: "/Images/Homeassests/IndustriesSection/Group-11.png" },
  { name: "Wix", src: "/Images/Homeassests/IndustriesSection/Group-12.png" },
  { name: "Github", src: "/Images/Homeassests/IndustriesSection/Group-13.png" },
  { name: "traackr", src: "/Images/Homeassests/IndustriesSection/Group-14.png" },
  { name: "Oracle", src: "/Images/Homeassests/IndustriesSection/Group-15.png" },
  { name: "intercom", src: "/Images/Homeassests/IndustriesSection/Group-16.png" },
  { name: "Visa", src: "/Images/Homeassests/IndustriesSection/Group-17.png" },
  { name: "G Suite", src: "/Images/Homeassests/IndustriesSection/Group-18.png" },
  { name: "IBM", src: "/Images/Homeassests/IndustriesSection/Group-19.png" },
];

export default function IndustriesMarquee() {
  // duplicate logos to create infinite loop effect
  const marqueeCompanies = [...companies, ...companies];

  return (
    <div className="bg-transparent overflow-hidden w-full bg-gray-50">
      <motion.div
        className="flex gap-30 items-center"
        animate={{ x: ["0%", "-50%"] }} // move left continuously
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // adjust speed here
            ease: "linear",
          },
        }}
      >
        {marqueeCompanies.map((company, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2 }}
            className="flex-shrink-0 w-27 h-32 flex items-center justify-center cursor-pointer"
          >
            <Image
              src={company.src}
              alt={company.name}
              width={128}
              height={128}
              className="object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

export default function IndustriesMarquee() {
  const companies = useMemo(
    () => [
      { name: "Axure", src: "/Images/Homeassests/IndustriesSection/Group.png" },
      { name: "Android", src: "/Images/Homeassests/IndustriesSection/Group-1.png" },
      { name: "Microsoft", src: "/Images/Homeassests/IndustriesSection/Group-2.png" },
      { name: "Hubspot", src: "/Images/Homeassests/IndustriesSection/Group-3.png" },
      { name: "Amazon", src: "/Images/Homeassests/IndustriesSection/Group-4.png" },
      { name: "WooCommerce", src: "/Images/Homeassests/IndustriesSection/Group-5.png" },
      { name: "Google Maps", src: "/Images/Homeassests/IndustriesSection/Group-6.png" },
      { name: "FedEx", src: "/Images/Homeassests/IndustriesSection/Group-7.png" },
      { name: "Paypal", src: "/Images/Homeassests/IndustriesSection/Group-8.png" },
      { name: "Dropbox", src: "/Images/Homeassests/IndustriesSection/Group-9.png" },
      { name: "UPS", src: "/Images/Homeassests/IndustriesSection/Group-10.png" },
      { name: "Stripe", src: "/Images/Homeassests/IndustriesSection/Group-11.png" },
      { name: "Wix", src: "/Images/Homeassests/IndustriesSection/Group-12.png" },
      { name: "Github", src: "/Images/Homeassests/IndustriesSection/Group-13.png" },
      { name: "Traackr", src: "/Images/Homeassests/IndustriesSection/Group-14.png" },
      { name: "Oracle", src: "/Images/Homeassests/IndustriesSection/Group-15.png" },
      { name: "Intercom", src: "/Images/Homeassests/IndustriesSection/Group-16.png" },
      { name: "Visa", src: "/Images/Homeassests/IndustriesSection/Group-17.png" },
      { name: "G Suite", src: "/Images/Homeassests/IndustriesSection/Group-18.png" },
      { name: "IBM", src: "/Images/Homeassests/IndustriesSection/Group-19.png" },
    ],
    []
  );

  const marqueeCompanies = useMemo(
    () => [...companies, ...companies, ...companies],
    [companies]
  );

  return (
    <div className="bg-transparent overflow-hidden w-full will-change-transform">
      <motion.div
        className="flex gap-30 items-center"
        style={{ transform: "translate3d(0, 0, 0)" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {marqueeCompanies.map((company, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex-shrink-0 w-27 h-32 flex items-center justify-center cursor-pointer select-none"
          >
            <Image
              src={company.src}
              alt={company.name}
              width={128}
              height={128}
              className="object-contain pointer-events-none"
              {...(index < 5
                ? { priority: true } // Preload only first few
                : { loading: "lazy" })} // Lazy load the rest
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

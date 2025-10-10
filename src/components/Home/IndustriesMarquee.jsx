"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { name: "Axure", src: "/Images/Homeassests/IndustriesSection/Group.png" },
  { name: "Android", src: "/Images/Homeassests/IndustriesSection/Group-1.png" },
  { name: "Microsoft", src: "/Images/Homeassests/IndustriesSection/Group-2.png" },
  { name: "Hubspot", src: "/Images/Homeassests/IndustriesSection/Group-3.png" },
  { name: "Amazon", src: "/Images/Homeassests/IndustriesSection/Group-4.png" },
  { name: "WooCommerce", src: "/Images/Homeassests/IndustriesSection/Group-5.png" },
  { name: "Google Maps", src: "/Images/Homeassests/IndustriesSection/Group-6.png" },
  { name: "FedEx", src: "/Images/Homeassests/IndustriesSection/Group-7.png" },
  { name: "PayPal", src: "/Images/Homeassests/IndustriesSection/Group-8.png" },
  { name: "Dropbox", src: "/Images/Homeassests/IndustriesSection/Group-9.png" },
  { name: "UPS", src: "/Images/Homeassests/IndustriesSection/Group-10.png" },
  { name: "Stripe", src: "/Images/Homeassests/IndustriesSection/Group-11.png" },
  { name: "Wix", src: "/Images/Homeassests/IndustriesSection/Group-12.png" },
  { name: "GitHub", src: "/Images/Homeassests/IndustriesSection/Group-13.png" },
  { name: "Traackr", src: "/Images/Homeassests/IndustriesSection/Group-14.png" },
  { name: "Oracle", src: "/Images/Homeassests/IndustriesSection/Group-15.png" },
  { name: "Intercom", src: "/Images/Homeassests/IndustriesSection/Group-16.png" },
  { name: "Visa", src: "/Images/Homeassests/IndustriesSection/Group-17.png" },
  { name: "G Suite", src: "/Images/Homeassests/IndustriesSection/Group-18.png" },
  { name: "IBM", src: "/Images/Homeassests/IndustriesSection/Group-19.png" },
];

export default function IndustriesMarquee() {
  const rowVariants = (direction = "left", speed = 45) => ({
    animate: {
      x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
      transition: {
        duration: speed,
        ease: "linear",
        repeat: Infinity,
      },
    },
  });

  return (
    <div className="bg-transparent w-full overflow-hidden py-14">
      {/* Desktop version */}
      <div className="hidden md:block space-y-10">
        {/* Reusable Row */}
        {[
          { id: 1, dir: "left" },
          { id: 2, dir: "right" },
          { id: 3, dir: "left" },
        ].map((row) => (
          <motion.div
            key={row.id}
            className="flex gap-6"
            variants={rowVariants(row.dir)}
            animate="animate"
          >
            {[...companies, ...companies].map((company, i) => (
              <div
                key={`${row.id}-${i}`}
                className="flex-shrink-0 flex items-center justify-center bg-background 
                w-[312px] h-[113px] rounded-[17px] border border-bordericon
                shadow-[0px_10px_30.7px_-5px_#9DB1B3]"
              >
                <div className="relative w-[150px] h-[60px] sm:w-[180px] sm:h-[70px] md:w-[200px] md:h-[80px] flex items-center justify-center">
                  <Image
                    src={company.src}
                    alt={company.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Mobile version (1 fast row only) */}
      <div className="md:hidden">
        <motion.div
          className="flex gap-4"
          variants={rowVariants("left", 5)} // Fast mobile scroll
          animate="animate"
        >
          {[...companies, ...companies].map((company, i) => (
            <div
              key={`mobile-${i}`}
              className="flex-shrink-0 flex items-center justify-center bg-background
              w-[220px] h-[90px] rounded-[15px] border border-bordericon
              shadow-[0px_10px_25px_-5px_#9DB1B3]"
            >
              <div className="relative w-[120px] h-[55px] flex items-center justify-center">
                <Image
                  src={company.src}
                  alt={company.name}
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

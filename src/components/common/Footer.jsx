"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      {/* === FOOTER CONTAINER === */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-center px-4 py-10 relative z-10 bg-transparent"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="w-full max-w-[1312px] bg-[#02404B] rounded-[30px] md:rounded-[38px] px-6 sm:px-10 md:px-12 py-12 sm:py-14 lg:py-16"
        >
          {/* === TOP SECTION === */}
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-20">
            {/* === LEFT SECTION === */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-5 max-w-[450px]"
            >
              <Image
                src="/Images/Footerassests/Accurack.png"
                alt="Accurack Logo"
                width={238}
                height={69}
                priority
                className="object-contain"
              />

              <p className="text-[#EFEFEF] font-inter text-[15px] sm:text-[16px] leading-[140%] max-w-[340px]">
                Accurack is the unified AI platform that streamlines inventory,
                sales, and logistics for growing businesses.
              </p>

              {/* === SOCIAL ICONS === */}
              <div className="flex items-center gap-4 mt-2">
                {[
                  {
                    icon: <FaFacebookF className="text-[#02404B] text-lg" />,
                    bg: "bg-white",
                    href: "https://facebook.com",
                  },
                  {
                    icon: <FaLinkedinIn className="text-[#02404B] text-lg" />,
                    bg: "bg-white",
                    href: "https://linkedin.com",
                  },
                  {
                    icon: <FaXTwitter className="text-white text-lg" />,
                    bg: "bg-transparent border border-white",
                    href: "https://twitter.com",
                  },
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className={`${item.bg} w-9 h-9 flex items-center justify-center rounded-full cursor-pointer transition`}
                    aria-label={item.href}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* === RIGHT SECTION === */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row flex-wrap gap-10 md:gap-16 text-[#EFEFEF]"
            >
              {/* === Navigation === */}
              <div className="flex flex-col gap-5 sm:flex-1 min-w-[180px]">
                <h3 className="text-[18px] md:text-[20px] font-semibold">
                  Navigation
                </h3>
                <div className="flex flex-col gap-4 text-[15px] md:text-[16px]">
                  {[
                    { label: "About Us", url: "/About/Mission" },
                    { label: "Our Story", url: "/About/OurStory" },
                    { label: "Our Team", url: "/About/Team" },
                    { label: "Solutions", url: "/solutions" },
                    { label: "Features", url: "/features" },
                    { label: "Blog", url: "/blog" },
                    { label: "Resources", url: "/resources" },
                  ].map((link, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={link.url}
                        className="hover:text-white/80 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* === Support & Legals === */}
              <div className="flex flex-col gap-5 sm:flex-1 min-w-[180px]">
                <h3 className="text-[18px] md:text-[20px] font-semibold">
                  Support & Legals
                </h3>
                <div className="flex flex-col gap-4 text-[15px] md:text-[16px]">
                  {[
                    { label: "Support", url: "/support" },
                    { label: "Legal", url: "/legal" },
                  ].map((link, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={link.url}
                        className="hover:text-white/80 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* === Contact === */}
              <div className="flex flex-col gap-5 sm:flex-1 min-w-[180px]">
                <h3 className="text-[18px] md:text-[20px] font-semibold">
                  Contact
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col gap-4 text-[15px] md:text-[16px]"
                >
                  <Link
                    href="tel:+33771747327"
                    className="hover:text-white/80 transition-colors duration-300"
                  >
                    +33 7 71 74 73 27
                  </Link>
                  <Link
                    href="mailto:contact@accurack.com"
                    className="hover:text-white/80 transition-colors duration-300 break-all"
                  >
                    contact@accurack.com
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* === DIVIDER === */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full border-t border-white/20 mt-12 mb-6 origin-left"
          />

          {/* === BOTTOM SECTION === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
          >
            <p className="text-[#EFEFEF] text-[14px] sm:text-[15px] md:text-[16px]">
              © 2025 Accurack. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-[14px] sm:text-[15px] underline text-[#EFEFEF]">
              {[
                { label: "Privacy Policy", url: "/privacy-policy" },
                { label: "Terms of Service", url: "/terms" },
                { label: "Cookie Settings", url: "/cookies" },
              ].map((link, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.url}
                    className="hover:text-white/80 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.footer>

      {/* === BACKGROUND IMAGE === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="w-full flex justify-center relative overflow-hidden"
      >
        <Image
          src="/Images/Footerassests/FooterLogo.png"
          alt="Footer Decoration"
          width={1440}
          height={1500}
          className="object-cover -mt-10 max-w-full h-auto"
        />
      </motion.div>
    </>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import Img from "../ui/Image/Image";
import Button from "../ui/Button/Button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const hoverTimeout = useRef(null);
  const pathname = usePathname();

  // Close menus on route change
  useEffect(() => {
    setMobileMenu(false);
    setOpenDropdown(null);
    setMobileOpenDropdown(null);
  }, [pathname]);

  // Close dropdown on outside click (Desktop only)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
        setMobileOpenDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (idx) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setOpenDropdown(idx);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 120);
  };

  const toggleMobileDropdown = (idx) => {
    setMobileOpenDropdown((prev) => (prev === idx ? null : idx));
  };

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Solutions",
      dropdown: [
        {
          name: "Inventory Solution",
          href: "/Solutions/InventorySolutions",
          icon: "/Images/Navassests/icons/box.png",
          isIcon: false,
        },
        {
          name: "All in one Solution",
          href: "/Solutions/AllinoneSolutions",
          icon: faLink,
          isIcon: true,
        },
        {
          name: "Ai Warehouse Suite",
          href: "/Solutions/Aiwarehouse",
          icon: "/Images/Navassests/icons/Vector.png",
          isIcon: false,
        },
        {
          name: "Performance Suite",
          href: "/Solutions/PerformanceSuite",
          icon: "/Images/Navassests/icons/Baar.png",
          isIcon: false,
        },
      ],
    },
    {
      name: "Features",
      dropdown: [
        {
          name: "Inventory Management",
          href: "/Features/InventoryManagement",
          icon: "/Images/Navassests/icons/Invent.png",
          isIcon: false,
        },
        {
          name: "Supplier Integrations",
          href: "/Features/SupplierIntegration",
          icon: "/Images/Navassests/icons/Supp.png",
          isIcon: false,
        },
        {
          name: "Sales Management",
          href: "/Features/SalesManagement",
          icon: "/Images/Navassests/icons/Dollars.png",
          isIcon: false,
        },
        {
          name: "Warehousing",
          href: "/Features/Warehousing",
          icon: "/Images/Navassests/icons/Ware.png",
          isIcon: false,
        },
        {
          name: "Accounting",
          href: "/Features/Accounting",
          icon: "/Images/Navassests/icons/Accounting.png",
          isIcon: false,
        },
        {
          name: "CRM & ERP",
          href: "/Features/CRM-And-ERP",
          icon: "/Images/Navassests/icons/profile.png",
          isIcon: false,
        },
      ],
    },
    {
      name: "Industries",
      dropdown: [
        {
          name: "Seamless integrations",
          href: "/Industries/Integration",
          icon: "/Images/Navassests/icons/Seam.png",
          isIcon: false,
        },
        {
          name: "Manufacturing",
          href: "/Industries/Inventory",
          icon: "/Images/Navassests/icons/Setting.png",
          isIcon: false,
        },
        {
          name: "Retail & E-commerce",
          href: "/Industries/Sales",
          icon: "/Images/Navassests/icons/Retail.png",
          isIcon: false,
        },
        {
          name: "Healthcare",
          href: "/Industries/HealthCare",
          icon: "/Images/Navassests/icons/Health.png",
          isIcon: false,
        },
        {
          name: "Food & Beverage (New)",
          href: "/Industries/FoodBaverage",
          icon: "/Images/Navassests/icons/Food.png",
          isIcon: false,
        },
      ],
    },
    {
      name: "Partners",
      dropdown: [
        {
          name: "Partner Directory (New)",
          href: "/Partner/PartnerDirectory",
          icon: "/Images/Navassests/icons/Partner.png",
          isIcon: false,
        },
        {
          name: "Referral Program (New)",
          href: "/Partner/RefeeralProgram",
          icon: "/Images/Navassests/icons/Referral.png",
          isIcon: false,
        },
        {
          name: "Free Tools (New)",
          href: "/Partner/FreeTools",
          icon: "/Images/Navassests/icons/Free.png",
          isIcon: false,
        },
      ],
    },
    { name: "Pricing", href: "/Pricing" },
  ];

  return (
    <>
      {mobileMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 transition-all duration-300"
          onClick={() => setMobileMenu(false)}
        />
      )}

      <nav className="fixed top-[18px] z-[10000] w-full mx-auto flex justify-around gap-3 items-center px-6 lg:px-10">
        {/* Desktop Navbar - UNTOUCHED */}
        <div
          ref={dropdownRef}
          className="hidden lg:flex items-center justify-start w-[890px] h-[67px] rounded-[666px] font-body bg-background"
        >
          <Link
            href="/"
            className="flex items-center w-[150px] h-[45px] ml-[9px]"
          >
            <Img
              src="/Images/Navassests/Accurack.png"
              width={133}
              height={45}
              alt="Accurack Logo"
              className="block object-contain"
            />
          </Link>

          <div className="flex items-center px-16">
            {navItems.map((item, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-[15px] px-4 py-2 rounded-md font-body text-text font-semibold hover:text-[var(--color-gradient-primary-2)]"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <Button className="flex items-center text-[15px] px-4 py-2 rounded-md font-body text-text font-semibold hover:text-[var(--color-gradient-primary-2)]">
                      {item.name}
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                          openDropdown === idx ? "rotate-180" : ""
                        }`}
                      />
                    </Button>

                    <AnimatePresence>
                      {item.dropdown && openDropdown === idx && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 rounded-[12px] shadow-lg z-50 flex flex-col w-[326px] p-[15px] gap-[3px] bg-white/25 border border-dropdownnav backdrop-blur-[30px]"
                        >
                          {item.dropdown.map((sub, subIdx) => (
                            <Link
                              key={subIdx}
                              href={sub.href}
                              className="flex items-center justify-between w-full h-[60px] px-[12px] py-[18px] rounded-[7px] border border-[rgba(10,110,92,0.14)] bg-[rgba(105,235,212,0.13)] text-dropdownnavtext text-[14px] hover:bg-dropdownnavhover hover:-translate-y-[2px]"
                            >
                              <div className="flex items-center gap-3">
                                {sub.isIcon ? (
                                  <FontAwesomeIcon
                                    icon={sub.icon}
                                    className="w-5 h-5"
                                  />
                                ) : (
                                  <span
                                    className="w-5 h-5 inline-block bg-dropdownnavtext mask-center mask-contain mask-no-repeat"
                                    style={{
                                      WebkitMaskImage: `url(${sub.icon})`,
                                    }}
                                  />
                                )}
                                {sub.name}
                              </div>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Buttons - UNTOUCHED */}
        <div className="hidden lg:flex items-center gap-[22px] w-[319px] h-[67px] px-2 rounded-[666px] font-body bg-background">
          <Button
            href="/login"
            className="w-[94px] h-[51px]  font-bold text-[16px] text-[var(--color-gradient-primary-2)]"
          >
            Login
          </Button>
          <Button
            href="/book-demo"
            className="group relative w-[193px] h-[51px] rounded-[44px] font-bold text-[16px] text-background bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 flex items-center justify-center"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-[10px]">
              Book a Demo
            </span>
            <span className="absolute right-2 opacity-0 translate-x-2 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center w-[44px] h-[44px] rounded-full bg-white">
              <span className="w-[20px] h-[20px] bg-gradient-primary-2 [mask-image:url('/Images/Navassests/ReArrow.png')]"></span>
            </span>
          </Button>
        </div>

        {/* Mobile Navbar Header - REBUILT FROM SCRATCH */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 fixed top-0 left-0 w-full z-50 bg-transparent">
          <Img
            src="/Images/Navassests/Accurack.png"
            width={106}
            height={40}
            alt="Accurack Logo"
            className="object-contain"
          />
          <div
            className="p-2 cursor-pointer"
            onPointerDown={(e) => {
              e.preventDefault();
              setMobileMenu(true);
            }}
          >
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Menu Sidebar - REBUILT FROM SCRATCH */}
        <AnimatePresence>
          {mobileMenu && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                className="fixed top-0 right-0 h-full w-[359px] bg-primary text-white rounded-tl-[17px] rounded-bl-[17px] flex flex-col"
              >
                {/* Close Button */}
                <div
                  className="absolute top-4 right-4 p-2 cursor-pointer"
                  onPointerDown={(e) => {
                    e.preventDefault();
                    setMobileMenu(false);
                    setMobileOpenDropdown(null);
                  }}
                >
                  <X className="w-6 h-6 text-white" />
                </div>

                {/* Logo */}
                <div className="flex items-center px-6 mt-6">
                  <Img
                    src="/Images/Navassests/WhiteLog.png"
                    width={123}
                    height={35}
                    alt="Accurack Logo"
                    className="object-contain"
                  />
                </div>

                {/* Navigation Items */}
                <div className="flex-1 mt-8 px-6 overflow-y-auto pb-40">
                  {navItems.map((item, idx) => (
                    <div key={idx} className="mb-0">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="block border-b border-white/20 py-3 text-[24px] text-white/70"
                          onPointerDown={() => {
                            setMobileMenu(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <div>
                          {/* Dropdown Header */}
                          <div
                            className="w-full flex justify-between items-center border-b border-white/20 py-3 text-[24px] text-white/70 cursor-pointer"
                            onPointerDown={(e) => {
                              e.preventDefault();
                              toggleMobileDropdown(idx);
                            }}
                          >
                            <span>{item.name}</span>
                            <span className="text-2xl select-none">
                              {mobileOpenDropdown === idx ? "−" : "+"}
                            </span>
                          </div>

                          {/* Dropdown Content */}
                          <AnimatePresence>
                            {mobileOpenDropdown === idx && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-4 mt-2 mb-2 overflow-hidden"
                              >
                                {item.dropdown?.map((sub, subIdx) => (
                                  <Link
                                    key={subIdx}
                                    href={sub.href}
                                    className="flex items-center gap-3 py-2 text-[20px] text-white/70"
                                    onPointerDown={() => {
                                      setMobileOpenDropdown(null);
                                      setMobileMenu(false);
                                    }}
                                  >
                                    {sub.isIcon ? (
                                      <FontAwesomeIcon
                                        icon={sub.icon}
                                        className="w-6 h-6 text-cyan-300"
                                      />
                                    ) : (
                                      <div
                                        className="w-6 h-6 bg-cyan-300"
                                        style={{
                                          WebkitMaskImage: `url(${sub.icon})`,
                                          maskImage: `url(${sub.icon})`,
                                          WebkitMaskRepeat: "no-repeat",
                                          WebkitMaskPosition: "center",
                                          WebkitMaskSize: "contain",
                                          maskRepeat: "no-repeat",
                                          maskPosition: "center",
                                          maskSize: "contain",
                                        }}
                                      />
                                    )}
                                    {sub.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom Buttons */}
                <AnimatePresence>
                  {mobileOpenDropdown === null && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-10 left-0 w-full px-6 flex flex-col gap-4"
                    >
                      <div className="relative flex items-center justify-center bg-white w-[292px] h-[59px] rounded-full mx-auto">
                        <span className="font-medium text-[16px] text-navbuttontext">
                          Book a Demo
                        </span>
                        <div className="absolute right-4 flex items-center justify-center w-[44px] h-[44px] rounded-full bg-navbuttontext">
                          <Img
                            src="/Images/Navassests/Whitearrow.png"
                            width={24}
                            height={24}
                            alt="Arrow"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-center border w-[292px] h-[59px] mx-auto rounded-full border-white">
                        <span className="font-medium text-[16px] text-white">
                          Start Free Trial
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

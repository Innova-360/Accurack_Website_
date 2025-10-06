"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import Img from "../ui/Image/Image";
import Button from "../ui/Button/Button";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  // ✅ Close menu and dropdown automatically on route change
  useEffect(() => {
    setMobileMenu(false);
    setOpenDropdown(null);
  }, [pathname]);

  // ✅ Toggle dropdown handler (used for mobile)
  const handleDropdownToggle = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
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
          href: "#",
          icon: "/Images/Navassests/icons/Invent.png",
          isIcon: false,
        },
        {
          name: "Supplier Integrations",
          href: "#",
          icon: "/Images/Navassests/icons/Supp.png",
          isIcon: false,
        },
        {
          name: "Sales Management",
          href: "#",
          icon: "/Images/Navassests/icons/Dollars.png",
          isIcon: false,
        },
        {
          name: "Warehousing",
          href: "#",
          icon: "/Images/Navassests/icons/Ware.png",
          isIcon: false,
        },
        {
          name: "Accounting",
          href: "#",
          icon: "/Images/Navassests/icons/Accounting.png",
          isIcon: false,
        },
        {
          name: "CRM & ERP",
          href: "#",
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
          href: "#",
          icon: "/Images/Navassests/icons/Seam.png",
          isIcon: false,
        },
        {
          name: "Manufacturing",
          href: "#",
          icon: "/Images/Navassests/icons/Setting.png",
          isIcon: false,
        },
        {
          name: "Retail & E-commerce",
          href: "#",
          icon: "/Images/Navassests/icons/Retail.png",
          isIcon: false,
        },
        {
          name: "Healthcare",
          href: "#",
          icon: "/Images/Navassests/icons/Health.png",
          isIcon: false,
        },
        {
          name: "Food & Beverage (New)",
          href: "#",
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
          href: "#",
          icon: "/Images/Navassests/icons/Partner.png",
          isIcon: false,
        },
        {
          name: "Referral Program (New)",
          href: "#",
          icon: "/Images/Navassests/icons/Referral.png",
          isIcon: false,
        },
        {
          name: "Free Tools (New)",
          href: "#",
          icon: "/Images/Navassests/icons/Free.png",
          isIcon: false,
        },
      ],
    },
    { name: "Pricing", href: "/pricing" },
  ];

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
        setOpenDropdown(null);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Background Blur when Mobile Menu is open */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 transition-all duration-300"></div>
      )}

      <nav className="sticky top-[23px] z-50 w-full max-w-[1312px] mx-auto flex justify-between items-center px-6 lg:px-10">
        {/* Desktop Navbar */}
        <div
          ref={dropdownRef}
          className="hidden lg:flex items-center justify-between w-[900px] h-[67px] rounded-[666px] font-body bg-background"
        >
          {/* Logo */}
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

          {/* Nav Items */}
          <div className="flex items-center px-16">
            {navItems.map((item, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(idx)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-[15px] px-4 py-2 rounded-md transition font-body text-text font-semibold hover:text-[var(--color-gradient-primary-2)]"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button className="flex items-center text-[15px] px-4 py-2 rounded-md transition font-body text-text font-semibold hover:text-[var(--color-gradient-primary-2)]">
                      {item.name}
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180 ${
                          openDropdown === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    {item.dropdown && openDropdown === idx && (
                      <div className="absolute left-0 mt-2 rounded-[12px] shadow-lg z-50 flex flex-col w-[326px] p-[15px] gap-[3px] bg-white/25 border border-dropdownnav backdrop-blur-[30px] saturate-200 contrast-[1.2]">
                        {item.dropdown.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.href}
                            onClick={() => setOpenDropdown(null)}
                            className="flex items-center justify-between w-full h-[60px] px-[12px] py-[18px] rounded-[7px] border transition-all duration-300 border-[rgba(10,110,92,0.14)] bg-[rgba(105,235,212,0.13)] text-dropdownnavtext font-body font-medium text-[14px] hover:bg-dropdownnavhover hover:-translate-y-[2px]"
                          >
                            <div className="flex items-center gap-3 text-dropdownnavtext">
                              {sub.isIcon ? (
                                <FontAwesomeIcon
                                  icon={sub.icon}
                                  className="w-5 h-5 text-dropdownnavtext"
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
                            <ArrowRight className="w-4 h-4 text-dropdownnavtext" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Right Buttons */}
        <div className="hidden lg:flex items-center gap-[22px] w-[319px] h-[67px] px-2 rounded-[666px] font-body bg-background">
          <Button
            href="/login"
            className="w-[94px] h-[51px] px-[25px] py-[15px] rounded-[555px] font-body font-bold text-[16px] leading-[100%] text-[var(--color-gradient-primary-2)] border border-[var(--color-gradient-primary-2)]"
          >
            Login
          </Button>
          <Button
            href="/book-demo"
            className="group relative w-[193px] h-[51px] px-[25px] py-[15px] rounded-[44px] font-body font-bold text-[16px] leading-[100%] text-background bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 flex items-center justify-center overflow-hidden"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-[10px]">
              Book a Demo
            </span>
            <span className="absolute right-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center justify-center w-[44px] h-[44px] rounded-full bg-white">
              <span className="w-[20px] h-[20px] bg-gradient-primary-2 mask-center mask-contain mask-no-repeat [mask-image:url('/Images/Navassests/ReArrow.png')]"></span>
            </span>
          </Button>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 fixed top-0 left-0 w-full z-50">
          <Img
            src="/Images/Navassests/Accurack.png"
            width={106}
            height={40}
            alt="Accurack Logo"
            className="object-contain"
          />
          <button onClick={() => setMobileMenu(true)}>
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
          </button>
        </div>

        {mobileMenu && (
          <div className="fixed top-0 right-0 h-full w-[359px] bg-primary text-white z-50 transition-transform duration-300 flex flex-col rounded-tl-[17px] rounded-bl-[17px]">
            <button
              onClick={() => setMobileMenu(false)}
              className="absolute top-4 right-4"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="flex items-center px-6 mt-6">
              <Img
                src="/Images/Navassests/WhiteLog.png"
                width={123}
                height={35}
                alt="Accurack Logo"
                className="object-contain"
              />
            </div>

            <div className="flex-1 mt-8 px-6 space-y-2 overflow-y-auto pb-40">
              {navItems.map((item, idx) => (
                <div key={idx}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenu(false)}
                      className="block border-b border-white/20 py-3 text-[24px] font-[400] leading-[47.33px] text-white/70 font-title"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div>
                      {/* ✅ Fixed Toggle Button */}
                      <button
                        type="button"
                        onClick={() => handleDropdownToggle(idx)}
                        className="w-full flex justify-between items-center border-b border-white/20 py-3 text-[24px] font-[400] leading-[47.33px] text-white/70 font-title"
                      >
                        <span className="text-left flex-1">{item.name}</span>
                        <span
                          role="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDropdownToggle(idx);
                          }}
                          className="text-2xl w-10 inline-flex items-center justify-center"
                        >
                          {openDropdown === idx ? "−" : "+"}
                        </span>
                      </button>

                      {openDropdown === idx && (
                        <div className="ml-4 mt-2 flex flex-col space-y-2">
                          {item.dropdown?.map((sub, subIdx) => (
                            <Link
                              key={subIdx}
                              href={sub.href}
                              onClick={() => {
                                setMobileMenu(false);
                                setOpenDropdown(null);
                              }}
                              className="flex items-center gap-3 py-2 text-[24px] font-[400] leading-[47.33px] text-white/70 font-title"
                            >
                              {sub.isIcon ? (
                                <FontAwesomeIcon
                                  icon={sub.icon}
                                  className="w-6 h-6 text-cyan-300"
                                />
                              ) : (
                                <div
                                  className="w-6 h-6 bg-cyan-300 mask-no-repeat mask-center mask-contain"
                                  style={{
                                    WebkitMaskImage: `url(${sub.icon})`,
                                    maskImage: `url(${sub.icon})`,
                                  }}
                                ></div>
                              )}
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Buttons */}
            <div className="absolute bottom-10 left-0 w-full px-6 flex flex-col space-y-4">
              <div className="relative flex items-center justify-center bg-white w-[292px] h-[59px] rounded-full px-[25px] py-[15px]">
                <span className="font-body font-medium text-[16px] text-navbuttontext">
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

              <div className="flex items-center justify-center border w-[292px] h-[59px] rounded-full border-white px-[25px] py-[15px]">
                <span className="font-body font-medium text-[16px] text-white text-center">
                  Start Free Trial
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

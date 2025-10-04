"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Img from "../ui/Image/Image";
import Button from "../ui/Button/Button";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  

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
          href: "/Solutions/PerfomanceSuite",
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

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle resize (close menu on desktop)
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
    <nav className="sticky top-[23px] z-50 w-full max-w-[1312px] mx-auto flex justify-between items-center px-6 lg:px-10">
      {/* Left Section → Logo + Nav Items (Desktop) */}
      <div
        className="hidden lg:flex items-center justify-between"
        ref={dropdownRef}
        style={{
          width: "900px",
          height: "67px",
          borderRadius: "666px",
          fontFamily: "var(--font-jakarta)",
          backgroundColor: "var(--navBg)",
        }}
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
            <div key={idx} className="relative group">
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-[15px] px-4 py-2 rounded-md transition text-black font-semibold hover:text-[var(--color-gradient-primary-2)]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === idx ? null : idx)
                    }
                    className="flex items-center text-[15px] px-4 py-2 rounded-md transition text-black font-semibold hover:text-gradient-primary-2"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {item.name}
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180 ${
                        openDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
{item.dropdown && openDropdown === idx && (
  <div
    className="absolute left-0 mt-2 rounded-[12px] shadow-lg z-50 flex flex-col w-[326px]"
    style={{
      padding: "15px",
      gap: "3px",
      background: "rgba(255, 255, 255, 0.25)", // glass effect
      border: "1px solid #64c4b3",
      backdropFilter: "blur(30px) saturate(200%) contrast(120%)",
      WebkitBackdropFilter: "blur(30px) saturate(200%) contrast(120%)",
    }}
  >
    {item.dropdown.map((sub, subIdx) => (
      <Link
        key={subIdx}
        href={sub.href}
        onClick={() => setOpenDropdown(null)}
        className="flex items-center justify-between w-full h-[60px] px-[12px] py-[18px] rounded-[7px] border transition-all duration-300"
        style={{
          fontFamily: "var(--font-jakarta)",
          fontWeight: 500,
          fontSize: "14px",
          gap: "10px",
          borderColor: "rgba(10, 110, 92, 0.14)",
          background: "rgba(105,235,212,0.13)",
          color: "#004F3F",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#69EBD4D4";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(105,235,212,0.13)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* Left: icon + text */}
        <div className="flex items-center gap-3 text-primary">
          {sub.isIcon ? (
            <FontAwesomeIcon
              icon={sub.icon}
              className="w-5 h-5"
              style={{ color: "#004F3F" }}
            />
          ) : (
            <span
              className="w-5 h-5"
              style={{
                display: "inline-block",
                backgroundColor: "#004F3F",
                maskImage: `url(${sub.icon})`,
                WebkitMaskImage: `url(${sub.icon})`,
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                maskSize: "contain",
                WebkitMaskSize: "contain",
              }}
            />
          )}
          {sub.name}
        </div>

        {/* Right arrow */}
        <ArrowRight className="w-4 h-4 text-primary" />
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

      {/* Right Section → Login + Demo Buttons (Desktop) */}
      <div
        className="hidden lg:flex items-center gap-[21px]"
        style={{
          width: "319px",
          height: "67px",
          borderRadius: "666px",
          fontFamily: "var(--font-jakarta)",
          backgroundColor: "var(--navBg)",
        }}
      >
        <Button
          href="/login"
          className="w-[94px] h-[51px] px-[25px] py-[15px] rounded-[555px] font-jakarta font-bold text-[16px] leading-[100%] text-gradient-primary-2 border border-gradient-primary-2"
        >
          Login
        </Button>
        <Button
          href="/book-demo"
          className="group relative w-[193px] h-[51px] px-[25px] py-[15px] rounded-[44px] font-jakarta font-bold text-[16px] leading-[100%] text-white bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 flex items-center justify-center overflow-hidden"
        >
          <span className="transition-transform duration-300 group-hover:translate-x-[-10px]">
            Book a Demo
          </span>
          <span className="absolute right-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center justify-center w-[44px] h-[44px] rounded-[101px] bg-white">
            <span
              className="w-[20px] h-[20px] bg-gradient-primary-2"
              style={{
                maskImage: "url('/Images/Navassests/ReArrow.png')",
                WebkitMaskImage: "url('/Images/Navassests/ReArrow.png')",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                maskSize: "contain",
                WebkitMaskSize: "contain",
              }}
            ></span>
          </span>
        </Button>
      </div>








              {/* Top Nav for Mobile */}
<div className="lg:hidden flex items-center justify-between px-4 py-3  fixed top-0 left-0 w-full z-50">
  {/* Logo on Left */}
  <Img
    src="/Images/Navassests/Accurack.png"
    width={106}
    height={40}
    alt="Accurack Logo"
    className="object-contain"
  />

  {/* Hamburger on Right */}
  <button onClick={() => setMobileMenu(true)}>
    <svg
      className="w-8 h-8  text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</div>

{mobileMenu && (
        <div
          className="fixed top-0  right-0 h-full w-[359px] bg-primary text-white z-50 transition-transform duration-300 flex flex-col"
          style={{
            borderTopLeftRadius: "17px",
            borderBottomLeftRadius: "17px",
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setMobileMenu(false)}
            className="absolute top-4 right-4"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Drawer Logo */}
          <div className="flex items-center px-6 mt-6">
            <Img
              src="/Images/Navassests/WhiteLog.png"
              width={123}
              height={35}
              alt="Accurack Logo"
              className="object-contain"
            />
          </div>

          {/* Nav Items */}
          <div className="flex-1 mt-8 px-6 space-y-2 overflow-y-auto pb-40">
            {navItems.map((item, idx) => (
              <div key={idx}>
                {item.href ? (
                  // Normal Link
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className="block border-b border-white/20 py-3"
                    style={{
                      fontFamily: "Base Neue Trial, sans-serif",
                      fontWeight: 400,
                      fontSize: "24px",
                      lineHeight: "47.33px",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {item.name}
                  </Link>
                ) : (
                  // Dropdown Item
                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === idx ? null : idx)
                      }
                      className="w-full flex justify-between items-center border-b border-white/20 py-3"
                      style={{
                        fontFamily: "Base Neue Trial, sans-serif",
                        fontWeight: 400,
                        fontSize: "24px",
                        lineHeight: "47.33px",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {item.name}
                      {openDropdown === idx ? (
                        <span className="text-2xl w-10">−</span>
                      ) : (
                        <span className="text-2xl">+</span>
                      )}
                    </button>

                    {/* Dropdown Content */}
                    {openDropdown === idx && (
                      <div className="ml-4 mt-2 flex flex-col space-y-2">
                        {item.dropdown?.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.href}
                            onClick={() => setMobileMenu(false)}
                            className="flex items-center gap-3 py-2"
                            style={{
                              fontFamily: "Base Neue Trial, sans-serif",
                              fontWeight: 400,
                              fontSize: "24px",
                              lineHeight: "47.33px",
                              color: "rgba(255,255,255,0.7)",
                            }}
                          >
                            {sub.isIcon ? (
                              <FontAwesomeIcon
                                icon={sub.icon}
                                className="w-6 h-6 text-cyan-300 fill-current"
                              />
                            ) : (
                              <img
                                src={sub.icon}
                                alt=""
                                className="w-6 h-6 object-contain"
                                style={{
                                  filter:
                                    "brightness(0) saturate(100%) invert(69%) sepia(100%) saturate(400%) hue-rotate(115deg)",
                                }}
                              />
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
            {/* Book a Demo */}
            <div
              className="relative flex items-center justify-center bg-white"
              style={{
                width: "292px",
                height: "59px",
                borderRadius: "555px",
                padding: "15px 25px",
              }}
            >
              <span
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "100%",
                  color: "#0C4752",
                }}
              >
                Book a Demo
              </span>
              <div
                className="absolute right-4 flex items-center justify-center"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "101px",
                  backgroundColor: "#0C4752",
                }}
              >


                    <Img
              src="/Images/Navassests/ReArrow.png"
              width={24}
              height={24}
              alt="Arrow"
              className=""
            />

              </div>
            </div>

            {/* Start Free Trial */}
            <div
              className="flex items-center justify-center border"
              style={{
                width: "292px",
                height: "59px",
                borderRadius: "555px",
                border: "1.5px solid #FFFFFF",
                padding: "15px 25px",
              }}
            >
              <span
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "100%",
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                Start Free Trial
              </span>
            </div>
          </div>
        </div>
      )}

    </nav>
  );
}

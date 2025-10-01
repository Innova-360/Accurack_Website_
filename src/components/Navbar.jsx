"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Img from "./Image/Image";
import Button from "./Button/Button";

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
          href: "#",
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
                  className="text-[15px] px-4 py-2 rounded-md transition text-black font-semibold hover:text-[#0C6676]"
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
                    className="flex items-center text-[15px] px-4 py-2 rounded-md transition text-black font-semibold hover:text-[#0C6676]"
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
                      className="absolute left-0 mt-2 rounded-[12px] shadow-lg z-50 flex flex-col w-[364px]"
                      style={{
                        padding: "15px",
                        gap: "10px",
                        background: "rgba(235, 252, 249, 0.75)",
                        backdropFilter:
                          "blur(30px) saturate(200%) contrast(120%)",
                        border: "1px solid #64c4b3",
                      }}
                    >
                      {item.dropdown.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sub.href}
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-center text-[14px] px-4 py-[14px] rounded-[7px] transition bg-[#ebfcf9] hover:bg-[#d3d3d3] text-[#363b40]"
                          style={{
                            fontFamily: "var(--font-jakarta)",
                            fontWeight: 500,
                            gap: "10px",
                          }}
                        >
                          {sub.isIcon ? (
                            <FontAwesomeIcon
                              icon={sub.icon}
                              className="w-4 h-4 mr-3"
                              style={{ color: "#328a7a" }}
                            />
                          ) : (
                            <Img
                              src={sub.icon}
                              className="mr-3"
                              width={20}
                              height={20}
                              alt="icon"
                            />
                          )}
                          {sub.name}
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
          className="w-[94px] h-[51px] px-[25px] py-[15px] rounded-[555px] font-jakarta font-bold text-[16px] leading-[100%] text-[#0C6676] border border-[#0C6676]"
        >
          Login
        </Button>
        <Button
          href="/book-demo"
          className="group relative w-[193px] h-[51px] px-[25px] py-[15px] rounded-[44px] font-jakarta font-bold text-[16px] leading-[100%] text-white bg-gradient-to-r from-[var(--navbookademobg1)] to-[var(--navbookademobg2)] flex items-center justify-center overflow-hidden"
        >
          <span className="transition-transform duration-300 group-hover:translate-x-[-10px]">
            Book a Demo
          </span>

          {/* Arrow on hover */}
          <span className="absolute right-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center justify-center w-[44px] h-[44px] rounded-[101px] bg-white">
            <span
              className="w-[20px] h-[20px] bg-[#0C6676]"
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

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100"
          aria-label="Toggle menu"
        >
          {mobileMenu ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <div className="flex flex-col items-center justify-center space-y-1">
              <span className="block w-6 h-0.5 bg-gray-700 rounded"></span>
              <span className="block w-5 h-0.5 bg-gray-700 rounded"></span>
              <span className="block w-4 h-0.5 bg-gray-700 rounded"></span>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenu && (
        <div className="absolute top-[80px] left-0 w-full bg-white border-t shadow-lg lg:hidden">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item, idx) => (
              <div key={idx}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block text-[15px] font-semibold text-black hover:text-[#0C6676]"
                    onClick={() => setMobileMenu(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <details>
                    <summary className="flex items-center justify-between cursor-pointer text-[15px] font-semibold text-black hover:text-[#0C6676]">
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <div className="ml-4 mt-2 flex flex-col space-y-2">
                      {item.dropdown?.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sub.href}
                          className="text-[14px] text-gray-700 hover:text-[#0C6676]"
                          onClick={() => setMobileMenu(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            ))}

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <Button
                href="/login"
                className="w-full h-[51px] rounded-[555px] font-jakarta font-bold text-[16px] text-[#0C6676] border border-[#0C6676]"
              >
                Login
              </Button>
              <Button
                href="/book-demo"
                className="w-full h-[51px] rounded-[44px] font-jakarta font-bold text-[16px] text-white bg-gradient-to-r from-[var(--navbookademobg1)] to-[var(--navbookademobg2)] flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                Book a Demo
                {/* Arrow on hover (Mobile too) */}
                <span className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center w-[44px] h-[44px] rounded-[101px] bg-white">
                  <ArrowRight className="w-5 h-5 text-[#0C6676]" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button/Button";
import Img from "./Image/Image";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Solutions",
      dropdown: [
        { name: "Inventory Solution", href: "#", icon: "/Images/Navassests/icons/box.png", isIcon: false },
        { name: "All in one Solution", href: "#", icon: faLink, isIcon: true },
        { name: "Ai Warehouse Suite", href: "#", icon: "/Images/Navassests/icons/Vector.png", isIcon: false },
        { name: "Performance Suite", href: "#", icon: "/Images/Navassests/icons/Baar.png", isIcon: false },
      ],
    },
    {
      name: "Features",
      dropdown: [
        { name: "Inventary Management", href: "#", icon: "/Images/Navassests/icons/Invent.png", isIcon: false },
        { name: "Supplier Integrations", href: "#", icon: "/Images/Navassests/icons/Supp.png", isIcon: false },
        { name: "Sales Management", href: "#", icon: "/Images/Navassests/icons/Dollars.png", isIcon: false },
        { name: "Warehousing", href: "#", icon: "/Images/Navassests/icons/Ware.png", isIcon: false },
        { name: "Accounting", href: "#", icon: "/Images/Navassests/icons/Accounting.png", isIcon: false },
        { name: "CRM & ERP", href: "#", icon: "/Images/Navassests/icons/profile.png", isIcon: false },
      ],
    },
    {
      name: "Industries",
      dropdown: [
        { name: "Seamless integrations", href: "#", icon: "/Images/Navassests/icons/Seam.png", isIcon: false },
        { name: "Manufacturing", href: "#", icon: "/Images/Navassests/icons/Setting.png", isIcon: false },
        { name: "Retail & E-commerce", href: "#", icon: "/Images/Navassests/icons/Retail.png", isIcon: false },
        { name: "Healthcare", href: "#", icon: "/Images/Navassests/icons/Health.png", isIcon: false },
        { name: "Food & Beverage (New)", href: "#", icon: "/Images/Navassests/icons/Food.png", isIcon: false },
      ],
    },
    {
      name: "Partners",
      dropdown: [
        { name: "Partner Directory (New)", href: "#", icon: "/Images/Navassests/icons/Partner.png", isIcon: false },
        { name: "Referral Program (New)", href: "#", icon: "/Images/Navassests/icons/Referral.png", isIcon: false },
        { name: "Free Tools (New)", href: "#", icon: "/Images/Navassests/icons/Free.png", isIcon: false },
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

  return (
    <nav className="sticky top-0 z-50 bg-navBg">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center h-[70px] sm:h-[80px] px-4 sm:px-6 lg:px-[80px]">
        {/* Left side */}
        <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
          {/* Logo */}
          <Link href="/" className="flex items-center w-[120px] sm:w-[150px] lg:w-[160px] h-[30px] sm:h-[32px]">
            <Img src="/Images/Navassests/Logo.png" width={160} height={32} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-5 lg:space-x-8" ref={dropdownRef}>
            {navItems.map((item, idx) => (
              <div key={idx} className="relative">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`font-plus-jakarta-sans text-[14px] lg:text-[16px] ${
                      item.name === "Home" ? "text-[#0B6D7E]" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                      className="flex items-center font-plus-jakarta-sans text-[14px] lg:text-[16px] text-gray-700 hover:text-blue-600"
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform ${openDropdown === idx ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Dropdown */}
                    {item.dropdown && openDropdown === idx && (
                      <div className="absolute left-0 mt-2 w-56 sm:w-64 bg-white shadow-lg rounded-xl overflow-hidden">
                        {item.dropdown.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`flex items-center px-4 py-2 sm:py-3 text-[13px] sm:text-[14px] lg:text-[15px] text-gray-700 transition-all duration-200 hover:bg-navBg hover:pl-6 ${
                              subIdx !== item.dropdown.length - 1 ? "border-b border-gray-200" : ""
                            }`}
                          >
                            {sub.isIcon ? (
                              <FontAwesomeIcon icon={sub.icon} className="w-4 h-4 mr-3 text-gray-500" />
                            ) : (
                              <Img src={sub.icon} className="mr-3" width={20} height={20} alt="icon" />
                            )}
                            {sub.name}
                            <ChevronRight className="ml-auto w-4 h-4 text-gray-400" />
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

        {/* Right side (Desktop only) */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <Link
            href="/login"
            className="text-gray-700 hover:text-blue-600 font-plus-jakarta-sans font-medium text-[14px] lg:text-[15px] uppercase rounded-[32px] w-[75px] lg:w-[87px] h-[36px] lg:h-[40px] flex items-center justify-center"
          >
            Login
          </Link>
          <Button href={"/demo"} children={"Book a Demo"} />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100"
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
      </div>

      {/* Mobile Dropdown */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-lg" ref={dropdownRef}>
          {navItems.map((item, idx) => (
            <div key={idx} className="border-b border-gray-200">
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className={`block px-4 py-3 font-plus-jakarta-sans text-[14px] sm:text-[15px] ${
                    item.name === "Home" ? "text-[#0B6D7E]" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                    className="w-full flex justify-between items-center px-4 py-3 font-plus-jakarta-sans text-[14px] sm:text-[15px] text-gray-700 hover:bg-gray-100"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openDropdown === idx ? "rotate-180" : ""}`}
                    />
                  </button>
                  {item.dropdown && openDropdown === idx && (
                    <div className="pl-6">
                      {item.dropdown.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sub.href}
                          onClick={() => {
                            setOpenDropdown(null);
                            setMobileMenu(false);
                          }}
                          className={`flex items-center px-4 py-2 sm:py-3 text-[13px] sm:text-[14px] text-gray-600 transition-all duration-200 hover:bg-gray-200 hover:pl-8 ${
                            subIdx !== item.dropdown.length - 1 ? "border-b border-gray-200" : ""
                          }`}
                        >
                          {sub.isIcon ? (
                            <FontAwesomeIcon icon={sub.icon} className="w-4 h-4 mr-2 text-gray-500" />
                          ) : (
                            <Img src={sub.icon} className="w-5 h-5 mr-2" width={20} height={20} alt="icon" />
                          )}
                          {sub.name}
                          <ChevronRight className="ml-auto w-4 h-4 text-gray-400" />
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}

          {/* Mobile Buttons */}
          <div className="px-4 py-3 space-y-2">
            <Link
              href="/login"
              onClick={() => setMobileMenu(false)}
              className="block py-2 text-gray-700 hover:bg-gray-100 text-center rounded-lg"
            >
              Login
            </Link>
            <Link
              href="/demo"
              onClick={() => setMobileMenu(false)}
              className="block text-white text-center bg-navdemobuttonBg py-2 rounded-lg transition-colors duration-200 hover:bg-[#0a5a6b]"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

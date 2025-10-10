"use client";

import Img from "../ui/Image/Image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import SuspenseWrapper from "./SuspenseWrapper";

export default function TeamSection({ whiteBg = false }) {
  const teamMembers = [
    {
      name: "Dr. Anya Sharma -",
      image: "/Images/Dropdownassests/Solutions/Aiwarehouse/Man1.png",
      text: "Chief Technology Officer",
      width: 233,
      height: 344,
      extraClass: "",
    },
    {
      name: "Dr. Anya Sharma -",
      image: "/Images/Dropdownassests/Solutions/Aiwarehouse/Man2.png",
      text: "Chief Technology Officer",
      width: 233,
      height: 344,
      extraClass: "!h-[456px] -top-[23px]",
    },
    {
      name: "Dr. Anya Sharma -",
      image: "/Images/Dropdownassests/Solutions/Aiwarehouse/Man3.png",
      text: "Chief Technology Officer",
      width: 233,
      height: 344,
      extraClass: "!h-[665px] -top-[47px]",
    },
    {
      name: "Dr. Anya Sharma -",
      image: "/Images/Dropdownassests/Solutions/Aiwarehouse/Man4.png",
      text: "Chief Technology Officer",
      width: 233,
      height: 344,
      extraClass: "!h-[560px] top-[1px]",
    },
    {
      name: "Robert Brown",
      image: "/Images/Dropdownassests/Solutions/Aiwarehouse/Man1.png",
      text: "Chief Technology Officer",
      width: 233,
      height: 344,
      extraClass: "",
    },
  ];

  return (
    <SuspenseWrapper>
      <section
        className={`w-full ${
          whiteBg
            ? "bg-background"
            : "bg-[#F3F3F3]"
        }  py-16 px-4 sm:px-8 lg:px-16`}
      >
        {/* Heading + Subtext */}
        <div className="max-w-[850px]">
          <h2 className="font-heading font-medium text-[48px] leading-[61px] text-text mb-6">
            The Great Minds Behind Our Work
          </h2>
          <p className="font-text text-[16px] leading-[24px] text-text font-normal mb-12 max-w-[612px]">
            Join hundreds of businesses optimizing their operations with
            Accurack.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-5 lg:gap-10">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-start w-full sm:w-[233px] h-auto bg-transparent relative group`}
            >
              {/* Image + Hover Overlay */}
              <div className="relative overflow-hidden rounded-[7px] mb-4 w-full h-[344px] sm:w-[233px] sm:h-[344px]">
                <Img
                  src={member.image}
                  alt={member.name}
                  width={member.width}
                  height={member.height}
                  className={`absolute w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-x-3 group-hover:translate-y-2 ${member.extraClass}`}
                  fallback="/Images/placeholder.png"
                />

                {/* Hover Bottom Gradient + Icons */}
                <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-cardshade to-transparent"></div>
                  <div className="relative flex gap-[13.73px] mb-4">
                    <div className="w-[41.18px] h-[41.18px] flex items-center justify-center rounded-full border border-icon text-icon">
                      <FaFacebookF size={18} />
                    </div>
                    <div className="w-[41.18px] h-[41.18px] flex items-center justify-center rounded-full border border-icon text-icon">
                      <FaInstagram size={18} />
                    </div>
                    <div className="w-[41.18px] h-[41.18px] flex items-center justify-center rounded-full border border-icon text-icon">
                      <FaYoutube size={18} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Name + Designation */}
              <div className="w-full sm:w-[217px] h-auto">
                <h3 className="font-body font-medium text-[18px] sm:text-[24px] leading-[26px] sm:leading-[32px] text-text">
                  {member.name}
                </h3>
                <p className="font-body text-[13px] sm:text-[14px] leading-[16px] text-text/90 mt-1">
                  {member.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SuspenseWrapper>
  );
}

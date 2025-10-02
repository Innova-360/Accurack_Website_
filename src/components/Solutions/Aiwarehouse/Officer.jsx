"use client";

import Img from "../../Image/Image";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function TeamSection() {
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
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16">
      {/* Heading + Subtext */}
      <div className="max-w-[850px]">
        <h2
          style={{ fontFamily: "var(--font-lora)" }}
                    className="font-medium text-[48px] leading-[61px] text-black mb-6"
        >
          The Great Minds Behind Our Work
        </h2>
        <p
          style={{ fontFamily: "Inter, sans-serif" }}
          className="text-[16px] leading-[24px] text-black font-normal mb-12 max-w-[612px]"
        >
          Join hundreds of businesses optimizing their operations with Accurack.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start w-[233px] h-[407px] bg-white relative group"
          >
            {/* Image + Hover Overlay */}
            <div
              style={{ width: member.width, height: member.height }}
              className="relative overflow-hidden rounded-[7px] mb-4"
            >
              <Img
                src={member.image}
                alt={member.name}
                width={member.width}
                height={member.height}
                className={`absolute w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-x-3 group-hover:translate-y-2 ${member.extraClass}`}
              />

              {/* Hover Bottom Gradient + Icons */}
              <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Bottom Gradient Background */}
                <div
                  className="absolute bottom-0 left-0 w-full h-[120px]"
                  style={{
                    background:
                      "linear-gradient(to top, #83DCEC 0%, #FFFFFF00 100%)",
                  }}
                ></div>

                {/* Icons at Bottom */}
                <div className="relative flex gap-[13.73px] mb-4">
                  <div className="w-[41.18px] h-[41.18px] flex items-center justify-center rounded-full border border-[var(--color-primary-hover)] text-[var(--color-primary-hover)] bg-transparent">
                    <FaFacebookF size={18} />
                  </div>
                  <div className="w-[41.18px] h-[41.18px] flex items-center justify-center rounded-full border border-[var(--color-primary-hover)] text-[var(--color-primary-hover)] bg-transparent">
                    <FaInstagram size={18} />
                  </div>
                  <div className="w-[41.18px] h-[41.18px] flex items-center justify-center rounded-full border border-[var(--color-primary-hover)] text-[var(--color-primary-hover)] bg-transparent">
                    <FaYoutube size={18} />
                  </div>
                </div>
              </div>
            </div>

            {/* Heading + Text */}
            <div className="w-[217px] h-[48px]">
              <h3
                style={{ fontFamily: "var(--font-jakarta)" }}
                className="font-medium text-[24px] leading-[32px] text-gray-900"
              >
                {member.name}
              </h3>
              <p
                style={{ fontFamily: "var(--font-jakarta)" }}
                className="text-[14px] leading-[16px] text-gray-900 mt-1"
              >
                {member.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/ui/Headers/Header";

export default function GoodCompany() {
    const RatingStars = () => (
        <div className="flex gap-[2px] sm:gap-1 justify-center">
            {[...Array(4)].map((_, i) => (
                <FontAwesomeIcon
                    key={i}
                    icon={faStarSolid}
                    className="text-[10px] sm:text-[14px] lg:text-[18px] text-primary flex-shrink-0"
                />
            ))}
            <FontAwesomeIcon
                icon={faStarHalfStroke}
                className="text-[10px] sm:text-[14px] lg:text-[18px] text-primary flex-shrink-0"
            />
        </div>
    );

    const ColoredIcon = ({ src, alt }) => (
        <div
            className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-primary flex-shrink-0"
            style={{
                WebkitMaskImage: `url(${src})`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                WebkitMaskSize: "contain",
                maskImage: `url(${src})`,
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "contain",
            }}
            aria-label={alt}
        />
    );

    const Item = ({ icon, title, rating }) => (
        <div className="flex flex-col items-center justify-center w-full">
            {/* icon + title */}
            <div className="flex items-center gap-1 sm:gap-2">
                {icon === "left" ? (
                    <>
                        <ColoredIcon src="/Images/Dropdownassests/Solutions/InventorySolutions/Get.png" alt={title} />
                        <span className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-semibold text-primary flex-shrink-0">
                            {title}
                        </span>
                    </>
                ) : icon === "right" ? (
                    <>
                        <span className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-semibold text-primary flex-shrink-0">
                            {title}
                        </span>
                        <ColoredIcon src="/Images/Dropdownassests/Solutions/InventorySolutions/Msg.png" alt={title} />
                    </>
                ) : (
                    <ColoredIcon src={icon} alt={title} />
                )}
            </div>

            {/* stars + reviews */}
            <div className="mt-1 text-center">
                <RatingStars />
                <p className="mt-1 text-[7px] sm:text-[9px] md:text-xs lg:text-sm font-medium text-primary">
                    {rating}
                </p>
            </div>
        </div>
    );

    return (
        <section className="w-full py-6">
            <h2 className="text-xl font-jakarta text-center italic mb-4">You are in a Good Company</h2>
            <section className="w-full">
                <div className="max-w-6xl mx-auto px-2 py-8 sm:px-4 lg:px-10 bg-gray-100 rounded-xl border border-gray-300">
                    <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 items-center">
                        <Item icon="left" title="GetApp" rating="4.2 (940 reviews)" />
                        <Item icon="right" title="Software Advice" rating="4.2 (941 reviews)" />
                        <Item
                            icon="/Images/Dropdownassests/Solutions/InventorySolutions/Arrow.png"
                            title="Arrow"
                            rating="4.0 (246 reviews)"
                        />
                        <Item
                            icon="/Images/Dropdownassests/Solutions/InventorySolutions/Next.PNG"
                            title="G2"
                            rating="4.2 (941 reviews)"
                        />
                    </div>
                </div>
            </section>
        </section>
    );
}


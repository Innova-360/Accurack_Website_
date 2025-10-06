"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

export default function ForecastingSection() {
  const [videoUrl, setVideoUrl] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef(null);

  const videos = [
    {
      id: 1,
      img: "/Images/Homeassests/Forecastingsection/Laptop.png",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hover: "group-hover:-rotate-6 group-hover:scale-110",
    },
    {
      id: 2,
      img: "/Images/Homeassests/Forecastingsection/Truck.png",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hover: "group-hover:-rotate-6 group-hover:scale-110",
    },
    {
      id: 3,
      img: "/Images/Homeassests/Forecastingsection/Tech.png",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hover: "group-hover:rotate-6 group-hover:scale-110",
    },
  ];

  // Track scroll position for active dot indicator
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const itemWidth = scrollContainer.scrollWidth / videos.length;
      const active = Math.round(scrollLeft / itemWidth);
      setActiveSlide(active);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [videos.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="w-full bg-[#EFEFEF] flex flex-col lg:mt-28 mt-32 items-center justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-8">
      <motion.div
        className="max-w-[1284px] w-full flex flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Features Tag */}
        <motion.span
          className="inline-flex items-center justify-center border border-[#18BDA0] text-[#18BDA0] font-lora font-medium text-[14px] sm:text-[16px] leading-[100%] px-3 sm:px-4 py-1 rounded-[7px] mb-4 sm:mb-6"
          variants={itemVariants}
        >
          Features
        </motion.span>

        {/* Heading */}
        <motion.h2
          style={{ fontFamily: "'Lora', serif" }}
          className="font-lora font-medium text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[110%] sm:leading-[100%] text-[#070709] text-center mb-3 sm:mb-4 px-2"
          variants={itemVariants}
        >
          AI-Driven Demand Forecasting for{" "}
          <span className="block sm:inline">Smarter Inventory Management</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-[#070709] font-inter font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-center max-w-4xl mb-8 sm:mb-12 px-2"
          variants={itemVariants}
        >
          Discover why businesses partner with us to overcome challenges and
          fuel growth. From streamlining inventory to expanding into new
          markets, these success stories show how Cin7 helps companies reach new
          heights.
        </motion.p>

        {/* Images Grid/Slider */}
        <motion.div className="w-full" variants={itemVariants}>
          {/* Mobile & Tablet: Animated Horizontal Scroll */}
          <div
            ref={scrollRef}
            className="flex lg:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {videos.map((v, index) => (
              <motion.div
                key={v.id}
                className="relative min-w-[280px] sm:min-w-[320px] h-[300px] sm:h-[359px] group cursor-pointer overflow-hidden rounded-[24px] sm:rounded-[32px] snap-center flex-shrink-0"
                onClick={() => setVideoUrl(v.video)}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background Image */}
                <Image
                  src={v.img}
                  alt={`Forecasting ${v.id}`}
                  fill
                  className={`object-cover transition-transform duration-300 ease-in-out ${v.hover}`}
                />

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-[#0BBB9C]"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Video Icon */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/Images/Homeassests/Forecastingsection/Video.png"
                    alt="Play Video"
                    width={80}
                    height={80}
                    className="opacity-70 sm:w-[100px] sm:h-[100px]"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Grid (lg unchanged) */}
          <div className="hidden lg:grid grid-cols-3 w-full overflow-hidden rounded-[52px]">
            {videos.map((v) => (
              <motion.div
                key={v.id}
                className="relative w-full h-[359px] group cursor-pointer overflow-hidden"
                onClick={() => setVideoUrl(v.video)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Image */}
                <Image
                  src={v.img}
                  alt={`Forecasting ${v.id}`}
                  fill
                  className={`object-cover transition-transform duration-300 ease-in-out ${v.hover}`}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0BBB9C] opacity-0 group-hover:opacity-70 transition-opacity duration-300 ease-in-out"></div>

                {/* Video Icon */}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100 scale-50 opacity-0">
                  <Image
                    src="/Images/Homeassests/Forecastingsection/Video.png"
                    alt="Play Video"
                    width={118}
                    height={118}
                    className="opacity-70"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated Scroll Indicator Dots */}
          <div className="flex lg:hidden justify-center gap-2 mt-4">
            {videos.map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full bg-[#18BDA0]"
                animate={{
                  opacity: activeSlide === index ? 1 : 0.3,
                  scale: activeSlide === index ? 1.2 : 1
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Video Modal */}
      <AnimatePresence>
        {videoUrl && (
          <motion.div
            className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoUrl(null)}
          >
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-3xl relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-2 right-2 text-black text-2xl font-bold z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-gray-100"
                onClick={() => setVideoUrl(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                ✕
              </motion.button>
              <iframe
                width="100%"
                height="300"
                className="sm:h-[400px] md:h-[500px]"
                src={videoUrl}
                title="Video Player"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
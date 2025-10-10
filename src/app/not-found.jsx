
'use client';
import React, { useState, useEffect } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

// SuspenseWrapper component
const SuspenseWrapper = ({ children }) => {
  return (
    <React.Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      {children}
    </React.Suspense>
  );
};

const AnimatedCircle = ({ delay, duration, size, opacity, isMounted }) => {
  return (
    <m.div
      className="absolute rounded-full border-2 border-teal-200"
      style={{ width: size, height: size }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isMounted ? { 
        scale: [0.8, 1.2, 0.8],
        opacity: [opacity, opacity * 0.5, opacity],
        rotate: [0, 180, 360]
      } : { scale: 0.8, opacity: 0 }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  );
};

const BlinkingEye = ({ delay, isMounted }) => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    if (!isMounted) return;
    
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3000 + delay);

    return () => clearInterval(blinkInterval);
  }, [delay, isMounted]);

  return (
    <m.div
      className="relative"
      animate={isMounted && isBlinking ? { scale: [1, 1, 0.1, 1] } : { scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-8 h-8 relative">
        <m.div
          className="absolute inset-0"
          animate={isMounted ? { rotate: [0, 5, -5, 0] } : { rotate: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path
              d="M6 12L18 6M6 12L18 18"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="text-teal-700"
            />
          </svg>
        </m.div>
      </div>
    </m.div>
  );
};

// Predefined particle positions to avoid hydration errors
const particlePositions = [
  { left: '10%', top: '15%', delay: 0, duration: 3.2, xOffset: 10 },
  { left: '85%', top: '20%', delay: 0.5, duration: 4.1, xOffset: -10 },
  { left: '20%', top: '80%', delay: 1, duration: 3.8, xOffset: 10 },
  { left: '75%', top: '70%', delay: 1.5, duration: 4.5, xOffset: -10 },
  { left: '50%', top: '10%', delay: 0.3, duration: 3.5, xOffset: 10 },
  { left: '15%', top: '50%', delay: 0.8, duration: 4.2, xOffset: -10 },
  { left: '90%', top: '45%', delay: 1.2, duration: 3.9, xOffset: 10 },
  { left: '35%', top: '25%', delay: 0.6, duration: 4.0, xOffset: -10 },
  { left: '65%', top: '85%', delay: 1.8, duration: 3.7, xOffset: 10 },
  { left: '45%', top: '60%', delay: 0.4, duration: 4.3, xOffset: -10 },
  { left: '25%', top: '35%', delay: 1.1, duration: 3.6, xOffset: 10 },
  { left: '80%', top: '55%', delay: 0.7, duration: 4.4, xOffset: -10 },
  { left: '55%', top: '90%', delay: 1.4, duration: 3.4, xOffset: 10 },
  { left: '30%', top: '70%', delay: 0.9, duration: 4.1, xOffset: -10 },
  { left: '70%', top: '30%', delay: 1.6, duration: 3.8, xOffset: 10 },
  { left: '40%', top: '45%', delay: 0.2, duration: 4.2, xOffset: -10 },
  { left: '60%', top: '15%', delay: 1.3, duration: 3.9, xOffset: 10 },
  { left: '12%', top: '65%', delay: 0.5, duration: 4.0, xOffset: -10 },
  { left: '88%', top: '75%', delay: 1.7, duration: 3.5, xOffset: 10 },
  { left: '48%', top: '82%', delay: 1.0, duration: 4.3, xOffset: -10 }
];

const FourZeroFour = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <SuspenseWrapper>
        <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
          
          {/* Animated Background Circles */}
          <div className="absolute mr-50 mb-40 inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[600px] h-[600px]">
              <AnimatedCircle delay={0} duration={8} size="800px" opacity={0.3} isMounted={isMounted} />
              <AnimatedCircle delay={1} duration={10} size="900px" opacity={0.2} isMounted={isMounted} />
              <AnimatedCircle delay={2} duration={12} size="1000px" opacity={0.15} isMounted={isMounted} />
            </div>
          </div>

          {/* Floating particles with predefined positions */}
          {particlePositions.map((pos, i) => (
            <m.div
              key={i}
              className="absolute w-2 h-2 bg-teal-300 rounded-full"
              style={{
                left: pos.left,
                top: pos.top,
              }}
              animate={isMounted ? {
                y: [0, -30, 0],
                x: [0, pos.xOffset, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1]
              } : {}}
              transition={{
                duration: pos.duration,
                repeat: Infinity,
                delay: pos.delay,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Main Content */}
          <m.div 
            className="relative z-10 text-center max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            
            {/* Sad Face Icon */}
            <m.div 
              className="flex justify-center mb-8"
              initial={{ scale: 0 }}
              animate={isMounted ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <div className="relative">
                <m.div 
                  className="bg-[#03414B] rounded-3xl p-4 shadow-2xl"
                  animate={isMounted ? { 
                    rotateY: [0, 10, -10, 0],
                  } : {}}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-32 h-24 bg-white/90 rounded-xl flex flex-col items-center justify-center gap-4 backdrop-blur">
                    {/* Eyes */}
                    <div className="flex gap-8">
                      <BlinkingEye delay={0} isMounted={isMounted} />
                      <BlinkingEye delay={500} isMounted={isMounted} />
                    </div>
                    
                    {/* Sad Mouth */}
                    <m.div
                      animate={isMounted ? { 
                        scaleX: [1, 0.95, 1],
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg width="40" height="20" viewBox="0 0 40 20" className="text-teal-700">
                        <path
                          d="M5 15 Q20 5 35 15"
                          stroke="currentColor"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </m.div>
                  </div>
                </m.div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl blur-2xl opacity-30 -z-10"></div>
              </div>
            </m.div>

            {/* Title */}
            <m.h1 
              className="text-6xl md:text-7xl font-bold text-teal-900 mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              OOPS! PAGE NOT FOUND
            </m.h1>

            {/* Description */}
            <m.p 
              className="text-lg text-slate-600 mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isMounted ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              Book a <span className="font-bold text-teal-700">30 minute call</span> to discuss your plans needs, and goals. We'll get on
            </m.p>
            <m.p 
              className="text-lg text-slate-600 mb-10"
              initial={{ opacity: 0 }}
              animate={isMounted ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.7 }}
            >
              the same We'll align and <span className="font-bold text-teal-700">create an action plane</span>.
            </m.p>

            {/* Buttons */}
            <m.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
            >
              <m.button
                className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                whileHover={isMounted ? { scale: 1.05, boxShadow: "0 20px 40px rgba(8, 145, 178, 0.3)" } : {}}
                whileTap={isMounted ? { scale: 0.95 } : {}}
              >
                Book a Demo
              </m.button>
              
              <m.button
                className="bg-white text-teal-700 px-10 py-4 rounded-full font-semibold text-lg border-2 border-teal-600 hover:bg-teal-50 transition-all w-full sm:w-auto"
                whileHover={isMounted ? { scale: 1.05 } : {}}
                whileTap={isMounted ? { scale: 0.95 } : {}}
              >
                Homepage
              </m.button>
            </m.div>
          </m.div>
        </div>
      </SuspenseWrapper>
    </LazyMotion>
  );
};

export default FourZeroFour;
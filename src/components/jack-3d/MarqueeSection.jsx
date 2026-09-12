"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const images = [
  "/TEST/Screenshot 2026-09-10 202413.png",
  "/TEST/Screenshot 2026-09-10 202425.png",
  "/TEST/Screenshot 2026-09-10 202437.png",
  "/TEST/Screenshot 2026-09-10 202458.png",
  "/TEST/Screenshot 2026-09-10 202509.png",
  "/TEST/Screenshot 2026-09-10 202523.png",
  "/TEST/Screenshot 2026-09-10 202532.png",
  "/TEST/Screenshot 2026-09-10 202541.png",
  "/TEST/Screenshot 2026-09-10 202548.png",
  "/TEST/Screenshot 2026-09-10 202554.png",
  "/TEST/Screenshot 2026-09-10 202559.png",
  "/TEST/Screenshot 2026-09-10 202605.png",
  "/TEST/Screenshot 2026-09-10 202612.png"
];

const row1 = images.slice(0, 7);
const row2 = images.slice(7);

// Tripled to ensure enough scroll width before recycling
const triple1 = [...row1, ...row1, ...row1];
const triple2 = [...row2, ...row2, ...row2];

export default function MarqueeSection() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // We map the absolute scroll value to an X offset.
  // The offset goes positive for right, negative for left.
  const xRight = useTransform(scrollY, (val) => {
    if (!containerRef.current) return 0;
    const top = containerRef.current.offsetTop;
    // Calculate offset based on section appearing in viewport
    const progress = (val - top + (typeof window !== 'undefined' ? window.innerHeight : 0)) * 0.3;
    return progress - 200; // offset - 200
  });

  const xLeft = useTransform(scrollY, (val) => {
    if (!containerRef.current) return 0;
    const top = containerRef.current.offsetTop;
    const progress = (val - top + (typeof window !== 'undefined' ? window.innerHeight : 0)) * 0.3;
    return -(progress - 200); // -(offset - 200)
  });

  return (
    <section ref={containerRef} className="relative z-10 pt-24 sm:pt-32 md:pt-40 pb-10 bg-[#0C0C0C]/40 backdrop-blur-2xl overflow-hidden flex flex-col gap-3 border-t border-white/5">
      {/* Row 1 - Moves Right */}
      <motion.div 
        style={{ x: xRight, willChange: 'transform' }}
        className="flex items-center gap-3 w-max"
      >
        {triple1.map((src, i) => (
          <Image 
            key={`row1-${i}`}
            src={src}
            alt=""
            width={420}
            height={270}
            className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
            unoptimized={true}
          />
        ))}
      </motion.div>

      {/* Row 2 - Moves Left */}
      <motion.div 
        style={{ x: xLeft, willChange: 'transform' }}
        className="flex items-center gap-3 w-max"
      >
        {triple2.map((src, i) => (
          <Image 
            key={`row2-${i}`}
            src={src}
            alt=""
            width={420}
            height={270}
            className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
            unoptimized={true}
          />
        ))}
      </motion.div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const brands = [
  "L'ORÉAL", "NIKE", "VOGUE", "SAMSUNG", "PORSCHE", "SONY", 
  "RED BULL", "NETFLIX", "SPOTIFY", "ADIDAS"
];

export default function Clients() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Continuous Marquee using GSAP
    const marquees = gsap.utils.toArray(".marquee-track");
    
    marquees.forEach((track, i) => {
      const direction = i % 2 === 0 ? -1 : 1;
      
      gsap.to(track, {
        xPercent: direction * -50,
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-[#fafafa] flex flex-col justify-center border-t border-black/5 min-h-[30vh]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#fafafa] via-transparent to-[#fafafa] z-10 pointer-events-none"></div>
      
      <div className="relative z-0 flex flex-col gap-6">
        
        {/* Track 1 */}
        <div className="overflow-hidden flex w-[200vw]">
          <div className="marquee-track flex whitespace-nowrap font-black uppercase text-5xl md:text-7xl text-black/5 tracking-tighter leading-none">
            <span className="px-8">{brands.join(" — ")} — </span>
            <span className="px-8">{brands.join(" — ")} — </span>
            <span className="px-8">{brands.join(" — ")} — </span>
            <span className="px-8">{brands.join(" — ")} — </span>
          </div>
        </div>

        {/* Track 2 */}
        <div className="overflow-hidden flex w-[200vw]">
          <div className="marquee-track flex whitespace-nowrap font-black uppercase text-5xl md:text-7xl text-[#9f7aea]/10 tracking-tighter leading-none">
            <span className="px-8">TRUSTED BY INDUSTRY LEADERS — </span>
            <span className="px-8">TRUSTED BY INDUSTRY LEADERS — </span>
            <span className="px-8">TRUSTED BY INDUSTRY LEADERS — </span>
            <span className="px-8">TRUSTED BY INDUSTRY LEADERS — </span>
          </div>
        </div>

      </div>
    </section>
  );
}

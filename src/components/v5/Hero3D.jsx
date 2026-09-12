"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navigation from "./Navigation";
import Carousel3D from "./Carousel3D";
import { campaigns } from "@/data/campaigns";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Hero3D() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const carouselRef = useRef(null);
  
  const carouselItems = campaigns.flatMap(c => 
    c.reels.map(r => ({
      id: `${c.brand}-${r.link}`,
      brand: c.brand,
      title: "Visual Campaign",
      image: r.image,
      link: r.link
    }))
  ).slice(0, 10);

  useGSAP(() => {
    // Parallax the text down slightly and fade out
    gsap.to(textRef.current, {
      y: 150,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Move the 3D carousel up slightly on scroll
    gsap.to(carouselRef.current, {
      y: -150,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden flex flex-col">
      
      <Navigation />

      {/* Full Screen 3D Concave Marquee (Behind Text) */}
      <div ref={carouselRef} className="absolute inset-0">
        <Carousel3D items={carouselItems} />
      </div>

      {/* Ambient glowing overlays to blend the edges into darkness */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-black/60 blur-[60px] rounded-full pointer-events-none z-10"></div>

      {/* Floating Hero Typography in the exact center */}
      <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 shadow-xl pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-[#ff3333] animate-pulse shadow-[0_0_10px_rgba(255,51,51,0.8)]"></span>
          <span className="text-white/90 text-[11px] font-semibold tracking-widest uppercase">
            Creative Digital Studio
          </span>
        </div>
        
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter text-white mb-6 text-center leading-[0.9] drop-shadow-2xl">
          We Shape <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#ff3333]">Digital</span> Culture.
        </h1>
        
        <p className="text-white/60 text-lg md:text-xl font-medium max-w-xl text-center shadow-black drop-shadow-md">
          Scroll-stopping visual strategies and aggressive influencer campaigns designed to dominate algorithms.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-50 animate-bounce pointer-events-none">
        <span className="text-[9px] uppercase tracking-widest text-white mb-2">Scroll</span>
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>

    </section>
  );
}

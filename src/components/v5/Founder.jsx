"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Founder() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Parallax the image up slightly
    gsap.to(".founder-img", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // Fade in text content
    gsap.from(".founder-content", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 px-4 md:px-8 relative z-10 bg-[#fafafa]">
      <div className="max-w-[1400px] w-full mx-auto">
        
        <div className="bg-white rounded-[3rem] border border-[#eaeaea] p-6 md:p-12 lg:p-16 grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
          
          <div className="relative h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden w-full bg-[#f4f4f4]">
            <div className="absolute inset-0 scale-[1.15]">
              <Image
                src="/images/boss.PNG"
                alt="Suruj R Pathak"
                fill
                className="founder-img object-cover opacity-95"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Subtle overlay to integrate with light theme */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#fafafa]/20 via-transparent to-transparent"></div>
          </div>
          
          <div className="flex flex-col justify-center founder-content pr-4 lg:pr-12">
            <div className="mb-8">
              <h2 className="text-[10px] font-bold tracking-widest uppercase text-[#9f7aea] mb-2 block">
                The Vision
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111] tracking-tighter mb-2">Suruj R Pathak</h3>
              <p className="text-sm font-bold text-[#555] uppercase tracking-wider">Founder & Creative Director</p>
            </div>
            
            <p className="text-xl md:text-2xl text-[#111] font-medium leading-relaxed mb-12">
              "We believe that powerful brands aren't just seen—they are <span className="font-bold underline decoration-[#fef08a] decoration-4 underline-offset-4">felt</span>. Our approach to digital marketing strips away the noise to reveal the core truth of every brand we partner with."
            </p>

            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              <div className="relative w-40 h-12 opacity-80 mix-blend-multiply">
                {/* Signature will need to be dark for light bg. Assuming signature.png is black or white, we can invert if needed via CSS or just display */}
                <Image
                  src="/images/signature.png"
                  alt="Signature"
                  fill
                  className="object-contain object-left invert"
                />
              </div>
              
              <div className="flex gap-8 border-l border-black/10 pl-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold text-[#111]">50+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#555]">Brands</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold text-[#111]">10M+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#555]">Reach</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

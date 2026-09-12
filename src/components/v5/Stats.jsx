"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stats = [
  { value: 50, suffix: "+", label: "Global Brands" },
  { value: 10, suffix: "M+", label: "Monthly Reach" },
  { value: 3, suffix: "X", label: "Avg. ROI Increase" },
  { value: 98, suffix: "%", label: "Client Retention" }
];

export default function Stats() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Parallax background
    gsap.to(".stats-bg", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // Animate numbers
    const counters = gsap.utils.toArray(".stat-number");
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute("data-target"));
      
      gsap.fromTo(counter, 
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: "power3.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
          onUpdate: function() {
            counter.innerText = Math.ceil(this.targets()[0].innerText);
          }
        }
      );
    });

    // Fade in elements
    gsap.from(".stat-item", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-32 relative overflow-hidden flex items-center justify-center min-h-[50vh] z-10 bg-white">
      
      <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 relative z-20">
        
        <div className="bg-[#fafafa] rounded-[3rem] border border-[#eaeaea] p-12 md:p-24 relative overflow-hidden">
          
          {/* Decorative shapes inside the card */}
          <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-[#fef08a] rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-[#9f7aea] rounded-full opacity-20 blur-3xl"></div>

          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#111] tracking-tighter mb-4">
              Numbers Don't Lie.
            </h2>
            <p className="text-[#555] text-lg md:text-xl font-medium max-w-2xl mx-auto">
              We operate at scale. Our campaigns are designed to generate undeniable, measurable impact for every brand we touch.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item flex flex-col items-center justify-center text-center p-6 border-l border-black/5 first:border-l-0 lg:first:border-l-0">
                <div className="flex items-baseline justify-center mb-2 text-[#9f7aea]">
                  <span className="stat-number text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter" data-target={stat.value}>
                    0
                  </span>
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold">{stat.suffix}</span>
                </div>
                <p className="text-sm md:text-base text-[#111] font-bold uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  {
    id: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your brand architecture, target demographics, and market position to craft a highly aggressive digital strategy."
  },
  {
    id: "02",
    title: "Content Production",
    description: "Our creative team shoots and edits high-retention, scroll-stopping visual assets designed specifically to manipulate platform algorithms."
  },
  {
    id: "03",
    title: "Influencer Deployment",
    description: "We map your brand to our exclusive network of creators, ensuring authentic delivery to millions of targeted consumers."
  },
  {
    id: "04",
    title: "Scale & Dominate",
    description: "Data-driven iteration. We analyze performance metrics in real-time, doubling down on winning creatives to maximize ROI and reach."
  }
];

export default function Process() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Pin the left side title while scrolling through the right side steps
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 20%",
      end: "bottom 80%",
      pin: ".process-sticky",
    });

    // Fade in the steps sequentially as they come into view
    const stepElements = gsap.utils.toArray(".process-step");
    stepElements.forEach((step, i) => {
      gsap.from(step, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse" 
        }
      });
      
      // Animate the connecting line
      if (i !== stepElements.length - 1) {
        gsap.fromTo(step.querySelector('.process-line'), 
          { scaleY: 0 },
          { 
            scaleY: 1, 
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: {
              trigger: step,
              start: "top 60%",
              end: "bottom 60%",
              scrub: true
            }
          }
        );
      }
    });

  }, { scope: containerRef });

  return (
    <section id="process" ref={containerRef} className="py-24 md:py-32 px-4 md:px-8 relative z-10 bg-[#fafafa]">
      <div className="max-w-[1400px] w-full mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Side: Sticky Header */}
        <div className="lg:col-span-5 relative">
          <div className="process-sticky">
            <h2 className="text-[10px] font-bold tracking-widest uppercase text-[#9f7aea] mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#9f7aea]"></span>
              Methodology
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#111] leading-[1.1] mb-6">
              How We<br />
              <span className="text-[#555]">Operate.</span>
            </h3>
            <p className="text-lg text-[#555] max-w-md font-medium">
              A systematic, brutalist approach to modern marketing. We don't guess—we engineer attention.
            </p>
          </div>
        </div>

        {/* Right Side: Scrolling Steps */}
        <div className="lg:col-span-7 flex flex-col gap-12 relative pt-[20vh] lg:pt-0">
          {steps.map((step, index) => (
            <div key={step.id} className="process-step relative pl-12 md:pl-20 group">
              
              {/* Number Node */}
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-black/10 bg-white flex items-center justify-center z-10 shadow-sm transition-all duration-500 group-hover:bg-[#9f7aea] group-hover:border-[#9f7aea]">
                <span className="text-sm md:text-lg font-bold text-[#111] group-hover:text-white transition-colors">{step.id}</span>
              </div>

              {/* Connecting Line (except last) */}
              {index !== steps.length - 1 && (
                <div className="process-line absolute left-6 md:left-8 top-12 md:top-16 bottom-[-3rem] w-[1px] bg-black/10 z-0"></div>
              )}

              {/* Content */}
              <div className="bg-white border border-[#eaeaea] p-8 md:p-10 rounded-[2rem] hover:shadow-xl transition-all duration-300">
                <h4 className="text-2xl md:text-3xl font-bold text-[#111] mb-4 group-hover:text-[#9f7aea] transition-colors tracking-tight">
                  {step.title}
                </h4>
                <p className="text-base md:text-lg text-[#555] leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

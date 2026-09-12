"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);

  const services = [
    {
      id: "01",
      title: "Influencer Marketing",
      description: "Data-driven brand campaigns via smart influencer collaborations perfectly matched to your demographic.",
      color: "bg-[#fef08a]"
    },
    {
      id: "02",
      title: "Video Editing",
      description: "Crisp arrays of high-quality reels, ads, and promos optimized for algorithms and maximum audience retention.",
      color: "bg-[#9f7aea]"
    },
    {
      id: "03",
      title: "Ad Designing",
      description: "Creative visual assets scaled perfectly and converting cleanly on all platforms and social networks.",
      color: "bg-[#111]"
    },
    {
      id: "04",
      title: "Personal Branding",
      description: "End-to-end social media growth, consistent content strategies, and engaging your native audience.",
      color: "bg-[#e5e5e5]"
    },
  ];

  useGSAP(() => {
    // Fade in and move up the header
    gsap.from(".services-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Stagger in the service cards
    gsap.from(".service-card", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  return (
    <section id="services" ref={containerRef} className="py-24 md:py-32 px-4 md:px-8 relative z-10 bg-[#fafafa]">
      <div className="max-w-[1400px] w-full mx-auto">
        
        <div className="mb-16 services-header flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-10">
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[#111] mb-4">
              Digital<br/>Capabilities.
            </h2>
          </div>
          <p className="text-[#555] text-lg max-w-sm font-medium">
            An all-in-one digital suite focused on real results, stunning visuals, and incredibly engaging content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card bg-white border border-[#eaeaea] p-8 rounded-[2rem] flex flex-col justify-between min-h-[320px] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-between items-start">
                <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center text-sm font-bold ${service.color === 'bg-[#111]' ? 'text-white' : 'text-[#111]'}`}>
                  {service.id}
                </div>
                <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-[#111] mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
import { campaigns } from "@/data/campaigns";

export default function CampaignsGrid() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Fade in the header
    gsap.from(".campaigns-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Stagger the campaign cards
    gsap.from(".campaign-card", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".campaigns-grid",
        start: "top 85%",
      }
    });

    // Suble image parallax inside the cards
    const cards = gsap.utils.toArray(".campaign-card");
    cards.forEach(card => {
      const img = card.querySelector("img");
      if (img) {
        gsap.to(img, {
          yPercent: 15, // Move image down slightly as we scroll
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      }
    });
  }, { scope: containerRef });

  return (
    <section id="work" ref={containerRef} className="py-24 md:py-32 px-4 md:px-8 relative z-10 bg-[#fafafa]">
      
      <div className="max-w-[1400px] w-full mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 campaigns-header border-b border-black/10 pb-10">
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[#111] mb-4">
              Selected<br/>Work.
            </h2>
            <p className="text-[#555] text-lg max-w-sm font-medium">
              Explore our latest campaigns, visual identities, and influencer marketing successes.
            </p>
          </div>
          <a href="#contact" className="text-[11px] font-bold text-[#111] uppercase tracking-widest hover:text-[#9f7aea] transition-colors flex items-center gap-2 group">
            <span className="border-b border-[#111] group-hover:border-[#9f7aea] pb-1">View All Projects</span>
            <span className="text-xl leading-none">↗</span>
          </a>
        </div>

        {/* Stable Masonry-style Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 campaigns-grid">
          {campaigns.map((campaign, index) => {
            const mainReel = campaign.reels[0];
            
            // Stable spanning logic
            const isWide = index === 0 || index === 5;
            const spanClass = isWide ? "md:col-span-2 lg:col-span-2" : "col-span-1";

            return (
              <a 
                href={mainReel.link}
                target="_blank"
                rel="noopener noreferrer"
                key={campaign.brand} 
                className={`campaign-card group relative h-[450px] bg-white rounded-[2rem] border border-[#eaeaea] overflow-hidden flex flex-col ${spanClass} hover:shadow-xl transition-all duration-500`}
              >
                {/* Image Area */}
                <div className="relative flex-1 overflow-hidden w-full m-2 rounded-t-[1.5rem] rounded-b-md" style={{ width: 'calc(100% - 16px)' }}>
                  <div className="absolute inset-0 scale-[1.15]">
                    <Image 
                      src={mainReel.image} 
                      alt={`${campaign.brand} Campaign`} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* Content Area (Editorial Style) */}
                <div className="p-6 md:p-8 flex justify-between items-end bg-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#9f7aea] mb-2 block">
                      Visual Campaign
                    </span>
                    <h3 className="text-3xl font-extrabold text-[#111] tracking-tight">
                      {campaign.brand}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#fef08a] flex items-center justify-center transform group-hover:bg-[#111] group-hover:text-white transition-all duration-300 shadow-sm">
                    <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

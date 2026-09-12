"use client";

import Image from "next/image";
import { campaigns } from "@/data/campaigns";
import { AnimateCard, AnimateText } from "./AnimateSection";

export default function Campaigns() {
  return (
    <section id="work" className="relative py-24 px-4 md:px-8">
      
      <div className="glow-orb glow-red w-[600px] h-[600px] top-[40%] right-[-10%] mix-blend-screen"></div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <AnimateText>
            <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Selected <span className="text-gradient-accent">Work</span>
            </h2>
          </AnimateText>
          <AnimateText delay={0.2}>
            <p className="font-sans text-white/50 font-medium max-w-sm">
              Explore our latest campaigns, visual identities, and influencer marketing successes.
            </p>
          </AnimateText>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {campaigns.map((campaign, index) => {
            const mainReel = campaign.reels[0];
            
            // Create interesting spans for the bento grid
            let spanClass = "col-span-1";
            if (index === 0 || index === 5 || index === 8) {
              spanClass = "col-span-1 md:col-span-2 lg:col-span-2"; // Wide cards
            }

            return (
              <AnimateCard 
                key={campaign.brand} 
                delay={0.1 * (index % 3)}
                className={`bento-card group relative h-[350px] md:h-[450px] overflow-hidden ${spanClass}`}
              >
                {/* Background Image */}
                <Image 
                  src={mainReel.image} 
                  alt={`${campaign.brand} Campaign`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a 
                      href={mainReel.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                  </div>

                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-sans text-[10px] font-bold uppercase tracking-wider mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                      Visual Campaign
                    </div>
                    <h3 className="font-sans text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {campaign.brand}
                    </h3>
                  </div>
                </div>
              </AnimateCard>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

"use client";

import { FadeIn } from "./Reusable";

const services = [
  {
    num: "01",
    title: "Talent Management",
    desc: "Connecting top-tier influencers with industry-leading brands for long-term strategic partnerships."
  },
  {
    num: "02",
    title: "Content Creation",
    desc: "High-quality, viral-ready video and social content tailored for TikTok, Instagram Reels, and YouTube Shorts."
  },
  {
    num: "03",
    title: "Campaign Strategy",
    desc: "Data-driven influencer marketing strategies designed to maximize ROI and elevate brand awareness."
  },
  {
    num: "04",
    title: "Brand Partnerships",
    desc: "Crafting authentic collaborations and sponsorships that communicate a clear and memorable presence."
  },
  {
    num: "05",
    title: "Digital PR",
    desc: "Amplifying your brand's voice across social channels with targeted outreach and community management."
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 -mt-10 sm:-mt-12 md:-mt-14 shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
      <FadeIn y={40} className="mb-16 sm:mb-20 md:mb-28">
        <h2 className="font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none text-[#0C0C0C]">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, i) => (
          <FadeIn 
            key={service.num} 
            delay={i * 0.1}
            y={30}
            className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-0"
          >
            <div className="w-full md:w-[35%] lg:w-[30%] shrink-0">
              <span className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none">
                {service.num}
              </span>
            </div>
            
            <div className="flex flex-col gap-2 md:gap-4 flex-1">
              <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] leading-tight text-[#0C0C0C]">
                {service.title}
              </h3>
              <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60 text-[#0C0C0C]">
                {service.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

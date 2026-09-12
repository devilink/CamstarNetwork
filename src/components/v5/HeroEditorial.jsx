"use client";

import Navigation from "./Navigation";
import Image from "next/image";

export default function HeroEditorial() {
  return (
    <section className="relative w-full min-h-screen flex flex-col bg-[#fafafa] overflow-hidden pt-24 pb-20">
      <Navigation />

      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 max-w-[1400px] mx-auto w-full mt-10 md:mt-20">
        
        {/* Editorial Headline */}
        <div className="relative z-10 text-center w-full">
          
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 lg:gap-8 mb-2 md:mb-6">
            <h1 className="text-[14vw] md:text-[8rem] lg:text-[10rem] font-extrabold leading-none tracking-tight text-[#111]">
              We Shape
            </h1>
            <div className="w-[25vw] md:w-[14rem] lg:w-[18rem] h-[12vw] md:h-[6rem] lg:h-[8rem] rounded-full bg-[#9f7aea] overflow-hidden relative flex items-center justify-center shadow-lg transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
              <span className="text-white font-bold text-2xl animate-pulse">✦</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 lg:gap-8 mb-2 md:mb-6">
             <div className="w-[20vw] md:w-[10rem] lg:w-[14rem] h-[12vw] md:h-[6rem] lg:h-[8rem] rounded-full bg-[#fef08a] overflow-hidden relative flex items-center justify-center shadow-lg transform rotate-2 hover:-rotate-0 transition-transform cursor-pointer">
               <div className="w-1/2 h-1/2 bg-[#111] rounded-full opacity-10"></div>
             </div>
            <h1 className="text-[14vw] md:text-[8rem] lg:text-[10rem] font-extrabold leading-none tracking-tight text-[#111]">
              Digital
            </h1>
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 lg:gap-8">
            <h1 className="text-[14vw] md:text-[8rem] lg:text-[10rem] font-extrabold leading-none tracking-tight text-[#111]">
              Culture.
            </h1>
            <div className="w-[25vw] md:w-[12rem] lg:w-[16rem] h-[12vw] md:h-[6rem] lg:h-[8rem] rounded-full bg-[#111] overflow-hidden relative flex items-center justify-center shadow-lg transform rotate-1 hover:rotate-0 transition-transform cursor-pointer">
               <span className="text-[#fef08a] font-medium text-sm md:text-lg text-center px-4 leading-tight">Digital<br/>Studio</span>
            </div>
          </div>
        </div>

        {/* Supporting text and secondary CTA */}
        <div className="mt-16 md:mt-24 w-full flex flex-col md:flex-row items-center justify-between gap-10 max-w-5xl mx-auto px-4 border-t border-black/10 pt-10">
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#9f7aea] text-white flex items-center justify-center font-bold font-serif italic text-2xl">
              C
            </div>
            <div className="text-left">
              <p className="font-bold text-[#111] text-sm">Design Principles</p>
              <p className="text-xs text-[#555] max-w-[200px]">Scroll-stopping visual strategies followed to your unique style.</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex flex-col text-center md:text-right">
              <span className="text-3xl font-extrabold text-[#111] bg-[#fef08a] px-2 leading-none inline-block transform -skew-x-6">$2.5k</span>
              <span className="text-[10px] font-bold text-[#555] uppercase tracking-widest mt-2">Starting At</span>
            </div>
            <div className="text-[#9f7aea] opacity-50 text-xl">✦</div>
            <a href="#contact" className="w-20 h-20 bg-[#111] text-white rounded-full flex items-center justify-center hover:bg-[#9f7aea] hover:scale-105 transition-all shadow-xl group">
              <span className="text-[10px] font-bold uppercase tracking-widest text-center leading-tight group-hover:hidden">Get<br/>Started<br/>↗</span>
              <svg className="w-6 h-6 hidden group-hover:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

          <div className="hidden md:flex flex-col text-right max-w-[200px]">
            <p className="text-[10px] font-bold text-[#111] uppercase tracking-widest mb-1">• IDENTITY</p>
            <p className="text-xs text-[#555]">Customize your setup to best fit your team. Evaluate ways to manage your project and tools.</p>
          </div>

        </div>

      </div>

      {/* Floating abstract decorative elements */}
      <div className="absolute top-1/4 left-[5%] w-3 h-3 bg-[#111] rounded-full opacity-20"></div>
      <div className="absolute top-[15%] right-[10%] w-6 h-6 rounded-full border border-[#111] opacity-20"></div>
      <div className="absolute bottom-[20%] right-[5%] w-4 h-4 bg-[#9f7aea] rounded-full opacity-50"></div>
      <div className="absolute top-1/3 right-[15%] text-2xl text-[#111] opacity-30">✦</div>
      <div className="absolute bottom-[30%] left-[10%] text-xl text-[#111] opacity-20">★</div>

    </section>
  );
}

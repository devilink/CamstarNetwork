"use client";

import { FadeIn, Magnet, AnimatedText, ContactButton } from "./Reusable";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-24 bg-[#0C0C0C] overflow-hidden z-0">
      {/* Decorative 3D Elements (kept for background aesthetics) */}
      
      {/* Top Left: Moon Icon */}
      <FadeIn delay={0.1} duration={0.9} x={-80} y={0} className="absolute top-[10%] left-[1%] sm:left-[2%] md:left-[4%] w-[80px] sm:w-[120px] md:w-[160px] pointer-events-none opacity-30">
        <Image src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="" width={400} height={400} className="w-full h-auto object-contain" />
      </FadeIn>

      {/* Bottom Right: 3D Group */}
      <FadeIn delay={0.3} duration={0.9} x={80} y={0} className="absolute bottom-[10%] right-[3%] sm:right-[6%] md:right-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none opacity-30">
        <Image src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="" width={400} height={400} className="w-full h-auto object-contain" />
      </FadeIn>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text */}
          <div className="flex flex-col items-start text-left">
            <FadeIn delay={0.1} y={20}>
              <div className="inline-block px-4 py-1.5 bg-white/10 text-[#D7E2EA] text-sm font-bold tracking-widest uppercase rounded-full mb-6 border border-white/20 backdrop-blur-sm">
                About Us
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} y={20}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1] mb-8 uppercase">
                We build <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-orange-400">strong brands.</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.3} y={20} className="mb-10">
              <div className="text-[#D7E2EA] text-lg md:text-xl leading-relaxed space-y-6 font-medium max-w-md">
                <p>We are Camstar Network, a forward-thinking creative and influencer agency. We specialize in talent management, digital branding, and strategic brand partnerships.</p>
                <p>Our goal is simple: create engaging content, build a commanding brand presence, and deliver real results through incredibly smart, wildly creative strategies.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} y={20}>
              <Magnet strength={40}>
                <ContactButton />
              </Magnet>
            </FadeIn>
          </div>

          {/* Right Column - Image */}
          <FadeIn delay={0.3} y={30} className="w-full">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(220,38,38,0.15)] group border border-white/10">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
              <Image 
                src="/images/about_photo.PNG" 
                alt="Creative Agency Studio" 
                fill
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

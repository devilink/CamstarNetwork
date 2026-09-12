import Image from "next/image";
import { AnimateCard } from "./AnimateSection";

export default function Founder() {
  return (
    <section className="relative py-24 px-4 md:px-8">
      <div className="max-w-[1400px] w-full mx-auto">
        
        <div className="grid lg:grid-cols-12 gap-4 md:gap-6">
          
          {/* Profile Card */}
          <AnimateCard className="bento-card lg:col-span-5 relative h-[500px] md:h-[600px] overflow-hidden group">
            <Image
              src="/images/boss.PNG"
              alt="Suruj R Pathak"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-sans text-3xl font-bold text-white mb-1">Suruj R Pathak</h3>
              <p className="font-sans text-sm font-medium text-white/50">Founder & Creative Director</p>
            </div>
          </AnimateCard>
          
          {/* Quote & Signature Card */}
          <AnimateCard delay={0.2} className="bento-card lg:col-span-7 p-8 md:p-16 flex flex-col justify-center relative bg-gradient-to-br from-white/5 to-white/0">
            <div className="absolute top-8 left-8 text-6xl text-white/10 font-serif">"</div>
            
            <div className="relative z-10">
              <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40 mb-8 font-bold">
                The Vision
              </h2>
              
              <p className="font-sans text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-tight mb-12">
                We believe that powerful brands aren't just seen—they are <span className="text-gradient-accent">felt</span>. Our approach to digital marketing strips away the noise to reveal the core truth of every brand we partner with.
              </p>

              <div className="relative w-48 h-16 opacity-70 invert mix-blend-screen filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                <Image
                  src="/images/signature.png"
                  alt="Signature"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
          </AnimateCard>

        </div>
      </div>
    </section>
  );
}

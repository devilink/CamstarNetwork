import Image from "next/image";
import AnimateSection, { AnimateText } from "./AnimateSection";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden">
      
      {/* Background Orbs */}
      <div className="glow-orb glow-red w-[400px] h-[400px] top-[10%] left-[20%] mix-blend-screen"></div>
      <div className="glow-orb glow-orange w-[500px] h-[500px] bottom-[10%] right-[10%] mix-blend-screen opacity-30"></div>
      
      <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <AnimateSection delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3333] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff3333]"></span>
            </span>
            <span className="text-white/80 font-sans text-xs font-semibold tracking-wide uppercase">
              Creative Agency
            </span>
          </div>
        </AnimateSection>

        <AnimateText delay={0.2}>
          <h1 className="font-sans text-6xl md:text-8xl lg:text-[8rem] font-extrabold tracking-tighter leading-[0.9] text-white mb-8">
            We <span className="text-gradient-accent">Shape</span> The <br />
            Digital World.
          </h1>
        </AnimateText>

        <AnimateSection delay={0.4}>
          <p className="font-sans text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
            Helping modern brands grow online with stunning visuals and data-driven engagement strategies.
          </p>
        </AnimateSection>

        <AnimateSection delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a 
              href="#work" 
              className="px-8 py-4 rounded-full bg-white text-black font-sans font-bold text-lg hover:scale-105 transition-transform"
            >
              View Our Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-sans font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </AnimateSection>
      </div>
      
    </section>
  );
}

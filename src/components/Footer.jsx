import Image from "next/image";
import { AnimateCard } from "./AnimateSection";

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-24 pb-8 px-4 md:px-8 overflow-hidden">
      
      {/* Massive Glowing Center Orb */}
      <div className="glow-orb glow-red w-[800px] h-[800px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen opacity-20"></div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        
        {/* Giant CTA Bento Card */}
        <AnimateCard className="bento-card p-12 md:p-24 flex flex-col items-center text-center bg-gradient-to-b from-white/5 to-white/0 mb-8 border border-white/10">
          
          <h2 className="font-sans text-5xl md:text-7xl lg:text-[7rem] font-extrabold tracking-tighter text-white leading-[0.9] mb-12">
            Let's Build <br />
            <span className="text-gradient-accent">Something</span> <br />
            Extraordinary
          </h2>
          
          <a 
            href="https://wa.me/917002107310" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative flex items-center justify-center w-48 h-48 rounded-full bg-white text-black font-sans font-bold text-xl hover:scale-110 transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            Start Project
            
            {/* Spinning text ring effect (simulated with border for now) */}
            <div className="absolute inset-2 border border-black/10 rounded-full scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
          </a>
          
        </AnimateCard>
        
        {/* Minimal Bottom Info Row */}
        <AnimateCard delay={0.2} className="bento-card p-8 flex flex-col md:flex-row justify-between items-center gap-8 bg-transparent border-transparent">
          
          <div className="flex items-center gap-4">
            <div className="relative w-24 h-8 bg-white px-2 py-1 rounded-lg">
              <Image 
                src="/images/logo.jpeg" 
                alt="Camstar" 
                fill 
                className="object-contain" 
              />
            </div>
            <p className="font-sans text-xs text-white/50 font-medium hidden md:block">
              © {new Date().getFullYear()} Camstar Network. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="tel:+917002107310" className="font-sans text-xs font-bold text-white/50 hover:text-white transition-colors">
              +91 70021 07310
            </a>
            <a href="mailto:camstarltd@gmail.com" className="font-sans text-xs font-bold text-white/50 hover:text-white transition-colors">
              camstarltd@gmail.com
            </a>
            <a href="https://camstar.in" target="_blank" rel="noopener noreferrer" className="font-sans text-xs font-bold text-white/50 hover:text-white transition-colors">
              camstar.in
            </a>
            <a href="https://www.instagram.com/camstar.in" target="_blank" rel="noopener noreferrer" className="font-sans text-xs font-bold text-white/50 hover:text-white transition-colors">
              @camstar.in
            </a>
          </div>
          
        </AnimateCard>

      </div>
    </footer>
  );
}

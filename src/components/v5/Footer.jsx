import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-24 md:pt-40 pb-12 px-4 md:px-8 border-t border-black/5 z-10 bg-[#fafafa]">
      
      <div className="max-w-[1400px] w-full mx-auto relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-32">
          <h2 className="text-[10px] font-bold tracking-widest uppercase text-[#9f7aea] mb-6">
            Start A Project
          </h2>
          <h3 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-[#111] leading-[0.9] mb-12">
            Let's Build <br />
            <span className="text-[#555]">Something.</span>
          </h3>
          <a 
            href="https://wa.me/917002107310" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#111] text-white font-bold text-lg hover:bg-[#9f7aea] hover:scale-105 transition-all shadow-xl"
          >
            Start Project
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-black/10">
          
          <div className="flex items-center gap-6">
            {/* Dark logo for light bg */}
            <div className="relative w-24 h-8 bg-black/5 px-2 py-1 rounded">
              <Image src="/images/logo.jpeg" alt="Camstar" fill className="object-contain" />
            </div>
            <p className="text-[11px] font-bold text-[#555] uppercase tracking-widest hidden md:block">
              © {new Date().getFullYear()} Camstar Network.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="tel:+917002107310" className="text-xs font-bold text-[#111] hover:text-[#9f7aea] transition-colors uppercase tracking-widest">
              +91 70021 07310
            </a>
            <a href="mailto:camstarltd@gmail.com" className="text-xs font-bold text-[#111] hover:text-[#9f7aea] transition-colors uppercase tracking-widest">
              camstarltd@gmail.com
            </a>
            <a href="https://camstar.in" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#111] hover:text-[#9f7aea] transition-colors uppercase tracking-widest">
              camstar.in
            </a>
            <a href="https://www.instagram.com/camstar.in" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#111] hover:text-[#9f7aea] transition-colors uppercase tracking-widest">
              @camstar.in
            </a>
          </div>
          
        </div>

      </div>
    </footer>
  );
}

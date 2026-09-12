import Image from "next/image";
import { AnimateCard } from "./AnimateSection";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          
          {/* Main About Card (Large) */}
          <AnimateCard className="bento-card col-span-1 md:col-span-2 lg:col-span-2 p-8 md:p-12 flex flex-col justify-between min-h-[400px] bg-gradient-to-br from-white/5 to-white/0">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#ff3333] to-[#ff6b33] flex items-center justify-center mb-8 shadow-lg shadow-red-500/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h2 className="font-sans text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                We Build <br/><span className="text-gradient">Strong Brands.</span>
              </h2>
            </div>
            <p className="font-sans text-white/60 font-medium leading-relaxed max-w-md">
              We specialize in Influencer Marketing, Social Media Profile Management, Video Editing, and Ad Designing. Our goal is simple: deliver real results through incredibly smart, wildly creative strategies.
            </p>
          </AnimateCard>

          {/* Image Card */}
          <AnimateCard delay={0.1} className="bento-card col-span-1 md:col-span-1 lg:col-span-2 relative min-h-[300px] md:min-h-[400px]">
            <Image
              src="/images/about_photo.PNG"
              alt="Studio Space"
              fill
              className="object-cover opacity-80 mix-blend-lighten"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-white/80">Guwahati HQ</p>
              <p className="font-sans text-sm font-medium text-white/50">Creative Studio</p>
            </div>
          </AnimateCard>

          {/* Stat Card 1 */}
          <AnimateCard delay={0.2} className="bento-card col-span-1 p-8 flex flex-col justify-center items-center text-center bg-gradient-to-t from-[#ff3333]/10 to-transparent">
            <h3 className="font-sans text-5xl md:text-6xl font-extrabold text-white mb-2">50+</h3>
            <p className="font-sans text-sm font-bold text-white/50 uppercase tracking-widest">Brand Partners</p>
          </AnimateCard>

          {/* Stat Card 2 */}
          <AnimateCard delay={0.3} className="bento-card col-span-1 md:col-span-2 lg:col-span-1 p-8 flex flex-col justify-center items-center text-center">
            <h3 className="font-sans text-5xl md:text-6xl font-extrabold text-white mb-2">10M+</h3>
            <p className="font-sans text-sm font-bold text-white/50 uppercase tracking-widest">Reach Generated</p>
          </AnimateCard>

          {/* Mini CTA Card */}
          <AnimateCard delay={0.4} className="bento-card col-span-1 lg:col-span-2 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-white/5 to-transparent">
            <div>
              <h3 className="font-sans text-2xl font-bold text-white mb-1">Ready to scale?</h3>
              <p className="font-sans text-sm font-medium text-white/50">Let's discuss your next big move.</p>
            </div>
            <a href="#contact" className="px-6 py-3 rounded-full bg-white text-black font-sans font-bold hover:scale-105 transition-transform whitespace-nowrap">
              Start Project
            </a>
          </AnimateCard>

        </div>
      </div>
    </section>
  );
}

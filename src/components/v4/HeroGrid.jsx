import Navigation from "./Navigation";
import ImageStack from "./ImageStack";
import Statistics from "./Statistics";
import ContactBar from "./ContactBar";

export default function HeroGrid() {
  return (
    <section className="min-h-screen bg-[#101010] flex flex-col justify-between border-x border-grid max-w-[1800px] mx-auto relative">
      
      {/* Background Vertical Grid Lines (simulated with absolute divs) */}
      <div className="absolute inset-y-0 left-1/3 w-[1px] bg-grid hidden lg:block pointer-events-none"></div>
      <div className="absolute inset-y-0 left-2/3 w-[1px] bg-grid hidden lg:block pointer-events-none"></div>

      <Navigation />

      <div className="flex-1 grid lg:grid-cols-2">
        
        {/* Left Column: Massive Typography */}
        <div className="border-r border-grid p-6 md:p-12 lg:p-20 flex flex-col justify-center">
          
          <div className="mb-8">
            <span className="inline-block border border-grid px-3 py-1 font-sans text-[9px] tracking-widest uppercase text-white/60">
              Creative Digital Agency
            </span>
          </div>

          <h1 className="font-display text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-[0.85] tracking-tighter uppercase text-[#F5F5F5] -ml-2 mb-12">
            Digital<br/>Experiences
          </h1>

          <p className="font-sans text-sm md:text-base text-white/60 font-light max-w-sm uppercase tracking-wide leading-relaxed">
            Helping modern brands grow online with stunning visuals and aggressive engagement strategies.
          </p>

        </div>

        {/* Right Column: Images & Stats */}
        <div className="p-6 md:p-12 lg:p-20 flex flex-col justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent">
          
          <p className="font-sans text-xs tracking-widest uppercase text-white/40 mb-8 border-l border-grid pl-4 hidden md:block">
            Visual Portfolio & Case Studies
          </p>

          <ImageStack />
          <Statistics />

        </div>

      </div>

      <ContactBar />
      
    </section>
  );
}

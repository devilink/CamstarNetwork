export default function Founder() {
  return (
    <section id="founder" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="relative bg-brand-dark p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                <div className="hero-element relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-red-900/20 group">
                    <img src="/assets/boss.PNG" alt="Suruj R Pathak" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out object-top" />
                </div>
                
                <div className="hero-element flex flex-col items-start text-left">
                    <div className="inline-block px-4 py-1.5 text-zinc-400 text-lg font-bold mb-4 underline underline-offset-4 decoration-2 decoration-brand-primary">পৰিচালক</div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-brand-primary leading-[1.1] mb-8">Suruj R Pathak</h2>
                    
                    <div className="text-zinc-300 text-lg leading-relaxed space-y-6 font-medium max-w-md">
                        <p>We don’t just connect influencers with brands—We build creator ecosystems.</p>
                        <p>From campaign strategy and viral scriptwriting to authentic brand alignment, We craft stories people actually want to watch. Our specialty?</p>
                        <p>Scouting raw, hidden talent from the remotest corners of Northeast India and helping them become trusted brand voices before the rest of the internet catches on.</p>
                        <p>For us, it’s simple: build the right creators, tell authentic stories, and drive real growth.</p>
                    </div>
                    
                    {/* Signature overlapping text */}
                    <div className="relative w-full mt-2">
                        <img src="/assets/signature.png" alt="Signature" className="h-32 md:h-48 object-contain -mt-15 md:-mt-18 -ml-4" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

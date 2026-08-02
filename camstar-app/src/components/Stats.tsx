export default function Stats() {
  return (
    <section className="border-b border-zinc-200 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-12">
            
            {/* Left: Supported By (12 Logos Grid) */}
            <div className="w-full xl:w-3/5">
                <span className="text-lg font-bold text-brand-dark mb-6 block">Supported By :</span>
                {/* Grid for 12 logos */}
                <div className="grid grid-cols-4 md:grid-cols-6 gap-y-8 gap-x-6 items-center">
                    <img src="/assets/Logos/Oppo-Logo.wine.svg" alt="Client 1" className="w-full h-16 md:h-20 object-contain" />
                    <img src="/assets/Logos/Realme_logo.svg" alt="Client 2" className="w-full h-8 md:h-10 object-contain" />
                    <img src="/assets/Logos/LG-Logo.webp" alt="Client 3" className="w-full h-8 md:h-10 object-contain" />
                    <img src="/assets/Logos/Bingo.png" alt="Client 4" className="w-full h-8 md:h-10 object-contain" />
                    <img src="/assets/Logos/ajjas_logo.png" alt="Client 5" className="w-full h-8 md:h-10 object-contain" />
                    <img src="/assets/Logos/Ather.png" alt="Client 6" className="w-full h-8 md:h-10 object-contain" />
                    <img src="/assets/Logos/Biskfarm.jpg" alt="Client 7" className="w-full h-16 md:h-20 scale-110 object-contain" />
                    <img src="/assets/Logos/Kohira.png" alt="Client 8" className="w-full h-8 md:h-10 object-contain" />
                    <img src="/assets/Logos/Nothing.png" alt="Client 9" className="w-full h-16 md:h-20 object-contain" />
                    <img src="/assets/Logos/Ripuraj.webp" alt="Client 10" className="w-full h-8 md:h-10 object-contain" />
                    <img src="/assets/Logos/sunfeast.png" alt="Client 11" className="w-full h-16 md:h-20 scale-110 object-contain" />
                    <img src="/assets/Logos/TVS Logo.png" alt="Client 12" className="w-full h-16 md:h-20 scale-125 object-contain" />
                </div>
            </div>
            
            {/* Right: Stats */}
            <div className="w-full xl:w-2/5 flex flex-wrap items-center justify-start xl:justify-end gap-8 md:gap-12 text-center">
                <div>
                    <h3 className="text-3xl lg:text-4xl font-black text-brand-dark">500+</h3>
                    <p className="text-sm font-semibold text-zinc-500 mt-1">Happy Clients</p>
                </div>
                <div>
                    <h3 className="text-3xl lg:text-4xl font-black text-brand-dark">125+</h3>
                    <p className="text-sm font-semibold text-zinc-500 mt-1">Projects Done</p>
                </div>
                <div>
                    <h3 className="text-3xl lg:text-4xl font-black text-brand-dark">10Y</h3>
                    <p className="text-sm font-semibold text-zinc-500 mt-1">Experience</p>
                </div>
            </div>
        </div>
    </section>
  );
}

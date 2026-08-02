export default function Services() {
  return (
    <section id="services" className="py-24 bg-background border-t border-zinc-100">
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-4xl font-black uppercase mb-2">EXPLORE SERVICES</h2>
                    <p className="font-bold text-zinc-500">4+ Core Offerings</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gsap-section">
                {/* Service 1 */}
                <div className="bg-[#0f414a] rounded-3xl p-8 aspect-square flex flex-col justify-between group hover:bg-brand-dark transition-colors duration-300">
                    <div className="w-12 h-12 bg-[#d8ba98] rounded-full flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                        <svg className="w-6 h-6 text-brand-dark group-hover:text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                    </div>
                    <div>
                        <h3 className="text-2xl font-black uppercase text-[#d8ba98] group-hover:text-brand-light transition-colors">Influencer<br />Marketing</h3>
                        <p className="text-sm text-[#d8ba98] mt-2 group-hover:text-zinc-400">Smart collaborations matched to your demographic.</p>
                    </div>
                </div>
                
                {/* Service 2 */}
                <div className="bg-brand-primary rounded-3xl p-8 aspect-square flex flex-col justify-between text-brand-light">
                    <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-brand-light uppercase">Video<br />Editing</h3>
                        <p className="text-sm text-red-200 mt-2">Crisp reels and promos optimized for algorithms.</p>
                    </div>
                </div>

                {/* Service 3 */}
                <div className="bg-brand-dark rounded-3xl p-8 aspect-square flex flex-col justify-between text-brand-light group hover:bg-brand-primary transition-colors duration-300">
                    <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                        <h3 className="text-2xl font-black uppercase">Ad<br />Designing</h3>
                        <p className="text-sm text-zinc-400 group-hover:text-red-200 mt-2 transition-colors">Creative visual assets scaled perfectly for all platforms.</p>
                    </div>
                </div>

                {/* Service 4 */}
                <div className="bg-[#D8BA98] rounded-3xl p-8 aspect-square flex flex-col justify-between group hover:bg-brand-dark transition-colors duration-300">
                    <div className="w-12 h-12 bg-[#0f414a] rounded-full flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                        <svg className="w-6 h-6 text-[#d8ba98] group-hover:text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-[#0f414a] uppercase group-hover:text-brand-light transition-colors">Personal<br />Branding</h3>
                        <p className="text-sm text-[#0f414a] mt-2 group-hover:text-zinc-400 transition-colors">Consistent content strategies and native audience growth.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

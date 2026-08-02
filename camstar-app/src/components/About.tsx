export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="relative bg-[#7f011f] border border-zinc-200/60 p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-xl shadow-zinc-200/40 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2">
            </div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-50 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2">
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                <div className="hero-element flex flex-col items-start text-left">
                    <div className="inline-block px-4 py-1.5 bg-[#d8ba98] text-[#0f414a] text-sm font-bold tracking-widest uppercase rounded-full mb-6">
                        About Us</div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-[#d8ba98] leading-[1.1] mb-8">
                        We build <br /><span className="text-[#96c0ce]">strong brands.</span></h2>

                    <div className="text-brand-light text-lg leading-relaxed space-y-6 font-medium max-w-md">
                        <p>We specialize in Influencer Marketing, Social Media Profile Management, Video Editing, and Ad Designing.</p>
                        <p>Our goal is simple: create engaging content, build a commanding brand presence, and deliver real results through incredibly smart, wildly creative strategies.</p>
                    </div>
                </div>

                <div className="hero-element relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-red-900/10 group">
                    <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay">
                    </div>
                    <img src="/assets/about_photo.png" alt="Creative Agency Studio" className="absolute w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
                </div>
            </div>
        </div>
    </section>
  );
}

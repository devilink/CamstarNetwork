import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

new_hero = """    <!-- Hero Section (Maximalist Restored & Fitted) -->
    <section class="relative min-h-[100dvh] lg:h-screen pt-32 lg:pt-[120px] pb-12 overflow-hidden bg-white flex items-center justify-center border-b-[8px] lg:border-b-[12px] border-black">
        <!-- Giant Background Typography / Watermark -->
        <div class="absolute inset-0 flex flex-col justify-center items-center overflow-hidden opacity-5 pointer-events-none select-none mix-blend-multiply mt-16">
            <h1 class="text-[30vw] font-black leading-none text-black whitespace-nowrap -ml-24 tracking-tighter">CAMSTAR</h1>
            <h1 class="text-[30vw] font-black leading-none text-red-600 whitespace-nowrap ml-24 tracking-tighter">NETWORK</h1>
        </div>

        <div class="relative z-10 w-full px-6 flex flex-col items-start xl:px-24">
            <div class="hero-element mb-6 md:mb-8 flex items-center gap-3 border-4 border-black p-2 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <span class="w-4 h-4 bg-red-600 animate-pulse border-2 border-black"></span>
                <span class="text-xs md:text-sm font-black tracking-[0.2em] text-black uppercase pr-2">Digital Marketing Agency</span>
            </div>

            <div class="hero-element relative">
                <h1 class="text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[7.5rem] xl:text-[9rem] font-black tracking-tighter text-black uppercase leading-[0.85] relative z-20">
                    WE CRAFT<br>
                    <span class="text-red-600 relative inline-block group mt-2 md:mt-4 mb-2 md:mb-4">
                        <span class="relative z-10">CREATIVE</span>
                        <span class="absolute -inset-1 md:-inset-3 bg-black -z-10 -skew-x-12 hidden md:block"></span>
                    </span><br>
                    CONTENT.
                </h1>
            </div>

            <p class="hero-element text-sm md:text-lg lg:text-xl text-black max-w-xl mt-6 lg:mt-8 font-black uppercase tracking-widest leading-relaxed border-l-8 border-red-600 pl-4 bg-white py-1">
                Helping brands dominate online with aggressive engagement strategies and stunning visuals.
            </p>

            <div class="hero-element mt-10 md:mt-12 flex flex-col sm:flex-row gap-6 items-start">
                <a href="#about" class="inline-block px-10 py-5 bg-red-600 text-white font-black uppercase tracking-widest text-lg lg:text-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                    Start Project →
                </a>
            </div>
            
            <!-- Floating Decorative Accents -->
            <div class="absolute top-1/4 right-0 md:right-12 xl:right-16 w-24 h-24 lg:w-32 lg:h-32 bg-red-600 rounded-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hidden md:block animate-[bounce_4s_infinite]"></div>
            <div class="absolute bottom-1/4 right-[5%] lg:right-[15%] w-32 h-32 lg:w-48 lg:h-48 bg-white border-8 border-black shadow-[12px_12px_0px_0px_rgba(220,38,38,1)] mix-blend-multiply hidden md:block rotate-12"></div>
        </div>
    </section>"""

content = re.sub(r'    <!-- Hero Section.*?    <!-- About Us Section -->', new_hero + '\n\n    <!-- About Us Section -->', content, flags=re.DOTALL)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)

print("Applied fitted Maximalism Hero Section.")

import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

new_hero = """    <!-- Hero Section (Maximalist) -->
    <section class="relative min-h-screen pt-32 pb-12 overflow-hidden bg-white flex items-center justify-center border-b-[12px] border-black">
        <!-- Giant Background Typography / Watermark -->
        <div class="absolute inset-0 flex flex-col justify-center items-center overflow-hidden opacity-5 pointer-events-none select-none mix-blend-multiply">
            <h1 class="text-[25vw] font-black leading-none text-black whitespace-nowrap -ml-24 tracking-tighter">CAMSTAR</h1>
            <h1 class="text-[25vw] font-black leading-none text-red-600 whitespace-nowrap ml-24 tracking-tighter">NETWORK</h1>
        </div>

        <div class="relative z-10 w-full px-6 flex flex-col items-start xl:px-24">
            <div class="hero-element mb-12 flex items-center gap-4 border-4 border-black p-2 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <span class="w-4 h-4 bg-red-600 animate-pulse border-2 border-black"></span>
                <span class="text-xs md:text-sm font-black tracking-[0.2em] text-black uppercase pr-4">Digital Marketing Agency</span>
            </div>

            <div class="hero-element relative">
                <h1 class="text-6xl md:text-8xl lg:text-[11rem] font-black tracking-tighter text-black uppercase leading-[0.8] relative z-20">
                    WE CRAFT<br>
                    <span class="text-red-600 relative inline-block group mt-2 md:mt-6 mb-2 md:mb-6">
                        <span class="relative z-10">CREATIVE</span>
                        <span class="absolute -inset-4 md:-inset-6 bg-black -z-10 -skew-x-12 hidden md:block"></span>
                    </span><br>
                    CONTENT.
                </h1>
            </div>

            <p class="hero-element text-lg md:text-2xl text-black max-w-2xl mt-12 font-black uppercase tracking-widest leading-relaxed border-l-8 border-red-600 pl-6 bg-white py-2">
                Helping brands dominate online with aggressive engagement strategies and stunning visuals.
            </p>

            <div class="hero-element mt-16">
                <a href="#about" class="inline-block px-12 py-6 bg-red-600 text-white font-black uppercase tracking-widest text-xl lg:text-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                    Start Project →
                </a>
            </div>
            
            <!-- Floating Decorative Accents -->
            <div class="absolute top-1/4 right-10 w-32 h-32 bg-red-600 rounded-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hidden lg:block animate-[bounce_4s_infinite]"></div>
            <div class="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white border-8 border-black shadow-[16px_16px_0px_0px_rgba(220,38,38,1)] mix-blend-multiply hidden lg:block rotate-12"></div>
        </div>
    </section>"""

content = re.sub(r'    <!-- Hero Section -->.*?    <!-- About Us Section -->', new_hero + '\n\n    <!-- About Us Section -->', content, flags=re.DOTALL)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)

print("Applied Maximalist Hero Section.")

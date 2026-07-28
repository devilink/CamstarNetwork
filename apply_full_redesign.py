import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update About Us Section
new_about = """    <!-- About Us Section -->
    <section id="about" class="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div class="relative bg-white border border-zinc-200/60 p-8 md:p-16 lg:p-24 rounded-[3rem] shadow-xl shadow-zinc-200/40 overflow-hidden">
            <div class="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div class="absolute bottom-0 left-0 w-80 h-80 bg-orange-50 rounded-full blur-[80px] -z-10 -translate-x-1/2 translate-y-1/2"></div>
            
            <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                <div class="hero-element">
                    <div class="inline-block px-4 py-1.5 bg-zinc-100 text-zinc-600 text-sm font-bold tracking-widest uppercase rounded-full mb-6">About Us</div>
                    <h2 class="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter text-zinc-900 leading-[1.1]">We build <br><span class="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-orange-400">strong brands.</span></h2>
                </div>
                <div class="hero-element text-zinc-600 text-lg md:text-xl leading-relaxed space-y-6 font-medium">
                    <p>We specialize in Influencer Marketing, Social Media Profile Management, Video Editing, and Ad Designing.</p>
                    <p>Our goal is simple: create engaging content, build a commanding brand presence, and deliver real results through incredibly smart, wildly creative strategies.</p>
                </div>
            </div>
        </div>
    </section>"""
content = re.sub(r'    <!-- About Us Section -->.*?    <!-- Collaborations Image -->', new_about + '\n\n    <!-- Collaborations Image -->', content, flags=re.DOTALL)


# 2. Update What We Do & Why Us (Services) 
new_services = """    <!-- What We Do & Why Us -->
    <section id="services" class="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16 hero-element">
            <h2 class="text-4xl md:text-6xl font-extrabold tracking-tighter text-zinc-900 mb-6">What We Do</h2>
            <p class="text-zinc-500 text-lg md:text-xl">An all-in-one digital suite focused on real results, stunning visuals, and incredibly engaging content strategies.</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6 auto-rows-[250px] hero-element">
            <!-- Card 1 -->
            <div class="md:col-span-2 bg-gradient-to-br from-red-500 to-red-700 rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300">
                <div class="absolute top-0 right-0 p-8 opacity-20 transform group-hover:scale-110 transition-transform duration-700">
                    <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                </div>
                <h3 class="text-3xl font-bold text-white mb-2 relative z-10">Influencer Marketing</h3>
                <p class="text-red-100 relative z-10 max-w-md">Plan and execute highly effective brand campaigns via smart influencer collaborations perfectly matched to your demographic.</p>
            </div>
            
            <!-- Card 2 -->
            <div class="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div class="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-6 border border-zinc-200">
                    <svg class="w-6 h-6 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-zinc-900 mb-2">Video Editing</h3>
                    <p class="text-zinc-500 text-sm">Crisp arrays of high-quality reels, ads, and promos optimized for algorithms.</p>
                </div>
            </div>
            
            <!-- Card 3 -->
            <div class="bg-zinc-900 rounded-3xl p-8 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-white">
                <div class="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
                    <svg class="w-6 h-6 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-white mb-2">Ad Designing</h3>
                    <p class="text-zinc-400 text-sm">Creative visual assets scaled perfectly and converting cleanly on all platforms.</p>
                </div>
            </div>
            
            <!-- Card 4 -->
            <div class="md:col-span-2 bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div class="absolute -right-4 -bottom-4 w-48 h-48 bg-zinc-50 rounded-full border border-zinc-100 group-hover:scale-110 transition-transform duration-700 -z-0"></div>
                <div class="relative z-10 w-full md:w-2/3">
                    <h3 class="text-3xl font-bold text-zinc-900 mb-2">Profile Management</h3>
                    <p class="text-zinc-500">End-to-end social media growth, consistent content strategies, and engaging your native audience day over day.</p>
                </div>
            </div>
        </div>
    </section>"""
content = re.sub(r'    <!-- What We Do & Why Us -->.*?    <!-- Work Showcase Grid -->', new_services + '\n\n    <!-- Work Showcase Grid -->', content, flags=re.DOTALL)


# 3. Update Terms & Capabilities
new_terms = """    <!-- Terms & Capabilities -->
    <section id="terms" class="py-24 px-6 max-w-5xl mx-auto relative z-10 hero-element">
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-extrabold tracking-tighter text-zinc-900">How We Work</h2>
        </div>
        <div class="grid gap-4">
            <div class="bg-white border border-zinc-200 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex gap-6 items-start">
                <div class="hidden sm:flex w-12 h-12 bg-red-50 text-red-600 rounded-full items-center justify-center font-bold text-xl shrink-0">1</div>
                <div>
                    <h3 class="text-xl font-bold text-zinc-900 mb-2">Onboarding & Strategy</h3>
                    <p class="text-zinc-500 leading-relaxed">All projects require a clear, documented briefing. Work begins immediately following a standard 50% advance payment.</p>
                </div>
            </div>
            <div class="bg-white border border-zinc-200 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex gap-6 items-start">
                <div class="hidden sm:flex w-12 h-12 bg-red-50 text-red-600 rounded-full items-center justify-center font-bold text-xl shrink-0">2</div>
                <div>
                    <h3 class="text-xl font-bold text-zinc-900 mb-2">Delivery & Revisions</h3>
                    <p class="text-zinc-500 leading-relaxed">Timelines are deeply respected based on project scope. We offer limited revisions per initial agreement to definitively ensure your vision is realized.</p>
                </div>
            </div>
            <div class="bg-white border border-zinc-200 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex gap-6 items-start">
                <div class="hidden sm:flex w-12 h-12 bg-red-50 text-red-600 rounded-full items-center justify-center font-bold text-xl shrink-0">3</div>
                <div>
                    <h3 class="text-xl font-bold text-zinc-900 mb-2">Final Handover</h3>
                    <p class="text-zinc-500 leading-relaxed">High-resolution final source files and completely integrated live campaigns are deployed following completion of full payment.</p>
                </div>
            </div>
        </div>
    </section>"""
content = re.sub(r'    <!-- Terms & Capabilities -->.*?    <!-- Footer / Contact -->', new_terms + '\n\n    <!-- Footer / Contact -->', content, flags=re.DOTALL)


# 4. Update Footer
new_footer = """    <!-- Footer / Contact -->
    <footer id="contact" class="bg-zinc-950 text-white relative z-10 pt-24 pb-12 overflow-hidden mt-12 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02MCAwaC0xdjYwSDB2LTFoNjB2LTYweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg==')] opacity-30"></div>
        
        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 hero-element">
                <h2 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.05]">Let's build something <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">extraordinary.</span></h2>
                <a href="mailto:camstarltd@gmail.com" class="px-10 py-5 bg-white text-zinc-900 font-bold text-lg md:text-xl rounded-full hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10">Start a Project</a>
            </div>
            
            <div class="grid md:grid-cols-3 gap-12 pt-12 border-t border-zinc-800 hero-element">
                <div>
                    <div class="bg-white inline-block p-3 rounded-xl mb-6">
                        <img src="logo.jpeg" alt="Camstar" class="h-10 object-contain">
                    </div>
                    <p class="text-zinc-400 max-w-xs leading-relaxed">A creative digital agency focused on helping modern brands grow online with stunning visuals.</p>
                </div>
                <div class="flex flex-col space-y-4">
                    <h4 class="font-bold text-white tracking-widest uppercase text-sm mb-4 opacity-50">Connect</h4>
                    <a href="tel:+917002107310" class="text-zinc-300 hover:text-white transition-colors flex items-center gap-3">
                        <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        +91 70021 07310
                    </a>
                    <a href="mailto:camstarltd@gmail.com" class="text-zinc-300 hover:text-white transition-colors flex items-center gap-3">
                        <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        camstarltd@gmail.com
                    </a>
                </div>
                <div class="flex flex-col space-y-4">
                    <h4 class="font-bold text-white tracking-widest uppercase text-sm mb-4 opacity-50">Socials</h4>
                    <a href="https://camstar.in" target="_blank" class="text-zinc-300 hover:text-white transition-colors flex items-center gap-3">
                        <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                        camstar.in
                    </a>
                    <a href="https://instagram.com/camstar.in" target="_blank" class="text-zinc-300 hover:text-white transition-colors flex items-center gap-3">
                        <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        @camstar.in
                    </a>
                </div>
            </div>
            
            <div class="mt-16 text-center border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 hero-element">
                <p class="text-zinc-600 text-sm">© 2026 Camstar Network. All rights reserved.</p>
                <p class="text-zinc-700 font-bold tracking-[0.2em] uppercase text-xs">Transforming Digital</p>
            </div>
        </div>
    </footer>"""
content = re.sub(r'    <!-- Footer / Contact -->.*?    <!-- GSAP Animations -->', new_footer + '\n\n    <!-- GSAP Animations -->', content, flags=re.DOTALL)


with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
print("Applied full comprehensive redesign successfully.")

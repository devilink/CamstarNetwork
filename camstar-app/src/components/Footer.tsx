export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 text-brand-light relative z-10 pt-24 pb-12 overflow-hidden mt-12 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02MCAwaC0xdjYwSDB2LTFoNjB2LTYweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg==')] opacity-30">
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 hero-element">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.05]">
                    Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">extraordinary.</span>
                </h2>
                <a href="https://wa.me/917002107310" target="_blank" rel="noreferrer" className="px-10 py-5 bg-brand-light text-zinc-900 font-bold text-lg md:text-xl rounded-full hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10">
                    Start a Project
                </a>
            </div>

            <div className="grid md:grid-cols-3 gap-12 pt-12 border-t border-zinc-800 hero-element">
                <div>
                    <div className="bg-brand-light inline-block p-3 rounded-xl mb-6">
                        <img src="/logo.jpeg" alt="Camstar" className="h-10 object-contain" />
                    </div>
                    <p className="text-zinc-400 max-w-xs leading-relaxed">
                        A creative digital agency focused on helping modern brands grow online with stunning visuals.
                    </p>
                </div>
                <div className="flex flex-col space-y-4">
                    <h4 className="font-bold text-brand-light tracking-widest uppercase text-sm mb-4 opacity-50">Connect</h4>
                    <a href="tel:+917002107310" className="text-zinc-300 hover:text-brand-light transition-colors flex items-center gap-3">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        +91 70021 07310
                    </a>
                    <a href="mailto:contact@camstarnetwork.com" className="text-zinc-300 hover:text-brand-light transition-colors flex items-center gap-3">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        contact@camstarnetwork.com
                    </a>
                </div>
                <div className="flex flex-col space-y-4">
                    <h4 className="font-bold text-brand-light tracking-widest uppercase text-sm mb-4 opacity-50">Socials</h4>
                    <a href="https://camstarnetwork.com" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-brand-light transition-colors flex items-center gap-3">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                        </svg>
                        camstarnetwork.com
                    </a>
                    <a href="https://www.instagram.com/camstar.network?igsh=MTlmbmg2MzZvcGFyZQ==" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-brand-light transition-colors flex items-center gap-3">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        Instagram Camstar Network
                    </a>
                </div>
            </div>

            <div className="mt-16 text-center border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 hero-element">
                <p className="text-zinc-600 text-sm">© 2026 Camstar Network. All rights reserved.</p>
                <p className="text-zinc-700 font-bold tracking-[0.2em] uppercase text-xs">Transforming Digital</p>
            </div>
        </div>
    </footer>
  );
}

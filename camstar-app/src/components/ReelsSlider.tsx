'use client';

import { useRef, useEffect } from 'react';

export default function ReelsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;
    let isDragging = false;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      isDragging = false;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove('active');
      setTimeout(() => { isDragging = false; }, 0);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      isDragging = true;
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    const links = slider.querySelectorAll('a');
    const handleLinkClick = (e: Event) => {
      if (isDragging) {
        e.preventDefault();
      }
    };
    links.forEach(link => link.addEventListener('click', handleLinkClick));

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
      links.forEach(link => link.removeEventListener('click', handleLinkClick));
    };
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-background border-t border-zinc-100 overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-6 mb-12 flex justify-between items-end">
            <h2 className="text-4xl md:text-5xl font-black uppercase">HIGHLIGHT OF<br />CAMSTAR</h2>
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
        </div>

        <div className="relative w-full pb-10">
            {/* Simulated Drag Cursor UI Element */}
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-20 h-20 bg-black text-white rounded-full flex items-center justify-center font-bold text-xs tracking-widest z-20 pointer-events-none shadow-xl hidden md:flex">
                DRAG ›
            </div>

            {/* Drag Slider container */}
            <div ref={sliderRef} className="drag-slider flex gap-8 overflow-x-auto custom-scrollbar px-6 md:px-12 xl:px-32 pb-8 gsap-section cursor-grab select-none">
                
                {/* Group 1: Oppo */}
                <div className="flex flex-col gap-4 shrink-0">
                    <h4 className="text-xl font-bold uppercase tracking-widest text-zinc-400">Oppo</h4>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/reel/DPD2nNRD92v/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group pointer-events-none">
                            <img src="/assets/reels/oppo_1.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                        <a href="https://www.instagram.com/reel/DPGAyNlj4mc/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group hidden sm:block pointer-events-none">
                            <img src="/assets/reels/oppo_2.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                        <a href="https://www.instagram.com/reel/DPF5Aw5ElmE/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group hidden sm:block pointer-events-none">
                            <img src="/assets/reels/oppo_3.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                    </div>
                </div>

                {/* Group 2: Realme */}
                <div className="flex flex-col gap-4 shrink-0">
                    <h4 className="text-xl font-bold uppercase tracking-widest text-zinc-400">Realme</h4>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/reel/DWs0IKOkzW5/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group pointer-events-none">
                            <img src="/assets/reels/realme_1.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                        <a href="https://www.instagram.com/reel/DWjBJvEiUfC/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group hidden sm:block pointer-events-none">
                            <img src="/assets/reels/realme_2.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                        <a href="https://www.instagram.com/reel/DDtfCcGBrim/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group hidden sm:block pointer-events-none">
                            <img src="/assets/reels/realme_3.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                    </div>
                </div>

                {/* Group 3: Bisk Farm */}
                <div className="flex flex-col gap-4 shrink-0">
                    <h4 className="text-xl font-bold uppercase tracking-widest text-zinc-400">Bisk Farm</h4>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/reel/CqaqL3Vp7G5/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group pointer-events-none">
                            <img src="/assets/reels/biskfarm_1.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                    </div>
                </div>
                
                {/* Group 4: TVS */}
                <div className="flex flex-col gap-4 shrink-0">
                    <h4 className="text-xl font-bold uppercase tracking-widest text-zinc-400">TVS</h4>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/reel/DAajLMKyHck/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group pointer-events-none">
                            <img src="/assets/reels/tvs_1.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                    </div>
                </div>

                {/* Group 5: Kohira */}
                <div className="flex flex-col gap-4 shrink-0">
                    <h4 className="text-xl font-bold uppercase tracking-widest text-zinc-400">Kohira</h4>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/reel/DEAXIxrypLj/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group pointer-events-none">
                            <img src="/assets/reels/kohira_1.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                        <a href="https://www.instagram.com/reel/DHBTuKMzhBZ/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group hidden sm:block pointer-events-none">
                            <img src="/assets/reels/kohira_2.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                        <a href="https://www.instagram.com/reel/DIXY1v_hdxy/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group hidden sm:block pointer-events-none">
                            <img src="/assets/reels/kohira_3.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                    </div>
                </div>
                
                {/* Group 6: Bingo */}
                <div className="flex flex-col gap-4 shrink-0">
                    <h4 className="text-xl font-bold uppercase tracking-widest text-zinc-400">Bingo</h4>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/reel/DM1nj1DSCxG/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group pointer-events-none">
                            <img src="/assets/reels/bingo_1.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                    </div>
                </div>

                {/* Group 7: Nothing */}
                <div className="flex flex-col gap-4 shrink-0">
                    <h4 className="text-xl font-bold uppercase tracking-widest text-zinc-400">Nothing</h4>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/reel/DWIwmjbgegD/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group pointer-events-none">
                            <img src="/assets/reels/nothing_1.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                        <a href="https://www.instagram.com/reel/DWDh8ANiV4j/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group hidden sm:block pointer-events-none">
                            <img src="/assets/reels/nothing_2.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                        <a href="https://www.instagram.com/reel/DWRGumLiX0s/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group hidden sm:block pointer-events-none">
                            <img src="/assets/reels/nothing_3.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                    </div>
                </div>

                {/* Group 8: Ajjas */}
                <div className="flex flex-col gap-4 shrink-0">
                    <h4 className="text-xl font-bold uppercase tracking-widest text-zinc-400">Ajjas</h4>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/reel/DKgzbyFSXjO/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group pointer-events-none">
                            <img src="/assets/reels/ajjas_1.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                    </div>
                </div>

                {/* Group 9: Sunfeast */}
                <div className="flex flex-col gap-4 shrink-0">
                    <h4 className="text-xl font-bold uppercase tracking-widest text-zinc-400">Sunfeast</h4>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/reel/DRUaQ_9D5Ay/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group pointer-events-none">
                            <img src="/assets/reels/sunfeast_1.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                    </div>
                </div>

                {/* Group 10: LG */}
                <div className="flex flex-col gap-4 shrink-0 pr-12">
                    <h4 className="text-xl font-bold uppercase tracking-widest text-zinc-400">LG</h4>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/reel/DP3B82FDwwT/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group pointer-events-none">
                            <img src="/assets/reels/lg_1.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                        <a href="https://www.instagram.com/reel/DIY305lvVSr/" target="_blank" rel="noreferrer" className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group hidden sm:block pointer-events-none">
                            <img src="/assets/reels/lg_2.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-auto" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

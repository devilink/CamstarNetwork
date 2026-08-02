'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.fc-hero-element', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.15,
      delay: 0.1
    });
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative pt-32 pb-16 px-6 md:px-12 bg-zinc-950 text-brand-light flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background texture matching footer */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02MCAwaC0xdjYwSDB2LTFoNjB2LTYweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg==')] opacity-30"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="fc-hero-element text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-[1.05]">
          Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Creator.</span>
        </h1>
        <p className="fc-hero-element text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Explore our available creator network. Discover verified creators based on location, category, audience, and social platforms.
        </p>
      </div>
    </section>
  );
}

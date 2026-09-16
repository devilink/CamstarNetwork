import React from 'react';
import Image from 'next/image';

export default function BankCardsSection() {
  const cardCount = 56;

  return (
    <section className="relative w-full bg-[#000000] py-24 sm:py-32 z-10 overflow-hidden">
      {/* Decorative Background Effects */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80%] md:w-[60%] h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Trusted by <span className="text-gray-400 font-light italic">Industry Leaders</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light">
            We partner with visionary brands to deliver exceptional digital experiences that push the boundaries of technology and creativity.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 sm:gap-6">
          {Array.from({ length: cardCount }).map((_, i) => (
            <div 
              key={i} 
              className="aspect-[1.59] relative rounded-[16px] border border-white/10 bg-gradient-to-b from-[#121212] to-[#0a0a0a] flex items-center justify-center overflow-hidden hover:border-white/30 transition-all duration-500 group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(255,255,255,0.04)]"
            >
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <Image
                src={`/brands/${String(i + 1).padStart(2, '0')}.png`}
                alt={`Partner Brand ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 15vw"
                className="object-contain p-5 sm:p-6 opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

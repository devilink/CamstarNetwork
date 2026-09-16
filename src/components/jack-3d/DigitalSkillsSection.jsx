import React from 'react';
import Image from 'next/image';

const skillLogos = [
  "4943029.png",
  "Adobe_After_Effects_CC_icon.svg.webp",
  "Adobe_Creative_Cloud_rainbow_icon.svg.webp",
  "Adobe_Illustrator_CC_icon.svg.webp",
  "Adobe_Photoshop_CC_icon.svg.webp",
  "Adobe_Premiere_Pro_CC_icon.svg.webp",
  "Adobe_XD_CC_icon.svg.webp",
  "Blender_logo_no_text.svg.webp",
  "WooCommerce-Symbol-1.png",
  "gemini-google-icon-symbol-logo-free-png.webp",
  "google search.png",
  "google-one-logo-png_seeklogo-669383.png",
  "images (3).png",
  "images (4).png",
  "images (5).png",
  "images.png",
  "javascript-logo-png_seeklogo-330541.png",
  "microsoft-office-logo-png_seeklogo-406239.png",
  "next_js_logo_icon_145038.webp",
  "openai-chatgpt-logo-icon-free-png.webp"
];

export default function DigitalSkillsSection() {
  return (
    <section className="relative w-full bg-[#0C0C0C] py-24 sm:py-32 px-4 md:px-8 z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Digital <span className="text-gray-400 font-light italic">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Our comprehensive toolkit for crafting modern digital experiences.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
          {skillLogos.map((filename, i) => (
            <div 
              key={i} 
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 relative rounded-xl sm:rounded-2xl bg-[#151515] border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-2 group shadow-xl"
            >
              <Image
                src={`/digital skill/${filename}`}
                alt={filename.split('.')[0]}
                fill
                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 128px"
                className={`object-contain p-4 md:p-6 drop-shadow-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 ${
                  filename.includes('next_js') ? 'invert brightness-0' : ''
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

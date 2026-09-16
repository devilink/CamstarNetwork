"use client";

import { useEffect, useRef } from "react";

const images = [
  { src: "/images/reels/oppo_1.jpeg", widthClass: "min-w-[280px] md:min-w-[340px]", link: "https://www.instagram.com/reels/" },
  { src: "/images/reels/realme_1.jpeg", widthClass: "min-w-[360px] md:min-w-[460px]", link: "https://www.instagram.com/reels/" },
  { src: "/images/reels/tvs_1.jpeg", widthClass: "min-w-[240px] md:min-w-[300px]", link: "https://www.instagram.com/reels/" },
  { src: "/images/reels/nothing_1.jpeg", widthClass: "min-w-[320px] md:min-w-[400px]", link: "https://www.instagram.com/reels/" },
  { src: "/images/reels/lg_1.jpeg", widthClass: "min-w-[260px] md:min-w-[320px]", link: "https://www.instagram.com/reels/" },
  { src: "/images/reels/kohira_1.jpeg", widthClass: "min-w-[400px] md:min-w-[500px]", link: "https://www.instagram.com/reels/" },
  { src: "/images/reels/biskfarm_1.jpeg", widthClass: "min-w-[280px] md:min-w-[340px]", link: "https://www.instagram.com/reels/" },
  { src: "/images/reels/ather_1.jpeg", widthClass: "min-w-[340px] md:min-w-[420px]", link: "https://www.instagram.com/reels/" },
  { src: "/images/reels/ajjas_1.jpeg", widthClass: "min-w-[260px] md:min-w-[320px]", link: "https://www.instagram.com/reels/" },
  { src: "/images/reels/sunfeast_1.jpeg", widthClass: "min-w-[380px] md:min-w-[480px]", link: "https://www.instagram.com/reels/" },
];

export default function ReelCarousel() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    let isHovered = false;
    let isDragging = false;
    let startX;
    let scrollLeft;

    // Mouse drag logic
    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
      isDragging = false;
      isHovered = false;
      container.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
      isDragging = false;
      container.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5; // Drag speed multiplier
      container.scrollLeft = scrollLeft - walk;
    };

    // Hover logic
    const handleMouseEnter = () => isHovered = true;
    const handleTouchStart = () => isHovered = true;
    const handleTouchEnd = () => isHovered = false;

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd);

    // Initial center position
    if (container.scrollWidth > container.clientWidth) {
        container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    }

    const updateLoop = () => {
      // 2. Infinite Loop Wrap Around Logic
      const cards = container.querySelectorAll('.cinematic-card');
      if (cards.length > 0) {
        // Width of exactly one set of cards
        const setWidth = cards[images.length]?.offsetLeft - cards[0]?.offsetLeft;
        if (setWidth && container.scrollLeft >= setWidth * 1.5) {
          container.scrollLeft -= setWidth;
        } else if (setWidth && container.scrollLeft <= 0) {
          container.scrollLeft += setWidth;
        }
      }

      // 3. Update 3D Curves based on true screen position (Desktop Only)
      const isMobile = window.innerWidth < 768;
      
      if (!isMobile) {
        const centerX = window.innerWidth / 2;
        const maxDistance = window.innerWidth / 1.5;

        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.left + rect.width / 2;
          const distanceFromCenter = cardCenter - centerX;
          
          let normalizedDist = Math.max(-1, Math.min(1, distanceFromCenter / maxDistance));
          
          const rotateY = normalizedDist * -50; 
          const scale = 1 - Math.abs(normalizedDist) * 0.15;
          const translateZ = Math.abs(normalizedDist) * -300;
          
          card.style.transform = `translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
          
          const imgOverlay = card.querySelector('.cinematic-overlay');
          if (imgOverlay) {
              const opacity = Math.abs(normalizedDist) * 0.4;
              imgOverlay.style.backgroundColor = `rgba(0,0,0,${opacity})`;
          }
        });
      } else {
        cards.forEach((card) => {
          if (card.style.transform !== 'none') {
            card.style.transform = 'none';
            const imgOverlay = card.querySelector('.cinematic-overlay');
            if (imgOverlay) imgOverlay.style.backgroundColor = 'transparent';
          }
        });
      }

      animationFrameId = window.requestAnimationFrame(updateLoop);
    };

    animationFrameId = window.requestAnimationFrame(updateLoop);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const animateScroll = (amount) => {
    const container = containerRef.current;
    if (!container) return;
    const start = container.scrollLeft;
    const duration = 400;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      container.scrollLeft = start + (amount * easeProgress);

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };
    window.requestAnimationFrame(animate);
  };

  // 4 sets of images for seamless padding while scrolling
  const multipliedCards = [...images, ...images, ...images, ...images];

  return (
    <section className="relative z-10 w-full bg-[#f8f8f8] flex flex-col items-center justify-start overflow-hidden pt-32 pb-32 rounded-t-[2.5rem] sm:rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
      
      <div className="text-center mb-16 z-20 px-4">
        <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-bold text-gray-900 mb-6 tracking-tight leading-none">
          Visionary <span className="text-gray-400 italic font-light">Experiences</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-light">
          A cinematic journey through our premium creator content, driving culture and millions of views.
        </p>
      </div>

      <div className="w-full relative">
        {/* Navigation Arrows */}
        <button 
          onClick={() => animateScroll(-500)}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-gray-200 flex items-center justify-center hover:scale-110 hover:bg-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all text-gray-800 group"
          aria-label="Scroll left"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform w-6 h-6 md:w-8 md:h-8">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>

        <button 
          onClick={() => animateScroll(500)}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-gray-200 flex items-center justify-center hover:scale-110 hover:bg-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all text-gray-800 group"
          aria-label="Scroll right"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform w-6 h-6 md:w-8 md:h-8">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>

        {/* Fading Edges */}
        <div className="absolute inset-y-0 left-0 w-[15vw] bg-gradient-to-r from-[#f8f8f8] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-[15vw] bg-gradient-to-l from-[#f8f8f8] to-transparent z-20 pointer-events-none"></div>

        {/* Draggable Track Container */}
        <div 
          ref={containerRef}
          className="flex gap-4 sm:gap-8 px-[15vw] sm:px-[25vw] overflow-x-auto hide-scrollbar w-full items-center min-h-[500px] md:min-h-[600px] cursor-grab"
          style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
        >
          {multipliedCards.map((item, i) => (
            <a 
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`cinematic-card relative ${item.widthClass} h-[380px] md:h-[480px] rounded-[2rem] overflow-hidden shrink-0 shadow-2xl transition-all duration-300 ease-out group`}
              style={{
                transformOrigin: "center center",
                willChange: "transform",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 -10px 30px -10px rgba(0,0,0,0.1) inset",
                transformStyle: "preserve-3d" // maintain 3D rendering context
              }}
              draggable="false" // Prevent native image dragging
            >
              <img src={item.src} alt={`Premium Cinematic ${i}`} draggable="false" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none" />
              
              <div className="cinematic-overlay absolute inset-0 transition-colors duration-200 pointer-events-none"></div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5 backdrop-blur-[2px] pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center backdrop-blur-md shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-black ml-1"></div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
            scroll-behavior: auto; /* changed from smooth so JS logic doesn't clash */
            -webkit-overflow-scrolling: touch;
        }
      `}} />
    </section>
  );
}

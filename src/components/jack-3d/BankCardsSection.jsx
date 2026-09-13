"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const CARD_VIDEOS = [
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_030111_a9e15665-d379-4a7f-8116-695bbe452ad1.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_171347_f640c30d-ec21-426a-98bc-77e07c2c60cb.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_024928_1efd0b0d-6c02-45a8-8847-1030900c4f63.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_024928_1efd0b0d-6c02-45a8-8847-1030900c4f63.mp4'
];

export default function BankCardsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const cardCount = 56;
  const cardsRefs = useRef([]);
  const frameId = useRef(0);
  
  // Continuous scroll progress
  const progress = useRef(0);
  const targetProgress = useRef(0);
  const containerRef = useRef(null);

  // Track mouse coordinates for interactive 3D parallax tilt with inertia damping
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  // Responsive state containing card dimensions
  const [metrics, setMetrics] = useState({
    cardW: 336,
    cardH: 211, // 1.59 standard credit card ratio
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Screen-space cursor offset relative to window center, clamped to [-1.0, 1.0] range
      const rx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const ry = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      mouse.current.targetX = Math.max(-1, Math.min(1, rx));
      mouse.current.targetY = Math.max(-1, Math.min(1, ry));
    };

    const handleMouseLeave = () => {
      // Return gently to center orientation when mouse focus is lost or moves away
      mouse.current.targetX = 0;
      mouse.current.targetY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setIsMobile(w < 768);

      // 1. Calculate Card Metrics (shrink cards if height is small to save vertical space)
      let cardW = Math.round(w * 0.16 + 130);
      
      const heightFactor = Math.min(1.0, Math.max(0.65, h / 850));
      cardW = Math.round(cardW * heightFactor);
      
      cardW = Math.min(336, Math.max(150, cardW));
      if (w < 768) {
        cardW = Math.min(240, w * 0.8); // Shrink on mobile for performance
      }
      const cardH = Math.round(cardW / 1.5925); // Standard credit card ratio

      setMetrics({ cardW, cardH });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      
      let ratio = scrolled / scrollHeight;
      ratio = Math.max(0, Math.min(1, ratio));
      
      const rowCount = Math.ceil(cardCount / 3);
      targetProgress.current = ratio * (rowCount - 1);
      
      const newIndex = Math.round(targetProgress.current);
      if (newIndex !== activeIndexRef.current) {
        activeIndexRef.current = newIndex;
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cardCount]);

  // Compute positions, rotations, and visual rules at 60fps
  const renderLoop = () => {
    // Interpolate progress towards target scroll progress with heavier damping for smoothness
    progress.current += (targetProgress.current - progress.current) * 0.04; 

    // Smoothly interpolate current mouse variables towards their target positions (damping/inertia logic)
    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.08;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.08;

    const cards = cardsRefs.current;
    const h = window.innerHeight;
    const { cardH, cardW } = metrics;

    const continuousProgress = progress.current;
    
    // We use raw continuous progress instead of aggressive magnetic snapping
    // so the cards glide linearly and smoothly with the scroll wheel
    const virtualActiveIndex = continuousProgress;
    const rowCount = Math.ceil(cardCount / 3);

    for (let i = 0; i < cardCount; i++) {
      const card = cards[i];
      if (!card) continue;

      const rowIndex = Math.floor(i / 3);
      const colIndex = i % 3;

      // Solve circular wrapping to get closest representation in [-rowCount/2, rowCount/2]
      let offset = rowIndex - virtualActiveIndex;
      const halfCount = rowCount / 2;
      while (offset > halfCount) offset -= rowCount;
      while (offset < -halfCount) offset += rowCount;

      const absOffset = Math.abs(offset);
      const sign = Math.sign(offset);

      // Allow cards to render completely off-screen smoothly up to offset 3.0. This prevents any clipping or sudden pop-outs.
      if (absOffset > 3.0) {
        card.style.visibility = 'hidden';
        continue;
      } else {
        card.style.visibility = 'visible';
      }

      // Spacing gap between center card and adjacent cards
      const gap = 36;
      const peekAmount = -55; // Push the card's edge 55px past the screen boundary to hide a premium portion of it!
      const D = 1350; // Perspective distance

      let y = 0;
      let z = 0;
      let rot = 0;

      // X position based on column
      const xSpacing = cardW + 30; // 30px gap between columns
      const x = (colIndex - 1) * xSpacing;

      if (absOffset <= 1) {
        // Smoothstep interpolation from 0 to 1 (Center card to first adjacent card)
        const t = absOffset;
        const easedT = t * t * (3 - 2 * t);

        // Y moves from 0 to (cardH + gap)
        const targetY = cardH + gap;
        y = -sign * (easedT * targetY);

        // Z moves from 400 (center) to 220 (adjacent)
        z = 400 + easedT * (220 - 400);

        // Rotation moves from 0 to 132 degrees (beautiful tilted back face)
        rot = easedT * 132;
      } else if (absOffset <= 2) {
        // Smoothstep interpolation from 1 to 2 (Adjacent card to peeking screen-edge card)
        const t = absOffset - 1;
        const easedT = t * t * (3 - 2 * t);

        const yStart = cardH + gap;
        const zStart = 220;
        const rotStart = 132;

        const zEnd = -60;
        const rotEnd = 175;

        // Perspective-aware formula for exact edge alignment at the screen boundary (peekAmount = 26px inside)
        const sEnd = D / (D - zEnd);
        const yEnd = (h / 2 - peekAmount) / sEnd - (cardH / 2);

        const currentY = yStart + easedT * (yEnd - yStart);
        y = -sign * currentY;

        z = zStart + easedT * (zEnd - zStart);
        rot = rotStart + easedT * (rotEnd - rotStart);
      } else {
        // Smoothstep interpolation from 2 to 3 (Peeking card to completely off-screen card)
        const t = Math.min(absOffset - 2, 1);
        const easedT = t * t * (3 - 2 * t);

        const zStart = -60;
        const rotStart = 175;

        const zEnd3 = -250;
        const rotEnd3 = 195;

        const sEnd2 = D / (D - zStart);
        const yEnd2 = (h / 2 - peekAmount) / sEnd2 - (cardH / 2);

        // Calculate yEnd3 dynamically so that the card's edge is completely 100px past the screen boundary
        const sEnd3 = D / (D - zEnd3);
        const yEnd3 = (h / 2 + 100) / sEnd3 + (cardH / 2);

        const currentY = yEnd2 + easedT * (yEnd3 - yEnd2);
        y = -sign * currentY;

        z = zStart + easedT * (zEnd3 - zStart);
        rot = rotStart + easedT * (rotEnd3 - rotStart);
      }

      const localCardRotation = -sign * rot;

      // Determine how close this card is to the exact center (1.0 = center, 0.0 = adjacent/offscreen)
      const centerFactor = Math.max(0, 1 - absOffset);

      // Vertical tilt (around X-axis) and horizontal tilt (around Y-axis) driven by mouse coordinates
      const maxTiltY = 15; // Max angle tilt left-to-right (degrees)
      const maxTiltX = 12; // Max angle tilt up-and-down (degrees)

      const activeTiltX = -mouse.current.y * maxTiltX * centerFactor;
      const activeTiltY = mouse.current.x * maxTiltY * centerFactor;

      const totalRotX = localCardRotation + activeTiltX;
      const totalRotY = activeTiltY;

      // Depth z-index layer
      card.style.zIndex = Math.round(z).toString();
      card.style.opacity = '1';

      // Inject translation matrix with the premium -3deg tilt combined with dynamic mouse-interactive 3D tilt
      card.style.transform = `translateX(${x.toFixed(2)}px) translateY(${y.toFixed(2)}px) translateZ(${z.toFixed(2)}px) rotateX(${totalRotX.toFixed(2)}deg) rotateY(${totalRotY.toFixed(2)}deg) rotateZ(-3deg)`;
    }
  };

  useEffect(() => {
    const tick = () => {
      renderLoop();
      frameId.current = requestAnimationFrame(tick);
    };

    frameId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId.current);
  }, [metrics, cardCount]);

  // Slices for 3D volumetric depth with 30% reduced thickness
  // Span from -1.47px to 1.47px creates an extremely premium real 3D volume feel
  // On mobile, we ONLY render the front face (1 layer) to dramatically improve performance
  const thicknessLayers = isMobile ? [0] : [-1.47, -0.73, 0, 0.73, 1.47];
  const rowCount = Math.ceil(cardCount / 3);

  return (
    <section ref={containerRef} className="relative w-full bg-[#000000] z-0 -mt-10 sm:-mt-12 md:-mt-14" style={{ height: `${rowCount * 80}vh`, zIndex: 5 }}>
      <div className="sticky top-0 inset-x-0 h-screen bg-[#000000] text-white flex items-center justify-center overflow-hidden select-none">
        
        {/* 3D perspective camera space */}
        <div
          className="relative w-full h-full flex items-center justify-center pointer-events-none"
          style={{
            perspective: '1350px',
          }}
        >
          {/* Dynamic 3D coordinate viewport */}
          <div
            className="absolute"
            style={{
              width: `${metrics.cardW}px`,
              height: `${metrics.cardH}px`,
              transformStyle: 'preserve-3d',
            }}
          >
            {Array.from({ length: cardCount }).map((_, i) => {
              const rowIndex = Math.floor(i / 3);
              let offset = rowIndex - activeIndex;
              const halfCount = rowCount / 2;
              while (offset > halfCount) offset -= rowCount;
              while (offset < -halfCount) offset += rowCount;
              const isVisible = Math.abs(offset) <= 2;

              return (
              <div
                key={i}
                ref={(el) => { cardsRefs.current[i] = el; }}
                className="absolute inset-0"
                style={{
                  width: `${metrics.cardW}px`,
                  height: `${metrics.cardH}px`,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'visible',
                }}
              >
                {/* Build physical 3D volumetric thickness by dense parallel layering */}
                {thicknessLayers.map((zOffset, layerIdx) => {
                  const isFrontFace = layerIdx === thicknessLayers.length - 1;
                  const isBackFace = layerIdx === 0;

                  const videoSrc = CARD_VIDEOS[i % CARD_VIDEOS.length];
                  const baseBgColor = '#0f0f0f';

                  // Middle structural slice
                  if (!isFrontFace && !isBackFace) {
                    return (
                      <div
                        key={layerIdx}
                        className="absolute inset-0 rounded-[16px] border border-[#808080] pointer-events-none overflow-hidden"
                        style={{
                          backgroundColor: '#808080',
                          transform: `translateZ(${zOffset}px)`,
                        }}
                      />
                    );
                  }

                  // Front face slice
                  if (isFrontFace) {
                    const frontBorderStyle = "border border-white/15";
                    return (
                      <div
                        key={layerIdx}
                        className={`absolute inset-0 rounded-[16px] ${frontBorderStyle} pointer-events-none overflow-hidden`}
                        style={{
                          backgroundColor: baseBgColor,
                          transform: `translateZ(${zOffset}px)`,
                          backfaceVisibility: 'hidden',
                          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15)',
                        }}
                      >
                        {isVisible ? (
                          <video
                            src={videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
                          />
                        ) : (
                          <div className="absolute inset-0 w-full h-full bg-[#1a1a1a] rounded-[16px]" />
                        )}

                        <div className="absolute inset-0 p-5 sm:p-6 text-white h-full w-full font-sans z-10 bg-black/60 flex flex-col items-center justify-center">
                          <Image
                            src={`/brands/${String(i + 1).padStart(2, '0')}.png`}
                            alt={`Brand ${i + 1}`}
                            width={160}
                            height={120}
                            className="w-[75%] h-[75%] object-contain drop-shadow-2xl opacity-90"
                          />
                        </div>
                      </div>
                    );
                  }

                  // Back face slice
                  if (isBackFace) {
                    const backBorderStyle = "border border-white/15";
                    return (
                      <div
                        key={layerIdx}
                        className={`absolute inset-0 rounded-[16px] ${backBorderStyle} pointer-events-none overflow-hidden`}
                        style={{
                          backgroundColor: baseBgColor,
                          transform: `translateZ(${zOffset}px) rotateX(180deg)`,
                          backfaceVisibility: 'hidden',
                          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15)',
                        }}
                      >
                        {/* Render Video with premium 16px blur on the back face of the card */}
                        {isVisible && (
                          <div className="absolute inset-0 pointer-events-none" style={{ filter: 'blur(16px)', transform: 'scale(1.15)' }}>
                            <video
                              src={videoSrc}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                        )}

                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}

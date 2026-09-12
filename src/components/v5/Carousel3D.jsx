"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

export default function Carousel3D({ items }) {
  const trackX = useMotionValue(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1400); // Fallback for SSR
  
  // Create a seamless loop by duplicating items 3 times
  const duplicatedItems = [...items, ...items, ...items, ...items];
  const itemWidth = 320; // Base width
  const gap = 60; // Space between items
  const singleSetWidth = items.length * (itemWidth + gap);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setContainerWidth(window.innerWidth);
      const handleResize = () => setContainerWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useAnimationFrame((t, delta) => {
    // Move left continuously at a steady speed
    let moveBy = delta * 0.12; 
    let newX = trackX.get() - moveBy;
    
    // Seamless infinite loop logic
    if (newX <= -singleSetWidth) {
      newX += singleSetWidth;
    }
    trackX.set(newX);
  });

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full overflow-hidden flex flex-col justify-center bg-[#050505] perspective-container z-0"
    >
      <motion.div 
        className="flex items-center"
        style={{ x: trackX, gap: `${gap}px` }}
      >
        {duplicatedItems.map((item, i) => (
          <MarqueeItem 
            key={`${item.id}-${i}`} 
            item={item} 
            trackX={trackX} 
            itemOffset={i * (itemWidth + gap)}
            containerWidth={containerWidth}
            itemWidth={itemWidth}
          />
        ))}
      </motion.div>
    </div>
  );
}

function MarqueeItem({ item, trackX, itemOffset, containerWidth, itemWidth }) {
  // Calculate the absolute position of this specific item in the screen
  const screenX = useTransform(trackX, (x) => x + itemOffset + (itemWidth / 2));
  
  const center = containerWidth / 2;
  
  // Concave 3D Effect:
  // Edges are large (1.4), center is small (0.65). 
  // This gives the illusion that the center recedes deep into the screen.
  const scale = useTransform(
    screenX,
    [-containerWidth * 0.2, center, containerWidth * 1.2],
    [1.6, 0.65, 1.6]
  );

  // Edges tilt inward to face the center, enhancing the 3D curve
  const rotateY = useTransform(
    screenX,
    [-containerWidth * 0.2, center, containerWidth * 1.2],
    [35, 0, -35]
  );

  // Center items fade into the darkness to simulate depth
  const opacity = useTransform(
    screenX,
    [-containerWidth * 0.2, center, containerWidth * 1.2],
    [1, 0.3, 1]
  );
  
  // Elevate side items over the center ones
  const zIndex = useTransform(
    screenX,
    [0, center, containerWidth],
    [50, 0, 50]
  );

  return (
    <motion.div 
      className="relative shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-white/5"
      style={{ 
        width: itemWidth, 
        height: itemWidth * 1.5, // Maintain aspect ratio
        scale, 
        rotateY, 
        opacity,
        zIndex,
        transformOrigin: "center center"
      }}
    >
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative group">
        <Image 
          src={item.image} 
          alt={item.title} 
          fill 
          className="object-cover"
          sizes="(max-width: 768px) 300px, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center justify-end">
          <span className="text-white text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-2">
            {item.brand}
          </span>
        </div>
      </a>
    </motion.div>
  );
}

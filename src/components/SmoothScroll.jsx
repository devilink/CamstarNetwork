"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Synchronize Lenis with GSAP's ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Expose so the page loader can pause scrolling while it's visible
    window.__lenis = lenis;
    if (document.documentElement.style.overflow === "hidden") lenis.stop();

    // Add Lenis's requestAnimationFrame to GSAP's ticker
    const raf = (time) => {
      lenis.raf(time * 1000); // GSAP's ticker uses seconds, Lenis needs ms
    };
    gsap.ticker.add(raf);

    // Disable GSAP's lag smoothing to prevent jitter with Lenis
    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      if (window.__lenis === lenis) delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
}

'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { useGSAP } from '@gsap/react';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Founder from '@/components/Founder';
import Text from '@/components/Text';
import About from '@/components/About';
import Services from '@/components/Services';
import ReelsSlider from '@/components/ReelsSlider';
import Footer from '@/components/Footer';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
}

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
    });

    // Hero initial animations
    gsap.from('.hero-element', {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out',
      delay: 0.2,
      stagger: 0.1
    });

    // Infinite marquees
    gsap.to('.animate-marquee', {
      xPercent: -50,
      ease: 'none',
      duration: 20,
      repeat: -1
    });

    // Scroll reveals
    gsap.utils.toArray('.gsap-section').forEach((element: any) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="w-full relative">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
          <main>
            <Hero />
            <Stats />
            <Founder />
            <About />
            <Services />
            <Text />
            <ReelsSlider />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

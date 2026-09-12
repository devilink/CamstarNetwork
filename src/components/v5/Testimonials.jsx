"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const testimonials = [
  {
    quote: "Camstar completely overhauled our digital presence. Within 3 months, our engagement spiked by 400% and we finally have a brand identity that matches our ambition.",
    name: "Alex Rivera",
    role: "CMO, Elevate Tech",
    company: "ELEVATE"
  },
  {
    quote: "Their influencer network is unmatched. We ran a campaign that felt authentic, hit exactly our target demographic, and resulted in our highest sales quarter ever.",
    name: "Sarah Jenkins",
    role: "Founder, Glow Beauty",
    company: "GLOW"
  },
  {
    quote: "Brutal, efficient, and incredibly creative. The team at Camstar doesn't just make things look good; they engineer visual systems that actually convert.",
    name: "David Chen",
    role: "Director of Marketing, Nexus",
    company: "NEXUS"
  }
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.from(".testimonial-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    gsap.from(".testimonial-card", {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".testimonial-card",
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  const nextTestimonial = () => {
    const nextIdx = (currentIndex + 1) % testimonials.length;
    animateChange(nextIdx);
  };

  const prevTestimonial = () => {
    const prevIdx = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    animateChange(prevIdx);
  };

  const animateChange = (newIndex) => {
    gsap.to(".testimonial-content", {
      opacity: 0,
      x: -20,
      duration: 0.3,
      onComplete: () => {
        setCurrentIndex(newIndex);
        gsap.fromTo(".testimonial-content", 
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
        );
      }
    });
  };

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-4 md:px-8 relative z-10 bg-[#fafafa]">
      <div className="max-w-[1400px] w-full mx-auto grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        <div className="testimonial-header">
          <h2 className="text-[10px] font-bold tracking-widest uppercase text-[#9f7aea] mb-4">
            Client Feedback
          </h2>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#111] leading-[1.1] mb-8">
            Don't just take <br />
            <span className="text-[#555]">our word for it.</span>
          </h3>
          
          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-[#111] hover:bg-[#111] hover:text-white transition-all shadow-sm"
            >
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-[#111] hover:bg-[#111] hover:text-white transition-all shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>

        <div className="testimonial-card relative">
          
          <div className="bg-white border border-[#eaeaea] p-8 md:p-12 rounded-[2rem] min-h-[350px] flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div className="testimonial-content">
              <p className="text-xl md:text-2xl text-[#111] font-bold leading-relaxed mb-8 tracking-tight">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-extrabold text-[#111] mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-[#555] font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
                <div className="text-2xl font-black text-black/5 tracking-widest uppercase">
                  {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
            
            {/* Dots */}
            <div className="flex gap-2 mt-8 justify-center lg:justify-start">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => {
                    if(idx !== currentIndex) animateChange(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-[#9f7aea] w-6' : 'bg-black/10 hover:bg-black/20'}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

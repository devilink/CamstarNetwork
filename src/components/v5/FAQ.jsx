"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const faqs = [
  {
    question: "How long does a typical campaign take to launch?",
    answer: "Our typical onboarding to launch timeline is 2-4 weeks depending on the complexity of the visual assets required and the scale of the influencer deployment."
  },
  {
    question: "Do you work with startups or only established brands?",
    answer: "We work with brands at all stages that are ready to scale aggressively. If you have product-market fit and the budget to fuel growth, we can engineer the attention."
  },
  {
    question: "How do you select influencers for our brand?",
    answer: "We use a data-centric approach, analyzing audience demographics, engagement rates, and brand alignment. We only partner with creators who command real influence, not just high follower counts."
  },
  {
    question: "What is your pricing model?",
    answer: "Every project is bespoke. We typically operate on a combination of retainer for asset production and strategy, plus performance incentives based on the ROAS (Return on Ad Spend) we generate."
  }
];

export default function FAQ() {
  const containerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

  useGSAP(() => {
    gsap.from(".faq-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    gsap.from(".faq-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".faq-list",
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 relative z-10 bg-[#fafafa]" ref={containerRef}>
      <div className="max-w-[1000px] w-full mx-auto">
        
        <div className="text-center mb-16 faq-header">
          <h2 className="text-[10px] font-bold tracking-widest uppercase text-[#9f7aea] mb-4 block">
            Clarity
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter text-[#111] mb-6">
            Frequently Asked Questions.
          </h3>
          <p className="text-[#555] text-lg max-w-xl mx-auto font-medium">
            Everything you need to know about partnering with Camstar Network.
          </p>
        </div>

        <div className="flex flex-col faq-list gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <div 
                key={idx} 
                className={`faq-item border transition-all duration-300 rounded-3xl bg-white ${isOpen ? 'border-[#9f7aea]' : 'border-[#eaeaea] hover:border-[#9f7aea]'}`}
              >
                <button 
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6"
                >
                  <span className={`text-lg md:text-xl font-extrabold tracking-tight transition-colors ${isOpen ? 'text-[#9f7aea]' : 'text-[#111]'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center border transition-all duration-300 ${isOpen ? 'border-[#9f7aea] bg-[#9f7aea] text-white rotate-45' : 'border-black/10 text-black/50 group-hover:text-black/80'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  </div>
                </button>
                
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: isOpen ? '300px' : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="p-6 md:p-8 pt-0 text-[#555] text-base md:text-lg leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

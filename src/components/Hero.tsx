import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Helper component to split text into individual letter spans
const SplitText = ({ text, customClass = "" }: { text: string; customClass?: string }) => {
  return (
    <span className="inline-block" aria-label={text}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          aria-hidden="true"
          className={`letter inline-block ${customClass} ${char === " " ? "w-4 md:w-6" : ""}`}
          style={{ transformOrigin: "50% 50%" }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    const letters = gsap.utils.toArray(".letter") as HTMLElement[];

    // 1. Initial Entrance Animation (All Letters)
    tl.from(letters, {
      opacity: 0,
      scale: 0,
      x: () => gsap.utils.random(-150, 150),
      y: () => gsap.utils.random(-150, 150),
      rotationZ: () => gsap.utils.random(-180, 180),
      rotationY: () => gsap.utils.random(-90, 90),
      duration: 1.2,
      stagger: 0.04, 
      ease: "back.out(1.5)",
      delay: 0.1,
    });

    // Fade in supporting elements
    tl.from(
      ".fade-up-element",
      {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=1"
    );

    // Fade background watermark
    tl.from(
      ".bg-watermark",
      {
        scale: 0.9,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      },
      "-=1.5"
    );

    // 2. Continuous Subtle Random Batch Animation 
    tl.add(() => {
      if (!letters.length) return;

      function animateBatch() {
        // FIX: Filter out any letters that are currently animating. 
        // This prevents animations from overlapping and leaving letters stuck edge-on (invisible).
        const availableLetters = letters.filter(letter => !gsap.isTweening(letter));
        
        if (availableLetters.length > 0) {
          // Grab a fresh batch of up to 4 available letters
          const shuffledLetters = gsap.utils.shuffle(availableLetters);
          const currentBatch = shuffledLetters.slice(0, 4);

          gsap.to(currentBatch, {
            // SUBTLE: Exactly one gentle flip left or right
            rotationY: () => `+=${gsap.utils.random([360, -360])}`,
            // SUBTLE: Tiny wobble
            rotationZ: () => gsap.utils.random(-4, 4), 
            // SUBTLE: Barely noticeable scale shift
            scale: () => gsap.utils.random(0.95, 1.05), 
            // SUBTLE: Longer duration, smoother ease
            duration: () => gsap.utils.random(1.5, 2.2), 
            ease: "power2.inOut", 
            stagger: 0.1, 
            onComplete: () => {
              // Smoothly snap scale and tilt back to default
              gsap.to(currentBatch, {
                scale: 1,
                rotationZ: 0, 
                duration: 0.5, 
                ease: "power2.out",
              });
            },
          });
        }

        // Wait 2 to 3.5 seconds before triggering the next batch
        gsap.delayedCall(gsap.utils.random(2, 3.5), animateBatch);
      }

      // Start shortly after the entrance ends
      gsap.delayedCall(0.5, animateBatch);
    });

    // 3. Floating Accents
    gsap.to(".floating-accent-1", {
      y: -25,
      x: 10,
      rotation: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".floating-accent-2", {
      y: 30,
      x: -15,
      rotation: -5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, { scope: container });

  return (
    <div ref={container}>
      <section className="relative min-h-[100dvh] pt-32 lg:pt-28 pb-12 overflow-hidden bg-background flex items-center justify-center border-b-[8px] lg:border-b-[12px] border-brand-dark">
        {/* Giant Background Typography / Watermark */}
        <div className="absolute inset-0 flex flex-col justify-center items-center overflow-hidden opacity-[0.03] pointer-events-none select-none mix-blend-multiply mt-8">
          <h1 className="bg-watermark text-[25vw] lg:text-[20vw] font-black leading-none text-brand-dark whitespace-nowrap -ml-12 tracking-tighter">
            CAMSTAR
          </h1>
          <h1 className="bg-watermark text-[25vw] lg:text-[20vw] font-black leading-none text-brand-primary whitespace-nowrap ml-12 tracking-tighter">
            NETWORK
          </h1>
        </div>

        <div className="relative z-10 w-full px-6 flex flex-col items-start xl:px-24 py-8">
          {/* Label Element */}
          <div className="fade-up-element mb-6 flex items-center gap-3 border-4 border-brand-dark p-2 bg-brand-light shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <span className="w-3 h-3 bg-brand-primary animate-pulse border-2 border-brand-dark"></span>
            <span className="text-xs font-black tracking-[0.2em] text-brand-dark uppercase pr-2">
              Let's Create
            </span>
          </div>

          {/* Main Headline */}
          <div className="relative" style={{ perspective: "1000px" }}>
            <h1 className="text-[3.5rem] sm:text-5xl md:text-6xl lg:text-[7rem] xl:text-[8rem] font-black tracking-tighter text-brand-dark uppercase leading-[0.85] relative z-20 flex flex-col items-start">
              
              <span className="block">
                <SplitText text="WE CRAFT" />
              </span>
              
              <span className="block my-2 md:my-4">
                <span className="text-brand-primary relative inline-block group">
                  <span className="relative z-10">
                    <SplitText text="CREATIVE" />
                  </span>
                  <span className="fade-up-element absolute -inset-1 md:-inset-3 bg-brand-dark -z-10 -skew-x-12 hidden md:block"></span>
                </span>
              </span>
              
              <span className="block">
                <SplitText text="CONTENT." />
              </span>
              
            </h1>
          </div>

          {/* Paragraph */}
          <p className="fade-up-element text-sm md:text-base lg:text-lg text-brand-dark max-w-xl mt-6 font-black uppercase tracking-widest leading-relaxed border-l-8 border-brand-primary pl-4 bg-brand-light py-1">
            Helping brands dominate online with aggressive engagement strategies
            and stunning visuals.
          </p>

          {/* Button */}
          <div className="fade-up-element mt-10 flex flex-col sm:flex-row gap-6 items-start">
            <a
              href="https://wa.me/917002107310"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-10 py-4 bg-brand-primary text-brand-light font-black uppercase tracking-widest text-lg border-4 border-brand-dark shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Start Project →
            </a>
          </div>

          {/* Floating Decorative Accents */}
          <div className="floating-accent-1 absolute top-1/4 right-0 md:right-12 xl:right-16 w-24 h-24 lg:w-32 lg:h-32 bg-brand-primary rounded-full border-4 border-brand-dark shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hidden md:block"></div>
          <div className="floating-accent-2 absolute bottom-1/4 right-[5%] lg:right-[15%] w-24 h-24 lg:w-32 lg:h-32 bg-brand-light border-8 border-brand-dark shadow-[8px_8px_0px_0px_rgba(220,38,38,1)] mix-blend-multiply hidden md:block rotate-12"></div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="w-full bg-brand-primary border-b-[8px] lg:border-b-[12px] border-brand-dark py-4 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex items-center pointer-events-none">
          <span className="text-2xl md:text-4xl font-black text-brand-light uppercase tracking-widest px-6">
            ✦ VIRAL CAMPAIGNS ✦ CREATIVE DIRECTION ✦ ALGORITHM DOMINATION ✦ BRAND GROWTH
          </span>
          <span className="text-2xl md:text-4xl font-black text-brand-light uppercase tracking-widest px-6">
            ✦ VIRAL CAMPAIGNS ✦ CREATIVE DIRECTION ✦ ALGORITHM DOMINATION ✦ BRAND GROWTH
          </span>
        </div>
      </div>
    </div>
  );
}
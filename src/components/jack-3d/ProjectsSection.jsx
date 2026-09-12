"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FadeIn, LiveProjectButton } from "./Reusable";

const projects = [
  {
    num: "01",
    client: "Social Media Campaign",
    label: "Campaign",
    images: {
      leftTop: "/NN/Screenshot%202026-09-10%20203306.png",
      leftBottom: "/NN/Screenshot%202026-09-10%20203317.png",
      right: "/NN/Screenshot%202026-09-10%20203325.png"
    }
  },
  {
    num: "02",
    client: "Influencer Marketing",
    label: "Global Activation",
    images: {
      leftTop: "/NN/Screenshot%202026-09-10%20203333.png",
      leftBottom: "/NN/Screenshot%202026-09-10%20203345.png",
      right: "/NN/Screenshot%202026-09-10%20203401.png"
    }
  },
  {
    num: "03",
    client: "Digital Brand Activation",
    label: "Brand Partnership",
    images: {
      leftTop: "/NN/Screenshot%202026-09-10%20203408.png",
      leftBottom: "/NN/Screenshot%202026-09-10%20203413.png",
      right: "/NN/Screenshot%202026-09-10%20203419.png"
    }
  },
  {
    num: "04",
    client: "Viral Content Strategy",
    label: "Event Coverage",
    images: {
      leftTop: "/NN/Screenshot%202026-09-10%20203427.png",
      leftBottom: "/NN/Screenshot%202026-09-10%20203432.png",
      right: "/NN/Screenshot%202026-09-10%20203437.png"
    }
  },
  {
    num: "05",
    client: "Performance Marketing",
    label: "Editorial",
    images: {
      leftTop: "/NN/Screenshot%202026-09-10%20203444.png",
      leftBottom: "/NN/Screenshot%202026-09-10%20203452.png",
      right: "/NN/Screenshot%202026-09-10%20203457.png"
    }
  },
  {
    num: "06",
    client: "Brand Awareness Drive",
    label: "Product Launch",
    images: {
      leftTop: "/NN/Screenshot%202026-09-10%20203504.png",
      leftBottom: "/NN/Screenshot%202026-09-10%20203510.png",
      right: "/NN/Screenshot%202026-09-10%20203518.png"
    }
  },
  {
    num: "07",
    client: "User Generated Content",
    label: "Architecture",
    images: {
      leftTop: "/NN/Screenshot%202026-09-10%20203524.png",
      leftBottom: "/NN/Screenshot%202026-09-10%20203531.png",
      right: "/NN/Screenshot%202026-09-10%20203537.png"
    }
  },
  {
    num: "08",
    client: "Content Distribution",
    label: "Documentary",
    images: {
      leftTop: "/NN/Screenshot%202026-09-10%20203542.png",
      leftBottom: "/NN/Screenshot%202026-09-10%20203555.png",
      right: "/NN/Screenshot%202026-09-10%20203602.png"
    }
  }
];

function Card({ project, index, targetScale, progress }) {
  const scale = useTransform(progress, [index * 0.33, 1], [1, targetScale]);

  return (
    <div className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32">
      <motion.div 
        style={{ scale, top: `calc(10vh + ${index * 28}px)` }}
        className="w-full max-w-7xl mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 md:gap-8 origin-top relative"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex items-end gap-6 sm:gap-10">
            <span className="font-black text-[#D7E2EA] text-[clamp(3rem,10vw,140px)] leading-none">
              {project.num}
            </span>
            <div className="pb-2 md:pb-6">
              <span className="block text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm mb-2">
                {project.label}
              </span>
              <h3 className="font-medium text-[#D7E2EA] uppercase text-[clamp(1.5rem,3vw,3rem)] leading-none">
                {project.client}
              </h3>
            </div>
          </div>
          
          <div className="pb-2 md:pb-6">
            <LiveProjectButton />
          </div>
        </div>

        {/* Bottom Row - Two Column Grid */}
        <div className="flex flex-col md:flex-row gap-4 h-full min-h-[300px]">
          {/* Left Column (40%) */}
          <div className="flex flex-col gap-4 w-full md:w-[40%]">
            <Image 
              src={project.images.leftTop} 
              alt={`${project.client} image 1`} 
              width={800}
              height={600}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <Image 
              src={project.images.leftBottom} 
              alt={`${project.client} image 2`} 
              width={800}
              height={600}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover flex-1 min-h-[160px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          
          {/* Right Column (60%) */}
          <div className="w-full md:w-[60%] h-[300px] md:h-auto">
            <Image 
              src={project.images.right} 
              alt={`${project.client} main image`} 
              width={1200}
              height={800}
              className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      ref={containerRef} 
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 pb-40"
    >
      <div className="pt-20 sm:pt-24 md:pt-32 pb-16">
        <FadeIn y={40}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none">
            Project
          </h2>
        </FadeIn>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          return (
            <Card 
              key={project.num} 
              index={i} 
              project={project} 
              targetScale={targetScale} 
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
}

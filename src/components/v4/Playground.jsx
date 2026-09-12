import FloatingImage from "./FloatingImage";
import { campaigns } from "@/data/campaigns";

export default function Playground() {
  // We extract images from the campaigns data to scatter around the playground
  const images = campaigns.map(c => c.reels[0].image);

  return (
    <section id="work" className="relative min-h-[120vh] bg-[#F1F0ED] text-[#111111] overflow-hidden flex flex-col justify-center items-center py-32 border-b border-grid-dark">
      
      {/* Absolute Scattered Images (Collage) */}
      <FloatingImage src={images[0]} alt="Work 1" top="5%" left="10%" width="300px" height="400px" rotate={-4} zIndex={10} />
      <FloatingImage src={images[1]} alt="Work 2" top="15%" left="75%" width="250px" height="250px" rotate={6} zIndex={10} />
      <FloatingImage src={images[2]} alt="Work 3" top="45%" left="5%" width="200px" height="300px" rotate={2} zIndex={20} />
      <FloatingImage src={images[3]} alt="Work 4" top="65%" left="80%" width="350px" height="250px" rotate={-6} zIndex={10} />
      <FloatingImage src={images[4]} alt="Work 5" top="80%" left="15%" width="280px" height="380px" rotate={8} zIndex={10} />
      <FloatingImage src={images[5]} alt="Work 6" top="30%" left="25%" width="150px" height="150px" rotate={-12} zIndex={5} />
      <FloatingImage src={images[6]} alt="Work 7" top="55%" left="65%" width="220px" height="300px" rotate={4} zIndex={5} />
      
      {/* Mobile hidden images to prevent extreme clutter */}
      <div className="hidden md:block">
        <FloatingImage src={images[7]} alt="Work 8" top="85%" left="50%" width="260px" height="200px" rotate={-3} zIndex={5} />
        <FloatingImage src={images[8]} alt="Work 9" top="10%" left="45%" width="180px" height="220px" rotate={12} zIndex={5} />
      </div>

      {/* Central Typography */}
      <div className="relative z-30 text-center mix-blend-difference filter invert pointer-events-none">
        
        <p className="font-sans text-xs tracking-[0.3em] uppercase mb-4 opacity-70">
          Selected Visual Identity
        </p>
        
        <h2 className="font-display text-[15vw] leading-[0.8] tracking-tighter uppercase font-bold">
          Playground.
        </h2>
        
        <p className="font-sans text-sm tracking-widest uppercase mt-8 opacity-70 max-w-sm mx-auto">
          A collection of digital campaigns, visual strategies, and brand collaborations.
        </p>

      </div>
      
      {/* Central CTA (Clickable, so pointer-events-auto) */}
      <div className="relative z-40 mt-12">
        <a 
          href="#contact" 
          className="inline-block border-2 border-black px-12 py-4 font-sans font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[#F1F0ED] transition-colors"
        >
          View All Projects
        </a>
      </div>

    </section>
  );
}

import Image from "next/image";
import { AnimateCard } from "./AnimateSection";

export default function Collaborations() {
  return (
    <section className="relative py-12 px-4 md:px-8">
      <div className="max-w-[1400px] w-full mx-auto">
        
        <AnimateCard className="bento-card p-12 flex flex-col md:flex-row items-center justify-between gap-12 bg-white/5 border border-white/5">
          
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-white/50 mb-2">
              Trusted By
            </h2>
            <p className="font-sans text-2xl font-bold text-white">
              Global Brands &<br />Industry Leaders
            </p>
          </div>

          <div className="md:w-2/3 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[600px] h-[60px] md:h-[80px]">
              <Image
                src="/images/collaborator.png"
                alt="Brand Collaborations"
                fill
                className="object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

        </AnimateCard>

      </div>
    </section>
  );
}

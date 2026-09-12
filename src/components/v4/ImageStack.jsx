import Image from "next/image";

export default function ImageStack() {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] mt-12 md:mt-0">
      
      {/* Top Left Image */}
      <div className="absolute top-0 left-0 w-[45%] h-[40%] z-10 sharp-image-container border border-grid shadow-2xl">
        <Image src="/images/reels/oppo_1.jpeg" alt="Campaign" fill className="object-cover grayscale" />
      </div>

      {/* Middle Left Image */}
      <div className="absolute top-[25%] left-[20%] w-[40%] h-[40%] z-20 sharp-image-container border border-grid shadow-2xl">
        <Image src="/images/reels/realme_2.jpeg" alt="Campaign" fill className="object-cover" />
      </div>

      {/* Middle Right Image */}
      <div className="absolute top-[50%] left-[40%] w-[40%] h-[40%] z-30 sharp-image-container border border-grid shadow-2xl">
        <Image src="/images/boss.PNG" alt="Founder" fill className="object-cover grayscale" />
      </div>

      {/* Bottom Right Image */}
      <div className="absolute top-[70%] left-[60%] w-[35%] h-[30%] z-40 sharp-image-container border border-grid shadow-2xl">
        <Image src="/images/reels/kohira_1.jpeg" alt="Campaign" fill className="object-cover" />
      </div>

    </div>
  );
}

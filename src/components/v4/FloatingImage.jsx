import Image from "next/image";

export default function FloatingImage({ src, alt, top, left, width, height, rotate, zIndex }) {
  return (
    <div 
      className="absolute sharp-image-container border border-grid-dark shadow-xl hover:shadow-2xl transition-shadow"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: `rotate(${rotate}deg)`,
        zIndex: zIndex
      }}
    >
      <a href={src} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className="object-cover hover:scale-105 transition-transform duration-500 ease-out" 
        />
      </a>
    </div>
  );
}

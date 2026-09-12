export default function Statistics() {
  return (
    <div className="flex flex-col sm:flex-row gap-12 mt-16 md:mt-24 pl-6 md:pl-0 border-t border-grid pt-8">
      
      <div className="flex flex-col">
        <span className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-white">50+</span>
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/50 mt-1">Brand Partners</span>
      </div>

      <div className="flex flex-col">
        <span className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-white">10M+</span>
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/50 mt-1">Reach Generated</span>
      </div>

      <div className="flex flex-col">
        <span className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-white">2026</span>
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/50 mt-1">Established</span>
      </div>

    </div>
  );
}

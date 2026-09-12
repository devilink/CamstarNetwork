export default function Navigation() {
  return (
    <nav className="w-full border-b border-grid flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-white"></div>
        <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-white">
          Camstar Network
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-12">
        <span className="font-sans text-[10px] tracking-widest uppercase text-white/50">
          Studio
        </span>
        <span className="font-sans text-[10px] tracking-widest uppercase text-white/50">
          Work
        </span>
        <span className="font-sans text-[10px] tracking-widest uppercase text-white/50">
          Contact
        </span>
      </div>

      <div className="flex flex-col gap-1 w-6 cursor-pointer">
        <div className="w-full h-[2px] bg-white"></div>
        <div className="w-full h-[2px] bg-white"></div>
      </div>
    </nav>
  );
}

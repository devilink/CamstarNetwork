export default function ContactBar() {
  return (
    <div className="w-full border-t border-grid flex flex-col md:flex-row">
      
      {/* Primary CTA Block */}
      <a 
        href="https://wa.me/917002107310"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#F1F0ED] text-[#111111] p-6 md:p-8 flex items-center justify-between hover:bg-white transition-colors border-r border-grid"
      >
        <span className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight">
          Start Project
        </span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </a>

      {/* Social / Contact Grid Cells */}
      <div className="flex">
        <a href="mailto:camstarltd@gmail.com" className="w-20 md:w-24 h-full aspect-square border-r border-grid flex items-center justify-center hover:bg-white/5 transition-colors">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        </a>
        <a href="https://camstar.in" target="_blank" rel="noopener noreferrer" className="w-20 md:w-24 h-full aspect-square border-r border-grid flex items-center justify-center hover:bg-white/5 transition-colors">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
        </a>
        <a href="https://www.instagram.com/camstar.in" target="_blank" rel="noopener noreferrer" className="w-20 md:w-24 h-full aspect-square flex items-center justify-center hover:bg-white/5 transition-colors">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
      </div>

    </div>
  );
}

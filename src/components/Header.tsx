export default function Header() {
  return (
    <nav className="fixed w-full z-50 glass-panel border-b-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <img src="/logo.jpeg" alt="Camstar" className="h-6 md:h-8 object-contain" />
            <div className="hidden md:flex space-x-8 text-sm font-medium text-[#d8ba98]">
                <a href="#about" className="hover:text-white">About Us</a>
                <a href="#services" className="hover:text-white">What We Do</a>
                <a href="#collaborations" className="hover:text-white">Collaborations</a>
                <a href="/find-creator" className="hover:text-white">Find Your Creator</a>
            </div>
            <a href="https://wa.me/917002107310" target="_blank" rel="noreferrer" className="bg-[#b81104] text-brand-light px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-red-500 hover:text-zinc-900 transition-colors duration-300">
                Let's Collaborate
            </a>
        </div>
    </nav>
  );
}

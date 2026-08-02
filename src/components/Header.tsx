"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-panel border-b-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/">
                <img src="/logo.jpeg" alt="Camstar" className="h-6 md:h-8 object-contain cursor-pointer" />
            </Link>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-[#d8ba98]">
                <a href="/#about" className="hover:text-white">About Us</a>
                <a href="/#services" className="hover:text-white">What We Do</a>
                <a href="/#collaborations" className="hover:text-white">Collaborations</a>
                <Link href="/find-creator" className="hover:text-white">Find Your Creator</Link>
            </div>
            
            <div className="flex items-center gap-4">
                <a href="https://wa.me/917002107310" target="_blank" rel="noreferrer" className="hidden md:inline-block bg-[#b81104] text-brand-light px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold hover:bg-red-500 hover:text-zinc-900 transition-colors duration-300">
                    Let's Collaborate
                </a>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden text-[#d8ba98] hover:text-white focus:outline-none"
                >
                  {isMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
            </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 pt-2 pb-4 space-y-1 flex flex-col">
              <a href="/#about" onClick={() => setIsMenuOpen(false)} className="text-[#d8ba98] hover:text-white block px-3 py-3 rounded-md text-base font-medium border-b border-white/5">About Us</a>
              <a href="/#services" onClick={() => setIsMenuOpen(false)} className="text-[#d8ba98] hover:text-white block px-3 py-3 rounded-md text-base font-medium border-b border-white/5">What We Do</a>
              <a href="/#collaborations" onClick={() => setIsMenuOpen(false)} className="text-[#d8ba98] hover:text-white block px-3 py-3 rounded-md text-base font-medium border-b border-white/5">Collaborations</a>
              <Link href="/find-creator" onClick={() => setIsMenuOpen(false)} className="text-[#d8ba98] hover:text-white block px-3 py-3 rounded-md text-base font-medium border-b border-white/5">Find Your Creator</Link>
              <a href="https://wa.me/917002107310" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)} className="mt-4 bg-[#b81104] text-brand-light px-5 py-3 rounded-full text-center text-sm font-semibold hover:bg-red-500 hover:text-zinc-900 transition-colors duration-300">
                  Let's Collaborate
              </a>
            </div>
          </div>
        )}
    </nav>
  );
}

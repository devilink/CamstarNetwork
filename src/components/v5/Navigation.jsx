"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#fafafa]/90 backdrop-blur-md border-b border-black/5 transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-24">
          
          {/* Logo (Far Left) */}
          <Link href="/" className="relative w-32 h-10 flex items-center justify-start shrink-0">
            {/* Note: since logo is black/dark, we should invert or use a dark logo. Assuming logo.jpeg works on light background or we can use CSS filter if needed. Adding contrast for now. */}
            <Image 
              src="/images/logo.jpeg" 
              alt="Camstar Logo" 
              fill 
              className="object-contain object-left mix-blend-multiply" 
              priority
            />
            {/* Fallback text if logo doesn't blend well */}
            <span className="sr-only">Camstar Network</span>
          </Link>

          {/* Desktop Links (Centered) */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#555] hover:text-[#111] text-[13px] uppercase tracking-widest font-semibold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA (Far Right) */}
          <a 
            href="#contact"
            className="hidden md:flex items-center justify-center h-10 px-7 rounded-full bg-[#111] text-white text-[13px] font-bold hover:bg-[#333] transition-colors shrink-0"
          >
            Start Project
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative text-[#111] p-2 w-10 h-10 flex items-center justify-center rounded-full ml-4 shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-5 h-3 flex flex-col justify-between">
              <span className={`w-full h-[2px] bg-[#111] rounded-full transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`}></span>
              <span className={`w-full h-[2px] bg-[#111] rounded-full transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-full h-[2px] bg-[#111] rounded-full transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}></span>
            </div>
          </button>
          
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed inset-0 top-24 z-40 bg-[#fafafa]/98 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#111] font-bold text-5xl tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 px-8 py-4 rounded-full bg-[#111] text-white text-lg font-bold"
              >
                Start Project
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

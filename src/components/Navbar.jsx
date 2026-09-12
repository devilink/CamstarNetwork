"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 pt-6 px-4 pointer-events-none">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="max-w-[800px] mx-auto pointer-events-auto"
        >
          <div className={`glass-pill rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300 ${isScrolled ? "shadow-2xl shadow-black/50" : ""}`}>
            
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#ff3333] to-[#ff6b33] shadow-[0_0_15px_rgba(255,51,51,0.5)]"></div>
              <span className="text-white font-sans font-bold tracking-tight">Camstar</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 font-sans text-sm font-medium transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA / Mobile Toggle */}
            <div className="flex items-center gap-2">
              <a href="#contact" className="hidden md:block px-5 py-2 rounded-full bg-white text-black font-sans text-sm font-bold hover:scale-105 transition-transform">
                Let's Talk
              </a>
              
              <button
                className="md:hidden relative text-white p-2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="w-5 h-3 flex flex-col justify-between">
                  <span className={`w-full h-[1.5px] bg-white rounded-full transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`}></span>
                  <span className={`w-full h-[1.5px] bg-white rounded-full transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
                  <span className={`w-full h-[1.5px] bg-white rounded-full transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}></span>
                </div>
              </button>
            </div>
            
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed inset-4 z-40 bento-card flex flex-col justify-center items-center mt-24"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white font-sans font-bold text-4xl"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff3333] to-[#ff6b33] text-white font-sans font-bold text-lg shadow-lg shadow-red-500/20"
                >
                  Start Project
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

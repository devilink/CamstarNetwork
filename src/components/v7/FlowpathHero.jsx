"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function FlowpathHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" }
  ];

  return (
    <section className="sticky top-0 h-screen w-full overflow-hidden flex flex-col z-0">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'hue-rotate(-55deg)' }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260703_053131_1ec3dd1c-d627-44fb-ab20-6e1fce41b0d5.mp4"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-50 w-full px-5 sm:px-6 md:px-12 lg:px-16 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/logo.jpeg" alt="Camstar Network Logo" className="h-10 sm:h-12 w-auto object-contain rounded-lg" />
        </div>

        {/* Desktop Nav Items - Changed md: to lg: to prevent squishing */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href={item.href || "#"} className="flex items-center gap-1.5 text-white/90 hover:text-white text-sm font-medium transition-colors cursor-pointer py-2">
                {item.name}
                {item.dropdown && (
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                )}
              </a>
              
              {/* Dropdown - Added pt-2 wrapper to keep hover contiguous */}
              {item.dropdown && activeDropdown === item.name && (
                <div className="!absolute top-full left-0 pt-2 z-50">
                  <div className="liquid-glass rounded-xl py-3 px-2 min-w-[160px] shadow-xl animate-dropdown">
                    {item.dropdown.map((subItem) => (
                      <a key={subItem} href="#" className="block px-3 py-2 text-white/80 hover:text-white text-sm rounded-lg hover:bg-white/5 transition-colors">
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="mailto:contact@camstarnetwork.com" className="liquid-glass inline-flex items-center justify-center h-10 px-6 rounded-full text-white text-sm font-medium hover:bg-white/10 transition-colors whitespace-nowrap">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden relative w-6 h-6 flex items-center justify-center text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className={`absolute w-6 h-6 transition-all duration-300 ${mobileMenuOpen ? "scale-0 opacity-0 rotate-90" : "scale-100 opacity-100 rotate-0"}`} />
          <X className={`absolute w-6 h-6 transition-all duration-300 ${mobileMenuOpen ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-90"}`} />
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            className="absolute top-full left-4 right-4 mt-2 bg-[#2C221C]/95 backdrop-blur-xl rounded-2xl p-6 lg:hidden shadow-2xl animate-dropdown"
            style={{ animationTimingFunction: 'cubic-bezier(0.16,1,0.3,1)', animationDuration: '400ms' }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col gap-2">
                  <a href={item.href || "#"} onClick={() => setMobileMenuOpen(false)} className="text-white font-medium text-base">{item.name}</a>
                  {item.dropdown && (
                    <div className="flex flex-col gap-2 pl-4 border-l border-white/10 ml-2">
                      {item.dropdown.map((subItem) => (
                        <a key={subItem} href="#" className="text-white/70 hover:text-white text-sm py-1 transition-colors">
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-4">
                <a href="mailto:contact@camstarnetwork.com" className="inline-flex items-center justify-center h-12 bg-white text-gray-900 rounded-full px-6 text-sm font-semibold hover:bg-white/90 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content - Changed to items-center and added subtle offset so it sits beautifully in the middle */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-5 pb-20">
        <div className="text-center max-w-4xl">
          <h1 className="text-white text-5xl sm:text-7xl md:text-[8rem] font-bold tracking-tighter leading-[0.9]">
            Creator<br/>
            Influence
          </h1>
          
          <p className="text-white/80 text-lg max-w-sm mt-6 mb-8 font-light leading-relaxed mx-auto">
            We are a premier creative and influencer agency bridging the gap between iconic brands and digital talent to craft authentic, high-impact campaigns.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a href="#projects" className="inline-flex items-center justify-center h-12 px-8 bg-white text-gray-900 text-sm font-semibold rounded-full hover:bg-white/90 transition-colors whitespace-nowrap">
              View our work
            </a>
            <a href="mailto:contact@camstarnetwork.com" className="inline-flex items-center justify-center h-12 px-8 liquid-glass rounded-full text-white text-sm font-semibold hover:bg-white/10 transition-colors whitespace-nowrap">
              Start a project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

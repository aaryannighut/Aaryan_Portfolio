"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, FolderCode, Trophy, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About Me", icon: User },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderCode },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/35 backdrop-blur-md border-b border-white/5 py-2.5 md:py-4.5 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:justify-center">
        
        {/* Mobile/Tablet Logo (Visible only on screens < 1024px) */}
        <div className="block lg:hidden select-none">
          <button
            onClick={() => {
              scrollToSection("hero");
              setIsOpen(false);
            }}
            className="text-xs sm:text-sm font-black italic tracking-[0.2em] text-white uppercase hover:text-[#FFD700] transition-colors cursor-pointer"
          >
            Aaryan Nighut
          </button>
        </div>

        {/* Desktop Navigation Links (Visible only on screens >= 1024px) */}
        <nav className="hidden lg:flex items-center justify-center gap-x-7 gap-y-2 text-[11px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-all cursor-pointer group hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]"
            >
              <item.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Mobile/Tablet Hamburger Toggle Button (Visible only on screens < 1024px) */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all cursor-pointer relative z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile/Tablet Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 top-[56px] md:top-[72px] bottom-0 bg-[#0A0A0A]/98 backdrop-blur-lg z-30 border-t border-white/5 flex flex-col items-center justify-center p-6 md:p-12 overflow-y-auto"
          >
            <nav className="flex flex-col items-center justify-center gap-y-7 text-sm font-mono uppercase tracking-[0.25em]">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className="flex flex-col items-center gap-2.5 text-gray-400 hover:text-[#FFD700] hover:drop-shadow-[0_0_6px_rgba(255,215,0,0.4)] transition-all duration-300 cursor-pointer group"
                >
                  <item.icon className="w-5.5 h-5.5 text-gray-400 group-hover:text-[#FFD700] transition-colors duration-300" />
                  <span className="text-[11px] tracking-[0.2em]">{item.label}</span>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

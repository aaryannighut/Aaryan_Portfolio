"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";

// UI Components
import TerminalIntro from "@/components/ui/TerminalIntro";
import MouseFollower from "@/components/ui/MouseFollower";
import Particles from "@/components/ui/Particles";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import Navbar from "@/components/ui/Navbar";

// Sections
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);


  // Initialize Lenis smooth scroll after preloader completes
  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom cinematic ease
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] overflow-x-hidden select-none">
      
      {/* 1. Cinematic Terminal Preloader */}
      <AnimatePresence mode="wait">
        {loading && (
          <TerminalIntro key="preloader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. Main Portfolio Site Content */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full flex flex-col items-center"
        >
          {/* Scroll progress at top */}
          <ScrollIndicator />

          {/* Navigation Bar */}
          <Navbar />

          {/* Glowing cursor follower */}
          <MouseFollower />

          {/* Floating canvas dust particles in the background */}
          <Particles />

          {/* Section stack */}
          <div className="relative w-full z-10">
            <Hero />
            <About />
            <Services />
            <Projects />
            <Achievements />
            <Contact />
            <Footer />
          </div>
        </motion.div>
      )}
    </div>
  );
}

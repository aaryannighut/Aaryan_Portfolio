"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseFollower() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop with mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      
      const isInteractive = !!target.closest(
        "a, button, [role='button'], input, textarea, select, .interactive-hover"
      );
      setIsHovered(isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Handle client-side pointer-type check
  const [isFinePointer, setIsFinePointer] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsFinePointer(mediaQuery.matches);
  }, []);

  if (!isFinePointer) return null;

  return (
    <>
      {/* Dynamic Cursor Follower Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#FFD700] rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translate: "-50% -50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
      {/* Outer Glowing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#FFD700]/50 pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translate: "-50% -50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          backgroundColor: isHovered ? "rgba(255, 215, 0, 0.1)" : "rgba(255, 215, 0, 0)",
          borderColor: isHovered ? "rgba(255, 215, 0, 0.8)" : "rgba(255, 215, 0, 0.4)",
          boxShadow: isHovered
            ? "0 0 15px rgba(255, 215, 0, 0.4)"
            : "0 0 5px rgba(255, 215, 0, 0.1)",
        }}
        transition={{
          opacity: { duration: 0.15 },
          width: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
          height: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
          backgroundColor: { duration: 0.2 },
          borderColor: { duration: 0.2 },
          boxShadow: { duration: 0.2 },
        }}
      />
    </>
  );
}


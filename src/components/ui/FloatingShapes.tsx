"use client";

import React from "react";
import { motion } from "framer-motion";

// Original Shape 1: Glowing 3D Glassmorphic Moon/Crescent
export const MoonShape = () => (
  <svg viewBox="0 0 200 200" className="w-24 h-24 filter drop-shadow-[0_10px_20px_rgba(30,144,255,0.35)]">
    <defs>
      <radialGradient id="moon-grad" cx="70%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#ADFF2F" />
        <stop offset="45%" stopColor="#00FA9A" />
        <stop offset="70%" stopColor="#1E90FF" />
        <stop offset="100%" stopColor="#00008B" />
      </radialGradient>
    </defs>
    <path d="M130,40 A60,60 0 1,0 160,130 A75,75 0 1,1 130,40" fill="url(#moon-grad)" opacity="0.9" />
  </svg>
);

// Original Shape 2: 3D LEGO Block/Cube
export const CubeShape = () => (
  <svg viewBox="0 0 200 200" className="w-20 h-20 filter drop-shadow-[0_10px_20px_rgba(138,43,226,0.35)]">
    <defs>
      <linearGradient id="top-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DA70D6" />
        <stop offset="100%" stopColor="#8A2BE2" />
      </linearGradient>
      <linearGradient id="left-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8A2BE2" />
        <stop offset="100%" stopColor="#4B0082" />
      </linearGradient>
      <linearGradient id="right-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E6E6FA" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    {/* Top Face */}
    <polygon points="100,30 160,60 100,90 40,60" fill="url(#top-grad)" />
    {/* Left Face */}
    <polygon points="40,60 100,90 100,160 40,130" fill="url(#left-grad)" />
    {/* Right Face */}
    <polygon points="100,90 160,60 160,130 100,160" fill="url(#right-grad)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    {/* Round connector pegs to make it lego-like */}
    <ellipse cx="100" cy="45" rx="10" ry="5" fill="#DA70D6" />
    <ellipse cx="70" cy="60" rx="10" ry="5" fill="#C71585" />
    <ellipse cx="130" cy="60" rx="10" ry="5" fill="#BA55D3" />
    <ellipse cx="100" cy="75" rx="10" ry="5" fill="#8A2BE2" />
  </svg>
);

// Original Shape 3: 3D Smiley Face Sphere
export const SmileyShape = () => (
  <svg viewBox="0 0 200 200" className="w-20 h-20 filter drop-shadow-[0_10px_20px_rgba(255,105,180,0.35)]">
    <defs>
      <radialGradient id="smile-grad" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FFC0CB" />
        <stop offset="50%" stopColor="#FF1493" />
        <stop offset="100%" stopColor="#4A0E17" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="70" fill="url(#smile-grad)" opacity="0.85" />
    <circle cx="75" cy="85" r="8" fill="#FFFFFF" />
    <circle cx="125" cy="85" r="8" fill="#FFFFFF" />
    <path d="M65,115 Q100,150 135,115" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" fill="none" />
  </svg>
);

// 4. Coding Shape: 3D Glassmorphic Code Brackets
export const CodeShape = () => (
  <svg viewBox="0 0 200 200" className="w-20 h-20 sm:w-24 sm:h-24 filter drop-shadow-[0_12px_24px_rgba(6,182,212,0.35)]">
    <defs>
      <linearGradient id="code-plate-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(6, 182, 212, 0.22)" />
        <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
      </linearGradient>
      <linearGradient id="code-symbol-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22D3EE" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    {/* Isometric Glass Hexagon Plate */}
    <polygon
      points="100,30 160,65 160,135 100,170 40,135 40,65"
      fill="url(#code-plate-grad)"
      stroke="rgba(34, 211, 238, 0.35)"
      strokeWidth="1.5"
    />
    {/* Inner isometric border for depth */}
    <polygon
      points="100,38 152,68 152,130 100,161 48,130 48,68"
      fill="none"
      stroke="rgba(255, 255, 255, 0.1)"
      strokeWidth="1"
    />
    {/* Isometric < / > Symbol */}
    <g transform="translate(48, 58) scale(0.65)">
      {/* Left Bracket < */}
      <path
        d="M 40,30 L 15,50 L 40,70 L 40,60 L 25,50 L 40,40 Z"
        fill="url(#code-symbol-grad)"
        opacity="0.95"
      />
      {/* Center Slash / */}
      <path
        d="M 65,20 L 45,80 L 53,80 L 73,20 Z"
        fill="url(#code-symbol-grad)"
        opacity="0.95"
      />
      {/* Right Bracket > */}
      <path
        d="M 80,30 L 105,50 L 80,70 L 80,60 L 95,50 L 80,40 Z"
        fill="url(#code-symbol-grad)"
        opacity="0.95"
      />
    </g>
    {/* Small glowing specs */}
    <circle cx="100" cy="48" r="3.5" fill="#22D3EE" opacity="0.8" className="animate-pulse" />
    <circle cx="65" cy="140" r="3" fill="#3B82F6" opacity="0.7" />
    <circle cx="140" cy="85" r="2.5" fill="#22D3EE" opacity="0.6" />
  </svg>
);

// 5. AI Shape: 3D Glowing Neural Connection Network
export const AiShape = () => (
  <svg viewBox="0 0 200 200" className="w-20 h-20 sm:w-24 sm:h-24 filter drop-shadow-[0_12px_24px_rgba(168,85,247,0.35)]">
    <defs>
      <linearGradient id="ai-plate-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(168, 85, 247, 0.22)" />
        <stop offset="100%" stopColor="rgba(236, 72, 153, 0.05)" />
      </linearGradient>
      <linearGradient id="ai-node-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C084FC" />
        <stop offset="100%" stopColor="#F472B6" />
      </linearGradient>
    </defs>
    {/* Isometric Circular Glass Plate */}
    <ellipse
      cx="100"
      cy="100"
      rx="65"
      ry="65"
      fill="url(#ai-plate-grad)"
      stroke="rgba(192, 132, 252, 0.35)"
      strokeWidth="1.5"
      transform="rotate(-15 100 100)"
    />
    <ellipse
      cx="100"
      cy="100"
      rx="58"
      ry="58"
      fill="none"
      stroke="rgba(255, 255, 255, 0.1)"
      strokeWidth="1"
      transform="rotate(-15 100 100)"
    />
    {/* Neural Connection Node Network */}
    <g transform="translate(50, 50)">
      {/* Connection Lines */}
      <line x1="50" y1="50" x2="20" y2="35" stroke="rgba(244, 114, 182, 0.6)" strokeWidth="1.5" />
      <line x1="50" y1="50" x2="80" y2="35" stroke="rgba(192, 132, 252, 0.6)" strokeWidth="1.5" />
      <line x1="50" y1="50" x2="30" y2="75" stroke="rgba(192, 132, 252, 0.6)" strokeWidth="1.5" />
      <line x1="50" y1="50" x2="70" y2="75" stroke="rgba(244, 114, 182, 0.6)" strokeWidth="1.5" />
      <line x1="20" y1="35" x2="80" y2="35" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
      <line x1="30" y1="75" x2="70" y2="75" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />

      {/* Nodes */}
      {/* Central Core */}
      <circle cx="50" cy="50" r="11" fill="url(#ai-node-grad)" className="animate-pulse" />
      <circle cx="50" cy="50" r="5.5" fill="#FFFFFF" />

      {/* Outer Nodes */}
      <circle cx="20" cy="35" r="5.5" fill="#C084FC" />
      <circle cx="80" cy="35" r="5.5" fill="#F472B6" />
      <circle cx="30" cy="75" r="6.5" fill="#F472B6" />
      <circle cx="70" cy="75" r="5.5" fill="#C084FC" />
    </g>
  </svg>
);

// 6. ML Shape: 3D Stacked Model Layers
export const MlShape = () => (
  <svg viewBox="0 0 200 200" className="w-20 h-20 sm:w-24 sm:h-24 filter drop-shadow-[0_12px_24px_rgba(251,191,36,0.35)]">
    <defs>
      <linearGradient id="ml-layer-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(251, 191, 36, 0.35)" />
        <stop offset="100%" stopColor="rgba(245, 158, 11, 0.08)" />
      </linearGradient>
      <linearGradient id="ml-layer-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(251, 191, 36, 0.25)" />
        <stop offset="100%" stopColor="rgba(251, 191, 36, 0.04)" />
      </linearGradient>
    </defs>

    {/* Stacked Isometric Planes */}
    {/* Bottom Layer */}
    <g transform="translate(0, 35)">
      <polygon
        points="100,55 155,77 100,99 45,77"
        fill="url(#ml-layer-grad-2)"
        stroke="rgba(251, 191, 36, 0.2)"
        strokeWidth="1"
      />
      {/* Node dots */}
      <circle cx="80" cy="77" r="3" fill="#FBBF24" opacity="0.6" />
      <circle cx="120" cy="77" r="3" fill="#FBBF24" opacity="0.6" />
    </g>

    {/* Vertical connecting lines */}
    <line x1="100" y1="65" x2="100" y2="135" stroke="rgba(251, 191, 36, 0.35)" strokeDasharray="3,3" strokeWidth="1" />
    <line x1="75" y1="80" x2="75" y2="120" stroke="rgba(251, 191, 36, 0.25)" strokeDasharray="2,2" strokeWidth="1" />
    <line x1="125" y1="80" x2="125" y2="120" stroke="rgba(251, 191, 36, 0.25)" strokeDasharray="2,2" strokeWidth="1" />

    {/* Middle Layer */}
    <g transform="translate(0, 5)">
      <polygon
        points="100,55 155,77 100,99 45,77"
        fill="url(#ml-layer-grad-2)"
        stroke="rgba(251, 191, 36, 0.25)"
        strokeWidth="1.2"
      />
      <circle cx="100" cy="77" r="4.5" fill="#FBBF24" opacity="0.8" className="animate-pulse" />
    </g>

    {/* Top Layer */}
    <g transform="translate(0, -25)">
      <polygon
        points="100,55 155,77 100,99 45,77"
        fill="url(#ml-layer-grad-1)"
        stroke="rgba(251, 191, 36, 0.5)"
        strokeWidth="1.5"
      />
      <circle cx="100" cy="77" r="5" fill="#FFFFFF" />
      <circle cx="100" cy="77" r="3" fill="#F59E0B" />
    </g>
  </svg>
);

// Wrapper with floating motion effects
interface FloatingWrapperProps {
  children: React.ReactNode;
  duration?: number;
  yRange?: number[];
  xRange?: number[];
  rotateRange?: number[];
  className?: string;
}

export const FloatingWrapper = ({
  children,
  duration = 6,
  yRange = [0, -15, 0],
  xRange = [0, 8, 0],
  rotateRange = [0, 10, 0],
  className = ""
}: FloatingWrapperProps) => (
  <motion.div
    animate={{
      y: yRange,
      x: xRange,
      rotate: rotateRange
    }}
    transition={{
      repeat: Infinity,
      duration: duration,
      ease: "easeInOut"
    }}
    className={`select-none pointer-events-none ${className}`}
  >
    {children}
  </motion.div>
);

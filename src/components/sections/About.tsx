"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Database, Settings, Brain, BookOpen, Cloud } from "lucide-react";
import { skillsData } from "@/data/skills";
import { profileData } from "@/data/profile";
import { CodeShape, AiShape, MlShape, FloatingWrapper, MoonShape, CubeShape, SmileyShape } from "@/components/ui/FloatingShapes";

// Styling config for each skills category card
const categoryStyles: Record<string, { icon: React.ReactNode; bg: string; text: string; glow: string }> = {
  "Languages": {
    icon: <Code className="w-4 h-4" />,
    bg: "bg-blue-500/10 border-blue-500/10",
    text: "text-blue-400",
    glow: "hover:shadow-[0_12px_24px_rgba(59,130,246,0.22)] hover:border-blue-500/45"
  },
  "Frameworks": {
    icon: <Globe className="w-4 h-4" />,
    bg: "bg-emerald-500/10 border-emerald-500/10",
    text: "text-emerald-400",
    glow: "hover:shadow-[0_12px_24px_rgba(16,185,129,0.22)] hover:border-emerald-500/45"
  },
  "Databases": {
    icon: <Database className="w-4 h-4" />,
    bg: "bg-indigo-500/10 border-indigo-500/10",
    text: "text-indigo-400",
    glow: "hover:shadow-[0_12px_24px_rgba(99,102,241,0.22)] hover:border-indigo-500/45"
  },
  "Tools": {
    icon: <Settings className="w-4 h-4" />,
    bg: "bg-amber-500/10 border-amber-500/10",
    text: "text-amber-400",
    glow: "hover:shadow-[0_12px_24px_rgba(245,158,11,0.22)] hover:border-amber-500/45"
  },
  "AI Tools": {
    icon: <Brain className="w-4 h-4" />,
    bg: "bg-purple-500/10 border-purple-500/10",
    text: "text-purple-400",
    glow: "hover:shadow-[0_12px_24px_rgba(168,85,247,0.22)] hover:border-purple-500/45"
  },
  "CS Fundamentals": {
    icon: <BookOpen className="w-4 h-4" />,
    bg: "bg-rose-500/10 border-rose-500/10",
    text: "text-rose-400",
    glow: "hover:shadow-[0_12px_24px_rgba(244,63,94,0.25)] hover:border-rose-500/45"
  },
  "Cloud": {
    icon: <Cloud className="w-4 h-4" />,
    bg: "bg-cyan-500/10 border-cyan-500/10",
    text: "text-cyan-400",
    glow: "hover:shadow-[0_12px_24px_rgba(6,182,212,0.25)] hover:border-cyan-500/45"
  }
};

export default function About() {

  const aboutParagraphs = [
    "I am Aaryan Nighut, an AI & Full-Stack Developer driven by innovation and the pursuit of excellence. By maintaining a strong balance between academic achievements and hands-on technical experience, I continuously challenge myself to learn, grow, and create solutions that are both intelligent and impactful.",
    "I believe success is built through consistency, curiosity, and continuous improvement. My goal is to transform ideas into meaningful experiences that combine technology, creativity, and purpose."
  ];

  return (
    <section
      id="about"
      className="relative py-12 lg:py-16 px-6 md:px-12 lg:px-24 bg-[#0A0A0A] overflow-hidden"
    >
      {/* 3D Floating Objects Surrounding Section */}
      
      {/* Original Floating Moon (Top Left) */}
      <FloatingWrapper duration={6} className="absolute top-10 left-[5%] md:left-[10%] z-0 opacity-80">
        <MoonShape />
      </FloatingWrapper>

      {/* Original Floating LEGO Block (Top Right) */}
      <FloatingWrapper duration={5} yRange={[0, 12, 0]} rotateRange={[0, -8, 0]} className="absolute top-16 right-[5%] md:right-[10%] z-0 opacity-85">
        <CubeShape />
      </FloatingWrapper>

      {/* Original Floating Smiley (Bottom Left) */}
      <FloatingWrapper duration={7} yRange={[0, -10, 0]} xRange={[0, 8, 0]} rotateRange={[0, 5, 0]} className="absolute bottom-24 left-[3%] md:left-[8%] z-0 opacity-75">
        <SmileyShape />
      </FloatingWrapper>

      <div className="max-w-6xl mx-auto z-10 relative flex flex-col justify-center px-4 md:px-8">
        
        {/* Giant metallic hollow header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black italic tracking-tighter text-center uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 select-none"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}
          >
            About Me
          </motion.h2>
        </div>

        {/* Split Grid Layout (Portrait on left, Coding Panel & Bio on right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full mb-12">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-4 flex flex-col w-full max-w-sm mx-auto lg:max-w-none">
            {/* Portrait Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden border border-white/10 bg-black/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profileData.avatarUrl}
                alt="Aaryan Nighut Portrait"
                className="w-full h-full object-cover object-[54%_center] filter contrast-[1.05] transition-all duration-700 pointer-events-none scale-x-[-1] group-hover:scale-x-[-1.02] group-hover:scale-y-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 via-transparent to-transparent opacity-60 pointer-events-none" />
              {/* Scanner laser line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/35 shadow-[0_0_8px_rgba(255,255,255,0.4)] scan-line pointer-events-none" />
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid grid-cols-2 gap-2.5 mt-4 w-full"
            >
              {/* Stat 1: Hackathon Wins */}
              <div className="glass-card p-3 rounded-xl border border-white/5 bg-[#0D0D0D]/90 shadow-[0_8px_20px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between h-[60px] text-left hover:-translate-y-1 hover:border-[#FFD700]/35 hover:shadow-[0_12px_24px_rgba(255,215,0,0.08)] hover:bg-[#121212]/90 cursor-pointer group">
                <div className="text-xs font-bold text-[#FFD700] font-mono leading-none">01+</div>
                <div className="flex items-center justify-between text-gray-300 font-mono text-[9px] leading-none">
                  <span>Hackathon Wins</span>
                  <span className="group-hover:scale-125 transition-transform duration-300">🏆</span>
                </div>
              </div>

              {/* Stat 2: Projects Built */}
              <div className="glass-card p-3 rounded-xl border border-white/5 bg-[#0D0D0D]/90 shadow-[0_8px_20px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between h-[60px] text-left hover:-translate-y-1 hover:border-[#FFD700]/35 hover:shadow-[0_12px_24px_rgba(255,215,0,0.08)] hover:bg-[#121212]/90 cursor-pointer group">
                <div className="text-xs font-bold text-[#FFD700] font-mono leading-none">05+</div>
                <div className="flex items-center justify-between text-gray-300 font-mono text-[9px] leading-none">
                  <span>Projects Built</span>
                  <span className="group-hover:scale-125 transition-transform duration-300">💻</span>
                </div>
              </div>

              {/* Stat 3: Certifications */}
              <div className="glass-card p-3 rounded-xl border border-white/5 bg-[#0D0D0D]/90 shadow-[0_8px_20px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between h-[60px] text-left hover:-translate-y-1 hover:border-[#FFD700]/35 hover:shadow-[0_12px_24px_rgba(255,215,0,0.08)] hover:bg-[#121212]/90 cursor-pointer group">
                <div className="text-xs font-bold text-[#FFD700] font-mono leading-none">10+</div>
                <div className="flex items-center justify-between text-gray-300 font-mono text-[9px] leading-none">
                  <span>Certifications</span>
                  <span className="group-hover:scale-125 transition-transform duration-300">📜</span>
                </div>
              </div>

              {/* Stat 4: CGPA */}
              <div className="glass-card p-3 rounded-xl border border-white/5 bg-[#0D0D0D]/90 shadow-[0_8px_20px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between h-[60px] text-left hover:-translate-y-1 hover:border-[#FFD700]/35 hover:shadow-[0_12px_24px_rgba(255,215,0,0.08)] hover:bg-[#121212]/90 cursor-pointer group">
                <div className="text-xs font-bold text-[#FFD700] font-mono leading-none">9.71</div>
                <div className="flex items-center justify-between text-gray-300 font-mono text-[9px] leading-none">
                  <span>CGPA</span>
                  <span className="group-hover:scale-125 transition-transform duration-300">🎓</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Code Editor & Bio Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col gap-6 w-full text-left"
          >
            {/* Coding Panel Card (Code Execution Style) */}
            <div className="group glass-card w-full rounded-2xl border-[rgba(255,215,0,0.12)] bg-[#0D0D0D] overflow-hidden text-left shadow-[0_15px_45px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#FFD700]/35 hover:shadow-[0_25px_55px_rgba(255,215,0,0.12)]">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-black/40">
                <div className="flex items-center gap-2 text-white">
                  {/* Code Icon </ > */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#FFD700] transition-colors duration-300"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  <span className="font-sans font-semibold text-[10px] sm:text-xs tracking-wide text-gray-200 group-hover:text-white transition-colors duration-300">
                    JavaScript
                  </span>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-[9px] sm:text-[10px] md:text-[11px] leading-relaxed overflow-x-auto select-none bg-black/15">
                <div className="space-y-2">
                  {/* Initialization line */}
                  <div className="text-purple-400/90 font-light italic">
                    Initializing profile...
                  </div>

                  {/* Loading status steps */}
                  <div className="space-y-1 text-indigo-300/80">
                    <div>✓ Loading Academic Performance</div>
                    <div>✓ Loading Technical Skills</div>
                    <div>✓ Loading Problem Solving</div>
                    <div>✓ Loading Innovation</div>
                  </div>

                  {/* Object Code Block */}
                  <div className="whitespace-pre pt-2">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">aaryan</span> = {"{"}
                    {"\n  "}
                    <span className="text-amber-500">role</span>:{" "}
                    <span className="text-emerald-400">&quot;Computer Science &amp; Engineer (AIML)&quot;</span>,
                    {"\n  "}
                    <span className="text-amber-500">college</span>:{" "}
                    <span className="text-emerald-400">&quot;Lokmanya Tilak college of Engineering,Navi Mumbai&quot;</span>,
                    {"\n  "}
                    <span className="text-amber-500">location</span>:{" "}
                    <span className="text-emerald-400">&quot;Mumbai, Maharashtra&quot;</span>,
                    {"\n  "}
                    <span className="text-amber-500">passions</span>: [{" "}
                    <span className="text-emerald-400">&quot;AIML&quot;</span>,{" "}
                    <span className="text-emerald-400">&quot;Data scientiest&quot;</span>,{" "}
                    <span className="text-emerald-400">&quot;Full stack&quot;</span>{" "}
                    ]
                    {"\n};"}
                  </div>

                  {/* Success Execution Line */}
                  <div className="text-indigo-400/95 font-semibold pt-2">
                    Execution completed successfully ✓
                  </div>
                </div>
              </div>
            </div>

            {/* Biography Narrative below terminal */}
            <div className="text-left font-sans text-sm sm:text-base text-gray-300 font-light leading-relaxed space-y-6 px-1">
              <div className="font-mono text-[9px] text-gray-500 uppercase tracking-[0.25em] font-bold select-none">
                {"// Bio"}
              </div>
              {aboutParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Cards Grid */}
        <div id="skills" className="border-t border-white/5 pt-10 max-w-5xl mx-auto w-full text-left">
          <div className="mb-8 text-left">
            <h3 className="font-mono text-[10px] text-[#FFD700] uppercase tracking-[0.25em] font-bold select-none">
              {"// Technical Expertise"}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4.5">
            {skillsData.map((categoryGroup, index) => {
              const categoryName = categoryGroup.category;
              const mappedName = categoryName === "Tools" ? "Tools & Platforms" : categoryName === "AI Tools" ? "AI & GenAI" : categoryName;
              const style = categoryStyles[categoryName] || categoryStyles["Languages"];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                  className={`group relative glass-card p-5 rounded-2xl border border-white/5 bg-[#0C0C0C]/90 shadow-[0_10px_25px_rgba(0,0,0,0.55)] transition-all duration-300 flex flex-col justify-start hover:-translate-y-1.5 ${style.glow}`}
                >
                  {/* Top-left Icon */}
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-4 transition-all duration-300 ${style.bg} ${style.text}`}>
                    {style.icon}
                  </div>

                  {/* Title */}
                  <h4 className="font-sans font-bold text-sm text-white tracking-wide mb-3 group-hover:text-[#FFD700] transition-colors duration-300">
                    {mappedName}
                  </h4>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {categoryGroup.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-gray-400 rounded-md hover:border-[#FFD700]/30 hover:text-white hover:bg-white/[0.07] transition-all duration-200 select-none cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

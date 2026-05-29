"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Trophy, Award as CertIcon, Calendar, ExternalLink } from "lucide-react";
import { achievementsData } from "@/data/achievements";
import { CodeShape, MlShape, AiShape, FloatingWrapper } from "@/components/ui/FloatingShapes";

// Category configuration helper
const getCategoryConfig = (category: string) => {
  switch (category) {
    case "internship":
      return {
        label: "Internship",
        icon: Briefcase,
        colorClass: "bg-blue-500/10 text-blue-400 border-blue-500/30",
        glowColor: "rgba(59, 130, 246, 0.6)",
        cardBorder: "border-blue-500/10 hover:border-blue-500/45",
        titleHover: "group-hover:text-blue-400",
        lineGlow: "via-blue-400"
      };
    case "hackathon":
      return {
        label: "Hackathon",
        icon: Trophy,
        colorClass: "bg-purple-500/10 text-purple-400 border-purple-500/30",
        glowColor: "rgba(168, 85, 247, 0.6)",
        cardBorder: "border-purple-500/10 hover:border-purple-500/45",
        titleHover: "group-hover:text-purple-400",
        lineGlow: "via-purple-400"
      };
    case "certification":
      return {
        label: "Certification",
        icon: CertIcon,
        colorClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        glowColor: "rgba(16, 185, 129, 0.6)",
        cardBorder: "border-emerald-500/10 hover:border-emerald-500/45",
        titleHover: "group-hover:text-emerald-400",
        lineGlow: "via-emerald-400"
      };
    default:
      return {
        label: "Achievement",
        icon: Award,
        colorClass: "bg-[#FFD700]/10 text-[#FFD700] border-[#FFD700]/30",
        glowColor: "rgba(255, 215, 0, 0.6)",
        cardBorder: "border-[#FFD700]/10 hover:border-[#FFD700]/45",
        titleHover: "group-hover:text-[#FFD700]",
        lineGlow: "via-[#FFD700]"
      };
  }
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-12 lg:py-16 px-6 md:px-12 lg:px-24 bg-[#0A0A0A] border-b border-white/5 overflow-hidden"
    >
      {/* Background radial glowing effects */}
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-[#FFD700]/3 rounded-full blur-[100px] pointer-events-none animate-pulse" />

      {/* Floating 3D Shapes */}
      <FloatingWrapper duration={7.2} className="absolute top-[10%] lg:right-[3%] xl:right-[5%] z-0 opacity-75 hidden lg:block">
        <MlShape />
      </FloatingWrapper>
      <FloatingWrapper duration={6.8} className="absolute bottom-[15%] lg:left-[3%] xl:left-[5%] z-0 opacity-75 hidden lg:block">
        <CodeShape />
      </FloatingWrapper>

      {/* Header Container (Wider layout to prevent clipping of the long Achievements word) */}
      <div className="max-w-7xl mx-auto z-10 relative mb-8 text-center select-none px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 text-xs font-bold text-[#FFD700] uppercase tracking-widest mb-4"
        >
          <Trophy className="w-4 h-4" />
          <span>Milestones & Timeline</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[2.2rem] min-[375px]:text-[2.6rem] sm:text-7xl md:text-[6.5rem] lg:text-[8.5rem] xl:text-[9.5rem] font-black italic tracking-tighter text-center uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 select-none"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}
        >
          Achievements
        </motion.h2>
      </div>

      {/* Content Container (Standard 5xl size for cards timeline alignment) */}
      <div className="max-w-5xl mx-auto z-10 relative">
        {/* Timeline Container */}
        <div className="relative mt-8">
          
          {/* Vertical central stem (Hidden on mobile, centered on desktop) */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FFD700]/60 via-[#FFD700]/10 to-transparent" />

          {/* Timeline Milestones list */}
          <div className="space-y-4">
            {achievementsData.map((item, index) => {
              const config = getCategoryConfig(item.category);
              const CategoryIcon = config.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row relative ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  } justify-start pl-10 md:pl-0`}
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-2.5 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-150px" }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="w-5 h-5 rounded-full bg-[#0A0A0A] border-2 border-[#FFD700] flex items-center justify-center shadow-[0_0_10px_rgba(255,215,0,0.5)] group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
                    </motion.div>
                  </div>

                  {/* Card wrapper (alternating alignment) */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: (typeof window !== "undefined" && window.innerWidth < 768) ? 30 : isEven ? -50 : 50
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-1/2 text-left ${
                      isEven ? "md:pr-6" : "md:pl-6"
                    }`}
                  >
                    <div className={`group relative glass-card p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 border ${config.cardBorder}`}>
                      
                      {/* Timeline detail line indicator for desktop */}
                      <div
                        className={`hidden md:block absolute top-[28px] ${
                          isEven ? "-right-[9px] border-l-[9px]" : "-left-[9px] border-r-[9px]"
                        } border-y-[6px] border-y-transparent border-white/5 pointer-events-none`}
                      />

                      {/* Header Row: Category Badge & Date */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold border uppercase tracking-wider hover:scale-102 hover:border-[#FFD700]/40 transition-all duration-300 cursor-pointer ${config.colorClass}`}
                          >
                            <CategoryIcon className="w-3.5 h-3.5" />
                            <span>{config.label}</span>
                            <ExternalLink className="w-3 h-3 text-[#FFD700]" />
                          </a>
                        ) : (
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-semibold border uppercase tracking-wider ${config.colorClass}`}
                          >
                            <CategoryIcon className="w-3 h-3" />
                            <span>{config.label}</span>
                          </span>
                        )}
                        
                        <span className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-[#FFD700] opacity-60" />
                          <span>{item.date}</span>
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className={`text-lg font-bold text-white transition-colors duration-300 ${config.titleHover}`}>
                        {item.title}
                      </h3>
                      
                      <div className="text-xs font-semibold text-gray-400 font-mono mt-1 mb-3">
                        {item.organization}
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                        {item.description}
                      </p>

                      {/* Bottom decorative glowing overlay */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${config.lineGlow} to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                        style={{ boxShadow: `0 0 10px ${config.glowColor}` }}
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

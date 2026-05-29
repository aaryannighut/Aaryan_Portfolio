"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import { gsap } from "gsap";
import { CodeShape, MlShape, AiShape, FloatingWrapper } from "@/components/ui/FloatingShapes";

// Helper Component for Individual Project Cards
// Styling configuration for each project based on its id
const projectStyles: Record<
  string,
  {
    border: string;
    shadow: string;
    text: string;
    numberText: string;
    btnGlow: string;
    iconText: string;
    imageBorder: string;
    imageGlow: string;
    gridOverlay: string;
    dotBg: string;
    arrowHover: string;
    tagGlow: string;
    outerNeon: string;
  }
> = {
  "library-management": {
    border: "hover:border-blue-500/40",
    shadow: "hover:shadow-[0_15px_35px_rgba(59,130,246,0.22)]",
    text: "text-blue-400",
    numberText: "text-white/20 group-hover:text-blue-400/90",
    btnGlow: "hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/5",
    iconText: "text-blue-400",
    imageBorder: "group-hover:border-blue-500/50",
    imageGlow: "group-hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]",
    gridOverlay: "rgba(59,130,246,0.08)",
    dotBg: "bg-blue-400",
    arrowHover: "hover:border-blue-500/35 hover:text-blue-400",
    tagGlow: "group-hover:border-blue-500/10 group-hover:text-blue-300",
    outerNeon: "group-hover:border-blue-500/15"
  },
  "school-bus-management": {
    border: "hover:border-amber-500/40",
    shadow: "hover:shadow-[0_15px_35px_rgba(245,158,11,0.22)]",
    text: "text-amber-400",
    numberText: "text-white/20 group-hover:text-amber-400/90",
    btnGlow: "hover:border-amber-500/50 hover:text-amber-400 hover:bg-amber-500/5",
    iconText: "text-amber-400",
    imageBorder: "group-hover:border-amber-500/50",
    imageGlow: "group-hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]",
    gridOverlay: "rgba(245,158,11,0.08)",
    dotBg: "bg-amber-400",
    arrowHover: "hover:border-amber-500/35 hover:text-amber-400",
    tagGlow: "group-hover:border-amber-500/10 group-hover:text-amber-300",
    outerNeon: "group-hover:border-amber-500/15"
  },
  "alertexa": {
    border: "hover:border-purple-500/40",
    shadow: "hover:shadow-[0_15px_35px_rgba(168,85,247,0.22)]",
    text: "text-purple-400",
    numberText: "text-white/20 group-hover:text-purple-400/90",
    btnGlow: "hover:border-purple-500/50 hover:text-purple-400 hover:bg-purple-500/5",
    iconText: "text-purple-400",
    imageBorder: "group-hover:border-purple-500/50",
    imageGlow: "group-hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]",
    gridOverlay: "rgba(168,85,247,0.08)",
    dotBg: "bg-purple-400",
    arrowHover: "hover:border-purple-500/35 hover:text-purple-400",
    tagGlow: "group-hover:border-purple-500/10 group-hover:text-purple-300",
    outerNeon: "group-hover:border-purple-500/15"
  },
  "wanderlust": {
    border: "hover:border-rose-500/40",
    shadow: "hover:shadow-[0_15px_35px_rgba(244,63,94,0.22)]",
    text: "text-rose-400",
    numberText: "text-white/20 group-hover:text-rose-400/90",
    btnGlow: "hover:border-rose-500/50 hover:text-rose-400 hover:bg-rose-500/5",
    iconText: "text-rose-400",
    imageBorder: "group-hover:border-rose-500/50",
    imageGlow: "group-hover:shadow-[0_0_25px_rgba(244,63,94,0.25)]",
    gridOverlay: "rgba(244,63,94,0.08)",
    dotBg: "bg-rose-400",
    arrowHover: "hover:border-rose-500/35 hover:text-rose-400",
    tagGlow: "group-hover:border-rose-500/10 group-hover:text-rose-300",
    outerNeon: "group-hover:border-rose-500/15"
  },
  "mediai": {
    border: "hover:border-emerald-500/40",
    shadow: "hover:shadow-[0_15px_35px_rgba(16,185,129,0.22)]",
    text: "text-emerald-400",
    numberText: "text-white/20 group-hover:text-emerald-400/90",
    btnGlow: "hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/5",
    iconText: "text-emerald-400",
    imageBorder: "group-hover:border-emerald-500/50",
    imageGlow: "group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]",
    gridOverlay: "rgba(16,185,129,0.08)",
    dotBg: "bg-emerald-400",
    arrowHover: "hover:border-emerald-500/35 hover:text-emerald-400",
    tagGlow: "group-hover:border-emerald-500/10 group-hover:text-emerald-300",
    outerNeon: "group-hover:border-emerald-500/15"
  }
};

const defaultStyle = {
  border: "hover:border-[#FFD700]/40",
  shadow: "hover:shadow-[0_15px_35px_rgba(255,215,0,0.22)]",
  text: "text-[#FFD700]",
  numberText: "text-white/20 group-hover:text-[#FFD700]/90",
  btnGlow: "hover:border-[#FFD700]/50 hover:text-[#FFD700] hover:bg-[#FFD700]/5",
  iconText: "text-[#FFD700]",
  imageBorder: "group-hover:border-[#FFD700]/50",
  imageGlow: "group-hover:shadow-[0_0_25px_rgba(255,215,0,0.25)]",
  gridOverlay: "rgba(255,215,0,0.08)",
  dotBg: "bg-[#FFD700]",
  arrowHover: "hover:border-[#FFD700]/35 hover:text-[#FFD700]",
  tagGlow: "group-hover:border-[#FFD700]/10 group-hover:text-[#FFD700]/80",
  outerNeon: "group-hover:border-[#FFD700]/15"
};

function ProjectCard({ 
  project, 
  index, 
  isDesktop, 
  activeMobileIndex,
  onHoverChange,
  onClickMobile
}: { 
  project: typeof projectsData[0]; 
  index: number; 
  isDesktop: boolean; 
  activeMobileIndex: number;
  onHoverChange?: (idx: number) => void;
  onClickMobile?: (idx: number) => void;
}) {
  const [activeImgIndex, setActiveImgIndex] = React.useState(0);
  const images = project.screenshots && project.screenshots.length > 0 ? project.screenshots : [project.image];
  const cardStyle = projectStyles[project.id] || defaultStyle;
  const isActiveMobile = !isDesktop && activeMobileIndex === index;

  const borderClass = isActiveMobile ? cardStyle.border.replace(/hover:/g, "") : cardStyle.border;
  const shadowClass = isActiveMobile ? cardStyle.shadow.replace(/hover:/g, "") : cardStyle.shadow;
  const imageBorderClass = isActiveMobile ? cardStyle.imageBorder.replace(/group-hover:/g, "") : cardStyle.imageBorder;
  const imageGlowClass = isActiveMobile ? cardStyle.imageGlow.replace(/group-hover:/g, "") : cardStyle.imageGlow;
  const outerNeonClass = isActiveMobile ? cardStyle.outerNeon.replace(/group-hover:/g, "") : cardStyle.outerNeon;

  return (
    <div
      onMouseEnter={() => isDesktop && onHoverChange?.(index)}
      onClick={() => !isDesktop && onClickMobile?.(index)}
      className={`${
        isDesktop 
          ? "w-[31vw] max-w-[460px] flex-shrink-0 h-[530px] cursor-pointer" 
          : "w-[85vw] sm:w-[70vw] md:w-[55vw] max-w-[450px] flex-shrink-0 snap-center h-[470px] sm:h-[500px] cursor-pointer"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: isDesktop ? 0 : index * 0.1 }}
        className={`group relative bg-[#0D0D0D] border border-white/10 rounded-[24px] p-5 lg:p-6 overflow-hidden flex flex-col gap-3 lg:gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 h-full w-full ${
          isDesktop ? "hover:-translate-y-1.5" : ""
        } ${
          isActiveMobile ? "-translate-y-1.5" : ""
        } ${borderClass} ${shadowClass}`}
      >
        {/* Card Header (Mockup Style) */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4 shrink-0">
          <div className="flex items-center gap-4 text-left select-none">
            {/* Huge clean number */}
            <span className={`text-5xl sm:text-6xl font-black font-sans tracking-tighter leading-none transition-colors duration-300 ${
              isActiveMobile ? cardStyle.text : "text-white/90 group-hover:text-white"
            }`}>
              {String(index + 1).padStart(2, "0")}
            </span>
            
            {/* Title & Category stacked */}
            <div className="flex flex-col">
              <span className={`text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase transition-colors duration-300 ${cardStyle.text}`}>
                {project.category}
              </span>
              <h3 className="text-base sm:text-lg font-bold tracking-wider text-white uppercase leading-tight mt-0.5 group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>
            </div>
          </div>
 
          {/* Action Link buttons */}
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Prevent card activation on button click
                className={`px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-white/5 transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.02)] whitespace-nowrap ${
                  isActiveMobile ? cardStyle.btnGlow.replace(/hover:/g, "") : cardStyle.btnGlow
                }`}
              >
                <span>GitHub</span>
                <ExternalLink className={`w-3.5 h-3.5 transition-colors duration-300 ${cardStyle.iconText}`} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Prevent card activation on button click
                className={`px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-white/5 transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.02)] whitespace-nowrap ${
                  isActiveMobile ? cardStyle.btnGlow.replace(/hover:/g, "") : cardStyle.btnGlow
                }`}
              >
                <span>Live Demo</span>
                <ExternalLink className={`w-3.5 h-3.5 transition-colors duration-300 ${cardStyle.iconText}`} />
              </a>
            )}
          </div>
        </div>

        {/* Project Image Frame (mock screen preview) */}
        <div className={`group/image relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black/80 border border-white/5 transition-all duration-500 shrink-0 ${imageBorderClass} ${imageGlowClass}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[activeImgIndex]}
            alt={project.title}
            className={`w-full h-full object-contain filter contrast-110 transition-all duration-500 ${
              isActiveMobile 
                ? "grayscale-0 scale-105" 
                : "grayscale group-hover:grayscale-0 group-hover:scale-105"
            }`}
          />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent pointer-events-none" />

          {/* Left/Right Arrow navigation inside image frame */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveImgIndex((prev) => (prev - 1 + images.length) % images.length);
                }}
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white border border-white/10 transition-all flex items-center justify-center z-30 cursor-pointer hover:scale-105 ${
                  isActiveMobile ? cardStyle.arrowHover.replace(/hover:/g, "") : cardStyle.arrowHover
                }`}
                title="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveImgIndex((prev) => (prev + 1) % images.length);
                }}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white border border-white/10 transition-all flex items-center justify-center z-30 cursor-pointer hover:scale-105 ${
                  isActiveMobile ? cardStyle.arrowHover.replace(/hover:/g, "") : cardStyle.arrowHover
                }`}
                title="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Thumbnail switcher navigation inside image frame */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-full border border-white/10 z-30 select-none">
              {images.map((_, imgIdx) => (
                <button
                  key={imgIdx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveImgIndex(imgIdx);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeImgIndex === imgIdx 
                      ? `${cardStyle.dotBg} scale-125` 
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                  title={`View screen ${imgIdx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Description & Tags */}
        <div className="flex-1 flex flex-col justify-between text-left gap-3 min-h-0">
          <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className={`px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[10px] sm:text-xs font-mono text-gray-500 transition-all duration-300 ${
                  isActiveMobile ? "text-gray-300" : "group-hover:text-gray-300"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Subtle outer neon border trigger */}
        <div className={`absolute inset-0 rounded-[24px] border border-transparent pointer-events-none transition-colors duration-500 ${outerNeonClass}`} />
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  useEffect(() => {
    const checkBreakpoint = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);

    return () => {
      window.removeEventListener("resize", checkBreakpoint);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      // Reset scroll section translation on mobile
      gsap.set(scrollSectionRef.current, { x: 0 });
      return;
    }

    const scrollSection = scrollSectionRef.current;
    if (!scrollSection) return;

    const cards = scrollSection.children;
    if (cards.length === 0) return;

    const targetCard = cards[hoveredIndex] as HTMLElement;
    if (!targetCard) return;

    const containerWidth = window.innerWidth;
    const cardWidth = targetCard.offsetWidth;
    const cardOffsetLeft = targetCard.offsetLeft;

    // Calculate translation to center the hovered card in the viewport
    const targetX = (containerWidth / 2) - (cardOffsetLeft + cardWidth / 2);

    // Calculate maximum scroll bounds
    const trackWidth = scrollSection.scrollWidth;
    const maxScroll = Math.max(0, trackWidth - containerWidth);

    // Clamp the translation value
    const clampedX = Math.max(-maxScroll, Math.min(0, targetX));

    gsap.to(scrollSection, {
      x: clampedX,
      duration: 0.8,
      ease: "power2.out",
      overwrite: "auto",
    });
  }, [hoveredIndex, isDesktop]);

  // Dynamically update active index as user scrolls horizontally on mobile
  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (isDesktop) return;
    const scrollContainer = e.currentTarget;
    const scrollLeft = scrollContainer.scrollLeft;
    const containerWidth = scrollContainer.offsetWidth;
    const children = Array.from(scrollContainer.children);
    if (children.length === 0) return;

    let minDistance = Infinity;
    let closestIndex = 0;
    const containerCenter = scrollLeft + containerWidth / 2;

    children.forEach((child, idx) => {
      const el = child as HTMLElement;
      const childCenter = el.offsetLeft + el.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    setActiveMobileIndex(closestIndex);
  };

  // Scroll clicked card to the center of the viewport on mobile
  const handleMobileCardClick = (index: number) => {
    setActiveMobileIndex(index);
    const scrollContainer = scrollSectionRef.current;
    if (!scrollContainer) return;
    const children = Array.from(scrollContainer.children);
    const targetCard = children[index] as HTMLElement;
    if (!targetCard) return;

    const containerWidth = scrollContainer.offsetWidth;
    const cardWidth = targetCard.offsetWidth;
    const cardOffsetLeft = targetCard.offsetLeft;

    const targetScrollLeft = cardOffsetLeft - (containerWidth / 2) + (cardWidth / 2);

    scrollContainer.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth"
    });
  };

  return (
    <div id="projects" ref={containerRef} className="bg-[#0A0A0A] w-full overflow-hidden py-12 lg:py-16 relative">
      {/* Floating 3D Shapes */}
      <FloatingWrapper duration={6.8} className="absolute top-[10%] lg:left-[3%] xl:left-[5%] z-0 opacity-75 hidden lg:block">
        <CodeShape />
      </FloatingWrapper>
      <FloatingWrapper duration={6} className="absolute bottom-[10%] lg:right-[3%] xl:right-[5%] z-0 opacity-75 hidden lg:block">
        <AiShape />
      </FloatingWrapper>

      <div className="flex flex-col gap-6 w-full">
        
        {/* Giant outline section title */}
        <div className="max-w-6xl mx-auto w-full z-0 px-6 md:px-12 lg:px-24 mb-2 relative">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl sm:text-8xl md:text-9xl font-black italic tracking-tighter text-center uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 select-none"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}
            >
              Projects
            </motion.h2>
          </div>
        </div>

        {/* Horizontal scroll track (For Desktop and Mobile) */}
        <div
          ref={scrollSectionRef}
          onScroll={handleMobileScroll}
          className={`${
            isDesktop
              ? "flex gap-8 pl-[24vw] pr-[24vw] select-none items-center relative z-10 w-full py-4"
              : "flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-12 w-full py-4 mt-6 pb-8"
          }`}
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isDesktop={isDesktop}
              activeMobileIndex={activeMobileIndex}
              onHoverChange={setHoveredIndex}
              onClickMobile={handleMobileCardClick}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

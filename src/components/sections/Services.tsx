"use client";

import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "@/data/services";
import { CodeShape, AiShape, MlShape, FloatingWrapper } from "@/components/ui/FloatingShapes";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-12 lg:py-16 bg-[#0A0A0A] overflow-hidden text-white"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#FFD700]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] bg-[#FFD700]/[0.015] rounded-full blur-[150px] pointer-events-none" />

      {/* Floating 3D Shapes */}
      <FloatingWrapper duration={6.5} className="absolute top-[15%] lg:right-[3%] xl:right-[5%] z-0 opacity-75 hidden lg:block">
        <AiShape />
      </FloatingWrapper>
      <FloatingWrapper duration={7.2} yRange={[0, 12, 0]} rotateRange={[0, 8, 0]} className="absolute bottom-[20%] lg:left-[3%] xl:left-[5%] z-0 opacity-75 hidden lg:block">
        <MlShape />
      </FloatingWrapper>

      <div className="max-w-4xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Massive watermark style header */}
        <div className="text-center mb-8 select-none">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-center uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}
          >
            Services
          </motion.h2>
        </div>

        {/* Vertically Stacked Services Grid */}
        <div className="flex flex-col border-t border-white/10">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
              className="flex flex-row items-start gap-6 sm:gap-12 py-10 border-b border-white/10 hover:bg-white/[0.015] px-6 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Left Accent Glow line */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FFD700] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

              {/* Huge Numeric Prefix */}
              <div className="text-5xl sm:text-7xl font-black text-white/30 font-mono leading-none tracking-tighter select-none group-hover:text-[#FFD700] group-hover:scale-105 transition-all duration-300 pt-1">
                {service.id}
              </div>

              {/* Title & Narrative column */}
              <div className="flex flex-col text-left space-y-1.5 pt-1.5 sm:pt-2.5">
                <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-widest text-white/90 group-hover:text-[#FFD700] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-200 text-xs sm:text-sm font-light leading-relaxed max-w-xl transition-colors duration-300">
                  {service.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

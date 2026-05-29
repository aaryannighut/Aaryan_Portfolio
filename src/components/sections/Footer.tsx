"use client";

import React from "react";
import { socialsData } from "@/data/socials";
import { ArrowUp, Cpu, Home, User, Briefcase, FolderCode, Trophy, Mail as LucideMail } from "lucide-react";

// Custom SVG Brand Icons matching the Contact section
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <defs>
      <linearGradient id="insta-grad-footer" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F58529" />
        <stop offset="50%" stopColor="#DD2A7B" />
        <stop offset="100%" stopColor="#8134AF" />
      </linearGradient>
    </defs>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case "Github": return GithubIcon;
    case "Linkedin": return LinkedinIcon;
    case "Instagram": return InstagramIcon;
    case "Twitter": return TwitterIcon;
    case "Mail": return MailIcon;
    default: return MailIcon;
  }
};

export default function Footer() {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#0A0A0A] pt-6 pb-12 border-t border-white/5 z-10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Desktop Footer (hidden on mobile, visible on md+) */}
        <div className="hidden md:block">
          {/* Top Grid Area */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 items-start">
            
            {/* Brand/Identity Block */}
            <div className="col-span-1 md:col-span-6 space-y-4 text-left">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-lg sm:text-xl font-black italic tracking-wider text-white uppercase hover:text-[#FFD700] hover:scale-102 transition-all duration-300 cursor-pointer select-none"
              >
                Aaryan Nighut
              </button>
              <p className="text-gray-400 text-xs font-light max-w-sm leading-relaxed">
                AI & Full-Stack Developer driven by innovation and excellence. Transforming complex ideas into intelligent and cinematic digital experiences.
              </p>
            </div>

            {/* Navigation Links Column */}
            <div className="col-span-1 md:col-span-3 text-left space-y-4">
              <h4 className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                Navigation
              </h4>
              <ul className="space-y-2.5 font-sans text-xs text-gray-400">
                {[
                  { id: "hero", label: "Home", icon: Home },
                  { id: "about", label: "About Me", icon: User },
                  { id: "services", label: "Services", icon: Briefcase },
                  { id: "projects", label: "Projects", icon: FolderCode },
                  { id: "achievements", label: "Achievements", icon: Trophy },
                  { id: "contact", label: "Contact", icon: LucideMail }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-2 hover:text-[#FFD700] hover:translate-x-1.5 transition-all duration-300 cursor-pointer text-left group"
                    >
                      <item.icon className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#FFD700] transition-colors duration-300" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials Connection Column */}
            <div className="col-span-1 md:col-span-3 text-left space-y-4">
              <h4 className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                Social Nodes
              </h4>
              <div className="flex flex-wrap gap-2">
                {socialsData.map((social) => {
                  const IconComponent = getSocialIcon(social.iconName);
                  const isInstagram = social.name === "Instagram";
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center text-gray-400 transition-all duration-300 hover:-translate-y-1 group"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = isInstagram ? "#DD2A7B" : social.color;
                        e.currentTarget.style.borderColor = isInstagram ? "rgba(221, 42, 123, 0.4)" : `${social.color}40`;
                        e.currentTarget.style.boxShadow = isInstagram 
                          ? "0 4px 12px rgba(221, 42, 123, 0.35)" 
                          : `0 4px 12px ${social.color}40`;
                        if (isInstagram) {
                          e.currentTarget.style.background = "linear-gradient(45deg, rgba(245, 133, 41, 0.1), rgba(221, 42, 123, 0.1), rgba(129, 52, 175, 0.1))";
                        } else {
                          e.currentTarget.style.backgroundColor = `${social.color}0D`;
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "";
                        e.currentTarget.style.borderColor = "";
                        e.currentTarget.style.boxShadow = "";
                        e.currentTarget.style.background = "";
                        e.currentTarget.style.backgroundColor = "";
                      }}
                      title={social.name}
                    >
                      <IconComponent className={`w-4 h-4 transition-all duration-300 group-hover:scale-110 ${
                        isInstagram ? "group-hover:stroke-[url(#insta-grad-footer)]" : ""
                      }`} />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Divider line */}
          <div className="w-full h-[1px] bg-white/5 mb-6" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-[10px] text-gray-500">
            
            {/* Brand Signature */}
            <div className="flex items-center gap-2 select-none group/sig cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] shadow-[0_0_4px_#FFD700] group-hover/sig:scale-125 transition-transform duration-300" />
              <span className="group-hover/sig:text-[#FFD700] transition-colors duration-300">DEVELOPED BY AARYAN NIGHUT // 2026</span>
            </div>

            {/* Scroll to top button */}
            <button
              onClick={() => scrollToSection("hero")}
              className="group hover:text-[#FFD700] hover:border-[#FFD700]/30 hover:bg-[#FFD700]/5 hover:shadow-[0_0_12px_rgba(255,215,0,0.15)] transition-all duration-300 uppercase tracking-widest cursor-pointer flex items-center gap-1.5 border border-white/5 px-3 py-1.5 rounded-full bg-white/[0.01]"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform duration-300 text-[#FFD700]" />
            </button>

            {/* Simulated HUD specs */}
            <div className="flex gap-4 select-none">
              <span className="opacity-45 flex items-center gap-1">
                <Cpu className="w-3 h-3 animate-pulse text-[#FFD700]" />
                <span>PING: 12ms</span>
              </span>
              <span className="opacity-45">STATUS: ONLINE</span>
            </div>

          </div>
        </div>

        {/* Mobile Footer (visible on mobile, hidden on md+) */}
        <div className="block md:hidden text-center flex flex-col items-center justify-center pt-6 pb-2">
          {/* Brand Signature */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-base font-black italic tracking-wider text-white uppercase hover:text-[#FFD700] hover:scale-102 transition-all duration-300 cursor-pointer select-none"
          >
            Aaryan Nighut
          </button>
          
          {/* Subtitle / Role */}
          <p className="font-mono text-[9px] text-[#FFD700]/90 font-bold uppercase tracking-widest mt-2">
            AI &amp; FULL-STACK DEVELOPER
          </p>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-3.5 mt-6">
            {socialsData.map((social) => {
              const IconComponent = getSocialIcon(social.iconName);
              const isInstagram = social.name === "Instagram";
              return (
                <a
                  key={social.name + "-mobile"}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7.5 h-7.5 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center text-gray-400 transition-all duration-300 hover:-translate-y-0.5 group"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = isInstagram ? "#DD2A7B" : social.color;
                    e.currentTarget.style.borderColor = isInstagram ? "rgba(221, 42, 123, 0.4)" : `${social.color}40`;
                    e.currentTarget.style.boxShadow = isInstagram 
                      ? "0 4px 12px rgba(221, 42, 123, 0.35)" 
                      : `0 4px 12px ${social.color}40`;
                    if (isInstagram) {
                      e.currentTarget.style.background = "linear-gradient(45deg, rgba(245, 133, 41, 0.1), rgba(221, 42, 123, 0.1), rgba(129, 52, 175, 0.1))";
                    } else {
                      e.currentTarget.style.backgroundColor = `${social.color}0D`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                    e.currentTarget.style.background = "";
                    e.currentTarget.style.backgroundColor = "";
                  }}
                  title={social.name}
                >
                  <IconComponent className={`w-3.5 h-3.5 transition-all duration-300 group-hover:scale-110 ${
                    isInstagram ? "group-hover:stroke-[url(#insta-grad-footer)]" : ""
                  }`} />
                </a>
              );
            })}
          </div>

          {/* Divider line for mobile */}
          <div className="w-12 h-[1px] bg-white/5 mt-8 mb-6" />

          {/* Copyright Info */}
          <div className="font-mono text-[9px] text-gray-500 leading-relaxed tracking-wider">
            <div>© 2026 Aaryan Nighut</div>
            <div className="mt-0.5 opacity-60">All Rights Reserved.</div>
          </div>
        </div>

      </div>
    </footer>
  );
}

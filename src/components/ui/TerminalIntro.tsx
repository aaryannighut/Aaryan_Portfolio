"use client";

import React, { useState, useEffect } from "react";
import { Shield, Cpu } from "lucide-react";

const diagnosticPhrases = [
  "INITIALIZING COGNITIVE INTERFACE...",
  "CONNECTING PORTFOLIO DATA STREAMS...",
  "RETRIEVING BIOMETRIC TEMPLATE...",
  "SCANNING PORTRAIT IDENTIFIER...",
  "DECRYPTING PROJECTS & EXPERIENCE DATABASE...",
  "ANALYZING SKILLS AND SERVICE MATRICES...",
  "ESTABLISHING SECURE PROTOCOLS...",
  "PREPARING GOLDEN ACCENT EMISSION...",
  "DECRYPTION KEY ACCEPTED.",
  "ACCESS GRANTED. WELCOME, VISITOR."
];

interface TerminalIntroProps {
  onComplete: () => void;
}

export default function TerminalIntro({ onComplete }: TerminalIntroProps) {
  const [progress, setProgress] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const duration = 3500; // 3.5 seconds
    const intervalTime = 35;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const loadingInterval = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      // Simulating terminal logs based on current progress thresholds
      const phraseIndex = Math.min(
        Math.floor((currentProgress / 100) * diagnosticPhrases.length),
        diagnosticPhrases.length - 1
      );
      const currentPhrase = diagnosticPhrases[phraseIndex];

      if (currentPhrase) {
        setTerminalLogs((prev) => {
          if (!prev.includes(currentPhrase)) {
            return [...prev.slice(-4), currentPhrase]; // Keep last 5 logs
          }
          return prev;
        });
      }

      if (currentProgress === 100) {
        clearInterval(loadingInterval);
        setIsGlitching(true);
        setTimeout(() => {
          onComplete();
        }, 600); // Wait for glitch transition
      }
    }, intervalTime);

    return () => {
      clearInterval(loadingInterval);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0A] font-mono select-none transition-all duration-700 ${
        isGlitching ? "scale-105 opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Matrix-like lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none" />

      {/* Cybernetic HUD Frame */}
      <div className="relative w-[90%] max-w-[450px] p-6 glass-card border-[rgba(255,215,0,0.2)] rounded-lg flex flex-col items-center gap-6 overflow-hidden">
        {/* Neon Gold Corner Brackets */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#FFD700] rounded-tl" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#FFD700] rounded-tr" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#FFD700] rounded-bl" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#FFD700] rounded-br" />

        {/* HUD Top Bar */}
        <div className="w-full flex items-center justify-between border-b border-[rgba(255,215,0,0.1)] pb-2 text-[10px] text-[#FFD700] opacity-80">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 animate-pulse" />
            <span>SYSTEM SECURITY: ONLINE</span>
          </div>
          <div className="animate-pulse">PORT_LOAD_v2.0</div>
        </div>

        {/* Biometric Scanning Area */}
        <div className="relative w-48 h-48 rounded-full border-2 border-[rgba(255,215,0,0.15)] flex items-center justify-center p-2 bg-black/40 overflow-hidden shadow-[0_0_20px_rgba(255,215,0,0.05)]">
          {/* Target Reticle (spinning outline) */}
          <div className="absolute inset-0 border-2 border-dashed border-[#FFD700] opacity-35 rounded-full animate-[spin_40s_linear_infinite]" />
          <div className="absolute inset-2 border border-dotted border-[#FFD700] opacity-20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

          {/* User Profile Image */}
          <div className="relative w-full h-full rounded-full overflow-hidden filter grayscale brightness-90 contrast-110">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="Aaryan Portrait"
              className="w-full h-full object-cover object-center"
            />
            {/* Scanning line overlay */}
            <div className="absolute left-0 w-full h-[3px] bg-[#FFD700] shadow-[0_0_15px_#FFD700] scan-line" />
            {/* Scan Overlay Overlay Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(transparent_45%,rgba(10,10,10,0.85)_95%)] pointer-events-none" />
          </div>
        </div>

        {/* Biometric Readings */}
        <div className="w-full text-center text-xs space-y-1 text-gray-400">
          <div className="flex justify-between px-4 text-[10px]">
            <span>ID: <span className="text-[#FFD700]">AARYAN_NIGHUT</span></span>
            <span>MATCH: <span className="text-[#FFD700]">99.85%</span></span>
          </div>
          <div className="flex justify-between px-4 text-[10px]">
            <span>LOC: <span className="text-white">19.1970° N, 72.9635° E</span></span>
            <span>ROLE: <span className="text-white">DEVELOPER</span></span>
          </div>
        </div>

        {/* Progress Bar & Logs */}
        <div className="w-full space-y-3">
          <div className="flex justify-between items-center text-xs font-semibold">
            <span className="text-[#FFD700] animate-pulse">DECRYPTING PROTOCOLS</span>
            <span className="text-[#FFD700] text-glow-gold">{progress}%</span>
          </div>

          {/* Glowing bar */}
          <div className="w-full h-[6px] bg-white/5 rounded-full overflow-hidden border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-[#FFD700] shadow-[0_0_10px_#FFD700] transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Running Terminal Logs Terminal */}
          <div className="w-full min-h-[75px] max-h-[75px] bg-black/60 border border-[rgba(255,215,0,0.08)] p-2 rounded text-[9px] text-gray-500 overflow-y-auto leading-normal">
            {terminalLogs.map((log, index) => (
              <div
                key={index}
                className={`flex gap-1.5 items-center font-mono ${
                  index === terminalLogs.length - 1 ? "text-white text-glow-gold-strong" : "text-gray-500"
                }`}
              >
                {index === terminalLogs.length - 1 ? (
                  <Cpu className="w-2.5 h-2.5 text-[#FFD700] animate-spin" style={{ animationDuration: "3s" }} />
                ) : (
                  <span className="text-[#FFD700] opacity-50">&gt;&gt;</span>
                )}
                <span className="truncate">{log}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, ShieldCheck, Loader2 } from "lucide-react";
import { profileData } from "@/data/profile";
import { CodeShape, MlShape, AiShape, FloatingWrapper } from "@/components/ui/FloatingShapes";
import { socialsData } from "@/data/socials";

// Custom SVG Brand Icons because Lucide-React deprecated brand icons
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <defs>
      <linearGradient id="insta-grad" x1="0%" y1="100%" x2="100%" y2="0%">
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
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

// Icon mapping helper
const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case "Github":
      return GithubIcon;
    case "Linkedin":
      return LinkedinIcon;
    case "Instagram":
      return InstagramIcon;
    case "Twitter":
      return TwitterIcon;
    case "Mail":
      return Mail;
    default:
      return Mail;
  }
};

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [terminalMsg, setTerminalMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("sending");
    setTerminalMsg("ESTABLISHING ENCRYPTED SECURE CHANNEL...");

    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    const sentAt = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium"
    }) + " (IST)";

    try {
      let submissionPromise;
      if (key) {
        // Use Web3Forms (Zero Sponsor Ads, requires key in .env.local)
        submissionPromise = fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: key,
            name: formState.name,
            email: formState.email,
            message: formState.message,
            "Sent At": sentAt,
            subject: `New Portfolio Message from ${formState.name}`,
          }),
        });
      } else {
        // Use FormSubmit (Zero Config out-of-the-box fallback, contains Sponsor Ads)
        submissionPromise = fetch("https://formsubmit.co/ajax/335761d989c2444a47727489a7aae104", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            message: formState.message,
            "Sent At": sentAt,
            _subject: `New Portfolio Message from ${formState.name}`,
          }),
        });
      }

      await new Promise((resolve) => setTimeout(resolve, 800));
      setTerminalMsg("PACKETIZING FORM PAYLOAD...");

      await new Promise((resolve) => setTimeout(resolve, 800));
      setTerminalMsg("DISPATCHING TO MAIL GATEWAY...");

      const response = await submissionPromise;
      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true)) {
        setTerminalMsg("PAYLOAD TRANSMITTED. RESPONSE RECEIVED: 202 ACCEPTED.");
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => {
          setStatus("idle");
          setTerminalMsg("");
        }, 4000);
      } else {
        setTerminalMsg(`TRANSMISSION FAILED: ${data.message || "GATEWAY REJECTED"}`);
        setStatus("idle");
      }
    } catch {
      setTerminalMsg("CRITICAL ERROR: CONNECTION TIMEOUT.");
      setStatus("idle");
    }
  };

  return (
    <section
      id="contact"
      className="relative pt-12 pb-8 px-6 md:px-12 lg:px-24 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background neon glow */}
      <div className="absolute top-[40%] left-[5%] w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Floating 3D Shapes */}
      <FloatingWrapper duration={6.2} className="absolute top-[10%] lg:left-[3%] xl:left-[5%] z-0 opacity-75 hidden lg:block">
        <AiShape />
      </FloatingWrapper>
      <FloatingWrapper duration={7} className="absolute bottom-[15%] lg:right-[3%] xl:right-[5%] z-0 opacity-75 hidden lg:block">
        <CodeShape />
      </FloatingWrapper>

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-xs font-bold text-[#FFD700] uppercase tracking-widest mb-3"
          >
            <Mail className="w-4 h-4" />
            <span>Secure Connection Protocol</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white text-glow-gold"
          >
            Get In Touch
          </motion.h2>
          <div className="w-16 h-[2px] bg-[#FFD700] mx-auto mt-4 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Info & Social Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-10 text-left"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                Connection Nodes
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Feel free to reach out for project collaboration, job opportunities, or general tech discussion. I try my best to respond within 24 hours.
              </p>
            </div>

            {/* Direct contact info cards */}
            <div className="space-y-4 font-mono text-xs text-gray-300">
              
              {/* Location Card */}
              <div className="flex items-center gap-4 glass-card p-4 rounded-xl border border-white/5 group transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD700]/35 hover:shadow-[0_12px_24px_rgba(255,215,0,0.06)] hover:bg-[#121212]/90 cursor-default">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition-all duration-300">
                  <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <span className="text-gray-500 block mb-0.5 text-[9px] uppercase tracking-wider">LOCAL COORDINATE</span>
                  <span className="text-white text-sm font-sans">{profileData.location}</span>
                </div>
              </div>

              {/* Email Card */}
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-4 glass-card p-4 rounded-xl border border-white/5 group transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD700]/35 hover:shadow-[0_12px_24px_rgba(255,215,0,0.06)] hover:bg-[#121212]/90"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition-all duration-300">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <span className="text-gray-500 block mb-0.5 text-[9px] uppercase tracking-wider">SECURE E-MAIL</span>
                  <span className="text-white text-sm font-sans group-hover:text-[#FFD700] transition-colors duration-300">{profileData.email}</span>
                </div>
              </a>

            </div>

            {/* Social Grid */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest font-mono pl-1 text-left">
                Network Links
              </h4>
              
              <div className="grid grid-cols-5 gap-2 md:gap-3 max-w-[200px] sm:max-w-[240px] md:max-w-none">
                {socialsData.map((social) => {
                  const SocialIcon = getSocialIcon(social.iconName);

                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        y: -4, 
                        scale: 1.05,
                        color: social.name === "Instagram" ? "#DD2A7B" : social.color,
                        borderColor: social.name === "Instagram" ? "rgba(221, 42, 123, 0.4)" : `${social.color}40`,
                        boxShadow: social.name === "Instagram" 
                          ? "0 0 15px rgba(221, 42, 123, 0.35)" 
                          : `0 0 15px ${social.color}40`
                      }}
                      className="aspect-square rounded-lg md:rounded-xl glass-card border-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 relative group"
                    >
                      {/* Brand-color hover overlay background glow */}
                      <div
                        className="absolute inset-0 rounded-lg md:rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                        style={{ 
                          background: social.name === "Instagram"
                            ? "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)"
                            : social.color
                        }}
                      />
                      
                      <SocialIcon 
                        className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 group-hover:scale-110 ${
                          social.name === "Instagram" ? "group-hover:stroke-[url(#insta-grad)]" : ""
                        }`} 
                        style={{ strokeWidth: 1.8 }} 
                      />
                      
                      {/* Glowing dot for hover visual */}
                      <span 
                        className="absolute bottom-1 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                        style={{ backgroundColor: social.name === "Instagram" ? "#DD2A7B" : social.color }}
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[rgba(255,215,0,0.12)] bg-[#0D0D0D] shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#FFD700]/35 hover:shadow-[0_25px_50px_rgba(255,215,0,0.08)]">
              
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                
                {/* Name Input */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[10px] font-mono font-bold text-[#FFD700] uppercase tracking-widest pl-1">
                    Visitor Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    disabled={status === "sending"}
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 hover:border-white/20 focus:border-[#FFD700]/60 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#FFD700]/30 transition-all duration-300 placeholder:text-gray-600"
                  />
                </div>
 
                {/* Email Input */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[10px] font-mono font-bold text-[#FFD700] uppercase tracking-widest pl-1">
                    Email Node
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    disabled={status === "sending"}
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 hover:border-white/20 focus:border-[#FFD700]/60 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#FFD700]/30 transition-all duration-300 placeholder:text-gray-600"
                  />
                </div>
 
                {/* Message TextArea */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[10px] font-mono font-bold text-[#FFD700] uppercase tracking-widest pl-1">
                    Transmission Content
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    disabled={status === "sending"}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Type your message details here..."
                    className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 hover:border-white/20 focus:border-[#FFD700]/60 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#FFD700]/30 transition-all duration-300 placeholder:text-gray-600 resize-none"
                  />
                </div>

                {/* Simulated Terminal Status logs */}
                <AnimatePresence>
                  {status !== "idle" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-black/60 border border-[rgba(255,215,0,0.1)] p-3 rounded-lg font-mono text-[10px] text-gray-400 flex items-center gap-2"
                    >
                      {status === "sending" ? (
                        <Loader2 className="w-3.5 h-3.5 text-[#FFD700] animate-spin flex-shrink-0" />
                      ) : (
                        <ShieldCheck className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                      )}
                      <span className={status === "success" ? "text-green-400" : ""}>{terminalMsg}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending" || !formState.name || !formState.email || !formState.message}
                  className="w-full relative inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-[#FFD700] hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] disabled:opacity-40 disabled:hover:shadow-none text-black font-bold rounded-lg cursor-pointer transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

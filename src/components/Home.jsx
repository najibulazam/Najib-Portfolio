import React, { useState, useEffect } from "react";
import { FaBriefcase, FaLaptopCode, FaGlobeAmericas } from "react-icons/fa";
import { SiReact, SiDjango, SiFastapi, SiPython, SiPostgresql, SiDocker } from "react-icons/si";
import profileImg from "../assets/profile.webp";

const roles = [
  "Full Stack Developer",
  "Django & FastAPI Engineer",
  "AI & LLM Integration Specialist",
  "REST API Developer",
  "React Developer",
  "RAG Systems Builder"
];

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const currentRoleText = roles[currentRole];

    if (isTyping) {
      if (displayText.length < currentRoleText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 font-mono text-black dark:text-white overflow-hidden"
      aria-label="Home section with profile and roles"
    >
      {/* Modern Developer Background - Pure CSS */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-cyan-50/30 to-blue-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-black">
        {/* Animated Gradient Orbs - More Dynamic */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-400/15 to-purple-500/15 rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Floating Tech Stack Icons */}
        <div className="absolute top-1/4 left-1/3 text-cyan-400/30 text-3xl animate-particle-1">
          <SiReact />
        </div>
        <div className="absolute top-1/2 right-1/4 text-green-600/25 text-4xl animate-particle-2">
          <SiDjango />
        </div>
        <div className="absolute bottom-1/3 left-1/4 text-emerald-400/30 text-3xl animate-particle-3">
          <SiFastapi />
        </div>
        <div className="absolute top-2/3 right-1/3 text-blue-500/25 text-3xl animate-particle-4">
          <SiPython />
        </div>
        <div className="absolute top-1/5 right-1/5 text-indigo-500/35 text-2xl animate-particle-5">
          <SiPostgresql />
        </div>
        <div className="absolute bottom-1/4 right-2/3 text-blue-400/20 text-3xl animate-particle-6">
          <SiDocker />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]"></div>
        
        {/* Code-like Floating Elements - More Variety */}
        <div className="absolute top-1/4 left-1/4 text-cyan-500/10 dark:text-cyan-400/5 text-6xl font-mono animate-float-code">&lt;/&gt;</div>
        <div className="absolute top-2/3 right-1/4 text-purple-500/10 dark:text-purple-400/5 text-5xl font-mono animate-float-code-slow">{ }</div>
        <div className="absolute bottom-1/4 left-1/3 text-blue-500/10 dark:text-blue-400/5 text-4xl font-mono animate-float-code-slower">[ ]</div>
        <div className="absolute top-1/3 right-1/3 text-indigo-500/8 dark:text-indigo-400/4 text-3xl font-mono animate-float-code-reverse">=&gt;</div>
        <div className="absolute bottom-1/3 right-1/5 text-pink-500/8 dark:text-pink-400/4 text-4xl font-mono animate-float-code-alt">( )</div>
        
        {/* Gradient Lines - More Dynamic */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-scan"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent animate-scan-slow"></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/8 to-transparent animate-scan-reverse"></div>
        
        {/* Horizontal Scanning Lines */}
        <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/8 to-transparent animate-scan-horizontal"></div>
        <div className="absolute left-0 bottom-1/4 w-full h-px bg-gradient-to-r from-transparent via-purple-500/8 to-transparent animate-scan-horizontal-slow"></div>
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-500/10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-purple-500/10 animate-pulse-slow"></div>
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        
        {/* Radial Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-radial-fade"></div>
      </div>

      {/* Profile Image with Modern Effects */}
      <div className="relative z-10 group">
        {/* Animated Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-75 blur-2xl group-hover:opacity-100 animate-pulse"></div>
        
        {/* Rotating Border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-spin-slow p-1">
          <div className="w-full h-full rounded-full bg-white dark:bg-black"></div>
        </div>
        
        {/* Image Container */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-transparent group-hover:scale-105 transition-transform duration-500">
          <img
            src={profileImg}
            alt="Md Najib Ul Azam Mahi"
            className="w-full h-full object-cover rounded-full"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Name */}
      <h1 className="relative z-10 mt-8 text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-center px-4">
        <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-cyan-100 dark:to-white bg-clip-text text-transparent">
          Md Najib Ul Azam Mahi
        </span>
      </h1>

      {/* Headline - Clear Value Proposition */}
      <div className="relative z-10 mt-4 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Full-Stack Developer
          </span>
        </h2>
        <p className="mt-2 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium text-center">
          React • Next.js • Django • FastAPI • AI-Integrated Systems
        </p>
      </div>

      {/* Subheadline - What I Deliver */}
      {/* <p className="relative z-10 mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 text-center px-6 leading-relaxed">
        Building production-ready web applications with scalable REST APIs, modern frontends, and AI-powered features.
        Experience delivering end-to-end solutions from requirements to deployment.
      </p> */}

      {/* Floating Badges */}
      <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-3 max-w-2xl">
        <span className="group px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-xs sm:text-sm font-medium text-cyan-400 hover:scale-105 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2">
          <FaBriefcase className="text-base group-hover:rotate-12 transition-transform duration-300" />
          <span>Open to Work</span>
        </span>
        <span className="group px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full text-xs sm:text-sm font-medium text-purple-400 hover:scale-105 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center gap-2">
          <FaLaptopCode className="text-base group-hover:scale-110 transition-transform duration-300" />
          <span>Freelance Available</span>
        </span>
        <span className="group px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-full text-xs sm:text-sm font-medium text-green-400 hover:scale-105 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/50 flex items-center gap-2">
          <FaGlobeAmericas className="text-base group-hover:rotate-180 transition-transform duration-500" />
          <span>Remote Friendly</span>
        </span>
      </div>

      {/* CSS for Animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 40px); }
        }
        .animate-float-slower {
          animation: float-slower 25s ease-in-out infinite;
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(35px, 35px); }
        }
        .animate-float-reverse {
          animation: float-reverse 22s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.15; transform: translate(-50%, -50%) scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 15s ease-in-out infinite;
        }
        
        @keyframes float-code {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-20px) rotate(5deg); opacity: 0.05; }
        }
        .animate-float-code {
          animation: float-code 10s ease-in-out infinite;
        }
        
        @keyframes float-code-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-15px) rotate(-5deg); opacity: 0.05; }
        }
        .animate-float-code-slow {
          animation: float-code-slow 12s ease-in-out infinite;
        }
        
        @keyframes float-code-slower {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-25px) rotate(3deg); opacity: 0.05; }
        }
        .animate-float-code-slower {
          animation: float-code-slower 14s ease-in-out infinite;
        }
        
        @keyframes float-code-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.08; }
          50% { transform: translateY(20px) rotate(-3deg); opacity: 0.04; }
        }
        .animate-float-code-reverse {
          animation: float-code-reverse 11s ease-in-out infinite;
        }
        
        @keyframes float-code-alt {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.08; }
          50% { transform: translate(-10px, -18px) rotate(4deg); opacity: 0.04; }
        }
        .animate-float-code-alt {
          animation: float-code-alt 13s ease-in-out infinite;
        }
        
        @keyframes particle-1 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(100px, -50px); opacity: 0.6; }
          50% { transform: translate(150px, 20px); opacity: 0.3; }
          75% { transform: translate(50px, 70px); opacity: 0.5; }
        }
        .animate-particle-1 {
          animation: particle-1 25s ease-in-out infinite;
        }
        
        @keyframes particle-2 {
          0%, 100% { transform: translate(0, 0); opacity: 0.25; }
          33% { transform: translate(-80px, 60px); opacity: 0.5; }
          66% { transform: translate(-120px, -40px); opacity: 0.3; }
        }
        .animate-particle-2 {
          animation: particle-2 28s ease-in-out infinite;
        }
        
        @keyframes particle-3 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(90px, -80px); opacity: 0.6; }
        }
        .animate-particle-3 {
          animation: particle-3 22s ease-in-out infinite;
        }
        
        @keyframes particle-4 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.25; }
          50% { transform: translate(-70px, -60px) scale(1.5); opacity: 0.5; }
        }
        .animate-particle-4 {
          animation: particle-4 26s ease-in-out infinite;
        }
        
        @keyframes particle-5 {
          0%, 100% { transform: translate(0, 0); opacity: 0.35; }
          33% { transform: translate(60px, 80px); opacity: 0.6; }
          66% { transform: translate(-40px, 40px); opacity: 0.4; }
        }
        .animate-particle-5 {
          animation: particle-5 20s ease-in-out infinite;
        }
        
        @keyframes particle-6 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
          50% { transform: translate(100px, -70px) scale(1.3); opacity: 0.4; }
        }
        .animate-particle-6 {
          animation: particle-6 24s ease-in-out infinite;
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
        
        @keyframes scan-slow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan-slow {
          animation: scan-slow 10s linear infinite;
        }
        
        @keyframes scan-reverse {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
        .animate-scan-reverse {
          animation: scan-reverse 12s linear infinite;
        }
        
        @keyframes scan-horizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-scan-horizontal {
          animation: scan-horizontal 15s linear infinite;
        }
        
        @keyframes scan-horizontal-slow {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scan-horizontal-slow {
          animation: scan-horizontal-slow 18s linear infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .bg-radial-fade {
          background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.02) 100%);
        }
      `}</style>
    </section>
  );
}

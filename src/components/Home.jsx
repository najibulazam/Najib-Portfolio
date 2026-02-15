import React, { useState, useEffect } from "react";
import { FaBriefcase, FaLaptopCode, FaGlobeAmericas } from "react-icons/fa";
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
      {/* Clean Minimal Background */}
      <div className="absolute inset-0 bg-white dark:bg-black">
        {/* Subtle gradient accent */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Profile Image - Clean and Simple */}
      <div className="relative z-10 group mb-6 animate-fade-in">
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Simple border with image */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-cyan-500/30 group-hover:border-cyan-500/50 group-hover:scale-105 transition-all duration-300">
          <img
            src={profileImg}
            alt="Md Najib Ul Azam Mahi"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-center px-4 mb-3">
        Md Najib Ul Azam Mahi
      </h1>

      {/* Dynamic Role with Typing Effect */}
      <div className="relative z-10 h-8 sm:h-10 mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-500">
          {displayText}
          <span className="animate-pulse">|</span>
        </h2>
      </div>

      {/* Tech Stack - Clean Simple Line */}
      <p className="relative z-10 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 px-6">
        React • Next.js • Django • FastAPI • PostgreSQL • AI Integration
      </p>

      {/* Status Badges - Simplified */}
      <div className="relative z-10 flex flex-wrap justify-center gap-3">
        <span className="px-4 py-2 bg-white dark:bg-gray-900 border border-cyan-500/30 rounded-full text-xs sm:text-sm font-medium text-cyan-500 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 animate-fade-in" style={{animationDelay: '0.1s'}}>
          <FaBriefcase className="text-base" />
          <span>Open to Work</span>
        </span>
        <span className="px-4 py-2 bg-white dark:bg-gray-900 border border-purple-500/30 rounded-full text-xs sm:text-sm font-medium text-purple-500 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <FaLaptopCode className="text-base" />
          <span>Freelance Available</span>
        </span>
        <span className="px-4 py-2 bg-white dark:bg-gray-900 border border-green-500/30 rounded-full text-xs sm:text-sm font-medium text-green-500 hover:border-green-500/60 hover:shadow-lg hover:shadow-green-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 animate-fade-in" style={{animationDelay: '0.3s'}}>
          <FaGlobeAmericas className="text-base" />
          <span>Remote Friendly</span>
        </span>
      </div>
    </section>
  );
}

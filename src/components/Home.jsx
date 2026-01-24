import React, { useState, useEffect } from "react";
import { FaBriefcase, FaLaptopCode, FaGlobeAmericas } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";
import AnimatedBackground from "../AnimatedBackground";

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
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 font-mono text-black dark:text-white bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900 transition-colors overflow-hidden"
      aria-label="Home section with profile and roles"
    >
      <AnimatedBackground />

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

      {/* Name with Gradient and Shadow */}
      <h1 className="relative z-10 mt-8 text-2xl sm:text-3xl md:text-5xl font-bold tracking-wide text-center px-4 group">
        <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-cyan-100 dark:to-white bg-clip-text text-transparent drop-shadow-lg">
          Md Najib Ul Azam Mahi
        </span>
        {/* Animated Underline */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out"></div>
      </h1>

      {/* Typing Animation with Enhanced Styling */}
      <div className="relative z-10 mt-6 min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem]">
        <div className="relative inline-block">
          {/* Glow Effect Behind Text */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl"></div>
          
          {/* Typing Text */}
          <div className="relative text-lg sm:text-xl md:text-2xl font-semibold">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {displayText}
            </span>
            <span className="text-cyan-400 animate-pulse ml-0.5">|</span>
          </div>
        </div>
      </div>

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

      {/* CSS for Slow Spin Animation */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}

import React, { useState, useEffect } from "react";
import profileImg from "../assets/profile.png";
import AnimatedBackground from "../AnimatedBackground";

const roles = [
  "Backend Developer",
  "API Specialist",
  "Django & FastAPI Developer",
  "AI/ML Enthusiast",
  "Tech Explorer",
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

      <div className="relative z-10 w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden">
        <img
          src={profileImg}
          alt="Md Najib Ul Azam Mahi"
          className="w-full h-full object-cover rounded-full border-4 border-cyan-400"
        />
      </div>

      <h1 className="relative z-10 mt-8 text-3xl sm:text-5xl font-bold tracking-wide text-black dark:text-white">
        Md Najib Ul Azam Mahi
      </h1>

      <div className="relative z-10 mt-4 text-xl sm:text-2xl text-cyan-400 h-8">
        {displayText}
        <span className="animate-pulse">|</span>
      </div>
    </section>
  );
}

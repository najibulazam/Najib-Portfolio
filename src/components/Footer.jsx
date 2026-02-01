import React from 'react';
import { FaHeart, FaCode, FaCoffee, FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-8 text-center bg-gradient-to-t from-black via-gray-900 to-black border-t border-cyan-500/20 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 animate-pulse"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="flex flex-col items-center gap-4">
          {/* Made with Love Section */}
          <div className="flex items-center gap-2 text-sm text-gray-400 group">
            <span>Made with</span>
            <FaHeart className="text-red-500 group-hover:scale-125 transition-transform duration-300 animate-pulse" />
            <span>and</span>
            <FaCoffee className="text-amber-500 group-hover:rotate-12 transition-transform duration-300" />
            <span>using</span>
            <FaCode className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Divider */}
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            <span className="text-gray-400">© {new Date().getFullYear()}</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
              Md Najib Ul Azam Mahi
            </span>
            {' '}<span className="text-gray-400">• All rights reserved.</span>
          </p>

          {/* Quick Links & Social */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/najibulazam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-500 hover:text-cyan-400 transition-colors duration-300 hover:scale-105 transform"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-lg" />
                <span className="text-xs">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/najibulazam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-500 hover:text-cyan-400 transition-colors duration-300 hover:scale-105 transform"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-lg" />
                <span className="text-xs">LinkedIn</span>
              </a>
              <a 
                href="mailto:najibulazammahi@gmail.com"
                className="flex items-center gap-1.5 text-gray-500 hover:text-cyan-400 transition-colors duration-300 hover:scale-105 transform"
                aria-label="Email Contact"
              >
                <FaEnvelope className="text-lg" />
                <span className="text-xs">Email</span>
              </a>
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-700"></div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs text-gray-500 hover:text-cyan-400 transition-all duration-300 px-3 py-1.5 rounded-full border border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/5"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <FaArrowUp className="text-sm group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

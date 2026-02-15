import React from 'react';
import { FaHeart, FaCode, FaCoffee, FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 text-center bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="flex flex-col items-center gap-4">
          {/* Made with Love Section */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>and</span>
            <FaCoffee className="text-amber-500" />
            <span>using</span>
            <FaCode className="text-cyan-500" />
          </div>

          {/* Divider */}
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <span>© {new Date().getFullYear()}</span>{' '}
            <span className="text-cyan-500 font-semibold">
              Md Najib Ul Azam Mahi
            </span>
            {' '}<span>• All rights reserved.</span>
          </p>

          {/* Quick Links & Social */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/najibulazam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-500 hover:scale-110 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-lg" />
                <span className="text-xs">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/najibulazam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-500 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-lg" />
                <span className="text-xs">LinkedIn</span>
              </a>
              <a 
                href="mailto:najibulazammahi@gmail.com"
                className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-500 hover:scale-110 transition-all duration-300"
                aria-label="Email Contact"
              >
                <FaEnvelope className="text-lg" />
                <span className="text-xs">Email</span>
              </a>
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-700"></div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-500 hover:scale-105 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <FaArrowUp className="text-sm hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

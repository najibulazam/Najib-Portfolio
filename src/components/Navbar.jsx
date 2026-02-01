import React, { useState, useEffect } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import logo from '../assets/dev-logo.svg';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'extracurriculars', label: 'Activities' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      let current = 'home';

      const sections = NAV_ITEMS.map(({ id }) => {
        const el = document.getElementById(id);
        return el ? { id, top: el.offsetTop, bottom: el.offsetTop + el.offsetHeight } : null;
      }).filter(Boolean);

      for (const section of sections) {
        if (scrollPos >= section.top && scrollPos < section.bottom) {
          current = section.id;
          break;
        }
      }

      setActive(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 80;
      const offset = el.offsetTop - navbarHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/30 dark:bg-black/30 backdrop-blur-2xl border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 sm:px-12 h-20 font-mono text-black dark:text-white">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <button 
            onClick={() => scrollTo('home')}
            className="group flex items-center gap-3 text-xl font-bold cursor-pointer select-none hover:scale-105 transition-transform duration-300 bg-transparent border-0 outline-none"
            aria-label="Go to home section"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur-sm opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <img src={logo} alt="Najib Logo" className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-lg" />
            </div>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-xl sm:text-2xl">Najib</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-2">
              {NAV_ITEMS.map(({ id, label }) => (
                <li
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`relative cursor-pointer py-2 px-3 rounded-lg group transition-all duration-300 ${
                    active === id 
                      ? 'text-cyan-400' 
                      : 'hover:text-cyan-400'
                  }`}
                >
                  <span className="relative z-10 text-sm font-medium">{label}</span>
                  <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg transition-all duration-300 ${
                    active === id 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                  }`}></div>
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ${
                    active === id 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}></div>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a 
                href="https://github.com/najibulazam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative flex items-center gap-1.5 text-cyan-500 hover:text-cyan-400 transition-all duration-300 group px-2 py-1 rounded-lg hover:bg-cyan-500/10"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-lg" />
                <span className="text-xs font-medium hidden lg:inline">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/najibulazam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative flex items-center gap-1.5 text-cyan-500 hover:text-cyan-400 transition-all duration-300 group px-2 py-1 rounded-lg hover:bg-cyan-500/10"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-lg" />
                <span className="text-xs font-medium hidden lg:inline">LinkedIn</span>
              </a>
            </div>

            {/* Resume Button */}
            <a
              href="/Md_Najib_Ul_Azam_Mahi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-5 py-2.5 rounded-lg border border-purple-400/30 hover:border-purple-400/60 hover:scale-105 shadow-md hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Resume</span>
              <FaDownload className="relative z-10 text-sm group-hover:translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-3xl text-cyan-400 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-2 hover:bg-cyan-500/10 transition-all duration-300"
          >
            {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-xl flex flex-col space-y-4 py-6 px-8 font-mono text-white text-lg absolute w-full top-20 left-0 z-50 animate-slideDown border-b border-cyan-500/30 shadow-xl shadow-cyan-500/10">
          {NAV_ITEMS.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative cursor-pointer py-2 px-3 rounded-lg group transition-all duration-300 ${
                active === id ? 'text-cyan-400' : 'hover:text-cyan-400'
              }`}
            >
              <span className="relative z-10">{label}</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg transition-all duration-300 ${
                active === id 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
              }`}></div>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ${
                active === id 
                  ? 'w-full' 
                  : 'w-0 group-hover:w-full'
              }`}></div>
            </li>
          ))}

          <div className="mt-6 flex justify-center gap-6">
            <a 
              href="https://github.com/najibulazam" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-2xl" />
              <span className="text-xs font-medium">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/najibulazam" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-2xl" />
              <span className="text-xs font-medium">LinkedIn</span>
            </a>
          </div>

          <a
            href="/Md_Najib_Ul_Azam_Mahi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group mt-4 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-4 py-2 rounded-lg border border-purple-400/30 hover:border-purple-400/60 shadow-md hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 text-center flex items-center justify-center gap-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Resume</span>
            <FaDownload className="relative z-10 text-base" />
          </a>
        </ul>
      )}

      {/* Animation */}
      <style>{`
        @keyframes slideDown {
          0% { transform: scaleY(0); opacity: 0; }
          100% { transform: scaleY(1); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease forwards;
          transform-origin: top;
        }
      `}</style>
    </header>
  );
}

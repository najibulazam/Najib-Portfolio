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
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 sm:px-12 h-20 font-mono text-black dark:text-white">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <button 
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 text-xl font-bold cursor-pointer select-none hover:opacity-80 hover:scale-105 transition-all duration-300 bg-transparent border-0 outline-none"
            aria-label="Go to home section"
          >
            <img src={logo} alt="Najib Logo" className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg" />
            <span className="text-cyan-500 text-xl sm:text-2xl">Najib</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-2">
              {NAV_ITEMS.map(({ id, label }) => (
                <li
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`cursor-pointer py-2 px-3 rounded-lg transition-all duration-300 ${
                    active === id 
                      ? 'text-cyan-500 bg-cyan-500/5' 
                      : 'hover:text-cyan-500 hover:bg-cyan-500/5'
                  }`}
                >
                  <span className="text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <a 
                href="https://github.com/najibulazam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 text-cyan-500 hover:text-cyan-600 transition-colors duration-300 px-2 py-1 rounded-lg hover:bg-cyan-500/5"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-lg" />
                <span className="text-xs font-medium hidden lg:inline">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/najibulazam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 text-cyan-500 hover:text-cyan-600 transition-colors duration-300 px-2 py-1 rounded-lg hover:bg-cyan-500/5"
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
              className="flex items-center gap-2 text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 px-5 py-2.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
            >
              <span>Resume</span>
              <FaDownload className="text-sm" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-3xl text-cyan-500 hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-2 transition-colors duration-300"
          >
            {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 flex flex-col space-y-4 py-6 px-8 font-mono text-black dark:text-white text-lg absolute w-full top-20 left-0 z-50">
          {NAV_ITEMS.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => scrollTo(id)}
              className={`cursor-pointer py-2 px-3 rounded-lg transition-all duration-300 ${
                active === id ? 'text-cyan-500 bg-cyan-500/5' : 'hover:text-cyan-500 hover:bg-cyan-500/5'
              }`}
            >
              <span>{label}</span>
            </li>
          ))}

          <div className="mt-6 flex justify-center gap-6">
            <a 
              href="https://github.com/najibulazam" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-1 text-cyan-500 hover:text-cyan-600 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-2xl" />
              <span className="text-xs font-medium">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/najibulazam" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-1 text-cyan-500 hover:text-cyan-600 transition-colors duration-300"
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
            className="mt-4 text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2"
          >
            <span>Resume</span>
            <FaDownload className="text-base" />
          </a>
        </ul>
      )}
    </header>
  );
}

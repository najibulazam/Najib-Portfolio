import React, { useState, useEffect } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'extracurriculars', label: 'Extracurriculars' },
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
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors">
      <nav className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between h-16 font-mono text-black dark:text-white">
        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer select-none" onClick={() => scrollTo('home')}>
          Najib
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-6">
            {NAV_ITEMS.map(({ id, label }) => (
              <li
                key={id}
                onClick={() => scrollTo(id)}
                className={`cursor-pointer py-2 px-1 border-b-2 ${
                  active === id ? 'border-cyan-400' : 'border-transparent'
                } hover:border-cyan-400 transition`}
              >
                {label}
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 text-2xl text-cyan-500 ml-4">
            <a href="https://github.com/najibulazam" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-black dark:hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/najibulazam" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-black dark:hover:text-white transition">
              <FaLinkedin />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="/Md_Najib_Ul_Azam_Mahi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-cyan-600 border border-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-600 hover:text-white transition duration-300"
          >
            Resume
            <FaDownload className="text-base" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden ml-4 text-3xl focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
        >
          {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden bg-black/90 backdrop-blur-md flex flex-col space-y-4 py-6 px-8 font-mono text-white text-lg absolute w-full top-16 left-0 animate-slideDown">
          {NAV_ITEMS.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => scrollTo(id)}
              className={`cursor-pointer py-2 px-1 border-b-2 ${
                active === id ? 'border-cyan-400' : 'border-transparent'
              } hover:border-cyan-400 transition`}
            >
              {label}
            </li>
          ))}

          <div className="mt-6 flex justify-center space-x-8 text-3xl text-cyan-400">
            <a href="https://github.com/najibulazam" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/najibulazam" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
              <FaLinkedin />
            </a>
          </div>

          <a
            href="/Md_Najib_Ul_Azam_Mahi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition duration-300 text-center"
          >
            Resume
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

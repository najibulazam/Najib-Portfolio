import React, { useState, useEffect } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
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
        const element = document.getElementById(id);
        return element
          ? {
              id,
              offsetTop: element.offsetTop,
              offsetBottom: element.offsetTop + element.offsetHeight,
            }
          : null;
      }).filter(Boolean);

      for (const section of sections) {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetBottom) {
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
      const targetPosition = el.offsetTop - navbarHeight;
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth',
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/70 backdrop-blur-md transition-colors border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between h-16 font-mono text-black dark:text-white">
        {/* Logo or Name */}
        <div className="text-xl font-bold cursor-pointer select-none" onClick={() => scrollTo('home')}>
          Najib
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8">
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
          <div className="flex space-x-6 text-2xl text-cyan-400">
            <a
              href="https://github.com/najibulazam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hover:text-cyan-600 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/najibulazam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hover:text-cyan-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle Mobile Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden ml-4 text-3xl focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
        >
          {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden bg-black/90 dark:bg-black/90 backdrop-blur-md flex flex-col space-y-4 py-6 px-8 font-mono text-white text-lg absolute w-full top-16 left-0 transition-transform origin-top animate-slideDown">
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
          {/* Social Icons at bottom of mobile menu */}
          <div className="mt-6 flex justify-center space-x-8 text-3xl text-cyan-400">
            <a
              href="https://github.com/najibulazam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/najibulazam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </ul>
      )}

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

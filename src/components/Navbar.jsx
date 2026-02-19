import { useState, useEffect } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import logo from '../assets/dev-logo.svg';
import PrimaryButton from './PrimaryButton';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'leadership', label: 'Leadership' },
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
      const navbarHeight = 64;
      const offset = el.offsetTop - navbarHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      <nav className="container-base !max-w-7xl pt-4">
        <div className="nav-shell h-16 px-4 sm:px-6 flex items-center justify-between font-mono text-black dark:text-white">
          {/* Logo */}
          <button 
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 text-xl font-bold cursor-pointer select-none hover:opacity-80 hover:scale-105 transition-all duration-300 bg-transparent border-0 outline-none"
            aria-label="Go to home section"
          >
            <img src={logo} alt="Najib Logo" className="h-8 w-8 sm:h-8 sm:w-8 rounded-lg" />
            <span className="text-accent text-xl sm:text-2xl">Najib</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`nav-link py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-300 bg-transparent border-0 ${
                      active === id
                        ? 'text-accent nav-active'
                        : 'text-gray-600 hover:text-accent'
                    }`}
                  >
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <a 
                href="https://github.com/najibulazam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 text-accent hover:text-accent-hover transition-colors duration-300 px-2 py-1 rounded-lg hover:bg-accent-tint"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-lg" />
                <span className="text-xs font-medium hidden lg:inline">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/najibulazam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 text-accent hover:text-accent-hover transition-colors duration-300 px-2 py-1 rounded-lg hover:bg-accent-tint"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-lg" />
                <span className="text-xs font-medium hidden lg:inline">LinkedIn</span>
              </a>
            </div>

            {/* Resume Button */}
            <PrimaryButton
              href="/Md_Najib_Ul_Azam_Mahi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              icon={<FaDownload className="text-sm" />}
              aria-label="Download Resume"
            >
              Resume
            </PrimaryButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-3xl text-accent hover:text-accent-hover focus:outline-none focus:ring-2 focus:ring-accent rounded-lg p-2 transition-colors duration-300"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul id="mobile-menu" className="md:hidden nav-shell flex flex-col space-y-2 py-5 px-6 font-mono text-black dark:text-white text-base absolute w-[calc(100%-3rem)] left-6 top-[5rem] z-50">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-300 bg-transparent border-0 ${
                  active === id ? 'text-accent bg-accent-tint' : 'hover:text-accent hover:bg-accent-tint'
                }`}
              >
                <span>{label}</span>
              </button>
            </li>
          ))}

          <div className="mt-6 flex justify-center gap-6">
            <a 
              href="https://github.com/najibulazam" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-1 text-accent hover:text-accent-hover transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-2xl" />
              <span className="text-xs font-medium">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/najibulazam" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-1 text-accent hover:text-accent-hover transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-2xl" />
              <span className="text-xs font-medium">LinkedIn</span>
            </a>
          </div>

          <PrimaryButton
            href="/Md_Najib_Ul_Azam_Mahi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            icon={<FaDownload className="text-base" />}
            aria-label="Download Resume"
            className="mt-4 w-full justify-center"
          >
            Resume
          </PrimaryButton>
        </ul>
      )}
    </header>
  );
}

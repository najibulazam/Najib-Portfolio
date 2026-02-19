import { FaHeart, FaCode, FaCoffee, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-ui bg-footer-surface backdrop-blur font-mono text-black dark:text-white">
      <div className="container-base py-8 flex flex-wrap justify-between items-start gap-8">

        {/* ── Left block: identity + social ── */}
        <div className="flex flex-col items-start gap-5 w-full sm:w-auto">
          {/* Branding */}
          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold text-accent">Md Najib Ul Azam Mahi</span>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <FaCoffee className="text-amber-500" />
              <FaCode className="text-accent" />
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/najibulazam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-500 hover:text-accent hover:scale-110 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-xl" />
              <span className="text-xs">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/najibulazam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-500 hover:text-accent hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-xl" />
              <span className="text-xs">LinkedIn</span>
            </a>
            <a
              href="mailto:azam.mdnajibul@gmail.com"
              className="flex items-center gap-1.5 text-gray-500 hover:text-accent hover:scale-110 transition-all duration-300"
              aria-label="Email Contact"
            >
              <FaEnvelope className="text-xl" />
              <span className="text-xs">Email</span>
            </a>
          </div>
        </div>

        {/* ── Right block: contact links ── */}
        <aside className="flex flex-col items-start gap-3 w-full sm:w-auto">
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="mailto:azam.mdnajibul@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-accent transition-colors duration-300"
              >
                <FaEnvelope className="text-lg flex-shrink-0" />
                <span>azam.mdnajibul@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/najibulazam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-accent transition-colors duration-300"
              >
                <FaGithub className="text-lg flex-shrink-0" />
                <span>@najibulazam</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/najibulazam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-accent transition-colors duration-300"
              >
                <FaLinkedin className="text-lg flex-shrink-0" />
                <span>linkedin.com/in/najibulazam</span>
              </a>
            </li>
          </ul>
        </aside>

      </div>

      {/* ── Bottom bar: copyright ── */}
      <div className="border-t border-hairline">
        <div className="container-base py-3 flex justify-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()}{' '}
            <span className="text-accent font-semibold">Md Najib Ul Azam Mahi</span>
            {' '}• All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

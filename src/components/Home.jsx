import { FaBriefcase, FaLaptopCode, FaGlobeAmericas } from "react-icons/fa";
import profileImg from "../assets/profile.webp";
import PrimaryButton from './PrimaryButton';
import TechMarquee from './TechMarquee';

export default function Home() {
  return (
    <section
      id="home"
      className="hero-fade relative min-h-screen flex flex-col font-mono text-black dark:text-white overflow-hidden"
      aria-label="Home section"
    >
      {/* Directional gradient background */}
      <div className="hero-bg absolute inset-0">
        <div className="absolute -top-12 left-1/4 w-[28rem] h-[28rem] bg-cyan-300/10 dark:bg-cyan-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-8 right-1/4 w-[26rem] h-[26rem] bg-purple-400/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      {/* ── Centered content area ── */}
      <div className="flex-1 flex items-center justify-center w-full px-4 sm:px-6 pt-28 sm:pt-24 pb-6 sm:pb-8">
        {/* ── Inner container: text left / image right on desktop ── */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-[1fr_auto] items-center gap-8 md:gap-24">

        {/* ── Text column ── */}
        <div className="flex flex-col gap-6 items-center text-center md:items-start md:text-left min-w-0 order-2 md:order-1">

          {/* Name */}
          <h1 className="text-gradient text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Md Najib Ul Azam Mahi
          </h1>

          {/* Static Role */}
          <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-accent tracking-[0.2em] uppercase">
            Full-Stack Developer
          </h2>

          {/* About Me */}
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Full-Stack Developer focused on building clean, scalable web applications with React, Django, and FastAPI.
            Experienced in delivering production-ready systems with RESTful APIs, secure authentication, and AI-integrated features.
            Passionate about real-world problem-solving and impact-driven products.
          </p>

          {/* Tech Stack — replaced by marquee below */}

          {/* CTA */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <PrimaryButton
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto"
            >
              Let's Connect
            </PrimaryButton>
          </div>

          {/* Status Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <span className="px-4 py-2 bg-white/60 dark:bg-white/5 border border-accent/20 rounded-full text-xs sm:text-sm font-medium text-accent backdrop-blur-sm hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <FaBriefcase className="text-base" />
              <span>Open to Work</span>
            </span>
            <span className="px-4 py-2 bg-white/60 dark:bg-white/5 border border-purple-500/20 dark:border-purple-500/20 rounded-full text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 backdrop-blur-sm hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <FaLaptopCode className="text-base" />
              <span>Freelance Available</span>
            </span>
            <span className="px-4 py-2 bg-white/60 dark:bg-white/5 border border-green-500/20 dark:border-green-500/20 rounded-full text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 backdrop-blur-sm hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <FaGlobeAmericas className="text-base" />
              <span>Remote Friendly</span>
            </span>
          </div>
        </div>

        {/* ── Image column ── */}
        <div className="relative group animate-fade-in flex-shrink-0 mx-auto md:mx-0 order-1 md:order-2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-purple-400/20 blur-2xl opacity-80"></div>
          <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl"></div>
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full overflow-hidden border border-accent/30 group-hover:border-accent/70 group-hover:scale-105 transition-all duration-300">
            <img
              src={profileImg}
              alt="Md Najib Ul Azam Mahi"
              className="w-full h-full object-cover profile-mask"
              width="320"
              height="320"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>
        </div>{/* closes inner grid */}
      </div>{/* closes flex-1 wrapper */}

      {/* ── Full-width marquee strip at bottom of hero ── */}
      <TechMarquee />

    </section>
  );
}


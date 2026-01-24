import { FaExternalLinkAlt } from 'react-icons/fa';
import {
  SiReact,
  SiFastapi,
  SiPostgresql,
  SiVercel,
} from 'react-icons/si';
import shwapnobunonImage from '../assets/shwapnobunon.webp';

const experience = {
  id: 1,
  title: 'Shwapnobunon – Sustainable E-commerce Platform',
  role: 'Full-Stack Developer (Contract)',
  duration: 'Dec 2025 - Present',
  description: 'Delivered a production-ready full-stack e-commerce platform for a sustainability-focused client, handling end-to-end development from requirements to deployment. Built secure backend services with FastAPI and PostgreSQL (Supabase), developed customer-facing and admin interfaces using React with protected access, and implemented authentication, email notifications, and file storage. Deployed and maintained all services on Vercel, working closely with non-technical stakeholders to iterate quickly and ship features into production.',
  techStack: [
    { name: 'Python', icon: <SiReact className="text-blue-500" /> },
    { name: 'FastAPI', icon: <SiFastapi className="text-emerald-400" /> },
    { name: 'React', icon: <SiReact className="text-cyan-400" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-500" /> },
    { name: 'Supabase', icon: <SiPostgresql className="text-green-500" /> },
    { name: 'JWT', icon: <SiVercel className="text-orange-500" /> },
    { name: 'Vercel', icon: <SiVercel className="text-white" /> },
  ],
  image: shwapnobunonImage,
  liveUrl: 'https://shwapnobunon.com',
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-8 max-w-6xl mx-auto font-mono text-black dark:text-white bg-white dark:bg-black transition-colors"
      aria-label="Experience Section"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-cyan-400 text-center">Experience</h2>

      <article className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl shadow-md hover:shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1 hover:border-cyan-500/50 transition-all duration-300 group">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[400px_1fr]">
          {/* Image Section - Matches text content height */}
          <div className="relative bg-gray-200 dark:bg-gray-700 overflow-hidden group w-full lg:w-[400px] h-full">
            <img
              src={experience.image}
              alt={`${experience.title} project screenshot`}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
              <a
                href={experience.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg shadow-xl inline-flex items-center gap-2"
                aria-label={`Visit ${experience.title} live site`}
              >
                <FaExternalLinkAlt />
                <span>Visit Live Site</span>
              </a>
            </div>
          </div>

          {/* Text Content */}
          <div className="p-5 lg:p-6 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">{experience.title}</h3>
            <div className="flex justify-between items-center mb-4">
              <p className="text-cyan-400 text-sm sm:text-base font-semibold">{experience.role}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium">{experience.duration}</p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-5 leading-relaxed italic">
              {experience.description}
            </p>

            <div className="mt-auto">
              <h4 className="text-sm sm:text-base font-bold mb-2 text-cyan-300">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg px-2.5 py-1.5 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
                    title={tech.name}
                  >
                    <span className="text-base">{tech.icon}</span>
                    <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

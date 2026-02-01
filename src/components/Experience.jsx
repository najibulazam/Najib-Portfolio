import { FaExternalLinkAlt } from 'react-icons/fa';
import shwapnobunonImage from '../assets/shwapnobunon.webp';

const experience = {
  id: 1,
  title: 'Shwapnobunon – Sustainable E-Commerce Platform',
  techStack: 'React · FastAPI · PostgreSQL · Supabase · Vercel',
  role: 'Freelance Full-Stack Developer',
  duration: 'Dec 2025 - Present',
  keyPoints: [
    'Client project: End-to-end ownership from requirements gathering to production deployment',
    'Built complete e-commerce platform with FastAPI/PostgreSQL backend, React frontend, and secure authentication',
    'Collaborated with non-technical client to translate business needs into technical deliverables',
    'Deployed to production on Vercel, serving real customers with order management and automated workflows',
  ],
  image: shwapnobunonImage,
  liveUrl: 'https://shwapnobunon.com',
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-12 max-w-6xl mx-auto font-mono text-black dark:text-white bg-white dark:bg-black transition-colors"
      aria-label="Experience Section"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-cyan-400 text-center">Experience</h2>

      <article 
        className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl shadow-md hover:shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
        onClick={() => window.open(experience.liveUrl, '_blank')}
      >
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
            <div className="absolute inset-0 bg-black/0 lg:group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
              <a
                href={experience.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 lg:group-hover:opacity-100 scale-90 lg:group-hover:scale-100 transition-all duration-500 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg shadow-xl inline-flex items-center gap-2"
                aria-label={`Visit ${experience.title} live site`}
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt />
                <span>Visit Live Site</span>
              </a>
            </div>
          </div>

          {/* Text Content */}
          <div className="p-5 lg:p-6 flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">{experience.title}</h3>
            <p className="text-cyan-400 text-sm mb-2 font-medium">{experience.techStack}</p>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500 dark:text-gray-400 text-xs italic">{experience.role}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">{experience.duration}</p>
            </div>

            <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2 list-disc list-inside">
              {experience.keyPoints.map((point, idx) => (
                <li key={idx} className="leading-relaxed">{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}

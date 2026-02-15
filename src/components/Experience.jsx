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
      <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-cyan-500 text-center">Experience</h2>

      <article 
        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:shadow-md hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
        onClick={() => window.open(experience.liveUrl, '_blank')}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr]">
          {/* Image Section */}
          <div className="relative bg-gray-200 dark:bg-gray-700 overflow-hidden w-full lg:w-[400px] h-full">
            <img
              src={experience.image}
              alt={`${experience.title} project screenshot`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text Content */}
          <div className="p-5 lg:p-6 flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">{experience.title}</h3>
            <p className="text-cyan-500 text-sm mb-2 font-medium">{experience.techStack}</p>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500 dark:text-gray-400 text-xs italic">{experience.role}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">{experience.duration}</p>
            </div>

            <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2 list-disc list-inside mb-4">
              {experience.keyPoints.map((point, idx) => (
                <li key={idx} className="leading-relaxed">{point}</li>
              ))}
            </ul>
            <a
              href={experience.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded transition-all duration-300 hover:scale-105 self-start"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="group-hover:translate-x-0.5 transition-transform duration-300" />
              <span>Visit Live Site</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

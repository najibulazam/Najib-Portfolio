import { FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import Section from './Section';
import ModernCard from './ModernCard';
import PrimaryButton from './PrimaryButton';
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
    <Section id="experience" ariaLabel="Experience Section">
      <SectionHeading>Experience</SectionHeading>

      <ModernCard
        className="card-accent group overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="relative bg-img-slot overflow-hidden flex flex-col w-full h-[260px] md:h-auto md:w-[280px] lg:w-[360px] md:shrink-0">
            <img
              src={experience.image}
              alt={`${experience.title} project screenshot`}
              className="flex-1 min-h-0 w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Text Content */}
          <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              <span className="text-gradient">{experience.title}</span>
            </h3>
            <p className="text-accent text-sm mb-3 font-medium tracking-wide">{experience.techStack}</p>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 mb-4">
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em]">{experience.role}</p>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em]">{experience.duration}</p>
            </div>

            <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2 list-disc list-inside mb-6">
              {experience.keyPoints.map((point, idx) => (
                <li key={idx} className="leading-relaxed">{point}</li>
              ))}
            </ul>
            <PrimaryButton
              href={experience.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={<FaExternalLinkAlt className="transition-transform duration-300 group-hover:translate-x-0.5" />}
              onClick={(e) => e.stopPropagation()}
              aria-label={`Visit live site: ${experience.title}`}
              className="w-full sm:w-auto"
            >
              Visit Live Site
            </PrimaryButton>
          </div>
        </div>
      </ModernCard>
    </Section>
  );
}

import { FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import Section from './Section';
import ModernCard from './ModernCard';
import PrimaryButton from './PrimaryButton';
import fiverrLogo from '../assets/Fiverr-Logo.webp';
import aexWallpaper from '../assets/aex-wallpaper.webp';

const experiences = [
  {
    id: 1,
    title: 'Freelance Full Stack Developer',
    organization: 'Self-Employed (Fiverr)',
    duration: 'Feb 2026 - Present',
    image: fiverrLogo,
    imageAlt: 'Fiverr brand logo',
    profileUrl: 'https://www.fiverr.com/najib_dev_ai',
    profileLabel: 'Fiverr Profile',
    techStack: 'Python · Django · FastAPI · React · PostgreSQL · REST APIs · Git',
    keyPoints: [
      'Build and deliver full-stack web applications using Django, FastAPI, and React.',
      'Design scalable backend APIs and integrate AI-powered capabilities into modern products.',
      'Collaborate with clients to translate requirements into production-ready solutions.',
    ],
  },
  {
    id: 2,
    title: 'Co-Founder',
    organization: 'AI Extension',
    duration: 'Jun 2024 - Present',
    image: aexWallpaper,
    imageAlt: 'AI Extension logo',
    profileUrl: 'https://www.aiextension.org/',
    profileLabel: 'AI Extension Website',
    techStack: 'Python · Pandas · Machine Learning · Automation · Technical Workshops',
    keyPoints: [
      'Co-founded a student-led platform focused on AI, software development, and emerging technologies.',
      'Organized and delivered workshops on Python, Pandas, and machine learning fundamentals.',
      'Collaborated on AI-driven projects and automation tools for real-world use cases.',
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" ariaLabel="Experience Section">
      <SectionHeading>Experience</SectionHeading>

      <div className="grid gap-6 sm:gap-8">
        {experiences.map((item) => (
          <ModernCard
            key={item.id}
            className="card-accent p-6 lg:p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <img
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
                decoding="async"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover bg-img-slot border border-hairline shadow-sm shrink-0"
              />

              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  <span className="text-gradient">{item.title}</span>
                </h3>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-3">
                  <p className="text-gray-500 text-xs uppercase tracking-[0.2em]">{item.organization}</p>
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em]">{item.duration}</p>
                </div>
              </div>
            </div>

            <p className="text-accent text-sm mb-4 font-medium tracking-wide">Tech Stack: {item.techStack}</p>

            <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2 list-disc list-inside mb-6">
              {item.keyPoints.map((point, idx) => (
                <li key={idx} className="leading-relaxed">{point}</li>
              ))}
            </ul>

            {item.profileUrl && (
              <PrimaryButton
                href={item.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                icon={<FaExternalLinkAlt className="transition-transform duration-300 group-hover:translate-x-0.5" />}
                aria-label={`Visit ${item.profileLabel}`}
                className="w-full sm:w-auto"
              >
                {item.profileLabel}
              </PrimaryButton>
            )}
          </ModernCard>
        ))}
      </div>
    </Section>
  );
}

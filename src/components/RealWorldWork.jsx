import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import Section from './Section';
import ModernCard from './ModernCard';
import PrimaryButton from './PrimaryButton';
import shwapnobunonEngWhite from '../assets/Shwapnobunon-eng-white.webp';
import aexCampus from '../assets/aex_campus.webp';

const workApps = [
  {
    id: 1,
    title: 'Shwapnobunon',
    category: 'Client Deployment',
    image: shwapnobunonEngWhite,
    imageAlt: 'Shwapnobunon brand banner',
    summary:
      'A production-ready e-commerce application built for real customer workflows, including catalog browsing, account flows, and a clean checkout journey optimized for both mobile and desktop use.',
    techStack: 'FastAPI · React · PostgreSQL · Supabase · Vercel',
    siteUrl: 'https://shwapnobunon-frontend.vercel.app/',
    siteLabel: 'Visit Site',
    repositoryType: 'Private client repository',
  },
  {
    id: 2,
    title: 'AEX Campus',
    category: 'Student Productivity Platform',
    image: aexCampus,
    imageAlt: 'AEX Campus logo',
    summary:
      'An all-in-one student productivity platform that unifies tasks, courses, schedules, study groups, and personal settings into one workspace. It provides a seamless responsive experience across desktop and mobile to keep students organized in real time.',
    techStack: 'React · Productivity Systems · Responsive UI · Real-Time Collaboration',
    githubUrl: 'https://github.com/najibulazam/aex-campus',
    siteUrl: 'https://aex-campus.vercel.app/',
    siteLabel: 'Visit Site',
  },
];

export default function RealWorldWork() {
  return (
    <Section id="real-work" ariaLabel="Real-world applications section">
      <SectionHeading>Real-World Applications</SectionHeading>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        {workApps.map((app) => (
          <ModernCard key={app.id} className="card-accent p-6 lg:p-8 flex flex-col">
            <div className="flex items-start gap-4 mb-4">
              <img
                src={app.image}
                alt={app.imageAlt}
                loading="lazy"
                decoding="async"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover bg-img-slot border border-hairline shadow-sm shrink-0"
              />

              <div className="min-w-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:justify-between sm:items-center gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                    <span className="text-gradient">{app.title}</span>
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium whitespace-nowrap sm:text-right tracking-wide">
                    {app.category}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-accent text-sm mb-4 font-medium tracking-wide">{app.techStack}</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">{app.summary}</p>

            <div className="mt-auto flex flex-wrap gap-3">
              {app.githubUrl ? (
                <PrimaryButton
                  href={app.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  icon={<FaGithub className="text-base" />}
                  aria-label={`View GitHub for ${app.title}`}
                  className="w-full sm:w-auto"
                >
                  GitHub
                </PrimaryButton>
              ) : (
                <span className="tag-accent text-xs font-semibold rounded-full px-3 py-1 self-center">
                  {app.repositoryType}
                </span>
              )}

              <PrimaryButton
                href={app.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaExternalLinkAlt className="text-sm" />}
                aria-label={`Visit live app: ${app.title}`}
                className="w-full sm:w-auto"
              >
                {app.siteLabel}
              </PrimaryButton>
            </div>
          </ModernCard>
        ))}
      </div>
    </Section>
  );
}
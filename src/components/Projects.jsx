import { FaGithub } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import Section from './Section';
import ModernCard from './ModernCard';
import PrimaryButton from './PrimaryButton';
import YouTubeFacade from './YouTubeFacade';

const projects = [
  {
    id: 1,
    title: 'Organic E-Commerce Platform with RAG AI Chatbot',
    techStack: 'React · Django REST · PostgreSQL · RAG · Groq LLaMA',
    role: 'Solo Project',
    keyPoints: [
      'Built a full-stack e-commerce platform with AI-powered product discovery',
      'Implemented RAG chatbot using Sentence Transformers for intelligent product recommendations',
      'Enabled semantic search with cosine similarity for accurate product retrieval',
      'Reduced customer support queries through AI-driven FAQ responses',
    ],
    youtubeId: 'nmiAoFS4qHA',
    github: 'https://github.com/najibulazam/Organic-E-Commerce-Store-with-RAG-AI-Chatbot',
  },
  {
    id: 2,
    title: 'AI-Powered Resume Screening System',
    techStack: 'FastAPI · React · Multi-Agent AI · Groq LLaMA',
    role: 'Solo Project',
    keyPoints: [
      'Automated resume screening for high-volume recruitment workflows',
      'Built multi-agent AI pipeline (parser, matcher, scorer, feedback generator)',
      'Delivered explainable hiring decisions (HIRE / MAYBE / REJECT) with detailed scoring',
      'Processed 100+ resumes in batch with production-grade error handling',
    ],
    youtubeId: 'hLPt59CWvtM',
    github: 'https://github.com/najibulazam/AI-Powered-Resume-Screening-System',
  },
  {
    id: 3,
    title: 'AI-Enhanced Online Voting System',
    techStack: 'Django REST · React · PostgreSQL · JWT · Groq LLM',
    role: 'Solo Project',
    keyPoints: [
      'Created secure online voting platform for elections and polls',
      'Implemented JWT authentication with vote-once-per-position enforcement',
      'Integrated AI-powered analytics for voting insights and turnout predictions',
      'Improved decision-making with real-time results and intelligent summaries',
    ],
    youtubeId: 'aLXKEUvnah4',
    github: 'https://github.com/najibulazam/AI-Enhanced-Online-Voting-System-Using-Django-REST-and-React',
  },
];

export default function Projects() {
  return (
    <Section id="projects" ariaLabel="Projects Section">
      <SectionHeading>Projects</SectionHeading>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map(({ id, title, techStack, role, keyPoints, youtubeId, github }) => (
          <ModernCard
            key={id}
            className="card-accent flex flex-col overflow-hidden"
          >
            {/* 16:9 media container — aspect-ratio is native CSS,
                no JS, no layout shift, no padding-bottom hack needed. */}
            <div className="w-full aspect-video overflow-hidden rounded-t-2xl">
              <YouTubeFacade youtubeId={youtubeId} title={`${title} Demo Video`} />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">
                <span className="text-gradient">{title}</span>
              </h3>
              <p className="text-accent text-sm mb-2 font-medium tracking-wide">{techStack}</p>
              <p className="text-gray-500 text-xs mb-4 uppercase tracking-[0.2em]">{role}</p>

              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2 mb-6 list-disc list-inside">
                {keyPoints.map((point, idx) => (
                  <li key={idx} className="leading-relaxed">{point}</li>
                ))}
              </ul>

              <div className="mt-auto">
                <PrimaryButton
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repository for ${title}`}
                  icon={<FaGithub className="text-lg" />}
                  className="w-full sm:w-auto"
                >
                  View Repository
                </PrimaryButton>
              </div>
            </div>
          </ModernCard>
        ))}
      </div>

      <div className="mt-12 text-center">
        <PrimaryButton
          href="https://github.com/najibulazam?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub repositories for more projects"
          icon={<FaGithub className="text-xl" />}
          className="w-full sm:w-auto"
        >
          Visit GitHub for More Projects
        </PrimaryButton>
      </div>
    </Section>
  );
}

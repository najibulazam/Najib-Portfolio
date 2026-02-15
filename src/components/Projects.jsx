import { FaGithub } from 'react-icons/fa';

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
    <section
      id="projects"
      className="px-6 py-12 max-w-6xl mx-auto font-mono text-black dark:text-white bg-white dark:bg-black transition-colors"
      aria-label="Projects Section"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-10 text-cyan-500 text-center">Projects</h2>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map(({ id, title, techStack, role, keyPoints, youtubeId, github }) => (
          <article
            key={id}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:shadow-md hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="relative z-10 w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={`${title} Demo Video`}
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-cyan-500 text-sm mb-2 font-medium">{techStack}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mb-3 italic">{role}</p>

              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2 mb-4 list-disc list-inside">
                {keyPoints.map((point, idx) => (
                  <li key={idx} className="leading-relaxed">{point}</li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repository for ${title}`}
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <FaGithub className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/najibulazam?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Visit GitHub repositories for more projects"
        >
          <FaGithub className="text-2xl" />
          <span>Visit GitHub for More Projects</span>
        </a>
      </div>
    </section>
  );
}

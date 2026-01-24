import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Organic E-Commerce Platform with RAG AI Chatbot',
    role: 'React | DRF | PostgreSQL | RAG AI',
    description: 'Built a scalable full-stack e-commerce platform with AI-driven product discovery.',
    keyPoints: [
      'Developed React + Django REST system serving 40+ products across 17 categories',
      'Implemented RAG chatbot using Sentence Transformers and Groq LLaMA 70B for context-aware recommendations',
      'Built semantic search with cosine similarity for accurate product and FAQ retrieval',
      'Deployed production system on Render (backend) and Netlify (frontend) with optimized response time (<2s)',
    ],
    youtubeId: 'nmiAoFS4qHA',
    github: 'https://github.com/najibulazam/Organic-E-Commerce-Store-with-RAG-AI-Chatbot',
  },
  {
    id: 2,
    title: 'AI-Powered Resume Screening System',
    role: 'FastAPI | React | Python | AI Agents ',
    description: 'Designed an automated resume screening engine using multi-agent AI architecture.',
    keyPoints: [
      'Built specialized AI agents for resume parsing, skill matching, scoring, and feedback',
      'Developed FastAPI REST services supporting batch processing of 100+ resumes',
      'Implemented explainable scoring logic (HIRE / MAYBE / REJECT) aligned with job descriptions',
      'Added production features including rate limiting, logging, validation, and cost monitoring',
    ],
    youtubeId: 'hLPt59CWvtM',
    github: 'https://github.com/najibulazam/AI-Powered-Resume-Screening-System',
  },
  {
    id: 3,
    title: 'AI-Enhanced Online Voting System',
    role: 'Django REST | React | PostgreSQL | JWT',
    description: 'Created a secure, AI-assisted online voting and analytics platform with customized authentication feature.',
    keyPoints: [
      'Implemented JWT-based authentication with one-vote-per-position enforcement',
      'Designed RESTful APIs for voting, analytics, and real-time result aggregation',
      'Integrated LLM-powered insights (Groq LLaMA) for summaries, turnout analysis, and predictions',
      'Optimized performance using API caching and frontend lazy loading',
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
      <h2 className="text-2xl sm:text-4xl font-bold mb-10 text-cyan-400 text-center">Projects</h2>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map(({ id, title, role, description, keyPoints, youtubeId, github }) => (
          <article
            key={id}
            className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl shadow-md hover:shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1 hover:border-cyan-500/50 transition-all duration-300 flex flex-col group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={`${title} Demo Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="relative z-10 p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <p className="text-cyan-400 text-sm mb-3 font-medium">{role}</p>
              <p className="text-gray-300 text-sm mb-3">{description}</p>

              <ul className="text-gray-300 text-xs space-y-2 mb-4 list-disc list-inside">
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
                  className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <FaGithub className="text-lg" />
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
          className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition focus:outline-none focus:ring-4 focus:ring-cyan-400 shadow-md hover:shadow-cyan-500"
          aria-label="Visit GitHub repositories for more projects"
        >
          <FaGithub className="text-2xl" />
          <span>Visit GitHub for More Projects</span>
        </a>
      </div>
    </section>
  );
}

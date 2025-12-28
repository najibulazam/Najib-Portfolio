import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Organic E-Commerce Platform with RAG AI Chatbot',
    role: 'Full Stack Developer | React, Django REST, AI (RAG)',
    description: 'Designed and developed a scalable full-stack e-commerce platform using React, Django, and REST APIs serving 40+ products across 17 categories.',
    keyPoints: [
      'Implemented a Retrieval-Augmented Generation (RAG) chatbot using Sentence Transformers embeddings and Groq LLaMA 70B, enabling context-aware product recommendations',
      'Built semantic search using cosine similarity for accurate product discovery and FAQ resolution',
      'Developed secure token-based authentication, user profiles, order management, and admin dashboards',
      'Optimized chatbot response time to <2 seconds with vectorized retrieval and caching strategies',
      'Deployed production-ready system using Render (backend) and Netlify (frontend) with environment-based configuration',
    ],
    youtubeId: 'nmiAoFS4qHA',
    techStack: ['React', 'Django REST', 'RAG', 'Groq LLaMA 70B', 'Sentence Transformers', 'PostgreSQL'],
    github: 'https://github.com/najibulazam/Organic-E-Commerce-Store-with-RAG-AI-Chatbot',
  },
  {
    id: 2,
    title: 'AI-Powered Resume Screening System',
    role: 'Backend Developer | FastAPI, AI Agents, System Design',
    description: 'Engineered a multi-agent AI system to automate resume screening against job descriptions.',
    keyPoints: [
      'Designed specialized AI agents for resume parsing, skill matching, scoring, and feedback generation',
      'Built REST APIs with FastAPI, enabling batch processing of 100+ resumes with real-time status tracking',
      'Implemented structured scoring logic (HIRE / MAYBE / REJECT) with explainable AI feedback',
      'Added rate limiting, input validation, logging, and cost monitoring for production readiness',
    ],
    youtubeId: 'hLPt59CWvtM',
    techStack: ['FastAPI', 'Multi-Agent AI', 'Groq LLaMA', 'Python', 'REST API'],
    github: 'https://github.com/najibulazam/AI-Powered-Resume-Screening-System',
  },
  {
    id: 3,
    title: 'AI-Enhanced Online Voting System',
    role: 'Backend & Full Stack Developer | Django REST, React, AI Analytics',
    description: 'Built a secure online voting system with JWT authentication and one-vote-per-position enforcement.',
    keyPoints: [
      'Designed clean RESTful APIs using Django REST Framework for voting, analytics, and real-time results',
      'Integrated LLM-based AI insights (Groq LLaMA) to generate voting summaries, turnout analysis, and winner predictions',
      'Improved performance using API response caching (15–60s TTL) and frontend lazy loading',
      'Implemented role-based access with admin panel for election management',
    ],
    youtubeId: 'aLXKEUvnah4',
    techStack: ['Django REST', 'React', 'JWT', 'Groq LLaMA', 'AI Analytics'],
    github: 'https://github.com/najibulazam/AI-Enhanced-Online-Voting-System-Using-Django-REST-and-React',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-12 max-w-7xl mx-auto font-mono text-black dark:text-white bg-white dark:bg-black transition-colors"
      aria-label="Projects Section"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-10 text-cyan-400 text-center">Projects</h2>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map(({ id, title, role, description, keyPoints, youtubeId, techStack, github }) => (
          <article
            key={id}
            className="bg-gray-800 rounded-2xl shadow-md hover:shadow-cyan-500 transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={`${title} Demo Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <p className="text-cyan-400 text-sm mb-3 font-medium">{role}</p>
              <p className="text-gray-300 text-sm mb-3">{description}</p>

              <ul className="text-gray-300 text-xs space-y-2 mb-4 list-disc list-inside">
                {keyPoints.map((point, idx) => (
                  <li key={idx} className="leading-relaxed">{point}</li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-cyan-600 text-cyan-100 text-xs font-semibold rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

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

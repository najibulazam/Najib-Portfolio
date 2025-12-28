import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiReact,
  SiGit,
  SiPostgresql,
  SiLinux,
  SiDocker,
  SiPostman,
  SiHuggingface,
  SiOpenai,
} from 'react-icons/si';


const techStack = [
  { name: 'Python', icon: <SiPython className="text-blue-500" /> },
  { name: 'Django', icon: <SiDjango className="text-green-600" /> },
  { name: 'Django REST', icon: <SiDjango className="text-green-400" /> },
  { name: 'FastAPI', icon: <SiFastapi className="text-emerald-400" /> },
  { name: 'React', icon: <SiReact className="text-cyan-400" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-500" /> },
  { name: 'Git', icon: <SiGit className="text-red-500" /> },
  { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
  { name: 'Hugging Face', icon: <SiHuggingface className="text-yellow-500" /> },
  { name: 'LLM APIs', icon: <SiOpenai className="text-green-500" /> },
  { name: 'Linux', icon: <SiLinux className="text-gray-700 dark:text-gray-200" /> },
];


export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-8 max-w-6xl mx-auto font-mono text-black dark:text-white bg-white dark:bg-black transition-colors"
      aria-label="About Me section with bio and tech stack"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-cyan-400 text-center">About Me</h2>

      <p className="max-w-4xl mx-auto mb-12 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify px-4 lg:px-0 hyphens-auto">
        Full Stack Developer specializing in Python, Django, FastAPI, and React, with hands-on experience building scalable web applications and AI-integrated systems. Proven ability to design RESTful APIs, implement secure authentication, and integrate LLM-based features such as RAG chatbots and automated screening pipelines. Strong foundation in software engineering principles, SDLC, and deployment on cloud platforms. Seeking a junior software engineering role to contribute to real-world, production systems.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-cyan-300 text-center">What I Do</h3>

      <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-5xl mx-auto">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-cyan-500 transition-all duration-300">
          <h4 className="font-semibold text-cyan-400 mb-3 text-base">Backend Engineering</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed hyphens-auto">Building scalable REST APIs with Django and FastAPI. JWT authentication, database design, and clean architecture.</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-cyan-500 transition-all duration-300">
          <h4 className="font-semibold text-cyan-400 mb-3 text-base">AI Integration</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed hyphens-auto">Implementing RAG systems, LLM pipelines, semantic search, and multi-agent architectures using Groq and embeddings.</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-cyan-500 transition-all duration-300">
          <h4 className="font-semibold text-cyan-400 mb-3 text-base">Frontend Development</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed hyphens-auto">Creating responsive interfaces with React and Vite. API integration and modern UI/UX implementation.</p>
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-cyan-300 text-center">Tech Stack</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {techStack.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center space-y-2 bg-gray-100 dark:bg-gray-800 rounded-xl p-3 sm:p-4 shadow-md hover:shadow-cyan-500 hover:scale-105 transition-all duration-300"
            aria-label={name}
            title={name}
          >
            <div className="text-3xl sm:text-4xl">{icon}</div>
            <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-200 text-center">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

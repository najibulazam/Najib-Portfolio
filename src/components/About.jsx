import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiVercel,
  SiOpenai,
} from 'react-icons/si';


const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: <SiReact className="text-cyan-400" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900 dark:text-white" /> },
      { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Python', icon: <SiPython className="text-blue-500" /> },
      { name: 'Django', icon: <SiDjango className="text-green-600" /> },
      { name: 'Django REST', icon: <SiDjango className="text-green-400" /> },
      { name: 'FastAPI', icon: <SiFastapi className="text-emerald-400" /> },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-500" /> },
      { name: 'Supabase', icon: <SiSupabase className="text-green-500" /> },
    ],
  },
  {
    category: 'AI / ML',
    skills: [
      { name: 'RAG Systems', icon: <SiOpenai className="text-green-500" /> },
      { name: 'LLM Integration', icon: <SiOpenai className="text-purple-500" /> },
      { name: 'Embeddings', icon: <SiOpenai className="text-blue-400" /> },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: <SiGit className="text-red-500" /> },
      { name: 'GitHub', icon: <SiGithub className="text-gray-700 dark:text-gray-200" /> },
      { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      { name: 'Vercel', icon: <SiVercel className="text-gray-900 dark:text-white" /> },
    ],
  },
];


export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-12 max-w-6xl mx-auto font-mono text-black dark:text-white bg-white dark:bg-black transition-colors"
      aria-label="About Me section"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-cyan-400 text-center">About Me</h2>

      <p className="max-w-3xl mx-auto mb-12 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-center">
        Full-Stack Developer focused on building clean, scalable web applications with React, Django, and FastAPI. 
        Experienced in delivering production-ready systems with RESTful APIs, secure authentication, and AI-integrated features. 
        Interested in solving real-world problems and contributing to impact-driven products.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-cyan-300 text-center">Tech Stack</h3>

      <div className="grid grid-cols-5 gap-3 max-w-6xl mx-auto">
        {skillCategories.map(({ category, skills }) => (
          <div key={category} className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-3 sm:p-5 shadow-md hover:shadow-xl hover:shadow-cyan-500/50 hover:-translate-y-1 hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-[10px] sm:text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2 sm:mb-4 text-center">{category}</h3>
              <ul className="space-y-1.5 sm:space-y-2.5">
                {skills.map(({ name, icon }) => (
                  <li
                    key={name}
                    className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2.5 text-[10px] sm:text-sm text-gray-700 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 hover:translate-x-1 transition-all duration-200"
                    title={name}
                  >
                    <span className="text-lg sm:text-lg">{icon}</span>
                    <span className="hidden sm:inline truncate">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

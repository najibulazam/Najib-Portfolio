import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiPostgresql,
  SiFirebase,
  SiLinux,
} from 'react-icons/si';


const techStack = [
  { name: 'Python', icon: <SiPython className="text-blue-500" /> },
  { name: 'Django', icon: <SiDjango className="text-green-600" /> },
  { name: 'Django REST', icon: <SiDjango className="text-green-400" /> },
  { name: 'FastAPI', icon: <SiFastapi className="text-emerald-400" /> },
  { name: 'Flask', icon: <SiFlask className="text-gray-500" /> },
  { name: 'React', icon: <SiReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'Git', icon: <SiGit className="text-red-500" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-500" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-orange-400" /> },
  { name: 'Linux', icon: <SiLinux className="text-gray-700 dark:text-gray-200" /> },
];


export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-8 max-w-5xl mx-auto font-mono text-black dark:text-white bg-white dark:bg-black transition-colors"
      aria-label="About Me section with bio and tech stack"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-cyan-400 text-center">About Me</h2>

      <p className="max-w-3xl mx-auto mb-8 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-center sm:text-left px-4">
        Hi! I'm Md Najib Ul Azam Mahi, an Electronics and Communication Engineering student passionate about backend development and intelligent systems.
        I specialize in Python-based web frameworks like Django and FastAPI, building scalable APIs and backend systems. I'm also exploring AI/ML and improving
        my frontend skills using React and Tailwind CSS to become a full-stack developer.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-cyan-300 text-center">Tech Stack</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6 max-w-4xl mx-auto">
        {techStack.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center space-y-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-2 sm:p-3 shadow-md hover:shadow-cyan-500 transition"
            aria-label={name}
            title={name}
          >
            <div className="text-2xl sm:text-3xl">{icon}</div>
            <span className="text-xs text-gray-600 dark:text-gray-200 text-center leading-tight">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-12 max-w-6xl mx-auto font-mono text-black dark:text-white bg-white dark:bg-black transition-colors"
      aria-label="About Me section"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-cyan-500 text-center">About Me</h2>

      <p className="max-w-3xl mx-auto mb-12 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-center animate-fade-in">
        Full-Stack Developer focused on building clean, scalable web applications with React, Django, and FastAPI. 
        Experienced in delivering production-ready systems with RESTful APIs, secure authentication, and AI-integrated features. 
        Interested in solving real-world problems and contributing to impact-driven products.
      </p>
    </section>
  );
}

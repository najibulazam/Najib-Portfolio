import React from 'react';
import ostadLogo from '../assets/ostad_logo.png';
import harvardLogo from '../assets/harvard_logo.webp';

const educationData = [
  {
    institute: 'Hajee Mohammad Danesh Science and Technology University',
    degree: 'B.Sc. in Electronics and Communication Engineering',
    duration: 'January 2023 – Present',
    tags: ['Communication Systems', 'Signal Processing', 'Computer Networks', 'Microprocessors & Embedded Systems', 'AI & Machine Learning', 'Web Engineering', 'VLSI & Semiconductor Devices', 'Cyber Security & Cryptography'],
    logo: '/education/hstu.png',
  },
];

const certifications = [
  {
    title: 'Full Stack Web Development with Python, Django & React',
    issuer: 'Ostad',
    year: 'August 2024 – July 2025',
    link: 'https://ostad.app/share/certificate/c28928-md-najib-ul-azam-mahi',
    description: 'REST API design, JWT authentication, and Agile practices with Django REST Framework and React',
    logo: ostadLogo,
  },
  {
    title: "CS50's Introduction to Programming with Python",
    issuer: 'Harvard University',
    year: 'June 2024 – September 2024',
    link: 'https://certificates.cs50.io/555d892f-d4c6-49e3-9ada-4b342eb5fff2.pdf',
    description: 'Applied software design patterns, problem-solving, and algorithmic thinking in hands-on exercises',
    logo: harvardLogo,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="px-6 py-12 max-w-6xl mx-auto font-mono text-black dark:text-white bg-white dark:bg-black transition-colors"
      aria-label="Education section"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-cyan-400 text-center">Education</h2>

      <div className="space-y-6 sm:space-y-8 mb-12">
        {educationData.map((edu, idx) => (
          <article
            key={idx}
            className="relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1 hover:border-cyan-500/50 transition-all duration-300 group"
          >
            <img
              src={edu.logo}
              alt={edu.institute}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto sm:mx-0 rounded-lg"
            />
            <div className="text-center sm:text-left w-full">
              <h3 className="text-lg sm:text-xl font-semibold">{edu.institute}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{edu.degree}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.duration}</p>
              <div className="flex gap-2 mt-3 flex-wrap justify-center sm:justify-start">{edu.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-cyan-600 text-white text-xs font-semibold rounded px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-cyan-300 text-center">Awards & Certifications</h3>
      
      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((cert, idx) => (
          <article
            key={idx}
            className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-4 shadow-md hover:shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1 hover:border-cyan-500/50 transition-all duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h4 className="relative z-10 font-semibold text-base mb-2">{cert.title}</h4>
            <div className="relative z-10 flex items-center gap-2 mb-1">
              <img src={cert.logo} alt={cert.issuer} className="w-5 h-5 object-contain" />
              <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
            </div>
            <p className="relative z-10 text-xs text-gray-500 dark:text-gray-500 mt-1 mb-3">{cert.year}</p>
            <p className="relative z-10 text-sm text-gray-700 dark:text-gray-300 mb-3">{cert.description}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-block bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold py-2 px-4 rounded transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              View Certificate
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

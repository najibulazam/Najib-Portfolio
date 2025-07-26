import React from 'react';

const educationData = [
  {
    institute: 'Hajee Mohammad Danesh Science and Technology University, Dinajpur',
    degree: 'B.Sc. (Engineering) in Electronics and Communication Engineering',
    duration: 'January 2023 – Present',
    tags: ['Leadership', 'Networking', 'Team Management'],
    logo: '/education/hstu.png',
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="px-6 py-8 max-w-5xl mx-auto font-mono text-black dark:text-white bg-white dark:bg-black transition-colors"
      aria-label="Education section"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-cyan-400 text-center">Education</h2>

      <div className="space-y-6 sm:space-y-8">
        {educationData.map((edu, idx) => (
          <article
            key={idx}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-cyan-500 transition"
          >
            <img
              src={edu.logo}
              alt={edu.institute}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto sm:mx-0"
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
    </section>
  );
}

import React from 'react';

const extracurricularData = [
  {
    role: 'IT Secretary',
    org: 'ECE Club of HSTU',
    time: 'February 2025 – October 2025',
    tags: ['Technical Leadership', 'IT Infrastructure', 'Event Technology', 'System Management'],
    orgColor: 'text-cyan-400',
  },
  {
    role: 'IT Secretary',
    org: 'HSTU Career Club',
    time: 'January 2025 – October 2025',
    tags: ['Technical Operations', 'Digital Systems', 'Career Event Support'],
    orgColor: 'text-cyan-400',
  },
];

export default function Extracurriculars() {
  return (
    <section
      id="extracurriculars"
      className="px-6 py-8 max-w-5xl mx-auto font-mono text-black dark:text-white bg-white dark:bg-black transition-colors"
      aria-label="Extracurricular section"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-cyan-400 text-center">Leadership & Volunteering</h2>

      <div className="space-y-4 sm:space-y-6">
        {extracurricularData.map((item, idx) => (
          <article
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-cyan-500 transition"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.time}</p>
            <h3 className="text-base sm:text-lg font-semibold mt-1">
              {item.role} - <span className={`${item.orgColor}`}>{item.org}</span>
            </h3>
            <div className="flex gap-2 mt-3 flex-wrap">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-cyan-600 text-white text-xs font-semibold rounded px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
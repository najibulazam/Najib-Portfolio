import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaEnvelope className="text-3xl" />,
    label: 'Email',
    value: 'azam.mdnajibul@gmail.com',
    link: 'mailto:azam.mdnajibul@gmail.com',
    linkText: 'Send Email',
  },
  {
    icon: <FaGithub className="text-3xl" />,
    label: 'GitHub',
    value: 'github.com/najibulazam',
    link: 'https://github.com/najibulazam',
    linkText: 'View Profile',
  },
  {
    icon: <FaLinkedin className="text-3xl" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/najibulazam',
    link: 'https://www.linkedin.com/in/najibulazam/',
    linkText: 'Connect',
  },
  {
    icon: <FaWhatsapp className="text-3xl" />,
    label: 'WhatsApp',
    value: '+880 1572918091',
    link: 'https://wa.me/8801572918091',
    linkText: 'Message',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-12 max-w-6xl mx-auto font-mono text-black dark:text-white bg-white dark:bg-black transition-colors"
      aria-label="Contact section with contact information"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-cyan-400 text-center">Let's Build Something</h2>

      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-base sm:text-lg">
        Looking for a Full Stack Developer with AI integration experience? I'm available for full-time opportunities, freelance projects, and collaborations. Let's connect and discuss how I can help bring your project to life.
      </p>

      {/* Open to Opportunities Section */}
      <div className="mb-16 relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-cyan-500/30"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white dark:bg-black px-6 text-base font-semibold text-cyan-400">Open to Opportunities</span>
        </div>
      </div>

      <div className="mb-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-500/20 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Full-Time Roles</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Seeking software engineering positions to contribute to production systems</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Freelance Projects</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Available for contract work and custom development solutions</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/20 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Collaborations</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Open to technical partnerships and innovative project collaborations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods - Single Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {contactInfo.map((contact, idx) => (
          <article
            key={idx}
            className="group relative bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-5 shadow-md hover:shadow-cyan-500/50 transition-all duration-300 flex flex-col items-center text-center border border-transparent hover:border-cyan-500/30 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-transparent rounded-xl transition-all duration-300"></div>
            <div className="relative text-cyan-400 mb-3 transform group-hover:scale-110 transition-transform duration-300">{contact.icon}</div>
            <h3 className="relative text-base font-bold mb-2 text-gray-900 dark:text-white">{contact.label}</h3>
            <p className="relative text-xs text-gray-600 dark:text-gray-400 mb-3 break-all">{contact.value}</p>
            {contact.link && (
              <a
                href={contact.link}
                target={contact.label !== 'Email' ? '_blank' : undefined}
                rel={contact.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="relative bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-xs py-2 px-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50"
                aria-label={`${contact.linkText} for ${contact.label}`}
              >
                {contact.linkText}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

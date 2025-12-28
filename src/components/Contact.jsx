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
    value: '+880 1978264938',
    link: 'https://wa.me/8801978264938',
    linkText: 'Message',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-12 max-w-5xl mx-auto font-mono text-black dark:text-white bg-white dark:bg-black transition-colors"
      aria-label="Contact section with contact information"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-cyan-400 text-center">Let's Build Something</h2>

      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-base sm:text-lg">
        Looking for a Full Stack Developer with AI integration experience? I'm available for full-time opportunities, freelance projects, and collaborations. Let's connect and discuss how I can help bring your project to life.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {contactInfo.map((contact, idx) => (
          <article
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-cyan-500 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="text-cyan-400 mb-4">{contact.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{contact.label}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 break-all">{contact.value}</p>
            {contact.link && (
              <a
                href={contact.link}
                target={contact.label !== 'Email' ? '_blank' : undefined}
                rel={contact.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label={`${contact.linkText} for ${contact.label}`}
              >
                {contact.linkText}
              </a>
            )}
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">Open to:</p>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="bg-cyan-600 text-white text-sm font-semibold rounded-full px-4 py-2">Full-Time Roles</span>
          <span className="bg-cyan-600 text-white text-sm font-semibold rounded-full px-4 py-2">Freelance Projects</span>
          <span className="bg-cyan-600 text-white text-sm font-semibold rounded-full px-4 py-2">Technical Collaborations</span>
        </div>
      </div>
    </section>
  );
}

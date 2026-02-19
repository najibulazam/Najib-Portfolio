import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import Section from './Section';
import ModernCard from './ModernCard';
import PrimaryButton from './PrimaryButton';

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
    <Section
      id="contact"
      ariaLabel="Contact section with contact information"
    >
      <SectionHeading>Let's Build Something</SectionHeading>

      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-base sm:text-lg">
        Looking for a Full Stack Developer with AI integration experience?
      </p>

      {/* Open to Opportunities — minimal chip row */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-14">
        <span className="text-xs text-gray-500 uppercase tracking-[0.2em] flex items-center mr-1">Open to:</span>
        {['Full-Time Roles', 'Freelance', 'Collaborations'].map((label) => (
          <span key={label} className="tag-accent text-xs font-semibold rounded-full px-3 py-1">
            {label}
          </span>
        ))}
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {contactInfo.map((contact, idx) => (
          <ModernCard
            key={idx}
            as="div"
            className="card-accent p-6 sm:p-8 flex flex-col items-center text-center group min-w-0"
          >
            <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300 text-4xl">{contact.icon}</div>
            <h3 className="text-base font-bold mb-2 text-gray-900 dark:text-white">{contact.label}</h3>
            <p className="text-xs text-gray-600 mb-5 break-all leading-relaxed">{contact.value}</p>
            {contact.link && (
              <PrimaryButton
                href={contact.link}
                target={contact.label === 'Email' ? undefined : '_blank'}
                rel={contact.label === 'Email' ? undefined : 'noopener noreferrer'}
                size="sm"
                aria-label={`${contact.linkText} for ${contact.label}`}
                className="w-full mt-auto"
              >
                {contact.linkText}
              </PrimaryButton>
            )}
          </ModernCard>
        ))}
      </div>
    </Section>
  );
}

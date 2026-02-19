import SectionHeading from './SectionHeading';
import Section from './Section';
import ModernCard from './ModernCard';
import PrimaryButton from './PrimaryButton';
import ostadLogo from '../assets/ostad_logo.webp';
import harvardLogo from '../assets/harvard_logo.webp';
import hstuLogo from '../assets/hstu.png';

const educationData = [
  {
    institute: 'Hajee Mohammad Danesh Science and Technology University',
    degree: 'B.Sc. in Electronics and Communication Engineering',
    duration: 'January 2023 – Present',
    tags: ['Communication Systems', 'Signal Processing', 'Computer Networks', 'Microprocessors & Embedded Systems', 'AI & Machine Learning', 'Web Engineering', 'VLSI & Semiconductor Devices', 'Cyber Security & Cryptography'],
    logo: hstuLogo,
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
    <Section id="education" ariaLabel="Education section">
      <SectionHeading>Education</SectionHeading>

      <div className="space-y-6 sm:space-y-8 mb-12">
        {educationData.map((edu, idx) => (
          <ModernCard
            key={idx}
            className="card-accent flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 sm:p-6"
          >
            <img
              src={edu.logo}
              alt={edu.institute}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto sm:mx-0 rounded-lg"
              width="80"
              height="80"
            />
            <div className="text-center sm:text-left w-full">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                <span className="text-gradient">{edu.institute}</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{edu.degree}</p>
              <p className="text-sm text-gray-500 uppercase tracking-[0.2em]">{edu.duration}</p>
              <div className="flex gap-2 mt-3 flex-wrap justify-center sm:justify-start">{edu.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="tag-accent text-xs font-semibold rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ModernCard>
        ))}
      </div>

      <div className="flex flex-col items-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-semibold text-accent">Awards &amp; Certifications</h3>
        <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-accent to-accent-2 rounded-full"></div>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((cert, idx) => (
          <ModernCard
            key={idx}
            className="card-accent p-5 sm:p-6 group"
          >
            <h4 className="font-semibold text-base mb-2">{cert.title}</h4>
            <div className="flex items-center gap-2 mb-1">
              <img src={cert.logo} alt={cert.issuer} className="w-5 h-5 object-contain" width="20" height="20" />
              <p className="text-sm text-gray-600">{cert.issuer}</p>
            </div>
            <p className="text-xs text-gray-500 mt-1 mb-3">{cert.year}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{cert.description}</p>
            <PrimaryButton
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              aria-label={`View certificate: ${cert.title}`}
              className="w-full sm:w-auto"
            >
              View Certificate
            </PrimaryButton>
          </ModernCard>
        ))}
      </div>
    </Section>
  );
}

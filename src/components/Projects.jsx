import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Full-Stack LMS',
    description: 'A Django REST & React-based LMS with JWT auth, user roles, dynamic course listing, and a responsive UI.',
    image: '/projects/lms.png',
    techStack: ['Django REST', 'React', 'JWT', 'Bootstrap 5'],
    github: 'https://github.com/najibulazam/Full-Stack-LMS-Learning-Management-System-with-Django-React',
    demo: '#',
  },
  {
    id: 2,
    title: 'Voting Web App',
    description: 'Secure Django voting system with student ID login and real-time result visualization.',
    image: '/projects/voting.png',
    techStack: ['Django', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/najibulazam/Django-Voting-Application',
    demo: '#',
  },
  {
    id: 3,
    title: 'NextCircle',
    description: 'Django-powered social platform with authentication, likes, comments, profile management & filtering.',
    image: '/projects/social.png',
    techStack: ['Django', 'Bootstrap', 'Pillow'],
    github: 'https://github.com/najibulazam/NextCircle-Social-App',
    demo: '#',
  },
  {
    id: 4,
    title: 'Najib Blogsite',
    description: 'Django blog with image uploads, category filtering, and CRUD functionality.',
    image: '/projects/blog.png',
    techStack: ['Django', 'Bootstrap', 'Pillow'],
    github: 'https://github.com/najibulazam/Najib-Blog-Project',
    demo: '#',
  },
  {
    id: 5,
    title: 'Student Management System',
    description: 'A Django app for managing student records with modal-based UI and search/sort functionality.',
    image: '/projects/sms.png',
    techStack: ['Django', 'Bootstrap', 'PostgreSQL'],
    github: 'https://github.com/najibulazam/Student-Management-System-App-by-Django',
    demo: '#',
  },
  {
    id: 6,
    title: 'React Weather App',
    description: 'Responsive weather app using React and WeatherAPI with live data and modern UI.',
    image: '/projects/weather.png',
    techStack: ['React', 'WeatherAPI', 'Vite'],
    github: 'https://github.com/najibulazam/React-Weather-App',
    demo: '#',
  },
  {
    id: 7,
    title: 'Home Decor Website',
    description: 'Full-stack site for interior agency built with Django, Tailwind, and interactive forms.',
    image: '/projects/home.png',
    techStack: ['Django', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/najibulazam/Full-Stack-Home-Decor-Website',
    demo: '#',
  },
  {
    id: 8,
    title: 'Django Health Care App',
    description: 'A responsive healthcare web app with doctor booking system and admin management.',
    image: '/projects/health.png',
    techStack: ['Django', 'Tailwind CSS'],
    github: 'https://github.com/najibulazam/Django-Health-Care-APP',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-12 max-w-7xl mx-auto font-mono text-black dark:text-white bg-white dark:bg-black transition-colors"
      aria-label="Projects Section"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-10 text-cyan-400 text-center">Projects</h2>

      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ id, title, description, image, techStack, github, demo }) => (
          <article
            key={id}
            className="bg-gray-800 rounded-2xl shadow-md hover:shadow-cyan-500 transition-all duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={image}
              alt={`${title} screenshot`}
              className="w-full h-48 object-cover"
              loading="lazy"
            />

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 text-sm flex-grow">{description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-600 text-cyan-100 text-xs font-semibold rounded-full px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub for ${title}`}
                  className="text-gray-300 hover:text-cyan-400 transition text-xl"
                >
                  <FaGithub />
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo of ${title}`}
                  className="text-gray-300 hover:text-cyan-400 transition text-xl"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

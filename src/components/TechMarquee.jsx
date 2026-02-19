import {
  SiReact,
  SiNextdotjs,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiPython,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiJavascript,
  SiGithub,
} from 'react-icons/si';

const TECH = [
  { icon: SiReact,       name: 'React',      color: '#22d3ee' },
  { icon: SiNextdotjs,   name: 'Next.js',    color: '#e2e8f0' },
  { icon: SiDjango,      name: 'Django',     color: '#4ade80' },
  { icon: SiFastapi,     name: 'FastAPI',    color: '#34d399' },
  { icon: SiPostgresql,  name: 'PostgreSQL', color: '#60a5fa' },
  { icon: SiPython,      name: 'Python',     color: '#facc15' },
  { icon: SiTypescript,  name: 'TypeScript', color: '#818cf8' },
  { icon: SiTailwindcss, name: 'Tailwind',   color: '#06b6d4' },
  { icon: SiGit,         name: 'Git',        color: '#f97316' },
  { icon: SiDocker,      name: 'Docker',     color: '#38bdf8' },
  { icon: SiJavascript,  name: 'JavaScript', color: '#fbbf24' },
  { icon: SiGithub,      name: 'GitHub',     color: '#a5b4fc' },
];

/** Renders one full set of tech pills. aria-hidden so screen readers skip duplicates. */
function IconSet({ hidden = false }) {
  return (
    <ul
      className="flex items-center gap-3 sm:gap-4 shrink-0"
      aria-hidden={hidden || undefined}
    >
      {TECH.map(({ icon: Icon, name, color }) => (
        <li
          key={name}
          className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full
                     bg-surface-xs
                     border border-ui
                     backdrop-blur-sm
                     text-xs sm:text-sm font-semibold font-mono
                     whitespace-nowrap select-none"
        >
          <Icon style={{ color }} className="text-sm sm:text-base leading-none flex-shrink-0" />
          <span className="text-gray-700 dark:text-gray-300">{name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TechMarquee() {
  return (
    <div
      className="relative z-10 w-full py-4 sm:py-5 overflow-hidden marquee-outer"
      role="region"
      aria-label="Tech stack"
    >
      {/*
        Two identical icon sets placed in a flex row.
        The animation translates by -50% (= exactly one set width),
        so when the first set scrolls off the second set looks identical — seamless loop.
      */}
      <div className="marquee-track flex items-center gap-3 sm:gap-4">
        <IconSet />
        <IconSet hidden />
      </div>
    </div>
  );
}

import SectionHeading from './SectionHeading';
import Section from './Section';
import ModernCard from './ModernCard';

const extracurricularData = [
  {
    role: 'IT Secretary',
    org: 'ECE Club of HSTU',
    time: 'February 2025 – October 2025',
    tags: ['Technical Leadership', 'IT Infrastructure', 'Event Technology', 'System Management'],
    orgColor: 'text-accent',
  },
  {
    role: 'IT Secretary',
    org: 'HSTU Career Club',
    time: 'January 2025 – October 2025',
    tags: ['Technical Operations', 'Digital Systems', 'Career Event Support'],
    orgColor: 'text-accent',
  },
];

export default function Leadership() {
  return (
    <Section id="leadership" ariaLabel="Leadership section">
      <SectionHeading>Leadership &amp; Volunteering</SectionHeading>

      <div className="space-y-4 sm:space-y-6">
        {extracurricularData.map((item, idx) => (
          <ModernCard
            key={idx}
            className="card-accent p-5 sm:p-6"
          >
            <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">{item.time}</p>
            <h3 className="text-base sm:text-lg font-semibold mt-2 text-gray-900 dark:text-white">
              {item.role} - <span className={`${item.orgColor}`}>{item.org}</span>
            </h3>
            <div className="flex gap-2 mt-4 flex-wrap">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="tag-accent text-xs font-semibold rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ModernCard>
        ))}
      </div>
    </Section>
  );
}
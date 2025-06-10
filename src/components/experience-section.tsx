import { ArrowUpRight } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  url: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "Planify",
    role: "Full Stack Engineer",
    period: "May 2024 - Aug 2024",
    url: "https://www.planify.la"
  },
  {
    company: "Green Horizon S.A.S",
    role: "Desarrollador Web Junior",
    period: "Mar 2025 - present",
    url: "https://greenhorizon.com.co/",
  },
];

export function ExperienceSection() {
  return (
    <section>
      <h2 className='text-2xl md:text-3xl font-semibold'>Experience</h2>
      <div className="flex flex-col my-4 md:my-8 pb-4 md:pb-8 gap-x-14 w-full space-between">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between my-4 md:my-6 gap-x-4 md:gap-0 w-full"
          >
            <div className="md:flex-1">
              <a
                href={exp.url}
                target="_blank"
                className="text-lg md:text-xl font-medium hover:text-[#FF6B45] inline-flex items-center break-words"
              >
                {exp.company}
                <ArrowUpRight className="w-4 h-4 ml-1 md:ml-0.5 shrink-0" />
              </a>
            </div>

            <div className="md:flex-1 flex flex-col content-end md:items-end space-y-1 md:space-y-2">
              <h3 className="font-medium text-base md:text-lg break-words">{exp.role}</h3>
              <p className="text-gray-200 text-sm md:text-base">{exp.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

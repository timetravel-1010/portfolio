import { ArrowUpRight } from 'lucide-react';

interface ExperienceItem {
  company: string
  role: string
  period: string
  url?: string
}

const experiences: ExperienceItem[] = [
  {
    company: "Planify",
    role: "Full Stack Engineer",
    period: "May 2024 - Aug 2024",
    url: "https://www.planify.la"
  },
]

export function Experience() {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div key={index} className="flex justify-between items-start border-b border-gray-100 pb-8">
          <div className="flex-1">
            {exp.url ? (
              <a href={exp.url} target="_blank" className="text-xl font-medium hover:text-[#FF6B45] inline-flex items-center">
                {exp.company}
                <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </a>
            ) : (
              <span className="text-xl font-medium">{exp.company}</span>
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-medium">{exp.role}</h3>
            <p className="text-gray-200">{exp.period}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

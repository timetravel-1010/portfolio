import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface Project {
  name: string
  description: string
  url?: string
}

const projects: Project[] = [
  {
    name: 'Indexer',
    description: 'CLI tool written in Go to index email data into ZincSearch',
    url: "/projects/indexer",
  },
  {
    name: 'SaludLegal',
    description: 'Web App for manage medical records',
    url: '/projects/saludlegal',
  },
  {
    name: 'JSON Parser',
    description: 'Parser for json files written in Go',
    url: '/projects/jsonparser',
  },
];


interface Project {
  name: string;
  description: string;
  url?: string;
};

interface ProjectsSectionProps {
  layout?: 'grid' | 'list';
  className?: string;
};

export function ProjectsSection({
  layout = 'grid',
  className = '',
}: ProjectsSectionProps) {
  return (
    <div className={`my-14 space-y-8 ${className}`}>
      <div className={`my-8 md:my-14 ${layout === 'grid'
        ? 'grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'
        : 'flex flex-col gap-4'
        }`}>
        {projects.map((p, index) => (
          <Link
            key={index}
            className={`p-2 md:p-4 transition-all rounded-lg ${layout === 'grid'
              ? 'hover:bg-white/5'
              : 'hover:bg-white/5 border-b border-white/10 last:border-b-0'
              }`}
            href={p.url || ''}
          >
            <div className='flex items-center'>
              <h3 className={`text-lg md:text-xl font-medium ${layout === 'grid'
                ? 'hover:text-[#FF6B45] underline'
                : 'hover:text-[#FF6B45]'
                }`}>
                {p.name}
              </h3>
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 ml-0.5" />
            </div>
            <p className={`font-medium py-2 ${layout === 'grid'
              ? 'text-sm md:text-base'
              : 'text-base md:text-lg'
              }`}>
              {p.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

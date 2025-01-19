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
    name: 'SaludLegal Web App',
    description: 'Web App for manage medical records',
    url: '/projects/saludlegal',
  },
  {
    name: 'JSON Parser',
    description: 'Parser for json files written in Go',
    url: '/projects/jsonparser',
  },
]

export function Projects() {
  return (
    <div className="mt-4 grid grid-cols-2">
      {projects.map((p, index) => (
        <Link key={index} className="p-4" href={p.url || ''}>
          <div className='flex'>
            <h3 className="text-xl font-medium hover:text-[#FF6B45] flex-col items-center underline">
              {p.name}
            </h3>
            <ArrowUpRight className="w-4 h-4 ml-0.5" />
          </div>
          <p className="font-medium py-2">{p.description}</p>
        </Link>
      ))}
    </div>
  )
}

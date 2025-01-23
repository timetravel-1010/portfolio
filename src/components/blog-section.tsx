import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface Post {
  title: string;
  date: string;
  url: string;
  finished?: boolean;
};

const posts: Post[] = [
  {
    title: 'Building a JSON Parser in Go',
    date: '19/01/2025',
    url: 'blogs/jsonparser',
    finished: true,
  },
  {
    title: 'Testing Ollama 3.2 Vision',
    date: '.../01/2025',
    url: 'blogs/ollama-vision',
    finished: false,
  },
]

export function BlogSection() {
  return (
    <div className="space-y-4 text-lg">
      <ol className="space-y-4">
        {posts.map(p => (
          p.finished ? (
            <li key={p.url} className="hover:text-[#FF6B45]" >
              <Link href={p.url}>
                - {p.date} {p.title}
              </Link>
            </li>) : (
            <li key={p.title}>
              - (Coming Soon...) {p.title}
            </li>
          )
        ))}
      </ol>
    </div>
  )
}

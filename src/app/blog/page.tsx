import Link from "next/link";

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
    finished: false,
  },
  {
    title: 'Testing Ollama 3.2 Vision',
    date: '.../01/2025',
    url: 'blogs/ollama-vision',
    finished: false,
  },
];

export default function Blog() {
  return (
    <main className="mt-20 space-y-12">
      <h1 className="text-4xl font-bold">Blog</h1>
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
    </main >
  );
}

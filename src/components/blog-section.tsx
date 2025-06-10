import Link from 'next/link';

interface Post {
  title: string;
  date: string;
  url: string;
  finished?: boolean;
};

const posts: Post[] = [
  {
    title: '',
    date: '',
    url: '',
    finished: false,
  },
]

export function BlogSection() {
  return (
    <section>
      <div className="my-14 space-y-8">
        <h2 className='text-3xl font-semibold'>Blog</h2>
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
      </div>
    </section>
  )
}

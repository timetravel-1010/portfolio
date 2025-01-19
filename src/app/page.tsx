import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"

export default function Home() {
  return (
    <main className="mt-20 space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Hello/</h1>
        <div className="space-y-4 text-lg">
          <p>I&apos;m Daniel V&eacute;lez, a Software Engineer.</p>
          <p>
            I enjoy learning new technologies and using GNU/Linux and Vim (btw).
          </p>
          <p>
            I&apos;ve worked as a Full Stack Engineer for a startup and have completed some personal
            projects which you can find on this website
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-8">Experience</h2>
        <Experience />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-8">Projects</h2>
        <Projects />
      </section>
    </main>
  )
}

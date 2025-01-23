import { BlogSection } from "@/components/blog-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <main className="">
      <blockquote className="italic border-l-4 border-[#D4C5A9] pl-4 py-2 my-4 mt-0 text-lg">
        "Any sufficiently advanced technology is indistinguishable from magic."
        <cite className="not-italic block mt-2 text-sm text-gray-400">- Arthur C. Clarke</cite>
      </blockquote>

      <section className="space-y-12 mb-20 mt-10">
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
        <ExperienceSection />
      </section>

      <div className="border-b border-gray-100"></div>

      <section>
        <div className="my-14 space-y-8">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <ProjectsSection />
        </div>
      </section>

      <div className="border-b border-gray-100"></div>

      <section>
        <div className="my-14 space-y-8">
          <h2 className='text-3xl font-semibold'>Blog</h2>
          <BlogSection />
        </div>
      </section>

    </main>
  )
}

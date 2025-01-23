import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1A1500] text-[#D4C9A9] mt-24 md:mt-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0">
          {/* Navigation Section */}
          <div className="flex-1 space-y-3">
            <h3 className="text-lg font-semibold text-[#F0E6D2]">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="hover:text-[#F0E6D2] transition-colors text-sm md:text-base"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="hover:text-[#F0E6D2] transition-colors text-sm md:text-base"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="hover:text-[#F0E6D2] transition-colors text-sm md:text-base"
              >
                Blog
              </Link>
              <Link
                href="/links"
                className="hover:text-[#F0E6D2] transition-colors text-sm md:text-base"
              >
                Links
              </Link>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="flex-1 space-y-3">
            <h3 className="text-lg font-semibold text-[#F0E6D2]">Connect</h3>
            <div className="flex space-x-4 md:space-x-6">
              <a
                href="https://github.com/timetravel-1010"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F0E6D2] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 md:w-7 md:h-7" />
              </a>
              <a
                href="https://linkedin.com/in/danielvelezc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F0E6D2] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

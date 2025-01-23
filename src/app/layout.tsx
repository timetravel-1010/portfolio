import type { Metadata } from "next"
import { Fira_Code } from 'next/font/google'
import "./globals.css"
import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
}

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${firaCode.className} custom-bg text-gray-100`}>
        <div className="max-w-3xl mx-auto my-8">
          <Navigation />
          <div
            className="
            before:absolute before:-z-10 before:hidden before:h-64 before:w-64 
            before:-translate-x-14 before:-translate-y-14 before:bg-[radial-gradient(#ffffff99_1px,transparent_1px)] 
            before:[background-size:12px_12px] before:dark:bg-[radial-gradient(#ffffff99_1px,transparent_1px)] 
            after:absolute after:right-[-5rem] after:-z-10 after:hidden after:h-64 
            after:w-64 after:-translate-x-[calc(2rem+12px)] after:-translate-y-[calc(12rem+12px)] 
            after:bg-[radial-gradient(#ffffff99_1px,transparent_1px)] 
            after:[background-size:12px_12px] after:dark:bg-[radial-gradient(#ffffff99_1px,transparent_1px)]
            custom-bg md:p-5 md:before:block md:after:block relative
            mt-16 p-4"
          >
            {children}
          </div>
        </div >
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from "next"
import { Fira_Code } from 'next/font/google'
import "./globals.css"
import { Navigation } from "@/components/navigation"


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
}

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${firaCode.className} custom-bg text-gray-100`}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Navigation />
          {children}
        </div >
      </body>
    </html>
  )
}

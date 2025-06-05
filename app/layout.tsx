import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import FloatingActionButton from "./components/FloatingActionButton"
import { Toaster } from "./components/ui/toaster"
import { BackToTop } from "@/components/BackToTop"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kudakwashe Taderera | Technopreneur & Full Stack Software Engineer",
  description:
    "Passionate technopreneur and full stack software engineer specializing in scalable systems for education, career growth, and real estate. Available for sponsorships and career opportunities.",
  keywords:
    "technopreneur, full stack developer, data engineer, software engineer, React, Django, AWS, machine learning, sponsorship opportunities, hire me",
  authors: [{ name: "Kudakwashe Taderera" }],
  openGraph: {
    title: "Kudakwashe Taderera | Technopreneur & Software Engineer",
    description:
      "Building scalable and impactful software systems. Seeking sponsorships and open to career opportunities.",
    type: "website",
    url: "https://kudakwashe-taderera.vercel.app",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kudakwashe Taderera - Technopreneur & Full Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kudakwashe Taderera | Technopreneur & Software Engineer",
    description: "Building scalable software systems. Seeking sponsorships and career opportunities.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kudakwashe Taderera",
  jobTitle: "Technopreneur & Full Stack Software Engineer",
  description: "Passionate about building scalable systems for education, career growth, and real estate",
  url: "https://kudakwashe-taderera.vercel.app",
  sameAs: [
    "https://linkedin.com/in/kudakwashe-taderera",
    "https://github.com/kudakwashe-taderera",
    "https://twitter.com/kudakwashe_t",
  ],
  knowsAbout: [
    "Full Stack Development",
    "Data Engineering",
    "Machine Learning",
    "React",
    "Django",
    "AWS",
    "PostgreSQL",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={inter.className}>
        <div className="bg-white text-gray-900 min-h-screen">
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingActionButton />
          <BackToTop />
          <Toaster />
        </div>
      </body>
    </html>
  )
}

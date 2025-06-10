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
    "Passionate technopreneur and full stack software engineer specializing in scalable systems for education, career growth, and real estate. Open to sponsorships and new opportunities.",
  keywords:
    "technopreneur, full stack developer, software engineer, React, Django, AWS, data engineer, Zimbabwe, sponsorship, UIUC, Kudakwashe Taderera",
  authors: [{ name: "Kudakwashe Taderera" }],
  metadataBase: new URL("https://kudakwashetaderera.me"),
  openGraph: {
    title: "Kudakwashe Taderera | Technopreneur & Software Engineer",
    description:
      "Building scalable and impactful systems across education, careers, and real estate. Connect for collaborations and sponsorships.",
    url: "https://kudakwashetaderera.me",
    siteName: "Kudakwashe Taderera",
    type: "website",
    images: [
      {
        url: "https://kudakwashetaderera.me/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kudakwashe Taderera - Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kudakwashe_t",
    title: "Kudakwashe Taderera | Technopreneur & Software Engineer",
    description:
      "Building scalable systems across education, careers, and real estate.",
    images: ["https://kudakwashetaderera.me/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://kudakwashetaderera.me" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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

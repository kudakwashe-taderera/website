import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import FloatingActionButton from "./components/FloatingActionButton"
import { Toaster } from "./components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kudakwashe Taderera | Software Developer, Data Scientist, Website Developer | CodeXa",
  description:
    "Leading software developer, data scientist, and founder of CodeXa. Custom web, data, and AI solutions for businesses in USA, Australia, South Africa, Zimbabwe. Book a consultation today!",
  keywords:
    "software developer, data scientist, website developer, software companies, CodeXa, Kudakwashe Taderera, full stack, AI, machine learning, web development, USA, Australia, South Africa, Zimbabwe, custom software, cloud, SaaS, digital solutions, consulting, engineering",
  authors: [{ name: "Kudakwashe Taderera" }],
  metadataBase: new URL("https://kudakwashetaderera.me"),
  openGraph: {
    title: "Kudakwashe Taderera | Software Developer, Data Scientist, Website Developer | CodeXa",
    description:
      "Custom software, data, and AI solutions for businesses in USA, Australia, South Africa, Zimbabwe. Work with Kudakwashe Taderera and CodeXa for world-class digital innovation.",
    url: "https://kudakwashetaderera.me",
    siteName: "Kudakwashe Taderera",
    type: "website",
    images: [
      {
        url: "https://kudakwashetaderera.me/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Kudakwashe Taderera - Software Developer & Data Scientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kudakwashe_t",
    title: "Kudakwashe Taderera | Software Developer, Data Scientist, Website Developer | CodeXa",
    description:
      "Custom software, data, and AI solutions for businesses in USA, Australia, South Africa, Zimbabwe. Work with Kudakwashe Taderera and CodeXa for world-class digital innovation.",
    images: ["https://kudakwashetaderera.me/og-image.png"], 
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
  "name": "Kudakwashe Taderera",
  "jobTitle": "Software Developer, Data Scientist, Website Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "CodeXa",
    "url": "https://kudakwashetaderera.me"
  },
  "url": "https://kudakwashetaderera.me",
  "sameAs": [
    "https://linkedin.com/in/kudakwashe-taderera",
    "https://github.com/kudakwashe-taderera"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": ["USA", "Australia", "South Africa", "Zimbabwe"]
  },
  "description": "Leading software developer, data scientist, and founder of CodeXa. Custom web, data, and AI solutions for businesses in USA, Australia, South Africa, Zimbabwe.",
  "alumniOf": "University of Illinois Urbana-Champaign",
  "email": "info@kudakwashetaderera.me"
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
          <Toaster />
        </div>
      </body>
    </html>
  )
}

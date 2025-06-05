import Link from "next/link"

export default function SitemapPage() {
  const pages = [
    {
      title: "Main Pages",
      links: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" },
        { href: "/testimonials", label: "Testimonials" },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { href: "/contact?type=fullstack", label: "Full Stack Development" },
        { href: "/contact?type=data", label: "Data Engineering" },
        { href: "/contact?type=ai", label: "AI/ML Solutions" },
        { href: "/contact?type=consulting", label: "Technical Consulting" },
        { href: "/contact?type=mobile", label: "Mobile Development" },
        { href: "/contact?type=cloud", label: "Cloud Architecture" },
      ],
    },
    {
      title: "Legal & Info",
      links: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/sitemap", label: "Sitemap" },
      ],
    },
  ]

  return (
    <div className="pt-20 pb-16">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
        
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {pages.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-uiuc-orange transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 
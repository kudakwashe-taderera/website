import Link from "next/link"

export default function SitemapPage() {
  const pages = [
    {
      title: "Main Pages",
      links: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/companies", label: "Companies" },
        { href: "/services", label: "Services" },
        { href: "/blog", label: "Blog" },
        { href: "/testimonials", label: "Testimonials" },
        { href: "/contact", label: "Contact" },
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
    <div className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="container-custom max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-uiuc-orange mb-8">Sitemap</h1>
        <div className="grid gap-12 md:grid-cols-2">
          {pages.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-semibold text-uiuc-blue mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-uiuc-orange font-medium transition-colors"
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
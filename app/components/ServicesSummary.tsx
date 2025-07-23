import { Wrench, Globe, Palette, BarChart2, Layers } from "lucide-react";
import Link from "next/link";

const summaryServices = [
  {
    icon: <Wrench className="w-8 h-8 text-uiuc-orange" />,
    title: "Software Engineering",
    desc: "Full-stack web, custom apps, APIs, and mobile-responsive design.",
  },
  {
    icon: <Globe className="w-8 h-8 text-uiuc-blue" />,
    title: "Website & Branding",
    desc: "UI/UX, redesigns, hosting, and business/personal sites.",
  },
  {
    icon: <Palette className="w-8 h-8 text-purple-600" />,
    title: "Creative & Branding",
    desc: "Logos, social banners, brand kits, and print materials.",
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-green-600" />,
    title: "Digital Marketing",
    desc: "Social media, ads, content planning, and analytics.",
  },
  {
    icon: <Layers className="w-8 h-8 text-indigo-600" />,
    title: "Data Services",
    desc: "ETL, dashboards, data science, and automation.",
  },
];

export default function ServicesSummary() {
  return (
    <section className="container-custom py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">What We Offer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {summaryServices.map((service) => (
          <Link
            key={service.title}
            href="/services"
            className="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 card-hover"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-uiuc-orange transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-2">{service.desc}</p>
            <span className="inline-block mt-2 text-uiuc-blue font-medium text-xs group-hover:underline">Learn more</span>
          </Link>
        ))}
      </div>
    </section>
  );
} 
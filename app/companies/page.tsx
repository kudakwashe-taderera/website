"use client";

import CompaniesSection from "../components/CompaniesSection";

export default function CompaniesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pb-16">
      <section className="container-custom pt-24 pb-12 text-center animate-slide-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Companies Served</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          A showcase of organizations and businesses I've worked with across multiple industries and countries.
        </p>
      </section>
      <CompaniesSection showCount={null} showViewAll={false} />
    </main>
  );
} 
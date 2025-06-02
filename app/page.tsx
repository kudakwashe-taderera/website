"use client"

import HeroSection from "./components/HeroSection"
import SponsorshipCallout from "./components/SponsorshipCallout"
import CareerCallout from "./components/CareerCallout"
import StatsSection from "./components/StatsSection"
import SkillsSection from "./components/SkillsSection"
import FeaturedProjects from "./components/FeaturedProjects"
import CompaniesSection from "./components/CompaniesSection"
import TestimonialsSection from "./components/TestimonialsSection"
import NewsletterSection from "./components/NewsletterSection"
import CTASection from "./components/CTASection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SponsorshipCallout />
      <CareerCallout />
      <StatsSection />
      <SkillsSection />
      <FeaturedProjects />
      <CompaniesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <CTASection />
    </>
  )
}

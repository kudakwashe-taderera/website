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
import ParticlesBackground from "./components/ParticlesBackground"
import ServicesSummary from "./components/ServicesSummary"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSummary />
      <SponsorshipCallout />
      <CareerCallout />
      <StatsSection />
      <SkillsSection />
      <FeaturedProjects showCount={3} showViewAll />
      <CompaniesSection showCount={3} showViewAll />
      <TestimonialsSection />
      <NewsletterSection />
      <CTASection />
    </>
  )
}

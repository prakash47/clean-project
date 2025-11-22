'use client'

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import LoanTypes from "@/components/LoanTypes"
import FeaturesComparison from "@/components/FeaturesComparison"
import WhyChooseUs from "@/components/WhyChooseUs"
import Testimonials from "@/components/Testimonials"
import ProcessSteps from "@/components/ProcessSteps"
import BlogSection from "@/components/BlogSection"
import ApplyNowModal from "@/components/ApplyNowModal"

export default function Home() {
  const [applyModalOpen, setApplyModalOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <Hero onApplyClick={() => setApplyModalOpen(true)} />
        <LoanTypes />
        <FeaturesComparison />
        <WhyChooseUs />
        <Testimonials />
        <ProcessSteps />
        <BlogSection />
      </main>

      <Footer />
      <ApplyNowModal open={applyModalOpen} onOpenChange={setApplyModalOpen} />
    </div>
  )
}

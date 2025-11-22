import Hero from "@/components/home/Hero"
import LoanTypes from "@/components/home/LoanTypes"
import FeaturesComparison from "@/components/home/FeaturesComparison"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import Testimonials from "@/components/home/Testimonials"
import ProcessSteps from "@/components/home/ProcessSteps"
import BlogSection from "@/components/home/BlogSection"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <LoanTypes />
        <FeaturesComparison />
        <WhyChooseUs />
        <Testimonials />
        <ProcessSteps />
        <BlogSection />
      </main>

      <Footer />
    </div>
  )
}
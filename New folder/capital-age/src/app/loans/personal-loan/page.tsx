import { Metadata } from "next"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, TrendingUp, Clock, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Personal Loan - Quick Approval & Low Interest Rates",
  description: "Get instant personal loan approval with competitive interest rates starting from 9.99%. Apply online in minutes with minimal documentation.",
  keywords: ["personal loan", "instant personal loan", "low interest personal loan", "online personal loan"],
}

export default function PersonalLoanPage() {
  const features = [
    { icon: TrendingUp, title: "Loan up to ₹40 Lakhs", description: "Get high-value loans" },
    { icon: Clock, title: "Quick Approval", description: "Approval in 24-48 hours" },
    { icon: Shield, title: "Minimal Documentation", description: "Simple process" },
    { icon: CheckCircle2, title: "Flexible Tenure", description: "Up to 5 years" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Personal Loan
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Quick approval with competitive interest rates starting from 9.99%
              </p>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Apply Now
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card key={index} className="border-2 hover:shadow-xl transition-all">
                      <CardContent className="p-6 text-center space-y-4">
                        <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-bold text-foreground">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* More sections... */}
      </main>

      <Footer />
    </div>
  )
}
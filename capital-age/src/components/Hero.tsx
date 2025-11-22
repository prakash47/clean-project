'use client'

import { Button } from "@/components/ui/button";
import { CheckCircle2, Star } from "lucide-react";

interface HeroProps {
  onApplyClick?: () => void;
}

export default function Hero({ onApplyClick }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            All Loans, One Click Away
            <span className="block mt-2 text-primary">Partnered with India's Top Banks & NBFCs</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get pre-approved in 2 minutes. No hidden fees. Competitive interest rates starting from{" "}
            <span className="font-bold text-secondary">9.99% p.a.</span>
          </p>

          {/* Trust Badge */}
          <div className="flex items-center justify-center space-x-2 text-sm md:text-base">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">10,000+ Happy Customers</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <a href="/emi-calculator">Calculate EMI</a>
            </Button>
            <Button
              onClick={onApplyClick}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Apply Free
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-sm md:text-base">
              <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
              <span className="text-foreground font-medium">Quick Approval: 90% in 24 Hrs</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm md:text-base">
              <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
              <span className="text-foreground font-medium">50+ Partner Banks/NBFCs</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm md:text-base">
              <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
              <span className="text-foreground font-medium">Zero Prepayment Charges</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

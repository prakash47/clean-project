import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Secured ₹5L business loan in just 3 days! The process was incredibly smooth and the team was very supportive. Highly recommend LoanVista for quick business financing.",
    loanType: "Business Loan",
  },
  {
    name: "Priya Sharma",
    location: "Bangalore, Karnataka",
    rating: 5,
    text: "Got my home loan approved within 48 hours with the best interest rate. The EMI calculator helped me plan my finances perfectly. Excellent service!",
    loanType: "Home Loan",
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "Personal loan of ₹3L approved despite average CIBIL score. The doorstep service and minimal documentation made it hassle-free. Thank you LoanVista!",
    loanType: "Personal Loan",
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad, Telangana",
    rating: 5,
    text: "Education loan for my daughter's abroad studies was processed seamlessly. The moratorium period feature is a great relief. Professional and caring team!",
    loanType: "Education Loan",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trusted us with their financial needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border bg-card relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-16 w-16 text-primary" />
              </div>
              <CardContent className="p-6 space-y-4 relative">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-base text-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-secondary">{testimonial.loanType}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center">
          <div className="space-y-1">
            <p className="text-3xl font-bold text-primary">10,000+</p>
            <p className="text-sm text-muted-foreground">Happy Customers</p>
          </div>
          <div className="h-12 w-px bg-border hidden md:block"></div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-primary">₹500 Cr+</p>
            <p className="text-sm text-muted-foreground">Loans Disbursed</p>
          </div>
          <div className="h-12 w-px bg-border hidden md:block"></div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-primary">4.9/5</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="h-12 w-px bg-border hidden md:block"></div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-primary">100+</p>
            <p className="text-sm text-muted-foreground">Partner Locations</p>
          </div>
        </div>
      </div>
    </section>
  );
}

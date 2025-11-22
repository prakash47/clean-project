import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  User,
  Home,
  Briefcase,
  Gem,
  Car,
  GraduationCap,
  Building2,
  Building,
} from "lucide-react";

const loanTypes = [
  {
    icon: User,
    title: "Personal Loan",
    description: "₹50K - ₹40L | 9.99% Onwards",
    details: "For emergencies, weddings, travel. Low CIBIL flexibility.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Home,
    title: "Home Loan",
    description: "Up to ₹10 Crores",
    details: "Balance transfer options for EMI savings. Competitive rates.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Briefcase,
    title: "Business Loan",
    description: "Up to ₹50 Lakhs",
    details: "Unsecured/collateral-free for MSMEs. CGTMSE-backed.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Gem,
    title: "Gold Loan",
    description: "Up to 75% LTV",
    details: "Quick disbursal against jewelry. Instant approval.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Car,
    title: "Car/Two-Wheeler Loan",
    description: "Flexible Tenures up to 7 Years",
    details: "For new/used vehicles. Easy documentation.",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: GraduationCap,
    title: "Education Loan",
    description: "India/Abroad Studies",
    details: "Moratorium periods available. Cover tuition & living costs.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Building2,
    title: "Loan Against Property",
    description: "Up to 60% Property Value",
    details: "For expansion or debt consolidation. Low interest rates.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: Building,
    title: "Commercial Property Loan",
    description: "Real Estate Investments",
    details: "For commercial properties and real estate ventures.",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
];

export default function LoanTypes() {
  return (
    <section id="loans" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Comprehensive Loan Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access all major loan types from India's leading banks and NBFCs. Find the perfect financing solution for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loanTypes.map((loan, index) => {
            const Icon = loan.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardHeader className="space-y-3">
                  <div className={`w-12 h-12 rounded-lg ${loan.bgColor} flex items-center justify-center`}>
                    <Icon className={`h-6 w-6 ${loan.color}`} />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{loan.title}</CardTitle>
                  <CardDescription className="text-sm font-semibold text-secondary">
                    {loan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {loan.details}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href="#apply">Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Additional perks: Free credit reports, debt consolidation tools, and government scheme tie-ups (e.g., PMMY for MSMEs)
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
            <a href="#apply">Apply for Any Loan</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

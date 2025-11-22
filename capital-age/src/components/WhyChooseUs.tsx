import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, TrendingDown, Shield, Award, Zap } from "lucide-react";

const stats = [
  {
    icon: Clock,
    title: "Quick Approval",
    value: "90%",
    subtitle: "Approved in 24 Hours",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Partner Network",
    value: "50+",
    subtitle: "Banks & NBFCs",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: TrendingDown,
    title: "EMI Savings",
    value: "20%",
    subtitle: "via Balance Transfer",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Shield,
    title: "Secure Process",
    value: "100%",
    subtitle: "SSL Encrypted",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Award,
    title: "Customer Rating",
    value: "4.9/5",
    subtitle: "10,000+ Reviews",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Zap,
    title: "AI Pre-Approval",
    value: "2 Min",
    subtitle: "Instant Decision",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

const partners = [
  "State Bank of India",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Bajaj Finance",
  "Tata Capital",
  "Aditya Birla Finance",
  "Kotak Mahindra Bank",
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose LoanVista India?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted bridge to India's top lenders. We make loan approvals faster, simpler, and more transparent.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className={`w-14 h-14 rounded-lg ${stat.bgColor} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`h-7 w-7 ${stat.color}`} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Partner Logos Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Our Trusted Partners
            </h3>
            <p className="text-muted-foreground">
              Partnered with India's leading banks and NBFCs for your financial needs
            </p>
          </div>

          <div className="bg-muted/30 rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow"
                >
                  <p className="text-sm md:text-base font-semibold text-center text-foreground">
                    {partner}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-12 bg-primary/5 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-foreground">Doorstep Service</h4>
              <p className="text-sm text-muted-foreground">
                Complete documentation and verification at your convenience
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-foreground">Zero Hidden Charges</h4>
              <p className="text-sm text-muted-foreground">
                Transparent pricing with no prepayment penalties
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-foreground">Digital-First Approach</h4>
              <p className="text-sm text-muted-foreground">
                Eco-friendly paperless process with instant updates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

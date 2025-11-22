import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FeaturesComparison() {
  const features = [
    { name: "Quick Approval (24-48 hrs)", capitalAge: true, traditional: false },
    { name: "Minimal Documentation", capitalAge: true, traditional: false },
    { name: "50+ Partner Banks/NBFCs", capitalAge: true, traditional: false },
    { name: "Competitive Interest Rates", capitalAge: true, traditional: true },
    { name: "Zero Prepayment Charges", capitalAge: true, traditional: false },
    { name: "Flexible Tenure Options", capitalAge: true, traditional: true },
    { name: "Digital Application Process", capitalAge: true, traditional: false },
    { name: "Dedicated Relationship Manager", capitalAge: true, traditional: false },
    { name: "Free Credit Score Check", capitalAge: true, traditional: false },
    { name: "Doorstep Service", capitalAge: true, traditional: false },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent via-background to-accent">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Capital Age Stands Out
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we compare to traditional lenders and make your loan journey smoother
            </p>
          </div>

          <Card className="border-2 shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 pb-8">
              <div className="grid grid-cols-3 gap-4">
                <div></div>
                <div className="text-center">
                  <CardTitle className="text-2xl font-bold text-primary">Capital Age</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">Modern Lending</p>
                </div>
                <div className="text-center">
                  <CardTitle className="text-2xl font-bold text-muted-foreground">Traditional Banks</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">Conventional Process</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 gap-4 p-4 md:p-6 items-center ${
                    index % 2 === 0 ? "bg-muted/30" : "bg-background"
                  } hover:bg-accent/50 transition-colors`}
                >
                  <div className="font-medium text-foreground text-sm md:text-base">{feature.name}</div>
                  <div className="flex justify-center">
                    {feature.capitalAge ? (
                      <div className="flex items-center justify-center w-10 h-10 bg-success/20 rounded-full">
                        <Check className="h-6 w-6 text-success" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-10 h-10 bg-destructive/20 rounded-full">
                        <X className="h-6 w-6 text-destructive" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {feature.traditional ? (
                      <div className="flex items-center justify-center w-10 h-10 bg-success/20 rounded-full">
                        <Check className="h-6 w-6 text-success" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-10 h-10 bg-destructive/20 rounded-full">
                        <X className="h-6 w-6 text-destructive" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 p-6 md:p-8 rounded-2xl border-2 border-border">
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Ready to Experience the Difference?
                </h3>
                <p className="text-muted-foreground">
                  Join 10,000+ satisfied customers who chose the smarter way to borrow
                </p>
              </div>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg whitespace-nowrap">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { FileText, Search, Upload, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Quick Inquiry",
    description: "Fill out our simple online form with basic details. Takes less than 2 minutes.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    icon: Search,
    title: "Compare Quotes",
    description: "Get instant quotes from 50+ banks and NBFCs. Choose the best offer for you.",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    icon: Upload,
    title: "Upload Documents",
    description: "Submit minimal documents digitally. Our team verifies and processes quickly.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    icon: CheckCircle,
    title: "Instant Disbursal",
    description: "Get loan amount credited to your account. 90% approved within 24 hours.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your loan approved in 4 simple steps. Fast, transparent, and hassle-free process.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-secondary/30"></div>

            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {/* Icon Circle */}
                    <div className="flex justify-center mb-6">
                      <div
                        className={`w-32 h-32 rounded-full ${step.bgColor} border-4 ${step.borderColor} flex items-center justify-center shadow-lg relative z-10 bg-background`}
                      >
                        <Icon className={`h-12 w-12 ${step.color}`} />
                      </div>
                    </div>

                    {/* Step Number */}
                    <div className="text-center mb-4">
                      <span className={`inline-block w-8 h-8 rounded-full ${step.bgColor} ${step.color} font-bold text-lg flex items-center justify-center`}>
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden max-w-2xl mx-auto space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative flex items-start space-x-4">
                {/* Vertical Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-transparent"></div>
                )}

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-full ${step.bgColor} border-4 ${step.borderColor} flex items-center justify-center flex-shrink-0 shadow-lg relative z-10 bg-background`}
                >
                  <Icon className={`h-8 w-8 ${step.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className={`inline-block w-7 h-7 rounded-full ${step.bgColor} ${step.color} font-bold text-sm flex items-center justify-center`}>
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to get started? Begin your loan journey today!
          </p>
          <a
            href="#apply"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-secondary-foreground bg-secondary hover:bg-secondary/90 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Start Your Application
          </a>
        </div>
      </div>
    </section>
  );
}

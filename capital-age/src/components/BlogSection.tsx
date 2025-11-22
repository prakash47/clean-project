import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Top 5 MSME Loan Schemes in India for 2025",
    excerpt: "Discover the best government-backed loan schemes for small businesses including PMMY, MUDRA, and CGTMSE benefits.",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Business Finance",
  },
  {
    title: "How to Improve Your CIBIL Score Quickly",
    excerpt: "Practical tips and strategies to boost your credit score within 3-6 months for better loan approval chances.",
    date: "January 10, 2025",
    readTime: "4 min read",
    category: "Credit Tips",
  },
  {
    title: "Home Loan Balance Transfer: Save Up to 20% on EMIs",
    excerpt: "Complete guide on transferring your home loan to get lower interest rates and reduce your monthly payments.",
    date: "January 5, 2025",
    readTime: "6 min read",
    category: "Home Loans",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Latest Insights & Guides
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with expert advice, financial tips, and the latest updates on loan schemes and policies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card flex flex-col"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 mt-auto">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}

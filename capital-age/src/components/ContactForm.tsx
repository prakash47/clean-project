'use client'

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "",
    amount: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Application submitted successfully!", {
      description: "Our team will contact you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      loanType: "",
      amount: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <section id="apply" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Apply for a Loan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and our loan experts will get back to you with the best offers within 24 hours.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2 shadow-xl bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Quick Application Form</CardTitle>
              <CardDescription>
                Get instant pre-approval and compare quotes from 50+ lenders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base">
                      Phone Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Loan Type */}
                  <div className="space-y-2">
                    <Label htmlFor="loan-type" className="text-base">
                      Loan Type <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.loanType}
                      onValueChange={(value) => setFormData({ ...formData, loanType: value })}
                      required
                    >
                      <SelectTrigger id="loan-type" className="h-12">
                        <SelectValue placeholder="Select loan type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal">Personal Loan</SelectItem>
                        <SelectItem value="home">Home Loan</SelectItem>
                        <SelectItem value="business">Business Loan</SelectItem>
                        <SelectItem value="gold">Gold Loan</SelectItem>
                        <SelectItem value="car">Car/Two-Wheeler Loan</SelectItem>
                        <SelectItem value="education">Education Loan</SelectItem>
                        <SelectItem value="property">Loan Against Property</SelectItem>
                        <SelectItem value="commercial">Commercial Property Loan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Loan Amount */}
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="amount" className="text-base">
                      Required Loan Amount <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="amount"
                      type="text"
                      placeholder="e.g., ₹5,00,000"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="message" className="text-base">
                      Additional Information (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="space-y-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Application
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <a href="#privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#terms" className="text-primary hover:underline">
                      Terms of Service
                    </a>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

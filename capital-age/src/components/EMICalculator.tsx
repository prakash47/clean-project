'use client'

import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator } from "lucide-react";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenure, setTenure] = useState(5);
  const [interestRate, setInterestRate] = useState(10.5);

  const { emi, totalInterest, totalAmount } = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;

    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalAmountValue = emiValue * months;
    const totalInterestValue = totalAmountValue - principal;

    return {
      emi: Math.round(emiValue),
      totalInterest: Math.round(totalInterestValue),
      totalAmount: Math.round(totalAmountValue),
    };
  }, [loanAmount, tenure, interestRate]);

  const principalPercentage = ((loanAmount / totalAmount) * 100).toFixed(1);
  const interestPercentage = ((totalInterest / totalAmount) * 100).toFixed(1);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Calculator className="h-8 w-8 text-secondary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              EMI Calculator
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your monthly EMI instantly. Adjust loan amount, tenure, and interest rate to find your perfect plan.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-2 shadow-xl bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Calculate Your EMI</CardTitle>
              <CardDescription>
                Get instant EMI estimates for your loan requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-8">
                  {/* Loan Amount */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="loan-amount" className="text-base font-semibold">
                        Loan Amount
                      </Label>
                      <span className="text-lg font-bold text-primary">
                        {formatCurrency(loanAmount)}
                      </span>
                    </div>
                    <Slider
                      id="loan-amount"
                      min={10000}
                      max={10000000}
                      step={10000}
                      value={[loanAmount]}
                      onValueChange={(value) => setLoanAmount(value[0])}
                      className="cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>₹10K</span>
                      <span>₹1 Cr</span>
                    </div>
                  </div>

                  {/* Tenure */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="tenure" className="text-base font-semibold">
                        Loan Tenure
                      </Label>
                      <span className="text-lg font-bold text-primary">{tenure} Years</span>
                    </div>
                    <Slider
                      id="tenure"
                      min={1}
                      max={30}
                      step={1}
                      value={[tenure]}
                      onValueChange={(value) => setTenure(value[0])}
                      className="cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1 Year</span>
                      <span>30 Years</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="interest-rate" className="text-base font-semibold">
                        Interest Rate (p.a.)
                      </Label>
                      <span className="text-lg font-bold text-primary">{interestRate}%</span>
                    </div>
                    <Slider
                      id="interest-rate"
                      min={5}
                      max={20}
                      step={0.1}
                      value={[interestRate]}
                      onValueChange={(value) => setInterestRate(value[0])}
                      className="cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>5%</span>
                      <span>20%</span>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                  {/* EMI Display */}
                  <div className="bg-primary/5 rounded-lg p-6 text-center space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">Monthly EMI</p>
                    <p className="text-4xl font-bold text-primary">{formatCurrency(emi)}</p>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium text-foreground">Principal Amount</span>
                      <span className="text-base font-bold text-foreground">
                        {formatCurrency(loanAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium text-foreground">Total Interest</span>
                      <span className="text-base font-bold text-secondary">
                        {formatCurrency(totalInterest)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border-2 border-primary">
                      <span className="text-sm font-medium text-foreground">Total Amount</span>
                      <span className="text-base font-bold text-primary">
                        {formatCurrency(totalAmount)}
                      </span>
                    </div>
                  </div>

                  {/* Visual Breakdown */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground">Payment Breakdown</p>
                    <div className="flex h-8 rounded-lg overflow-hidden">
                      <div
                        className="bg-primary flex items-center justify-center text-xs font-medium text-primary-foreground"
                        style={{ width: `${principalPercentage}%` }}
                      >
                        {principalPercentage}%
                      </div>
                      <div
                        className="bg-secondary flex items-center justify-center text-xs font-medium text-secondary-foreground"
                        style={{ width: `${interestPercentage}%` }}
                      >
                        {interestPercentage}%
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>■ Principal</span>
                      <span>■ Interest</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    size="lg"
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    asChild
                  >
                    <a href="#apply">Apply for This Amount</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

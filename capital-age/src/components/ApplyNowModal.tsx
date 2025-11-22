'use client'

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Send } from "lucide-react";

interface ApplyNowModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ApplyNowModal({ open, onOpenChange }: ApplyNowModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "",
    amount: "",
  });

  const [errors, setErrors] = useState({
    phone: "",
  });

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phone) {
      return "Phone number is required";
    }
    if (!phoneRegex.test(phone)) {
      return "Please enter a valid 10-digit Indian mobile number";
    }
    return "";
  };

  const handlePhoneChange = (value: string) => {
    const numericValue = value.replace(/\D/g, "").slice(0, 10);
    setFormData(prev => ({ ...prev, phone: numericValue }));
    const error = validatePhone(numericValue);
    setErrors(prev => ({ ...prev, phone: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneError = validatePhone(formData.phone);
    if (phoneError) {
      setErrors(prev => ({ ...prev, phone: phoneError }));
      return;
    }

    // Here you would typically send the form data to your backend
    toast.success("Application submitted successfully! We'll contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", loanType: "", amount: "" });
    onOpenChange(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Apply for a Loan</DialogTitle>
          <DialogDescription className="text-base">
            Fill out the form below and our loan experts will contact you within 24 hours
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="space-y-2">
            <Label htmlFor="modal-name" className="text-base font-semibold">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="modal-name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="modal-email" className="text-base font-semibold">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="modal-email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="modal-phone" className="text-base font-semibold">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                +91
              </span>
              <Input
                id="modal-phone"
                type="tel"
                placeholder="9876543210"
                value={formData.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                required
                className={`h-12 text-base pl-14 ${errors.phone ? "border-destructive" : ""}`}
                maxLength={10}
              />
            </div>
            {errors.phone && (
              <p className="text-sm text-destructive mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="modal-loanType" className="text-base font-semibold">
              Loan Type <span className="text-destructive">*</span>
            </Label>
            <Select value={formData.loanType} onValueChange={(value) => handleChange("loanType", value)} required>
              <SelectTrigger className="h-12 text-base">
                <SelectValue placeholder="Select loan type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="personal">Personal Loan</SelectItem>
                <SelectItem value="home">Home Loan</SelectItem>
                <SelectItem value="business">Business Loan</SelectItem>
                <SelectItem value="working-capital">Working Capital</SelectItem>
                <SelectItem value="cgtmse">CGTMSE</SelectItem>
                <SelectItem value="mortgage">Mortgage Loan</SelectItem>
                <SelectItem value="lap">Loan Against Property</SelectItem>
                <SelectItem value="commercial">Commercial Purchase</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="modal-amount" className="text-base font-semibold">
              Loan Amount Required <span className="text-destructive">*</span>
            </Label>
            <Input
              id="modal-amount"
              placeholder="e.g., 500000"
              value={formData.amount}
              onChange={(e) => handleChange("amount", e.target.value.replace(/\D/g, ""))}
              required
              className="h-12 text-base"
            />
            {formData.amount && (
              <p className="text-sm text-muted-foreground">
                ₹ {parseInt(formData.amount).toLocaleString("en-IN")}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 h-12 text-base border-2"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 h-12 text-base bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <Send className="mr-2 h-5 w-5" />
              Submit Application
            </Button>
          </div>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-4">
          By submitting this form, you agree to our Terms of Service and Privacy Policy
        </p>
      </DialogContent>
    </Dialog>
  );
}

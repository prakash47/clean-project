import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^(\+91|91)?[6-9]\d{9}$/
  return phoneRegex.test(phone.replace(/\s+/g, ''))
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function calculateEMI(principal: number, ratePercent: number, tenureMonths: number): number {
  const monthlyRate = ratePercent / 12 / 100
  if (monthlyRate === 0) return principal / tenureMonths
  
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / 
              (Math.pow(1 + monthlyRate, tenureMonths) - 1)
  return Math.round(emi)
}

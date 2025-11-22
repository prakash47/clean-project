'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { APP_NAME, APP_LOGO } from "@/lib/constants"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileLoansOpen, setMobileLoansOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)

  const loanTypes = [
    { name: "Personal Loan", href: "/loans/personal-loan" },
    { name: "Home Loan", href: "/loans/home-loan" },
    { name: "Business Loan", href: "/loans/business-loan" },
    { name: "Working Capital", href: "/loans/working-capital" },
    { name: "CGTMSE", href: "/loans/cgtmse" },
    { name: "Mortgage Loan", href: "/loans/mortgage-loan" },
    { name: "Loan Against Property", href: "/loans/loan-against-property" },
    { name: "Commercial Purchase", href: "/loans/commercial-purchase" },
  ]

  const aboutPages = [
    { name: "About Capital Age", href: "/about/capital-age" },
    { name: "About Our Partnered Banks", href: "/about/partnered-banks" },
    { name: "Capital Age Team", href: "/about/team" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm">
      <nav className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
          <Image src={APP_LOGO} alt={APP_NAME} width={48} height={48} className="h-10 md:h-12 w-auto" />
          <span className="text-xl md:text-2xl font-bold text-primary hidden sm:block">{APP_NAME}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
            >
              Home
            </Link>

            {/* Loans Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setLoansDropdownOpen(true)}
              onMouseLeave={() => setLoansDropdownOpen(false)}
            >
              <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors flex items-center space-x-1">
                <span>Loans</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${loansDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {loansDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 w-[500px] bg-background border-2 border-border rounded-lg shadow-xl p-4 grid grid-cols-2 gap-2">
                  {loanTypes.map((loan) => (
                    <Link
                      key={loan.href}
                      href={loan.href}
                      className="block px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                    >
                      {loan.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/emi-calculator"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
            >
              EMI Calculator
            </Link>

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors flex items-center space-x-1">
                <span>About</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {aboutDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 w-[280px] bg-background border-2 border-border rounded-lg shadow-xl p-2">
                  {aboutPages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="block px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="tel:18001234567"
            className="flex items-center space-x-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>1800-123-4567</span>
          </a>
          <Button size="default" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
            <Link href="/contact">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <Link
              href="/"
              className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Loans Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileLoansOpen(!mobileLoansOpen)}
              >
                Loans
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileLoansOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileLoansOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {loanTypes.map((loan) => (
                    <Link
                      key={loan.href}
                      href={loan.href}
                      className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {loan.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/emi-calculator"
              className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              EMI Calculator
            </Link>

            {/* Mobile About Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              >
                About
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileAboutOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {aboutPages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4 space-y-3 border-t border-border">
              <a
                href="tel:18001234567"
                className="flex items-center space-x-2 text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>1800-123-4567</span>
              </a>
              <Button
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                onClick={() => setMobileMenuOpen(false)}
                asChild
              >
                <Link href="/contact">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

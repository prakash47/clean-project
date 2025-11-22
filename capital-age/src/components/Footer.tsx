import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { APP_NAME, APP_LOGO } from "@/lib/constants";
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#loans" },
    { name: "EMI Calculator", href: "#calculator" },
    { name: "Blog", href: "#blog" },
  ];

  const loanTypes = [
    { name: "Personal Loan", href: "#personal-loan" },
    { name: "Home Loan", href: "#home-loan" },
    { name: "Business Loan", href: "#business-loan" },
    { name: "Car Loan", href: "#car-loan" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Disclaimer", href: "#disclaimer" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={APP_LOGO} alt={APP_NAME} className="h-10 w-auto" />
            </div>
            <h3 className="text-lg font-bold">{APP_NAME}</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Your trusted financial partner. We connect you with India's leading banks and NBFCs for seamless loan solutions tailored to your needs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Types */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              {loanTypes.map((loan) => (
                <li key={loan.name}>
                  <a
                    href={loan.href}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {loan.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <p className="font-medium text-primary-foreground">1800-123-4567</p>
                  <p className="text-xs">Mon-Sat, 9 AM - 7 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@loanvista.in"
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  info@loanvista.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  Mumbai, Maharashtra, India
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/80 text-center md:text-left">
              © {currentYear} {APP_NAME}. All rights reserved. | RBI Registered Partner
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {legal.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-primary-foreground/60">
              🔒 100% Secure | SSL Encrypted | GDPR Compliant
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

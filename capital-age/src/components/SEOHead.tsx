'use client'

import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export default function SEOHead({
  title = "LoanVista India - All Loans, One Click Away | Best Loan Agency in India",
  description = "Get instant loan approvals from India's top banks & NBFCs. Personal, Home, Business loans starting at 9.99% p.a. Pre-approved in 2 minutes. Apply now!",
  keywords = "loan agency india, personal loan, home loan, business loan, gold loan, car loan, education loan, loan against property, best interest rates, quick loan approval, MSME loan, CIBIL score, EMI calculator",
  ogImage = "https://loanvista.in/og-image.jpg",
  canonicalUrl = "https://loanvista.in",
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Set or update link tags
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      
      element.setAttribute("href", href);
    };

    // Basic Meta Tags
    setMetaTag("description", description);
    setMetaTag("keywords", keywords);
    setMetaTag("author", "LoanVista India");
    setMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMetaTag("viewport", "width=device-width, initial-scale=1.0");

    // Open Graph Meta Tags
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:type", "website", true);
    setMetaTag("og:url", canonicalUrl, true);
    setMetaTag("og:image", ogImage, true);
    setMetaTag("og:site_name", "LoanVista India", true);
    setMetaTag("og:locale", "en_IN", true);

    // Twitter Card Meta Tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", ogImage);

    // Additional SEO Meta Tags
    setMetaTag("theme-color", "#1E3A8A");
    setMetaTag("mobile-web-app-capable", "yes");
    setMetaTag("apple-mobile-web-app-capable", "yes");
    setMetaTag("apple-mobile-web-app-status-bar-style", "default");
    setMetaTag("format-detection", "telephone=no");

    // Canonical URL
    setLinkTag("canonical", canonicalUrl);

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "LoanVista India",
      "description": description,
      "url": canonicalUrl,
      "logo": "https://loanvista.in/logo.png",
      "image": ogImage,
      "telephone": "+91-1800-123-4567",
      "email": "info@loanvista.in",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "10000"
      },
      "priceRange": "₹₹",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Loan Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Personal Loan",
              "description": "Personal loans up to ₹40 lakhs with flexible terms"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Home Loan",
              "description": "Home loans up to ₹10 crores with competitive rates"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Loan",
              "description": "Business loans up to ₹50 lakhs for MSMEs"
            }
          }
        ]
      }
    };

    // Add or update structured data script
    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
}

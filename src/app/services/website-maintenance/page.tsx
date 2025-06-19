import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import WebsiteMaintenanceHeroSection from '@/components/sections/WebsiteMaintenanceHeroSection';
import WebsiteMaintenanceWhatWeOfferSection from '@/components/sections/WebsiteMaintenanceWhatWeOfferSection';
import WebsiteMaintenanceProcessSection from '@/components/sections/WebsiteMaintenanceProcessSection';
import WebsiteMaintenanceWhyChooseUsSection from '@/components/sections/WebsiteMaintenanceWhyChooseUsSection';
import WebsiteMaintenanceCTASection from '@/components/sections/WebsiteMaintenanceCTASection';

export const metadata: Metadata = {
  title: 'Expert Website Maintenance Services | Secure & Optimized | Intention Infoservice',
  description: 'Ensure your website is always secure, fast, and up-to-date with Intention Infoservice\'s comprehensive website maintenance services. Prevent downtime, enhance performance, and protect your online presence in 2025.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/services/website-maintenance',
    title: 'Expert Website Maintenance Services | Secure & Optimized | Intention Infoservice',
    description: 'Ensure your website is always secure, fast, and up-to-date with Intention Infoservice\'s comprehensive website maintenance services. Prevent downtime, enhance performance, and protect your online presence in 2025.',
    images: [
      {
        url: '/images/website-maintenance-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Expert Website Maintenance Services by Intention Infoservice',
      },
    ],
    siteName: 'Intention Infoservice',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@intentioninfo',
    creator: '@intentioninfo',
    title: 'Expert Website Maintenance Services | Secure & Optimized',
    description: 'Keep your website secure, fast, and up-to-date with Intention Infoservice\'s comprehensive maintenance solutions.',
    images: ['/images/website-maintenance-twitter-card.webp'],
  },
  alternates: {
    canonical: 'https://intentioninfoservice.com/services/website-maintenance',
  },
  keywords: ['website maintenance services', 'website security', 'website updates', 'website performance optimization', 'website support', 'prevent downtime', 'secure website', 'website health check', 'web maintenance company', 'tech city website maintenance'],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function WebsiteMaintenance() {
  return (
    <>
      {/* Structured Data for the Page */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Expert Website Maintenance Services",
            "description": "Ensure your website is always secure, fast, and up-to-date with Intention Infoservice's comprehensive website maintenance services. Prevent downtime, enhance performance, and protect your online presence in 2025.",
            "url": "https://intentioninfoservice.com/services/website-maintenance",
            "isPartOf": {
              "@type": "WebSite",
              "url": "https://intentioninfoservice.com",
              "name": "Intention Infoservice"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://intentioninfoservice.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://intentioninfoservice.com/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Website Maintenance",
                  "item": "https://intentioninfoservice.com/services/website-maintenance"
                }
              ]
            },
            "mainEntity": [
              {
                "@type": "Service",
                "name": "Website Maintenance Services",
                "description": "Comprehensive services to keep your website secure, updated, and performing optimally.",
                "provider": {
                  "@type": "Organization",
                  "name": "Intention Infoservice",
                  "url": "https://intentioninfoservice.com"
                },
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "USD",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "priceType": "https://schema.org/Estimate",
                    "unitText": "MONTH",
                    "price": "299"
                  },
                  "url": "https://intentioninfoservice.com/contact-us"
                },
                "serviceType": "Website Maintenance",
                "areaServed": {
                  "@type": "City",
                  "name": "Tech City"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Website Maintenance Plans",
                  "itemListElement": [
                    {
                      "@type": "OfferCatalog",
                      "name": "Basic Maintenance Plan",
                      "itemListElement": [
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Security Monitoring",
                            "description": "Daily security scans and vulnerability checks."
                          },
                          "price": "299",
                          "priceCurrency": "USD"
                        }
                      ]
                    },
                    {
                      "@type": "OfferCatalog",
                      "name": "Advanced Maintenance Plan",
                      "itemListElement": [
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Performance Optimization",
                            "description": "Regular speed tests and optimization for faster loading times."
                          },
                          "price": "499",
                          "priceCurrency": "USD"
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is website maintenance and why is it important?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Website maintenance involves regularly checking your website for issues, keeping it updated, and ensuring its security and performance. It's crucial for preventing downtime, protecting against cyber threats, improving user experience, and maintaining SEO rankings."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How often should website maintenance be performed?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The frequency of website maintenance depends on your website's complexity and traffic. For most businesses, monthly maintenance is recommended, with daily security checks and backups. High-traffic or e-commerce sites may require more frequent attention."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What does Intention Infoservice's website maintenance service include?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our comprehensive website maintenance services include security monitoring, regular backups, software updates (CMS, plugins, themes), performance optimization, broken link checks, content updates, and 24/7 support. We tailor our plans to your specific needs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can website maintenance improve my SEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, absolutely. Regular website maintenance significantly contributes to better SEO. By ensuring your site is fast, secure, mobile-friendly, and free of broken links or errors, search engines will crawl and rank your site more favorably. Updated content also signals relevance."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is a website health check?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A website health check is a comprehensive audit of your website's performance, security, SEO, and overall functionality. It identifies potential issues and areas for improvement, providing a roadmap for optimal website health. We offer free health checks to new clients."
                    }
                  }
                ]
              }
            ]
          }
        `}
      </script>

      {/* Preload Open Graph image */}
      <link
        rel="preload"
        href="/images/website-maintenance-og-image.webp"
        as="image"
      />
      <MainLayout>
        <WebsiteMaintenanceHeroSection />
        <WebsiteMaintenanceWhatWeOfferSection />
        <WebsiteMaintenanceProcessSection />
        <WebsiteMaintenanceWhyChooseUsSection />
        <WebsiteMaintenanceCTASection />
      </MainLayout>
    </>
  );
}


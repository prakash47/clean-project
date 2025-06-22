import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import UIUXDesignBrandingHeroSection from '@/components/sections/UIUXDesignBrandingHeroSection';
import UIUXDesignBrandingWhatWeOfferSection from '@/components/sections/UIUXDesignBrandingWhatWeOfferSection';
import UIUXDesignBrandingProcessSection from '@/components/sections/UIUXDesignBrandingProcessSection';
import UIUXDesignBrandingWhyChooseUsSection from '@/components/sections/UIUXDesignBrandingWhyChooseUsSection';
import UIUXDesignBrandingFAQSection from '@/components/sections/UIUXDesignBrandingFAQSection';
import UIUXDesignBrandingCTASection from '@/components/sections/UIUXDesignBrandingCTASection';

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: 'UI/UX Design & Branding Services - Transform Your Digital Presence | Intention Infoservice',
  description: 'Elevate your brand with expert UI/UX design and branding services. Get a free quote for user-centered designs and cohesive brand identities that engage and convert in 2025. Achieve up to 9,900% ROI with our strategic design solutions.',
  keywords: [
    'UI/UX design services',
    'branding services 2025',
    'user-centered design',
    'brand identity development',
    'UI design',
    'UX design',
    'user experience',
    'user interface',
    'digital branding',
    'brand strategy',
    'visual storytelling',
    'design systems',
    'prototyping',
    'wireframing',
    'user research',
    'usability testing',
    'interaction design',
    'app design',
    'web design',
    'mobile UI/UX',
    'responsive design',
    'brand guidelines',
    'logo design',
    'typography',
    'color palette',
    'design thinking',
    'conversion optimization',
    'engagement',
    'performance',
    'SEO for UI/UX',
    'brand loyalty',
    'digital presence',
    'innovation',
    'creative design',
    'strategic design',
    'professional UI/UX',
    'expert branding',
    'custom UI/UX',
    'modern UI/UX',
    'future-proof design'
  ],
  authors: [{ name: 'Intention Infoservice' }],
  creator: 'Intention Infoservice',
  publisher: 'Intention Infoservice',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    url: 'https://intentioninfoservice.com/services/ui-ux-design-branding',
    title: 'UI/UX Design & Branding Services - Transform Your Digital Presence',
    description: 'Elevate your brand with expert UI/UX design and branding services. Get a free quote for user-centered designs and cohesive brand identities that engage and convert in 2025.',
    images: [
      {
        url: '/images/ui-ux-design-branding-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'UI/UX Design & Branding Services by Intention Infoservice - Transform Your Digital Presence',
      },
    ],
    siteName: 'Intention Infoservice',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@intentioninfo',
    creator: '@intentioninfo',
    title: 'UI/UX Design & Branding Services - Transform Your Digital Presence',
    description: 'Elevate your brand with expert UI/UX design and branding services. Achieve up to 9,900% ROI with our strategic design solutions.',
    images: ['/images/ui-ux-design-branding-twitter-card.webp'],
  },
  alternates: {
    canonical: 'https://intentioninfoservice.com/services/ui-ux-design-branding',
  },
  other: {
    'theme-color': '#00a0e3',
    'msapplication-TileColor': '#00a0e3',
  },
};

// Viewport configuration for responsive design
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function UIUXDesignBranding() {
  return (
    <>
      {/* Enhanced Structured Data for the Page */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "UI/UX Design & Branding Services",
            "url": "https://intentioninfoservice.com/services/ui-ux-design-branding",
            "description": "Elevate your brand with Intention Infoservice's expert UI/UX design and branding services. We create user-centered designs and cohesive brand identities that engage and convert.",
            "publisher": {
              "@type": "Organization",
              "name": "Intention Infoservice",
              "logo": {
                "@type": "ImageObject",
                "url": "https://intentioninfoservice.com/logo.png",
                "width": 800,
                "height": 600
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://intentioninfoservice.com/services/ui-ux-design-branding"
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
                  "name": "UI/UX Design & Branding",
                  "item": "https://intentioninfoservice.com/services/ui-ux-design-branding"
                }
              ]
            },
            "about": {
              "@type": "Service",
              "serviceType": "UI/UX Design and Branding Services",
              "provider": {
                "@type": "Organization",
                "name": "Intention Infoservice",
                "url": "https://intentioninfoservice.com"
              },
              "description": "Professional UI/UX design and branding services that transform digital presence and drive business growth through user-centered design and strategic branding.",
              "offers": {
                "@type": "Offer",
                "url": "https://intentioninfoservice.com/contact-us",
                "description": "Get a free quote for UI/UX design and branding services"
              }
            }
          })
        }}
      />

      {/* Service-specific structured data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "UI/UX Design and Branding Services",
            "provider": {
              "@type": "Organization",
              "name": "Intention Infoservice",
              "url": "https://intentioninfoservice.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://intentioninfoservice.com/logo.png"
              }
            },
            "description": "Transform your digital presence with expert UI/UX design and branding services. We create user-centered designs and cohesive brand identities that drive engagement, boost conversions, and achieve up to 9,900% ROI.",
            "offers": {
              "@type": "Offer",
              "url": "https://intentioninfoservice.com/contact-us",
              "description": "Free consultation and quote for UI/UX design and branding services",
              "priceRange": "$$"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "UI/UX Design & Branding Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "User Interface Design",
                    "description": "Custom UI design that creates intuitive and visually appealing interfaces"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "User Experience Design",
                    "description": "UX design focused on user research, wireframing, and usability optimization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Brand Identity Development",
                    "description": "Comprehensive branding services including logo design, brand guidelines, and visual identity"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Prototyping & Wireframing",
                    "description": "Interactive prototypes and wireframes for testing and validation"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Preload critical resources */}
      <link
        rel="preload"
        href="/images/ui-ux-design-branding-og-image.webp"
        as="image"
        type="image/webp"
      />
      
      <MainLayout>
        <UIUXDesignBrandingHeroSection />
        <UIUXDesignBrandingWhatWeOfferSection />
        <UIUXDesignBrandingProcessSection />
        <UIUXDesignBrandingWhyChooseUsSection />
        <UIUXDesignBrandingFAQSection />
        <UIUXDesignBrandingCTASection />
      </MainLayout>
    </>
  );
}


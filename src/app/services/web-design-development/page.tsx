import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import MainLayout from '@/components/layout/MainLayout';
import CTABannerSection from '@/components/sections/CTABannerSection';

// Dynamically import components to reduce initial bundle size and improve performance
const WebDesignHeroSection = dynamic(() => import('@/components/sections/WebDesignHeroSection'), { 
  ssr: true,
  loading: () => <div className="h-screen bg-dark-950 animate-pulse" />
});
const WhatWeOfferSection = dynamic(() => import('@/components/sections/WhatWeOfferSection'), { 
  ssr: true,
  loading: () => <div className="h-96 bg-dark-900 animate-pulse" />
});
const OurProcessSection = dynamic(() => import('@/components/sections/OurProcessSection'), { 
  ssr: true,
  loading: () => <div className="h-96 bg-dark-950 animate-pulse" />
});
const WhyChooseUsSection = dynamic(() => import('@/components/sections/WhyChooseUsSection'), { 
  ssr: true,
  loading: () => <div className="h-96 bg-dark-900 animate-pulse" />
});
const WebDesignFAQSection = dynamic(() => import('@/components/sections/WebDesignFAQSection'), { 
  ssr: true,
  loading: () => <div className="h-96 bg-dark-950 animate-pulse" />
});

// Enhanced metadata with comprehensive SEO optimization
export const metadata: Metadata = {
  title: 'Professional Web Design & Development Services 2025 | Custom Responsive Websites | Intention Infoservice',
  description: 'Expert web design & development services for 2025. Custom responsive websites, e-commerce solutions, mobile-first design, SEO optimization, and modern web applications that drive business growth. 150+ projects delivered with 4.9/5 rating.',
  keywords: [
    'web design services',
    'web development company',
    'custom website design',
    'responsive web design',
    'e-commerce development',
    'mobile-first design',
    'SEO web development',
    'professional website design',
    'business website development',
    'web application development',
    'CMS development',
    'WordPress development',
    'React development',
    'Next.js development',
    'website redesign services',
    'web design agency',
    'custom web solutions',
    'modern web design',
    'website optimization',
    'web design 2025'
  ],
  metadataBase: new URL('https://intentioninfoservice.com'),
  alternates: {
    canonical: 'https://intentioninfoservice.com/services/web-design-development',
  },
  openGraph: {
    url: 'https://intentioninfoservice.com/services/web-design-development',
    title: 'Professional Web Design & Development Services 2025 | Custom Responsive Websites',
    description: 'Expert web design & development services for 2025. Custom responsive websites, e-commerce solutions, mobile-first design, SEO optimization, and modern web applications that drive business growth.',
    images: [
      {
        url: '/images/intention-infoservice-web-design-services-og.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Web Design & Development Services - Custom Responsive Websites by Intention Infoservice',
        type: 'image/webp',
      },
      {
        url: '/images/intention-infoservice-web-design-services-square.webp',
        width: 1200,
        height: 1200,
        alt: 'Web Design & Development Services - Mobile-First Responsive Design',
        type: 'image/webp',
      },
    ],
    siteName: 'Intention Infoservice',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@IInfoservice',
    creator: '@IInfoservice',
    title: 'Professional Web Design & Development Services 2025 | Intention Infoservice',
    description: 'Expert web design & development services. Custom responsive websites, e-commerce solutions, mobile-first design, SEO optimization.',
    images: ['/images/intention-infoservice-web-design-services-twitter.webp'],
  },
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
  verification: {
    google: 'keAWwhgvU0F_BgBC3Iyj-isGXPno_zi5cKWxjWUNs',
    yandex: '7931eb0b1994ec32',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Web Design and Development Services',
  classification: 'Business Services',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: 'Next.js',
  applicationName: 'Intention Infoservice',
  authors: [
    { name: 'Intention Infoservice', url: 'https://intentioninfoservice.com' },
  ],
  creator: 'Intention Infoservice',
  publisher: 'Intention Infoservice',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Web Design Services',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#00a0e3',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#00a0e3',
  },
};

// Enhanced viewport configuration
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#00a0e3' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0f1c' },
  ],
};

// Comprehensive structured data for the entire page
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://intentioninfoservice.com/services/web-design-development',
      url: 'https://intentioninfoservice.com/services/web-design-development',
      name: 'Professional Web Design & Development Services 2025',
      description: 'Expert web design & development services for 2025. Custom responsive websites, e-commerce solutions, mobile-first design, SEO optimization, and modern web applications that drive business growth.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://intentioninfoservice.com',
        name: 'Intention Infoservice',
        url: 'https://intentioninfoservice.com',
      },
      about: {
        '@type': 'Service',
        name: 'Web Design and Development Services',
        description: 'Professional web design and development services including custom websites, e-commerce solutions, and web applications.',
      },
      mainEntity: {
        '@type': 'Service',
        '@id': 'https://intentioninfoservice.com/services/web-design-development#service',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://intentioninfoservice.com/services/web-design-development#service',
      name: 'Professional Web Design & Development Services',
      description: 'Comprehensive web design and development services for businesses in 2025, including custom responsive websites, e-commerce platforms, web applications, and ongoing maintenance.',
      provider: {
        '@type': 'Organization',
        '@id': 'https://intentioninfoservice.com#organization',
      },
      serviceType: 'Web Design and Development',
      areaServed: [
        {
          '@type': 'Country',
          name: 'India',
        },
        {
          '@type': 'Place',
          name: 'Worldwide',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Design & Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Business Websites',
              description: 'Professional, SEO-optimized business websites',
            },
            priceRange: '$1999-$4999',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'E-Commerce Development',
              description: 'Secure, scalable e-commerce platforms',
            },
            priceRange: '$3999-$9999',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Web Applications',
              description: 'Tailored web applications for business needs',
            },
            priceRange: '$4999-$19999',
            availability: 'https://schema.org/InStock',
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Sarah Johnson',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          reviewBody: 'Intention Infoservice transformed our online presence completely. The website they built increased our leads by 300% and the design is absolutely stunning.',
          publisher: {
            '@type': 'Organization',
            name: 'TechStart Solutions',
          },
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Michael Chen',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          reviewBody: 'Professional, reliable, and incredibly talented team. They delivered our project on time and exceeded all our expectations.',
          publisher: {
            '@type': 'Organization',
            name: 'GreenEarth Consulting',
          },
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://intentioninfoservice.com#organization',
      name: 'Intention Infoservice',
      url: 'https://intentioninfoservice.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://intentioninfoservice.com/images/logo.webp',
        width: 300,
        height: 100,
      },
      image: {
        '@type': 'ImageObject',
        url: 'https://intentioninfoservice.com/images/intention-infoservice-web-design-services-og.webp',
        width: 1200,
        height: 630,
      },
      description: 'Professional web design and development company with 10+ years of experience, specializing in custom websites, e-commerce solutions, and web applications.',
      address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Maharashtra',
      addressLocality: 'Mumbai, Naigaon, Palghar',
      postalCode: '401208',
      streetAddress: 'Naigaon East',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-70215 39267',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi'],
        areaServed: 'Worldwide',
      },
      {
        '@type': 'ContactPoint',
        email: 'contact@intentioninfoservice.com',
        contactType: 'customer service',
        availableLanguage: ['English'],
        areaServed: 'Worldwide',
      },
    ],
    sameAs: [
      'https://in.linkedin.com/company/intentioninfoservice',
      'https://x.com/IInfoservice',
      'https://www.facebook.com/intentioninfoservice/',
      'https://www.instagram.com/intention_infoservice/',
    ],
      foundingDate: '2015',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: '10-50',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150',
        bestRating: '5',
        worstRating: '1',
      },
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Professional Certification',
          name: 'Web Development Expertise',
          description: '5+ years of professional web development experience',
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://intentioninfoservice.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://intentioninfoservice.com/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Web Design & Development',
          item: 'https://intentioninfoservice.com/services/web-design-development',
        },
      ],
    },
  ],
};

export default function WebDesignDevelopmentPage() {
  return (
    <>
      {/* Enhanced Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      <MainLayout>
        <WebDesignHeroSection />
        <WhatWeOfferSection />
        <OurProcessSection />
        <WhyChooseUsSection />
        <WebDesignFAQSection />
        <CTABannerSection />
      </MainLayout>
    </>
  );
}


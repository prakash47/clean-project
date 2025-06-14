import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import MainLayout from '@/components/layout/MainLayout';
import CTABannerSection from '@/components/sections/CTABannerSection';

// Dynamically import components to reduce initial bundle size
const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), { 
  ssr: true,
  loading: () => <div className="h-96 bg-dark-950 animate-pulse" />
});
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), { 
  ssr: true,
  loading: () => <div className="h-64 bg-dark-950 animate-pulse" />
});
const BlogHighlightsSection = dynamic(() => import('@/components/sections/BlogHighlightsSection'), { 
  ssr: true,
  loading: () => <div className="h-48 bg-dark-950 animate-pulse" />
});

// Enhanced metadata with comprehensive SEO optimization
export const metadata: Metadata = {
  title: 'Professional Web Development & Mobile App Development Services | Custom Digital Solutions 2025',
  description: 'Leading software development company offering custom web development, mobile app development, UI/UX design, and digital marketing services. Get your free quote today!',
  keywords: [
    'web development services',
    'mobile app development',
    'custom software development',
    'UI UX design services',
    'digital marketing services',
    'website maintenance services',
    'professional web development company',
    'custom mobile application development',
    'business automation solutions',
    'enterprise software development',
    'responsive web design',
    'SEO services',
    'brand identity design',
    'fintech app development',
    'e-commerce development',
    'React development',
    'Next.js development',
    'software development company 2025'
  ],
  authors: [{ name: 'Intention Infoservice', url: 'https://intentioninfoservice.com' }],
  creator: 'Intention Infoservice',
  publisher: 'Intention Infoservice',
  metadataBase: new URL('https://intentioninfoservice.com'),
  alternates: {
    canonical: 'https://intentioninfoservice.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://intentioninfoservice.com',
    siteName: 'Intention Infoservice',
    title: 'Professional Web Development & Mobile App Development Services | Custom Digital Solutions 2025',
    description: 'Leading software development company offering custom web development, mobile app development, UI/UX design, and digital marketing services. Transform your business with our expert solutions.',
    images: [
      {
        url: '/images/Intention_Infoservice_OG_Image.webp',
        width: 1200,
        height: 630,
        alt: 'Intention Infoservice - Professional Web Development & Mobile App Development Services',
        type: 'image/webp',
      },
      {
        url: '/images/Intention_Infoservice_Custom_Digital_Solutions.webp',
        width: 1200,
        height: 1200,
        alt: 'Intention Infoservice - Custom Digital Solutions',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@intentioninfo',
    creator: '@intentioninfo',
    title: 'Professional Web Development & Mobile App Development Services | Custom Digital Solutions 2025',
    description: 'Leading software development company offering custom web development, mobile app development, UI/UX design, and digital marketing services.',
    images: ['/images/Professional_Web_Mobile_Dev_Services_2025.webp'],
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
  category: 'Software Development',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
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

// Structured data for the entire website
const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Intention Infoservice',
  alternateName: 'Intention Infoservice - Software Development Company',
  url: 'https://intentioninfoservice.com',
  description: 'Professional software development company specializing in web development, mobile app development, UI/UX design, digital marketing, and custom business solutions.',
  inLanguage: 'en-US',
  copyrightYear: 2025,
  copyrightHolder: {
    '@type': 'Organization',
    name: 'Intention Infoservice',
  },
  potentialAction: [
    {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://intentioninfoservice.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  ],
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://intentioninfoservice.com/#organization',
    name: 'Intention Infoservice',
    alternateName: 'Intention Infoservice Software Development',
    url: 'https://intentioninfoservice.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://intentioninfoservice.com/images/logo.png',
      width: 300,
      height: 100,
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://intentioninfoservice.com/images/company-image.webp',
      width: 1200,
      height: 630,
    },
    description: 'Leading software development company offering comprehensive digital solutions including web development, mobile app development, UI/UX design, digital marketing, and custom business solutions.',
    foundingDate: '2015',
    founder: {
      '@type': 'Person',
      name: 'Intention Infoservice Team',
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '10-50',
    },
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development Services',
            description: 'Custom web development services including responsive design, e-commerce solutions, and web applications.',
            provider: {
              '@type': 'Organization',
              name: 'Intention Infoservice',
            },
            areaServed: 'Worldwide',
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: 'https://intentioninfoservice.com/services/web-design-development',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development Services',
            description: 'Professional mobile app development for iOS and Android platforms with custom features and seamless user experience.',
            provider: {
              '@type': 'Organization',
              name: 'Intention Infoservice',
            },
            areaServed: 'Worldwide',
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: 'https://intentioninfoservice.com/services/mobile-app-development',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UI/UX Design & Branding Services',
            description: 'Professional UI/UX design and branding services to create memorable user experiences and strong brand identity.',
            provider: {
              '@type': 'Organization',
              name: 'Intention Infoservice',
            },
            areaServed: 'Worldwide',
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: 'https://intentioninfoservice.com/services/ui-ux-design-branding',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Marketing Services',
            description: 'Comprehensive digital marketing solutions including SEO, social media marketing, PPC, and content marketing.',
            provider: {
              '@type': 'Organization',
              name: 'Intention Infoservice',
            },
            areaServed: 'Worldwide',
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: 'https://intentioninfoservice.com/services/digital-marketing',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Maintenance Services',
            description: 'Reliable website maintenance services to keep your site secure, updated, and performing optimally.',
            provider: {
              '@type': 'Organization',
              name: 'Intention Infoservice',
            },
            areaServed: 'Worldwide',
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: 'https://intentioninfoservice.com/services/website-maintenance',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Business Solutions',
            description: 'Tailored software solutions designed to optimize business operations and drive growth.',
            provider: {
              '@type': 'Organization',
              name: 'Intention Infoservice',
            },
            areaServed: 'Worldwide',
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: 'https://intentioninfoservice.com/services/custom-business-solutions',
            },
          },
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
  },
};

// FAQ Structured Data
const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What web development services do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer comprehensive web development services including custom website development, responsive web design, e-commerce solutions, web applications, CMS development, and website optimization for performance and SEO.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does mobile app development cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mobile app development costs vary based on complexity, features, and platform. Our custom mobile app development services start from competitive rates. Contact us for a free quote tailored to your specific requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide ongoing website maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer comprehensive website maintenance services including security updates, content updates, performance optimization, backup management, and technical support to keep your website running smoothly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What digital marketing services do you provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our digital marketing services include SEO optimization, social media marketing, PPC advertising, content marketing, email marketing, and comprehensive digital strategy development to boost your online presence.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      
      <MainLayout>
        <HeroSection />
        <ServicesSection />
        <BlogHighlightsSection />
        <CTABannerSection />
      </MainLayout>
    </>
  );
}


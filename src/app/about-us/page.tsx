import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import MainLayout from '@/components/layout/MainLayout';
import CTABannerSection from '@/components/sections/CTABannerSection';

// Dynamically import components to reduce initial bundle size and improve performance
const AboutHeroSection = dynamic(() => import('@/components/sections/AboutHeroSection'), { 
  ssr: true,
  loading: () => <div className="min-h-screen bg-dark-950 animate-pulse" />
});
const OurApproachSection = dynamic(() => import('@/components/sections/OurApproachSection'), { 
  ssr: true,
  loading: () => <div className="min-h-96 bg-dark-900 animate-pulse" />
});
const OurValuesSection = dynamic(() => import('@/components/sections/OurValuesSection'), { 
  ssr: true,
  loading: () => <div className="min-h-96 bg-dark-950 animate-pulse" />
});

// Enhanced metadata for About Us page with comprehensive SEO optimization
export const metadata: Metadata = {
  title: 'About Intention Infoservice | Leading Software Development Company Since 2015 | Web & Mobile App Experts',
  description: 'Discover Intention Infoservice - a trusted software development company specializing in professional web development, custom mobile app development, UI/UX design, digital marketing, and business solutions worldwide. 150+ successful projects, 5+ years experience.',
  keywords: [
    'software development company',
    'web development company',
    'mobile app development company',
    'custom software development',
    'professional web design services',
    'UI UX design company',
    'digital marketing agency',
    'software development team',
    'web application development',
    'enterprise software solutions',
    'about intention infoservice',
    'software company profile',
    'web development expertise',
    'mobile app developers',
    'digital transformation services',
    'software development approach',
    'technology consulting services',
    'custom business solutions',
    'software development methodology',
    'agile development company'
  ],
  metadataBase: new URL('https://intentioninfoservice.com'),
  alternates: {
    canonical: 'https://intentioninfoservice.com/about-us',
  },
  openGraph: {
    type: 'website',
    url: 'https://intentioninfoservice.com/about-us',
    title: 'About Intention Infoservice | Leading Software Development Company',
    description: 'Discover our proven approach to delivering innovative web development, mobile app development, and digital marketing solutions. 150+ successful projects, 98% client satisfaction rate.',
    images: [
      {
        url: '/images/about-us-intention-infoservice-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'About Intention Infoservice - Leading Software Development Company Team',
        type: 'image/webp',
      },
      {
        url: '/images/Intention-Infoservice-Professional-Software-Development-Services.webp',
        width: 1200,
        height: 1200,
        alt: 'Intention Infoservice - Professional Software Development Services',
        type: 'image/webp',
      },
    ],
    siteName: 'Intention Infoservice',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@IInfoservice',
    creator: '@IInfoservice',
    title: 'About Intention Infoservice | Leading Software Development Company',
    description: 'Discover our proven approach to delivering innovative web development, mobile app development, and digital marketing solutions worldwide.',
    images: ['/images/about-intention-infoservice-twitter-card.webp'],
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
  category: 'Technology',
  classification: 'Software Development Company',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#00a0e3',
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
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
};

// Enhanced structured data for the About Us page
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Intention Infoservice',
  'alternateName': 'IIS',
  'url': 'https://intentioninfoservice.com',
  'logo': {
    '@type': 'ImageObject',
    'url': 'https://intentioninfoservice.com/images/logo.webp',
    'width': 200,
    'height': 60,
    'caption': 'Intention Infoservice Logo',
  },
  'image': [
    'https://intentioninfoservice.com/images/about-us-intention-infoservice-og-image.webp',
    'https://intentioninfoservice.com/images/Intention-Infoservice-Professional-Software-Development-Services.webp',
    'https://intentioninfoservice.com/images/about-intention-infoservice-twitter-card.webp',
  ],
  'description': 'Leading software development company specializing in professional web development, mobile app development, UI/UX design, digital marketing, and custom business solutions worldwide since 2019.',
  'foundingDate': '2015',
  'numberOfEmployees': {
    '@type': 'QuantitativeValue',
    'minValue': 10,
    'maxValue': 50,
  },
  'slogan': 'Transforming Ideas into Digital Reality',
  'knowsAbout': [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Software Architecture',
    'E-commerce Development',
    'Custom Software Development',
    'Website Maintenance',
    'SEO Optimization',
    'Digital Transformation',
  ],
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
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Software Development Services',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Web Development Services',
          'description': 'Professional web development and design services for businesses worldwide',
          'provider': {
            '@type': 'Organization',
            'name': 'Intention Infoservice',
          },
        },
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Mobile App Development',
          'description': 'Custom mobile application development for iOS and Android platforms',
          'provider': {
            '@type': 'Organization',
            'name': 'Intention Infoservice',
          },
        },
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Digital Marketing Services',
          'description': 'Comprehensive digital marketing strategies and SEO optimization',
          'provider': {
            '@type': 'Organization',
            'name': 'Intention Infoservice',
          },
        },
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'UI/UX Design Services',
          'description': 'Professional user interface and user experience design services',
          'provider': {
            '@type': 'Organization',
            'name': 'Intention Infoservice',
          },
        },
      },
    ],
  },
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.9',
    'reviewCount': '150',
    'bestRating': '5',
    'worstRating': '1',
    'description': 'Excellent rating based on client feedback for software development services',
  },
  'award': [
    {
      '@type': 'Award',
      'name': 'Top Software Development Company 2024',
      'description': 'Recognized for excellence in web development and mobile app development services',
      'dateAwarded': '2024',
    },
    {
      '@type': 'Award',
      'name': 'Client Satisfaction Excellence Award',
      'description': 'Awarded for maintaining 98% client satisfaction rate',
      'dateAwarded': '2024',
    },
  ],
  'member': [
    {
      '@type': 'Organization',
      'name': 'Software Development Association',
    },
    {
      '@type': 'Organization',
      'name': 'Digital Marketing Institute',
    },
  ],
  'parentOrganization': {
    '@type': 'Organization',
    'name': 'Intention Group',
  },
  'department': [
    {
      '@type': 'Organization',
      'name': 'Web Development Department',
      'description': 'Specialized team for web development and design services',
    },
    {
      '@type': 'Organization',
      'name': 'Mobile App Development Department',
      'description': 'Expert team for iOS and Android app development',
    },
    {
      '@type': 'Organization',
      'name': 'Digital Marketing Department',
      'description': 'Strategic team for digital marketing and SEO services',
    },
  ],
};

export default function AboutUs() {
  return (
    <>
      {/* Enhanced structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <MainLayout>
        <AboutHeroSection />
        <OurApproachSection />
        <OurValuesSection />
        <CTABannerSection />
      </MainLayout>
    </>
  );
}


import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import MainLayout from '@/components/layout/MainLayout';

// Dynamically import components to reduce initial bundle size
const MobileAppHeroSection = dynamic(() => import('@/components/sections/MobileAppHeroSection'), { ssr: true });
const MobileAppWhatWeOfferSection = dynamic(() => import('@/components/sections/MobileAppWhatWeOfferSection'), { ssr: true });
const MobileAppProcessSection = dynamic(() => import('@/components/sections/MobileAppProcessSection'), { ssr: true });
const MobileAppWhyChooseUsSection = dynamic(() => import('@/components/sections/MobileAppWhyChooseUsSection'), { ssr: true });
const MobileAppCTABannerSection = dynamic(() => import('@/components/sections/MobileAppCTABannerSection'), { ssr: true });

export const metadata: Metadata = {
  title: 'Professional Mobile App Development Services | iOS, Android & Cross-Platform Apps 2025',
  description: 'Expert mobile app development company specializing in iOS, Android, React Native, and Flutter apps. 50+ successful launches, 98% client satisfaction, 40% faster delivery. Get free consultation today.',
  keywords: [
    'mobile app development',
    'iOS app development',
    'Android app development',
    'React Native development',
    'Flutter app development',
    'cross-platform mobile apps',
    'custom mobile applications',
    'mobile app development company',
    'professional app developers',
    'native mobile app development',
    'hybrid mobile apps',
    'mobile app design',
    'app store optimization',
    'mobile app consulting',
    'enterprise mobile solutions',
    'startup mobile apps',
    'mobile app maintenance',
    'mobile app testing',
    'mobile app deployment',
    'mobile app development services 2025'
  ],
  metadataBase: new URL('https://intentioninfoservice.com'),
  alternates: {
    canonical: 'https://intentioninfoservice.com/services/mobile-app-development',
  },
  openGraph: {
    url: 'https://intentioninfoservice.com/services/mobile-app-development',
    title: 'Professional Mobile App Development Services | iOS, Android & Cross-Platform Apps 2025',
    description: 'Expert mobile app development company specializing in iOS, Android, React Native, and Flutter apps. 50+ successful launches, 98% client satisfaction, 40% faster delivery. Get free consultation today.',
    images: [
      {
        url: '/images/mobile-app-development-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Mobile App Development Services - iOS, Android, React Native, Flutter',
        type: 'image/webp',
      },
      {
        url: '/images/mobile-app-development-og-square.webp',
        width: 1200,
        height: 1200,
        alt: 'Custom Mobile App Development Solutions',
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
    title: 'Professional Mobile App Development Services | iOS, Android & Cross-Platform Apps 2025',
    description: 'Expert mobile app development company specializing in iOS, Android, React Native, and Flutter apps. 50+ successful launches, 98% client satisfaction, 40% faster delivery.',
    images: ['/images/mobile-app-development-twitter-card.webp'],
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
  classification: 'Mobile App Development Services',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#00a0e3',
    'theme-color': '#00a0e3',
  },
};

// Move viewport to a separate export
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#00a0e3',
};

// Structured Data for the page
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://intentioninfoservice.com/services/mobile-app-development',
      url: 'https://intentioninfoservice.com/services/mobile-app-development',
      name: 'Professional Mobile App Development Services | iOS, Android & Cross-Platform Apps 2025',
      description: 'Expert mobile app development company specializing in iOS, Android, React Native, and Flutter apps. 50+ successful launches, 98% client satisfaction, 40% faster delivery.',
      isPartOf: {
        '@id': 'https://intentioninfoservice.com',
      },
      about: {
        '@id': 'https://intentioninfoservice.com/services/mobile-app-development#service',
      },
      datePublished: '2025-01-01',
      dateModified: '2025-01-01',
      breadcrumb: {
        '@id': 'https://intentioninfoservice.com/services/mobile-app-development#breadcrumb',
      },
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: ['https://intentioninfoservice.com/services/mobile-app-development'],
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://intentioninfoservice.com/services/mobile-app-development#breadcrumb',
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
          name: 'Mobile App Development',
          item: 'https://intentioninfoservice.com/services/mobile-app-development',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://intentioninfoservice.com/services/mobile-app-development#service',
      name: 'Mobile App Development Services',
      description: 'Professional mobile app development services including iOS, Android, React Native, and Flutter applications with 50+ successful launches and 98% client satisfaction.',
      provider: {
        '@type': 'Organization',
        '@id': 'https://intentioninfoservice.com#organization',
        name: 'Intention Infoservice',
        url: 'https://intentioninfoservice.com',
        logo: 'https://intentioninfoservice.com/images/logo.webp',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-70215 39267',
          contactType: 'customer service',
          availableLanguage: ['English', 'Hindi'],
          areaServed: 'Worldwide',
        },
        address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Maharashtra',
      addressLocality: 'Mumbai, Naigaon, Palghar',
      postalCode: '401208',
      streetAddress: 'Naigaon East',
    },
        sameAs: [
      'https://in.linkedin.com/company/intentioninfoservice',
      'https://x.com/IInfoservice',
      'https://www.facebook.com/intentioninfoservice/',
      'https://www.instagram.com/intention_infoservice/',
    ],
      },
      serviceType: 'Mobile App Development',
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Mobile App Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'iOS App Development',
              description: 'Native iOS application development using Swift and Objective-C',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Android App Development',
              description: 'Native Android application development using Kotlin and Java',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'React Native Development',
              description: 'Cross-platform mobile app development using React Native framework',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Flutter App Development',
              description: 'Cross-platform mobile app development using Flutter framework',
            },
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '50',
        bestRating: '5',
        worstRating: '1',
      },
      offers: {
        '@type': 'Offer',
        name: 'Mobile App Development Package',
        description: 'Complete mobile app development solution from concept to deployment',
        price: '5000',
        priceCurrency: 'USD',
        availability: 'InStock',
        validFrom: '2025-01-01',
        validThrough: '2025-12-31',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '5000',
          priceCurrency: 'USD',
          valueAddedTaxIncluded: false,
        },
      },
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
      description: 'Leading mobile app development company with 50+ successful app launches, specializing in iOS, Android, React Native, and Flutter development.',
      foundingDate: '2015',
      numberOfEmployees: '50-100',
      slogan: 'Transforming Ideas into Digital Reality',
      knowsAbout: [
        'Mobile App Development',
        'iOS Development',
        'Android Development',
        'React Native',
        'Flutter',
        'Cross-Platform Development',
        'App Store Optimization',
        'Mobile App Design',
        'Enterprise Mobile Solutions',
      ],
      memberOf: {
        '@type': 'Organization',
        name: 'Mobile App Development Association',
      },
      award: [
        'Top Mobile App Development Company 2024',
        'Best Cross-Platform Development Services',
        'Excellence in iOS App Development',
        'Outstanding Android App Development',
      ],
    },
  ],
};

export default function MobileAppDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MainLayout>
        <MobileAppHeroSection />
        <MobileAppWhatWeOfferSection />
        <MobileAppProcessSection />
        <MobileAppWhyChooseUsSection />
        <MobileAppCTABannerSection />
      </MainLayout>
    </>
  );
}


import { Metadata } from 'next';
import DigitalMarketingHeroSection from '@/components/sections/DigitalMarketingHeroSection';
import DigitalMarketingWhatWeOfferSection from '@/components/sections/DigitalMarketingWhatWeOfferSection';
import DigitalMarketingProcessSection from '@/components/sections/DigitalMarketingProcessSection';
import DigitalMarketingWhyChooseUsSection from '@/components/sections/DigitalMarketingWhyChooseUsSection';
import DigitalMarketingFAQSection from '@/components/sections/DigitalMarketingFAQSection';
import DigitalMarketingCTASection from '@/components/sections/DigitalMarketingCTASection';

// Enhanced SEO metadata for Digital Marketing service page
export const metadata: Metadata = {
  title: 'Digital Marketing Services 2025 | SEO, PPC, Social Media Marketing | Intention Infoservice',
  description: 'Boost your online presence with our comprehensive digital marketing services in 2025. Expert SEO, PPC advertising, social media marketing, content marketing, and conversion optimization. Drive traffic, increase conversions, and grow your business with data-driven digital marketing strategies.',
  keywords: [
    'digital marketing services',
    'digital marketing agency',
    'SEO services',
    'PPC advertising',
    'social media marketing',
    'content marketing',
    'email marketing',
    'conversion optimization',
    'online marketing',
    'digital marketing strategy',
    'search engine optimization',
    'Google Ads management',
    'Facebook advertising',
    'Instagram marketing',
    'LinkedIn marketing',
    'YouTube marketing',
    'influencer marketing',
    'affiliate marketing',
    'marketing automation',
    'lead generation',
    'brand awareness',
    'ROI optimization',
    'digital marketing consultant',
    'marketing analytics',
    'growth hacking',
    'performance marketing',
    'omnichannel marketing',
    'customer acquisition',
    'retention marketing',
    'e-commerce marketing'
  ].join(', '),
  authors: [{ name: 'Intention Infoservice' }],
  creator: 'Intention Infoservice',
  publisher: 'Intention Infoservice',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://intentioninfoservice.com'),
  alternates: {
    canonical: '/services/digital-marketing',
  },
  openGraph: {
    title: 'Digital Marketing Services 2025 | Drive Growth & ROI | Intention Infoservice',
    description: 'Transform your business with our comprehensive digital marketing services. Expert SEO, PPC, social media marketing, and conversion optimization. Proven strategies that deliver measurable results and maximize ROI.',
    url: '/services/digital-marketing',
    siteName: 'Intention Infoservice',
    images: [
      {
        url: '/images/digital-marketing-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Services - SEO, PPC, Social Media Marketing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services 2025 | Intention Infoservice',
    description: 'Comprehensive digital marketing services including SEO, PPC, social media marketing, and conversion optimization. Drive growth and maximize ROI with proven strategies.',
    images: ['/images/digital-marketing-twitter.jpg'],
    creator: '@IntentionInfo',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Digital Marketing Services',
  classification: 'Business Services',
  other: {
    'geo.region': 'US',
    'geo.placename': 'United States',
    'geo.position': '40.7128;-74.0060',
    'ICBM': '40.7128, -74.0060',
    'DC.title': 'Digital Marketing Services 2025',
    'DC.creator': 'Intention Infoservice',
    'DC.subject': 'Digital Marketing, SEO, PPC, Social Media Marketing',
    'DC.description': 'Comprehensive digital marketing services for business growth',
    'DC.publisher': 'Intention Infoservice',
    'DC.contributor': 'Digital Marketing Team',
    'DC.date': '2025',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://intentioninfoservice.com/services/digital-marketing',
    'DC.language': 'en',
    'DC.coverage': 'Worldwide',
    'DC.rights': 'Copyright 2025 Intention Infoservice',
  },
};

// Enhanced structured data for the Digital Marketing service page
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://intentioninfoservice.com/services/digital-marketing#service',
      name: 'Digital Marketing Services',
      description: 'Comprehensive digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email marketing, and conversion optimization to drive business growth and maximize ROI.',
      provider: {
        '@type': 'Organization',
        '@id': 'https://intentioninfoservice.com#organization',
        name: 'Intention Infoservice',
        url: 'https://intentioninfoservice.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://intentioninfoservice.com/images/logo.png',
          width: 300,
          height: 100
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-234-567-8900',
          contactType: 'customer service',
          availableLanguage: ['English']
        },
        sameAs: [
          'https://www.facebook.com/intentioninfoservice',
          'https://www.twitter.com/intentioninfo',
          'https://www.linkedin.com/company/intention-infoservice',
          'https://www.instagram.com/intentioninfoservice'
        ]
      },
      serviceType: 'Digital Marketing',
      areaServed: {
        '@type': 'Place',
        name: 'Worldwide'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Search Engine Optimization (SEO)',
              description: 'Comprehensive SEO services to improve search engine rankings and organic traffic'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Pay-Per-Click (PPC) Advertising',
              description: 'Strategic PPC campaigns on Google Ads, Facebook, and other platforms'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Social Media Marketing',
              description: 'Comprehensive social media marketing across all major platforms'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Content Marketing',
              description: 'Strategic content creation and distribution for brand awareness and engagement'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Email Marketing',
              description: 'Targeted email campaigns for customer retention and conversion'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Conversion Rate Optimization',
              description: 'Data-driven optimization to improve website conversions and ROI'
            }
          }
        ]
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150',
        bestRating: '5',
        worstRating: '1'
      }
    },
    {
      '@type': 'WebPage',
      '@id': 'https://intentioninfoservice.com/services/digital-marketing#webpage',
      url: 'https://intentioninfoservice.com/services/digital-marketing',
      name: 'Digital Marketing Services 2025 | Intention Infoservice',
      description: 'Comprehensive digital marketing services to drive business growth and maximize ROI',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://intentioninfoservice.com#website',
        name: 'Intention Infoservice',
        url: 'https://intentioninfoservice.com'
      },
      about: {
        '@id': 'https://intentioninfoservice.com/services/digital-marketing#service'
      },
      mainEntity: {
        '@id': 'https://intentioninfoservice.com/services/digital-marketing#service'
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://intentioninfoservice.com/services/digital-marketing#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://intentioninfoservice.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://intentioninfoservice.com/services'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Digital Marketing',
          item: 'https://intentioninfoservice.com/services/digital-marketing'
        }
      ]
    }
  ]
};

export default function DigitalMarketingPage() {
  return (
    <>
      {/* Enhanced Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Page Sections */}
      <main className="min-h-screen">
        <DigitalMarketingHeroSection />
        <DigitalMarketingWhatWeOfferSection />
        <DigitalMarketingProcessSection />
        <DigitalMarketingWhyChooseUsSection />
        <DigitalMarketingFAQSection />
        <DigitalMarketingCTASection />
      </main>
    </>
  );
}


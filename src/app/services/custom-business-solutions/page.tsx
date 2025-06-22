import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import CustomBusinessSolutionsHeroSection from '@/components/sections/CustomBusinessSolutionsHeroSection';
import CustomBusinessSolutionsWhatWeOfferSection from '@/components/sections/CustomBusinessSolutionsWhatWeOfferSection';
import CustomBusinessSolutionsProcessSection from '@/components/sections/CustomBusinessSolutionsProcessSection';
import CustomBusinessSolutionsWhyChooseUsSection from '@/components/sections/CustomBusinessSolutionsWhyChooseUsSection';
import CustomBusinessSolutionsCTASection from '@/components/sections/CustomBusinessSolutionsCTASection';

export const metadata: Metadata = {
  title: 'Custom Business Solutions 2025 | Tailored Software Development Services - Intention Infoservice',
  description: 'Transform your business with cutting-edge custom software solutions. Expert development of CRM, ERP, AI-powered tools, and enterprise applications. Get a free consultation for tailored business solutions that drive growth and efficiency in 2025.',
  keywords: [
    'custom business solutions',
    'custom software development',
    'enterprise software solutions',
    'business automation software',
    'custom CRM development',
    'custom ERP systems',
    'AI business solutions',
    'tailored software solutions',
    'business process automation',
    'custom web applications',
    'enterprise application development',
    'business intelligence solutions',
    'workflow automation tools',
    'custom database solutions',
    'scalable business software',
    'digital transformation solutions',
    'custom business applications',
    'software consulting services',
    'business technology solutions',
    'custom software solutions 2025'
  ],
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/services/custom-business-solutions',
    title: 'Custom Business Solutions 2025 | Tailored Software Development Services',
    description: 'Transform your business with cutting-edge custom software solutions. Expert development of CRM, ERP, AI-powered tools, and enterprise applications. Get a free consultation today.',
    images: [
      {
        url: '/images/custom-business-solutions-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Custom Business Solutions by Intention Infoservice - Tailored Software Development',
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
    title: 'Custom Business Solutions 2025 | Tailored Software Development',
    description: 'Transform your business with cutting-edge custom software solutions. Expert CRM, ERP, AI-powered tools development. Free consultation available.',
    images: ['/images/custom-business-solutions-twitter-card.webp'],
  },
  alternates: {
    canonical: 'https://intentioninfoservice.com/services/custom-business-solutions',
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Technology',
  classification: 'Business Services',
  other: {
    'msapplication-TileColor': '#00a0e3',
    'theme-color': '#00a0e3',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#00a0e3',
};

export default function CustomBusinessSolutions() {
  return (
    <>
      {/* Enhanced Structured Data for Custom Business Solutions Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://intentioninfoservice.com/services/custom-business-solutions#service',
                name: 'Custom Business Solutions Development',
                description: 'Comprehensive custom software development services including CRM, ERP, AI-powered tools, and enterprise applications tailored to transform business operations and drive growth.',
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
                    telephone: '+1-XXX-XXX-XXXX',
                    contactType: 'customer service',
                    availableLanguage: ['English']
                  }
                },
                serviceType: 'Custom Software Development',
                category: 'Business Solutions',
                areaServed: {
                  '@type': 'Place',
                  name: 'Worldwide'
                },
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Custom Business Solutions Services',
                  itemListElement: [
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Custom CRM Development',
                        description: 'Tailored Customer Relationship Management systems'
                      }
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Custom ERP Systems',
                        description: 'Enterprise Resource Planning solutions'
                      }
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'AI-Powered Business Tools',
                        description: 'Artificial Intelligence integrated business applications'
                      }
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Enterprise Application Development',
                        description: 'Scalable enterprise-grade applications'
                      }
                    }
                  ]
                },
                offers: {
                  '@type': 'Offer',
                  description: 'Professional custom business solutions development with free consultation',
                  availability: 'https://schema.org/InStock',
                  priceRange: '$$$$',
                  validFrom: '2025-01-01',
                  seller: {
                    '@type': 'Organization',
                    '@id': 'https://intentioninfoservice.com#organization'
                  }
                }
              },
              {
                '@type': 'WebPage',
                '@id': 'https://intentioninfoservice.com/services/custom-business-solutions#webpage',
                url: 'https://intentioninfoservice.com/services/custom-business-solutions',
                name: 'Custom Business Solutions 2025 | Tailored Software Development Services',
                description: 'Transform your business with cutting-edge custom software solutions. Expert development of CRM, ERP, AI-powered tools, and enterprise applications.',
                isPartOf: {
                  '@type': 'WebSite',
                  '@id': 'https://intentioninfoservice.com#website'
                },
                about: {
                  '@type': 'Service',
                  '@id': 'https://intentioninfoservice.com/services/custom-business-solutions#service'
                },
                mainEntity: {
                  '@type': 'Service',
                  '@id': 'https://intentioninfoservice.com/services/custom-business-solutions#service'
                }
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://intentioninfoservice.com/services/custom-business-solutions#breadcrumb',
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
                    name: 'Custom Business Solutions',
                    item: 'https://intentioninfoservice.com/services/custom-business-solutions'
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* Preload critical resources */}
      <link
        rel="preload"
        href="/images/custom-business-solutions-og-image.webp"
        as="image"
      />
      <link
        rel="preload"
        href="/fonts/inter-var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />

      <MainLayout>
        <main className="min-h-screen">
          <CustomBusinessSolutionsHeroSection />
          <CustomBusinessSolutionsWhatWeOfferSection />
          <CustomBusinessSolutionsProcessSection />
          <CustomBusinessSolutionsWhyChooseUsSection />
          <CustomBusinessSolutionsCTASection />
        </main>
      </MainLayout>
    </>
  );
}


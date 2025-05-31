import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import WebDesignHeroSection from '@/components/sections/WebDesignHeroSection';
import WhatWeOfferSection from '@/components/sections/WhatWeOfferSection';
import OurProcessSection from '@/components/sections/OurProcessSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
// import TestimonialsSection from '@/components/sections/TestimonialsSection';
import WebDesignFAQSection from '@/components/sections/WebDesignFAQSection';
import WebDesignCTASection from '@/components/sections/WebDesignCTASection';

export const metadata: Metadata = {
  title: 'Web Design & Development Services - Intention Infoservice',
  description: 'Transform your online presence with custom web design and mobile-first web development. Get a free quote for SEO-optimized websites that drive results in 2025.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/services/web-design-development',
    title: 'Web Design & Development Services - Intention Infoservice',
    description: 'Transform your online presence with custom web design and mobile-first web development. Get a free quote for SEO-optimized websites that drive results in 2025.',
    images: [
      {
        url: '/images/web-design-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Web Design & Development Services by Intention Infoservice',
      },
    ],
    siteName: 'Intention Infoservice',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@intentioninfo',
    creator: '@intentioninfo',
  },
  alternates: {
    canonical: 'https://intentioninfoservice.com/services/web-design-development',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function WebDesignDevelopment() {
  return (
    <>
      {/* Preload Open Graph image */}
      <link
        rel="preload"
        href="/images/web-design-og-image.webp"
        as="image"
      />
      <MainLayout>
        <WebDesignHeroSection />
        <WhatWeOfferSection />
        <OurProcessSection />
        <WhyChooseUsSection />
        {/* <TestimonialsSection /> */}
        <WebDesignFAQSection />
        <WebDesignCTASection />
      </MainLayout>
    </>
  );
}
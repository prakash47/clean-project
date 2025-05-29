import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import DigitalMarketingHeroSection from '@/components/sections/DigitalMarketingHeroSection';
import DigitalMarketingWhatWeOfferSection from '@/components/sections/DigitalMarketingWhatWeOfferSection';
import DigitalMarketingProcessSection from '@/components/sections/DigitalMarketingProcessSection';
import DigitalMarketingWhyChooseUsSection from '@/components/sections/DigitalMarketingWhyChooseUsSection';
import DigitalMarketingFAQSection from '@/components/sections/DigitalMarketingFAQSection';
import DigitalMarketingCTASection from '@/components/sections/DigitalMarketingCTASection';

export const metadata: Metadata = {
  title: 'Digital Marketing Services - Intention Infoservice',
  description: 'Boost your online presence with our expert digital marketing services. Get a free quote for SEO, PPC, social media, and more to drive traffic and conversions in 2025.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/services/digital-marketing',
    title: 'Digital Marketing Services - Intention Infoservice',
    description: 'Boost your online presence with our expert digital marketing services. Get a free quote for SEO, PPC, social media, and more to drive traffic and conversions in 2025.',
    images: [
      {
        url: '/images/digital-marketing-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Services by Intention Infoservice',
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
    canonical: 'https://intentioninfoservice.com/services/digital-marketing',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function DigitalMarketing() {
  return (
    <>
      {/* Preload Open Graph image */}
      <link
        rel="preload"
        href="/images/digital-marketing-og-image.webp"
        as="image"
      />
      <MainLayout>
        <DigitalMarketingHeroSection />
        <DigitalMarketingWhatWeOfferSection />
        <DigitalMarketingProcessSection />
        <DigitalMarketingWhyChooseUsSection />
        {/* <DigitalMarketingStatsSection/> */}
        <DigitalMarketingFAQSection />
        <DigitalMarketingCTASection />
      </MainLayout>
    </>
  );
}
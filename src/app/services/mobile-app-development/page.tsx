import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import MobileAppHeroSection from '@/components/sections/MobileAppHeroSection';
import MobileAppWhatWeOfferSection from '@/components/sections/MobileAppWhatWeOfferSection';
import MobileAppProcessSection from '@/components/sections/MobileAppProcessSection';
import MobileAppWhyChooseUsSection from '@/components/sections/MobileAppWhyChooseUsSection';
import MobileAppCTABannerSection from '@/components/sections/MobileAppCTABannerSection';

export const metadata: Metadata = {
  title: 'Mobile App Development Services - Intention Infoservice',
  description: 'Transform your business with custom mobile app development for iOS and Android. Get a free quote for user-friendly, high-performing apps that drive engagement in 2025.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/services/mobile-app-development',
    title: 'Mobile App Development Services - Intention Infoservice',
    description: 'Transform your business with custom mobile app development for iOS and Android. Get a free quote for user-friendly, high-performing apps that drive engagement in 2025.',
    images: [
      {
        url: '/images/mobile-app-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Mobile App Development Services by Intention Infoservice',
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
    canonical: 'https://intentioninfoservice.com/services/mobile-app-development',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function MobileAppDevelopment() {
  return (
    <>
      {/* Preload Open Graph image */}
      <link
        rel="preload"
        href="/images/mobile-app-og-image.webp"
        as="image"
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
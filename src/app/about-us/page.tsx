import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import AboutHeroSection from '@/components/sections/AboutHeroSection';
import OurApproachSection from '@/components/sections/OurApproachSection';
import OurValuesSection from '@/components/sections/OurValuesSection';
import CTABannerSection from '@/components/sections/CTABannerSection';

export const metadata: Metadata = {
  title: 'About Us - Intention Infoservice | Our Approach & Values',
  description: 'Discover Intention Infoservice’s approach to delivering innovative web design, mobile apps, and digital marketing solutions, along with our core values driving excellence in 2025.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/about-us',
    title: 'About Us - Intention Infoservice | Our Approach & Values',
    description: 'Discover Intention Infoservice’s approach to delivering innovative web design, mobile apps, and digital marketing solutions, along with our core values driving excellence in 2025.',
    images: [
      {
        url: '/images/about-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'About Intention Infoservice',
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
    canonical: 'https://intentioninfoservice.com/about-us',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function AboutUs() {
  return (
    <MainLayout>
      <AboutHeroSection />
      <OurApproachSection />
      <OurValuesSection />
      <CTABannerSection />
    </MainLayout>
  );
}
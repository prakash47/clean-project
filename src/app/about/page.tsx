import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import AboutHeroSection from '@/components/sections/AboutHeroSection';
import OurStorySection from '@/components/sections/OurStorySection';
import OurTeamSection from '@/components/sections/OurTeamSection';
import OurValuesSection from '@/components/sections/OurValuesSection';

export const metadata: Metadata = {
  title: 'About Us - Intention Infoservice',
  description: 'Learn about Intention Infoservice, our mission, team, and values. We transform ideas into stunning digital realities with web design, mobile app development, and more.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/about',
    title: 'About Us - Intention Infoservice',
    description: 'Learn about Intention Infoservice, our mission, team, and values. We transform ideas into stunning digital realities with web design, mobile app development, and more.',
    images: [
      {
        url: '/images/about-og-image.jpg',
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
    canonical: 'https://intentioninfoservice.com/about',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function About() {
  return (
    <MainLayout>
      <AboutHeroSection />
      <OurStorySection />
      <OurTeamSection />
      <OurValuesSection />
    </MainLayout>
  );
}
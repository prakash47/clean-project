import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import MainLayout from '@/components/layout/MainLayout';

export const metadata: Metadata = {
  title: 'Intention Infoservice - Web Design, Development & Digital Marketing',
  description: 'At Intention Infoservice, we transform ideas into stunning digital realities with web design, mobile app development, digital marketing, and more.',
  openGraph: {
    url: 'https://intentioninfoservice.com',
    title: 'Intention Infoservice - Web Design, Development & Digital Marketing',
    description: 'At Intention Infoservice, we transform ideas into stunning digital realities with web design, mobile app development, digital marketing, and more.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Intention Infoservice',
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
    canonical: 'https://intentioninfoservice.com',
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </MainLayout>
  );
}
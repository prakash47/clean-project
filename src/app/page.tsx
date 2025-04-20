import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import MainLayout from '@/components/layout/MainLayout';

// Dynamically import components to reduce initial bundle size
const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), { ssr: true });
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), { ssr: true });
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), { ssr: true });

export const metadata: Metadata = {
  title: 'Intention Infoservice - Web Design, Development & Digital Marketing',
  description: 'Transforming ideas into stunning digital realities with web design, mobile app development, digital marketing, and more.',
  openGraph: {
    url: 'https://intentioninfoservice.com',
    title: 'Intention Infoservice - Web Design, Development & Digital Marketing',
    description: 'Transforming ideas into stunning digital realities with web design, mobile app development, digital marketing, and more.',
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
    <>
      {/* Preload the font to reduce layout shifts */}
      <link
        rel="preload"
        href="/_next/static/media/3534416bbfdcc9be-s.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <MainLayout>
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </MainLayout>
    </>
  );
}
import { Metadata } from 'next';
import CareersPageClient from './CareersPageClient';

export const metadata: Metadata = {
  title: 'Careers - Intention Infoservice',
  description: 'Join the Intention Infoservice team! Explore exciting career opportunities in software development, digital marketing, UI/UX design, and more.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/careers',
    title: 'Careers - Intention Infoservice',
    description: 'Join the Intention Infoservice team! Explore exciting career opportunities in software development, digital marketing, UI/UX design, and more.',
    images: [
      {
        url: 'https://placehold.co/1200x630.webp?text=Intention+Infoservice+Careers',
        width: 1200,
        height: 630,
        alt: 'Intention Infoservice Careers',
      },
    ],
    siteName: 'Intention Infoservice',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@IInfoservice',
    creator: '@IInfoservice',
  },
  alternates: {
    canonical: 'https://intentioninfoservice.com/careers',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function CareersPage() {
  return <CareersPageClient />;
}
import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import WebsiteMaintenanceHeroSection from '@/components/sections/WebsiteMaintenanceHeroSection';
import WebsiteMaintenanceWhatWeOfferSection from '@/components/sections/WebsiteMaintenanceWhatWeOfferSection';
import WebsiteMaintenanceProcessSection from '@/components/sections/WebsiteMaintenanceProcessSection';
import WebsiteMaintenanceWhyChooseUsSection from '@/components/sections/WebsiteMaintenanceWhyChooseUsSection';
import WebsiteMaintenanceCTASection from '@/components/sections/WebsiteMaintenanceCTASection';

export const metadata: Metadata = {
  title: 'Website Maintenance Services - Intention Infoservice',
  description: 'Keep your website secure, updated, and optimized with our expert maintenance services. Get a free quote for reliable website support in 2025.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/services/website-maintenance',
    title: 'Website Maintenance Services - Intention Infoservice',
    description: 'Keep your website secure, updated, and optimized with our expert maintenance services. Get a free quote for reliable website support in 2025.',
    images: [
      {
        url: '/images/website-maintenance-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Website Maintenance Services by Intention Infoservice',
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
    canonical: 'https://intentioninfoservice.com/services/website-maintenance',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function WebsiteMaintenance() {
  return (
    <>
      {/* Preload Open Graph image */}
      <link
        rel="preload"
        href="/images/website-maintenance-og-image.webp"
        as="image"
      />
      <MainLayout>
        <WebsiteMaintenanceHeroSection />
        <WebsiteMaintenanceWhatWeOfferSection />
        <WebsiteMaintenanceProcessSection />
        <WebsiteMaintenanceWhyChooseUsSection />
        <WebsiteMaintenanceCTASection />
      </MainLayout>
    </>
  );
}
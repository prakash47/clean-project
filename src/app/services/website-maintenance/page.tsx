import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import WebsiteMaintenanceHeroSection from '@/components/sections/WebsiteMaintenanceHeroSection';
import WebsiteMaintenanceWhatWeOfferSection from '@/components/sections/WebsiteMaintenanceWhatWeOfferSection';
import WebsiteMaintenanceProcessSection from '@/components/sections/WebsiteMaintenanceProcessSection';
import WebsiteMaintenanceWhyChooseUsSection from '@/components/sections/WebsiteMaintenanceWhyChooseUsSection';
import WebsiteMaintenanceCTASection from '@/components/sections/WebsiteMaintenanceCTASection';

export const metadata: Metadata = {
  title: 'Expert Website Maintenance Services | Secure & Fast Websites - Intention Infoservice',
  description: 'Ensure your website is always secure, fast, and up-to-date with Intention Infoservice\'s comprehensive website maintenance services. Proactive monitoring, security updates, and performance optimization for your business in 2025.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/services/website-maintenance',
    title: 'Expert Website Maintenance Services | Secure & Fast Websites - Intention Infoservice',
    description: 'Ensure your website is always secure, fast, and up-to-date with Intention Infoservice\'s comprehensive website maintenance services. Proactive monitoring, security updates, and performance optimization for your business in 2025.',
    images: [
      {
        url: '/images/website-maintenance-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Intention Infoservice - Expert Website Maintenance Services',
        type: 'image/webp',
      },
      {
        url: '/images/website-maintenance-og-image-square.webp',
        width: 1200,
        height: 1200,
        alt: 'Intention Infoservice - Website Maintenance & Support',
        type: 'image/webp',
      },
    ],
    siteName: 'Intention Infoservice',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@IInfoservice',
    creator: '@IInfoservice',
    images: [
      {
        url: '/images/website-maintenance-twitter-card.webp',
        alt: 'Intention Infoservice - Website Maintenance & Security',
      },
    ],
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


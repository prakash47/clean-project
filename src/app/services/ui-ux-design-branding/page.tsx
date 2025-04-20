import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import UIUXDesignBrandingHeroSection from '@/components/sections/UIUXDesignBrandingHeroSection';
import UIUXDesignBrandingWhatWeOfferSection from '@/components/sections/UIUXDesignBrandingWhatWeOfferSection';
import UIUXDesignBrandingProcessSection from '@/components/sections/UIUXDesignBrandingProcessSection';
import UIUXDesignBrandingWhyChooseUsSection from '@/components/sections/UIUXDesignBrandingWhyChooseUsSection';
import UIUXDesignBrandingCTASection from '@/components/sections/UIUXDesignBrandingCTASection';

export const metadata: Metadata = {
  title: 'UI/UX Design & Branding Services - Intention Infoservice',
  description: 'Elevate your brand with expert UI/UX design and branding services. Get a free quote for user-centered designs and cohesive brand identities that engage and convert in 2025.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/services/ui-ux-design-branding',
    title: 'UI/UX Design & Branding Services - Intention Infoservice',
    description: 'Elevate your brand with expert UI/UX design and branding services. Get a free quote for user-centered designs and cohesive brand identities that engage and convert in 2025.',
    images: [
      {
        url: '/images/ui-ux-design-branding-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'UI/UX Design & Branding Services by Intention Infoservice',
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
    canonical: 'https://intentioninfoservice.com/services/ui-ux-design-branding',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function UIUXDesignBranding() {
  return (
    <>
      {/* Preload Open Graph image */}
      <link
        rel="preload"
        href="/images/ui-ux-design-branding-og-image.webp"
        as="image"
      />
      <MainLayout>
        <UIUXDesignBrandingHeroSection />
        <UIUXDesignBrandingWhatWeOfferSection />
        <UIUXDesignBrandingProcessSection />
        <UIUXDesignBrandingWhyChooseUsSection />
        <UIUXDesignBrandingCTASection />
      </MainLayout>
    </>
  );
}
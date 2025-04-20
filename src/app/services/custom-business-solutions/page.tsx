import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import CustomBusinessSolutionsHeroSection from '@/components/sections/CustomBusinessSolutionsHeroSection';
import CustomBusinessSolutionsWhatWeOfferSection from '@/components/sections/CustomBusinessSolutionsWhatWeOfferSection';
import CustomBusinessSolutionsProcessSection from '@/components/sections/CustomBusinessSolutionsProcessSection';
import CustomBusinessSolutionsWhyChooseUsSection from '@/components/sections/CustomBusinessSolutionsWhyChooseUsSection';
import CustomBusinessSolutionsCTASection from '@/components/sections/CustomBusinessSolutionsCTASection';

export const metadata: Metadata = {
  title: 'Custom Business Solutions - Intention Infoservice',
  description: 'Transform your business with tailored software solutions. Get a free quote for custom CRM, ERP, AI tools, and more to address modern challenges and drive growth in 2025.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/services/custom-business-solutions',
    title: 'Custom Business Solutions - Intention Infoservice',
    description: 'Transform your business with tailored software solutions. Get a free quote for custom CRM, ERP, AI tools, and more to address modern challenges and drive growth in 2025.',
    images: [
      {
        url: '/images/custom-business-solutions-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Custom Business Solutions by Intention Infoservice',
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
    canonical: 'https://intentioninfoservice.com/services/custom-business-solutions',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function CustomBusinessSolutions() {
  return (
    <>
      {/* Preload Open Graph image */}
      <link
        rel="preload"
        href="/images/custom-business-solutions-og-image.webp"
        as="image"
      />
      <MainLayout>
        <CustomBusinessSolutionsHeroSection />
        <CustomBusinessSolutionsWhatWeOfferSection />
        <CustomBusinessSolutionsProcessSection />
        <CustomBusinessSolutionsWhyChooseUsSection />
        <CustomBusinessSolutionsCTASection />
      </MainLayout>
    </>
  );
}
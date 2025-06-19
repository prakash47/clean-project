import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import UIUXDesignBrandingHeroSection from '@/components/sections/UIUXDesignBrandingHeroSection';
import UIUXDesignBrandingWhatWeOfferSection from '@/components/sections/UIUXDesignBrandingWhatWeOfferSection';
import UIUXDesignBrandingProcessSection from '@/components/sections/UIUXDesignBrandingProcessSection';
import UIUXDesignBrandingWhyChooseUsSection from '@/components/sections/UIUXDesignBrandingWhyChooseUsSection';
import UIUXDesignBrandingFAQSection from '@/components/sections/UIUXDesignBrandingFAQSection';
import UIUXDesignBrandingCTASection from '@/components/sections/UIUXDesignBrandingCTASection';

export const metadata: Metadata = {
  title: 'UI/UX Design & Branding Services - Intention Infoservice',
  description: 'Elevate your brand with expert UI/UX design and branding services. Get a free quote for user-centered designs and cohesive brand identities that engage and convert in 2025. We specialize in creating intuitive user interfaces, compelling user experiences, and strong brand identities for startups and enterprises.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  keywords: 'UI/UX design services, branding services 2025, user-centered design, brand identity development, UI design, UX design, user experience, user interface, digital branding, brand strategy, visual storytelling, design systems, prototyping, wireframing, user research, usability testing, interaction design, app design, web design, mobile UI/UX, responsive design, brand guidelines, logo design, typography, color palette, design thinking, conversion optimization, engagement, performance, SEO for UI/UX, brand loyalty, digital presence, innovation, creative design, strategic design, professional UI/UX, expert branding, custom UI/UX, modern UI/UX, future-proof design',
  openGraph: {
    url: 'https://intentioninfoservice.com/services/ui-ux-design-branding',
    title: 'UI/UX Design & Branding Services - Intention Infoservice',
    description: 'Elevate your brand with expert UI/UX design and branding services. Get a free quote for user-centered designs and cohesive brand identities that engage and convert in 2025. We specialize in creating intuitive user interfaces, compelling user experiences, and strong brand identities for startups and enterprises.',
    images: [
      {
        url: '/images/ui-ux-design-branding-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'UI/UX Design & Branding Services by Intention Infoservice',
      },
    ],
    siteName: 'Intention Infoservice',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@intentioninfo',
    creator: '@intentioninfo',
    title: 'UI/UX Design & Branding Services - Intention Infoservice',
    description: 'Elevate your brand with expert UI/UX design and branding services. Get a free quote for user-centered designs and cohesive brand identities that engage and convert in 2025. We specialize in creating intuitive user interfaces, compelling user experiences, and strong brand identities for startups and enterprises.',
    images: ['/images/ui-ux-design-branding-twitter-card.webp'],
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
      {/* Structured Data for the Page */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "UI/UX Design & Branding Services",
          "url": "https://intentioninfoservice.com/services/ui-ux-design-branding",
          "description": "Elevate your brand with Intention Infoservice's expert UI/UX design and branding services. We create user-centered designs and cohesive brand identities that engage and convert.",
          "publisher": {
            "@type": "Organization",
            "name": "Intention Infoservice",
            "logo": {
              "@type": "ImageObject",
              "url": "https://intentioninfoservice.com/logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://intentioninfoservice.com/services/ui-ux-design-branding"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://intentioninfoservice.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://intentioninfoservice.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "UI/UX Design & Branding",
                "item": "https://intentioninfoservice.com/services/ui-ux-design-branding"
              }
            ]
          }
        })}
      </script>

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
        <UIUXDesignBrandingFAQSection />
        <UIUXDesignBrandingCTASection />
      </MainLayout>
    </>
  );
}


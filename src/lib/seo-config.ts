import { DefaultSeoProps } from 'next-seo';

const SEO_CONFIG: DefaultSeoProps = {
  titleTemplate: '%s | Intention Infoservice',
  defaultTitle: 'Intention Infoservice - Web Design, Development & Digital Marketing',
  description: 'At Intention Infoservice, we transform ideas into stunning digital realities with web design, mobile app development, digital marketing, and more.',
  canonical: 'https://intentioninfoservice.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://intentioninfoservice.com',
    siteName: 'Intention Infoservice',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Intention Infoservice',
      },
    ],
  },
  twitter: {
    handle: '@intentioninfo',
    site: '@intentioninfo',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#0ea5e9',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/icons/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
};

export default SEO_CONFIG;

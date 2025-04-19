import { Metadata } from 'next';

// Default metadata for the entire site
export const defaultMetadata: Metadata = {
  title: {
    template: '%s | Intention Infoservice',
    default: 'Intention Infoservice - Web Design, Development & Digital Marketing',
  },
  description: 'Intention Infoservice transforms ideas into stunning digital realities with web design, development, mobile apps, digital marketing, and custom business solutions.',
  keywords: ['web design', 'web development', 'mobile app development', 'digital marketing', 'UI/UX design', 'custom business solutions'],
  authors: [{ name: 'Intention Infoservice' }],
  creator: 'Intention Infoservice',
  publisher: 'Intention Infoservice',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://intentioninfoservice.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://intentioninfoservice.com',
    siteName: 'Intention Infoservice',
    title: 'Intention Infoservice - Web Design, Development & Digital Marketing',
    description: 'Intention Infoservice transforms ideas into stunning digital realities with web design, development, mobile apps, digital marketing, and custom business solutions.',
    images: [
      {
        url: 'https://intentioninfoservice.com/api/og',
        width: 1200,
        height: 630,
        alt: 'Intention Infoservice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intention Infoservice - Web Design, Development & Digital Marketing',
    description: 'Intention Infoservice transforms ideas into stunning digital realities with web design, development, mobile apps, digital marketing, and custom business solutions.',
    images: ['https://intentioninfoservice.com/api/og'],
    creator: '@intentioninfo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
};

// Function to generate metadata for specific pages
export function generateMetadata(
  title: string,
  description: string,
  path: string = '/',
  ogImage?: string
): Metadata {
  const ogImageUrl = ogImage || `https://intentioninfoservice.com/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;
  
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: `https://intentioninfoservice.com${path}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

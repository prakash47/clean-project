import Link from 'next/link';
import { Metadata } from 'next';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';

// Server Component (ContactPage)
export const metadata: Metadata = {
  title: 'Contact Us - Intention Infoservice',
  description: 'Get in touch with Intention Infoservice to discuss your project requirements. Fill out our form, call us, or visit our office in Naigaon East, Juchandra, Maharashtra.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/contact',
    title: 'Contact Us - Intention Infoservice',
    description: 'Get in touch with Intention Infoservice to discuss your project requirements. Fill out our form, call us, or visit our office in Naigaon East, Juchandra, Maharashtra.',
    images: [
      {
        url: 'https://placehold.co/1200x630.webp?text=Intention+Infoservice+Contact',
        width: 1200,
        height: 630,
        alt: 'Intention Infoservice Contact',
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
    canonical: 'https://intentioninfoservice.com/contact',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function ContactPage() {
  return (
    <div className="bg-dark-950 text-white">
      {/* Schema Markup for Contact Information */}
      <div dangerouslySetInnerHTML={{
        __html: `<script type="application/ld+json">${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Intention Infoservice",
          "url": "https://intentioninfoservice.com",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91-987-654-3210", // Updated to match Footer
              "contactType": "Customer Service",
              "email": "support@intentioninfoservice.com", // Updated to match Footer
              "areaServed": "IN",
              "availableLanguage": ["English"],
            },
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Naigaon East, Juchandra",
            "addressLocality": "Naigaon",
            "addressRegion": "Maharashtra",
            "postalCode": "401208",
            "addressCountry": "IN",
          },
        })}</script>`,
      }} />

      {/* Hero Section */}
      <section className="relative bg-dark-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-[10%] text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Let’s Bring Your Ideas to Life
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Fill out the form below, and our team will get back to you to discuss your requirements and how we can help.
          </p>
        </div>
      </section>

      {/* Render the Client Component */}
      <ContactForm />

      {/* Phone Section (Similar to Home Page) */}
      <section className="container mx-auto px-4 md:px-[10%] py-12 text-center">
        <div className="bg-dark-900 rounded-lg p-6 shadow-lg">
          <FaPhone className="w-8 h-8 text-teal-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Reach Out Directly</h3>
          <p className="text-gray-400">
            <Link href="tel:+919876543210" className="hover:text-teal-500 transition-colors">
              +91 987 654 3210
            </Link>
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="container mx-auto px-4 md:px-[10%] py-12 bg-dark-900">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Other Ways to Reach Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <FaEnvelope className="w-8 h-8 text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
            <p className="text-gray-400">
              <Link href="mailto:support@intentioninfoservice.com" className="hover:text-teal-500 transition-colors">
                support@intentioninfoservice.com
              </Link>
            </p>
          </div>
          <div className="text-center">
            <FaPhone className="w-8 h-8 text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
            <p className="text-gray-400">
              <Link href="tel:+919876543210" className="hover:text-teal-500 transition-colors">
                +91 987 654 3210
              </Link>
            </p>
          </div>
          <div className="text-center">
            <FaMapMarkerAlt className="w-8 h-8 text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
            <p className="text-gray-400">
              Naigaon East, Juchandra, <br />
              Maharashtra - 401208, India
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
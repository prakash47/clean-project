import Link from 'next/link';
import { Metadata } from 'next';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedTechBackground from '@/components/animations/AnimatedTechBackground';

// Server Component (ContactPage)
export const metadata: Metadata = {
  title: 'Contact Us - Intention Infoservice',
  description: 'Get in touch with Intention Infoservice to discuss your project requirements. Fill out our form, call us, or visit our office in Naigaon East, Juchandra, Maharashtra.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/contact-us',
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
    canonical: 'https://intentioninfoservice.com/contact-us',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function ContactPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly will I get a response after submitting the form?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team typically responds within 24-48 hours after receiving your inquiry. If you need immediate assistance, feel free to call us at +91 7021539267 or email us at contact@intentioninfoservice.com."
        }
      },
      {
        "@type": "Question",
        "name": "What services does Intention Infoservice offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a wide range of services including Web Design & Development, Mobile App Development, Website Maintenance, UI/UX Design & Branding, Digital Marketing, and Custom Business Solutions. Visit our Services page to learn more."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Intention Infoservice located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are located in Naigaon East, Juchandra, Maharashtra - 401208, India. You can find our location on the map below or contact us directly for directions."
        }
      }
    ]
  };

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
              "telephone": "+91-7021539267",
              "contactType": "Customer Service",
              "email": "contact@intentioninfoservice.com",
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

      {/* FAQ Schema Markup */}
      <div dangerouslySetInnerHTML={{
        __html: `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`,
      }} />

      {/* Hero Section with Animated Background */}
      <section className="relative bg-dark-900 py-16 md:py-20 mb-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <AnimatedTechBackground />
        </div>
        <div className="container mx-auto px-4 md:px-[10%] text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4 tracking-tight">
              Let’s Bring Your Ideas to Life
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Have a project in mind? Fill out the form below, and our team will get back to you to discuss your requirements and how we can help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Other Ways to Reach Us Section with Interactive Cards */}
      <section className="container mx-auto px-4 md:px-[10%] py-12 bg-dark-900 mt-4">
        <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">Other Ways to Reach Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection delay={0.2} className="text-center p-6 bg-dark-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <FaEnvelope className="w-8 h-8 text-brand-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-blue mb-2">Email Us</h3>
            <p className="text-gray-400">
              <Link href="mailto:contact@intentioninfoservice.com" className="text-brand-blue hover:underline transition-colors">
                contact@intentioninfoservice.com
              </Link>
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4} className="text-center p-6 bg-dark-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <FaPhone className="w-8 h-8 text-brand-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-blue mb-2">Call Us</h3>
            <p className="text-gray-400">
              <Link href="tel:+917021539267" className="text-brand-blue hover:underline transition-colors">
                +91 7021539267
              </Link>
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.6} className="text-center p-6 bg-dark-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <FaMapMarkerAlt className="w-8 h-8 text-brand-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-blue mb-2">Visit Us</h3>
            <p className="text-gray-400">
              Naigaon East, Juchandra, <br />
              Maharashtra - 401208, India
            </p>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}



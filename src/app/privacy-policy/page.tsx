import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy - Intention Infoservice',
  description: 'Read the Privacy Policy of Intention Infoservice to understand how we collect, use, and protect your personal information in compliance with GDPR, CCPA, and other regulations.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/privacy-policy',
    title: 'Privacy Policy - Intention Infoservice',
    description: 'Read the Privacy Policy of Intention Infoservice to understand how we collect, use, and protect your personal information in compliance with GDPR, CCPA, and other regulations.',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Intention Infoservice Privacy Policy',
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
    canonical: 'https://intentioninfoservice.com/privacy-policy',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Preload Open Graph image */}
      <link
        rel="preload"
        href="/images/og-image.webp"
        as="image"
      />
      <MainLayout>
        <section className="bg-dark-950 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-[10%]">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Privacy Policy</h1>
            <p className="text-gray-400 mb-8">
              Last Updated: April 20, 2025
            </p>
            <div className="text-gray-300 space-y-6">
              <p>
                At Intention Infoservice, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. Please read this policy carefully to understand our practices regarding your personal data.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other details you provide when you contact us, submit a form, or request a quote.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, such as IP address, browser type, pages visited, and time spent on the site.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience, analyze website performance, and deliver personalized content. You can manage your cookie preferences through your browser settings.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8">2. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide and improve our services, including responding to inquiries and delivering software solutions.</li>
                <li>To personalize your experience on our website and tailor content to your interests.</li>
                <li>To analyze website usage and performance to enhance user experience.</li>
                <li>To communicate with you, including sending updates, newsletters, and promotional materials (you can opt-out at any time).</li>
                <li>To comply with legal obligations and protect our rights, property, or safety.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8">3. How We Share Your Information</h2>
              <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>With Service Providers:</strong> We may share your data with trusted third-party service providers (e.g., hosting providers, analytics tools) who assist us in operating our website and services. These providers are contractually obligated to protect your data.</li>
                <li><strong>For Legal Reasons:</strong> We may disclose your information if required by law, such as to comply with a subpoena, court order, or other legal process.</li>
                <li><strong>Business Transfers:</strong> If Intention Infoservice is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8">4. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies to improve your experience on our website. Cookies are small files stored on your device that help us recognize you, remember your preferences, and analyze site usage. You can disable cookies in your browser settings, but this may affect the functionality of our website.
              </p>
              <p>
                We also use analytics tools like Google Analytics to track website performance. You can opt-out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">Google Analytics Opt-Out Browser Add-On</a>.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">5. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">6. Your Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Access:</strong> Request access to the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations).</li>
                <li><strong>Opt-Out:</strong> Opt-out of marketing communications or certain data processing activities (e.g., under CCPA, you can opt-out of the sale of your data).</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a machine-readable format.</li>
              </ul>
              <p>
                To exercise your rights, please contact us at <a href="mailto:contact@intentioninfoservice.com" className="text-primary-500 hover:underline">contact@intentioninfoservice.com</a>.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">8. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">9. International Data Transfers</h2>
              <p>
                Intention Infoservice operates globally, and your data may be transferred to and processed in countries other than your own, including India, where our primary operations are based. We ensure that such transfers comply with applicable data protection laws, including implementing appropriate safeguards like Standard Contractual Clauses.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on our website with a new "Last Updated" date.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">11. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="mt-2">
                Email: <a href="mailto:contact@intentioninfoservice.com" className="text-primary-500 hover:underline">contact@intentioninfoservice.com</a><br />
                Phone: <a href="tel:+916386530639" className="text-primary-500 hover:underline">+91 6386 530639</a><br />
                Address: Office # 4 Mittal Shopping Center, Naigaon East, Juchandra, Maharashtra 401208, India
              </p>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
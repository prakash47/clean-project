import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';

export const metadata: Metadata = {
  title: 'Terms of Service - Intention Infoservice',
  description: 'Read the Terms of Service for Intention Infoservice to understand the rules and conditions for using our website and services.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/terms-of-service',
    title: 'Terms of Service - Intention Infoservice',
    description: 'Read the Terms of Service for Intention Infoservice to understand the rules and conditions for using our website and services.',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Intention Infoservice Terms of Service',
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
    canonical: 'https://intentioninfoservice.com/terms-of-service',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function TermsOfService() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Terms of Service</h1>
            <p className="text-gray-400 mb-8">
              Last Updated: April 20, 2025
            </p>
            <div className="text-gray-300 space-y-6">
              <p>
                Welcome to Intention Infoservice. These Terms of Service ("Terms") govern your use of our website, services, and software solutions (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our Services.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">1. Acceptance of Terms</h2>
              <p>
                By using our Services, you confirm that you are at least 18 years old or have the legal capacity to enter into a binding agreement. You also agree to comply with all applicable laws and regulations.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">2. Use of Services</h2>
              <p>You agree to use our Services only for lawful purposes and in accordance with these Terms. You shall not:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use the Services in any way that violates local, national, or international laws or regulations.</li>
                <li>Attempt to gain unauthorized access to any part of the Services, including servers, databases, or user accounts.</li>
                <li>Use the Services to transmit harmful content, including viruses, malware, or other malicious code.</li>
                <li>Engage in any activity that interferes with or disrupts the Services or the experience of other users.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8">3. Intellectual Property</h2>
              <p>
                All content, designs, software, and materials provided through our Services, including but not limited to text, graphics, logos, and code, are the intellectual property of Intention Infoservice or our licensors. You may not copy, reproduce, distribute, or create derivative works from our content without prior written permission.
              </p>
              <p>
                You retain ownership of any content you submit to us (e.g., through forms or project requests). By submitting content, you grant Intention Infoservice a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content solely for the purpose of providing our Services.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">4. User Accounts</h2>
              <p>
                If you create an account to use certain Services, you are responsible for maintaining the confidentiality of your account information and password. You agree to notify us immediately of any unauthorized use of your account. Intention Infoservice is not liable for any loss or damage arising from your failure to secure your account.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">5. Payments and Fees</h2>
              <p>
                Some of our Services may require payment. All fees are non-refundable unless otherwise stated. You agree to provide accurate payment information and to pay all applicable fees for the Services you use. We reserve the right to change our fees at any time, with notice provided through our website or email.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">6. Termination</h2>
              <p>
                We may suspend or terminate your access to the Services at our discretion, with or without notice, if you violate these Terms or engage in activities that harm Intention Infoservice or other users. You may also terminate your use of the Services at any time by discontinuing access.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Intention Infoservice shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the Services. Our total liability for any claim arising from these Terms shall not exceed the amount you paid us for the Services in the preceding 12 months.
              </p>
              <p>
                The Services are provided on an "as-is" and "as-available" basis. We do not warrant that the Services will be uninterrupted, error-free, or free from viruses or other harmful components.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">8. Indemnification</h2>
              <p>
                You agree to indemnify and hold Intention Infoservice, its affiliates, officers, employees, and agents harmless from any claims, liabilities, damages, or expenses (including legal fees) arising from your use of the Services, violation of these Terms, or infringement of any third-party rights.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">9. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Maharashtra, India, without regard to its conflict of law principles. Any disputes arising from these Terms or your use of the Services shall be resolved through binding arbitration in Mumbai, India, in accordance with the rules of the Indian Arbitration and Conciliation Act, 1996. You agree to waive your right to participate in a class action lawsuit or class-wide arbitration.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">10. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time to reflect changes in our Services or legal requirements. We will notify you of significant changes by posting the updated Terms on our website with a new "Last Updated" date. Your continued use of the Services after such changes constitutes your acceptance of the updated Terms.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">11. Contact Us</h2>
              <p>
                If you have any questions or concerns about these Terms, please contact us at:
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
import Link from 'next/link';
import { Metadata } from 'next';
import { FaCode, FaMobileAlt, FaShieldAlt, FaPaintBrush, FaChartLine, FaCogs } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Our Services - Intention Infoservice',
  description: 'Explore the wide range of services offered by Intention Infoservice, including web development, mobile app development, digital marketing, and more.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/services',
    title: 'Our Services - Intention Infoservice',
    description: 'Explore the wide range of services offered by Intention Infoservice, including web development, mobile app development, digital marketing, and more.',
    images: [
      {
        url: 'https://placehold.co/1200x630.webp?text=Intention+Infoservice+Services',
        width: 1200,
        height: 630,
        alt: 'Intention Infoservice Services',
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
    canonical: 'https://intentioninfoservice.com/services',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const services = [
  {
    title: 'Web Design & Development',
    description: 'Custom Web Design & Development Services – Build stunning, responsive websites optimized for performance, SEO, and user experience to grow your online presence.',
    icon: <FaCode className="w-12 h-12 text-teal-500 mb-4" />,
    link: '/services/web-design-development',
  },
  {
    title: 'Mobile App Development',
    description: 'Top Mobile App Development Solutions – Create intuitive iOS and Android apps with seamless user experiences to engage your audience on the go.',
    icon: <FaMobileAlt className="w-12 h-12 text-teal-500 mb-4" />,
    link: '/services/mobile-app-development',
  },
  {
    title: 'Website Maintenance',
    description: 'Reliable Website Maintenance Services – Ensure your website stays secure, updated, and performs optimally with our ongoing support and maintenance.',
    icon: <FaShieldAlt className="w-12 h-12 text-teal-500 mb-4" />,
    link: '/services/website-maintenance',
  },
  {
    title: 'UI/UX Design & Branding',
    description: 'Creative UI/UX Design & Branding Services – Design intuitive interfaces and establish a strong brand identity to enhance user engagement.',
    icon: <FaPaintBrush className="w-12 h-12 text-teal-500 mb-4" />,
    link: '/services/ui-ux-design-branding',
  },
  {
    title: 'Digital Marketing Solutions',
    description: 'Effective Digital Marketing Strategies – Boost your online presence with SEO, social media marketing, and content strategies to drive traffic and conversions.',
    icon: <FaChartLine className="w-12 h-12 text-teal-500 mb-4" />,
    link: '/services/digital-marketing',
  },
  {
    title: 'Custom Business Solutions',
    description: 'Tailored Business Solutions – Develop custom software to streamline operations, improve efficiency, and support your business growth.',
    icon: <FaCogs className="w-12 h-12 text-teal-500 mb-4" />,
    link: '/services/custom-business-solutions',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-dark-950 text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-blue to-brand-indigo !bg-gradient-to-r py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-[10%] text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Services
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover how we can elevate your business with our expert services.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 md:px-[10%] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.title} className="bg-dark-900 rounded-lg p-6 shadow-lg text-center">
              {service.icon}
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Link
                href={service.link}
                className="inline-block bg-teal-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-teal-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
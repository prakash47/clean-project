'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaSearch, FaBullhorn, FaChartLine, FaPen, FaEnvelope, FaChartBar, FaUsers, FaGlobe, FaDesktop, FaChartPie, FaShieldAlt, FaVideo, FaMobileAlt, FaMapMarkerAlt, FaAd } from 'react-icons/fa';

export default function DigitalMarketingWhatWeOfferSection() {
  const offerings = [
    {
      title: 'SEO Optimization',
      description: 'Boost your search engine rankings and drive organic traffic with our proven SEO services and strategies.',
      icon: <FaSearch className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Social Media Marketing',
      description: 'Enhance brand engagement with targeted social media marketing campaigns to connect with your audience.',
      icon: <FaBullhorn className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'PPC Advertising',
      description: 'Maximize ROI with expertly managed PPC advertising and pay-per-click campaigns for 2025 success.',
      icon: <FaChartLine className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Content Marketing',
      description: 'Elevate your brand visibility with content marketing strategies and compelling content creation.',
      icon: <FaPen className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Email Marketing',
      description: 'Drive conversions with personalized email marketing campaigns to nurture leads effectively.',
      icon: <FaEnvelope className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Analytics & Reporting',
      description: 'Gain data insights with analytics and reporting to track performance and optimize strategies.',
      icon: <FaChartBar className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Affiliate Marketing',
      description: 'Increase sales and drive traffic with affiliate marketing strategies tailored for 2025 growth.',
      icon: <FaUsers className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Influencer Marketing',
      description: 'Expand your brand reach with influencer marketing campaigns to engage new audiences.',
      icon: <FaGlobe className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Web Design and Development',
      description: 'Enhance user experience with high-performing web design and development solutions.',
      icon: <FaDesktop className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Conversion Rate Optimization (CRO)',
      description: 'Increase conversions with proven CRO strategies and conversion rate optimization techniques.',
      icon: <FaChartPie className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Online Reputation Management (ORM)',
      description: 'Protect your brand with online reputation management and ORM services for a positive image.',
      icon: <FaShieldAlt className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Video Marketing',
      description: 'Engage audiences with video marketing and video content to boost conversions in 2025.',
      icon: <FaVideo className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Mobile Marketing',
      description: 'Target mobile users with mobile marketing campaigns to drive engagement and conversions.',
      icon: <FaMobileAlt className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Local SEO and Listings Management',
      description: 'Enhance local visibility with local SEO and listings management for better search rankings.',
      icon: <FaMapMarkerAlt className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Programmatic Advertising',
      description: 'Leverage programmatic advertising for automated ad buying and precision targeting in 2025.',
      icon: <FaAd className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
  ];

  // Structured data for the section
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    "serviceType": "Digital Marketing",
    "provider": {
      "@type": "Organization",
      "name": "Intention Infoservice",
      "url": "https://intentioninfoservice.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Digital Avenue",
        "addressLocality": "Tech City",
        "postalCode": "TC 12345"
      }
    },
    "description": "Top digital marketing services for 2025, offering SEO services, PPC advertising, social media marketing, content marketing, email marketing, affiliate marketing, influencer marketing, web design, CRO, ORM, video marketing, mobile marketing, local SEO, and programmatic advertising to drive online growth and conversions.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": offerings.map((offering, index) => ({
        "@type": "Service",
        "position": index + 1,
        "name": offering.title,
        "description": offering.description,
      })),
    },
  };

  return (
    <section className="relative bg-dark-950 py-16 md:py-24 overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-4 md:px-[10%]">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Comprehensive Digital Marketing Solutions for 2025
          </motion.h2>
          <motion.p
            className="text-base text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover top digital marketing services for 2025, including SEO services, PPC advertising, social media marketing, content marketing, and more, designed to drive online growth, engagement, and conversions.
          </motion.p>
        </div>
        {/* Glassmorphic Feature Grid with Hover Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              className="group backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-[rgba(0,160,227,0.3)] hover:border-brand-blue hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] transition-all duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && console.log(`Selected ${offering.title}`)}
            >
              {offering.icon}
              <h3 className="text-xl font-semibold text-white mb-4">{offering.title}</h3>
              <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{offering.description}</p>
            </motion.div>
          ))}
        </div>
        {/* CTA Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="btn btn-primary hover:bg-brand-blue hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] transition-all duration-300"
            icon={<FaArrowRight />}
            iconPosition="right"
            href="/contact-us"
            ariaLabel="Start growing your business today with digital marketing solutions"
          >
            Start Growing Your Business Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
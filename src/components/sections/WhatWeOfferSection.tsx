'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaDesktop, FaShoppingCart, FaCode, FaDatabase, FaFileAlt, FaMobileAlt, FaUniversalAccess, FaSearch, FaTools, FaPlug, FaReact, FaTachometerAlt } from 'react-icons/fa';

export default function WhatWeOfferSection() {
  const offerings = [
    {
      title: 'Business Websites',
      description: 'Launch professional, SEO-optimized websites that elevate your brand and convert visitors into loyal customers.',
      icon: <FaDesktop className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Develop secure, scalable e-commerce platforms with seamless payment integration to boost sales.',
      icon: <FaShoppingCart className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Custom Web Apps',
      description: 'Build tailored web applications, from booking systems to dashboards, to meet your unique business needs.',
      icon: <FaCode className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'CMS Integration',
      description: 'Effortlessly manage content with WordPress, Shopify, or custom CMS solutions for flexibility and scalability.',
      icon: <FaDatabase className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Landing Pages',
      description: 'Create high-converting landing pages for marketing campaigns, optimized for lead generation and SEO.',
      icon: <FaFileAlt className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Progressive Web Apps (PWAs)',
      description: 'Develop fast, reliable PWAs that deliver app-like experiences on mobile and desktop with offline capabilities.',
      icon: <FaMobileAlt className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Web Accessibility Solutions',
      description: 'Ensure WCAG compliance with accessible web designs that cater to all users, enhancing inclusivity.',
      icon: <FaUniversalAccess className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'SEO-Optimized Web Development',
      description: 'Boost search rankings with websites built for SEO, including fast load times and on-page optimization.',
      icon: <FaSearch className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Web Maintenance & Support',
      description: 'Keep your website secure and updated with ongoing maintenance, support, and performance monitoring.',
      icon: <FaTools className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'API Integration & Development',
      description: 'Seamlessly connect your website with third-party APIs for enhanced functionality and data integration.',
      icon: <FaPlug className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Single Page Applications (SPAs)',
      description: 'Deliver seamless, app-like experiences with fast, responsive SPAs using modern frameworks like React.',
      icon: <FaReact className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
    {
      title: 'Web Performance Optimization',
      description: 'Enhance site speed and Core Web Vitals with advanced optimization techniques for better user experiences.',
      icon: <FaTachometerAlt className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
    },
  ];

  // Structured data for the section
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Design and Development',
    provider: {
      '@type': 'Organization',
      name: 'Intention Infoservice',
      url: 'https://intentioninfoservice.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Naigaon East, Juchandra',
        addressLocality: 'Naigaon',
        addressRegion: 'Maharashtra',
        postalCode: '401208',
        addressCountry: 'IN',
      },
    },
    description: 'Comprehensive web design and development services for 2025, offering business websites, e-commerce solutions, custom web apps, CMS integration, landing pages, PWAs, accessibility solutions, SEO optimization, maintenance, API integration, SPAs, and performance optimization to drive digital success.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Design and Development Services',
      itemListElement: offerings.map((offering, index) => ({
        '@type': 'Service',
        position: index + 1,
        name: offering.title,
        description: offering.description,
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
      {/* Subtle Grain Texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
      />
      {/* Gradient Waves */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(45deg, rgba(0, 160, 227, 0.2), rgba(57, 49, 133, 0.2))',
            animation: 'wave 10s linear infinite',
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 160, 227, 0.2), rgba(57, 49, 133, 0.2))',
            animation: 'wave 15s linear infinite reverse',
          }}
        />
        <style>
          {`
            @keyframes wave {
              0% {
                background-position: 0% 0%;
              }
              100% {
                background-position: 200% 200%;
              }
            }
          `}
        </style>
      </div>
      {/* Animated Light Flares */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%">
          <line x1="-500" y1="20%" x2="1500" y2="20%" stroke="#00a0e3" strokeWidth="2" opacity="0.2" className="light-flare" />
          <line x1="-500" y1="40%" x2="1500" y2="40%" stroke="#393185" strokeWidth="2" opacity="0.2" className="light-flare" />
          <line x1="-500" y1="60%" x2="1500" y2="60%" stroke="#00a0e3" strokeWidth="2" opacity="0.2" className="light-flare" />
          <line x1="-500" y1="80%" x2="1500" y2="80%" stroke="#393185" strokeWidth="2" opacity="0.2" className="light-flare" />
          <style>
            {`
              .light-flare {
                animation: flare 5s linear infinite;
              }
              @keyframes flare {
                0% { transform: translateX(-500px); }
                100% { transform: translateX(1500px); }
              }
            `}
          </style>
        </svg>
      </div>
      <div className="container mx-auto px-4 md:px-[10%]">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Explore Our Full Range of Web Design & Development Services
          </motion.h2>
          <motion.p
            className="text-lg text-brand-blue font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Comprehensive Solutions for Every Digital Need
          </motion.p>
          <motion.p
            className="text-base text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            From business websites to advanced web applications, we offer a full spectrum of web design and development services to help you succeed in 2025’s digital landscape.
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
            ariaLabel="Discover how we can help with your web design and development needs"
          >
            Discover How We Can Help – Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { 
  FaArrowRight, FaDesktop, FaShoppingCart, FaCode, FaDatabase, FaFileAlt, FaMobileAlt, 
  FaUniversalAccess, FaSearch, FaTools, FaPlug, FaReact, FaTachometerAlt, FaWordpress,
  FaShieldAlt, FaChartLine, FaUsers, FaRocket, FaStar, FaCheckCircle, FaGlobe
} from 'react-icons/fa';

export default function WhatWeOfferSection() {
  const offerings = [
    {
      title: 'Custom Business Websites',
      description: 'Professional, SEO-optimized business websites that elevate your brand, showcase your services, and convert visitors into loyal customers with modern design and functionality.',
      icon: <FaDesktop className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First'],
      price: 'Starting at $1,999',
    },
    {
      title: 'E-Commerce Development',
      description: 'Secure, scalable e-commerce platforms with seamless payment integration, inventory management, and conversion optimization to boost your online sales.',
      icon: <FaShoppingCart className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
      features: ['Payment Gateway', 'Inventory System', 'SSL Security', 'Analytics'],
      price: 'Starting at $3,999',
    },
    {
      title: 'Custom Web Applications',
      description: 'Tailored web applications from booking systems to dashboards, built with modern frameworks to meet your unique business requirements and workflows.',
      icon: <FaCode className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
      features: ['Custom Features', 'Database Integration', 'User Management', 'API Development'],
      price: 'Starting at $4,999',
    },
    {
      title: 'CMS Integration & Development',
      description: 'Effortlessly manage content with WordPress, Shopify, or custom CMS solutions that provide flexibility, scalability, and ease of use for your team.',
      icon: <FaDatabase className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
      features: ['WordPress', 'Shopify', 'Custom CMS', 'Content Management'],
      price: 'Starting at $1,499',
    },
    {
      title: 'High-Converting Landing Pages',
      description: 'Create high-converting landing pages for marketing campaigns, optimized for lead generation, SEO, and maximum conversion rates.',
      icon: <FaFileAlt className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
      features: ['A/B Testing', 'Lead Forms', 'Analytics', 'Conversion Optimization'],
      price: 'Starting at $899',
    },
    {
      title: 'Progressive Web Apps (PWAs)',
      description: 'Fast, reliable PWAs that deliver app-like experiences on mobile and desktop with offline capabilities, push notifications, and native features.',
      icon: <FaMobileAlt className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
      features: ['Offline Support', 'Push Notifications', 'App-like Experience', 'Cross-Platform'],
      price: 'Starting at $2,999',
    },
    {
      title: 'Web Accessibility Solutions',
      description: 'Ensure WCAG 2.1 AA compliance with accessible web designs that cater to all users, enhancing inclusivity and expanding your audience reach.',
      icon: <FaUniversalAccess className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
      features: ['WCAG Compliance', 'Screen Reader Support', 'Keyboard Navigation', 'Inclusive Design'],
      price: 'Starting at $799',
    },
    {
      title: 'SEO-Optimized Development',
      description: 'Boost search rankings with websites built for SEO success, including fast load times, on-page optimization, and technical SEO implementation.',
      icon: <FaSearch className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
      features: ['Technical SEO', 'Page Speed', 'Schema Markup', 'Core Web Vitals'],
      price: 'Starting at $1,299',
    },
    {
      title: 'Website Maintenance & Support',
      description: 'Keep your website secure, updated, and performing optimally with ongoing maintenance, support, security monitoring, and performance optimization.',
      icon: <FaTools className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
      features: ['Security Updates', '24/7 Monitoring', 'Backup Services', 'Performance Optimization'],
      price: 'Starting at $299/month',
    },
    {
      title: 'API Integration & Development',
      description: 'Seamlessly connect your website with third-party APIs for enhanced functionality, data integration, and automated workflows that streamline operations.',
      icon: <FaPlug className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
      features: ['Third-party APIs', 'Custom APIs', 'Data Sync', 'Automation'],
      price: 'Starting at $1,799',
    },
    {
      title: 'Single Page Applications (SPAs)',
      description: 'Deliver seamless, app-like experiences with fast, responsive SPAs using modern frameworks like React, Vue.js, and Angular for optimal performance.',
      icon: <FaReact className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
      features: ['React/Vue/Angular', 'Fast Navigation', 'State Management', 'Modern UI'],
      price: 'Starting at $2,499',
    },
    {
      title: 'Performance Optimization',
      description: 'Enhance site speed and Core Web Vitals with advanced optimization techniques, CDN integration, and performance monitoring for better user experiences.',
      icon: <FaTachometerAlt className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" />,
      features: ['Speed Optimization', 'CDN Setup', 'Image Optimization', 'Caching'],
      price: 'Starting at $999',
    },
  ];

  // Enhanced structured data for the section
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Design and Development Services',
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
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150',
        bestRating: '5',
        worstRating: '1',
      },
    },
    description: 'Comprehensive web design and development services for 2025, offering custom business websites, e-commerce solutions, web applications, CMS integration, landing pages, PWAs, accessibility solutions, SEO optimization, maintenance, API integration, SPAs, and performance optimization to drive digital success.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Design and Development Services Catalog',
      itemListElement: offerings.map((offering, index) => ({
        '@type': 'Offer',
        position: index + 1,
        name: offering.title,
        description: offering.description,
        category: 'Web Design and Development',
        availability: 'https://schema.org/InStock',
        priceRange: offering.price,
      })),
    },
  };

  return (
    <section className="relative bg-dark-950 py-8 md:py-12 overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Background Elements */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
      />
      
      {/* Animated Background Gradients */}
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
              0% { background-position: 0% 0%; }
              100% { background-position: 200% 200%; }
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

      <div className="container mx-auto px-4 md:px-[10%] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Complete Web Design & Development Services for 2025
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-brand-blue font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From Custom Websites to Advanced Web Applications
          </motion.p>
          <motion.p
            className="text-base md:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Discover our comprehensive range of web design and development services designed to help your business thrive in the digital landscape. From responsive business websites to complex e-commerce platforms, we deliver solutions that drive results and exceed expectations.
          </motion.p>
        </div>

        {/* Trust Indicators */}
        {/* <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center text-yellow-400 mb-2">
              <FaStar className="w-5 h-5" />
              <span className="text-2xl font-bold text-white ml-2">4.9/5</span>
            </div>
            <span className="text-sm text-gray-400">Client Satisfaction</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center text-brand-blue mb-2">
              <FaUsers className="w-5 h-5" />
              <span className="text-2xl font-bold text-white ml-2">150+</span>
            </div>
            <span className="text-sm text-gray-400">Projects Delivered</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center text-green-400 mb-2">
              <FaRocket className="w-5 h-5" />
              <span className="text-2xl font-bold text-white ml-2">98%</span>
            </div>
            <span className="text-sm text-gray-400">On-Time Delivery</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center text-purple-400 mb-2">
              <FaShieldAlt className="w-5 h-5" />
              <span className="text-2xl font-bold text-white ml-2">24/7</span>
            </div>
            <span className="text-sm text-gray-400">Support Available</span>
          </div>
        </motion.div> */}

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              className="group backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-[rgba(0,160,227,0.3)] hover:border-brand-blue hover:shadow-[0_0_20px_rgba(0,160,227,0.5)] transition-all duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && console.log(`Selected ${offering.title}`)}
            >
              {/* Icon and Title */}
              <div className="text-center  mb-4">
               <div className='flex justify-center'> {offering.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{offering.title}</h3>
                {/* <div className="text-brand-blue font-semibold text-sm mb-3">{offering.price}</div> */}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-4 flex-grow leading-relaxed">
                {offering.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-2">
                  {offering.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                      <FaCheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                <Button
                  size="sm"
                  className="w-full bg-brand-blue/20 hover:bg-brand-blue text-brand-blue hover:text-white border border-brand-blue transition-all duration-300 text-sm py-2"
                  href="/contact-us"
                  ariaLabel={`Learn more about ${offering.title} services`}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-16 p-8 backdrop-blur-sm bg-white/5 rounded-xl border border-[rgba(0,160,227,0.3)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Get a free consultation and custom quote for your web design and development project. 
            Our experts are ready to bring your vision to life with cutting-edge technology and proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,160,227,0.5)]"
              icon={<FaArrowRight />}
              iconPosition="right"
              href="/contact-us"
              ariaLabel="Get your free web design consultation and quote"
            >
              Get Free Consultation
            </Button>
            {/* <Button
              size="lg"
              className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              href="/portfolio"
              ariaLabel="View our portfolio of web design and development projects"
            >
              View Our Work
            </Button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


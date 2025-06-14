'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaTools, FaPaintBrush, FaBullhorn, FaNetworkWired, FaArrowRight, FaStar } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import { gsap } from 'gsap';

export default function ServicesSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Ensure elements exist before applying animations
    const serviceCards = document.querySelectorAll('.service-card');

    // Apply GSAP animations only if elements exist
    if (serviceCards.length > 0) {
      serviceCards.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.2 + index * 0.1, ease: 'power2.out' }
        );
      });
    }
  }, []);

  const services = [
    {
      icon: <FaCode className="text-4xl text-brand-blue" />,
      title: 'Web Design & Development Services',
      description: 'Professional custom web development services including responsive web design, e-commerce solutions, CMS development, and performance optimization. Build stunning websites that drive results.',
      features: ['Responsive Design', 'SEO Optimization', 'E-commerce Solutions', 'CMS Integration'],
      href: '/services/web-design-development',
      popular: true,
      rating: 4.9,
      projects: '50+',
    },
    {
      icon: <FaMobileAlt className="text-4xl text-brand-blue" />,
      title: 'Mobile App Development Services',
      description: 'Expert mobile app development for iOS and Android platforms. Create intuitive, feature-rich mobile applications with seamless user experiences and robust functionality.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Store Optimization'],
      href: '/services/mobile-app-development',
      popular: false,
      rating: 4.8,
      projects: '30+',
    },
    {
      icon: <FaTools className="text-4xl text-brand-blue" />,
      title: 'Website Maintenance Services',
      description: 'Comprehensive website maintenance services to keep your site secure, updated, and performing optimally. Regular backups, security updates, and technical support included.',
      features: ['Security Updates', 'Performance Monitoring', 'Content Updates', '24/7 Support'],
      href: '/services/website-maintenance',
      popular: false,
      rating: 4.9,
      projects: '100+',
    },
    {
      icon: <FaPaintBrush className="text-4xl text-brand-blue" />,
      title: 'UI/UX Design & Branding Services',
      description: 'Professional UI/UX design and branding services to create memorable user experiences and strong brand identity. Design that converts visitors into customers.',
      features: ['User Research', 'Wireframing', 'Brand Identity', 'Design Systems'],
      href: '/services/ui-ux-design-branding',
      popular: true,
      rating: 4.9,
      projects: '40+',
    },
    {
      icon: <FaBullhorn className="text-4xl text-brand-blue" />,
      title: 'Digital Marketing Services',
      description: 'Comprehensive digital marketing solutions including SEO, social media marketing, PPC advertising, and content marketing to boost your online presence and drive growth.',
      features: ['SEO Optimization', 'Social Media Marketing', 'PPC Advertising', 'Content Marketing'],
      href: '/services/digital-marketing',
      popular: true,
      rating: 4.8,
      projects: '60+',
    },
    {
      icon: <FaNetworkWired className="text-4xl text-brand-blue" />,
      title: 'Custom Business Solutions',
      description: 'Tailored software solutions designed to optimize your business operations. Custom CRM, ERP, and automation tools to streamline workflows and increase efficiency.',
      features: ['Custom CRM', 'Business Automation', 'API Integration', 'Cloud Solutions'],
      href: '/services/custom-business-solutions',
      popular: false,
      rating: 4.9,
      projects: '25+',
    },
  ];

  // Structured data for services
  const servicesStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Software Development Services',
    'description': 'Comprehensive software development services offered by Intention Infoservice',
    'itemListElement': services.map((service, index) => ({
      '@type': 'Service',
      'position': index + 1,
      'name': service.title,
      'description': service.description,
      'provider': {
        '@type': 'Organization',
        'name': 'Intention Infoservice',
        'url': 'https://intentioninfoservice.com',
      },
      'areaServed': 'Worldwide',
      'availableChannel': {
        '@type': 'ServiceChannel',
        'serviceUrl': `https://intentioninfoservice.com${service.href}`,
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': service.rating,
        'reviewCount': parseInt(service.projects.replace('+', '')) * 2,
        'bestRating': 5,
        'worstRating': 1,
      },
    })),
  };

  return (
    <section className="relative bg-dark-950 pt-10 pb-14" itemScope itemType="https://schema.org/WebPageElement">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesStructuredData) }}
      />

      <div className="container mx-auto w-full px-[8%] md:px-[10%] lg:px-[10%]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            itemProp="name"
          >
            Our Software Development Services
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            itemProp="description"
          >
            Discover how our expert team can elevate your business with comprehensive digital solutions. From custom web development to mobile apps and digital marketing strategies.
          </motion.p>
          
          {/* Trust Indicators */}
          {/* <motion.div
            className="flex flex-wrap justify-center gap-8 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>150+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>5+ Years Experience</span>
            </div>
          </motion.div> */}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card relative bg-dark-900 p-8 rounded-xl shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 flex flex-col border border-gray-800 hover:border-brand-blue/30 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-brand-blue to-brand-indigo text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Popular
                </div>
              )}

              {/* Service Icon */}
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-semibold text-white text-center mb-4 group-hover:text-brand-blue transition-colors duration-300" itemProp="name">
                {service.title}
              </h3>

              {/* Rating and Projects */}
              {/* <div className="flex justify-center items-center gap-4 mb-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500 text-xs" />
                  <span>{service.rating}</span>
                </div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <span>{service.projects} Projects</span>
              </div> */}

              {/* Service Description */}
              <p className="text-gray-400 text-center mb-6 flex-grow leading-relaxed" itemProp="description">
                {service.description}
              </p>

              {/* Service Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3 text-center">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-xs text-gray-400">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                <Button
                size="sm"
                className="w-full group-hover:bg-brand-blue group-hover:text-white transition-all duration-300"
                icon={<FaArrowRight />}
                iconPosition="right"
                href={service.href}
                ariaLabel={`Learn more about ${service.title}`}
              >
                Learn More
              </Button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-indigo/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution that drives results. Our expert team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="btn btn-primary text-white font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300"
              icon={<FaArrowRight />}
              iconPosition="right"
              href="/contact-us"
              ariaLabel="Get a free consultation for your software development project"
            >
              Get Free Consultation
            </Button>
            {/* <Button
              size="lg"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
              href="/portfolio"
              ariaLabel="View our portfolio of completed projects"
            >
              View Our Portfolio
            </Button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


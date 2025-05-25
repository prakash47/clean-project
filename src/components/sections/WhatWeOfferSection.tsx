'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function WhatWeOfferSection() {
  const [hoveredStates, setHoveredStates] = useState<boolean[]>(new Array(12).fill(false));

  const services = [
    {
      title: 'Business Websites',
      description: 'Launch professional, SEO-optimized websites that elevate your brand and convert visitors into loyal customers.',
      className: 'business-website-icon',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" className="business-website-icon" role="img" aria-label="Icon representing Business Websites">
          <rect x="5" y="5" width="40" height="30" rx="5" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <rect x="10" y="10" width="30" height="20" fill="#0F172A" rx="3" />
          <circle cx="25" cy="40" r="5" fill="#14B8A6" />
        </svg>
      ),
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Develop secure, scalable e-commerce platforms with seamless payment integration to boost sales.',
      className: 'ecommerce-icon',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" className="ecommerce-icon" role="img" aria-label="Icon representing E-Commerce Solutions">
          <rect x="5" y="5" width="40" height="30" rx="5" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <path d="M15,30 Q25,35 35,30" fill="none" stroke="#14B8A6" strokeWidth="2" />
          <rect x="10" y="10" width="15" height="20" fill="#0F172A" rx="3" />
          <circle cx="35" cy="15" r="5" fill="#0F172A" />
        </svg>
      ),
    },
    {
      title: 'Custom Web Apps',
      description: 'Build tailored web applications, from booking systems to dashboards, to meet your unique business needs.',
      className: 'web-app-icon',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" className="web-app-icon" role="img" aria-label="Icon representing Custom Web Apps">
          <rect x="5" y="5" width="40" height="40" rx="5" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <rect x="10" y="10" width="30" height="30" fill="#0F172A" rx="3" />
          <path d="M25,15 L35,25 L25,35" fill="none" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'CMS Integration',
      description: 'Effortlessly manage content with WordPress, Shopify, or custom CMS solutions for flexibility and scalability.',
      className: 'cms-icon',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" className="cms-icon" role="img" aria-label="Icon representing CMS Integration">
          <rect x="5" y="5" width="40" height="40" rx="5" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <rect x="10" y="10" width="30" height="30" fill="#0F172A" rx="3" />
          <path d="M15,25 H35 M25,15 V35" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Landing Pages',
      description: 'Create high-converting landing pages for marketing campaigns, optimized for lead generation and SEO.',
      className: 'landing-page-icon',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" className="landing-page-icon" role="img" aria-label="Icon representing Landing Pages">
          <rect x="5" y="5" width="40" height="40" rx="5" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <path d="M25,10 L40,30 L10,30 Z" fill="#0F172A" />
          <rect x="15" y="30" width="20" height="10" fill="#14B8A6" rx="3" />
        </svg>
      ),
    },
    {
      title: 'Progressive Web Apps (PWAs)',
      description: 'Develop fast, reliable PWAs that deliver app-like experiences on mobile and desktop with offline capabilities.',
      className: 'pwa-icon',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" className="pwa-icon" role="img" aria-label="Icon representing Progressive Web Apps">
          <rect x="5" y="5" width="40" height="40" rx="5" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <rect x="15" y="10" width="20" height="30" fill="#0F172A" rx="3" />
          <path d="M25,15 L35,25 L25,35" fill="none" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Web Accessibility Solutions',
      description: 'Ensure WCAG compliance with accessible web designs that cater to all users, enhancing inclusivity.',
      className: 'accessibility-icon',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" className="accessibility-icon" role="img" aria-label="Icon representing Web Accessibility Solutions">
          <circle cx="25" cy="25" r="20" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <circle cx="25" cy="15" r="5" fill="#0F172A" />
          <path d="M15,30 Q25,20 35,30" fill="none" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'SEO-Optimized Web Development',
      description: 'Boost search rankings with websites built for SEO, including fast load times and on-page optimization.',
      className: 'seo-icon',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" className="seo-icon" role="img" aria-label="Icon representing SEO-Optimized Web Development">
          <rect x="5" y="5" width="40" height="40" rx="5" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <circle cx="25" cy="25" r="10" fill="#0F172A" />
          <path d="M27,27 L33,33" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Web Maintenance & Support',
      description: 'Keep your website secure and updated with ongoing maintenance, support, and performance monitoring.',
      className: 'maintenance-icon',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" className="maintenance-icon" role="img" aria-label="Icon representing Web Maintenance and Support">
          <rect x="5" y="5" width="40" height="40" rx="5" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <path d="M15,35 L25,25 L35,35" fill="none" stroke="#14B8A6" strokeWidth="2" />
          <circle cx="25" cy="15" r="5" fill="#0F172A" />
        </svg>
      ),
    },
    {
      title: 'API Integration & Development',
      description: 'Seamlessly connect your website with third-party APIs for enhanced functionality and data integration.',
      className: 'api-icon',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" className="api-icon" role="img" aria-label="Icon representing API Integration and Development">
          <rect x="5" y="5" width="40" height="40" rx="5" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <circle cx="15" cy="15" r="5" fill="#0F172A" />
          <circle cx="35" cy="35" r="5" fill="#0F172A" />
          <path d="M15,15 L35,35" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Single Page Applications (SPAs)',
      description: 'Deliver seamless, app-like experiences with fast, responsive SPAs using modern frameworks like React.',
      className: 'spa-icon',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" className="spa-icon" role="img" aria-label="Icon representing Single Page Applications">
          <rect x="5" y="5" width="40" height="40" rx="5" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <rect x="10" y="10" width="30" height="30" fill="#0F172A" rx="3" />
          <path d="M25,15 L35,25 L25,35 L15,25 Z" fill="none" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Web Performance Optimization',
      description: 'Enhance site speed and Core Web Vitals with advanced optimization techniques for better user experiences.',
      className: 'performance-icon',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" className="performance-icon" role="img" aria-label="Icon representing Web Performance Optimization">
          <circle cx="25" cy="25" r="20" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <path d="M25,25 L25,15 A10,10 0 0,1 35,25" fill="none" stroke="#14B8A6" strokeWidth="2" />
          <circle cx="25" cy="25" r="5" fill="#0F172A" />
        </svg>
      ),
    },
  ];

  const handleMouseEnter = (index: number) => {
    const icon = document.querySelectorAll('.service-icon')[index];
    const card = document.querySelectorAll('.service-card')[index];

    // Kill any existing animations to prevent overlap
    gsap.killTweensOf(icon);
    gsap.killTweensOf(card);

    // Icon animation
    gsap.to(icon, {
      scale: 1.2,
      boxShadow: '0 0 15px rgba(20, 184, 166, 0.7)',
      duration: 0.3,
      ease: 'power2.out',
    });

    // Card animation
    gsap.to(card, {
      y: -10,
      backgroundColor: '#1A2526',
      border: '1px solid #14B8A6',
      duration: 0.3,
      ease: 'power2.out',
    });

    // Update hovered state
    setHoveredStates((prev) => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    });
  };

  const handleMouseLeave = (index: number) => {
    const icon = document.querySelectorAll('.service-icon')[index];
    const card = document.querySelectorAll('.service-card')[index];

    // Kill any existing animations to prevent overlap
    gsap.killTweensOf(icon);
    gsap.killTweensOf(card);

    // Reverse icon animation
    gsap.to(icon, {
      scale: 1,
      boxShadow: 'none',
      duration: 0.3,
      ease: 'power2.out',
    });

    // Reverse card animation
    gsap.to(card, {
      y: 0,
      backgroundColor: '#0F172A',
      border: 'none',
      duration: 0.3,
      ease: 'power2.out',
    });

    // Update hovered state
    setHoveredStates((prev) => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });
  };

  const handleFocus = (index: number) => {
    handleMouseEnter(index);
  };

  const handleBlur = (index: number) => {
    handleMouseLeave(index);
  };

  // Structured data for services
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'Service',
      position: index + 1,
      name: service.title,
      description: service.description,
      provider: {
        '@type': 'Organization',
        name: 'Intention Infoservice',
        url: 'https://intentioninfoservice.com',
      },
    })),
  };

  return (
    <section className="bg-gradient-to-b from-dark-900 to-dark-950 py-16 md:py-24 relative overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="w-full px-[10%] relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Explore Our Full Range of Web Design & Development Services
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Comprehensive Solutions for Every Digital Need
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            From business websites to advanced web applications, we offer a full spectrum of web design and development services to help you succeed in 2025’s digital landscape.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card bg-dark-950 rounded-lg p-6 flex items-start gap-6 transition-all duration-300 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onFocus={() => handleFocus(index)}
              onBlur={() => handleBlur(index)}
              tabIndex={0}
            >
              <div className={`service-icon ${service.className}`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-lg text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            variant="primary"
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold shadow-lg hover:shadow-teal-500/40"
            icon={<FaArrowRight />}
            iconPosition="right"
            href="/contact-us"
          >
            Discover How We Can Help – Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
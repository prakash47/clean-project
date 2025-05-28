'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaTools, FaPaintBrush, FaBullhorn, FaNetworkWired, FaArrowRight } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import { gsap } from 'gsap';

export default function ServicesSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Ensure elements exist before applying animations
    const serviceCards = document.querySelectorAll('.service-card');

    // Debugging: Log elements to confirm they are found
    console.log('Service Cards:', serviceCards);

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
      description: 'Custom Web Design & Development Services - Build stunning, responsive websites optimized for performance, SEO, and user experience to grow your online presence.',
      href: '/services/web-design-development',
    },
    {
      icon: <FaMobileAlt className="text-4xl text-brand-blue" />,
      title: 'Mobile App Development Services',
      description: 'Top Mobile App Development Solutions - Create intuitive iOS and Android apps with seamless user experiences to engage your audience on the go.',
      href: '/services/mobile-app-development',
    },
    {
      icon: <FaTools className="text-4xl text-brand-blue" />,
      title: 'Website Maintenance Services',
      description: 'Reliable Website Maintenance Services - Ensure your site stays secure, updated, and running smoothly with our expert maintenance solutions.',
      href: '/services/website-maintenance',
    },
    {
      icon: <FaPaintBrush className="text-4xl text-brand-blue" />,
      title: 'UI/UX Design & Branding',
      description: 'Professional UI/UX Design & Branding - Elevate your brand with memorable designs and user-focused interfaces that captivate and convert.',
      href: '/services/ui-ux-design-branding',
    },
    {
      icon: <FaBullhorn className="text-4xl text-brand-blue" />,
      title: 'Digital Marketing Services',
      description: 'Effective Digital Marketing Solutions for Businesses - Boost engagement and growth with strategic campaigns, SEO, and social media marketing.',
      href: '/services/digital-marketing',
    },
    {
      icon: <FaNetworkWired className="text-4xl text-brand-blue" />,
      title: 'Custom Business Solutions',
      description: 'Tailored Custom Business Solutions - Optimize your operations with bespoke software designed to meet your unique business needs.',
      href: '/services/custom-business-solutions',
    },
  ];

  return (
    <section className="relative bg-dark-950 pt-0 pb-16">
      <div className="container mx-auto w-full px-[10%]">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <p className="text-gray-400 text-center mb-8">
          Discover how we can elevate your business with our expert services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card bg-dark-900 p-6 rounded-lg shadow-lg hover:shadow-brand-blue/40 transition-shadow duration-300 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">{service.title}</h3>
              <p className="text-gray-400 text-center mb-4">{service.description}</p>
              <Button
                size="sm"
                icon={<FaArrowRight />}
                iconPosition="right"
                href={service.href}
              >
                Know More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'Web Design & Development Services',
      description: 'Custom Web Design & Development Services – Build stunning, responsive websites optimized for performance, SEO, and user experience to grow your online presence.',
      className: 'web-laptop',
      link: '/services/web-design-development',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="web-laptop-icon">
          <rect x="0" y="0" width="40" height="25" rx="3" fill="#14B8A6" />
          <rect x="3" y="3" width="34" height="19" fill="#0F172A" />
          <rect x="3" y="8" width="34" height="14" fill="#1A2526" />
          <rect x="5" y="10" width="15" height="10" fill="#0F172A" />
          <rect x="22" y="10" width="12" height="10" fill="#0F172A" />
          <rect x="0" y="25" width="40" height="5" rx="1" fill="#14B8A6" />
        </svg>
      ),
    },
    {
      title: 'Mobile App Development Solutions',
      description: 'Top Mobile App Development Solutions – Create intuitive iOS and Android apps with seamless user experiences to engage your audience on the go.',
      className: 'mobile-phone',
      link: '/services/mobile-app-development',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="mobile-phone-icon">
          <rect x="0" y="0" width="20" height="35" rx="3" fill="#14B8A6" />
          <rect x="3" y="3" width="14" height="29" fill="#0F172A" />
          <rect x="5" y="8" width="10" height="5" rx="1" fill="#00CED1" />
          <rect x="5" y="15" width="10" height="5" rx="1" fill="#00CED1" />
          <circle cx="17" cy="32" r="3" fill="#00CED1" />
        </svg>
      ),
    },
    {
      title: 'Website Maintenance Services',
      description: 'Reliable Website Maintenance Services – Ensure your site stays secure, updated, and running smoothly with our expert maintenance solutions.',
      className: 'maintenance-gear',
      link: '/services/website-maintenance',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="maintenance-gear-icon">
          <path d="M0,0 L5,-5 L10,0 L5,5 Z" fill="#14B8A6" transform="translate(20, 20) rotate(0)" />
          <path d="M0,0 L5,-5 L10,0 L5,5 Z" fill="#14B8A6" transform="translate(20, 20) rotate(45)" />
          <path d="M0,0 L5,-5 L10,0 L5,5 Z" fill="#14B8A6" transform="translate(20, 20) rotate(90)" />
          <path d="M0,0 L5,-5 L10,0 L5,5 Z" fill="#14B8A6" transform="translate(20, 20) rotate(135)" />
          <circle cx="20" cy="20" r="5" fill="#0F172A" />
        </svg>
      ),
    },
    {
      title: 'UI/UX Design & Branding',
      description: 'Professional UI/UX Design & Branding – Elevate your brand with memorable designs and user-focused interfaces that captivate and convert.',
      className: 'uiux-brush',
      link: '/services/ui-ux-design-branding',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="uiux-brush-icon">
          <rect x="0" y="0" width="5" height="20" rx="1" fill="#FF69B4" transform="translate(10, 10) rotate(-45)" />
          <path d="M0,0 Q10,5 20,0" fill="none" stroke="#FF69B4" strokeWidth="1" transform="translate(25, 5)" />
        </svg>
      ),
    },
    {
      title: 'Digital Marketing Solutions',
      description: 'Effective Digital Marketing Solutions for Businesses – Boost engagement and growth with strategic campaigns, SEO, and social media marketing.',
      className: 'marketing-graph',
      link: '/services/digital-marketing',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="marketing-graph-icon">
          <polyline
            points="0,25 10,15 20,25 30,5 40,15"
            fill="none"
            stroke="#10B981"
            strokeWidth="1"
          />
          <circle cx="30" cy="5" r="3" fill="#10B981" />
          <circle cx="40" cy="15" r="3" fill="#10B981" />
        </svg>
      ),
    },
    {
      title: 'Custom Business Solutions',
      description: 'Tailored Custom Business Solutions – Optimize your operations with bespoke software designed to meet your unique business needs.',
      className: 'business-cube',
      link: '/services/custom-business-solutions',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="business-cube-icon">
          <rect x="0" y="0" width="20" height="20" fill="#14B8A6" transform="translate(10, 10) rotate(45)" />
          <rect x="3" y="3" width="14" height="14" fill="#0F172A" transform="translate(10, 10) rotate(45)" />
          <text x="17" y="23" fill="#14B8A6" fontSize="5" fontFamily="monospace">101</text>
        </svg>
      ),
    },
  ];

  useEffect(() => {
    // Hover animations for icons
    gsap.utils.toArray('.service-icon').forEach((icon, index) => {
      gsap.to(icon, {
        scale: 1.2,
        boxShadow: '0 0 10px rgba(20, 184, 166, 0.5)',
        duration: 0.3,
        paused: true,
        ease: 'power2.out',
        onStart: () => setHoveredIndex(index),
        onReverseComplete: () => setHoveredIndex(null),
      });
    });
  }, []);

  const handleInteraction = (index: number) => {
    if (window.innerWidth >= 768) {
      const icon = document.querySelectorAll('.service-icon')[index];
      const animation = gsap.getTweensOf(icon)[0];
      // Guard clause to prevent calling methods on undefined animation
      if (animation) {
        if (hoveredIndex === index) {
          animation.reverse();
        } else {
          animation.play();
        }
      }
    } else {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  return (
    <section className="bg-gradient-to-b from-dark-950 to-dark-800 mb-4 md:py-8 relative overflow-hidden">
      {/* Starry Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_70%)] opacity-30 pointer-events-none" />
      <div className="w-full px-[10%] relative z-10">
        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Web Development, Mobile App Development, Digital Marketing, Custom Business Solutions",
              "provider": {
                "@type": "Organization",
                "name": "Intention Infoservice",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 Digital Avenue",
                  "addressLocality": "Tech City",
                  "postalCode": "TC 12345"
                }
              },
              "description": "Intention Infoservice offers custom web design, mobile app development, digital marketing, and tailored business solutions to help businesses grow globally."
            }
          `}
        </script>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Discover how we can elevate your business with our expert services.
          </p>
        </div>
        {/* Desktop: Two-Column Grid of Services */}
        <div className="hidden md:grid grid-cols-2 gap-x-6 gap-y-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="flex items-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => handleInteraction(index)}
              onMouseLeave={() => handleInteraction(index)}
            >
              <div className={`service-icon ${service.className}-icon transition-all duration-300 ${hoveredIndex === index ? 'scale-110 shadow-[0_0_10px_rgba(20,184,166,0.5)]' : ''}`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-base text-gray-400">{service.description}</p>
                <Link href={service.link}>
                  <button className="mt-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-2 px-4 rounded flex items-center gap-2">
                    Learn More <FaArrowRight />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Mobile: Stacked Layout with Click-to-Expand */}
        <div className="md:hidden space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="flex items-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleInteraction(index)}
            >
              <div className={`service-icon ${service.className}-icon transition-all duration-300 ${expandedIndex === index ? 'scale-110 shadow-[0_0_10px_rgba(20,184,166,0.5)]' : ''}`}>
                {service.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p
                  className={`text-sm text-gray-400 transition-all duration-300 ${
                    expandedIndex === index ? 'opacity-100 h-auto' : 'opacity-0 h-0'
                  }`}
                >
                  {service.description}
                </p>
                <div className={`flex justify-start ${expandedIndex === index ? 'opacity-100 h-auto' : 'opacity-0 h-0'} transition-all duration-300`}>
                  <Link href={service.link}>
                    <button className="mt-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-2 px-4 rounded flex items-center gap-2">
                      Learn More <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function WhatWeOfferSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'Business Websites',
      description: 'Create professional, SEO-optimized websites that showcase your brand and convert visitors. Perfect for startups, SMEs, and enterprises.',
      className: 'business-website-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="business-website-icon">
          <rect x="0" y="0" width="40" height="30" rx="3" fill="#14B8A6" />
          <rect x="5" y="5" width="30" height="20" fill="#0F172A" />
          <rect x="7" y="7" width="26" height="16" fill="#1A2526" />
        </svg>
      ),
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Build secure, scalable e-commerce platforms with seamless payment integration and user-friendly navigation. Boost sales with performance-optimized stores.',
      className: 'ecommerce-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="ecommerce-icon">
          <rect x="0" y="0" width="40" height="30" rx="3" fill="#14B8A6" />
          <path d="M10,25 Q20,30 30,25" fill="none" stroke="#0F172A" strokeWidth="2" />
          <circle cx="15" cy="15" r="3" fill="#0F172A" />
          <circle cx="25" cy="15" r="3" fill="#0F172A" />
        </svg>
      ),
    },
    {
      title: 'Custom Web Apps',
      description: 'Develop powerful, custom web applications tailored to your business needs, from booking systems to interactive dashboards.',
      className: 'web-app-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="web-app-icon">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#14B8A6" />
          <rect x="5" y="5" width="30" height="30" fill="#0F172A" />
          <rect x="10" y="10" width="20" height="20" fill="#1A2526" />
        </svg>
      ),
    },
    {
      title: 'CMS Integration',
      description: 'Manage content effortlessly with WordPress, Shopify, or custom CMS solutions. We ensure flexibility and scalability.',
      className: 'cms-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="cms-icon">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M10,20 H30 M20,10 V30" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
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
    const icon = document.querySelectorAll('.service-icon')[index];
    const animation = gsap.getTweensOf(icon)[0];
    if (animation) {
      if (hoveredIndex === index) {
        animation.reverse();
      } else {
        animation.play();
      }
    }
  };

  return (
    <section className="bg-dark-900 py-16 md:py-24 relative overflow-hidden">
      <div className="w-full px-[10%] relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Comprehensive Web Design & Development Services
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From business websites to e-commerce platforms, we deliver solutions tailored to your goals.
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our web design and development services combine creativity, technology, and strategy to deliver websites that rank high and perform flawlessly. Whether you need a responsive business website or a custom e-commerce platform, we’ve got you covered.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
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
              <div className={`service-icon ${service.className} transition-all duration-300 ${hoveredIndex === index ? 'scale-110 shadow-[0_0_10px_rgba(20,184,166,0.5)]' : ''}`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-base text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
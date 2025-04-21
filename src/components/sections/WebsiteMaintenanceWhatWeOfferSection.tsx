'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function WebsiteMaintenanceWhatWeOfferSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'Regular Updates',
      description: 'Keep your website up-to-date with the latest software, plugins, and content updates.',
      className: 'updates-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="updates-icon">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M20,10 L20,20 L30,20" stroke="#0F172A" strokeWidth="2" />
          <path d="M20,10 A10,10 0 0,1 30,20" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Security Monitoring',
      description: 'Protect your site from threats with proactive monitoring, backups, and malware removal.',
      className: 'security-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="security-icon">
          <path d="M20,10 Q20,5 15,5 Q10,5 10,10 V30 Q10,35 20,40 Q30,35 30,30 V10 Q30,5 25,5 Q20,5 20,10 Z" fill="#14B8A6" />
          <path d="M15,25 L20,30 L30,15" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Performance Optimization',
      description: 'Ensure fast load times and optimal performance with regular optimization.',
      className: 'performance-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="performance-icon">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M20,20 L20,10 A10,10 0 0,1 30,20" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'SEO Maintenance',
      description: 'Maintain and improve your search rankings with ongoing SEO updates and audits.',
      className: 'seo-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="seo-icon">
          <rect x="0" y="0" width="40" height="30" rx="3" fill="#14B8A6" />
          <path d="M10,25 L15,20 L30,20" fill="none" stroke="#0F172A" strokeWidth="2" />
          <circle cx="15" cy="15" r="3" fill="#0F172A" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Hover animations for icons
    const serviceIcons = gsap.utils.toArray('.service-icon') as HTMLElement[];
    serviceIcons.forEach((icon, index) => {
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
            Comprehensive Website Maintenance Solutions
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We provide end-to-end maintenance to keep your website secure and high-performing.
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our website maintenance services are designed to keep your site secure, fast, and competitive. Whether you run a business website, e-commerce platform, or web app, we provide tailored solutions to meet your needs.
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
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function UIUXDesignBrandingWhatWeOfferSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'UI/UX Design',
      description: 'Design intuitive, visually stunning interfaces that enhance user experience and engagement.',
      className: 'uiux-design-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="uiux-design-icon">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#14B8A6" />
          <path d="M10,30 Q20,10 30,30" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Brand Identity Development',
      description: 'Craft a cohesive brand identity with logos, typography, and color schemes that reflect your vision.',
      className: 'branding-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="branding-icon">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <text x="10" y="25" fill="#0F172A" fontSize="12" fontFamily="monospace">Logo</text>
        </svg>
      ),
    },
    {
      title: 'Prototyping & Wireframing',
      description: 'Visualize your ideas with interactive prototypes and detailed wireframes.',
      className: 'prototyping-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="prototyping-icon">
          <rect x="0" y="0" width="40" height="30" rx="3" fill="none" stroke="#14B8A6" strokeWidth="2" strokeDasharray="5,5" />
          <rect x="5" y="5" width="30" height="20" fill="none" stroke="#14B8A6" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
      ),
    },
    {
      title: 'User Research & Testing',
      description: 'Understand your audience with in-depth research and usability testing to ensure optimal design.',
      className: 'research-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="research-icon">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M15,25 L25,15 M15,15 L25,25" stroke="#0F172A" strokeWidth="2" />
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
            Comprehensive UI/UX Design & Branding Services
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From startups to enterprises, we create designs and brands that resonate.
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our UI/UX design and branding services combine creativity, strategy, and user insights to deliver experiences that captivate and convert. Whether you need a stunning interface or a memorable brand, we bring your vision to life.
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
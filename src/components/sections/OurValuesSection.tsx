'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function OurValuesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const values = [
    {
      title: 'Innovation',
      description: 'We push the boundaries of what’s possible, delivering cutting-edge solutions.',
      className: 'innovation-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="innovation-icon">
          <path d="M20,0 L30,10 L20,20 L10,10 Z" fill="#14B8A6" />
          <circle cx="20" cy="20" r="5" fill="#0F172A" />
        </svg>
      ),
    },
    {
      title: 'Quality',
      description: 'We deliver excellence in every project, ensuring the highest standards.',
      className: 'quality-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="quality-icon">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#14B8A6" />
          <path d="M10,20 L15,25 L30,10" fill="none" stroke="#0F172A" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: 'Customer Focus',
      description: 'Our clients are at the heart of everything we do, ensuring their success.',
      className: 'customer-focus-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="customer-focus-icon">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M15,25 Q20,30 25,25" fill="none" stroke="#0F172A" strokeWidth="3" />
          <circle cx="15" cy="15" r="3" fill="#0F172A" />
          <circle cx="25" cy="15" r="3" fill="#0F172A" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    // Hover animations for value icons
    gsap.utils.toArray('.value-icon').forEach((icon, index) => {
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
    const icon = document.querySelectorAll('.value-icon')[index];
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
    <section className="bg-gradient-to-b from-dark-950 to-dark-800 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_70%)] opacity-30 pointer-events-none" />
      <div className="w-full px-[10%] relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Values
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The principles that guide us in delivering exceptional digital solutions.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => handleInteraction(index)}
              onMouseLeave={() => handleInteraction(index)}
            >
              <div className={`value-icon ${value.className} transition-all duration-300 ${hoveredIndex === index ? 'scale-110 shadow-[0_0_10px_rgba(20,184,166,0.5)]' : ''}`}>
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">{value.title}</h3>
              <p className="text-base text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
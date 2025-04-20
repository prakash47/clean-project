'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function MobileAppWhatWeOfferSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'iOS App Development',
      description: 'Craft native iOS apps with Swift and SwiftUI, optimized for performance and App Store success.',
      className: 'ios-app-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="ios-app-icon">
          <rect x="0" y="0" width="20" height="35" rx="3" fill="#14B8A6" transform="translate(10, 2.5)" />
          <rect x="3" y="3" width="14" height="29" fill="#0F172A" transform="translate(10, 2.5)" />
          <path d="M10,25 L15,20 L20,25" fill="none" stroke="#14B8A6" strokeWidth="2" transform="translate(10, 2.5)" />
        </svg>
      ),
    },
    {
      title: 'Android App Development',
      description: 'Develop native Android apps with Kotlin and Java, ensuring compatibility across devices.',
      className: 'android-app-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="android-app-icon">
          <rect x="0" y="0" width="20" height="35" rx="3" fill="#14B8A6" transform="translate(10, 2.5)" />
          <rect x="3" y="3" width="14" height="29" fill="#0F172A" transform="translate(10, 2.5)" />
          <circle cx="10" cy="15" r="3" fill="#14B8A6" transform="translate(10, 2.5)" />
        </svg>
      ),
    },
    {
      title: 'Cross-Platform Apps',
      description: 'Save time and costs with cross-platform development using Flutter and React Native.',
      className: 'cross-platform-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="cross-platform-icon">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M10,20 H30 M20,10 V30" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Enterprise Mobile Apps',
      description: 'Build secure, scalable apps for internal business operations and employee productivity.',
      className: 'enterprise-app-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="enterprise-app-icon">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#14B8A6" />
          <rect x="5" y="5" width="30" height="30" fill="#0F172A" />
          <rect x="10" y="10" width="20" height="20" fill="#1A2526" />
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
            Comprehensive Mobile App Development Solutions
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From startups to enterprises, we create apps that meet your unique needs.
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our mobile app development services combine cutting-edge technology, user-centric design, and performance optimization to deliver apps that engage users and grow your business. Whether you need an iOS, Android, or cross-platform app, we’ve got the expertise to make it happen.
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
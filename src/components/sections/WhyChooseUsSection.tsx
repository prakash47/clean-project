'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function WhyChooseUsSection() {
  const [hoveredStates, setHoveredStates] = useState<boolean[]>(new Array(6).fill(false));

  const reasons = [
    {
      title: 'Expert Team & Innovation',
      description: 'Our skilled team leverages cutting-edge technology to deliver innovative web solutions.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Expert Team and Innovation">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <path d="M20,30 Q30,20 40,30 M20,30 Q30,40 40,30" fill="none" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Mobile-First Design',
      description: 'We prioritize mobile-first design to ensure seamless experiences across all devices.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Mobile-First Design">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <rect x="20" y="15" width="20" height="30" rx="3" fill="#0F172A" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'SEO & Performance-Driven',
      description: 'Our SEO expertise and performance optimization boost your site’s visibility and speed.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing SEO and Performance-Driven">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <circle cx="30" cy="30" r="10" fill="#0F172A" />
          <path d="M32,32 L40,40" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Custom & Scalable Solutions',
      description: 'We build tailored websites that scale with your business, from startups to enterprises.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Custom and Scalable Solutions">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#14B8A6" strokeWidth="2" />
          <path d="M25,25 L35,35 M25,35 L35,25" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Proven Results & ROI',
      description: 'Our results-driven approach delivers measurable ROI and long-term success.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Proven Results and ROI">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <path d="M20,40 L25,35 L30,40 L35,35 L40,40" fill="none" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Dedicated Support & Maintenance',
      description: 'We provide ongoing support to keep your website secure, updated, and ranking high.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Dedicated Support and Maintenance">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <path d="M30,15 L40,25 L30,35 L20,25 Z" fill="#0F172A" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  const handleMouseEnter = (index: number) => {
    const card = document.querySelectorAll('.reason-card')[index];
    const icon = document.querySelectorAll('.reason-icon')[index];

    // Kill any existing animations to prevent overlap
    gsap.killTweensOf(card);
    gsap.killTweensOf(icon);

    // Card animation
    gsap.to(card, {
      y: -10,
      backgroundColor: '#1A2526',
      shadow: 'xl',
      duration: 0.3,
      ease: 'power2.out',
    });

    // Icon animation
    gsap.to(icon, {
      scale: 1.2,
      boxShadow: '0 0 15px rgba(20, 184, 166, 0.7)',
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
    const card = document.querySelectorAll('.reason-card')[index];
    const icon = document.querySelectorAll('.reason-icon')[index];

    // Kill any existing animations to prevent overlap
    gsap.killTweensOf(card);
    gsap.killTweensOf(icon);

    // Reverse card animation
    gsap.to(card, {
      y: 0,
      backgroundColor: '#0F172A',
      shadow: 'lg',
      duration: 0.3,
      ease: 'power2.out',
    });

    // Reverse icon animation
    gsap.to(icon, {
      scale: 1,
      boxShadow: 'none',
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

  // Structured data for the benefits
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Design and Development',
    provider: {
      '@type': 'Organization',
      name: 'Intention Infoservice',
      url: 'https://intentioninfoservice.com',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Reasons to Choose Us',
      itemListElement: reasons.map((reason, index) => ({
        '@type': 'Offer',
        position: index + 1,
        name: reason.title,
        description: reason.description,
      })),
    },
  };

  return (
    <section id="why-choose-us" className="bg-gradient-to-b from-dark-900 to-dark-950 py-16 md:py-24 relative overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Subtle Grain Texture with Animation */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
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
            Why Choose Intention Infoservice for Web Design & Development?
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your Trusted Partner for Digital Success in 2025
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Discover why businesses trust us to deliver innovative, high-performing websites that drive measurable results.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="reason-card bg-dark-950 rounded-lg p-6 shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onFocus={() => handleFocus(index)}
              onBlur={() => handleBlur(index)}
              tabIndex={0}
              aria-describedby={`reason-description-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="reason-icon w-14 h-14 flex items-center justify-center">{reason.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{reason.title}</h3>
                  <p id={`reason-description-${index}`} className="text-lg text-gray-400">{reason.description}</p>
                </div>
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
            Ready to Start Your Project? Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
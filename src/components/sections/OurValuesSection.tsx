'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function OurValuesSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Hover animations for value cards
    const valueCards = gsap.utils.toArray('.value-card') as HTMLElement[];
    if (valueCards.length > 0) {
      valueCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: index * 0.2, ease: 'power2.out' }
        );
        // Hover effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            boxShadow: '0 0 15px rgba(0, 160, 227, 0.5)',
            duration: 0.3,
          });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: '0 0 0 rgba(0, 160, 227, 0)',
            duration: 0.3,
          });
        });
      });
    }
  }, []);

  const values = [
    {
      title: 'Innovation',
      description: 'We drive innovation to deliver cutting-edge web design and mobile app solutions, adapting to the latest trends in 2025.',
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="text-brand-blue"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M24 4a20 20 0 1 0 0 40 20 20 0 0 0 0-40zm0 36a16 16 0 1 1 0-32 16 16 0 0 1 0 32z" />
          <path d="M24 12v12h12" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Collaboration',
      description: 'We believe in collaborating closely with clients to achieve shared goals through effective digital marketing strategies.',
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="text-brand-blue"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M24 4l6 12h12l-9 9 3 12-9-6-9 6 3-12-9-9h12z" />
        </svg>
      ),
    },
    {
      title: 'Excellence',
      description: 'We are committed to excellence, ensuring every project reflects our dedication to quality and client satisfaction.',
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="text-brand-blue"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M24 4v40m-20-20h40" />
          <circle cx="24" cy="24" r="8" />
        </svg>
      ),
    },
  ];

  // Structured data for values
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Intention Infoservice',
    'url': 'https://intentioninfoservice.com/about-us',
    'values': values.map((value) => ({
      '@type': 'Thing',
      'name': value.title,
      'description': value.description,
    })),
  };

  return (
    <section className="container mx-auto px-4 md:px-[10%] py-12">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our Core Values
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="value-card bg-dark-900 rounded-lg p-6 shadow-lg text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="h-16 flex items-center justify-center mb-4">
              {value.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
            <p className="text-gray-400">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
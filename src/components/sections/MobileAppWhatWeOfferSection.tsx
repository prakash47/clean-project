'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { KeyboardEvent } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function MobileAppWhatWeOfferSection() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cards = document.querySelectorAll('.service-card');
    const icons = document.querySelectorAll('.service-icon');

    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.what-we-offer-section',
            start: 'top 80%',
          },
        }
      );

      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            boxShadow: '0 10px 20px rgba(0, 160, 227, 0.3)',
            duration: 0.3,
            ease: 'power2.out',
          });
          const icon = card.querySelector('.service-icon');
          if (icon) {
            gsap.to(icon, {
              scale: 1.2,
              filter: 'drop-shadow(0 0 8px rgba(0, 160, 227, 0.7))',
              duration: 0.3,
              ease: 'power2.out',
            });
          }
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            duration: 0.3,
            ease: 'power2.out',
          });
          const icon = card.querySelector('.service-icon');
          if (icon) {
            gsap.to(icon, {
              scale: 1,
              filter: 'drop-shadow(0 0 0 rgba(0, 0, 0, 0))',
              duration: 0.3,
              ease: 'power2.out',
            });
          }
        });
      });
    }

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Custom Mobile App Development',
        description: 'We create tailored mobile apps to meet your business needs, ensuring a seamless user experience.',
        provider: {
          '@type': 'Organization',
          name: 'Intention Infoservice',
        },
      },
      {
        '@type': 'Service',
        name: 'Cross-Platform App Development',
        description: 'Develop apps that work seamlessly on both iOS and Android using modern frameworks.',
        provider: {
          '@type': 'Organization',
          name: 'Intention Infoservice',
        },
      },
      {
        '@type': 'Service',
        name: 'iOS App Development',
        description: 'Build sleek, high-performance iOS apps with Swift and SwiftUI for seamless user experiences.',
        provider: {
          '@type': 'Organization',
          name: 'Intention Infoservice',
        },
      },
      {
        '@type': 'Service',
        name: 'Android App Development',
        description: 'Create robust Android apps with Kotlin and Jetpack Compose for maximum compatibility.',
        provider: {
          '@type': 'Organization',
          name: 'Intention Infoservice',
        },
      },
      {
        '@type': 'Service',
        name: 'AI-Powered Mobile Apps',
        description: 'Integrate AI features like personalization, chatbots, and predictive analytics into your mobile apps.',
        provider: {
          '@type': 'Organization',
          name: 'Intention Infoservice',
        },
      },
      {
        '@type': 'Service',
        name: '5G Optimized Mobile Apps',
        description: 'Optimize your mobile apps for 5G networks to deliver low-latency, high-speed performance.',
        provider: {
          '@type': 'Organization',
          name: 'Intention Infoservice',
        },
      },
    ],
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      window.location.href = '/contact-us';
    }
  };

  return (
    <section className="what-we-offer-section bg-dark-900 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="w-full px-[10%]">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight"
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.1)',
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What We Offer in Mobile App Development
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Custom Mobile App Development */}
          <div
            className="service-card bg-dark-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-label="Learn more about custom mobile app development services"
          >
            <svg
              className="service-icon w-12 h-12 mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00a0e3"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" fill="rgba(0, 160, 227, 0.1)" />
              <path d="M8 8l2-2 6 6-2 2-6-6zm8 8l-2-2-6 6 2 2 6-6z" />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">Custom Mobile App Development</h3>
            <p className="text-gray-400 mb-4">
              We create tailored mobile apps to meet your business needs, ensuring a seamless user experience.
            </p>
            <p className="text-brand-blue font-semibold">Boost engagement by 40%</p>
          </div>
          {/* Cross-Platform App Development */}
          <div
            className="service-card bg-dark-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-label="Learn more about cross-platform app development services"
          >
            <svg
              className="service-icon w-12 h-12 mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#393185"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="2" y="6" width="8" height="12" rx="2" fill="rgba(57, 49, 133, 0.1)" />
              <rect x="14" y="6" width="8" height="12" rx="2" fill="rgba(57, 49, 133, 0.1)" />
              <path d="M9 10l-3 3 3 3m6-6l3 3-3 3" stroke="#393185" strokeWidth="2" />
              <text x="9" y="14" fontSize="6" fill="#393185">{}</text>
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">Cross-Platform App Development</h3>
            <p className="text-gray-400 mb-4">
              Develop apps that work seamlessly on both iOS and Android using modern frameworks like React Native and Flutter.
            </p>
            <p className="text-brand-indigo font-semibold">Reduce development time by 30%</p>
          </div>
          {/* iOS App Development */}
          <div
            className="service-card bg-dark-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-label="Learn more about iOS app development services"
          >
            <svg
              className="service-icon w-12 h-12 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 294 511.14"
              fill="none"
              stroke="#00a0e3"
              strokeWidth="2"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="iosGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#006d9e', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path
                d="M119.01 86.8c0-5.43 1.55-10.47 4.23-14.76h47.52c2.68 4.26 4.23 9.33 4.23 14.76 0 15.45-12.54 27.98-27.99 27.98s-27.99-12.53-27.99-27.98zM54.87 226.44c-3.84 0-6.96-3.11-6.96-6.96 0-3.83 3.12-6.95 6.96-6.95h184.26c3.84 0 6.96 3.12 6.96 6.95 0 3.85-3.12 6.96-6.96 6.96H54.87zm0 41.04c-3.84 0-6.96-3.11-6.96-6.95 0-3.84 3.12-6.96 6.96-6.96h177.46c3.84 0 6.96 3.12 6.96 6.96s-3.12 6.95-6.96 6.95H54.87zm0 41.05c-3.84 0-6.96-3.12-6.96-6.96s3.12-6.95 6.96-6.95h151.55c3.84 0 6.96 3.11 6.96 6.95 0 3.84-3.12 6.96-6.96 6.96H54.87zm0 82.09c-3.84 0-6.96-3.12-6.96-6.96s3.12-6.96 6.96-6.96h48.41c3.84 0 6.96 3.12 6.96 6.96s-3.12 6.96-6.96 6.96H54.87zm0-41.05c-3.84 0-6.96-3.11-6.96-6.95 0-3.84 3.12-6.96 6.96-6.96h77c3.84 0 6.96 3.12 6.96 6.96s-3.12 6.95-6.96 6.95h-77zM55.22 0h183.57C269.28 0 294 24.76 294 55.23v400.69c0 30.49-24.72 55.22-55.21 55.22H55.22C24.73 511.14 0 486.41 0 455.92V55.16C0 24.6 24.68 0 55.22 0zm-36.2 434.43H274.9V54.7H19.02v379.73zm127.91 17.28c12.49 0 22.7 10.06 22.7 22.7 0 12.51-10.05 22.71-22.7 22.71-12.49 0-22.71-10.05-22.71-22.71 0-12.48 10.06-22.7 22.71-22.7zm33.08-61.55a5.885 5.885 0 0 1 .55 8.3c-2.13 2.44-5.85 2.68-8.29.55l-18.53-16.24c-2.44-2.13-2.68-5.85-.55-8.29l.6-.59 18.48-16.19a5.873 5.873 0 0 1 8.29.55 5.874 5.874 0 0 1-.55 8.29l-13.48 11.81 13.48 11.81zm44.46 8.85a5.883 5.883 0 0 1-8.29-.55c-2.13-2.45-1.89-6.16.55-8.3l13.48-11.81-13.48-11.81a5.874 5.874 0 1 1 7.74-8.84l18.49 16.19.59.59a5.873 5.873 0 0 1-.55 8.29l-18.53 16.24zm-27.17-44.67c.74-3.16 3.91-5.13 7.08-4.4 3.16.74 5.13 3.91 4.4 7.08l-10.59 45.34c-.74 3.16-3.91 5.14-7.07 4.4a5.903 5.903 0 0 1-4.41-7.07l10.59-45.35zm30.48-266.48v5.86c0 5.48-4.48 9.97-9.97 9.97h-10.2c-1.3 5.75-3.39 11.2-6.15 16.23l6.81 6.81c3.87 3.88 3.87 10.22 0 14.1l-8.29 8.29c-3.88 3.88-10.22 3.88-14.1 0l-6.21-6.2a62.015 62.015 0 0 1-16.84 7.28v8.47c0 5.48-4.49 9.97-9.97 9.97h-11.72c-5.49 0-9.97-4.49-9.97-9.97v-8.35a61.932 61.932 0 0 1-17.01-7.24l-6.04 6.04c-3.88 3.88-10.23 3.88-14.1 0l-8.29-8.29c-3.88-3.87-3.88-10.22 0-14.1l6.53-6.52a61.747 61.747 0 0 1-6.31-16.52h-9.77c-5.48 0-9.97-4.49-9.97-9.97V82c0-5.33 4.23-9.71 9.5-9.96h33.38a40.054 40.054 0 0 0-2.41 13.74c0 .69.01 1.39.05 2.08-.04.69-.05 1.38-.05 2.07 0 22.15 17.95 40.11 40.1 40.11 22.15 0 40.1-17.96 40.1-40.11 0-.69-.01-1.38-.05-2.07.04-.69.05-1.39.05-2.08 0-4.83-.85-9.46-2.41-13.74h33.82c5.26.25 9.49 4.63 9.49 9.96v5.86z"
                fill="url(#iosGradient)"
              />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">iOS App Development</h3>
            <p className="text-gray-400 mb-4">
              Build sleek, high-performance iOS apps with Swift and SwiftUI for seamless user experiences.
            </p>
            <p className="text-brand-blue font-semibold">Enhance user retention by 35%</p>
          </div>
          {/* Android App Development */}
          <div
            className="service-card bg-dark-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-label="Learn more about Android app development services"
          >
            <svg
              className="service-icon w-12 h-12 mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#393185"
              strokeWidth="2"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="androidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#393185', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2a2465', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path
                d="M6 5l-2 2v10l2 2h12l2-2V7l-2-2H6zm2 2h8v10H8V7zm1 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H9zm4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2z"
                fill="url(#androidGradient)"
              />
              <line x1="7" y1="2" x2="7" y2="4" stroke="#393185" strokeWidth="2" />
              <line x1="17" y1="2" x2="17" y2="4" stroke="#393185" strokeWidth="2" />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">Android App Development</h3>
            <p className="text-gray-400 mb-4">
              Create robust Android apps with Kotlin and Jetpack Compose for maximum compatibility.
            </p>
            <p className="text-brand-indigo font-semibold">Reach 2.5B+ Android users</p>
          </div>
          {/* AI-Powered Mobile Apps */}
          <div
            className="service-card bg-dark-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-label="Learn more about AI-powered mobile app development"
          >
            <svg
              className="service-icon w-12 h-12 mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00a0e3"
              strokeWidth="2"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#006d9e', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path
                d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-2zm4-4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-2zm-8 0c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1H7z"
                fill="url(#aiGradient)"
              />
              <path d="M8 9l2-2m6 2l-2-2m-6 6l2 2m6-2l-2 2" stroke="#00a0e3" strokeWidth="1" />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Mobile Apps</h3>
            <p className="text-gray-400 mb-4">
              Integrate AI features like personalization, chatbots, and predictive analytics into your mobile apps.
            </p>
            <p className="text-brand-blue font-semibold">Increase conversions by 25%</p>
          </div>
          {/* 5G Optimized Mobile Apps */}
          <div
            className="service-card bg-dark-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-label="Learn more about 5G optimized mobile app development"
          >
            <svg
              className="service-icon w-12 h-12 mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#393185"
              strokeWidth="2"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="towerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#393185', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2a2465', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path
                d="M12 2l-4 8h8l-4-8zm-4 8v10h8V10H8zm-2 10l-2 2h12l-2-2H6z"
                fill="url(#towerGradient)"
              />
              <circle cx="12" cy="2" r="1" fill="#393185" />
              <path d="M9 8a3 3 0 0 0-3 3M15 8a3 3 0 0 1 3 3" stroke="#393185" strokeWidth="2" />
              <text x="9.5" y="17" fontSize="6" fill="#393185">5G</text>
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">5G Optimized Mobile Apps</h3>
            <p className="text-gray-400 mb-4">
              Optimize your mobile apps for 5G networks to deliver low-latency, high-speed performance.
            </p>
            <p className="text-brand-indigo font-semibold">Reduce latency by 30%</p>
          </div>
        </div>
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            variant="primary"
            className="text-white font-semibold"
            icon={<FaArrowRight />}
            iconPosition="right"
            href="/contact-us"
            ariaLabel="Get your free quote today for mobile app development services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.05, 1],
              
              transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            Get Your Free Quote Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
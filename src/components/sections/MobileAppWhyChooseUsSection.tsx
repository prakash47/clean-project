'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { KeyboardEvent } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function MobileAppWhyChooseUsSection() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reasonCards = document.querySelectorAll('.reason-card');
    const reasonIcons = document.querySelectorAll('.reason-icon');

    // Animate cards on scroll
    if (reasonCards.length > 0) {
      gsap.fromTo(
        reasonCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.why-choose-us-section',
            start: 'top 80%',
          },
        }
      );

      // Add hover effects to cards and icons
      reasonCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -5,
            boxShadow: '0 10px 20px rgba(0, 160, 227, 0.3)',
            duration: 0.3,
            ease: 'power2.out',
          });
          const icon = card.querySelector('.reason-icon');
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
          const icon = card.querySelector('.reason-icon');
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
      reasonCards.forEach((card) => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const reasons = [
    {
      title: 'User-Centric Design',
      description: 'We prioritize UX/UI design to create apps that delight and retain users, ensuring a seamless experience.',
      icon: (
        <svg className="reason-icon w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#00a0e3" strokeWidth="2" aria-hidden="true">
          <defs>
            <linearGradient id="userCentricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#006d9e', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" fill="url(#userCentricGradient)" />
          <path d="M12 8a3 3 0 0 0-3 3c0 1.5 1.5 3 3 4s3-1.5 3-4a3 3 0 0 0-3-3z" stroke="#00a0e3" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Cross-Platform Expertise',
      description: 'Our expertise in Flutter and React Native ensures cost-effective, unified app experiences across iOS and Android.',
      icon: (
        <svg className="reason-icon w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#393185" strokeWidth="2" aria-hidden="true">
          <defs>
            <linearGradient id="crossPlatformGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#393185', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#2a2465', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect x="4" y="6" width="8" height="12" rx="2" fill="url(#crossPlatformGradient)" />
          <rect x="12" y="6" width="8" height="12" rx="2" fill="url(#crossPlatformGradient)" />
          <path d="M8 12h8" stroke="#393185" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Performance & Security',
      description: 'We optimize apps for speed and implement robust security measures to protect user data, ensuring trust and reliability.',
      icon: (
        <svg className="reason-icon w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#00a0e3" strokeWidth="2" aria-hidden="true">
          <defs>
            <linearGradient id="performanceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#006d9e', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M12 4v8l4 4-4 4v-8l-4-4 4-4z" fill="url(#performanceGradient)" />
          <circle cx="12" cy="12" r="10" fill="none" stroke="#00a0e3" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'End-to-End Support',
      description: 'From concept to maintenance, we provide comprehensive support to ensure your app’s success in 2025 and beyond.',
      icon: (
        <svg className="reason-icon w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#393185" strokeWidth="2" aria-hidden="true">
          <defs>
            <linearGradient id="supportGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#393185', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#2a2465', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M4 12h16M12 4v16" fill="none" stroke="url(#supportGradient)" strokeWidth="2" />
          <circle cx="12" cy="12" r="10" fill="none" stroke="#393185" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: reasons.map((reason) => ({
      '@type': 'Question',
      name: `Why choose Intention Infoservice for ${reason.title.toLowerCase()} in mobile app development?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: reason.description,
      },
    })),
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      window.location.href = '/contact-us';
    }
  };

  return (
    <section className="why-choose-us-section bg-dark-900 py-16 md:py-24 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="bg-gradient-to-b from-dark-950 to-dark-800 w-full h-full"></div>
      </div>
      <div className="w-full px-[10%] relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why We’re Your Trusted Mobile App Development Partner
          </motion.h2>
          <motion.p
            className="text-xl text-brand-blue font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover what sets us apart in delivering user-friendly, high-performing mobile apps.
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Choose us as your trusted mobile app development partner in 2025. Our user-centric, performance-optimized approach ensures your app stands out in today’s competitive mobile landscape.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              className="reason-card flex items-start gap-6 p-4 rounded-lg bg-dark-800 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              role="button"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              aria-label={`Learn more about ${reason.title} as a reason to choose us for mobile app development`}
            >
              <div className="w-12 h-12 flex items-center justify-center">{reason.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-base text-gray-400">{reason.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div
          className="flex flex-col items-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            variant="primary"
            className="text-white font-semibold"
            icon={<FaArrowRight />}
            iconPosition="right"
            href="/contact-us"
            ariaLabel="Contact us to start your mobile app development project"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.05, 1],
              
              transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            Contact Us to Start Your Project
          </Button>
          {/* <p className="text-gray-400 mt-4">Trusted by 50+ startups to launch their apps successfully.</p>
          <p className="text-gray-400 mt-2">Rated 4.9/5 by 50+ clients for our mobile app development services.</p> */}
        </motion.div>
      </div>
    </section>
  );
}
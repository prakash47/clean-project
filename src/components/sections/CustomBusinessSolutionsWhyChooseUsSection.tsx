'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function CustomBusinessSolutionsWhyChooseUsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Ensure elements exist before applying animations
    const core = document.querySelector('.constellation-core');
    const stars = gsap.utils.toArray('.constellation-star') as HTMLElement[];
    const lines = gsap.utils.toArray('.connection-line') as HTMLElement[];
    const particles = gsap.utils.toArray('.background-particle') as HTMLElement[];
    const ctaButton = document.querySelector('.cta-button');

    if (core) {
      gsap.fromTo(
        core,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out', delay: 0.5 }
      );
      gsap.to(core, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5,
      });
    }
    if (stars.length > 0) {
      stars.forEach((star, index) => {
        gsap.fromTo(
          star,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 1 + index * 0.2, ease: 'power2.out' }
        );
        gsap.to(star, {
          scale: 1.05,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1 + index * 0.2,
        });
        star.addEventListener('mouseenter', () => {
          gsap.to(star, {
            scale: 1.3,
            rotation: 15,
            filter: 'drop-shadow(0 0 15px rgba(0, 160, 227, 0.7))',
            duration: 0.3,
          });
          gsap.to(lines[index], {
            opacity: 1,
            strokeWidth: 3,
            duration: 0.3,
          });
        });
        star.addEventListener('mouseleave', () => {
          gsap.to(star, {
            scale: 1.05,
            rotation: 0,
            filter: 'none',
            duration: 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
          gsap.to(lines[index], {
            opacity: 0.3,
            strokeWidth: 2,
            duration: 0.3,
          });
        });
        star.addEventListener('click', () => {
          gsap.to(star, {
            filter: 'drop-shadow(0 0 20px rgba(0, 160, 227, 0.9))',
            scale: 1.5,
            duration: 0.3,
            overwrite: 'auto',
          });
        });
      });
    }
    if (particles.length > 0) {
      particles.forEach((particle, index) => {
        gsap.fromTo(
          particle,
          { opacity: 0.3, x: 0, y: 0 },
          { opacity: 0, x: gsap.utils.random(-50, 50), y: gsap.utils.random(-50, 50), duration: 3, repeat: -1, delay: index * 0.5, ease: 'power2.out' }
        );
      });
    }
    if (ctaButton) {
      gsap.fromTo(
        ctaButton,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 2.5, ease: 'power2.out' }
      );
      gsap.to(ctaButton, {
        scale: 1.05,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 3,
      });
    }
  }, []);

  const reasons = [
    {
      title: 'Proven Expertise in Custom Solutions',
      description: 'With over a decade of experience, we’re a trusted custom software development company, delivering enterprise-grade solutions for businesses worldwide.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          role="img"
          aria-label="Icon representing proven expertise in custom solutions"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#00a0e3" opacity="0.7" />
          <path d="M8,16 L12,12 L16,8" stroke="#393185" strokeWidth="1" />
          <title>Proven Expertise in Custom Solutions Icon</title>
        </svg>
      ),
    },
    {
      title: 'Innovative AI and Cloud Integration',
      description: 'Our AI-powered software development and cloud-based solutions ensure your business stays ahead with cutting-edge technology and scalability.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          role="img"
          aria-label="Icon representing innovative AI and cloud integration"
        >
          <path d="M6,12 Q12,6 18,12 T24,12" fill="none" stroke="#00a0e3" strokeWidth="2" opacity="0.7" />
          <circle cx="12" cy="12" r="2" fill="#393185" />
          <title>Innovative AI and Cloud Integration Icon</title>
        </svg>
      ),
    },
    {
      title: 'Dedicated Project Teams',
      description: 'We assign dedicated project teams to every client, ensuring personalized attention and solutions tailored to your unique enterprise needs.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          role="img"
          aria-label="Icon representing dedicated project teams"
        >
          <circle cx="12" cy="12" r="8" fill="#00a0e3" opacity="0.7" />
          <path d="M12,8 V16 M8,12 H16" stroke="#393185" strokeWidth="1" />
          <title>Dedicated Project Teams Icon</title>
        </svg>
      ),
    },
    {
      title: 'Transparent Communication',
      description: 'As a leading enterprise software solutions provider, we prioritize transparent communication, keeping you informed at every step of the process.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          role="img"
          aria-label="Icon representing transparent communication"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#00a0e3" opacity="0.7" />
          <path d="M8,8 Q12,12 16,8" fill="none" stroke="#393185" strokeWidth="1" />
          <title>Transparent Communication Icon</title>
        </svg>
      ),
    },
    {
      title: 'Proven Success with Global Enterprises',
      description: 'Our proven success with global enterprises includes reducing development time by 20% and delivering solutions that drive measurable growth.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          role="img"
          aria-label="Icon representing proven success with global enterprises"
        >
          <circle cx="12" cy="12" r="8" fill="#00a0e3" opacity="0.7" />
          <path d="M6,12 H18 M12,6 V18 M8,8 Q12,12 16,8 M8,16 Q12,12 16,16" fill="none" stroke="#393185" strokeWidth="1" />
          <title>Proven Success with Global Enterprises Icon</title>
        </svg>
      ),
    },
    {
      title: 'Cost-Effective and Scalable Solutions',
      description: 'We offer cost-effective software development that scales with your business, helping you achieve efficiency without compromising quality.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          role="img"
          aria-label="Icon representing cost-effective and scalable solutions"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#00a0e3" opacity="0.7" />
          <path d="M8,16 Q12,8 16,16" fill="none" stroke="#393185" strokeWidth="1" />
          <title>Cost-Effective and Scalable Solutions Icon</title>
        </svg>
      ),
    },
  ];

  // Structured data for the section
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Intention Infoservice',
    url: 'https://intentioninfoservice.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Digital Avenue',
      addressLocality: 'Tech City',
      postalCode: 'TC 12345',
    },
    description: 'A trusted custom software development company offering enterprise software solutions with AI-powered and cloud-based technology.',
    makesOffer: reasons.map((reason, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: reason.title,
        description: reason.description,
        serviceType: 'Custom Software Development Benefit',
        provider: {
          '@type': 'Organization',
          name: 'Intention Infoservice',
        },
      },
    })),
  };

  return (
    <section className="relative bg-dark-900 py-16 md:py-24 overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Nebula Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-[rgba(0,160,227,0.1)] to-dark-950 opacity-50 pointer-events-none" />
      {/* Background Particles */}
      <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
        <circle cx="10%" cy="20%" r="3" fill="#00a0e3" opacity="0.3" className="background-particle" />
        <circle cx="90%" cy="30%" r="3" fill="#00a0e3" opacity="0.3" className="background-particle" />
        <circle cx="15%" cy="80%" r="3" fill="#00a0e3" opacity="0.3" className="background-particle" />
        <circle cx="85%" cy="85%" r="3" fill="#00a0e3" opacity="0.3" className="background-particle" />
      </svg>
      <div className="container mx-auto px-4 md:px-[10%] relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6 text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us as Your Custom Software Development Company
        </motion.h2>
        <motion.p
          className="text-base text-gray-400 max-w-3xl mx-auto mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Partner with a trusted enterprise software solutions provider to deliver tailored, AI-powered, and cost-effective software solutions that drive growth and efficiency.
        </motion.p>
        {/* Constellation Layout */}
        <div className="relative w-full h-[600px] flex justify-center items-center">
          {/* Central Core */}
          <div className="constellation-core absolute">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-brand-indigo to-brand-blue flex items-center justify-center shadow-[0_0_30px_rgba(0,160,227,0.5)]">
              <span className="text-white text-lg font-semibold text-center">Our Value</span>
            </div>
          </div>
          {/* Stars (Reasons) */}
          {reasons.map((reason, index) => {
            const angle = (index * 60) * (Math.PI / 180); // 60 degrees apart for 6 stars (360/6)
            const radius = 200; // Distance from the center
            const x = 250 + radius * Math.cos(angle); // Center at 250,250 (SVG width/2, height/2 adjusted)
            const y = 250 + radius * Math.sin(angle);
            const controlX = 250 + (radius - 50) * Math.cos(angle + Math.PI / 4);
            const controlY = 250 + (radius - 50) * Math.sin(angle + Math.PI / 4);
            return (
              <div
                key={index}
                className="constellation-star absolute cursor-pointer"
                style={{ transform: `translate(${x}px, ${y}px)` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Star Node */}
                <div className="w-16 h-16 rounded-full bg-dark-950 flex items-center justify-center shadow-[0_0_15px_rgba(0,160,227,0.3)]">
                  {reason.icon}
                </div>
                {/* Connecting Line */}
                <svg
                  className="absolute top-0 left-0 pointer-events-none"
                  width="500"
                  height="500"
                  style={{ position: 'absolute', zIndex: -1 }}
                >
                  <path
                    d={`M250,250 Q${controlX},${controlY} ${x + 32},${y + 32}`} // Adjust for star center
                    fill="none"
                    stroke="url(#connectionGradient)"
                    strokeWidth="2"
                    opacity={hoveredIndex === index ? 1 : 0.3}
                    className="connection-line"
                  >
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#393185', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#00a0e3', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                  </path>
                </svg>
                {/* Tooltip Overlay */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute bg-dark-950 border-2 border-gradient-to-r from-brand-indigo to-brand-blue rounded-lg p-4 shadow-[0_0_15px_rgba(0,160,227,0.5)] w-64 text-left"
                    style={{ transform: `translate(${index % 2 === 0 ? 80 : -220}px, 0)` }} // Alternate left/right
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                    <p className="text-base text-gray-400">{reason.description}</p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            size="lg"
            icon={<FaArrowRight />}
            iconPosition="right"
            href="/contact"
            className="cta-button bg-gradient-to-r from-brand-indigo to-brand-blue shadow-[0_0_15px_rgba(0,160,227,0.5)] hover:shadow-[0_0_25px_rgba(0,160,227,0.7)]"
            ariaLabel="Discover how we can help with your custom software needs"
          >
            Discover How We Can Help
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function CustomBusinessSolutionsProcessSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Ensure elements exist before applying animations
    const conveyorPath = document.querySelector('.conveyor-path');
    const stations = gsap.utils.toArray('.station') as HTMLElement[];
    const components = gsap.utils.toArray('.component') as HTMLElement[];
    const sparks = gsap.utils.toArray('.spark') as HTMLElement[];
    const ctaButton = document.querySelector('.cta-button');

    if (conveyorPath) {
      gsap.fromTo(
        conveyorPath,
        { strokeDasharray: 600, strokeDashoffset: 600 },
        { strokeDashoffset: 0, duration: 2, ease: 'power2.out', delay: 0.5 }
      );
    }
    if (stations.length > 0) {
      stations.forEach((station, index) => {
        gsap.fromTo(
          station,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 1 + index * 0.3, ease: 'power2.out' }
        );
        gsap.to(station, {
          scale: 1.05,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1 + index * 0.3,
        });
        station.addEventListener('mouseenter', () => {
          gsap.to(station, {
            scale: 1.2,
            filter: 'drop-shadow(0 0 10px rgba(0, 160, 227, 0.5))',
            duration: 0.3,
          });
          gsap.to(components[index], {
            motionPath: {
              path: '.conveyor-path',
              align: '.conveyor-path',
              alignOrigin: [0.5, 0.5],
              start: index * 0.2,
              end: index * 0.2, // Pause at the station
            },
            duration: 0.3,
          });
        });
        station.addEventListener('mouseleave', () => {
          gsap.to(station, {
            scale: 1.05,
            filter: 'none',
            duration: 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
          gsap.to(components[index], {
            motionPath: {
              path: '.conveyor-path',
              align: '.conveyor-path',
              alignOrigin: [0.5, 0.5],
              start: 0,
              end: 1,
            },
            duration: 10,
            repeat: -1,
            ease: 'none',
          });
        });
        station.addEventListener('click', () => {
          gsap.to(station, {
            filter: 'drop-shadow(0 0 15px rgba(0, 160, 227, 0.7))',
            scale: 1.3,
            duration: 0.3,
            overwrite: 'auto',
          });
        });
      });
    }
    if (components.length > 0) {
      components.forEach((component, index) => {
        gsap.to(component, {
          motionPath: {
            path: '.conveyor-path',
            align: '.conveyor-path',
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 1,
          },
          duration: 10,
          repeat: -1,
          ease: 'none',
          delay: index * 0.5,
        });
        // Transform at each station
        gsap.to(component, {
          scale: 1.2,
          rotation: 360,
          duration: 2,
          repeat: -1,
          ease: 'linear',
          delay: index * 0.5,
        });
      });
    }
    if (sparks.length > 0) {
      sparks.forEach((spark, index) => {
        gsap.fromTo(
          spark,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, repeat: -1, yoyo: true, delay: index * 0.3, ease: 'power2.out' }
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

  const steps = [
    {
      title: 'Discovery & Needs Analysis for Enterprises',
      description: 'We begin with a thorough discovery & needs analysis for enterprises, identifying your goals and challenges to create a tailored software roadmap.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="15" fill="#00a0e3" opacity="0.7" />
          <path d="M15,25 L25,15 M15,15 L25,25" stroke="#393185" strokeWidth="2" />
          <title>Discovery & Needs Analysis</title>
        </svg>
      ),
      markerIcon: (
        <svg width="19" height="19" viewBox="0 0 19 19">
          <circle cx="9.5" cy="9.5" r="6" fill="#fff" />
          <path d="M7,12 L12,7 M7,7 L12,12" stroke="#393185" strokeWidth="1.2" />
          <title>Discovery & Needs Analysis Icon</title>
        </svg>
      ),
    },
    {
      title: 'Solution Design with Trending Technologies',
      description: 'Our team designs enterprise software solutions, ensuring user-friendly architecture and leveraging trending technologies like AI and IoT.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#00a0e3" opacity="0.7" />
          <path d="M10,30 Q20,10 30,30" fill="none" stroke="#393185" strokeWidth="2" />
          <title>Solution Design</title>
        </svg>
      ),
      markerIcon: (
        <svg width="19" height="19" viewBox="0 0 19 19">
          <rect x="2.5" y="2.5" width="14" height="14" rx="2" fill="#fff" />
          <path d="M4.5,14 Q9.5,4.5 14.5,14" fill="none" stroke="#393185" strokeWidth="1.2" />
          <title>Solution Design Icon</title>
        </svg>
      ),
    },
    {
      title: 'Development & Integration with AI and Cloud',
      description: 'We develop and integrate AI and cloud-based software, building scalable solutions with modern frameworks to meet enterprise needs.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#00a0e3" opacity="0.7" />
          <path d="M10,20 L15,15 L20,20 L25,15 L30,20" fill="none" stroke="#393185" strokeWidth="2" />
          <title>Development & Integration</title>
        </svg>
      ),
      markerIcon: (
        <svg width="19" height="19" viewBox="0 0 19 19">
          <rect x="2.5" y="2.5" width="14" height="14" rx="2" fill="#fff" />
          <path d="M4.5,9.5 L7,7 L9.5,9.5 L12,7 L14.5,9.5" fill="none" stroke="#393185" strokeWidth="1.2" />
          <title>Development & Integration Icon</title>
        </svg>
      ),
    },
    {
      title: 'Testing & Optimization for Performance',
      description: 'Our rigorous testing & optimization for performance ensures your enterprise software is secure, efficient, and meets all expectations.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#00a0e3" opacity="0.7" />
          <path d="M10,20 L15,25 L30,10" fill="none" stroke="#393185" strokeWidth="2" />
          <title>Testing & Optimization</title>
        </svg>
      ),
      markerIcon: (
        <svg width="19" height="19" viewBox="0 0 19 19">
          <rect x="2.5" y="2.5" width="14" height="14" rx="2" fill="#fff" />
          <path d="M4.5,9.5 L7,12 L14.5,4.5" fill="none" stroke="#393185" strokeWidth="1.2" />
          <title>Testing & Optimization Icon</title>
        </svg>
      ),
    },
    {
      title: 'Deployment & Support with Ongoing Security',
      description: 'We provide deployment & support with ongoing security, ensuring your software evolves and remains protected against emerging threats.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M20,0 L30,10 L20,20 L10,10 Z" fill="#00a0e3" opacity="0.7" />
          <path d="M20,20 L20,30 L10,30 L10,40 L30,40 L30,30 L20,30 Z" fill="#00a0e3" opacity="0.7" />
          <title>Deployment & Support</title>
        </svg>
      ),
      markerIcon: (
        <svg width="19" height="19" viewBox="0 0 19 19">
          <path d="M9.5,0 L14.5,4.5 L9.5,9.5 L4.5,4.5 Z" fill="#fff" />
          <path d="M9.5,9.5 L9.5,14.5 L4.5,14.5 L4.5,19 L14.5,19 L14.5,14.5 L9.5,14.5 Z" fill="#fff" />
          <title>Deployment & Support Icon</title>
        </svg>
      ),
    },
  ];

  // Structured data for the section
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Custom Software Development',
    provider: {
      '@type': 'Organization',
      name: 'Intention Infoservice',
      url: 'https://intentioninfoservice.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Digital Avenue',
        addressLocality: 'Tech City',
        postalCode: 'TC 12345',
      },
    },
    description: 'Our custom software development process for enterprises ensures tailored enterprise software solutions that integrate AI, leverage cloud technology, and enhance security.',
    areaServed: 'Global',
    offers: {
      '@type': 'Offer',
      url: 'https://intentioninfoservice.com/services/custom-business-solutions',
      name: 'Custom Software Development Process for Enterprises',
      description: 'A proven custom software development process for enterprises, including discovery, solution design, development with AI and cloud integration, testing, and ongoing support.',
    },
    mainEntity: {
      '@type': 'HowTo',
      name: 'Custom Software Development Process for Enterprises',
      description: 'A step-by-step process to deliver tailored enterprise software solutions.',
      step: steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.title,
        description: step.description,
      })),
    },
  };

  return (
    <section className="relative bg-dark-900 py-16 md:py-24 overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,160,227,0.05)_0%,_rgba(0,0,0,0)_70%)] opacity-30 pointer-events-none" />
      <div className="w-full px-[10%] relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Custom Software Development Process for Enterprises
          </motion.h2>
          <motion.p
            className="text-lg text-brand-blue font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A Proven Approach to Deliver Enterprise Software Solutions
          </motion.p>
          <motion.p
            className="text-base text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our custom software development process for enterprises ensures tailored solutions that integrate AI, leverage cloud technology, and enhance security, helping you overcome digital transformation challenges and reduce costs by 15%.
          </motion.p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Process Steps */}
          <div className="lg:w-1/2">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex items-start gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-10 h-10 flex items-center justify-center">{step.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{`${index + 1}. ${step.title}`}</h3>
                  <p className="text-base text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Right: Updated Blueprint Assembly Line Illustration */}
          <div className="lg:w-1/2 flex justify-center">
            <svg
              width="500"
              height="300"
              viewBox="0 0 500 300"
              className="w-full max-w-[500px]"
              role="img"
              aria-label="Blueprint assembly line illustrating the custom software development process"
            >
              {/* Definitions for Gradients */}
              <defs>
                <linearGradient id="conveyorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#393185', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#00a0e3', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="stationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#393185', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#00a0e3', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              {/* Background Grid Lines */}
              <g opacity="0.1">
                <line x1="0" y1="50" x2="500" y2="50" stroke="#00a0e3" strokeWidth="1" />
                <line x1="0" y1="150" x2="500" y2="150" stroke="#00a0e3" strokeWidth="1" />
                <line x1="0" y1="250" x2="500" y2="250" stroke="#00a0e3" strokeWidth="1" />
                <line x1="100" y1="0" x2="100" y2="300" stroke="#00a0e3" strokeWidth="1" />
                <line x1="300" y1="0" x2="300" y2="300" stroke="#00a0e3" strokeWidth="1" />
              </g>
              {/* Sparks */}
              <g>
                <circle cx="80" cy="80" r="3" fill="#00a0e3" className="spark" />
                <circle cx="150" cy="220" r="3" fill="#00a0e3" className="spark" />
                <circle cx="320" cy="70" r="3" fill="#00a0e3" className="spark" />
                <circle cx="420" cy="230" r="3" fill="#00a0e3" className="spark" />
              </g>
              {/* Conveyor Path */}
              <path
                d="M50,150 Q150,50 250,150 Q350,250 450,150"
                fill="none"
                stroke="url(#conveyorGradient)"
                strokeWidth="6"
                strokeDasharray="600"
                className="conveyor-path"
              />
              {/* Stations and Components */}
              {steps.map((step, index) => {
                const x = 50 + index * 100;
                const y = 150 + (index % 2 === 0 ? -100 : 100); // Alternate above/below the path
                return (
                  <g key={index}>
                    {/* Station */}
                    <g
                      transform={`translate(${x}, ${y})`}
                      className="station transition-all duration-300 cursor-pointer"
                    >
                      <circle cx="0" cy="0" r="30" fill="url(#stationGradient)" />
                      <circle cx="0" cy="0" r="24" fill="#393185" />
                      <circle cx="0" cy="0" r="18" fill="#00a0e3" />
                      {step.markerIcon}
                      <text x="40" y="5" fill="#fff" fontSize="15">{index + 1}</text>
                      <title>Station for {step.title}</title>
                    </g>
                    {/* Moving Component */}
                    <g className="component">
                      <circle cx="0" cy="0" r="10" fill="#00a0e3" opacity="0.7" />
                      {index % 2 === 0 ? (
                        <path d="M-5,0 L0,-5 L5,0 L0,5 Z" fill="#393185" />
                      ) : (
                        <rect x="-5" y="-5" width="10" height="10" fill="#393185" />
                      )}
                    </g>
                  </g>
                );
              })}
            </svg>
          </div>
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
            className="cta-button"
            ariaLabel="Start your custom software project today"
          >
            Start Your Project Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
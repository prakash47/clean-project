'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { KeyboardEvent } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function MobileAppProcessSection() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const timelinePath = document.querySelector('.timeline-path');
    const timelineMarkers = document.querySelectorAll('.timeline-marker');
    const timelineLabels = document.querySelectorAll('.timeline-label');
    const backgroundDots = document.querySelectorAll('.background-dot');
    const stepCards = document.querySelectorAll('.step-card');

    // Animate the S-shaped timeline path
    if (timelinePath) {
      gsap.fromTo(
        timelinePath,
        { strokeDashoffset: 750 },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.process-section',
            start: 'top 80%',
          },
        }
      );
    }

    // Animate the background dots
    if (backgroundDots.length > 0) {
      gsap.fromTo(
        backgroundDots,
        { opacity: 0 },
        {
          opacity: 0.3,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.process-section',
            start: 'top 80%',
          },
        }
      );
    }

    // Animate the timeline markers and labels
    if (timelineMarkers.length > 0 && timelineLabels.length > 0) {
      timelineMarkers.forEach((marker, index) => {
        gsap.fromTo(
          marker,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: index * 0.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.process-section',
              start: 'top 80%',
            },
          }
        );

        // Pulsing animation for markers
        gsap.to(marker, {
          scale: 1.2,
          repeat: -1,
          yoyo: true,
          duration: 1,
          ease: 'sine.inOut',
          delay: index * 0.3,
          scrollTrigger: {
            trigger: '.process-section',
            start: 'top 80%',
          },
        });

        // Hover effect for markers (sync with step cards)
        marker.addEventListener('mouseenter', () => {
          gsap.to(marker, {
            scale: 1.4,
            filter: 'drop-shadow(0 0 8px rgba(0, 160, 227, 0.7))',
            duration: 0.3,
            ease: 'power2.out',
          });
          gsap.to(stepCards[index], {
            y: -5,
            boxShadow: '0 10px 20px rgba(0, 160, 227, 0.3)',
            duration: 0.3,
            ease: 'power2.out',
          });
          const icon = stepCards[index].querySelector('.step-icon');
          if (icon) {
            gsap.to(icon, {
              scale: 1.2,
              duration: 0.3,
              ease: 'power2.out',
            });
          }
        });
        marker.addEventListener('mouseleave', () => {
          gsap.to(marker, {
            scale: 1.2,
            filter: 'drop-shadow(0 0 0 rgba(0, 0, 0, 0))',
            duration: 0.3,
            ease: 'power2.out',
          });
          gsap.to(stepCards[index], {
            y: 0,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            duration: 0.3,
            ease: 'power2.out',
          });
          const icon = stepCards[index].querySelector('.step-icon');
          if (icon) {
            gsap.to(icon, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
            });
          }
        });

        gsap.fromTo(
          timelineLabels[index],
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.3 + 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.process-section',
              start: 'top 80%',
            },
          }
        );
      });
    }

    // Add hover effects to step cards (sync with timeline markers)
    if (stepCards.length > 0) {
      stepCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -5,
            boxShadow: '0 10px 20px rgba(0, 160, 227, 0.3)',
            duration: 0.3,
            ease: 'power2.out',
          });
          const icon = card.querySelector('.step-icon');
          if (icon) {
            gsap.to(icon, {
              scale: 1.2,
              duration: 0.3,
              ease: 'power2.out',
            });
          }
          gsap.to(timelineMarkers[index], {
            scale: 1.4,
            filter: 'drop-shadow(0 0 8px rgba(0, 160, 227, 0.7))',
            duration: 0.3,
            ease: 'power2.out',
          });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            duration: 0.3,
            ease: 'power2.out',
          });
          const icon = card.querySelector('.step-icon');
          if (icon) {
            gsap.to(icon, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
            });
          }
          gsap.to(timelineMarkers[index], {
            scale: 1.2,
            filter: 'drop-shadow(0 0 0 rgba(0, 0, 0, 0))',
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });
    }

    return () => {
      stepCards.forEach((card) => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
      timelineMarkers.forEach((marker) => {
        marker.removeEventListener('mouseenter', () => {});
        marker.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const steps = [
    {
      title: 'Discovery',
      description: 'We analyze your business goals, target audience, and app requirements to create a detailed roadmap. Identify 90% of user needs upfront.',
      icon: (
        <svg className="step-icon w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#00a0e3" strokeWidth="2" aria-hidden="true">
          <defs>
            <linearGradient id="discoveryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#006d9e', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" fill="url(#discoveryGradient)" />
          <path d="M12 6l4 6-4 6-4-6 4-6z" stroke="#00a0e3" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Design',
      description: 'Our designers create intuitive, user-friendly app interfaces with a focus on UX/UI best practices. Achieve 95% user satisfaction in design.',
      icon: (
        <svg className="step-icon w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#393185" strokeWidth="2" aria-hidden="true">
          <defs>
            <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#393185', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#2a2465', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="16" height="16" rx="2" fill="url(#designGradient)" />
          <path d="M8 16l4-8 4 8" stroke="#393185" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Development',
      description: 'Our developers build your app with clean code, ensuring performance, security, and scalability. Deliver apps 30% faster with our process.',
      icon: (
        <svg className="step-icon w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#00a0e3" strokeWidth="2" aria-hidden="true">
          <defs>
            <linearGradient id="developmentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#006d9e', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M4 4h16v16H4z" fill="url(#developmentGradient)" />
          <path d="M8 12l2-2 4 4-2 2-4-4zm8 0l-2 2-4-4 2-2 4 4z" stroke="#00a0e3" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Testing',
      description: 'We conduct rigorous testing for functionality, performance, and compatibility across devices. Ensure 99% bug-free apps before launch.',
      icon: (
        <svg className="step-icon w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#393185" strokeWidth="2" aria-hidden="true">
          <defs>
            <linearGradient id="testingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#393185', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#2a2465', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" fill="url(#testingGradient)" />
          <path d="M8 12l3 3 5-5" stroke="#393185" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Launch & Support',
      description: 'We publish your app on the App Store and Google Play, with ongoing support to keep it updated. Achieve 100% successful launches.',
      icon: (
        <svg className="step-icon w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#00a0e3" strokeWidth="2" aria-hidden="true">
          <defs>
            <linearGradient id="launchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#006d9e', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M12 2l8 8-8 8-8-8 8-8zm0 8v10h8V10h-8z" fill="url(#launchGradient)" />
        </svg>
      ),
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Mobile App Development Process',
    description: 'Our proven process for developing high-quality mobile apps, from discovery to launch and support.',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      name: step.title,
      description: step.description,
      position: index + 1,
    })),
    tool: [
      {
        '@type': 'HowToTool',
        name: 'React Native',
      },
      {
        '@type': 'HowToTool',
        name: 'Flutter',
      },
      {
        '@type': 'HowToTool',
        name: 'Swift',
      },
      {
        '@type': 'HowToTool',
        name: 'Kotlin',
      },
    ],
    supply: [
      {
        '@type': 'HowToSupply',
        name: 'App Store Account',
      },
      {
        '@type': 'HowToSupply',
        name: 'Google Play Account',
      },
    ],
    totalTime: 'P3M', // 3 months
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      window.location.href = '/contact-us';
    }
  };

  return (
    <section className="process-section bg-dark-900 py-16 md:py-24 relative overflow-hidden">
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
            Our Proven Mobile App Development Process
          </motion.h2>
          <motion.p
            className="text-xl text-brand-blue font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We follow a streamlined process to deliver high-quality apps on time and within budget.
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our mobile app development process ensures every project is a success. From discovery to launch, we prioritize user experience, security, and performance to deliver apps that drive results in 2025.
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Process Steps */}
          <div className="md:w-1/2">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                className="step-card flex items-start gap-4 mb-8 p-4 rounded-lg bg-dark-800 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                role="button"
                tabIndex={0}
                onKeyDown={handleKeyDown}
                aria-label={`Learn more about the ${step.title} step in our mobile app development process`}
              >
                <div className="w-12 h-12 flex items-center justify-center">{step.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{`${index + 1}. ${step.title}`}</h3>
                  <p className="text-base text-gray-400">{step.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
          {/* Right: S-Shaped Flow Timeline SVG (Increased Size, No Label Background) */}
          <div className="md:w-1/2 flex justify-center">
            <svg
              width="400"
              height="500"
              viewBox="0 0 400 500"
              preserveAspectRatio="xMidYMid meet"
              className="w-full max-w-[350px] md:max-w-[450px]"
              role="img"
              aria-label="S-shaped mobile app development process timeline"
            >
              <defs>
                <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#393185', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              {/* Background Dots */}
              <circle cx="50" cy="50" r="5" fill="rgba(0, 160, 227, 0.3)" className="background-dot" />
              <circle cx="350" cy="100" r="5" fill="rgba(57, 49, 133, 0.3)" className="background-dot" />
              <circle cx="70" cy="200" r="5" fill="rgba(0, 160, 227, 0.3)" className="background-dot" />
              <circle cx="330" cy="300" r="5" fill="rgba(57, 49, 133, 0.3)" className="background-dot" />
              <circle cx="50" cy="450" r="5" fill="rgba(0, 160, 227, 0.3)" className="background-dot" />
              {/* S-Shaped Path (Increased Size) */}
              <path
                d="M50 50 C150 150, 250 150, 350 200 S150 300, 50 400 S250 450, 350 450"
                fill="none"
                stroke="url(#timelineGradient)"
                strokeWidth="6"
                strokeDasharray="750"
                className="timeline-path"
              />
              {/* Timeline Markers and Labels */}
              {steps.map((step, index) => {
                const yPositions = [50, 150, 250, 350, 450]; // Y positions for each step (adjusted for larger height)
                const xPositions = [50, 350, 50, 350, 50]; // Alternating X positions for S-shape
                const x = xPositions[index];
                const y = yPositions[index];
                const labelX = x < 150 ? x + 40 : x - 40; // Adjusted label offset for larger size
                const textAnchor = x < 150 ? 'start' : 'end'; // Adjust text alignment

                return (
                  <g key={index}>
                    {/* Marker */}
                    <g transform={`translate(${x}, ${y})`} className="timeline-marker">
                      <circle cx="0" cy="0" r="12" fill="url(#timelineGradient)" />
                      <text x="0" y="4" fill="#fff" fontSize="12" textAnchor="middle">{index + 1}</text>
                    </g>
                    {/* Label (No Background, Added Stroke for Readability) */}
                    <text
                      x={labelX}
                      y={y}
                      fill="#fff"
                      fontSize="14"
                      textAnchor={textAnchor}
                      className="timeline-label"
                      style={{ stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: '0.5px' }}
                    >
                      {step.title}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
        <motion.div
          className="flex flex-col items-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            scale: [1, 1.05, 1],
            transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Button
            size="lg"
            className="btn btn-primary text-white font-semibold"
            icon={<FaArrowRight />}
            iconPosition="right"
            href="/contact-us"
            ariaLabel="Start your mobile app development journey today"
          >
            Start Your App Journey Today
          </Button>
          {/* <p className="text-gray-400 mt-4">Trusted by 50+ startups to launch their apps successfully.</p>
          <p className="text-gray-400 mt-2">Rated 4.9/5 by 50+ clients for our mobile app development services.</p> */}
        </motion.div>
      </div>
    </section>
  );
}
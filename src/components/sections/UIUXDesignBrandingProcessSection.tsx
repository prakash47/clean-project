'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function UIUXDesignBrandingProcessSection() {
  const steps = [
    {
      title: 'Discovery & User Research for UI/UX Design',
      description:
        'We kick off the UI/UX design process in 2025 with stakeholder interviews, user surveys, and competitive analysis to understand your brand, audience, and goals.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="step-icon-svg" aria-hidden="true">
          <circle cx="12" cy="12" r="8" fill="#00a0e3" />
          <path d="M9,15 L15,9 M9,9 L15,15" stroke="#0F172A" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: 'Information Architecture in Design Workflow',
      description:
        'We define the structure and navigation of your product to ensure a seamless user experience, laying a strong foundation for the design process.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="step-icon-svg" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#393185" />
          <path d="M6,8 H18 M6,12 H18 M6,16 H18" fill="none" stroke="#0F172A" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: 'Prototyping in UI/UX Workflow',
      description:
        'We create wireframes and interactive prototypes to visualize and refine your design concepts, ensuring alignment with user needs.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="step-icon-svg" aria-hidden="true">
          <rect x="4" y="4" width="16" height="12" rx="2" fill="none" stroke="#00a0e3" strokeWidth="1.5" strokeDasharray="3,3" />
          <rect x="6" y="6" width="12" height="8" fill="none" stroke="#00a0e3" strokeWidth="1.5" strokeDasharray="3,3" />
        </svg>
      ),
    },
    {
      title: 'Visual Design & Branding Process Steps',
      description:
        'We craft stunning UI/UX designs and cohesive brand identities, including logos, typography, and color schemes, that resonate with your audience.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="step-icon-svg" aria-hidden="true">
          <circle cx="12" cy="12" r="8" fill="#393185" />
          <text x="8" y="15" fill="#0F172A" fontSize="8" fontFamily="monospace">Logo</text>
        </svg>
      ),
    },
    {
      title: 'Interaction Design for Enhanced Usability',
      description:
        'We add micro-interactions and animations to enhance user engagement and ensure a seamless, delightful experience.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="step-icon-svg" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#00a0e3" />
          <path d="M6,6 L12,12 L18,6" fill="none" stroke="#0F172A" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: 'User Testing & Validation for Apps',
      description:
        'We test designs with real users through usability testing, A/B testing, and accessibility checks to ensure optimal performance and compliance.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="step-icon-svg" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#393185" />
          <path d="M6,12 L9,15 L18,6" fill="none" stroke="#0F172A" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: 'Delivery & Brand Guidelines Creation',
      description:
        'We deliver polished designs and brand assets, along with comprehensive brand guidelines to ensure consistency across all touchpoints.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="step-icon-svg" aria-hidden="true">
          <path d="M12,2 L16,6 L12,10 L8,6 Z" fill="#00a0e3" />
          <path d="M12,10 L12,16 L8,16 L8,22 L16,22 L16,16 L12,16 Z" fill="#00a0e3" />
        </svg>
      ),
    },
    {
      title: 'Iteration & Ongoing Support for Designs',
      description:
        'We provide iterative improvements and ongoing support based on user feedback, ensuring your designs evolve with your needs.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="step-icon-svg" aria-hidden="true">
          <circle cx="12" cy="12" r="8" fill="#393185" />
          <path d="M6,12 Q12,6 18,12 Q12,18 6,12" fill="none" stroke="#0F172A" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];

  const leftColumnRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const updateSvgHeight = () => {
      if (leftColumnRef.current && svgRef.current) {
        const leftColumnHeight = leftColumnRef.current.getBoundingClientRect().height;
        svgRef.current.setAttribute('height', `${leftColumnHeight}`);
        svgRef.current.setAttribute('viewBox', `0 0 400 ${leftColumnHeight}`);
      }
    };

    // Initial update
    updateSvgHeight();

    // Update on window resize
    window.addEventListener('resize', updateSvgHeight);
    return () => window.removeEventListener('resize', updateSvgHeight);
  }, []);

  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // SVG Timeline Animations
    const timelinePath = document.querySelector('.timeline-path');
    const timelineNodes = document.querySelectorAll('.timeline-node');
    const backgroundElements = document.querySelectorAll('.background-element');

    if (leftColumnRef.current && svgRef.current) {
      const leftColumnHeight = leftColumnRef.current.getBoundingClientRect().height;

      if (timelinePath) {
        gsap.fromTo(
          timelinePath,
          { strokeDasharray: leftColumnHeight, strokeDashoffset: leftColumnHeight },
          { strokeDashoffset: 0, duration: 2, ease: 'power3.out' }
        );
      }

      if (timelineNodes.length > 0) {
        gsap.fromTo(
          timelineNodes,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
        );
        gsap.to(timelineNodes, {
          scale: 1.05,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: 0.2,
          delay: 1,
        });

        // Hover animations for timeline nodes
        timelineNodes.forEach((node) => {
          const svgIcon = node.querySelector('.step-icon-svg') as SVGElement;
          node.addEventListener('mouseenter', () => {
            gsap.killTweensOf([node, svgIcon]);
            gsap.to(node, {
              scale: 1.2,
              duration: 0.3,
              ease: 'power2.out',
              overwrite: 'auto',
            });
            gsap.to(svgIcon, {
              filter: 'url(#glow)',
              duration: 0.3,
              ease: 'power2.out',
              overwrite: 'auto',
              onComplete: () => {
                gsap.to(svgIcon, {
                  filter: 'url(#glow-pulse)',
                  duration: 1,
                  repeat: -1,
                  yoyo: true,
                  ease: 'sine.inOut',
                  overwrite: 'auto',
                });
              },
            });
          });
          node.addEventListener('mouseleave', () => {
            gsap.killTweensOf([node, svgIcon]);
            gsap.to(node, {
              scale: 1.05,
              duration: 0.3,
              ease: 'power2.out',
              overwrite: 'auto',
            });
            gsap.to(svgIcon, {
              filter: 'none',
              duration: 0.3,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          });
        });
      }

      if (backgroundElements.length > 0) {
        gsap.fromTo(
          backgroundElements,
          { opacity: 0, scale: 0 },
          { opacity: 0.3, scale: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
        );
        gsap.to(backgroundElements, {
          y: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: 0.2,
          delay: 0.8,
        });
      }
    }

    // Hover animations for step cards
    const stepCards = gsap.utils.toArray('.step-card') as HTMLElement[];
    stepCards.forEach((card) => {
      const icon = card.querySelector('.step-icon') as HTMLElement;
      const svgIcon = card.querySelector('.step-icon svg') as SVGElement;
      const title = card.querySelector('.step-title') as HTMLElement;
      const description = card.querySelector('.step-description') as HTMLElement;

      // Hover in
      card.addEventListener('mouseenter', () => {
        gsap.killTweensOf([icon, svgIcon, title, description]);

        gsap.to(icon, {
          scale: 1.3,
          rotate: 15,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        gsap.to(svgIcon, {
          filter: 'url(#glow)',
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
          onComplete: () => {
            gsap.to(svgIcon, {
              filter: 'url(#glow-pulse)',
              duration: 1,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              overwrite: 'auto',
            });
          },
        });

        gsap.to(title, {
          color: card.classList.contains('bg-dark-800') ? '#00a0e3' : '#393185',
          scale: 1.05,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        gsap.to(description, {
          color: '#d1d5db',
          y: -4,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      });

      // Hover out
      card.addEventListener('mouseleave', () => {
        gsap.killTweensOf([icon, svgIcon, title, description]);

        gsap.to(icon, {
          scale: 1,
          rotate: 0,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        gsap.to(svgIcon, {
          filter: 'none',
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        gsap.to(title, {
          color: '#ffffff',
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        gsap.to(description, {
          color: '#9ca3af',
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      });
    });
  }, []);

  return (
    <section className="bg-dark-900 py-16 md:py-24 relative overflow-hidden">
      {/* Structured Data for the Section */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'UI/UX Design and Branding Process',
          description:
            'A step-by-step guide to Intention Infoservice’s UI/UX design and branding process, ensuring user-centered designs and cohesive brand identities.',
          step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.title,
            text: step.description,
          })),
        })}
      </script>

      {/* SVG Filter for Glowing Effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-pulse">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#393185', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our UI/UX Design & Branding Process
          </motion.h2>
          <motion.p
            className="text-xl text-[#00a0e3] font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A Strategic Workflow for Exceptional Designs in 2025
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our user-centered design workflow ensures every UI/UX design and branding project is a success. We combine creativity, user insights, and strategic thinking to create experiences that captivate and convert.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Process Steps */}
          <div className="space-y-6" ref={leftColumnRef}>
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`step-card group p-6 rounded-lg border shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                  index % 2 === 0
                    ? 'bg-dark-800 border-gray-700 hover:bg-dark-700 hover:border-[#00a0e3]'
                    : 'bg-dark-700 border-gray-700 hover:bg-dark-600 hover:border-[#393185]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                role="button"
                tabIndex={0}
                aria-label={`Learn more about ${step.title}`}
              >
                <div className="flex items-start gap-4">
                  <div className="step-icon transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-xl">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="step-title text-2xl font-bold text-white mb-2 transition-transform duration-500">{`${
                      index + 1
                    }. ${step.title}`}</h3>
                    <p className="step-description text-base text-gray-400 transition-all duration-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="btn btn-primary !bg-gradient-to-r !from-[#00a0e3] !to-[#393185] !hover:from-[#006d9e] !hover:to-[#2a2465] text-white font-semibold shadow-lg hover:shadow-[#00a0e3]/40 transition-all duration-300"
                icon={<FaArrowRight />}
                iconPosition="right"
                href="/contact"
                ariaLabel="Start your UI/UX design and branding project today"
              >
                Start Your Project Today
              </Button>
            </motion.div>
          </div>
          {/* Right: Enhanced SVG Timeline */}
          <div className="flex justify-center">
            <svg
              width="400"
              height="800"
              viewBox="0 0 400 800"
              className="w-full max-w-[400px]"
              role="img"
              aria-label="Timeline of UI/UX design and branding process steps with icons representing each step"
              ref={svgRef}
            >
              {/* Background Elements */}
              <g className="background">
                {(() => {
                  const leftColumnHeight = leftColumnRef.current?.getBoundingClientRect().height || 800;
                  const padding = 50;
                  return (
                    <>
                      <circle cx="50" cy={padding} r="20" fill="url(#timelineGradient)" className="background-element" filter="url(#glow)" />
                      <circle cx="350" cy={padding} r="20" fill="url(#timelineGradient)" className="background-element" filter="url(#glow)" />
                      <circle cx="50" cy={leftColumnHeight - padding} r="20" fill="url(#timelineGradient)" className="background-element" filter="url(#glow)" />
                      <circle cx="350" cy={leftColumnHeight - padding} r="20" fill="url(#timelineGradient)" className="background-element" filter="url(#glow)" />
                      <rect x="40" y={padding + 50} width="50" height="25" rx="5" fill="none" stroke="url(#timelineGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                      <rect x="310" y={padding + 50} width="50" height="25" rx="5" fill="none" stroke="url(#timelineGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                      <path d="M40,${padding + 85} Q200,${padding + 115} 360,${padding + 85}" fill="none" stroke="url(#timelineGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                      <rect x="40" y={leftColumnHeight - padding - 75} width="50" height="25" rx="5" fill="none" stroke="url(#timelineGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                      <rect x="310" y={leftColumnHeight - padding - 75} width="50" height="25" rx="5" fill="url(#timelineGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                      <path d="M40,${leftColumnHeight - padding - 40} Q200,${leftColumnHeight - padding - 10} 360,${leftColumnHeight - padding - 40}" fill="none" stroke="url(#timelineGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                    </>
                  );
                })()}
              </g>
              {/* Curved Timeline Path (Dynamic Height) */}
              {(() => {
                const leftColumnHeight = leftColumnRef.current?.getBoundingClientRect().height || 800;
                const padding = 50;
                const contentHeight = leftColumnHeight - 2 * padding;
                const stepHeight = contentHeight / (steps.length - 1);
                const points = steps.map((_, index) => {
                  const y = padding + index * stepHeight;
                  const xOffset = index % 2 === 0 ? 150 : 250;
                  return index === 0 ? `M200,${y}` : ` Q${xOffset},${y - stepHeight / 2} 200,${y}`;
                }).join('');
                return <path d={points} fill="none" stroke="url(#timelineGradient)" strokeWidth="4" className="timeline-path" />;
              })()}
              {/* Timeline Nodes with Icons (Dynamic Positions) */}
              {steps.map((step, index) => {
                const leftColumnHeight = leftColumnRef.current?.getBoundingClientRect().height || 800;
                const padding = 50;
                const contentHeight = leftColumnHeight - 2 * padding;
                const stepHeight = contentHeight / (steps.length - 1);
                const yPosition = padding + index * stepHeight;
                return (
                  <g key={index} className="timeline-node" transform={`translate(200, ${yPosition})`}>
                    <circle cx="0" cy="0" r="25" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" />
                    <g transform="translate(-12, -12)">{step.icon}</g>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
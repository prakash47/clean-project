
'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';

export default function UIUXDesignBrandingProcessSection() {
  const steps = [
    {
      title: 'Discovery & User Research for UI/UX Design',
      description:
        'We kick off the UI/UX design process in 2025 with stakeholder interviews, user surveys, and competitive analysis to understand your brand, audience, and goals. This ensures a data-driven approach to your UI/UX and branding strategy.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="step-icon-svg" aria-hidden="true">
          <circle cx="12" cy="12" r="8" fill="#00a0e3" />
          <path d="M9,15 L15,9 M9,9 L15,15" stroke="#0F172A" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: 'Information Architecture & Wireframing in Design Workflow',
      description:
        'We define the structure and navigation of your product through detailed information architecture and wireframing. This ensures a seamless user experience and lays a strong, intuitive foundation for the design process, improving usability by up to 20%.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="step-icon-svg" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#393185" />
          <path d="M6,8 H18 M6,12 H18 M6,16 H18" fill="none" stroke="#0F172A" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: 'Prototyping & Iteration in UI/UX Workflow',
      description:
        'We create interactive prototypes to visualize and refine your design concepts, allowing for early feedback and rapid iteration. This agile approach ensures alignment with user needs and business objectives, reducing development costs by up to 15%.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="step-icon-svg" aria-hidden="true">
          <rect x="4" y="4" width="16" height="12" rx="2" fill="none" stroke="#00a0e3" strokeWidth="1.5" strokeDasharray="3,3" />
          <rect x="6" y="6" width="12" height="8" fill="none" stroke="#00a0e3" strokeWidth="1.5" strokeDasharray="3,3" />
        </svg>
      ),
    },
    {
      title: 'Visual Design & Brand Identity Development',
      description:
        'We craft stunning UI/UX designs and cohesive brand identities, including memorable logos, consistent typography, and harmonious color schemes. Our designs not only look great but also resonate deeply with your target audience, increasing brand recognition by an average of 25%.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="step-icon-svg" aria-hidden="true">
          <circle cx="12" cy="12" r="8" fill="#393185" />
          <text x="8" y="15" fill="#0F172A" fontSize="8" fontFamily="monospace">Logo</text>
        </svg>
      ),
    },
    {
      title: 'Interaction Design & Micro-animations for Enhanced Usability',
      description:
        'We meticulously design micro-interactions and animations to enhance user engagement and ensure a seamless, delightful experience. These subtle yet impactful elements improve user flow and overall satisfaction, leading to higher conversion rates.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="step-icon-svg" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#00a0e3" />
          <path d="M6,6 L12,12 L18,6" fill="none" stroke="#0F172A" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: 'User Testing, Validation & Accessibility for Apps',
      description:
        'We rigorously test designs with real users through usability testing, A/B testing, and comprehensive accessibility checks. This ensures optimal performance, compliance with WCAG standards, and a truly inclusive user experience for all, boosting user retention by 18%.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="step-icon-svg" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#393185" />
          <path d="M6,12 L9,15 L18,6" fill="none" stroke="#0F172A" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: 'Delivery & Comprehensive Brand Guidelines Creation',
      description:
        'We deliver polished designs and all necessary brand assets, along with comprehensive brand guidelines. These guidelines ensure consistency across all touchpoints, empowering your team to maintain a strong and unified brand presence.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="step-icon-svg" aria-hidden="true">
          <path d="M12,2 L16,6 L12,10 L8,6 Z" fill="#00a0e3" />
          <path d="M12,10 L12,16 L8,16 L8,22 L16,22 L16,16 L12,16 Z" fill="#00a0e3" />
        </svg>
      ),
    },
    {
      title: 'Continuous Iteration & Ongoing Support for Designs',
      description:
        'We provide continuous iterative improvements and ongoing support based on user feedback and market trends. This ensures your designs evolve with your needs and remain competitive, maximizing long-term ROI.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="step-icon-svg" aria-hidden="true">
          <circle cx="12" cy="12" r="8" fill="#393185" />
          <path d="M6,12 Q12,6 18,12 Q12,18 6,12" fill="none" stroke="#0F172A" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // SVG Timeline Animations
    const timelinePath = document.querySelector('.timeline-path');
    const timelineNodes = document.querySelectorAll('.timeline-node');
    const backgroundElements = document.querySelectorAll('.background-element');

    if (timelinePath) {
      const svgHeight = window.innerWidth < 1024 ? 970 : 1450; // Adjust height based on screen size
      gsap.fromTo(
        timelinePath,
        { strokeDasharray: svgHeight, strokeDashoffset: svgHeight },
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

  // State to determine if the device is mobile for height adjustments
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the window width is less than 1024px (Tailwind's lg breakpoint)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Set initial value
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const padding = isMobile ? 23 : 95; // 23px on mobile, 95px on desktop
  const stepHeight = isMobile ? 132 : 180; // 132px on mobile, 180px on desktop
  const totalHeight = padding + (steps.length - 1) * stepHeight + padding; // 970px on mobile, 1450px on desktop

  return (
    <section className="bg-dark-900 py-12 md:py-16 relative overflow-hidden">
      {/* Structured Data for the Section */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'UI/UX Design and Branding Process',
          description:
            'A step-by-step guide to Intention Infoservice’s UI/UX design and branding process, ensuring user-centered designs and cohesive brand identities. Our proven methodology delivers exceptional digital experiences.',
          step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.title,
            text: step.description,
          })),
          supply: steps.map((step) => ({
            '@type': 'HowToSupply',
            name: step.title,
          })),
          tool: [
            {
              '@type': 'HowToTool',
              name: 'User Research Tools',
            },
            {
              '@type': 'HowToTool',
              name: 'Wireframing Software',
            },
            {
              '@type': 'HowToTool',
              name: 'Prototyping Software',
            },
            {
              '@type': 'HowToTool',
              name: 'Graphic Design Software',
            },
            {
              '@type': 'HowToTool',
              name: 'Usability Testing Platforms',
            },
          ],
          estimatedCost: {
            '@type': 'MonetaryAmount',
            currency: 'USD',
            value: 'Varies based on project scope',
          },
          totalTime: 'P3M', // Example: 3 months, adjust as needed
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
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our UI/UX Design & Branding Process: A Strategic Workflow
          </motion.h2>
          <motion.p
            className="text-xl text-[#00a0e3] font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From Concept to Launch: Delivering Exceptional Digital Experiences in 2025
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our user-centered design workflow ensures every UI/UX design and branding project is a success. We combine creativity, user insights, and strategic thinking to create experiences that captivate, convert, and build lasting brand loyalty. Discover our proven methodology.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left: Process Steps */}
          <div className="space-y-6">
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
          </div>
          {/* Right: Enhanced SVG Timeline - Hidden on small screens (<md) */}
          <div className="flex justify-center hidden md:block">
            {(() => {
              return (
                <svg
                  width="600"
                  height={totalHeight}
                  viewBox={`0 0 600 ${totalHeight}`}
                  className="w-full max-w-[600px]"
                  role="img"
                  aria-label="Timeline of UI/UX design and branding process steps with icons representing each step"
                >
                  <defs>
                    <linearGradient id="timelinePathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00a0e3" />
                      <stop offset="100%" stopColor="#393185" />
                    </linearGradient>
                  </defs>
                  <path
                    className="timeline-path"
                    d={`M300,${padding} V${totalHeight - padding}`}
                    stroke="url(#timelinePathGradient)"
                    strokeWidth="2"
                    fill="none"
                  />
                  {steps.map((step, index) => (
                    <g
                      key={index}
                      className="timeline-node"
                      transform={`translate(300, ${padding + index * stepHeight})`}
                    >
                      <circle cx="0" cy="0" r="10" fill="#00a0e3" stroke="#393185" strokeWidth="2" />
                      <text
                        x={index % 2 === 0 ? -15 : 15}
                        y="5"
                        textAnchor={index % 2 === 0 ? 'end' : 'start'}
                        fill="#ffffff"
                        fontSize="14"
                        fontWeight="bold"
                        className="timeline-text"
                      >
                        {`Step ${index + 1}`}
                      </text>
                      <g transform={`translate(${index % 2 === 0 ? -40 : 20}, -12)`}>
                        {step.icon}
                      </g>
                    </g>
                  ))}
                </svg>
              );
            })()}
          </div>
        </div>
        {/* CTA Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="btn btn-primary hover:bg-brand-blue hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] transition-all duration-300"
            icon={<FaArrowRight />}
            iconPosition="right"
            href="/contact-us"
            ariaLabel="Start your UI/UX design and branding project today"
          >
            Start Your Project Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}


'use client';
import { motion, useInView } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaClock, FaCheckCircle, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useEffect, useState, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function UIUXDesignBrandingProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Discovery & User Research for UI/UX Design',
      description: 'We kick off the UI/UX design process in 2025 with stakeholder interviews, user surveys, and competitive analysis to understand your brand, audience, and goals. This ensures a data-driven approach to your UI/UX and branding strategy.',
      duration: '1-2 weeks',
      deliverables: ['User personas', 'Competitive analysis', 'Project roadmap'],
      icon: <FaUsers className="text-2xl" />,
    },
    {
      step: '02',
      title: 'Information Architecture & Wireframing in Design Workflow',
      description: 'We define the structure and navigation of your product through detailed information architecture and wireframing. This ensures a seamless user experience and lays a strong, intuitive foundation for the design process.',
      duration: '1-2 weeks',
      deliverables: ['Site map', 'User flows', 'Low-fidelity wireframes'],
      icon: <FaLightbulb className="text-2xl" />,
    },
    {
      step: '03',
      title: 'Prototyping & Iteration in UI/UX Workflow',
      description: 'We create interactive prototypes to visualize and refine your design concepts, allowing for early feedback and rapid iteration. This agile approach ensures alignment with user needs and business objectives.',
      duration: '2-3 weeks',
      deliverables: ['Interactive prototypes', 'User testing results', 'Design iterations'],
      icon: <FaRocket className="text-2xl" />,
    },
    {
      step: '04',
      title: 'Visual Design & Brand Identity Development',
      description: 'We craft stunning UI/UX designs and cohesive brand identities, including memorable logos, consistent typography, and harmonious color schemes. Our designs not only look great but also resonate deeply with your target audience.',
      duration: '2-4 weeks',
      deliverables: ['High-fidelity designs', 'Brand guidelines', 'Asset library'],
      icon: <FaCheckCircle className="text-2xl" />,
    },
    {
      step: '05',
      title: 'Interaction Design & Micro-animations for Enhanced Usability',
      description: 'We meticulously design micro-interactions and animations to enhance user engagement and ensure a seamless, delightful experience. These subtle yet impactful elements improve user flow and overall satisfaction.',
      duration: '1-2 weeks',
      deliverables: ['Animation specifications', 'Interaction guidelines', 'Motion prototypes'],
      icon: <FaUsers className="text-2xl" />,
    },
    {
      step: '06',
      title: 'User Testing, Validation & Accessibility for Apps',
      description: 'We rigorously test designs with real users through usability testing, A/B testing, and comprehensive accessibility checks. This ensures optimal performance, compliance with WCAG standards, and a truly inclusive user experience.',
      duration: '1-2 weeks',
      deliverables: ['Testing reports', 'Accessibility audit', 'Performance metrics'],
      icon: <FaLightbulb className="text-2xl" />,
    },
    {
      step: '07',
      title: 'Delivery & Comprehensive Brand Guidelines Creation',
      description: 'We deliver polished designs and all necessary brand assets, along with comprehensive brand guidelines. These guidelines ensure consistency across all touchpoints, empowering your team to maintain a strong and unified brand presence.',
      duration: '1 week',
      deliverables: ['Final designs', 'Brand guidelines', 'Asset handoff'],
      icon: <FaRocket className="text-2xl" />,
    },
    {
      step: '08',
      title: 'Continuous Iteration & Ongoing Support for Designs',
      description: 'We provide continuous iterative improvements and ongoing support based on user feedback and market trends. This ensures your designs evolve with your needs and remain competitive, maximizing long-term ROI.',
      duration: 'Ongoing',
      deliverables: ['Regular updates', 'Performance monitoring', 'Support documentation'],
      icon: <FaCheckCircle className="text-2xl" />,
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    // Headline and tagline animation
    gsap.fromTo('.process-headline', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );
    gsap.fromTo('.process-tagline', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );
    gsap.fromTo('.process-description', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );

    // Step cards animation
    const stepCards = gsap.utils.toArray('.step-card') as HTMLElement[];
    stepCards.forEach((card, index) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );

      // Hover animations
      card.addEventListener('mouseenter', () => {
        setActiveStep(index);
        gsap.to(card, { y: -5, duration: 0.3, ease: 'power2.out' });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      ref={sectionRef} 
      id="our-process"
      className="bg-gradient-to-b from-dark-800 to-dark-900 py-12 md:py-12 lg:py-12 relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Enhanced Structured Data for the Section */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'UI/UX Design and Branding Process',
            description: 'A comprehensive step-by-step guide to Intention Infoservice\'s UI/UX design and branding process, ensuring user-centered designs and cohesive brand identities.',
            totalTime: 'P3M',
            estimatedCost: {
              '@type': 'MonetaryAmount',
              currency: 'USD',
              value: 'Varies based on project scope'
            },
            step: steps.map((step, index) => ({
              '@type': 'HowToStep',
              position: index + 1,
              name: step.title,
              text: step.description,
            })),
          })
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,160,227,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-[10%] md:px-[10%] relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            id="process-heading"
            className="process-headline text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
            variants={cardVariants}
          >
            Our UI/UX Design & Branding Process: A Strategic Workflow
          </motion.h2>
          
          <motion.p
            className="process-tagline text-xl md:text-2xl text-brand-blue font-semibold mb-6"
            variants={cardVariants}
          >
            From Concept to Launch: Delivering Exceptional Digital Experiences in 2025
          </motion.p>
          
          <motion.p
            className="process-description text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={cardVariants}
          >
            Our user-centered design workflow ensures every UI/UX design and branding project is a success. We combine creativity, user insights, and strategic thinking to create experiences that captivate, convert, and build lasting brand loyalty.
          </motion.p>
        </motion.div>

        {/* Process Steps - Enhanced Layout */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-brand-blue to-transparent h-full opacity-30"></div>
          
          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`step-card relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                variants={cardVariants}
              >
                {/* Step Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                  <div className="bg-gradient-to-br from-dark-800 to-dark-700 text-left p-6 lg:p-8 rounded-2xl border border-gray-700 hover:border-brand-blue transition-all duration-500 shadow-lg hover:shadow-xl">
                    {/* Step Number and Duration */}
                    <div className={`flex items-center justify-between mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-br from-brand-blue to-brand-blue p-3 rounded-full">
                          {step.icon}
                        </div>
                        <span className="text-2xl font-bold text-brand-blue">{step.step}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <FaClock className="mr-2" />
                        {step.duration}
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm lg:text-base text-gray-300 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-400">Key Deliverables:</h4>
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center text-sm text-gray-300">
                            <FaCheckCircle className="mr-3 text-brand-blue text-xs" />
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node - Hidden on mobile */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-brand-blue rounded-full border-4 border-dark-900 z-10 shadow-lg">
                  <div className="w-full h-full bg-brand-blue rounded-full animate-pulse"></div>
                </div>

                {/* Visual Element */}
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 rounded-full flex items-center justify-center border border-brand-blue/30">
                    <div className="text-4xl lg:text-5xl text-brand-blue">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 lg:p-12 border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Start Your Design Journey?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom roadmap that aligns with your goals and timeline.
            </p>
            <Button
              size="lg"
              className="btn btn-primary hover:bg-brand-blue hover:shadow-glow-md transition-all duration-300 transform hover:-translate-y-1"
              icon={<FaArrowRight />}
              iconPosition="right"
              href="/contact-us"
              aria-label="Start your UI/UX design and branding project with us"
            >
              Start Your Project Today
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Performance optimization: Preload next section */}
      <link rel="prefetch" href="#why-choose-us" />
    </section>
  );
}


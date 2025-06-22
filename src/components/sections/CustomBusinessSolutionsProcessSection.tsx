
'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '@/components/ui/Button';
import {
  FaArrowRight,
  FaLightbulb,
  FaDraftingCompass,
  FaCode,
  FaVial,
  FaRocket,
} from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CustomBusinessSolutionsProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Headline and description animation
    tl.fromTo(
      '.process-headline',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo(
      '.process-description',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    );

    // Process steps animation
    const processSteps = gsap.utils.toArray('.process-step') as HTMLElement[];
    processSteps.forEach((step, index) => {
      tl.fromTo(
        step,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power2.out',
        },
        '-=0.3'
      );
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const steps = [
    {
      title: 'Discovery & Needs Analysis',
      description: 'We begin with a thorough discovery and needs analysis, identifying your goals, challenges, and technical requirements to create a tailored software roadmap.',
      icon: <FaLightbulb className="w-8 h-8 text-brand-blue" />,
    },
    {
      title: 'Solution Design & Architecture',
      description: 'Our expert team designs a robust and scalable architecture, focusing on user experience, system integration, and leveraging the latest technologies like AI and cloud.',
      icon: <FaDraftingCompass className="w-8 h-8 text-brand-blue" />,
    },
    {
      title: 'Development & Integration',
      description: 'We develop your custom solution using agile methodologies, ensuring clean code, seamless integration with existing systems, and continuous collaboration.',
      icon: <FaCode className="w-8 h-8 text-brand-blue" />,
    },
    {
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing and quality assurance are performed to ensure the software is secure, high-performing, and bug-free, meeting all functional and non-functional requirements.',
      icon: <FaVial className="w-8 h-8 text-brand-blue" />,
    },
    {
      title: 'Deployment & Ongoing Support',
      description: 'We handle the seamless deployment of your solution and provide comprehensive ongoing support, maintenance, and updates to ensure long-term success and adaptability.',
      icon: <FaRocket className="w-8 h-8 text-brand-blue" />,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      id="process"
      className="relative bg-gradient-to-b from-dark-900 to-dark-950 py-12 md:py-12 lg:py-12 overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Structured Data for HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'Custom Software Development Process',
            description: 'A step-by-step guide to our custom software development process, from discovery to deployment and support.',
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

      <div className="container mx-auto px-[5%] md:px-[10%] relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            id="process-heading"
            className="process-headline text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Our Streamlined Development{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-blue bg-clip-text text-transparent">
              Process
            </span>
          </motion.h2>
          <motion.p
            className="process-description text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            We follow a proven agile methodology to deliver high-quality, tailored software solutions that align perfectly with your business objectives.
          </motion.p>
        </motion.div>

        {/* Process Steps Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          {/* Vertical Line for larger screens */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700 rounded-full">
            <motion.div
              className="h-full w-full bg-brand-blue origin-top"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`process-step flex items-start gap-6 ${index % 2 === 0 ? 'lg:pr-20' : 'lg:pl-20 lg:justify-end lg:text-right'}`}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className={`flex-shrink-0 ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                <div className="w-16 h-16 rounded-full bg-dark-700 flex items-center justify-center border-2 border-brand-blue shadow-lg">
                  {step.icon}
                </div>
              </div>
              <div className={`${index % 2 === 0 ? '' : 'lg:order-1'}`}>
                <h3 className="text-2xl font-bold text-white mb-2">
                  <span className="text-brand-blue">{`0${index + 1}.`}</span> {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="btn btn-primary hover:bg-brand-blue hover:shadow-glow-md transition-all duration-300"
              icon={<FaArrowRight />}
              iconPosition="right"
              href="/contact-us"
              aria-label="Start your custom software project today"
            >
              Start Your Project Today
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Performance optimization: Preload next section */}
      <link rel="prefetch" href="#why-choose-us" />
    </section>
  );
}



'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '@/components/ui/Button';
import {
  FaArrowRight,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaCloud,
  FaLaptopCode,
  FaStar,
} from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CustomBusinessSolutionsWhyChooseUsSection() {
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
      '.why-choose-us-headline',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo(
      '.why-choose-us-description',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    );

    // Reason cards animation (staggered)
    const reasonCards = gsap.utils.toArray('.reason-card') as HTMLElement[];
    reasonCards.forEach((card, index) => {
      tl.fromTo(
        card,
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

  const reasons = [
    {
      title: 'Tailored Solutions',
      description: 'We craft bespoke software that perfectly aligns with your unique business processes and goals, ensuring maximum relevance and impact.',
      icon: <FaLightbulb className="w-10 h-10 text-brand-blue" />,
    },
    {
      title: 'Expert Team',
      description: 'Our team comprises seasoned developers, designers, and strategists with deep expertise in various technologies and industries.',
      icon: <FaUsers className="w-10 h-10 text-brand-blue" />,
    },
    {
      title: 'Agile Methodology',
      description: 'We adopt an agile development approach, ensuring flexibility, transparency, and rapid iteration to deliver results efficiently.',
      icon: <FaLaptopCode className="w-10 h-10 text-brand-blue" />,
    },
    {
      title: 'Scalability & Future-Proofing',
      description: 'Our solutions are built with scalability in mind, designed to grow with your business and adapt to future technological advancements.',
      icon: <FaChartLine className="w-10 h-10 text-brand-blue" />,
    },
    {
      title: 'Robust Security',
      description: 'Security is paramount. We implement industry-leading practices to protect your data and ensure the integrity of your custom applications.',
      icon: <FaShieldAlt className="w-10 h-10 text-brand-blue" />,
    },
    {
      title: 'Cloud Integration',
      description: 'Leverage the power of the cloud with our expertise in cloud-native development and seamless integration with leading cloud platforms.',
      icon: <FaCloud className="w-10 h-10 text-brand-blue" />,
    },
    {
      title: 'Dedicated Support',
      description: 'From initial consultation to post-deployment support, we offer dedicated assistance to ensure your solution runs smoothly and efficiently.',
      icon: <FaHandshake className="w-10 h-10 text-brand-blue" />,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateX: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      id="why-choose-us"
      className="relative bg-gradient-to-b from-dark-950 to-dark-800 py-12 md:py-12 lg:py-12 overflow-hidden"
      aria-labelledby="why-choose-us-heading"
    >
      {/* Structured Data for AboutPage */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'Why Choose Intention Infoservice for Custom Business Solutions',
            description: 'Discover the key reasons to partner with Intention Infoservice for your custom software development needs, including tailored solutions, expert team, agile methodology, and robust security.',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: reasons.map((reason, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'Thing',
                  name: reason.title,
                  description: reason.description,
                },
              })),
            },
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
            id="why-choose-us-heading"
            className="why-choose-us-headline text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Why Choose Us for Your Custom Business{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-blue bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h2>
          <motion.p
            className="why-choose-us-description text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Partner with a team dedicated to delivering innovative, scalable, and secure software solutions that drive real business value.
          </motion.p>
        </motion.div>

        {/* Reasons Grid - New Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="reason-card group relative bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl p-8 border border-gray-700 hover:border-brand-blue transition-all duration-300 hover:shadow-glow-sm flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors duration-300">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {reason.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
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
              aria-label="Get a free consultation for custom business solutions"
            >
              Get a Free Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Performance optimization: Preload next section */}
      <link rel="prefetch" href="#cta" />
    </section>
  );
}



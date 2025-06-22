
'use client';
import { motion, useInView } from 'framer-motion';
import Button from '@/components/ui/Button';
import {
  FaArrowRight,
  FaChartLine,
  FaUsers,
  FaLaptopCode,
  FaGlobe,
  FaShieldAlt,
  FaRocket,
  FaLightbulb,
  FaHandshake,
  FaStar,
  FaTrophy,
  FaClock,
  FaDollarSign,
  FaClipboardCheck
} from 'react-icons/fa';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DigitalMarketingWhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const reasons = [
    {
      title: 'Proven Results & ROI',
      description: 'Our data-driven digital marketing campaigns consistently deliver measurable success and high ROI for clients across diverse industries.',
      icon: <FaChartLine className="w-8 h-8 text-white" aria-hidden="true" />,
      keywords: ['proven results', 'ROI', 'data-driven marketing', 'measurable success']
    },
    {
      title: 'Customized Strategies',
      description: 'We don\'t believe in one-size-fits-all. Our team crafts bespoke digital marketing strategies perfectly aligned with your unique business goals.',
      icon: <FaLightbulb className="w-8 h-8 text-white" aria-hidden="true" />,
      keywords: ['custom strategies', 'tailored solutions', 'business goals', 'personalized marketing']
    },
    {
      title: 'Expert & Dedicated Team',
      description: 'Benefit from our highly skilled and passionate team of digital marketing specialists, bringing years of experience and cutting-edge knowledge to every project.',
      icon: <FaUsers className="w-8 h-8 text-white" aria-hidden="true" />,
      keywords: ['expert team', 'dedicated specialists', 'experienced professionals', 'cutting-edge knowledge']
    },
    {
      title: 'Transparent Reporting',
      description: 'Gain full visibility into your campaign performance with clear, comprehensive, and regular reports, ensuring you\'re always informed and in control.',
      icon: <FaClipboardCheck className="w-8 h-8 text-white" aria-hidden="true" />,
      keywords: ['transparent reporting', 'performance tracking', 'analytics', 'clear insights']
    },
    {
      title: 'Innovative & Adaptive Approach',
      description: 'We stay ahead of digital trends, continuously adapting our strategies and leveraging the latest technologies to keep your brand competitive and thriving.',
      icon: <FaRocket className="w-8 h-8 text-white" aria-hidden="true" />,
      keywords: ['innovative approach', 'adaptive strategies', 'digital trends', 'latest technologies']
    },
    {
      title: 'Client-Centric Partnership',
      description: 'Your success is our priority. We foster strong, collaborative partnerships, working closely with you to achieve your digital marketing objectives.',
      icon: <FaHandshake className="w-8 h-8 text-white" aria-hidden="true" />,
      keywords: ['client-centric', 'collaborative partnership', 'customer success', 'digital marketing objectives']
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(
      '.why-choose-headline',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        '.why-choose-subheading',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        '.why-choose-description',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        '.reason-card',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.7, stagger: 0.1, ease: 'back.out(1.7)' },
        '-=0.3'
      );

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
      id="why-choose-us"
      className="bg-gradient-to-b from-dark-800 to-dark-900 py-12 md:py-12 lg:py-12 relative overflow-hidden"
      aria-labelledby="why-choose-heading"
    >
      {/* Enhanced Structured Data for the Section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Why Choose Intention Infoservice for Digital Marketing',
            description: 'Discover the compelling reasons to partner with Intention Infoservice for your digital marketing needs, including proven results, customized strategies, and an expert team.',
            itemListElement: reasons.map((reason, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Thing',
                name: reason.title,
                description: reason.description,
                keywords: reason.keywords.join(', '),
              },
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
            id="why-choose-heading"
            className="why-choose-headline ttext-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight"
            variants={cardVariants}
          >
            Why We’re Your Trusted Digital Marketing Partner
          </motion.h2>

          <motion.p
            className="why-choose-subheading text-lg text-brand-blue font-semibold mb-6"
            variants={cardVariants}
          >
            Unlocking Your Brand’s Full Potential in the Digital Landscape
          </motion.p>

          <motion.p
            className="why-choose-description text-base text-gray-400 max-w-3xl mx-auto"
            variants={cardVariants}
          >
            Partner with us for unparalleled expertise, innovative strategies, and a commitment to delivering measurable results that drive your business forward.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="reason-card group relative p-6 lg:p-8 rounded-2xl border shadow-lg transition-all duration-500 cursor-pointer bg-gradient-to-br from-dark-800 to-dark-700 border-gray-700 hover:border-brand-blue hover:shadow-glow-sm"
              variants={cardVariants}
              role="button"
              tabIndex={0}
              aria-label={`Learn more about ${reason.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  // Handle keyboard interaction, e.g., navigate to a detail page or open a modal
                  console.log(`Selected ${reason.title}`);
                }
              }}
            >
              {/* Card Header */}
              <div className="flex flex-col items-center mb-6">
                <div className="mb-4 p-4 rounded-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl bg-gradient-to-br from-brand-blue to-brand-blue text-white">
                  {reason.icon}
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white text-center transition-colors duration-500 leading-tight">
                  {reason.title}
                </h3>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-600 mb-4 transition-colors duration-500 group-hover:border-gray-500" />

              {/* Card Body */}
              <p className="text-sm lg:text-base text-gray-300 text-center mb-6 transition-all duration-500 leading-relaxed">
                {reason.description}
              </p>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none bg-brand-blue" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 lg:p-12 border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Elevate Your Digital Presence?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your digital marketing needs and craft a strategy that delivers measurable results.
            </p>
            <Button
              size="lg"
              className="btn btn-primary hover:bg-brand-blue hover:shadow-glow-md transition-all duration-300 transform hover:-translate-y-1"
              icon={<FaArrowRight />}
              iconPosition="right"
              href="/contact-us"
              aria-label="Start your digital marketing project with us"
            >
              Get a Free Digital Marketing Consultation
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Performance optimization: Preload next section */}
      <link rel="prefetch" href="#faq" />
    </section>
  );
}



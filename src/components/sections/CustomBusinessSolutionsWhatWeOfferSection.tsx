'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '@/components/ui/Button';
import {
  FaArrowRight,
  FaCogs,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaRobot,
  FaNetworkWired,
  FaLaptopCode,
  FaMobile,
  FaUsers,
  FaLock
} from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CustomBusinessSolutionsWhatWeOfferSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    // Enhanced GSAP animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Service cards animation
    const serviceCards = gsap.utils.toArray('.service-card') as HTMLElement[];
    serviceCards.forEach((card, index) => {
      tl.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'back.out(1.7)',
        },
        index === 0 ? 0 : '-=0.4'
      );
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  const offerings = [
    {
      title: 'Custom CRM Development',
      description: 'Transform customer relationships with tailored CRM systems designed to increase sales efficiency by 40% and improve customer satisfaction through personalized experiences.',
      icon: <FaUsers className="w-8 h-8 text-brand-blue" />,
      features: ['Lead Management', 'Sales Pipeline', 'Customer Analytics', 'Integration Ready'],
      benefits: 'Boost sales conversion rates and customer retention'
    },
    {
      title: 'Enterprise ERP Solutions',
      description: 'Streamline business operations with comprehensive ERP systems that integrate all departments, reduce operational costs by 30%, and provide real-time business insights.',
      icon: <FaCogs className="w-8 h-8 text-brand-blue" />,
      features: ['Resource Planning', 'Financial Management', 'Supply Chain', 'Reporting Dashboard'],
      benefits: 'Optimize workflows and reduce operational overhead'
    },
    {
      title: 'AI-Powered Business Tools',
      description: 'Leverage artificial intelligence to automate decision-making, predict market trends, and enhance productivity with machine learning algorithms tailored to your industry.',
      icon: <FaRobot className="w-8 h-8 text-brand-blue" />,
      features: ['Predictive Analytics', 'Process Automation', 'Smart Insights', 'ML Integration'],
      benefits: 'Gain competitive advantage through intelligent automation'
    },
    {
      title: 'Cloud-Based Solutions',
      description: 'Scale your business with secure, flexible cloud applications that ensure 99.9% uptime, reduce infrastructure costs, and enable remote workforce collaboration.',
      icon: <FaCloud className="w-8 h-8 text-brand-blue" />,
      features: ['Scalable Architecture', 'Data Security', 'Remote Access', 'Cost Optimization'],
      benefits: 'Achieve flexibility and cost savings with cloud technology'
    },
    {
      title: 'Mobile Business Applications',
      description: 'Extend your business reach with custom mobile apps that engage customers, streamline field operations, and provide real-time access to critical business data.',
      icon: <FaMobile className="w-8 h-8 text-brand-blue" />,
      features: ['Cross-Platform', 'Offline Capability', 'Push Notifications', 'Secure Authentication'],
      benefits: 'Enhance customer engagement and operational mobility'
    },
    {
      title: 'Enterprise Security Solutions',
      description: 'Protect your business assets with comprehensive cybersecurity solutions including threat detection, data encryption, and compliance management systems.',
      icon: <FaShieldAlt className="w-8 h-8 text-brand-blue" />,
      features: ['Threat Detection', 'Data Encryption', 'Access Control', 'Compliance Management'],
      benefits: 'Ensure data protection and regulatory compliance'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="what-we-offer"
      className="relative bg-gradient-to-b from-dark-800 to-dark-900 py-12 md:py-12 lg:py-12"
      aria-labelledby="offerings-heading"
    >
      {/* Enhanced Structured Data for Services */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Custom Business Solutions Services',
            description: 'Comprehensive custom software development services for enterprises',
            itemListElement: offerings.map((offering, index) => ({
              '@type': 'Service',
              position: index + 1,
              name: offering.title,
              description: offering.description,
              provider: {
                '@type': 'Organization',
                name: 'Intention Infoservice'
              }
            }))
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
            id="offerings-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Custom Business Solutions We{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-blue bg-clip-text text-transparent">
              Deliver
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Transform your business operations with our comprehensive suite of custom software solutions designed to drive growth, efficiency, and competitive advantage in the digital age.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="service-card group relative bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl p-8 border border-gray-700 hover:border-brand-blue transition-all duration-300 hover:shadow-glow-sm"
            >
              {/* Icon */}
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {offering.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors duration-300">
                {offering.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {offering.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-brand-blue mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {offering.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="border-t border-gray-600 pt-4">
                <p className="text-sm text-brand-blue font-medium">
                  {offering.benefits}
                </p>
              </div>

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
              aria-label="Discuss your custom business solution requirements"
            >
              Discuss Your Requirements
            </Button>
          </motion.div>
          
          <p className="text-gray-400 mt-4 text-sm">
            Free consultation • Custom quote • 24/7 support
          </p>
        </motion.div>
      </div>

      {/* Performance optimization: Preload next section */}
      <link rel="prefetch" href="#process" />
    </section>
  );
}


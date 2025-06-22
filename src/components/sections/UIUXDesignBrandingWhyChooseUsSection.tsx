'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaLightbulb, 
  FaBullseye, 
  FaChartLine, 
  FaPalette, 
  FaHandshake, 
  FaRocket,
  FaCheckCircle,
  FaUsers,
  FaCogs
} from 'react-icons/fa';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function UIUXDesignBrandingWhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const reasons = [
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: 'Expertise & Experience in UI/UX Design',
      description: 'Our team comprises seasoned UI/UX designers and branding specialists with a proven track record of delivering exceptional results across diverse industries and cutting-edge technologies.',
      features: ['10+ years experience', 'Industry expertise', 'Latest design trends']
    },
    {
      icon: <FaBullseye className="text-4xl" />,
      title: 'User-Centric Design Approach',
      description: 'We prioritize your users above all. Our designs are meticulously crafted to enhance user satisfaction, improve usability, and drive meaningful engagement that converts visitors into customers.',
      features: ['User research focused', 'Conversion optimization', 'Accessibility first']
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: 'Data-Driven Design Decisions',
      description: 'We don\'t just design; we analyze and optimize. Our strategies are backed by thorough research, user testing, and performance metrics to ensure optimal outcomes and measurable results.',
      features: ['Analytics integration', 'A/B testing', 'Performance tracking']
    },
    {
      icon: <FaPalette className="text-4xl" />,
      title: 'Holistic Brand Solutions',
      description: 'From captivating visuals to compelling brand narratives, we offer end-to-end branding services that resonate with your target audience and foster lasting emotional connections.',
      features: ['Complete brand identity', 'Visual storytelling', 'Brand guidelines']
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: 'Collaborative Partnership Approach',
      description: 'Your vision is our blueprint. We work closely with you at every stage, ensuring transparency, incorporating your feedback, and delivering solutions that align perfectly with your business goals.',
      features: ['Regular communication', 'Feedback integration', 'Goal alignment']
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: 'Future-Proof Design Solutions',
      description: 'We design for tomorrow. Our solutions are scalable, adaptable, and built to evolve with emerging technologies and changing market trends, ensuring long-term relevance and growth.',
      features: ['Scalable architecture', 'Technology adaptable', 'Future-ready designs']
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    const cards = gsap.utils.toArray('.reason-card') as HTMLElement[];

    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50, scale: 0.95 },
        { 
          opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );

      const icon = card.querySelector('.reason-icon') as HTMLElement;
      const title = card.querySelector('.reason-title') as HTMLElement;
      const description = card.querySelector('.reason-description') as HTMLElement;

      // Enhanced hover animations
      card.addEventListener('mouseenter', () => {
        gsap.to(icon, { scale: 1.2, rotate: 10, duration: 0.3, ease: 'power2.out' });
        gsap.to(title, { color: '#00a0e3', duration: 0.3 });
        gsap.to(description, { y: -5, duration: 0.3 });
        gsap.to(card, { y: -10, duration: 0.3, ease: 'power2.out' });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(icon, { scale: 1, rotate: 0, duration: 0.3, ease: 'power2.out' });
        gsap.to(title, { color: '#ffffff', duration: 0.3 });
        gsap.to(description, { y: 0, duration: 0.3 });
        gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
      });
    });

    // Headline and tagline animation
    gsap.fromTo('.why-choose-headline', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );
    gsap.fromTo('.why-choose-tagline', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );
    gsap.fromTo('.why-choose-description', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
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
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
      className="bg-gradient-to-b from-dark-900 to-dark-800 py-12 md:py-12 lg:py-12 relative overflow-hidden"
      aria-labelledby="why-choose-heading"
    >
      {/* Enhanced Structured Data for the Section */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Intention Infoservice',
            description: 'Leading UI/UX design and branding agency delivering exceptional digital experiences',
            url: 'https://intentioninfoservice.com',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'UI/UX Design & Branding Services',
              itemListElement: reasons.map((reason, index) => ({
                '@type': 'Offer',
                position: index + 1,
                name: reason.title,
                description: reason.description,
              })),
            },
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
            className="why-choose-headline text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
            variants={cardVariants}
          >
            Why Choose Intention Infoservice for UI/UX Design & Branding?
          </motion.h2>
          
          <motion.p
            className="why-choose-tagline text-xl md:text-2xl text-brand-blue font-semibold mb-6"
            variants={cardVariants}
          >
            Partner with Us for Unparalleled Expertise and Commitment to Your Success
          </motion.p>
          
          <motion.p
            className="why-choose-description text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={cardVariants}
          >
            We combine deep industry expertise, user-centered design principles, and cutting-edge technology to deliver UI/UX design and branding solutions that drive real business results. Discover what sets us apart in the competitive digital landscape.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="reason-card group relative p-6 lg:p-8 rounded-2xl border shadow-lg transition-all duration-500 cursor-pointer bg-gradient-to-br from-dark-800 to-dark-700 border-gray-700 hover:border-brand-blue hover:shadow-glow-sm"
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              role="button"
              tabIndex={0}
              aria-label={`Learn more about ${reason.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  // Handle keyboard interaction
                  window.location.href = '/contact-us';
                }
              }}
            >
              {/* Card Header */}
              <div className="flex flex-col items-center mb-6">
                <div className="reason-icon mb-4 p-4 rounded-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl bg-gradient-to-br from-brand-blue to-brand-blue text-white">
                  {reason.icon}
                </div>
                <h3 className="reason-title text-lg lg:text-xl font-bold text-white text-center transition-colors duration-500 leading-tight">
                  {reason.title}
                </h3>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-600 mb-4 transition-colors duration-500 group-hover:border-gray-500" />

              {/* Card Body */}
              <p className="reason-description text-sm lg:text-base text-gray-300 text-center mb-6 transition-all duration-500 leading-relaxed">
                {reason.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {reason.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-xs lg:text-sm text-gray-400">
                    <FaCheckCircle className="mr-2 text-xs text-brand-blue" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none bg-brand-blue" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Benefits Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 lg:p-12 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            What You Get When You Choose Us
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="flex flex-col items-center text-center">
              <FaUsers className="text-3xl text-brand-blue mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Dedicated Team</h4>
              <p className="text-sm text-gray-300">A dedicated team of experts working exclusively on your project</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaCogs className="text-3xl text-brand-blue mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Agile Process</h4>
              <p className="text-sm text-gray-300">Flexible and iterative approach ensuring quick turnaround times</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaRocket className="text-3xl text-brand-blue mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Ongoing Support</h4>
              <p className="text-sm text-gray-300">Continuous support and maintenance to keep your designs fresh</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Performance optimization: Preload next section */}
      <link rel="prefetch" href="#faq" />
    </section>
  );
}


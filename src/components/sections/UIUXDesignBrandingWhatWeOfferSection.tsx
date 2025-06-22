'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/ui/Button';
import { 
  FaArrowRight, 
  FaLightbulb, 
  FaDraftingCompass, 
  FaSearch, 
  FaMobileAlt, 
  FaPalette, 
  FaChartLine, 
  FaCogs, 
  FaUsers,
  FaCheckCircle,
  FaStar
} from 'react-icons/fa';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function UIUXDesignBrandingWhatWeOfferSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    const cards = gsap.utils.toArray('.service-card') as HTMLElement[];

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

      const icon = card.querySelector('.service-icon') as HTMLElement;
      const title = card.querySelector('.service-title') as HTMLElement;
      const description = card.querySelector('.service-description') as HTMLElement;

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
    gsap.fromTo('.what-we-offer-headline', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );
    gsap.fromTo('.what-we-offer-tagline', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );
    gsap.fromTo('.what-we-offer-description', 
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

  const services = [
    {
      title: 'Strategic UI/UX Design Services 2025',
      description: 'Craft intuitive, visually stunning interfaces with our UI/UX design services, boosting user engagement by up to 35% and ensuring seamless digital experiences across all platforms.',
      icon: <FaLightbulb className="text-4xl" />,
      keywords: 'UI/UX design, user interface, user experience, intuitive design, digital experience',
      benefits: ['35% increase in user engagement', 'Responsive design', 'Accessibility compliant'],
      color: 'blue'
    },
    {
      title: 'Advanced Prototyping & Wireframing',
      description: 'Visualize your ideas with interactive prototypes and detailed wireframes, accelerating development cycles by 40% and validating concepts before coding.',
      icon: <FaDraftingCompass className="text-4xl" />,
      keywords: 'prototyping, wireframing, interactive mockups, concept validation, rapid prototyping',
      benefits: ['40% faster development', 'Risk reduction', 'Stakeholder alignment'],
      color: 'indigo'
    },
    {
      title: 'In-depth User Research & Usability Testing',
      description: 'Understand your audience with comprehensive user research and usability testing, ensuring optimal design solutions that meet real user needs and drive 25% higher satisfaction.',
      icon: <FaSearch className="text-4xl" />,
      keywords: 'user research, usability testing, user insights, audience understanding, design validation',
      benefits: ['25% higher user satisfaction', 'Data-driven decisions', 'Reduced bounce rate'],
      color: 'blue'
    },
    {
      title: 'Engaging Interaction Design for Apps',
      description: 'Enhance user engagement with seamless micro-interactions and animations, creating delightful and memorable experiences that increase app retention by 30%.',
      icon: <FaMobileAlt className="text-4xl" />,
      keywords: 'interaction design, micro-interactions, app design, animation, user engagement',
      benefits: ['30% higher retention', 'Memorable experiences', 'Smooth animations'],
      color: 'indigo'
    },
    {
      title: 'Cohesive Brand Identity Development',
      description: 'Craft a powerful brand identity with logos, typography, and color schemes that reflect your vision, resonate with your audience, and build lasting brand loyalty.',
      icon: <FaPalette className="text-4xl" />,
      keywords: 'brand identity, logo design, typography, color palette, brand guidelines, brand loyalty',
      benefits: ['Stronger brand recognition', 'Consistent messaging', 'Emotional connection'],
      color: 'blue'
    },
    {
      title: 'Data-Driven Brand Strategy Solutions',
      description: 'Develop a strategic roadmap for brand positioning and messaging, ensuring your brand stands out in a competitive market and achieves measurable business objectives.',
      icon: <FaChartLine className="text-4xl" />,
      keywords: 'brand strategy, brand positioning, market analysis, competitive advantage, brand messaging',
      benefits: ['Market differentiation', 'Clear positioning', 'ROI tracking'],
      color: 'indigo'
    },
    {
      title: 'Compelling Visual Storytelling',
      description: 'Connect emotionally with your audience through visual storytelling that enhances your brand\'s narrative, making your message unforgettable and increasing engagement by 45%.',
      icon: <FaUsers className="text-4xl" />,
      keywords: 'visual storytelling, brand narrative, emotional connection, brand communication, impactful design',
      benefits: ['45% more engagement', 'Emotional resonance', 'Brand memorability'],
      color: 'blue'
    },
    {
      title: 'Scalable Design Systems & Guidelines',
      description: 'Build scalable design systems that integrate UI/UX and branding for consistent experiences across all platforms, reducing design debt by 60% and streamlining development.',
      icon: <FaCogs className="text-4xl" />,
      keywords: 'design systems, brand consistency, UI kit, component library, scalable design, design guidelines',
      benefits: ['60% less design debt', 'Faster development', 'Brand consistency'],
      color: 'indigo'
    },
  ];

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
      id="what-we-offer"
      className="bg-gradient-to-b from-dark-900 to-dark-800 py-12 md:py-12 lg:py-12 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Enhanced Structured Data for the Section */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'UI/UX Design & Branding Services',
            description: 'Comprehensive UI/UX design and branding services for digital transformation',
            itemListElement: services.map((service, index) => ({
              '@type': 'Service',
              position: index + 1,
              name: service.title,
              description: service.description,
              provider: {
                '@type': 'Organization',
                name: 'Intention Infoservice',
                url: 'https://intentioninfoservice.com'
              },
              keywords: service.keywords,
              offers: {
                '@type': 'Offer',
                description: `Professional ${service.title.toLowerCase()} services`,
                priceRange: '$$'
              }
            })),
          })
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,160,227,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-[5%] md:px-[10%] relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            id="services-heading"
            className="what-we-offer-headline text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
            variants={cardVariants}
          >
            Comprehensive UI/UX Design & Branding Services
          </motion.h2>
          
          <motion.p
            className="what-we-offer-tagline text-xl md:text-2xl text-brand-blue font-semibold mb-6"
            variants={cardVariants}
          >
            From Startups to Enterprises, We Deliver User-Centered Design Solutions
          </motion.p>
          
          <motion.p
            className="what-we-offer-description text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={cardVariants}
          >
            Our UI/UX design and branding services combine creativity, strategy, and user insights to deliver experiences that captivate and convert. Explore our comprehensive offerings to see how we can elevate your digital presence and drive measurable results in 2025.
          </motion.p>

          {/* Key Stats */}
          {/* <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
            variants={cardVariants}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue mb-2">150+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-indigo mb-2">98%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue mb-2">35%</div>
              <div className="text-sm text-gray-400">Avg. Engagement Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-indigo mb-2">24/7</div>
              <div className="text-sm text-gray-400">Support Available</div>
            </div>
          </motion.div> */}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`service-card group relative p-6 lg:p-8 rounded-2xl border shadow-lg transition-all duration-500 cursor-pointer
                ${service.color === 'blue' 
                  ? 'bg-gradient-to-br from-dark-800 to-dark-700 border-gray-700 hover:border-brand-blue hover:shadow-glow-sm' 
                  : 'bg-gradient-to-br from-dark-700 to-dark-600 border-gray-600 hover:border-brand-indigo hover:shadow-glow-sm'
                }
              `}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              role="button"
              tabIndex={0}
              aria-label={`Learn more about ${service.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  // Handle keyboard interaction
                  window.location.href = '/contact-us';
                }
              }}
            >
              {/* Card Header */}
              <div className="flex flex-col items-center mb-6">
                <div
                  className={`service-icon mb-4 p-4 rounded-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl
                    ${service.color === 'blue' 
                      ? 'bg-gradient-to-br from-brand-blue to-brand-indigo text-white' 
                      : 'bg-gradient-to-br from-brand-indigo to-brand-blue text-white'
                    }
                  `}
                >
                  {service.icon}
                </div>
                <h3 className="service-title text-lg lg:text-xl font-bold text-white text-center transition-colors duration-500 leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-600 mb-4 transition-colors duration-500 group-hover:border-gray-500" />

              {/* Card Body */}
              <p className="service-description text-sm lg:text-base text-gray-300 text-center mb-4 transition-all duration-500 leading-relaxed">
                {service.description}
              </p>

              {/* Benefits */}
              <div className="space-y-2 mb-4">
                {service.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center text-xs lg:text-sm text-gray-400">
                    <FaCheckCircle className={`mr-2 text-xs ${service.color === 'blue' ? 'text-brand-blue' : 'text-brand-indigo'}`} />
                    {benefit}
                  </div>
                ))}
              </div>

              {/* Rating */}
              {/* <div className="flex items-center justify-center space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
                <span className="text-xs text-gray-400 ml-2">4.9/5</span>
              </div> */}

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none
                ${service.color === 'blue' ? 'bg-brand-blue' : 'bg-brand-indigo'}
              `} />
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
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how our UI/UX design and branding services can drive your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn btn-primary hover:bg-brand-blue hover:shadow-glow-md transition-all duration-300 transform hover:-translate-y-1"
                icon={<FaArrowRight />}
                iconPosition="right"
                href="/contact-us"
                aria-label="Get your free consultation for UI/UX design and branding services"
              >
                Get Free Consultation
              </Button>
              
            </div>
          </div>
        </motion.div>
      </div>

      {/* Performance optimization: Preload next section */}
      <link rel="prefetch" href="#our-process" />
    </section>
  );
}


'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function CustomBusinessSolutionsWhyChooseUsSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Ensure elements exist before applying animations
    const cards = gsap.utils.toArray('.card') as HTMLElement[];
    const lightFlares = gsap.utils.toArray('.light-flare') as HTMLElement[];
    const ctaButton = document.querySelector('.cta-button');

    if (cards.length > 0) {
      cards.forEach((card, index) => {
        // Initial animation for cards
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, delay: 1 + index * 0.2, ease: 'power2.out' }
        );

        // Parallax effect on scroll
        gsap.to(card, {
          y: () => index % 2 === 0 ? -20 : 20,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });

        // 3D Tilt effect on hover
        card.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const tiltX = (centerY - y) / 30;
          const tiltY = (x - centerX) / 30;

          gsap.to(card, {
            rotationX: tiltX,
            rotationY: tiltY,
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
          });
        });
      });
    }

    if (lightFlares.length > 0) {
      lightFlares.forEach((flare, index) => {
        gsap.fromTo(
          flare,
          { x: -500 },
          { x: 1500, duration: 5 + index * 0.5, repeat: -1, ease: 'linear', delay: index * 0.3 }
        );
      });
    }

    if (ctaButton) {
      gsap.fromTo(
        ctaButton,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 2.5, ease: 'power2.out' }
      );
      gsap.to(ctaButton, {
        scale: 1.05,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 3,
      });
    }

    return () => {
      // Cleanup event listeners
      cards.forEach((card) => {
        card.removeEventListener('mousemove', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const reasons = [
    {
      title: 'Expertise in Custom Software Development',
      description: 'Our team excels in custom software development for enterprises, delivering tailored CRM, ERP, and SaaS solutions to streamline operations and reduce costs by 15%.',
    },
    {
      title: 'Innovative UI/UX Design Services',
      description: 'We provide innovative UI/UX design services, creating user-centered interfaces that boost engagement by 20% through intuitive design and usability testing.',
    },
    {
      title: 'Comprehensive Digital Marketing Solutions',
      description: 'Our comprehensive digital marketing solutions, including SEO, PPC, and social media marketing, enhance your online presence and increase conversions by 25%.',
    },
    {
      title: 'Industry-Specific Software Solutions',
      description: 'We offer industry-specific software solutions for sectors like healthcare, finance, and retail, ensuring compliance (e.g., HIPAA, GDPR) and tailored functionality.',
    },
    {
      title: 'End-to-End Development and Support',
      description: 'From ideation to deployment, our end-to-end development and support services ensure your project succeeds, with ongoing maintenance and performance optimization.',
    },
    {
      title: 'Cloud & DevOps Expertise',
      description: 'Our cloud & DevOps expertise ensures scalable solutions with AWS, Azure, and CI/CD pipelines, improving deployment speed by 40%.',
    },
    {
      title: 'Branding & Creative Excellence',
      description: 'We deliver branding & creative excellence, crafting cohesive brand identities and engaging motion graphics to elevate your market presence.',
    },
    {
      title: 'Agile Project Management',
      description: 'Our agile project management approach ensures flexibility, transparency, and rapid delivery, aligning projects with your business goals.',
    },
  ];

  // Structured data for the section
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Intention Infoservice',
    url: 'https://intentioninfoservice.com',
    description: 'A leading custom software development company offering enterprise software solutions, innovative UI/UX design services, comprehensive digital marketing solutions, and industry-specific software solutions.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Digital Avenue',
      addressLocality: 'Tech City',
      postalCode: 'TC 12345',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Custom Business Solutions',
      itemListElement: reasons.map((reason, index) => ({
        '@type': 'Service',
        position: index + 1,
        name: reason.title,
        description: reason.description,
      })),
    },
  };

  return (
    <section className="relative bg-dark-950 py-16 md:py-24 overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Background with Animated Light Flares */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%">
          <line x1="-500" y1="20%" x2="1500" y2="20%" stroke="#00a0e3" strokeWidth="2" opacity="0.2" className="light-flare" />
          <line x1="-500" y1="40%" x2="1500" y2="40%" stroke="#393185" strokeWidth="2" opacity="0.2" className="light-flare" />
          <line x1="-500" y1="60%" x2="1500" y2="60%" stroke="#00a0e3" strokeWidth="2" opacity="0.2" className="light-flare" />
          <line x1="-500" y1="80%" x2="1500" y2="80%" stroke="#393185" strokeWidth="2" opacity="0.2" className="light-flare" />
        </svg>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Us as Your Custom Software Development Company
          </motion.h2>
          <motion.p
            className="text-lg text-brand-blue font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Delivering Tailored Enterprise Software Solutions for Growth
          </motion.p>
          <motion.p
            className="text-base text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            As a leading custom software development company, we specialize in delivering enterprise software solutions that drive digital transformation, enhance user experiences, and boost business growth. Partner with us for innovative UI/UX design, comprehensive digital marketing, and industry-specific solutions tailored to your needs.
          </motion.p>
        </div>
        {/* Interactive Glass Card Grid with 3D Tilt and Parallax Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="card backdrop-blur-sm bg-white/10 bg-gradient-to-br from-dark-900 to-dark-800 rounded-lg shadow-lg border border-[rgba(0,160,227,0.3)] hover:border-brand-blue hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] focus:ring-2 focus:ring-brand-blue transition-all duration-300 perspective-1000"
              role="button"
              tabIndex={0}
              aria-label={`Learn more about ${reason.title}`}
              style={{
                minHeight: '300px', // Use min-height to accommodate content
                width: '100%',
              }}
            >
              <div className="relative z-10 p-6 flex flex-col justify-center items-center min-h-80 text-center space-y-2">
                <h3 className="text-lg font-semibold text-white drop-shadow-sm">{reason.title}</h3>
                <p className="text-sm text-gray-300 drop-shadow-sm">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            size="lg"
            icon={<FaArrowRight />}
            iconPosition="right"
            href="/contact-us" // Updated href to /contact-us
            className="cta-button btn btn-primary hover:bg-brand-blue transition-all duration-300"
            ariaLabel="Partner with us today for custom business solutions"
          >
            Partner with Us Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
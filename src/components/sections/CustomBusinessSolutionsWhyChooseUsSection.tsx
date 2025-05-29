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
    const spheres = gsap.utils.toArray('.feature-sphere') as HTMLElement[];
    const connections = gsap.utils.toArray('.connection-line') as HTMLElement[];
    const particles = gsap.utils.toArray('.background-particle') as HTMLElement[];
    const ctaButton = document.querySelector('.cta-button');

    if (spheres.length > 0) {
      spheres.forEach((sphere, index) => {
        gsap.fromTo(
          sphere,
          { opacity: 0, scale: 0, rotationX: 0, rotationY: 0 },
          { opacity: 1, scale: 1, rotationX: 360, rotationY: 360, duration: 1, delay: 1 + index * 0.3, ease: 'power2.out' }
        );
        sphere.addEventListener('mouseenter', () => {
          gsap.to(sphere, {
            rotationX: 0,
            rotationY: 0,
            scale: 1.2,
            filter: 'drop-shadow(0 0 15px rgba(0, 160, 227, 0.5))',
            duration: 0.5,
          });
          gsap.to(sphere.querySelector('.description'), {
            opacity: 1,
            y: 0,
            duration: 0.5,
          });
        });
        sphere.addEventListener('mouseleave', () => {
          gsap.to(sphere, {
            rotationX: 360,
            rotationY: 360,
            scale: 1,
            filter: 'none',
            duration: 0.5,
            repeat: -1,
            ease: 'power2.out',
          });
          gsap.to(sphere.querySelector('.description'), {
            opacity: 0,
            y: 20,
            duration: 0.5,
          });
        });
        sphere.addEventListener('click', () => {
          gsap.to(sphere, {
            filter: 'drop-shadow(0 0 20px rgba(0, 160, 227, 0.7))',
            scale: 1.3,
            duration: 0.5,
            overwrite: 'auto',
          });
        });
      });
    }
    if (connections.length > 0) {
      connections.forEach((line, index) => {
        gsap.fromTo(
          line,
          { strokeDasharray: 100, strokeDashoffset: 100 },
          { strokeDashoffset: 0, duration: 1, delay: 1.5 + index * 0.2, ease: 'power2.out' }
        );
      });
    }
    if (particles.length > 0) {
      particles.forEach((particle, index) => {
        gsap.fromTo(
          particle,
          { opacity: 0.3, x: 0, y: 0 },
          { opacity: 0, x: gsap.utils.random(-30, 30), y: gsap.utils.random(-30, 30), duration: 3, repeat: -1, delay: index * 0.5, ease: 'power2.out' }
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
      {/* Subtle Background Gradient with Parallax Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,160,227,0.1)_0%,_rgba(0,0,0,0)_70%)] opacity-30 pointer-events-none" style={{ transform: 'translateZ(-10px)' }} />
      <div className="w-full px-[10%] relative z-10">
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
        {/* Floating Feature Spheres Layout */}
        <div className="relative flex justify-center items-center h-[600px]">
          {/* Background Particles */}
          <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
            <circle cx="10%" cy="20%" r="3" fill="#00a0e3" opacity="0.3" className="background-particle" />
            <circle cx="90%" cy="30%" r="3" fill="#00a0e3" opacity="0.3" className="background-particle" />
            <circle cx="20%" cy="80%" r="3" fill="#00a0e3" opacity="0.3" className="background-particle" />
            <circle cx="80%" cy="85%" r="3" fill="#00a0e3" opacity="0.3" className="background-particle" />
          </svg>
          {/* Spheres and Connections */}
          <svg width="800" height="600" viewBox="0 0 800 600" className="absolute">
            {/* Connecting Lines */}
            {reasons.map((_, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180); // 72 degrees apart for 5 spheres
              const radius = 200;
              const x = 400 + radius * Math.cos(angle);
              const y = 300 + radius * Math.sin(angle);
              return (
                <path
                  key={index}
                  d={`M400,300 Q${400 + (radius / 2) * Math.cos(angle + Math.PI / 4)},${300 + (radius / 2) * Math.sin(angle + Math.PI / 4)} ${x},${y}`}
                  fill="none"
                  stroke="#00a0e3"
                  strokeWidth="2"
                  opacity="0.7"
                  className="connection-line"
                />
              );
            })}
          </svg>
          {reasons.map((reason, index) => {
            const angle = (index * 72 - 90) * (Math.PI / 180); // 72 degrees apart for 5 spheres
            const radius = 200;
            const x = 400 + radius * Math.cos(angle);
            const y = 300 + radius * Math.sin(angle);
            return (
              <motion.div
                key={index}
                className="feature-sphere absolute flex flex-col items-center text-center"
                style={{ transform: `translate(${x - 80}px, ${y - 80}px)` }}
                role="button"
                tabIndex={0}
                aria-label={`Learn more about ${reason.title}`}
                onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
              >
                <svg width="160" height="160" viewBox="0 0 160 160">
                  <defs>
                    <radialGradient id={`sphereGradient-${index}`} cx="50%" cy="50%" r="50%">
                      <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#393185', stopOpacity: 1 }} />
                    </radialGradient>
                  </defs>
                  <circle cx="80" cy="80" r="80" fill={`url(#sphereGradient-${index})`} />
                  <circle cx="80" cy="80" r="60" fill="#393185" />
                  <circle cx="80" cy="80" r="40" fill="#00a0e3" />
                </svg>
                <div className="mt-4 w-48">
                  <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                  <p className="description text-sm text-gray-400 opacity-0 translate-y-5">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
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
            href="/contact"
            className="cta-button"
            ariaLabel="Partner with us today for custom business solutions"
          >
            Partner with Us Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
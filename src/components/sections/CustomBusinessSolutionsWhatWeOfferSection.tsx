'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function CustomBusinessSolutionsWhatWeOfferSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Ensure elements exist before applying animations
    const cards = gsap.utils.toArray('.service-card') as HTMLElement[];
    const icons = gsap.utils.toArray('.service-icon') as HTMLElement[];
    const ctaButton = document.querySelector('.cta-button');
    const particles = gsap.utils.toArray('.background-particle') as HTMLElement[];

    if (cards.length > 0) {
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, delay: index * 0.1, ease: 'power2.out' }
        );
      });
    }
    if (icons.length > 0) {
      icons.forEach((icon, index) => {
        gsap.to(icon, {
          scale: 1.2,
          filter: 'drop-shadow(0 0 5px rgba(0, 160, 227, 0.5))',
          duration: 0.3,
          delay: index * 0.1,
        });
      });
    }
    if (ctaButton) {
      gsap.fromTo(
        ctaButton,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.8, ease: 'power2.out' }
      );
      gsap.to(ctaButton, {
        scale: 1.05,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.3,
      });
    }
    if (particles.length > 0) {
      particles.forEach((particle, index) => {
        gsap.fromTo(
          particle,
          { opacity: 0.3, x: 0, y: 0 },
          { opacity: 0, x: gsap.utils.random(-50, 50), y: gsap.utils.random(-50, 50), duration: 3, repeat: -1, delay: index * 0.5, ease: 'power2.out' }
        );
      });
    }
  }, []);

  const offerings = [
    {
      title: 'Custom Software Development for Enterprises',
      description: 'Transform your operations with custom software development for enterprises, designed to meet unique business needs, enhance scalability, and increase efficiency by 30%.',
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="service-icon mb-4"
          role="img"
          aria-label="Icon representing custom software development"
        >
          <rect x="8" y="8" width="32" height="32" rx="4" fill="#00a0e3" opacity="0.7" />
          <path d="M16,32 L24,24 L32,32 M16,16 L24,24 L32,16" stroke="#393185" strokeWidth="2" />
          <title>Custom Software Development</title>
        </svg>
      ),
    },
    {
      title: 'Business Process Automation Software',
      description: 'Streamline workflows with business process automation software, reducing operational costs by 25% and boosting productivity through AI-powered solutions.',
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="service-icon mb-4"
          role="img"
          aria-label="Icon representing business process automation"
        >
          <circle cx="24" cy="24" r="16" fill="#00a0e3" opacity="0.7" />
          <path d="M24,12 L24,24 L36,24 M24,12 L24,24 L12,24" stroke="#393185" strokeWidth="2" />
          <title>Business Process Automation</title>
        </svg>
      ),
    },
    {
      title: 'Data Analytics Solutions for Decision-Making',
      description: 'Gain actionable insights with data analytics solutions for decision-making, empowering your business with cloud-based software to drive informed strategies.',
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="service-icon mb-4"
          role="img"
          aria-label="Icon representing data analytics solutions"
        >
          <rect x="8" y="8" width="32" height="32" rx="4" fill="#00a0e3" opacity="0.7" />
          <path d="M12,36 L18,24 L24,32 L30,20 L36,28" fill="none" stroke="#393185" strokeWidth="2" />
          <title>Data Analytics Solutions</title>
        </svg>
      ),
    },
    {
      title: 'E-Commerce Solutions for Businesses',
      description: 'Build custom e-commerce solutions for businesses, increasing conversions by 20% with seamless payment gateways and inventory management.',
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="service-icon mb-4"
          role="img"
          aria-label="Icon representing e-commerce solutions"
        >
          <rect x="8" y="8" width="32" height="32" rx="4" fill="#00a0e3" opacity="0.7" />
          <path d="M12,36 Q24,24 36,36 M12,12 H36" stroke="#393185" strokeWidth="2" />
          <title>E-Commerce Solutions</title>
        </svg>
      ),
    },
    {
      title: 'UI/UX Design Services',
      description: 'Elevate user experiences with UI/UX design services, creating intuitive interfaces that boost engagement through user-centered design.',
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="service-icon mb-4"
          role="img"
          aria-label="Icon representing UI/UX design services"
        >
          <circle cx="24" cy="24" r="16" fill="#00a0e3" opacity="0.7" />
          <path d="M24,12 Q24,24 36,24 Q24,24 24,36" fill="none" stroke="#393185" strokeWidth="2" />
          <title>UI/UX Design Services</title>
        </svg>
      ),
    },
    {
      title: 'Digital Marketing Solutions',
      description: 'Drive online growth with digital marketing solutions, including SEO, PPC, and social media strategies to enhance brand visibility.',
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="service-icon mb-4"
          role="img"
          aria-label="Icon representing digital marketing solutions"
        >
          <rect x="8" y="8" width="32" height="32" rx="4" fill="#00a0e3" opacity="0.7" />
          <path d="M24,12 V36 M12,24 H36" stroke="#393185" strokeWidth="2" />
          <title>Digital Marketing Solutions</title>
        </svg>
      ),
    },
    {
      title: 'Cloud & DevOps Solutions',
      description: 'Scale effortlessly with cloud & DevOps solutions, leveraging AWS and CI/CD pipelines to improve deployment speed by 40%.',
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="service-icon mb-4"
          role="img"
          aria-label="Icon representing cloud and DevOps solutions"
        >
          <path d="M12,24 Q24,12 36,24 T48,24" fill="none" stroke="#00a0e3" strokeWidth="4" opacity="0.7" />
          <path d="M24,12 V36 M12,24 H36" stroke="#393185" strokeWidth="2" />
          <title>Cloud & DevOps Solutions</title>
        </svg>
      ),
    },
    {
      title: 'Cybersecurity & Compliance Solutions',
      description: 'Protect your business with cybersecurity & compliance solutions, ensuring GDPR-compliant, secure software development.',
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="service-icon mb-4"
          role="img"
          aria-label="Icon representing cybersecurity and compliance solutions"
        >
          <path d="M24,12 Q24,8 20,8 Q16,8 16,12 V36 Q16,40 24,44 Q32,40 32,36 V12 Q32,8 28,8 Q24,8 24,12 Z" fill="#00a0e3" opacity="0.7" />
          <path d="M20,30 L24,34 L32,22" fill="none" stroke="#393185" strokeWidth="2" />
          <title>Cybersecurity & Compliance Solutions</title>
        </svg>
      ),
    },
  ];

  // Structured data for the offerings
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: offerings.map((offering, index) => ({
      '@type': 'Service',
      position: index + 1,
      name: offering.title,
      description: offering.description,
      provider: {
        '@type': 'Organization',
        name: 'Intention Infoservice',
        url: 'https://intentioninfoservice.com',
      },
    })),
  };

  return (
    <section className="relative bg-dark-900 py-16 md:py-24 overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/textures/grain.webp"
          alt="Grain texture background for visual effect"
          fill
          style={{ objectFit: 'cover' }}
          priority={false}
          quality={75}
        />
      </div>
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,160,227,0.05)_0%,_rgba(0,0,0,0)_70%)] opacity-30 pointer-events-none" />
      {/* Background Particles */}
      <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
        <circle cx="5%" cy="10%" r="3" fill="#00a0e3" opacity="0.3" className="background-particle" />
        <circle cx="95%" cy="15%" r="3" fill="#00a0e3" opacity="0.3" className="background-particle" />
        <circle cx="10%" cy="85%" r="3" fill="#00a0e3" opacity="0.3" className="background-particle" />
        <circle cx="90%" cy="90%" r="3" fill="#00a0e3" opacity="0.3" className="background-particle" />
      </svg>
      <div className="container mx-auto px-4 md:px-[10%] relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Custom Software Development Offerings for Enterprises
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              className="service-card bg-dark-950 rounded-lg p-8 shadow-lg text-center transition-all duration-300 hover:-translate-y-2 hover:border-2 hover:border-gradient-to-r hover:from-brand-indigo hover:to-brand-blue hover:shadow-[0_0_15px_rgba(0,160,227,0.5)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {offering.icon}
              <h3 className="text-lg font-semibold text-white mb-3">{offering.title}</h3>
              <p className="text-base text-gray-400">{offering.description}</p>
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
            href="/contact"
            className="cta-button"
            ariaLabel="Get a free quote for custom business solutions"
          >
            Get a Free Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
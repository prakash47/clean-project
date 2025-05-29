'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function CustomBusinessSolutionsCTASection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Ensure elements exist before applying animations
    const particles = gsap.utils.toArray('.particle') as HTMLElement[];
    const lightFlares = gsap.utils.toArray('.light-flare') as HTMLElement[];
    const ctaButton = document.querySelector('.cta-button');

    // Animate particles
    if (particles.length > 0) {
      particles.forEach((particle, index) => {
        gsap.fromTo(
          particle,
          { x: -50, opacity: 0 },
          {
            x: window.innerWidth + 50,
            opacity: () => Math.random() * 0.5 + 0.2,
            duration: 5 + index * 0.5,
            repeat: -1,
            ease: 'linear',
            delay: index * 0.3,
          }
        );
      });
    }

    // Animate light flares
    if (lightFlares.length > 0) {
      lightFlares.forEach((flare, index) => {
        gsap.fromTo(
          flare,
          { x: -500 },
          { x: 1500, duration: 5 + index * 0.5, repeat: -1, ease: 'linear', delay: index * 0.3 }
        );
      });
    }

    // Animate CTA button
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

  // Structured data for the CTA section
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CallToAction',
    name: 'Contact Us for Custom Software Solutions',
    description: 'Partner with us to drive digital transformation, enhance user experiences, and boost business growth with tailored enterprise software solutions.',
    url: 'https://intentioninfoservice.com/contact-us',
  };

  return (
    <section className="relative bg-gradient-to-r from-brand-indigo to-brand-blue py-16 md:py-24 overflow-hidden">
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
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="particle absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Transform Your Business with Custom Software Solutions?
        </motion.h2>
        <motion.p
          className="text-base text-gray-300 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Partner with us to drive digital transformation, enhance user experiences, and boost business growth with tailored enterprise software solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            size="lg"
            icon={<FaArrowRight />}
            iconPosition="right"
            href="/contact-us"
            className="cta-button btn btn-primary hover:bg-brand-blue hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] transition-all duration-300"
            ariaLabel="Let’s get started with custom business solutions"
          >
            Let’s Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
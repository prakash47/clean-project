
'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CustomBusinessSolutionsCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // State to store particle positions and opacities, initialized once using a function
  const [particles] = useState<Array<{ top: string; left: string; opacity: number }>>(() => {
    return Array.from({ length: 10 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.4 + 0.2, // Random opacity between 0.2 and 0.6
    }));
  });

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
      '.cta-headline',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo(
      '.cta-description',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(
      '.cta-button-wrapper',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.7)' },
      '-=0.3'
    );

    // Light flares animation
    const lightFlares = gsap.utils.toArray('.light-flare') as HTMLElement[];
    lightFlares.forEach((flare, index) => {
      gsap.fromTo(
        flare,
        { x: -500 },
        { x: window.innerWidth + 500, duration: 10 + index * 0.5, repeat: -1, ease: 'linear', delay: index * 0.3 }
      );
    });

    // Particles animation
    particles.forEach((particle, index) => {
      gsap.fromTo(
        `.particle-${index}`,
        { x: -50, opacity: 0 },
        {
          x: window.innerWidth + 50,
          opacity: particle.opacity,
          duration: 8 + index * 0.3,
          repeat: -1,
          ease: 'linear',
          delay: index * 0.5,
        }
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

  return (
    <section 
      ref={sectionRef}
      id="cta"
      className="relative bg-gradient-to-b from-dark-800 to-dark-950 py-12 md:py-12 lg:py-12 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Structured Data for CallToAction */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CallToAction',
            name: 'Ready to Transform Your Business with Custom Software Solutions?',
            description: 'Partner with us to drive digital transformation, enhance user experiences, and boost business growth with tailored enterprise software solutions.',
            actionOption: {
              '@type': 'ActionOption',
              name: 'Let’s Get Started',
              url: 'https://intentioninfoservice.com/contact-us',
            },
          })
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,160,227,0.05)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_rgba(0,160,227,0.05)_0deg,_transparent_60deg,_rgba(0,160,227,0.05)_120deg,_transparent_180deg)] pointer-events-none" />

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, index) => (
          <div
            key={index}
            className={`particle particle-${index} absolute w-2 h-2 bg-brand-blue rounded-full`}
            style={{
              top: particle.top,
              left: particle.left,
              opacity: 0, // Initial opacity for GSAP animation
            }}
          />
        ))}
      </div>

      {/* Animated Light Flares */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%">
          <line x1="-500" y1="20%" x2="1500" y2="20%" stroke="#00a0e3" strokeWidth="2" opacity="0.2" className="light-flare" />
          <line x1="-500" y1="40%" x2="1500" y2="40%" stroke="#393185" strokeWidth="2" opacity="0.2" className="light-flare" />
          <line x1="-500" y1="60%" x2="1500" y2="60%" stroke="#00a0e3" strokeWidth="2" opacity="0.2" className="light-flare" />
          <line x1="-500" y1="80%" x2="1500" y2="80%" stroke="#393185" strokeWidth="2" opacity="0.2" className="light-flare" />
        </svg>
      </div>

      <div className="container mx-auto px-[5%] md:px-[10%] relative z-10 text-center">
        <motion.h2
          id="cta-heading"
          className="cta-headline text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
          variants={itemVariants}
        >
          Ready to Transform Your Business with{' '}
          <span className="bg-gradient-to-r from-brand-blue to-brand-blue bg-clip-text text-transparent">
            Custom Software Solutions?
          </span>
        </motion.h2>
        <motion.p
          className="cta-description text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          variants={itemVariants}
        >
          Partner with us to drive digital transformation, enhance user experiences, and boost business growth with tailored enterprise software solutions.
        </motion.p>
        <motion.div
          className="cta-button-wrapper inline-block"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="btn btn-primary hover:bg-brand-blue hover:shadow-glow-md transition-all duration-300"
            icon={<FaArrowRight />}
            iconPosition="right"
            href="/contact-us"
            aria-label="Let’s get started with custom business solutions"
          >
            Let’s Get Started
          </Button>
        </motion.div>
      </div>

      {/* Performance optimization: Preload next section */}
      <link rel="prefetch" href="/contact-us" />
    </section>
  );
}



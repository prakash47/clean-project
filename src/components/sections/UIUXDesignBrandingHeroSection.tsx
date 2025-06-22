'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaPalette, FaMobile, FaDesktop, FaUsers, FaSearch } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function UIUXDesignBrandingHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    if (typeof window === 'undefined' || !sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        toggleActions: 'play none none none',
      },
    });

    // Enhanced animation sequence with better performance
    tl.fromTo(
      '.hero-headline',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        '.hero-tagline',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        '.hero-description',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        '.hero-cta-button',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.7)' },
        '-=0.3'
      )
      .fromTo(
        '.device-mockup',
        { opacity: 0, scale: 0.8, rotateX: 30 },
        { opacity: 1, scale: 1, rotateX: 0, duration: 1.2, ease: 'elastic.out(1, 0.5)' },
        '-=0.5'
      )
      .fromTo(
        '.pc-screen',
        { opacity: 0, scale: 0.8, rotateX: 30 },
        { opacity: 1, scale: 1, rotateX: 0, duration: 1.2, ease: 'elastic.out(1, 0.5)' },
        '-=0.8'
      )
      .fromTo(
        '.screen-element',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        '.pc-screen-element',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        '.brand-identity',
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        '.color-swatch',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo(
        '.typography-letter',
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo(
        '.wireframe-line',
        { strokeDasharray: 100, strokeDashoffset: 100 },
        { strokeDashoffset: 0, duration: 1, stagger: 0.1, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        '.user-research',
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        '.user-icon',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo(
        '.magnifier',
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo(
        '.uiux-icon',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo(
        '.background-element',
        { opacity: 0, scale: 0 },
        { opacity: 0.3, scale: 1, duration: 1, stagger: 0.2, ease: 'power3.out' },
        '-=0.5'
      );

    // Continuous animations for background elements and icons
    gsap.to('.user-icon', {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    gsap.to('.magnifier', {
      rotate: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    gsap.to('.uiux-icon', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.1,
    });
    gsap.to('.background-element', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.2,
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Animation variants for Framer Motion
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
    hidden: { opacity: 0, y: 20 },
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
      className="relative bg-gradient-to-b from-dark-950 to-dark-800 pt-12 md:pt-12 pb-12 md:pb-8 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Enhanced Structured Data for the Hero Section */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "UI/UX Design and Branding Services",
            "provider": {
              "@type": "Organization",
              "name": "Intention Infoservice",
              "url": "https://intentioninfoservice.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Global"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone
                "contactType": "customer service",
                "availableLanguage": "English"
              }
            },
            "description": "Elevate your brand with Intention Infoservice's expert UI/UX design and branding services in 2025. We create user-centered designs and cohesive brand identities that engage and convert. Drive up to 9,900% ROI with our strategic design solutions.",
            "offers": {
              "@type": "Offer",
              "url": "https://intentioninfoservice.com/contact-us",
              "description": "Get a free quote for UI/UX design and branding services to transform your digital presence.",
              "priceRange": "$$"
            },
            "keywords": "UI/UX design services, branding services 2025, user-centered design, brand identity development, conversion optimization, ROI UX, digital transformation",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150",
              "bestRating": "5"
            }
          })
        }}
      />

      {/* Enhanced Background with Performance Optimizations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,160,227,0.1)_0%,_rgba(57,49,133,0.05)_50%,_transparent_100%)] opacity-60 pointer-events-none" />
      <div className="absolute inset-0  pointer-events-none" />

      <div className="container mx-auto px-[5%] md:px-[10%] relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left: Enhanced Content Section */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left space-y-6"
            variants={itemVariants}
          >
            <motion.h1
              id="hero-heading"
              className="hero-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"

            >
              Elevate Your Brand with Expert UI/UX Design & Branding Services
            </motion.h1>
            
            <motion.p
              className="hero-tagline text-lg md:text-xl text-brand-blue mb-4 leading-relaxed"
              variants={itemVariants}
            >
              Craft Memorable Digital Experiences That Engage and Convert in 2025
            </motion.p>
            
            <motion.p
              className="hero-description text-md md:text-lg text-gray-500 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Transform your digital presence with our user-centered UI/UX design and branding services. We create intuitive designs and cohesive brand identities that drive engagement, boost conversions, and leave a lasting impression.
            </motion.p>

            
            
            <motion.div
              className="hero-cta-button flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="btn btn-primary hover:bg-brand-blue hover:shadow-glow-md transition-all duration-300 transform hover:-translate-y-1"
                icon={<FaArrowRight />}
                iconPosition="right"
                href="/contact-us"
                aria-label="Get your free quote today for UI/UX design and branding services"
              >
                Get Your Free Quote Today
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Enhanced SVG Illustration */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <svg
              width="500"
              height="400"
              viewBox="0 0 500 400"
              className="w-full max-w-[500px] h-auto"
              role="img"
              aria-label="Illustration showcasing UI/UX design and branding services including mobile and desktop mockups, brand identity elements, wireframes, user research tools, and design icons"
            >
              {/* Enhanced Background with Glowing Effects */}
              <defs>
                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 0.4 }} />
                  <stop offset="50%" style={{ stopColor: '#393185', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#00a0e3', stopOpacity: 0.2 }} />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background Elements */}
              <g className="background">
                <circle cx="50" cy="50" r="15" fill="url(#glowGradient)" className="background-element" filter="url(#glow)" />
                <circle cx="450" cy="50" r="15" fill="url(#glowGradient)" className="background-element" filter="url(#glow)" />
                <circle cx="50" cy="350" r="15" fill="url(#glowGradient)" className="background-element" filter="url(#glow)" />
                <circle cx="450" cy="350" r="15" fill="url(#glowGradient)" className="background-element" filter="url(#glow)" />
                <rect x="40" y="80" width="40" height="20" rx="5" fill="none" stroke="url(#glowGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                <rect x="420" y="80" width="40" height="20" rx="5" fill="none" stroke="url(#glowGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                <path d="M40,110 Q250,130 460,110" fill="none" stroke="url(#glowGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                <rect x="40" y="280" width="40" height="20" rx="5" fill="none" stroke="url(#glowGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                <rect x="420" y="280" width="40" height="20" rx="5" fill="none" stroke="url(#glowGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                <path d="M40,310 Q250,330 460,310" fill="none" stroke="url(#glowGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
              </g>

              {/* Mobile Device Mockup - Enhanced */}
              <g className="device-mockup" transform="translate(50, 50) rotate(-15) skewX(20)">
                <rect x="0" y="0" width="180" height="300" rx="15" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" filter="url(#softGlow)" />
                <rect x="10" y="10" width="160" height="280" fill="#1E293B" />
                {/* Enhanced Screen Elements */}
                <g className="screen-element" transform="translate(20, 20)">
                  <rect x="0" y="0" width="140" height="40" rx="5" fill="#00a0e3" filter="url(#softGlow)" />
                  <rect x="0" y="50" width="140" height="30" rx="5" fill="#393185" />
                  <rect x="0" y="90" width="140" height="30" rx="5" fill="#393185" />
                  <rect x="0" y="130" width="60" height="80" rx="5" fill="#00a0e3" />
                  <rect x="70" y="130" width="60" height="80" rx="5" fill="#393185" />
                  <circle cx="150" cy="260" r="12" fill="#00a0e3" filter="url(#softGlow)" />
                </g>
              </g>

              {/* Desktop Screen Mockup - Enhanced */}
              <g className="pc-screen" transform="translate(250, 50) rotate(15) skewX(-20)">
                <rect x="0" y="0" width="200" height="150" rx="10" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" filter="url(#softGlow)" />
                <rect x="10" y="10" width="180" height="130" fill="#1E293B" />
                <rect x="0" y="150" width="200" height="10" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
                <rect x="80" y="160" width="40" height="20" rx="5" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
                {/* Enhanced Dashboard Elements */}
                <g className="pc-screen-element" transform="translate(20, 20)">
                  <rect x="0" y="0" width="160" height="30" rx="5" fill="#00a0e3" filter="url(#softGlow)" />
                  <rect x="0" y="40" width="40" height="70" rx="5" fill="#393185" />
                  <rect x="50" y="40" width="110" height="30" rx="5" fill="#00a0e3" />
                  <rect x="50" y="80" width="50" height="20" rx="5" fill="#393185" />
                  <rect x="110" y="80" width="50" height="20" rx="5" fill="#393185" />
                </g>
              </g>

              {/* Brand Identity Section - Enhanced */}
              <g className="brand-identity" transform="translate(300, 220)">
                {/* Logo */}
                <g transform="translate(30, 0)">
                  <circle cx="20" cy="20" r="20" fill="#00a0e3" filter="url(#softGlow)" />
                  <text x="8" y="26" fill="#0F172A" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="bold">LOGO</text>
                </g>
                {/* Enhanced Color Palette */}
                <g transform="translate(0, 60)">
                  <rect x="0" y="0" width="60" height="15" rx="5" fill="#FF6B6B" className="color-swatch" filter="url(#softGlow)" />
                  <rect x="0" y="20" width="60" height="15" rx="5" fill="#4ECDC4" className="color-swatch" filter="url(#softGlow)" />
                  <rect x="0" y="40" width="60" height="15" rx="5" fill="#45B7D1" className="color-swatch" filter="url(#softGlow)" />
                </g>
                {/* Typography */}
                <g transform="translate(80, 60)">
                  <text x="0" y="20" fill="#00a0e3" fontSize="16" fontFamily="Arial, sans-serif" fontWeight="bold" className="typography-letter">Aa</text>
                  <text x="0" y="40" fill="#00a0e3" fontSize="12" fontFamily="Arial, sans-serif" className="typography-letter">Bb</text>
                </g>
              </g>

              {/* Wireframe Section - Enhanced */}
              <g className="wireframe" transform="translate(100, 250)">
                <rect x="0" y="0" width="100" height="60" rx="5" fill="none" stroke="#393185" strokeWidth="2" filter="url(#softGlow)" />
                <line x1="10" y1="10" x2="90" y2="10" stroke="#393185" strokeWidth="1" className="wireframe-line" />
                <line x1="10" y1="20" x2="90" y2="20" stroke="#393185" strokeWidth="1" className="wireframe-line" />
                <rect x="10" y="30" width="30" height="20" rx="3" fill="#00a0e3" filter="url(#softGlow)" />
                <rect x="50" y="30" width="40" height="20" rx="3" fill="#393185" />
              </g>

              {/* User Research Section - Enhanced */}
              <g className="user-research" transform="translate(20, 200)">
                <circle cx="20" cy="20" r="18" fill="#00a0e3" className="user-icon" filter="url(#softGlow)" />
                <path d="M30 30 L45 45 L60 30" stroke="#393185" strokeWidth="2" fill="none" className="magnifier" />
                <circle cx="45" cy="45" r="10" stroke="#393185" strokeWidth="2" fill="none" className="magnifier" filter="url(#softGlow)" />
              </g>

              {/* UI/UX Icons - Enhanced */}
              <g transform="translate(400, 10)">
                <circle cx="15" cy="15" r="10" fill="#00a0e3" className="uiux-icon" filter="url(#softGlow)" />
                <rect x="5" y="30" width="20" height="20" rx="3" fill="#393185" className="uiux-icon" filter="url(#softGlow)" />
                <path d="M5 60 L15 50 L25 60" fill="#00a0e3" className="uiux-icon" filter="url(#softGlow)" />
              </g>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Performance optimization: Preload next section */}
      <link rel="prefetch" href="#what-we-offer" />
    </section>
  );
}


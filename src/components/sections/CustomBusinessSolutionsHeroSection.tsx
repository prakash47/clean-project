'use client';
import { useEffect, useRef, useState } from 'react';
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
  FaGlobe,
  FaLock
} from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CustomBusinessSolutionsHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // State to store particle positions and opacities, initialized once using a function
  const [particles] = useState<Array<{ top: string; left: string; opacity: number }>>(() => {
    return Array.from({ length: 15 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.4 + 0.2, // Random opacity between 0.2 and 0.6
    }));
  });

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

    // Headline animation
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
      '.hero-cta',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.7)' },
      '-=0.3'
    );

    // Business solution icons animation
    const solutionIcons = gsap.utils.toArray('.solution-icon') as HTMLElement[];
    solutionIcons.forEach((icon, index) => {
      gsap.fromTo(
        icon,
        { opacity: 0, scale: 0.5, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'back.out(1.7)',
        }
      );
    });

    // Floating tech icons animation
    const floatingIcons = gsap.utils.toArray('.floating-icon') as HTMLElement[];
    floatingIcons.forEach((icon, index) => {
      gsap.fromTo(
        icon,
        { x: -100, opacity: 0 },
        {
          x: window.innerWidth + 100,
          opacity: 0.6,
          duration: 10 + index * 0.5,
          repeat: -1,
          ease: 'linear',
          delay: index * 0.4,
        }
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
  }, []); // Empty dependency array ensures this effect runs only once on mount

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
      id="custom-business-solutions-hero"
      className="relative bg-gradient-to-b from-dark-950 to-dark-800 py-12 md:py-12 lg:py-12 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Enhanced Structured Data for Hero Section */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Custom Business Solutions Development 2025',
            description: 'Transform your business with cutting-edge custom software solutions including CRM, ERP, AI-powered tools, and enterprise applications designed to drive growth and efficiency.',
            provider: {
              '@type': 'Organization',
              name: 'Intention Infoservice',
              url: 'https://intentioninfoservice.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://intentioninfoservice.com/images/logo.png'
              }
            },
            serviceType: 'Custom Software Development',
            areaServed: {
              '@type': 'Place',
              name: 'Worldwide'
            },
            offers: {
              '@type': 'Offer',
              description: 'Professional custom business solutions development with free consultation',
              availability: 'https://schema.org/InStock'
            }
          })
        }}
      />

      {/* Background Elements */}
      <div className="" />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
      />

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, index) => (
          <div
            key={index}
            className={`particle particle-${index} absolute w-4 h-4 bg-brand-blue rounded-full`}
            style={{
              top: particle.top,
              left: particle.left,
              opacity: 0, // Initial opacity for GSAP animation
            }}
          />
        ))}
      </div>

      {/* Floating Technology Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <FaCogs className="floating-icon absolute w-6 h-6 text-brand-blue" style={{ top: '15%', left: '5%', opacity: 0 }} />
        <FaDatabase className="floating-icon absolute w-5 h-5 text-brand-blue" style={{ top: '25%', left: '10%', opacity: 0 }} />
        <FaCloud className="floating-icon absolute w-7 h-7 text-brand-blue" style={{ top: '35%', left: '85%', opacity: 0 }} />
        <FaShieldAlt className="floating-icon absolute w-6 h-6 text-brand-blue" style={{ top: '65%', left: '8%', opacity: 0 }} />
        <FaRobot className="floating-icon absolute w-5 h-5 text-brand-blue" style={{ top: '75%', left: '90%', opacity: 0 }} />
        <FaNetworkWired className="floating-icon absolute w-6 h-6 text-brand-blue" style={{ top: '45%', left: '3%', opacity: 0 }} />
      </div>

      <div className="container mx-auto px-[5%] md:px-[10%] relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Left: Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h1
              id="hero-heading"
              className="hero-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
              variants={itemVariants}
              
            >
              Transform Your Business with Custom Solutions 
            </motion.h1>

            <motion.p
              className="hero-tagline text-lg md:text-xl text-brand-blue mb-4 leading-relaxed"
              variants={itemVariants}
            >
              Tailored Software Development for Modern Enterprises
            </motion.p>

            <motion.p
              className="hero-description text-md md:text-lg text-gray-500 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Elevate your business with cutting-edge custom software solutions including CRM systems, ERP platforms, AI-powered tools, and enterprise applications designed to drive growth, efficiency, and digital transformation in 2025.
            </motion.p>

            {/* Key Benefits */}
            {/* <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center lg:justify-start text-base text-gray-300">
                <FaChartLine className="mr-2 text-brand-blue" />
                Increased Efficiency
              </div>
              <div className="flex items-center justify-center lg:justify-start text-sm text-gray-300">
                <FaLock className="mr-2 text-brand-blue" />
                Enhanced Security
              </div>
              <div className="flex items-center justify-center lg:justify-start text-sm text-brand-blue">
                <FaGlobe className="mr-2 text-brand-blue" />
                Scalable Solutions
              </div>
            </motion.div> */}

            <motion.div
              className="hero-cta"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="btn btn-primary hover:bg-brand-blue hover:shadow-glow-md transition-all duration-300 transform hover:-translate-y-1"
                icon={<FaArrowRight />}
                iconPosition="right"
                href="/contact-us"
                aria-label="Get your custom solution consultation now"
              >
                Get Your Custom Solution Now
              </Button>
            </motion.div>
          </div>

          {/* Right: Business Solutions Visualization */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <svg 
                width="500" 
                height="400" 
                viewBox="0 0 500 500" 
                className="w-full max-w-[500px]" 
                aria-hidden="true"
              >
                {/* Background Glow */}
                <defs>
                  <radialGradient id="solutionGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 0.2 }} />
                    <stop offset="100%" style={{ stopColor: '#393185', stopOpacity: 0 }} />
                  </radialGradient>
                  <linearGradient id="solutionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#1f2937', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#374151', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                
                <circle cx="250" cy="250" r="240" fill="url(#solutionGlow)" />

                {/* Central Hub */}
                <g className="solution-icon">
                  <circle cx="250" cy="250" r="60" fill="url(#solutionGradient)" stroke="#00a0e3" strokeWidth="3" />
                  <circle cx="250" cy="250" r="50" fill="#00a0e3" opacity="0.3" />
                  <text x="250" y="260" fill="#fff" fontSize="22" textAnchor="middle" fontWeight="700">Core</text>
                </g>

                {/* CRM Solution */}
                <g className="solution-icon" transform="translate(150, 150)">
                  <circle cx="0" cy="0" r="40" fill="url(#solutionGradient)" stroke="#00a0e3" strokeWidth="3" />
                  <circle cx="0" cy="0" r="30" fill="#00a0e3" opacity="0.2" />
                  <text x="0" y="5" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="600">CRM</text>
                  <line x1="30" y1="30" x2="70" y2="70" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" />
                </g>

                {/* ERP Solution */}
                <g className="solution-icon" transform="translate(350, 150)">
                  <circle cx="0" cy="0" r="40" fill="url(#solutionGradient)" stroke="#00a0e3" strokeWidth="3" />
                  <circle cx="0" cy="0" r="30" fill="#00a0e3" opacity="0.2" />
                  <text x="0" y="5" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="600">ERP</text>
                  <line x1="-30" y1="30" x2="-70" y2="70" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" />
                </g>

                {/* AI Solutions */}
                <g className="solution-icon" transform="translate(150, 350)">
                  <circle cx="0" cy="0" r="40" fill="url(#solutionGradient)" stroke="#00a0e3" strokeWidth="3" />
                  <circle cx="0" cy="0" r="30" fill="#00a0e3" opacity="0.2" />
                  <text x="0" y="5" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="600">AI</text>
                  <line x1="30" y1="-30" x2="70" y2="-70" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" />
                </g>

                {/* Cloud Solutions */}
                <g className="solution-icon" transform="translate(350, 350)">
                  <circle cx="0" cy="0" r="40" fill="url(#solutionGradient)" stroke="#00a0e3" strokeWidth="3" />
                  <circle cx="0" cy="0" r="30" fill="#00a0e3" opacity="0.2" />
                  <text x="0" y="5" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="600">Cloud</text>
                  <line x1="-30" y1="-30" x2="-70" y2="-70" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" />
                </g>

                {/* Mobile Solutions */}
                <g className="solution-icon" transform="translate(100, 250)">
                  <circle cx="0" cy="0" r="40" fill="url(#solutionGradient)" stroke="#00a0e3" strokeWidth="3" />
                  <circle cx="0" cy="0" r="30" fill="#00a0e3" opacity="0.2" />
                  <text x="0" y="5" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="600">Mobile</text>
                  <line x1="25" y1="0" x2="65" y2="0" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" />
                </g>

                {/* Web Solutions */}
                <g className="solution-icon" transform="translate(400, 250)">
                  <circle cx="0" cy="0" r="40" fill="url(#solutionGradient)" stroke="#00a0e3" strokeWidth="3" />
                  <circle cx="0" cy="0" r="30" fill="#00a0e3" opacity="0.2" />
                  <text x="0" y="5" fill="#fff" fontSize="11" textAnchor="middle" fontWeight="600">Web</text>
                  <line x1="-25" y1="0" x2="-65" y2="0" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" />
                </g>

                {/* Security Layer */}
                <g className="solution-icon" transform="translate(250, 100)">
                  <circle cx="0" cy="0" r="40" fill="url(#solutionGradient)" stroke="#00a0e3" strokeWidth="3" />
                  <circle cx="0" cy="0" r="30" fill="#00a0e3" opacity="0.2" />
                  <text x="0" y="5" fill="#fff" fontSize="9" textAnchor="middle" fontWeight="600">Security</text>
                  <line x1="0" y1="25" x2="0" y2="65" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" />
                </g>

                {/* Analytics */}
                <g className="solution-icon" transform="translate(250, 400)">
                  <circle cx="0" cy="0" r="40" fill="url(#solutionGradient)" stroke="#00a0e3" strokeWidth="3" />
                  <circle cx="0" cy="0" r="30" fill="#00a0e3" opacity="0.2" />
                  <text x="0" y="5" fill="#fff" fontSize="9" textAnchor="middle" fontWeight="600">Analytics</text>
                  <line x1="0" y1="-25" x2="0" y2="-65" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" />
                </g>

                {/* Data Flow Indicators */}
                <g transform="translate(250, 250)">
                  <circle cx="60" cy="0" r="3" fill="#00a0e3" opacity="0.8">
                    <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="-60" cy="0" r="3" fill="#00a0e3" opacity="0.8">
                    <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" begin="0.5s" />
                  </circle>
                  <circle cx="0" cy="60" r="3" fill="#00a0e3" opacity="0.8">
                    <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" begin="1s" />
                  </circle>
                  <circle cx="0" cy="-60" r="3" fill="#00a0e3" opacity="0.8">
                    <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" begin="1.5s" />
                  </circle>
                </g>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Performance optimization: Preload next section */}
      <link rel="prefetch" href="#what-we-offer" />
    </section>
  );
}


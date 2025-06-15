'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaUsers, FaAward, FaGlobe, FaRocket } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function AboutHeroSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Enhanced animations for About Us hero section
    const digitalCanvas = document.querySelector('.digital-canvas');
    const laptopScreen = document.querySelector('.laptop-screen');
    const mobileDevice = document.querySelector('.mobile-device');
    const uiuxSketchpad = document.querySelector('.uiux-sketchpad');
    const marketingDashboard = document.querySelector('.marketing-dashboard');
    const maintenanceToolbox = document.querySelector('.maintenance-toolbox');
    const businessSolution = document.querySelector('.business-solution');
    const designElements = document.querySelectorAll('.design-element');
    const serviceLabels = document.querySelectorAll('.service-label');
    const trustIndicators = document.querySelectorAll('.trust-indicator');

    // Apply GSAP animations only if elements exist
    if (digitalCanvas) {
      gsap.fromTo(
        digitalCanvas,
        { opacity: 0, scale: 0.9, rotation: -5 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: 'power3.out' }
      );
    }
    
    if (laptopScreen) {
      gsap.fromTo(
        laptopScreen,
        { fillOpacity: 0, scale: 0.8 },
        { fillOpacity: 1, scale: 1, duration: 1, delay: 0.5, ease: 'power2.out' }
      );
    }
    
    if (mobileDevice) {
      gsap.fromTo(
        mobileDevice,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.7, ease: 'power2.out' }
      );
    }
    
    if (uiuxSketchpad) {
      gsap.fromTo(
        uiuxSketchpad,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.9, ease: 'power2.out' }
      );
    }
    
    if (marketingDashboard) {
      gsap.fromTo(
        marketingDashboard,
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 1.1, ease: 'back.out(1.7)' }
      );
    }
    
    if (maintenanceToolbox) {
      gsap.fromTo(
        maintenanceToolbox,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, delay: 1.3, ease: 'power2.out' }
      );
    }
    
    if (businessSolution) {
      gsap.fromTo(
        businessSolution,
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 1.5, ease: 'back.out(1.7)' }
      );
    }
    
    if (designElements.length > 0) {
      designElements.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0, rotation: 0 },
          { 
            opacity: 1, 
            scale: 1, 
            rotation: 360, 
            duration: 0.6, 
            delay: 1.7 + index * 0.1, 
            ease: 'back.out(1.7)' 
          }
        );
        
        // Continuous floating animation
        gsap.to(element, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1.7 + index * 0.1,
        });
      });
    }
    
    if (serviceLabels.length > 0) {
      serviceLabels.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, delay: 1.9 + index * 0.1, ease: 'power3.out' }
        );
        
        // Subtle pulsating animation
        gsap.to(element, {
          scale: 1.05,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1.9 + index * 0.1,
        });
      });
    }

    if (trustIndicators.length > 0) {
      trustIndicators.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: 2.1 + index * 0.15, ease: 'power3.out' }
        );
      });
    }
  }, []);

  // Enhanced structured data for the About Us page
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Intention Infoservice',
    'url': 'https://intentioninfoservice.com',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://intentioninfoservice.com/images/logo.webp',
      'width': 200,
      'height': 60,
    },
    'description': 'Leading software development company specializing in professional web development, mobile app development, UI/UX design, digital marketing, and custom business solutions worldwide since 2019.',
    'foundingDate': '2019',
    'numberOfEmployees': '10-50',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'IN',
      'addressRegion': 'Your State',
      'addressLocality': 'Your City',
    },
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'contactType': 'Customer Service',
        'url': 'https://intentioninfoservice.com/contact-us',
        'availableLanguage': 'English',
        'areaServed': 'Worldwide',
      },
      {
        '@type': 'ContactPoint',
        'contactType': 'Sales',
        'url': 'https://intentioninfoservice.com/get-quote',
        'availableLanguage': 'English',
        'areaServed': 'Worldwide',
      },
    ],
    'sameAs': [
      'https://www.linkedin.com/company/intention-infoservice',
      'https://twitter.com/intentioninfo',
      'https://www.facebook.com/intentioninfoservice',
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Software Development Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Web Development Services',
            'description': 'Professional web development and design services for businesses worldwide',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Mobile App Development',
            'description': 'Custom mobile application development for iOS and Android platforms',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Digital Marketing Services',
            'description': 'Comprehensive digital marketing strategies and SEO optimization',
          },
        },
      ],
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '150',
      'bestRating': '5',
      'worstRating': '1',
    },
  };

  return (
    <section className="relative bg-dark-950 pt-8 md:py-10 overflow-hidden" itemScope itemType="https://schema.org/Organization">
      {/* Enhanced structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-brand-indigo rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Subtle Grain Texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
      />
      
      <div className="w-full px-[8%] md:px-[10%] lg:px-[10%] relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Enhanced Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Company Badge */}
            {/* <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue/20 to-brand-indigo/20 backdrop-blur-sm px-4 py-2 rounded-full border border-brand-blue/30 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <FaAward className="text-brand-blue text-sm" />
              <span className="text-sm font-medium text-white">Award-Winning Software Development Company</span>
            </motion.div> */}

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              itemProp="name"
            >
              About{' '}
              <span className="text-transparent bg-gradient-to-r from-brand-blue to-brand-indigo bg-clip-text">
                Intention Infoservice
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                Your Trusted Digital Partner
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              itemProp="description"
            >
              Leading Software Development Company Delivering Innovation
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-md md:text-lg text-gray-500 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our proven approach to crafting exceptional web development solutions, 
              custom mobile applications, innovative UI/UX design, and comprehensive digital marketing 
              strategies that drive business growth worldwide in 2025.
            </motion.p>

            {/* Trust Indicators */}
            {/* <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="trust-indicator flex items-center gap-3 text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full flex items-center justify-center">
                  <FaUsers className="text-white text-lg" />
                </div>
                <div>
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
              </div>
              
              <div className="trust-indicator flex items-center gap-3 text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full flex items-center justify-center">
                  <FaAward className="text-white text-lg" />
                </div>
                <div>
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
              
              <div className="trust-indicator flex items-center gap-3 text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full flex items-center justify-center">
                  <FaGlobe className="text-white text-lg" />
                </div>
                <div>
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm text-gray-400">Countries Served</div>
                </div>
              </div>
            </motion.div> */}

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="btn btn-primary text-white font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 px-8 py-4 text-lg group"
                icon={<FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />}
                iconPosition="right"
                href="/contact-us"
                ariaLabel="Connect with our software development team today"
              >
                Connect with Us Today
              </Button>
              
              {/* <Button
                size="lg"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 px-8 py-4 font-semibold text-lg"
                icon={<FaRocket />}
                iconPosition="left"
                href="/portfolio"
                ariaLabel="View our software development portfolio"
              >
                View Our Work
              </Button> */}
            </motion.div>

            {/* Additional Trust Elements */}
            <motion.div
              className="mt-8 text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p className="text-base text-gray-500 mb-2">Trusted by businesses worldwide for digital transformation</p>
              <div className="flex justify-center lg:justify-start items-center gap-4 text-base text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Free Consultation
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  24/7 Support
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                  Guaranteed Results
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Enhanced Digital Canvas Illustration */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <svg
                width="550"
                height="450"
                viewBox="0 0 600 500"
                className="w-full max-w-[600px]"
                role="img"
                aria-label="Comprehensive illustration of Intention Infoservice's software development services including web development, mobile apps, UI/UX design, digital marketing, website maintenance, and custom business solutions"
              >
                {/* Enhanced Background */}
                <defs>
                  <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E293B" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0F172A" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="serviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00a0e3" />
                    <stop offset="100%" stopColor="#393185" />
                  </linearGradient>
                </defs>
                
                <rect x="0" y="0" width="600" height="500" fill="url(#bgGradient)" rx="30" stroke="#00a0e3" strokeWidth="3" />
                
                {/* Central Digital Canvas */}
                <g transform="translate(75, 75)" className="digital-canvas">
                  {/* Web Design: Enhanced Laptop */}
                  <g transform="translate(30, 30)">
                    <rect x="0" y="0" width="140" height="90" rx="8" fill="#0F172A" stroke="#00a0e3" strokeWidth="3" />
                    <rect x="15" y="15" width="110" height="70" fill="url(#serviceGradient)" className="laptop-screen" opacity="0.8" />
                    <rect x="25" y="25" width="90" height="5" fill="#fff" opacity="0.6" />
                    <rect x="25" y="35" width="70" height="3" fill="#fff" opacity="0.4" />
                    <rect x="25" y="42" width="80" height="3" fill="#fff" opacity="0.4" />
                    <rect x="0" y="90" width="140" height="15" fill="#0F172A" stroke="#00a0e3" strokeWidth="3" />
                    <text
                      x="70"
                      y="125"
                      fill="#fff"
                      fontSize="14"
                      fontWeight="bold"
                      textAnchor="middle"
                      className="service-label"
                      style={{ textShadow: '0 0 5px rgba(0, 160, 227, 0.8)' }}
                    >
                      Web Development
                    </text>
                  </g>

                  {/* Mobile App: Enhanced Mobile Device */}
                  <g transform="translate(200, 60)" className="mobile-device">
                    <rect x="0" y="0" width="50" height="85" rx="8" fill="#0F172A" stroke="#00a0e3" strokeWidth="3" />
                    <rect x="8" y="8" width="34" height="69" fill="url(#serviceGradient)" opacity="0.8" />
                    <rect x="12" y="12" width="26" height="3" fill="#fff" opacity="0.6" />
                    <rect x="12" y="18" width="20" height="2" fill="#fff" opacity="0.4" />
                    <rect x="12" y="23" width="24" height="2" fill="#fff" opacity="0.4" />
                    <circle cx="25" cy="65" r="4" fill="#00a0e3" />
                    <text
                      x="25"
                      y="110"
                      fill="#fff"
                      fontSize="14"
                      fontWeight="bold"
                      textAnchor="middle"
                      className="service-label"
                      style={{ textShadow: '0 0 5px rgba(0, 160, 227, 0.8)' }}
                    >
                      Mobile Apps
                    </text>
                  </g>

                  {/* UI/UX Design: Enhanced Sketchpad */}
                  <g transform="translate(280, 30)" className="uiux-sketchpad">
                    <rect x="0" y="0" width="85" height="65" rx="8" fill="#0F172A" stroke="#00a0e3" strokeWidth="3" />
                    <path d="M15,50 Q25,25 35,50 Q45,25 55,50" fill="none" stroke="#393185" strokeWidth="3" />
                    <circle cx="65" cy="35" r="8" fill="url(#serviceGradient)" />
                    <rect x="15" y="15" width="25" height="3" fill="#00a0e3" opacity="0.6" />
                    <rect x="45" y="15" width="20" height="3" fill="#00a0e3" opacity="0.6" />
                    <text
                      x="42.5"
                      y="90"
                      fill="#fff"
                      fontSize="14"
                      fontWeight="bold"
                      textAnchor="middle"
                      className="service-label"
                      style={{ textShadow: '0 0 5px rgba(0, 160, 227, 0.8)' }}
                    >
                      UI/UX Design
                    </text>
                  </g>

                  {/* Digital Marketing: Enhanced Dashboard */}
                  <g transform="translate(380, 60)" className="marketing-dashboard">
                    <rect x="0" y="0" width="110" height="75" rx="8" fill="#0F172A" stroke="#00a0e3" strokeWidth="3" />
                    <rect x="15" y="15" width="25" height="45" fill="url(#serviceGradient)" />
                    <rect x="45" y="25" width="25" height="35" fill="#393185" />
                    <rect x="75" y="20" width="25" height="40" fill="url(#serviceGradient)" />
                    <circle cx="55" cy="50" r="3" fill="#00a0e3" />
                    <text
                      x="55"
                      y="100"
                      fill="#fff"
                      fontSize="14"
                      fontWeight="bold"
                      textAnchor="middle"
                      className="service-label"
                      style={{ textShadow: '0 0 5px rgba(0, 160, 227, 0.8)' }}
                    >
                      Digital Marketing
                    </text>
                  </g>

                  {/* Website Maintenance: Enhanced Toolbox */}
                  <g transform="translate(75, 180)" className="maintenance-toolbox">
                    <rect x="0" y="0" width="75" height="75" rx="8" fill="#0F172A" stroke="#00a0e3" strokeWidth="3" />
                    <rect x="15" y="15" width="45" height="12" fill="#00a0e3" />
                    <circle cx="37.5" cy="45" r="10" fill="url(#serviceGradient)" />
                    <circle cx="50" cy="45" r="8" fill="#393185" />
                    <rect x="20" y="55" width="35" height="4" fill="#00a0e3" opacity="0.6" />
                    <text
                      x="37.5"
                      y="100"
                      fill="#fff"
                      fontSize="14"
                      fontWeight="bold"
                      textAnchor="middle"
                      className="service-label"
                      style={{ textShadow: '0 0 5px rgba(0, 160, 227, 0.8)' }}
                    >
                      Maintenance
                    </text>
                  </g>

                  {/* Custom Business Solutions: Enhanced Puzzle */}
                  <g transform="translate(180, 180)" className="business-solution">
                    <path d="M0,0 H50 V50 H25 Q15,50 15,60 V75 H0 V0 Z" fill="#0F172A" stroke="#00a0e3" strokeWidth="3" />
                    <path d="M50,0 H100 V50 H75 Q65,50 65,35 V25 H50 V0 Z" fill="#0F172A" stroke="#00a0e3" strokeWidth="3" />
                    <rect x="10" y="10" width="30" height="30" fill="url(#serviceGradient)" opacity="0.6" />
                    <rect x="60" y="10" width="30" height="30" fill="#393185" opacity="0.6" />
                    <text
                      x="50"
                      y="100"
                      fill="#fff"
                      fontSize="14"
                      fontWeight="bold"
                      textAnchor="middle"
                      className="service-label"
                      style={{ textShadow: '0 0 5px rgba(0, 160, 227, 0.8)' }}
                    >
                      Custom Solutions
                    </text>
                  </g>

                  {/* Enhanced Design Elements */}
                  <g transform="translate(75, 75)" className="design-element">
                    <path d="M0,0 Q30,45 60,0" fill="none" stroke="#00a0e3" strokeWidth="4" opacity="0.8" />
                    <circle cx="0" cy="0" r="5" fill="#00a0e3" />
                    <circle cx="60" cy="0" r="5" fill="#00a0e3" />
                  </g>
                  
                  <g transform="translate(420, 75)" className="design-element">
                    <rect x="0" y="0" width="12" height="12" fill="#393185" />
                    <rect x="18" y="0" width="12" height="12" fill="#393185" />
                    <rect x="0" y="18" width="12" height="12" fill="#393185" />
                    <rect x="18" y="18" width="12" height="12" fill="#00a0e3" />
                  </g>
                  
                  <g transform="translate(75, 300)" className="design-element">
                    <circle cx="0" cy="0" r="12" fill="#00a0e3" opacity="0.8" />
                    <circle cx="30" cy="0" r="8" fill="#393185" opacity="0.8" />
                    <circle cx="55" cy="0" r="6" fill="#00a0e3" opacity="0.6" />
                  </g>

                  {/* Connecting Lines */}
                  <g stroke="url(#serviceGradient)" strokeWidth="2" opacity="0.4" className="design-element">
                    <line x1="120" y1="140" x2="150" y2="160" strokeDasharray="5,5" />
                    <line x1="220" y1="140" x2="200" y2="160" strokeDasharray="5,5" />
                    <line x1="240" y1="180" x2="220" y2="200" strokeDasharray="5,5" />
                    <line x1="120" y1="200" x2="150" y2="180" strokeDasharray="5,5" />
                  </g>
                </g>

                {/* Floating Particles */}
                <g className="design-element">
                  <circle cx="80" cy="80" r="4" fill="#00a0e3" opacity="0.7" />
                  <circle cx="520" cy="100" r="3" fill="#393185" opacity="0.7" />
                  <circle cx="60" cy="420" r="3.5" fill="#00a0e3" opacity="0.7" />
                  <circle cx="540" cy="400" r="4" fill="#393185" opacity="0.7" />
                  <circle cx="300" cy="50" r="2.5" fill="#00a0e3" opacity="0.5" />
                  <circle cx="300" cy="450" r="3" fill="#393185" opacity="0.5" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


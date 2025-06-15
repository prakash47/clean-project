'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaRocket, FaStar, FaUsers, FaAward } from 'react-icons/fa';

export default function CTABannerSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Enhanced animations for the CTA banner
    const ctaBanner = document.querySelector('.cta-banner');
    const ctaIllustration = document.querySelector('.cta-illustration');
    const ctaContent = document.querySelector('.cta-content');
    const ctaButtons = document.querySelector('.cta-buttons');
    const sparkElements = document.querySelectorAll('.spark-element');
    const trustIndicators = document.querySelectorAll('.trust-indicator');

    if (ctaBanner) {
      gsap.fromTo(
        ctaBanner,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );
    }
    
    if (ctaIllustration) {
      gsap.fromTo(
        ctaIllustration,
        { opacity: 0, scale: 0.8, rotation: -10 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: 'elastic.out(1, 0.5)', delay: 0.6 }
      );
    }
    
    if (ctaContent) {
      gsap.fromTo(
        ctaContent,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.8 }
      );
    }
    
    if (ctaButtons) {
      gsap.fromTo(
        ctaButtons,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1 }
      );
    }

    if (sparkElements.length > 0) {
      sparkElements.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0, rotation: 0 },
          { 
            opacity: 1, 
            scale: 1, 
            rotation: 360, 
            duration: 0.8, 
            delay: 1.2 + index * 0.1, 
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
          delay: 1.2 + index * 0.1,
        });
      });
    }

    if (trustIndicators.length > 0) {
      trustIndicators.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: 1.4 + index * 0.1, ease: 'power3.out' }
        );
      });
    }
  }, []);

  // Enhanced structured data for the CTA
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Intention Infoservice',
    'url': 'https://intentioninfoservice.com',
    'description': 'Professional software development company specializing in web development, mobile app development, and digital marketing services worldwide',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+91-70215 39267',
      'contactType': 'Customer Service',
      'availableLanguage': 'English',
      'areaServed': 'Worldwide',
    },
    'potentialAction': [
      {
        '@type': 'ContactAction',
        'target': 'https://intentioninfoservice.com/contact-us',
        'name': 'Get a Free Consultation',
        'description': 'Schedule a free consultation to discuss your software development project requirements',
      },
      {
        '@type': 'QuoteAction',
        'target': 'https://intentioninfoservice.com/contact-us',
        'name': 'Get Free Project Quote',
        'description': 'Receive a detailed quote for your web development or mobile app project',
      },
    ],
    'offers': {
      '@type': 'Offer',
      'name': 'Free Consultation',
      'description': 'Complimentary consultation for software development projects',
      'price': '0',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock',
      'validFrom': '2024-01-01',
      'validThrough': '2025-12-31',
    },
  };

  return (
    <section className="bg-dark-950 py-10 md:py-12 relative overflow-hidden" itemScope itemType="https://schema.org/WebPageElement">
      {/* Enhanced structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-indigo rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="w-full px-[0%] md:px-[10%] lg:px-[10%] relative z-10">
        <div className="cta-banner bg-gradient-to-br from-dark-900 via-dark-900 to-dark-950 rounded-2xl p-8 md:p-12 border border-gray-800 shadow-2xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-blue"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left: Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="cta-content">
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue/20 to-brand-indigo/20 backdrop-blur-sm px-4 py-2 rounded-full border border-brand-blue/30 mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <FaRocket className="text-brand-blue text-sm" />
                  <span className="text-sm font-medium text-white">Ready to Launch Your Project?</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  itemProp="name"
                >
                  Transform Your Digital Vision into Reality
                  <span className="block text-transparent bg-gradient-to-r from-brand-blue to-brand-indigo bg-clip-text">
                    in 2025
                  </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  itemProp="description"
                >
                  Join 150+ successful businesses who trusted us with their digital transformation. 
                  Get expert consultation, transparent pricing, and guaranteed results for your next project.
                </motion.p>

                {/* Trust Indicators */}
                {/* <motion.div
                  className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <div className="trust-indicator flex items-center gap-2 text-sm text-gray-300">
                    <FaStar className="text-yellow-500" />
                    <span className="font-semibold">4.9/5</span>
                    <span>Client Rating</span>
                  </div>
                  <div className="trust-indicator flex items-center gap-2 text-sm text-gray-300">
                    <FaUsers className="text-green-500" />
                    <span className="font-semibold">150+</span>
                    <span>Projects Delivered</span>
                  </div>
                  <div className="trust-indicator flex items-center gap-2 text-sm text-gray-300">
                    <FaAward className="text-blue-500" />
                    <span className="font-semibold">5+</span>
                    <span>Years Experience</span>
                  </div>
                </motion.div> */}

                {/* CTA Buttons */}
                <motion.div
                  className="cta-buttons flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <Button
                    size="lg"
                    className="btn btn-primary text-white font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 px-8 py-4 text-lg group"
                    icon={<FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />}
                    iconPosition="right"
                    href="/contact-us"
                    ariaLabel="Get a free consultation for your software development project"
                  >
                    Get Free Consultation
                  </Button>
                  
                  {/* <Button
                    size="lg"
                    className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 px-8 py-4 font-semibold text-lg"
                    href="/#"
                    ariaLabel="View our portfolio of successful projects"
                  >
                    View Our Work
                  </Button> */}
                </motion.div>

                {/* Additional Trust Elements */}
                <motion.div
                  className="mt-8 text-center lg:text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  <p className="text-lg text-gray-500 mb-2">Trusted by businesses worldwide</p>
                  <div className="flex justify-center lg:justify-start items-center gap-4 text-base text-gray-400">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Free Consultation
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                      No Hidden Costs
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                      24/7 Support
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Enhanced Illustration */}
            <div className="flex-shrink-0">
              <div className="cta-illustration relative">
                <svg
                  width="300"
                  height="300"
                  viewBox="0 0 300 300"
                  className="w-64 h-64 md:w-80 md:h-80"
                  role="img"
                  aria-label="Digital transformation illustration with rocket launch symbolizing business growth"
                >
                  {/* Background Circle */}
                  <circle
                    cx="150"
                    cy="150"
                    r="140"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    strokeDasharray="10,5"
                    className="spark-element"
                  />
                  
                  {/* Gradient Definitions */}
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00a0e3" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#393185" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00a0e3" />
                      <stop offset="100%" stopColor="#393185" />
                    </linearGradient>
                  </defs>

                  {/* Central Rocket */}
                  <g transform="translate(150, 150)" className="spark-element">
                    {/* Rocket Body */}
                    <ellipse cx="0" cy="-20" rx="15" ry="40" fill="url(#gradient2)" />
                    {/* Rocket Tip */}
                    <polygon points="0,-60 -10,-20 10,-20" fill="#00a0e3" />
                    {/* Rocket Fins */}
                    <polygon points="-15,10 -25,30 -10,20" fill="#393185" />
                    <polygon points="15,10 25,30 10,20" fill="#393185" />
                    {/* Rocket Fire */}
                    <ellipse cx="0" cy="35" rx="8" ry="15" fill="#ff6b35" className="spark-element" />
                    <ellipse cx="0" cy="40" rx="5" ry="10" fill="#ffd23f" className="spark-element" />
                  </g>

                  {/* Orbiting Elements */}
                  <g className="spark-element">
                    {/* Web Development Icon */}
                    <circle cx="80" cy="100" r="20" fill="url(#gradient1)" opacity="0.8" />
                    <text x="80" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">&lt;/&gt;</text>
                  </g>
                  
                  <g className="spark-element">
                    {/* Mobile App Icon */}
                    <rect x="200" y="80" width="25" height="40" rx="5" fill="url(#gradient1)" opacity="0.8" />
                    <rect x="205" y="85" width="15" height="25" fill="white" opacity="0.3" />
                  </g>
                  
                  <g className="spark-element">
                    {/* Digital Marketing Icon */}
                    <circle cx="220" cy="200" r="18" fill="url(#gradient1)" opacity="0.8" />
                    <polygon points="220,190 210,200 220,210 230,200" fill="white" opacity="0.8" />
                  </g>
                  
                  <g className="spark-element">
                    {/* UI/UX Design Icon */}
                    <circle cx="80" cy="220" r="18" fill="url(#gradient1)" opacity="0.8" />
                    <circle cx="80" cy="220" r="8" fill="white" opacity="0.8" />
                  </g>

                  {/* Connecting Lines */}
                  <g stroke="url(#gradient1)" strokeWidth="1" opacity="0.4" className="spark-element">
                    <line x1="100" y1="120" x2="130" y2="130" strokeDasharray="3,3" />
                    <line x1="180" y1="120" x2="170" y2="130" strokeDasharray="3,3" />
                    <line x1="200" y1="180" x2="170" y2="170" strokeDasharray="3,3" />
                    <line x1="100" y1="200" x2="130" y2="170" strokeDasharray="3,3" />
                  </g>

                  {/* Floating Particles */}
                  <g className="spark-element">
                    <circle cx="50" cy="50" r="3" fill="#00a0e3" opacity="0.6" />
                    <circle cx="250" cy="60" r="2" fill="#393185" opacity="0.6" />
                    <circle cx="40" cy="250" r="2.5" fill="#00a0e3" opacity="0.6" />
                    <circle cx="260" cy="240" r="3" fill="#393185" opacity="0.6" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-50"></div>
        </div>
      </div>
    </section>
  );
}


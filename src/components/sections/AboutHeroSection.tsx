'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function AboutHeroSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Ensure elements exist before applying animations
    const digitalCanvas = document.querySelector('.digital-canvas');
    const laptopScreen = document.querySelector('.laptop-screen');
    const mobileDevice = document.querySelector('.mobile-device');
    const uiuxSketchpad = document.querySelector('.uiux-sketchpad');
    const marketingDashboard = document.querySelector('.marketing-dashboard');
    const maintenanceToolbox = document.querySelector('.maintenance-toolbox');
    const businessSolution = document.querySelector('.business-solution');
    const designElements = document.querySelectorAll('.design-element');
    const serviceLabels = document.querySelectorAll('.service-label');

    // Apply GSAP animations only if elements exist
    if (digitalCanvas) {
      gsap.fromTo(
        digitalCanvas,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );
    }
    if (laptopScreen) {
      gsap.fromTo(
        laptopScreen,
        { fillOpacity: 0 },
        { fillOpacity: 1, duration: 1, delay: 0.5, ease: 'power2.out' }
      );
    }
    if (mobileDevice) {
      gsap.fromTo(
        mobileDevice,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.7, ease: 'power2.out' }
      );
    }
    if (uiuxSketchpad) {
      gsap.fromTo(
        uiuxSketchpad,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.9, ease: 'power2.out' }
      );
    }
    if (marketingDashboard) {
      gsap.fromTo(
        marketingDashboard,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 1.1, ease: 'power2.out' }
      );
    }
    if (maintenanceToolbox) {
      gsap.fromTo(
        maintenanceToolbox,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, delay: 1.3, ease: 'power2.out' }
      );
    }
    if (businessSolution) {
      gsap.fromTo(
        businessSolution,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 1.5, ease: 'power2.out' }
      );
    }
    if (designElements.length > 0) {
      designElements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 1.7, ease: 'power2.out', stagger: 0.1 }
        );
      });
    }
    if (serviceLabels.length > 0) {
      serviceLabels.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, delay: 1.7 + index * 0.1, ease: 'power2.out' }
        );
        // Ongoing pulsating animation similar to Home page Hero Section
        gsap.to(element, {
          scale: 1.05,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1.7 + index * 0.1,
        });
      });
    }
  }, []);

  // Structured data for the About Us page
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Intention Infoservice',
    'url': 'https://intentioninfoservice.com/about-us',
    'logo': 'https://intentioninfoservice.com/images/logo.webp',
    'description': 'Intention Infoservice is dedicated to delivering innovative web design, mobile apps, and digital marketing solutions in 2025 and beyond.',
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'Customer Service',
      'url': 'https://intentioninfoservice.com/contact-us',
    },
  };

  return (
    <section className="relative bg-dark-950 pt-8 md:py-24 overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Subtle Grain Texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
      />
      <div className="w-full px-[10%] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Headline, Tagline, Subheading, and CTA */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.1)',
              }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              About Intention Infoservice: Your Digital Partner
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Crafting Innovative Web Design and Digital Solutions
            </motion.p>
            <motion.p
              className="text-md md:text-lg text-gray-500 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our approach and values for delivering exceptional digital experiences in 2025 and beyond.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                variant="primary"
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold shadow-lg hover:shadow-teal-500/40"
                icon={<FaArrowRight />}
                iconPosition="right"
                href="/contact-us"
              >
                Connect with Us Today
              </Button>
            </motion.div>
          </div>
          {/* Right: Updated Digital Canvas Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <svg
              width="500"
              height="400"
              viewBox="0 0 500 400"
              className="w-full max-w-[500px]"
              role="img"
              aria-label="Illustration of Intention Infoservice's comprehensive digital services"
            >
              {/* Background */}
              <rect x="0" y="0" width="500" height="400" fill="#1E293B" rx="20" stroke="#14B8A6" strokeWidth="2" />
              {/* Central Digital Canvas */}
              <g transform="translate(50, 50)" className="digital-canvas">
                {/* Web Design: Laptop */}
                <g transform="translate(20, 20)">
                  <rect x="0" y="0" width="120" height="80" rx="5" fill="#0F172A" stroke="#14B8A6" strokeWidth="2" />
                  <rect x="10" y="10" width="100" height="60" fill="#1E293B" className="laptop-screen" />
                  <rect x="0" y="80" width="120" height="10" fill="#0F172A" stroke="#14B8A6" strokeWidth="2" />
                  <text
                    x="60"
                    y="110"
                    fill="#fff"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="service-label"
                    style={{ textShadow: '0 0 3px rgba(20, 184, 166, 0.5)' }}
                  >
                    Web Design
                  </text>
                </g>
                {/* Mobile App: Mobile Device */}
                <g transform="translate(160, 50)" className="mobile-device">
                  <rect x="0" y="0" width="40" height="70" rx="5" fill="#0F172A" stroke="#14B8A6" strokeWidth="2" />
                  <rect x="5" y="5" width="30" height="60" fill="#1E293B" />
                  <circle cx="20" cy="55" r="3" fill="#14B8A6" />
                  <text
                    x="20"
                    y="95"
                    fill="#fff"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="service-label"
                    style={{ textShadow: '0 0 3px rgba(20, 184, 166, 0.5)' }}
                  >
                    Mobile Apps
                  </text>
                </g>
                {/* UI/UX Branding: Sketchpad */}
                <g transform="translate(230, 20)" className="uiux-sketchpad">
                  <rect x="0" y="0" width="70" height="50" rx="5" fill="#0F172A" stroke="#14B8A6" strokeWidth="2" />
                  <path d="M10,40 Q20,20 30,40" fill="none" stroke="#10B981" strokeWidth="2" />
                  <circle cx="50" cy="30" r="5" fill="#10B981" />
                  <text
                    x="35"
                    y="75"
                    fill="#fff"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="service-label"
                    style={{ textShadow: '0 0 3px rgba(20, 184, 166, 0.5)' }}
                  >
                    UI/UX Branding
                  </text>
                </g>
                {/* Digital Marketing: Dashboard */}
                <g transform="translate(320, 50)" className="marketing-dashboard">
                  <rect x="0" y="0" width="90" height="60" rx="5" fill="#0F172A" stroke="#14B8A6" strokeWidth="2" />
                  <rect x="10" y="10" width="20" height="40" fill="#10B981" />
                  <rect x="35" y="20" width="20" height="30" fill="#10B981" />
                  <rect x="60" y="15" width="20" height="35" fill="#10B981" />
                  <text
                    x="45"
                    y="85"
                    fill="#fff"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="service-label"
                    style={{ textShadow: '0 0 3px rgba(20, 184, 166, 0.5)' }}
                  >
                    Digital Marketing
                  </text>
                </g>
                {/* Website Maintenance: Toolbox */}
                <g transform="translate(50, 150)" className="maintenance-toolbox">
                  <rect x="0" y="0" width="60" height="60" rx="5" fill="#0F172A" stroke="#14B8A6" strokeWidth="2" />
                  <rect x="10" y="10" width="40" height="10" fill="#14B8A6" />
                  <circle cx="30" cy="40" r="8" fill="#10B981" />
                  <circle cx="40" cy="40" r="8" fill="#10B981" />
                  <text
                    x="30"
                    y="85"
                    fill="#fff"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="service-label"
                    style={{ textShadow: '0 0 3px rgba(20, 184, 166, 0.5)' }}
                  >
                    Website Maintenance
                  </text>
                </g>
                {/* Custom Business Solutions: Puzzle Pieces */}
                <g transform="translate(150, 150)" className="business-solution">
                  <path d="M0,0 H40 V40 H20 Q10,40 10,50 V60 H0 V0 Z" fill="#0F172A" stroke="#14B8A6" strokeWidth="2" />
                  <path d="M40,0 H80 V40 H60 Q50,40 50,30 V20 H40 V0 Z" fill="#0F172A" stroke="#14B8A6" strokeWidth="2" />
                  <text
                    x="40"
                    y="85"
                    fill="#fff"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="service-label"
                    style={{ textShadow: '0 0 3px rgba(20, 184, 166, 0.5)' }}
                  >
                    Custom Solutions
                  </text>
                </g>
                {/* Abstract Design Elements (Brush Strokes, Pixels) */}
                <g transform="translate(50, 50)" className="design-element">
                  <path d="M0,0 Q20,30 40,0" fill="none" stroke="#14B8A6" strokeWidth="3" opacity="0.7" />
                </g>
                <g transform="translate(350, 50)" className="design-element">
                  <rect x="0" y="0" width="10" height="10" fill="#10B981" />
                  <rect x="15" y="0" width="10" height="10" fill="#10B981" />
                  <rect x="0" y="15" width="10" height="10" fill="#10B981" />
                </g>
                <g transform="translate(50, 250)" className="design-element">
                  <circle cx="0" cy="0" r="8" fill="#14B8A6" opacity="0.7" />
                  <circle cx="20" cy="0" r="5" fill="#14B8A6" opacity="0.7" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
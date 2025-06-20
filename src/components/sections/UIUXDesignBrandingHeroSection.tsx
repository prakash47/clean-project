
'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function UIUXDesignBrandingHeroSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Ensure elements exist before applying animations
    const deviceMockup = document.querySelector('.device-mockup');
    const pcScreen = document.querySelector('.pc-screen');
    const screenElements = document.querySelectorAll('.screen-element');
    const pcScreenElements = document.querySelectorAll('.pc-screen-element');
    const brandIdentity = document.querySelector('.brand-identity');
    const colorSwatches = document.querySelectorAll('.color-swatch');
    const typographyLetters = document.querySelectorAll('.typography-letter');
    const wireframeLines = document.querySelectorAll('.wireframe-line');
    const userResearch = document.querySelector('.user-research');
    const userIcon = document.querySelector('.user-icon');
    const magnifier = document.querySelector('.magnifier');
    const uiuxIcons = document.querySelectorAll('.uiux-icon');
    const backgroundElements = document.querySelectorAll('.background-element');

    if (deviceMockup) {
      gsap.fromTo(
        deviceMockup,
        { opacity: 0, scale: 0.95, rotateX: 30 },
        { opacity: 1, scale: 1, rotateX: 0, duration: 1.2, ease: 'elastic.out(1, 0.5)' }
      );
    }
    if (pcScreen) {
      gsap.fromTo(
        pcScreen,
        { opacity: 0, scale: 0.95, rotateX: 30 },
        { opacity: 1, scale: 1, rotateX: 0, duration: 1.2, delay: 0.2, ease: 'elastic.out(1, 0.5)' }
      );
    }
    if (screenElements.length > 0) {
      gsap.fromTo(
        screenElements,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.5, stagger: 0.1, ease: 'power3.out' }
      );
    }
    if (pcScreenElements.length > 0) {
      gsap.fromTo(
        pcScreenElements,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.7, stagger: 0.1, ease: 'power3.out' }
      );
    }
    if (brandIdentity) {
      gsap.fromTo(
        brandIdentity,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.6, delay: 0.9, ease: 'power3.out' }
      );
    }
    if (colorSwatches.length > 0) {
      gsap.fromTo(
        colorSwatches,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, delay: 1.1, stagger: 0.1, ease: 'power3.out' }
      );
    }
    if (typographyLetters.length > 0) {
      gsap.fromTo(
        typographyLetters,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.4, delay: 1.3, stagger: 0.1, ease: 'power3.out' }
      );
    }
    if (wireframeLines.length > 0) {
      wireframeLines.forEach((line) => {
        gsap.fromTo(
          line,
          { strokeDasharray: 100, strokeDashoffset: 100 },
          { strokeDashoffset: 0, duration: 1, delay: 1.5, ease: 'power3.out', stagger: 0.1 }
        );
      });
    }
    if (userResearch) {
      gsap.fromTo(
        userResearch,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.6, delay: 1.7, ease: 'power3.out' }
      );
    }
    if (userIcon) {
      gsap.fromTo(
        userIcon,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.9, ease: 'power3.out' }
      );
      gsap.to(userIcon, {
        scale: 1.1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2.2,
      });
    }
    if (magnifier) {
      gsap.fromTo(
        magnifier,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.6, delay: 2.1, ease: 'power3.out' }
      );
      gsap.to(magnifier, {
        rotate: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2.4,
      });
    }
    if (uiuxIcons.length > 0) {
      gsap.fromTo(
        uiuxIcons,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 2.3, stagger: 0.1, ease: 'power3.out' }
      );
      gsap.to(uiuxIcons, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.1,
        delay: 2.6,
      });
    }
    if (backgroundElements.length > 0) {
      gsap.fromTo(
        backgroundElements,
        { opacity: 0, scale: 0 },
        { opacity: 0.3, scale: 1, duration: 1, delay: 2.5, stagger: 0.2, ease: 'power3.out' }
      );
      gsap.to(backgroundElements, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2,
        delay: 2.8,
      });
    }
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-dark-950 to-dark-800 py-12 md:py-20 overflow-hidden">
      {/* Structured Data for the Hero Section */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "UI/UX Design and Branding Services",
            "provider": {
              "@type": "Organization",
              "name": "Intention Infoservice",
              "url": "https://intentioninfoservice.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Digital Avenue",
                "addressLocality": "Tech City",
                "postalCode": "TC 12345"
              }
            },
            "description": "Elevate your brand with Intention Infoservice's expert UI/UX design and branding services in 2025. We create user-centered designs and cohesive brand identities that engage and convert.",
            "offers": {
              "@type": "Offer",
              "url": "https://intentioninfoservice.com/contact-us",
              "description": "Get a free quote for UI/UX design and branding services to transform your digital presence."
            },
            "keywords": "UI/UX design services, branding services 2025, user-centered design, brand identity development"
          }
        `}
      </script>

      {/* Inline Critical CSS for LCP Element */}
      <style jsx>{`
        h1.text-4xl.sm\\:text-5xl.lg\\:text-6xl.font-bold.text-white.mb-4.tracking-tight {
          font-size: 2.25rem;
          line-height: 2.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
          letter-spacing: -0.025em;
        }
        @media (min-width: 640px) {
          h1.text-4xl.sm\\:text-5xl.lg\\:text-6xl.font-bold.text-white.mb-4.tracking-tight {
            font-size: 3rem;
            line-height: 1;
          }
        }
        @media (min-width: 1024px) {
          h1.text-4xl.sm\\:text-5xl.lg\\:text-6xl.font-bold.text-white.mb-4.tracking-tight {
            font-size: 4.5rem;
            line-height: 1;
          }
        }
      `}</style>

      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_70%)] opacity-30 pointer-events-none" />

      <div className="w-full px-[10%] relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Headline, Tagline, Body, and CTA */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.1)',
              }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Elevate Your Brand with Expert UI/UX Design & Branding Services
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl font-semibold text-[#00a0e3] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Craft Memorable Digital Experiences That Engage and Convert in 2025
            </motion.p>
            <motion.p
              className="text-md md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your digital presence with our user-centered UI/UX design and branding services. We create intuitive designs and cohesive brand identities that drive engagement, boost conversions, and leave a lasting impression.
            </motion.p>
            <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        >
                          <Button
                            size="lg"
                            className="btn btn-primary hover:bg-brand-blue hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] transition-all duration-300"
                            icon={<FaArrowRight />}
                            iconPosition="right"
                            href="/contact-us"
                            ariaLabel="Get your free quote today for UI/UX design and branding services"
                          >
                            Get Your Free Quote Today
                          </Button>
                        </motion.div>
            
          </div>
          {/* Right: Custom SVG Illustration Representing UI/UX Design and Branding Services */}
          <div className="lg:w-1/2 flex justify-center">
            <svg
              width="500"
              height="400"
              viewBox="0 0 500 400"
              className="w-full max-w-[500px]"
              role="img"
              aria-label="Illustration of UI/UX design and branding services including mobile and PC device mockups, brand identity elements, wireframe, user research, UI/UX icons, and a glowing background"
            >
              {/* Background with Floating, Flowing, Glowing Effects */}
              <g className="background">
                <defs>
                  <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#393185', stopOpacity: 0.3 }} />
                  </linearGradient>
                </defs>
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
              {/* Device Mockup (Mobile - UI/UX Design) - Isometric View */}
              <g className="device-mockup" transform="translate(50, 50) rotate(-15) skewX(20)">
                <rect x="0" y="0" width="180" height="300" rx="15" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
                <rect x="10" y="10" width="160" height="280" fill="#1E293B" />
                {/* Screen Elements */}
                <g className="screen-element" transform="translate(20, 20)">
                  <rect x="0" y="0" width="140" height="40" rx="5" fill="#00a0e3" />
                  <rect x="0" y="50" width="140" height="30" rx="5" fill="#393185" />
                  <rect x="0" y="90" width="140" height="30" rx="5" fill="#393185" />
                  <rect x="0" y="130" width="60" height="80" rx="5" fill="#00a0e3" />
                  <rect x="70" y="130" width="60" height="80" rx="5" fill="#393185" />
                  <circle cx="150" cy="260" r="12" fill="#00a0e3" />
                </g>
              </g>
              {/* PC Screen (Web UI/UX Design) - Isometric View */}
              <g className="pc-screen" transform="translate(250, 50) rotate(15) skewX(-20)">
                <rect x="0" y="0" width="200" height="150" rx="10" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
                <rect x="10" y="10" width="180" height="130" fill="#1E293B" />
                <rect x="0" y="150" width="200" height="10" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
                <rect x="80" y="160" width="40" height="20" rx="5" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
                {/* Screen Elements (Dashboard) */}
                <g className="pc-screen-element" transform="translate(20, 20)">
                  <rect x="0" y="0" width="160" height="30" rx="5" fill="#00a0e3" />
                  <rect x="0" y="40" width="40" height="70" rx="5" fill="#393185" />
                  <rect x="50" y="40" width="110" height="30" rx="5" fill="#00a0e3" />
                  <rect x="50" y="80" width="50" height="20" rx="5" fill="#393185" />
                  <rect x="110" y="80" width="50" height="20" rx="5" fill="#393185" />
                </g>
              </g>
              {/* Brand Identity Development */}
              <g className="brand-identity" transform="translate(300, 220)">
                {/* Logo */}
                <g transform="translate(30, 0)">
                  <circle cx="20" cy="20" r="20" fill="#00a0e3" />
                  <text x="10" y="25" fill="#0F172A" fontSize="12" fontFamily="monospace">Logo</text>
                </g>
                {/* Color Palette */}
                <g transform="translate(0, 60)">
                  <rect x="0" y="0" width="60" height="15" rx="5" fill="#FF6B6B" className="color-swatch" />
                  <rect x="0" y="20" width="60" height="15" rx="5" fill="#4ECDC4" className="color-swatch" />
                  <rect x="0" y="40" width="60" height="15" rx="5" fill="#45B7D1" className="color-swatch" />
                </g>
                {/* Typography */}
                <g transform="translate(80, 60)">
                  <text x="0" y="20" fill="#00a0e3" fontSize="16" fontFamily="monospace" className="typography-letter">Aa</text>
                  <text x="0" y="40" fill="#00a0e3" fontSize="12" fontFamily="monospace" className="typography-letter">Bb</text>
                </g>
              </g>
              {/* Wireframe (Prototyping & Wireframing) */}
              <g className="wireframe" transform="translate(100, 250)">
                <rect x="0" y="0" width="150" height="100" rx="5" fill="#0F172A" stroke="#00a0e3" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="10" y1="10" x2="140" y2="10" stroke="#00a0e3" strokeWidth="1" className="wireframe-line" />
                <line x1="10" y1="30" x2="140" y2="30" stroke="#00a0e3" strokeWidth="1" className="wireframe-line" />
                <line x1="10" y1="50" x2="140" y2="50" stroke="#00a0e3" strokeWidth="1" className="wireframe-line" />
                <line x1="10" y1="70" x2="140" y2="70" stroke="#00a0e3" strokeWidth="1" className="wireframe-line" />
              </g>
              {/* User Research (Magnifying Glass) */}
              <g className="user-research" transform="translate(30, 300)">
                <circle cx="20" cy="20" r="20" fill="#00a0e3" />
                <path d="M35,35 L50,50" stroke="#0F172A" strokeWidth="3" className="magnifier" />
                <circle cx="20" cy="20" r="10" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />
                <g className="user-icon" transform="translate(15, 15)">
                  <circle cx="5" cy="5" r="3" fill="#0F172A" />
                  <path d="M2,10 Q5,15 8,10" fill="none" stroke="#0F172A" strokeWidth="1" />
                </g>
              </g>
              {/* UI/UX Icons */}
              <g className="uiux-icons" transform="translate(400, 300)">
                <rect x="0" y="0" width="30" height="30" rx="5" fill="#00a0e3" className="uiux-icon" />
                <circle cx="15" cy="50" r="15" fill="#393185" className="uiux-icon" />
                <path d="M0,80 L30,80 L15,110 Z" fill="#00a0e3" className="uiux-icon" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}



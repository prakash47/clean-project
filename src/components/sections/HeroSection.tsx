
'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function HeroSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Ensure elements exist before applying animations
    const dashboardScreen = document.querySelector('.dashboard-screen');
    const webpageHeader = document.querySelector('.webpage-header');
    const webpageContentElements = document.querySelectorAll('.webpage-content');
    const appInterfaceElements = document.querySelectorAll('.app-interface');
    const appButtonElements = document.querySelectorAll('.app-button');
    const codeSnippet = document.querySelector('.code-snippet');
    const businessPanel = document.querySelector('.business-panel');
    const businessCube = document.querySelector('.business-cube');
    const graphLine = document.querySelector('.graph-line');
    const graphDotElements = document.querySelectorAll('.graph-dot');
    const connectionLineElements = document.querySelectorAll('.connection-line');
    const connectionNodeElements = document.querySelectorAll('.connection-node');
    const supportIconElements = document.querySelectorAll('.support-icon');
    const uiuxIcon = document.querySelector('.uiux-icon');

    // Apply GSAP animations only if elements exist
    if (dashboardScreen) {
      gsap.fromTo(
        dashboardScreen,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'elastic.out(1, 0.5)' }
      );
    }
    if (webpageHeader) {
      gsap.fromTo(
        webpageHeader,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: 'power3.out' }
      );
    }
    if (webpageContentElements.length > 0) {
      webpageContentElements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 0.6, delay: 0.7, ease: 'power3.out' }
        );
      });
    }
    if (appInterfaceElements.length > 0) {
      appInterfaceElements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 0.6, delay: 0.9, ease: 'power3.out' }
        );
      });
    }
    if (appButtonElements.length > 0) {
      appButtonElements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 0.4, delay: 1.1, ease: 'power3.out', stagger: 0.2 }
        );
        gsap.to(element, {
          scale: 1.1,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: 0.2,
        });
      });
    }
    if (codeSnippet) {
      gsap.fromTo(
        codeSnippet,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.3, ease: 'power3.out' }
      );
    }
    if (businessPanel) {
      gsap.fromTo(
        businessPanel,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.6, delay: 1.5, ease: 'power3.out' }
      );
    }
    if (businessCube) {
      gsap.fromTo(
        businessCube,
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, duration: 0.6, delay: 1.7, ease: 'power3.out' }
      );
      gsap.to(businessCube, {
        scale: 1.1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
    if (graphLine) {
      gsap.fromTo(
        graphLine,
        { strokeDasharray: 100, strokeDashoffset: 100 },
        { strokeDashoffset: 0, duration: 1, delay: 1.9, ease: 'power3.out' }
      );
    }
    if (graphDotElements.length > 0) {
      graphDotElements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.4, delay: 2.5, ease: 'power3.out', stagger: 0.1 }
        );
      });
    }
    if (connectionLineElements.length > 0) {
      connectionLineElements.forEach((element) => {
        gsap.fromTo(
          element,
          { strokeDasharray: 100, strokeDashoffset: 100 },
          { strokeDashoffset: 0, duration: 1, delay: 2, ease: 'power3.out', stagger: 0.2 }
        );
      });
    }
    if (connectionNodeElements.length > 0) {
      connectionNodeElements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.6, delay: 2.2, ease: 'power3.out', stagger: 0.1 }
        );
      });
    }
    if (supportIconElements.length > 0) {
      supportIconElements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.6, delay: 2.5, ease: 'power3.out', stagger: 0.1 }
        );
        gsap.to(element, {
          rotation: 360,
          duration: 5,
          repeat: -1,
          ease: 'linear',
          stagger: 0.2,
        });
      });
    }
    if (uiuxIcon) {
      gsap.fromTo(
        uiuxIcon,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.6, delay: 2.7, ease: 'power3.out' }
      );
      gsap.to(uiuxIcon, {
        rotation: 360,
        duration: 5,
        repeat: -1,
        ease: 'linear',
      });
    }
  }, []);

  // Structured data for the Hero Section
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Intention Infoservice',
    'url': 'https://intentioninfoservice.com',
    'description': 'Empower your business with global digital excellence through innovative web design solutions, custom mobile apps, and digital marketing strategies in 2025.',
    'potentialAction': {
      '@type': 'ContactAction',
      'target': 'https://intentioninfoservice.com/contact-us',
      'name': 'Get a Free Quote Today',
    },
  };

  return (
    <section className="relative bg-dark-950 pt-8 md:py-12 overflow-hidden">
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
      <div className="w-full px-[8%] md:px-[10%] lg:px-[10%] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Updated Headline, Tagline, Subheading, and CTA */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.1)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              itemProp="name"
            >
              Empower Your Business with Global Digital Excellence
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              itemProp="description"
            >
              Custom Digital Solutions, UI/UX Design & Digital Marketing Services Worldwide
            </motion.p>
            
            <motion.p
              className="text-md md:text-lg text-gray-500 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Transform your business with our expert software development company. We specialize in responsive web design, custom mobile applications, enterprise solutions, and comprehensive digital marketing strategies for 2025.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 mb-6 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.6 },
                y: { duration: 0.8, delay: 0.6 },
              }}
            >
              <Button
                size="lg"
                className="btn btn-primary text-white font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 px-8 py-4 text-lg"
                icon={<FaArrowRight />}
                iconPosition="right"
                href="/contact-us"
                ariaLabel="Get your free quote today for professional web development and mobile app development services"
              >
                Get Your Free Quote Today
              </Button>
              
              {/* <Button
                size="lg"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 px-8 py-4 font-semibold text-lg"
                href="/services"
                ariaLabel="View our comprehensive software development services"
              >
                View Our Services
              </Button> */}
            </motion.div>

            {/* Trust Indicators */}
            {/* <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-lg"></div>
                  <span className="text-3xl font-bold text-white">150+</span>
                </div>
                <span className="text-base text-gray-400 font-medium">Projects Completed</span>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full shadow-lg"></div>
                  <span className="text-3xl font-bold text-white">5+</span>
                </div>
                <span className="text-base text-gray-400 font-medium">Years Experience</span>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full shadow-lg animate-pulse"></div>
                  <span className="text-3xl font-bold text-white">24/7</span>
                </div>
                <span className="text-base text-gray-400 font-medium">Support Available</span>
              </div>
            </motion.div> */}
          </div>

          {/* Right: Animated SVG Illustration */}
          <div className="md:w-1/2 flex justify-center align-middle">
            <svg
              width="500"
              height="400"
              viewBox="0 0 500 400"
              className="w-full justify-center max-w-[500px]"
              role="img"
              aria-label="Professional illustration showcasing web development, mobile app development, digital marketing, and UI/UX design services"
            >
              {/* Dashboard Background */}
              <rect
                x="50"
                y="50"
                width="400"
                height="300"
                rx="20"
                fill="#1E293B"
                stroke="#00a0e3"
                strokeWidth="2"
                className="dashboard-screen"
                role="presentation"
              />
              
              {/* Development: Dual-Display Screen (Web and Mobile) */}
              <g transform="translate(80, 80)" role="group" aria-label="Web and mobile development illustration">
                {/* Web Development */}
                <rect
                  x="0"
                  y="0"
                  width="170"
                  height="30"
                  fill="#00a0e3"
                  className="webpage-header"
                  role="presentation"
                />
                <rect
                  x="0"
                  y="50"
                  width="170"
                  height="180"
                  fill="#0F172A"
                  stroke="#00a0e3"
                  strokeWidth="1"
                  className="webpage-content"
                  role="presentation"
                />
                <rect
                  x="10"
                  y="60"
                  width="150"
                  height="40"
                  fill="#1A2526"
                  className="webpage-content"
                  role="presentation"
                />
                <rect
                  x="10"
                  y="110"
                  width="70"
                  height="110"
                  fill="#1A5F7A"
                  className="webpage-content"
                  role="presentation"
                />
                <rect
                  x="90"
                  y="110"
                  width="70"
                  height="110"
                  fill="#1A5F7A"
                  className="webpage-content"
                  role="presentation"
                />
                {/* Mobile App Development */}
                <rect
                  x="180"
                  y="0"
                  width="140"
                  height="230"
                  rx="15"
                  fill="#0F172A"
                  stroke="#00a0e3"
                  strokeWidth="1"
                  className="app-interface"
                  role="presentation"
                />
                <rect
                  x="190"
                  y="20"
                  width="120"
                  height="190"
                  fill="#0F172A"
                  className="app-interface"
                  role="presentation"
                />
                <rect
                  x="220"
                  y="40"
                  width="60"
                  height="30"
                  rx="5"
                  fill="#00a0e3"
                  className="app-button"
                  role="presentation"
                />
                <rect
                  x="220"
                  y="80"
                  width="60"
                  height="30"
                  rx="5"
                  fill="#00a0e3"
                  className="app-button"
                  role="presentation"
                />
                <circle
                  cx="300"
                  cy="190"
                  r="10"
                  fill="#393185"
                  className="app-button"
                  role="presentation"
                />
              </g>
              {/* Code Snippet Overlay */}
              <g
                transform="translate(200, 40)"
                className="code-snippet"
                role="group"
                aria-label="Code snippet illustration"
              >
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="40"
                  rx="5"
                  fill="#0F172A"
                  stroke="#00a0e3"
                  strokeWidth="1"
                  role="presentation"
                />
                <text
                  x="10"
                  y="25"
                  fill="#00a0e3"
                  fontSize="12"
                  fontFamily="monospace"
                  role="presentation"
                >
                  {`{ }`}
                </text>
              </g>
              {/* Digital Business Solutions: Panel */}
              <g
                transform="translate(330, 80)"
                className="business-panel"
                role="group"
                aria-label="Digital business solutions illustration"
              >
                <rect
                  x="0"
                  y="0"
                  width="90"
                  height="230"
                  rx="10"
                  fill="#0F172A"
                  stroke="#00a0e3"
                  strokeWidth="1"
                  role="presentation"
                />
                {/* Custom Business Solutions: Glowing Cube */}
                <g
                  transform="translate(20, 20)"
                  className="business-cube"
                  role="group"
                  aria-label="Custom business solutions cube"
                >
                  <rect
                    x="0"
                    y="0"
                    width="50"
                    height="50"
                    rx="5"
                    fill="#393185"
                    stroke="#00a0e3"
                    strokeWidth="1"
                    role="presentation"
                  />
                </g>
                {/* Digital Marketing: Graph */}
                <g
                  transform="translate(30, 100)"
                  className="digital-marketing-graph"
                  role="group"
                  aria-label="Digital marketing graph illustration"
                >
                  <line
                    x1="0"
                    y1="50"
                    x2="20"
                    y2="30"
                    stroke="#00a0e3"
                    strokeWidth="2"
                    className="graph-line"
                    role="presentation"
                  />
                  <circle
                    cx="0"
                    cy="50"
                    r="3"
                    fill="#00a0e3"
                    className="graph-dot"
                    role="presentation"
                  />
                  <circle
                    cx="20"
                    cy="30"
                    r="3"
                    fill="#00a0e3"
                    className="graph-dot"
                    role="presentation"
                  />
                  <line
                    x1="20"
                    y1="30"
                    x2="40"
                    y2="40"
                    stroke="#00a0e3"
                    strokeWidth="2"
                    className="graph-line"
                    role="presentation"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="3"
                    fill="#00a0e3"
                    className="graph-dot"
                    role="presentation"
                  />
                </g>
                {/* UI/UX Design: Connections */}
                <g
                  transform="translate(20, 180)"
                  className="uiux-design-connections"
                  role="group"
                  aria-label="UI/UX design connections illustration"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="20"
                    y2="20"
                    stroke="#00a0e3"
                    strokeWidth="1"
                    className="connection-line"
                    role="presentation"
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r="4"
                    fill="#00a0e3"
                    className="connection-node"
                    role="presentation"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="4"
                    fill="#00a0e3"
                    className="connection-node"
                    role="presentation"
                  />
                  <line
                    x1="20"
                    y1="20"
                    x2="40"
                    y2="0"
                    stroke="#00a0e3"
                    strokeWidth="1"
                    className="connection-line"
                    role="presentation"
                  />
                  <circle
                    cx="40"
                    cy="0"
                    r="4"
                    fill="#00a0e3"
                    className="connection-node"
                    role="presentation"
                  />
                </g>
                {/* Website Maintenance: Support Icons */}
                <g
                  transform="translate(20, 250)"
                  className="website-maintenance-support"
                  role="group"
                  aria-label="Website maintenance support illustration"
                >
                  <circle
                    cx="0"
                    cy="0"
                    r="5"
                    fill="#00a0e3"
                    className="support-icon"
                    role="presentation"
                  />
                  <circle
                    cx="20"
                    cy="-5"
                    r="5"
                    fill="#00a0e3"
                    className="support-icon"
                    role="presentation"
                  />
                  <circle
                    cx="40"
                    cy="0"
                    r="5"
                    fill="#00a0e3"
                    className="support-icon"
                    role="presentation"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}



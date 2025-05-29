'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
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

    // Debugging: Log elements to confirm they are found
    console.log('Dashboard Screen:', dashboardScreen);
    console.log('Webpage Header:', webpageHeader);
    console.log('Webpage Content Elements:', webpageContentElements);
    console.log('App Interface Elements:', appInterfaceElements);
    console.log('App Button Elements:', appButtonElements);

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
    <section className="relative bg-dark-950 pt-8 md:py-24 overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Inline Critical CSS for LCP Element */}
      <style jsx>{`
        h1.text-4xl.sm\\:text-5xl.lg\\:text-7xl.font-bold.text-white.mb-4.tracking-tight {
          font-size: 2.25rem;
          line-height: 2.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
          letter-spacing: -0.025em;
        }
        @media (min-width: 640px) {
          h1.text-4xl.sm\\:text-5xl.lg\\:text-7xl.font-bold.text-white.mb-4.tracking-tight {
            font-size: 3rem;
            line-height: 1;
          }
        }
        @media (min-width: 1024px) {
          h1.text-4xl.sm\\:text-5xl.lg\\:text-7xl.font-bold.text-white.mb-4.tracking-tight {
            font-size: 4.5rem;
            line-height: 1;
          }
        }
      `}</style>

      {/* Subtle Grain Texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
      />
      <div className="w-full px-[10%] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
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
            >
              Empower Your Business with Global Digital Excellence in 2025
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Innovative Web Design Solutions, Custom Mobile Apps, and Digital Marketing Strategies Worldwide
            </motion.p>
            <motion.p
              className="text-md md:text-lg text-gray-500 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Transform your online presence with our expert services tailored for success in 2025.
            </motion.p>
            <motion.div
              className="flex justify-start mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: [1, 1.05, 1], // Pulsing scale effect
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.6 },
                y: { duration: 0.8, delay: 0.6 },
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Button
                size="lg"
                className="btn btn-primary text-white font-semibold"
                icon={<FaArrowRight />}
                iconPosition="right"
                href="/contact-us"
                ariaLabel="Get your free quote today for mobile app development services"
              >
                Get Your Free Quote Today
              </Button>
            </motion.div>
          </div>
          {/* Right: Animated SVG Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <svg
              width="500"
              height="400"
              viewBox="0 0 500 400"
              className="w-full max-w-[500px]"
              role="img"
              aria-label="Illustration of web design, mobile app, digital marketing, and UI/UX design services"
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
                  fill="#1A2526"
                  className="webpage-content"
                  role="presentation"
                />
                <rect
                  x="90"
                  y="110"
                  width="70"
                  height="110"
                  fill="#1A2526"
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
                    fill="#00a0e3"
                    transform="rotate(45)"
                    role="presentation"
                  />
                  <rect
                    x="5"
                    y="5"
                    width="40"
                    height="40"
                    fill="#0F172A"
                    transform="rotate(45)"
                    role="presentation"
                  />
                  <text
                    x="15"
                    y="30"
                    fill="#00a0e3"
                    fontSize="10"
                    fontFamily="monospace"
                    role="presentation"
                  >
                    101
                  </text>
                </g>
                {/* Digital Marketing: Graph */}
                <polyline
                  points="10,150 30,130 50,150 70,110 90,130"
                  fill="none"
                  stroke="#393185"
                  strokeWidth="2"
                  strokeDasharray="100"
                  className="graph-line"
                  role="presentation"
                />
                <circle cx="70" cy="110" r="5" fill="#393185" className="graph-dot" role="presentation" />
                <circle cx="90" cy="130" r="5" fill="#393185" className="graph-dot" role="presentation" />
                {/* UI/UX Design Icon */}
                <g
                  transform="translate(10, 10)"
                  className="uiux-icon"
                  role="group"
                  aria-label="UI/UX design icon"
                >
                  <path
                    d="M10,30 Q20,10 30,30 T50,30"
                    fill="none"
                    stroke="#00a0e3"
                    strokeWidth="2"
                    role="presentation"
                  />
                  <circle cx="40" cy="30" r="5" fill="#00a0e3" role="presentation" />
                </g>
              </g>
              {/* Connection Lines and Nodes */}
              <line
                x1="80"
                y1="80"
                x2="50"
                y2="50"
                stroke="#00a0e3"
                strokeWidth="1"
                strokeDasharray="100"
                className="connection-line"
                role="presentation"
              />
              <circle cx="50" cy="50" r="5" fill="#00a0e3" className="connection-node" role="presentation" />
              <line
                x1="420"
                y1="80"
                x2="450"
                y2="50"
                stroke="#00a0e3"
                strokeWidth="1"
                strokeDasharray="100"
                className="connection-line"
                role="presentation"
              />
              <circle cx="450" cy="50" r="5" fill="#00a0e3" className="connection-node" role="presentation" />
              <line
                x1="80"
                y1="320"
                x2="50"
                y2="350"
                stroke="#00a0e3"
                strokeWidth="1"
                strokeDasharray="100"
                className="connection-line"
                role="presentation"
              />
              <circle cx="50" cy="350" r="5" fill="#00a0e3" className="connection-node" role="presentation" />
              <line
                x1="420"
                y1="320"
                x2="450"
                y2="350"
                stroke="#00a0e3"
                strokeWidth="1"
                strokeDasharray="100"
                className="connection-line"
                role="presentation"
              />
              <circle cx="450" cy="350" r="5" fill="#00a0e3" className="connection-node" role="presentation" />
              {/* Supporting Icons (Other Services) */}
              <g
                transform="translate(50, 50)"
                className="support-icon"
                role="group"
                aria-label="Supporting icon 1"
              >
                <path d="M0,0 L10,5 L0,10 L5,5 Z" fill="#00a0e3" role="presentation" />
              </g>
              <g
                transform="translate(450, 50)"
                className="support-icon"
                role="group"
                aria-label="Supporting icon 2"
              >
                <circle cx="5" cy="5" r="5" fill="#00a0e3" role="presentation" />
              </g>
              <g
                transform="translate(50, 350)"
                className="support-icon"
                role="group"
                aria-label="Supporting icon 3"
              >
                <rect x="0" y="0" width="10" height="10" fill="#00a0e3" role="presentation" />
              </g>
              <g
                transform="translate(450, 350)"
                className="support-icon"
                role="group"
                aria-label="Supporting icon 4"
              >
                <path d="M0,5 L5,0 L10,5 L5,10 Z" fill="#00a0e3" role="presentation" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
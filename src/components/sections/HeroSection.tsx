'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function HeroSection() {
  const [gsap, setGsap] = useState(null);

  useEffect(() => {
    // Dynamically import GSAP to defer its loading
    import('gsap').then((module) => {
      const gsapInstance = module.default;
      setGsap(() => gsapInstance);

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

      // Debugging: Log elements to confirm they are found
      console.log('Dashboard Screen:', dashboardScreen);
      console.log('Webpage Header:', webpageHeader);
      console.log('Webpage Content Elements:', webpageContentElements);
      console.log('App Interface Elements:', appInterfaceElements);
      console.log('App Button Elements:', appButtonElements);

      // Apply GSAP animations only if elements exist
      if (dashboardScreen) {
        gsapInstance.fromTo(
          dashboardScreen,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
        );
      }
      if (webpageHeader) {
        gsapInstance.fromTo(
          webpageHeader,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5, delay: 0.5, ease: 'power2.out' }
        );
      }
      if (webpageContentElements.length > 0) {
        webpageContentElements.forEach((element) => {
          gsapInstance.fromTo(
            element,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 0.5, delay: 0.7, ease: 'power2.out' }
          );
        });
      }
      if (appInterfaceElements.length > 0) {
        appInterfaceElements.forEach((element) => {
          gsapInstance.fromTo(
            element,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 0.5, delay: 0.9, ease: 'power2.out' }
          );
        });
      }
      if (appButtonElements.length > 0) {
        appButtonElements.forEach((element) => {
          gsapInstance.fromTo(
            element,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 0.3, delay: 1.1, ease: 'power2.out', stagger: 0.2 }
          );
          // Pulsing animation
          gsapInstance.to(element, {
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
        gsapInstance.fromTo(
          codeSnippet,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5, delay: 1.3, ease: 'power2.out' }
        );
      }
      if (businessPanel) {
        gsapInstance.fromTo(
          businessPanel,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.5, delay: 1.5, ease: 'power2.out' }
        );
      }
      if (businessCube) {
        gsapInstance.fromTo(
          businessCube,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 1.7, ease: 'power2.out' }
        );
        gsapInstance.to(businessCube, {
          scale: 1.1,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
      if (graphLine) {
        gsapInstance.fromTo(
          graphLine,
          { strokeDasharray: 100, strokeDashoffset: 100 },
          { strokeDashoffset: 0, duration: 1, delay: 1.9, ease: 'power2.out' }
        );
      }
      if (graphDotElements.length > 0) {
        graphDotElements.forEach((element) => {
          gsapInstance.fromTo(
            element,
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.3, delay: 2.5, ease: 'power2.out', stagger: 0.1 }
          );
        });
      }
      if (connectionLineElements.length > 0) {
        connectionLineElements.forEach((element) => {
          gsapInstance.fromTo(
            element,
            { strokeDasharray: 100, strokeDashoffset: 100 },
            { strokeDashoffset: 0, duration: 1, delay: 2, ease: 'power2.out', stagger: 0.2 }
          );
        });
      }
      if (connectionNodeElements.length > 0) {
        connectionNodeElements.forEach((element) => {
          gsapInstance.fromTo(
            element,
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5, delay: 2.2, ease: 'power2.out', stagger: 0.1 }
          );
        });
      }
      if (supportIconElements.length > 0) {
        supportIconElements.forEach((element) => {
          gsapInstance.fromTo(
            element,
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5, delay: 2.5, ease: 'power2.out', stagger: 0.1 }
          );
          gsapInstance.to(element, {
            rotation: 360,
            duration: 5,
            repeat: -1,
            ease: 'linear',
            stagger: 0.2,
          });
        });
      }
    });
  }, []);

  return (
    <section className="relative bg-dark-950 pt-8 md:py-24 overflow-hidden">
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
          {/* Left: Updated Headline, Tagline, and CTA */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.1)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Empower Your Business with Global Digital Excellence
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Delivering Web Design, Mobile Apps, and Custom Solutions Worldwide
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                size="lg"
                variant="primary"
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold shadow-lg hover:shadow-teal-500/40"
                icon={<FaArrowRight />}
                iconPosition="right"
                href="/contact"
              >
                Discover Our Global Solutions
              </Button>
            </motion.div>
          </div>
          {/* Right: 2D Animated SVG Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <svg width="500" height="400" viewBox="0 0 500 400" className="w-full max-w-[500px]">
              {/* Dashboard Background */}
              <rect x="50" y="50" width="400" height="300" rx="20" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" className="dashboard-screen" />
              {/* Development: Dual-Display Screen (Web and Mobile) */}
              <g transform="translate(80, 80)">
                {/* Web Development */}
                <rect x="0" y="0" width="170" height="30" fill="#14B8A6" className="webpage-header" />
                <rect x="0" y="50" width="170" height="180" fill="#0F172A" stroke="#14B8A6" strokeWidth="1" className="webpage-content" />
                <rect x="10" y="60" width="150" height="40" fill="#1A2526" className="webpage-content" />
                <rect x="10" y="110" width="70" height="110" fill="#1A2526" className="webpage-content" />
                <rect x="90" y="110" width="70" height="110" fill="#1A2526" className="webpage-content" />
                {/* Mobile App Development */}
                <rect x="180" y="0" width="140" height="230" rx="15" fill="#0F172A" stroke="#14B8A6" strokeWidth="1" className="app-interface" />
                <rect x="190" y="20" width="120" height="190" fill="#0F172A" className="app-interface" />
                <rect x="220" y="40" width="60" height="30" rx="5" fill="#14B8A6" className="app-button" />
                <rect x="220" y="80" width="60" height="30" rx="5" fill="#14B8A6" className="app-button" />
                <circle cx="300" cy="190" r="10" fill="#00CED1" className="app-button" />
              </g>
              {/* Code Snippet Overlay */}
              <g transform="translate(200, 40)" className="code-snippet">
                <rect x="0" y="0" width="100" height="40" rx="5" fill="#0F172A" stroke="#14B8A6" strokeWidth="1" />
                <text x="10" y="25" fill="#14B8A6" fontSize="12" fontFamily="monospace">&lt;code/&gt;</text>
              </g>
              {/* Digital Business Solutions: Panel */}
              <g transform="translate(330, 80)" className="business-panel">
                <rect x="0" y="0" width="90" height="230" rx="10" fill="#0F172A" stroke="#14B8A6" strokeWidth="1" />
                {/* Custom Business Solutions: Glowing Cube */}
                <g transform="translate(20, 20)" className="business-cube">
                  <rect x="0" y="0" width="50" height="50" fill="#14B8A6" transform="rotate(45)" />
                  <rect x="5" y="5" width="40" height="40" fill="#0F172A" transform="rotate(45)" />
                  <text x="15" y="30" fill="#14B8A6" fontSize="10" fontFamily="monospace">101</text>
                </g>
                {/* Digital Marketing: Graph */}
                <polyline
                  points="10,150 30,130 50,150 70,110 90,130"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeDasharray="100"
                  className="graph-line"
                />
                <circle cx="70" cy="110" r="5" fill="#10B981" className="graph-dot" />
                <circle cx="90" cy="130" r="5" fill="#10B981" className="graph-dot" />
              </g>
              {/* Connection Lines and Nodes */}
              <line x1="80" y1="80" x2="50" y2="50" stroke="#14B8A6" strokeWidth="1" strokeDasharray="100" className="connection-line" />
              <circle cx="50" cy="50" r="5" fill="#14B8A6" className="connection-node" />
              <line x1="420" y1="80" x2="450" y2="50" stroke="#14B8A6" strokeWidth="1" strokeDasharray="100" className="connection-line" />
              <circle cx="450" cy="50" r="5" fill="#14B8A6" className="connection-node" />
              <line x1="80" y1="320" x2="50" y2="350" stroke="#14B8A6" strokeWidth="1" strokeDasharray="100" className="connection-line" />
              <circle cx="50" cy="350" r="5" fill="#14B8A6" className="connection-node" />
              <line x1="420" y1="320" x2="450" y2="350" stroke="#14B8A6" strokeWidth="1" strokeDasharray="100" className="connection-line" />
              <circle cx="450" cy="350" r="5" fill="#14B8A6" className="connection-node" />
              {/* Supporting Icons (Other Services) */}
              <g transform="translate(50, 50)" className="support-icon">
                <path d="M0,0 L10,5 L0,10 L5,5 Z" fill="#14B8A6" />
              </g>
              <g transform="translate(450, 50)" className="support-icon">
                <circle cx="5" cy="5" r="5" fill="#14B8A6" />
              </g>
              <g transform="translate(50, 350)" className="support-icon">
                <rect x="0" y="0" width="10" height="10" fill="#14B8A6" />
              </g>
              <g transform="translate(450, 350)" className="support-icon">
                <path d="M0,5 L5,0 L10,5 L5,10 Z" fill="#14B8A6" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
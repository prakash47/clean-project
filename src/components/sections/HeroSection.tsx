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
    const cyberneticWaveform = document.querySelector('.cybernetic-waveform');
    const serviceIcons = document.querySelectorAll('.service-icon');
    const connectionLineElements = document.querySelectorAll('.connection-line');
    const connectionNodeElements = document.querySelectorAll('.connection-node');
    const supportIconElements = document.querySelectorAll('.support-icon');

    // Debugging: Log elements to confirm they are found
    console.log('Cybernetic Waveform:', cyberneticWaveform);
    console.log('Service Icons:', serviceIcons);

    // Apply GSAP animations only if elements exist
    if (cyberneticWaveform) {
      gsap.fromTo(
        cyberneticWaveform,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );
    }
    if (serviceIcons.length > 0) {
      serviceIcons.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.5 + index * 0.2, ease: 'power2.out' }
        );
        gsap.to(element, {
          opacity: 0.7,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1 + index * 0.2,
        });
      });
    }
    if (connectionLineElements.length > 0) {
      connectionLineElements.forEach((element) => {
        gsap.fromTo(
          element,
          { strokeDasharray: 100, strokeDashoffset: 100 },
          { strokeDashoffset: 0, duration: 1, delay: 2, ease: 'power2.out', stagger: 0.2 }
        );
      });
    }
    if (connectionNodeElements.length > 0) {
      connectionNodeElements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 2.2, ease: 'power2.out', stagger: 0.1 }
        );
      });
    }
    if (supportIconElements.length > 0) {
      supportIconElements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 2.5, ease: 'power2.out', stagger: 0.1 }
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
          {/* Left: Headline, Tagline, and CTA */}
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
          {/* Right: Redesigned 2D Animated SVG Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <svg width="500" height="400" viewBox="0 0 500 400" className="w-full max-w-[500px]">
              {/* Cybernetic Waveform Background */}
              <rect x="50" y="50" width="400" height="300" rx="20" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" className="cybernetic-waveform" />
              {/* Digital Waves and Tech Shards */}
              <g transform="translate(100, 80)">
                {/* Digital Wave 1 (Vertical Cascade) */}
                <g transform="translate(50, 0)" className="service-icon wave-1">
                  <path d="M0,0 Q20,50 -20,100 Q20,150 -20,200" fill="none" stroke="url(#grad-teal)" strokeWidth="4" strokeDasharray="10,10" />
                  <text x="0" y="-10" fill="#fff" fontSize="12" fontFamily="monospace" textAnchor="middle">{`{ }`}</text>
                  <text x="0" y="220" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">Code Wave</text>
                </g>
                {/* Digital Wave 2 (Curved Cascade) */}
                <g transform="translate(150, 0)" className="service-icon wave-2">
                  <path d="M0,0 Q50,50 0,100 Q-50,150 0,200" fill="none" stroke="url(#grad-teal)" strokeWidth="4" strokeDasharray="10,10" />
                  <text x="0" y="-10" fill="#fff" fontSize="12" fontFamily="monospace" textAnchor="middle">{`< />`}</text>
                  <text x="0" y="220" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">Digital Flow</text>
                </g>
                {/* Tech Shard 1 (Right) */}
                <g transform="translate(250, 50)" className="service-icon tech-shard-1">
                  <path d="M0,0 L40,20 L0,40 L-40,20 Z" fill="url(#grad-teal)" stroke="#14B8A6" strokeWidth="2" opacity="0.8" />
                  <text x="0" y="15" fill="#0F172A" fontSize="10" fontFamily="monospace" textAnchor="middle">01</text>
                  <text x="0" y="60" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">Tech Shard</text>
                </g>
                {/* Tech Shard 2 (Bottom-Left) */}
                <g transform="translate(50, 150)" className="service-icon tech-shard-2">
                  <path d="M0,0 L30,15 L0,30 L-30,15 Z" fill="url(#grad-teal)" stroke="#14B8A6" strokeWidth="2" opacity="0.8" />
                  <text x="0" y="10" fill="#0F172A" fontSize="8" fontFamily="monospace" textAnchor="middle">{`{}`}</text>
                  <text x="0" y="50" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">Code Shard</text>
                </g>
                {/* Digital Pulse (Bottom-Center) */}
                <g transform="translate(150, 150)" className="service-icon digital-pulse">
                  <circle cx="0" cy="0" r="25" fill="url(#grad-teal)" stroke="#14B8A6" strokeWidth="2" />
                  <circle cx="0" cy="0" r="15" fill="#0F172A" />
                  <text x="0" y="5" fill="#fff" fontSize="10" fontFamily="monospace" textAnchor="middle">10</text>
                  <text x="0" y="50" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">Digital Pulse</text>
                </g>
                {/* Interface Wave (Bottom-Right) */}
                <g transform="translate(250, 150)" className="service-icon interface-wave">
                  <path d="M-40,0 Q0,-40 40,0" fill="none" stroke="url(#grad-teal)" strokeWidth="4" strokeDasharray="10,10" />
                  <text x="0" y="-50" fill="#fff" fontSize="12" fontFamily="monospace" textAnchor="middle">{`<> </>`}</text>
                  <text x="0" y="30" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">Interface Wave</text>
                </g>
              </g>
              {/* Wave Connections */}
              <path d="M150,130 Q200,100 250,110" fill="none" stroke="#14B8A6" strokeWidth="1" strokeDasharray="100" className="connection-line" />
              <path d="M250,110 Q300,130 350,130" fill="none" stroke="#14B8A6" strokeWidth="1" strokeDasharray="100" className="connection-line" />
              <path d="M350,180 Q300,200 250,230" fill="none" stroke="#14B8A6" strokeWidth="1" strokeDasharray="100" className="connection-line" />
              <path d="M250,230 Q200,250 150,230" fill="none" stroke="#14B8A6" strokeWidth="1" strokeDasharray="100" className="connection-line" />
              <path d="M150,230 Q100,200 100,180" fill="none" stroke="#14B8A6" strokeWidth="1" strokeDasharray="100" className="connection-line" />
              {/* Connection Nodes */}
              <circle cx="150" cy="130" r="5" fill="#14B8A6" className="connection-node" />
              <circle cx="250" cy="110" r="5" fill="#14B8A6" className="connection-node" />
              <circle cx="350" cy="130" r="5" fill="#14B8A6" className="connection-node" />
              <circle cx="350" cy="180" r="5" fill="#14B8A6" className="connection-node" />
              <circle cx="250" cy="230" r="5" fill="#14B8A6" className="connection-node" />
              <circle cx="150" cy="230" r="5" fill="#14B8A6" className="connection-node" />
              <circle cx="100" cy="180" r="5" fill="#14B8A6" className="connection-node" />
              {/* Gradient Definition */}
              <defs>
                <linearGradient id="grad-teal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#14B8A6', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#00CED1', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              {/* Supporting Icons */}
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
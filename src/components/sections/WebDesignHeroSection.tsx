'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function WebDesignHeroSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Ensure elements exist before applying animations
    const webScreen = document.querySelector('.web-screen');
    const wireframe = document.querySelector('.wireframe');
    const interactivePage = document.querySelector('.interactive-page');
    const connectionLineElements = document.querySelectorAll('.connection-line');
    const connectionNodeElements = document.querySelectorAll('.connection-node');
    const supportIconElements = document.querySelectorAll('.support-icon');

    if (webScreen) {
      gsap.fromTo(
        webScreen,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );
    }
    if (wireframe) {
      gsap.fromTo(
        wireframe,
        { opacity: 1 },
        { opacity: 0, duration: 1, delay: 1, ease: 'power2.out' }
      );
    }
    if (interactivePage) {
      gsap.fromTo(
        interactivePage,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1.5, ease: 'power2.out' }
      );
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
          { opacity: 1, scale: 1, duration: 0.5, delay: 2.4, ease: 'power2.out', stagger: 0.1 }
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
          {/* Left: Headline, Tagline, Body, and CTA */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.1)',
              }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Custom Web Design & Development That Powers Your Success
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl font-semibold text-teal-500 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Create Stunning, High-Performing Websites That Drive Results in 2025
            </motion.p>
            <motion.p
              className="text-lg text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your online presence with custom web design and mobile-first web development. Our expert team builds SEO-driven websites that captivate audiences and deliver measurable growth. Ready to stand out?
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
                href="/contact"
              >
                Get Your Free Quote Today
              </Button>
            </motion.div>
          </div>
          {/* Right: Animated SVG (Website Transitioning from Wireframe to Interactive Page) */}
          <div className="md:w-1/2 flex justify-center">
            <svg width="500" height="400" viewBox="0 0 500 400" className="w-full max-w-[500px]">
              {/* Web Screen Background */}
              <rect x="50" y="50" width="400" height="300" rx="20" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" className="web-screen" />
              {/* Wireframe (Fades Out) */}
              <g className="wireframe" transform="translate(80, 80)">
                <rect x="0" y="0" width="340" height="30" fill="none" stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
                <rect x="0" y="40" width="340" height="180" fill="none" stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
                <rect x="10" y="50" width="320" height="40" fill="none" stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
                <rect x="10" y="100" width="150" height="110" fill="none" stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
                <rect x="180" y="100" width="150" height="110" fill="none" stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
              </g>
              {/* Interactive Page (Fades In) */}
              <g className="interactive-page" transform="translate(80, 80)">
                <rect x="0" y="0" width="340" height="30" fill="#14B8A6" />
                <rect x="0" y="40" width="340" height="180" fill="#0F172A" stroke="#14B8A6" strokeWidth="1" />
                <rect x="10" y="50" width="320" height="40" fill="#1A2526" />
                <rect x="10" y="100" width="150" height="110" fill="#1A2526" />
                <rect x="180" y="100" width="150" height="110" fill="#1A2526" />
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
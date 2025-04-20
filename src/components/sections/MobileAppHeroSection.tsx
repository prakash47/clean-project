'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function MobileAppHeroSection() {
  const [gsap, setGsap] = useState(null);

  useEffect(() => {
    import('gsap').then((module) => {
      const gsapInstance = module.default;
      setGsap(() => gsapInstance);

      const mobileDevice = document.querySelector('.mobile-device');
      const appScreen1 = document.querySelector('.app-screen-1');
      const appScreen2 = document.querySelector('.app-screen-2');
      const appScreen3 = document.querySelector('.app-screen-3');
      const connectionLineElements = document.querySelectorAll('.connection-line');
      const connectionNodeElements = document.querySelectorAll('.connection-node');
      const supportIconElements = document.querySelectorAll('.support-icon');

      if (mobileDevice) {
        gsapInstance.fromTo(
          mobileDevice,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
        );
      }
      if (appScreen1) {
        gsapInstance.fromTo(
          appScreen1,
          { opacity: 1 },
          { opacity: 0, duration: 1, delay: 1, ease: 'power2.out' }
        );
      }
      if (appScreen2) {
        gsapInstance.fromTo(
          appScreen2,
          { opacity: 0 },
          { opacity: 1, duration: 1, delay: 1.5, ease: 'power2.out' }
        );
        gsapInstance.fromTo(
          appScreen2,
          { opacity: 1 },
          { opacity: 0, duration: 1, delay: 2.5, ease: 'power2.out' }
        );
      }
      if (appScreen3) {
        gsapInstance.fromTo(
          appScreen3,
          { opacity: 0 },
          { opacity: 1, duration: 1, delay: 3, ease: 'power2.out' }
        );
      }
      if (connectionLineElements.length > 0) {
        connectionLineElements.forEach((element) => {
          gsapInstance.fromTo(
            element,
            { strokeDasharray: 100, strokeDashoffset: 100 },
            { strokeDashoffset: 0, duration: 1, delay: 3.5, ease: 'power2.out', stagger: 0.2 }
          );
        });
      }
      if (connectionNodeElements.length > 0) {
        connectionNodeElements.forEach((element) => {
          gsapInstance.fromTo(
            element,
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5, delay: 3.7, ease: 'power2.out', stagger: 0.1 }
          );
        });
      }
      if (supportIconElements.length > 0) {
        supportIconElements.forEach((element) => {
          gsapInstance.fromTo(
            element,
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5, delay: 3.9, ease: 'power2.out', stagger: 0.1 }
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
              Expert Mobile App Development Services for iOS & Android
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl font-semibold text-teal-500 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Build Seamless, High-Performing Apps That Engage Users in 2025
            </motion.p>
            <motion.p
              className="text-lg text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your business with custom mobile app development. From iOS to Android, our team delivers user-friendly, scalable apps that drive engagement and growth. Ready to bring your app idea to life?
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
          {/* Right: Animated SVG (Mobile Device with App Screens Transitioning) */}
          <div className="md:w-1/2 flex justify-center">
            <svg width="500" height="400" viewBox="0 0 500 400" className="w-full max-w-[500px]">
              {/* Mobile Device Background */}
              <rect x="150" y="50" width="200" height="300" rx="20" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" className="mobile-device" />
              {/* App Screen 1 (Fades Out) */}
              <g className="app-screen-1" transform="translate(160, 60)">
                <rect x="0" y="0" width="180" height="280" rx="15" fill="#0F172A" stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
                <rect x="5" y="5" width="170" height="20" fill="none" stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
                <rect x="5" y="35" width="170" height="235" fill="none" stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
              </g>
              {/* App Screen 2 (Fades In, Then Out) */}
              <g className="app-screen-2" transform="translate(160, 60)">
                <rect x="0" y="0" width="180" height="280" rx="15" fill="#0F172A" stroke="#14B8A6" strokeWidth="1" />
                <rect x="5" y="5" width="170" height="20" fill="#14B8A6" />
                <rect x="5" y="35" width="170" height="235" fill="#1A2526" />
                <rect x="10" y="40" width="160" height="50" fill="#0F172A" />
              </g>
              {/* App Screen 3 (Fades In) */}
              <g className="app-screen-3" transform="translate(160, 60)">
                <rect x="0" y="0" width="180" height="280" rx="15" fill="#0F172A" stroke="#14B8A6" strokeWidth="1" />
                <rect x="5" y="5" width="170" height="20" fill="#14B8A6" />
                <rect x="5" y="35" width="170" height="235" fill="#1A2526" />
                <rect x="10" y="40" width="160" height="50" fill="#0F172A" />
                <rect x="10" y="100" width="70" height="160" fill="#0F172A" />
                <rect x="90" y="100" width="80" height="160" fill="#0F172A" />
                <rect x="10" y="110" width="60" height="40" fill="#14B8A6" />
                <rect x="10" y="160" width="60" height="40" fill="#14B8A6" />
              </g>
              {/* Connection Lines and Nodes */}
              <line x1="150" y1="80" x2="120" y2="50" stroke="#14B8A6" strokeWidth="1" strokeDasharray="100" className="connection-line" />
              <circle cx="120" cy="50" r="5" fill="#14B8A6" className="connection-node" />
              <line x1="350" y1="80" x2="380" y2="50" stroke="#14B8A6" strokeWidth="1" strokeDasharray="100" className="connection-line" />
              <circle cx="380" cy="50" r="5" fill="#14B8A6" className="connection-node" />
              <line x1="150" y1="320" x2="120" y2="350" stroke="#14B8A6" strokeWidth="1" strokeDasharray="100" className="connection-line" />
              <circle cx="120" cy="350" r="5" fill="#14B8A6" className="connection-node" />
              <line x1="350" y1="320" x2="380" y2="350" stroke="#14B8A6" strokeWidth="1" strokeDasharray="100" className="connection-line" />
              <circle cx="380" cy="350" r="5" fill="#14B8A6" className="connection-node" />
              {/* Supporting Icons */}
              <g transform="translate(120, 50)" className="support-icon">
                <path d="M0,0 L10,5 L0,10 L5,5 Z" fill="#14B8A6" />
              </g>
              <g transform="translate(380, 50)" className="support-icon">
                <circle cx="5" cy="5" r="5" fill="#14B8A6" />
              </g>
              <g transform="translate(120, 350)" className="support-icon">
                <rect x="0" y="0" width="10" height="10" fill="#14B8A6" />
              </g>
              <g transform="translate(380, 350)" className="support-icon">
                <path d="M0,5 L5,0 L10,5 L5,10 Z" fill="#14B8A6" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
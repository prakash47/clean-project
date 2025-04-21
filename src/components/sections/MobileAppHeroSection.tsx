'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function MobileAppHeroSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Ensure elements exist before applying animations
    const mobileDevice = document.querySelector('.mobile-device');
    const appScreen1 = document.querySelector('.app-screen-1');
    const appScreen2 = document.querySelector('.app-screen-2');

    if (mobileDevice) {
      gsap.fromTo(
        mobileDevice,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );
    }
    if (appScreen1) {
      gsap.fromTo(
        appScreen1,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.5, ease: 'power2.out' }
      );
    }
    if (appScreen2) {
      gsap.fromTo(
        appScreen2,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.7, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <section className="relative bg-dark-950 pt-8 md:py-24 overflow-hidden">
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
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Mobile App Development
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Build Seamless and Scalable Mobile Apps for Your Business
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
                Get Started
              </Button>
            </motion.div>
          </div>
          {/* Right: 2D Animated SVG Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <svg width="500" height="400" viewBox="0 0 500 400" className="w-full max-w-[500px]">
              {/* Mobile Device Background */}
              <rect x="150" y="50" width="200" height="300" rx="20" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" className="mobile-device" />
              {/* App Screens */}
              <g transform="translate(160, 70)">
                <rect x="0" y="0" width="180" height="100" rx="10" fill="#0F172A" className="app-screen-1" />
                <rect x="0" y="120" width="180" height="100" rx="10" fill="#0F172A" className="app-screen-2" />
              </g>
              {/* Connection Lines */}
              <line x1="80" y1="80" x2="50" y2="50" stroke="#14B8A6" strokeWidth="1" strokeDasharray="100" />
              <circle cx="50" cy="50" r="5" fill="#14B8A6" />
              <line x1="420" y1="80" x2="450" y2="50" stroke="#14B8A6" strokeWidth="1" strokeDasharray="100" />
              <circle cx="450" cy="50" r="5" fill="#14B8A6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
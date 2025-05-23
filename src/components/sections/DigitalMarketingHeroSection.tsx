'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function DigitalMarketingHeroSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Ensure elements exist before applying animations
    const dashboard = document.querySelector('.dashboard');
    const chart = document.querySelector('.chart');

    if (dashboard) {
      gsap.fromTo(
        dashboard,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );
    }
    if (chart) {
      gsap.fromTo(
        chart,
        { strokeDasharray: 100, strokeDashoffset: 100 },
        { strokeDashoffset: 0, duration: 1, delay: 0.5, ease: 'power2.out' }
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
              Digital Marketing Solutions
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Boost Your Online Presence with Proven Strategies
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
              {/* Dashboard Background */}
              <rect x="50" y="50" width="400" height="300" rx="20" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" className="dashboard" />
              {/* Chart Line */}
              <g transform="translate(80, 80)">
                <polyline
                  points="0,200 100,150 200,180 300,100 400,120"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3"
                  strokeDasharray="100"
                  className="chart"
                />
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
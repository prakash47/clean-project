'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

// Define the GSAP type based on the entire module
type GSAP = typeof import('gsap');

export default function CustomBusinessSolutionsHeroSection() {
  const [gsap, setGsap] = useState<GSAP | null>(null);

  useEffect(() => {
    import('gsap').then((module) => {
      const gsapInstance = module; // The entire module is the GSAP instance
      setGsap(gsapInstance);

      // Ensure elements exist before applying animations
      const workspace = document.querySelector('.workspace');
      const automationGear = document.querySelector('.automation-gear');

      if (workspace && gsapInstance) {
        gsapInstance.fromTo(
          workspace,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
        );
      }
      if (automationGear && gsapInstance) {
        gsapInstance.to(automationGear, {
          rotation: 360,
          duration: 5,
          repeat: -1,
          ease: 'linear',
        });
      }
    });
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
              Custom Business Solutions
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Tailored Software to Streamline Your Operations
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
              {/* Workspace Background */}
              <rect x="50" y="50" width="400" height="300" rx="20" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" className="workspace" />
              {/* Automation Gear */}
              <g transform="translate(200, 150)" className="automation-gear">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="10" />
                <circle cx="50" cy="50" r="20" fill="#10B981" />
                <rect x="45" y="10" width="10" height="20" fill="#10B981" />
                <rect x="45" y="70" width="10" height="20" fill="#10B981" />
                <rect x="10" y="45" width="20" height="10" fill="#10B981" />
                <rect x="70" y="45" width="20" height="10" fill="#10B981" />
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
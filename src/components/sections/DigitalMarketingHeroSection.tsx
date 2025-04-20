'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function DigitalMarketingHeroSection() {
  const [gsap, setGsap] = useState(null);

  useEffect(() => {
    import('gsap').then((module) => {
      const gsapInstance = module.default;
      setGsap(() => gsapInstance);

      const dashboard = document.querySelector('.dashboard');
      const chart = document.querySelector('.chart');
      const socialIcons = document.querySelector('.social-icons');
      const growthGraph = document.querySelector('.growth-graph');
      const connectionLineElements = document.querySelectorAll('.connection-line');
      const connectionNodeElements = document.querySelectorAll('.connection-node');
      const supportIconElements = document.querySelectorAll('.support-icon');

      if (dashboard) {
        gsapInstance.fromTo(
          dashboard,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
        );
      }
      if (chart) {
        gsapInstance.fromTo(
          chart,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, delay: 1, ease: 'power2.out' }
        );
      }
      if (socialIcons) {
        gsapInstance.fromTo(
          socialIcons,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 1.5, ease: 'power2.out' }
        );
      }
      if (growthGraph) {
        gsapInstance.fromTo(
          growthGraph,
          { opacity: 0, strokeDasharray: 100, strokeDashoffset: 100 },
          { opacity: 1, strokeDashoffset: 0, duration: 1, delay: 2, ease: 'power2.out' }
        );
      }
      if (connectionLineElements.length > 0) {
        connectionLineElements.forEach((element) => {
          gsapInstance.fromTo(
            element,
            { strokeDasharray: 100, strokeDashoffset: 100 },
            { strokeDashoffset: 0, duration: 1, delay: 2.5, ease: 'power2.out', stagger: 0.2 }
          );
        });
      }
      if (connectionNodeElements.length > 0) {
        connectionNodeElements.forEach((element) => {
          gsapInstance.fromTo(
            element,
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5, delay: 2.7, ease: 'power2.out', stagger: 0.1 }
          );
        });
      }
      if (supportIconElements.length > 0) {
        supportIconElements.forEach((element) => {
          gsapInstance.fromTo(
            element,
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5, delay: 2.9, ease: 'power2.out', stagger: 0.1 }
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
              Boost Your Business with Expert Digital Marketing Services
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl font-semibold text-teal-500 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Drive Traffic, Engage Audiences, and Grow Revenue in 2025
            </motion.p>
            <motion.p
              className="text-lg text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Supercharge your online presence with our comprehensive digital marketing services. From SEO to social media, we deliver strategies that drive traffic, engage audiences, and boost conversions. Ready to grow your business?
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
          {/* Right: Animated SVG (Digital Marketing Dashboard) */}
          <div className="md:w-1/2 flex justify-center">
            <svg width="500" height="400" viewBox="0 0 500 400" className="w-full max-w-[500px]">
              {/* Dashboard Background */}
              <rect x="50" y="50" width="400" height="300" rx="20" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" className="dashboard" />
              {/* Dashboard Content */}
              <g transform="translate(80, 80)">
                {/* Header */}
                <rect x="0" y="0" width="340" height="30" fill="#14B8A6" />
                {/* Chart */}
                <g className="chart" transform="translate(0, 40)">
                  <rect x="0" y="0" width="100" height="80" fill="#0F172A" stroke="#14B8A6" strokeWidth="1" />
                  <rect x="10" y="20" width="20" height="60" fill="#FF6B6B" />
                  <rect x="40" y="40" width="20" height="40" fill="#4ECDC4" />
                  <rect x="70" y="10" width="20" height="70" fill="#45B7D1" />
                </g>
                {/* Social Media Icons */}
                <g className="social-icons" transform="translate(120, 40)">
                  <circle cx="20" cy="20" r="15" fill="#14B8A6" />
                  <path d="M15,25 L25,15" stroke="#0F172A" strokeWidth="2" />
                  <circle cx="60" cy="20" r="15" fill="#14B8A6" />
                  <path d="M55,25 Q60,15 65,25" stroke="#0F172A" strokeWidth="2" />
                  <circle cx="100" cy="20" r="15" fill="#14B8A6" />
                  <path d="M95,25 L105,15" stroke="#0F172A" strokeWidth="2" />
                </g>
                {/* Growth Graph */}
                <g className="growth-graph" transform="translate(220, 40)">
                  <polyline
                    points="0,80 40,60 80,70 120,20 160,40"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeDasharray="100"
                  />
                  <circle cx="120" cy="20" r="5" fill="#10B981" />
                  <circle cx="160" cy="40" r="5" fill="#10B981" />
                </g>
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
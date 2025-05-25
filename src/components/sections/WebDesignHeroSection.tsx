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
    const websiteMonitor = document.querySelector('.website-monitor');
    const websiteElements = document.querySelectorAll('.website-element');
    const codeMonitor = document.querySelector('.code-monitor');
    const codeLines = document.querySelectorAll('.code-line');
    const cursor = document.querySelector('.cursor');
    const dataStream = document.querySelectorAll('.data-stream');
    const tablet = document.querySelector('.tablet');
    const mobile = document.querySelector('.mobile');
    const grainTexture = document.querySelector('.grain-texture');

    if (websiteMonitor) {
      gsap.fromTo(
        websiteMonitor,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );
    }
    if (websiteElements.length > 0) {
      websiteElements.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, delay: 1 + index * 0.3, ease: 'power2.out' }
        );
      });
    }
    if (codeMonitor) {
      gsap.fromTo(
        codeMonitor,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );
    }
    if (codeLines.length > 0) {
      codeLines.forEach((line, index) => {
        gsap.fromTo(
          line,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, delay: 1.5 + index * 0.5, ease: 'power2.out' }
        );
      });
    }
    if (cursor) {
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        ease: 'step.end',
        delay: 2,
      });
      gsap.to(cursor, {
        x: 80,
        duration: 2.5,
        repeat: -1,
        ease: 'none',
        delay: 2,
      });
    }
    if (dataStream.length > 0) {
      dataStream.forEach((particle, index) => {
        gsap.fromTo(
          particle,
          { opacity: 1, x: 0 },
          { opacity: 0, x: 100, duration: 1, delay: 2 + index * 0.2, repeat: -1, ease: 'power2.out' }
        );
      });
    }
    if (tablet) {
      gsap.fromTo(
        tablet,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, delay: 2.5, ease: 'power2.out' }
      );
    }
    if (mobile) {
      gsap.fromTo(
        mobile,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, delay: 2.7, ease: 'power2.out' }
      );
    }
    if (grainTexture) {
      gsap.fromTo(
        grainTexture,
        { opacity: 0.1 },
        { opacity: 0.05, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' }
      );
    }
  });

  // Structured data for the service
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Web Design and Development',
    'provider': {
      '@type': 'Organization',
      'name': 'Intention Infoservice',
      'url': 'https://intentioninfoservice.com',
      'logo': 'https://intentioninfoservice.com/images/logo.webp',
    },
    'description': 'Transform your online presence with custom web design and mobile-first web development. Get a free quote for SEO-optimized websites that drive results in 2025.',
    'areaServed': 'Global',
    'offers': {
      '@type': 'Offer',
      'url': 'https://intentioninfoservice.com/services/web-design-development',
      'name': 'Custom Web Design and Development',
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
        h1 {
          font-size: 2.25rem;
          line-height: 2.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
          letter-spacing: -0.025em;
        }
        @media (min-width: 640px) {
          h1 {
            font-size: 3rem;
            line-height: 1;
          }
        }
        @media (min-width: 1024px) {
          h1 {
            font-size: 3.75rem;
            line-height: 1;
          }
        }
      `}</style>

      {/* Subtle Grain Texture with Animation */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none grain-texture"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
      />
      <div className="w-full px-[10%] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Headline, Tagline, Body, and CTAs */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
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
              className="text-lg md:text-xl font-semibold text-teal-500 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Create Stunning, High-Performing Websites That Drive Results in 2025
            </motion.p>
            <motion.p
              className="text-md md:text-lg text-gray-400 mb-8"
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
              className="flex gap-4 justify-center md:justify-start"
            >
              <Button
                size="lg"
                variant="primary"
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold shadow-lg hover:shadow-teal-500/40"
                icon={<FaArrowRight />}
                iconPosition="right"
                href="/contact-us"
              >
                Get Your Free Quote Today
              </Button>
              {/* <Button
                size="lg"
                variant="secondary"
                className="bg-transparent border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-semibold"
                href="/portfolio"
              >
                See Our Work
              </Button> */}
            </motion.div>
          </div>
          {/* Right: SVG Illustration (Live Web Dev Studio - Refined) */}
          <div className="md:w-1/2 flex justify-center">
            <svg
              width="500"
              height="400"
              viewBox="0 0 500 400"
              className="w-full max-w-[500px]"
              role="img"
              aria-label="Illustration of a website and code editor open on desktop screens with tablet and mobile views"
            >
              {/* Website Desktop Monitor (Left Side) */}
              <g transform="translate(50, 50)" className="website-monitor">
                {/* Monitor Frame */}
                <rect x="0" y="0" width="200" height="200" fill="#1E293B" stroke="#14B8A6" strokeWidth="3" rx="10" />
                <path d="M80,200 L120,200 L100,220 Z" fill="#1E293B" stroke="#14B8A6" strokeWidth="3" />
                <rect x="100" y="220" width="20" height="20" fill="#1E293B" stroke="#14B8A6" strokeWidth="3" />
                {/* Website Content */}
                <g transform="translate(10, 10)">
                  <rect x="0" y="0" width="180" height="180" fill="#0F172A" rx="5" />
                  {/* Header */}
                  <rect x="5" y="5" width="170" height="30" fill="#14B8A6" rx="3" className="website-element" />
                  {/* Main Image */}
                  <rect x="5" y="40" width="170" height="60" fill="#1E293B" rx="3" className="website-element" />
                  {/* Content Blocks */}
                  <rect x="5" y="105" width="85" height="40" fill="#1E293B" rx="3" className="website-element" />
                  <rect x="90" y="105" width="85" height="40" fill="#1E293B" rx="3" className="website-element" />
                  {/* Button */}
                  <rect x="65" y="150" width="50" height="20" fill="#14B8A6" rx="3" className="website-element" />
                </g>
              </g>

              {/* Code Desktop Monitor (Right Side) */}
              <g transform="translate(250, 50)" className="code-monitor">
                {/* Monitor Frame */}
                <rect x="0" y="0" width="200" height="200" fill="#1E293B" stroke="#14B8A6" strokeWidth="3" rx="10" />
                <path d="M80,200 L120,200 L100,220 Z" fill="#1E293B" stroke="#14B8A6" strokeWidth="3" />
                <rect x="100" y="220" width="20" height="20" fill="#1E293B" stroke="#14B8A6" strokeWidth="3" />
                <g transform="translate(10, 10)">
                  <rect x="0" y="0" width="180" height="180" fill="#0F172A" rx="5" />
                  {/* Code Lines */}
                  <text x="10" y="30" fill="#14B8A6" fontSize="12" fontFamily="monospace" className="code-line">
                    &lt;div class="header"&gt;
                  </text>
                  <text x="20" y="50" fill="#FFFFFF" fontSize="12" fontFamily="monospace" className="code-line">
                    &lt;nav&gt;...&lt;/nav&gt;
                  </text>
                  <text x="10" y="70" fill="#14B8A6" fontSize="12" fontFamily="monospace" className="code-line">
                    &lt;/div&gt;
                  </text>
                  <text x="10" y="90" fill="#14B8A6" fontSize="12" fontFamily="monospace" className="code-line">
                    &lt;main&gt;
                  </text>
                  <text x="20" y="110" fill="#FFFFFF" fontSize="12" fontFamily="monospace" className="code-line">
                    &lt;img src="hero.jpg"&gt;
                  </text>
                  <text x="10" y="130" fill="#14B8A6" fontSize="12" fontFamily="monospace" className="code-line">
                    &lt;/main&gt;
                  </text>
                  {/* Blinking Cursor */}
                  <rect x="10" y="140" width="10" height="14" fill="#14B8A6" className="cursor" />
                </g>
              </g>

              {/* Data Stream (Connecting Screens) */}
              <g transform="translate(250, 150)">
                <circle cx="0" cy="0" r="3" fill="#14B8A6" className="data-stream" />
                <circle cx="20" cy="0" r="3" fill="#14B8A6" className="data-stream" />
                <circle cx="40" cy="0" r="3" fill="#14B8A6" className="data-stream" />
                <circle cx="60" cy="0" r="3" fill="#14B8A6" className="data-stream" />
                <circle cx="80" cy="0" r="3" fill="#14B8A6" className="data-stream" />
              </g>

              {/* Tablet (Responsive Design) - Bottom Center */}
              <g transform="translate(190, 340)" className="tablet">
                <rect x="0" y="0" width="80" height="50" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" rx="5" />
                <rect x="5" y="5" width="70" height="40" fill="#0F172A" rx="3" />
                <rect x="7" y="7" width="66" height="5" fill="#14B8A6" rx="2" />
              </g>

              {/* Mobile (Responsive Design) - Bottom Center */}
              <g transform="translate(280, 340)" className="mobile">
                <rect x="0" y="0" width="40" height="60" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" rx="5" />
                <rect x="5" y="5" width="30" height="50" fill="#0F172A" rx="3" />
                <rect x="7" y="7" width="26" height="5" fill="#14B8A6" rx="2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
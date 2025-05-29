'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaSearch, FaBullhorn, FaChartLine } from 'react-icons/fa'; // Added imports for FaSearch, FaBullhorn, FaChartLine
import { gsap } from 'gsap';

export default function DigitalMarketingHeroSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Ensure elements exist before applying animations
    const globe = document.querySelector('.globe');
    const orbits = gsap.utils.toArray('.orbit') as HTMLElement[];
    const particles = gsap.utils.toArray('.particle') as HTMLElement[];
    const lightFlares = gsap.utils.toArray('.light-flare') as HTMLElement[];

    // Animate the globe
    if (globe) {
      gsap.fromTo(
        globe,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );
      // Parallax effect on scroll
      gsap.to(globe, {
        y: -50,
        scrollTrigger: {
          trigger: globe,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // Animate orbiting icons
    if (orbits.length > 0) {
      orbits.forEach((orbit, index) => {
        gsap.to(orbit, {
          rotation: 360,
          transformOrigin: 'center center',
          duration: 5 + index * 2,
          repeat: -1,
          ease: 'linear',
        });
      });
    }

    // Animate particles
    if (particles.length > 0) {
      particles.forEach((particle, index) => {
        gsap.fromTo(
          particle,
          { x: -50, opacity: 0 },
          {
            x: window.innerWidth + 50,
            opacity: () => Math.random() * 0.5 + 0.2,
            duration: 5 + index * 0.5,
            repeat: -1,
            ease: 'linear',
            delay: index * 0.3,
          }
        );
      });
    }

    // Animate light flares
    if (lightFlares.length > 0) {
      lightFlares.forEach((flare, index) => {
        gsap.fromTo(
          flare,
          { x: -500 },
          { x: 1500, duration: 5 + index * 0.5, repeat: -1, ease: 'linear', delay: index * 0.3 }
        );
      });
    }
  }, []);

  // Structured data for the hero section
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    "serviceType": "Digital Marketing",
    "provider": {
      "@type": "Organization",
      "name": "Intention Infoservice",
      "url": "https://intentioninfoservice.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Digital Avenue",
        "addressLocality": "Tech City",
        "postalCode": "TC 12345"
      }
    },
    "description": "Proven digital marketing solutions for 2025 to boost your online presence, drive traffic, and increase conversions with tailored strategies.",
    "url": "https://intentioninfoservice.com/services/digital-marketing",
  };

  return (
    <section className="relative bg-gradient-to-b from-dark-950 to-dark-800 pt-8 md:py-24 overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Subtle Grain Texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
      />
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="particle absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0,
            }}
          />
        ))}
      </div>
      {/* Animated Light Flares */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%">
          <line x1="-500" y1="20%" x2="1500" y2="20%" stroke="#00a0e3" strokeWidth="2" opacity="0.2" className="light-flare" />
          <line x1="-500" y1="40%" x2="1500" y2="40%" stroke="#393185" strokeWidth="2" opacity="0.2" className="light-flare" />
          <line x1="-500" y1="60%" x2="1500" y2="60%" stroke="#00a0e3" strokeWidth="2" opacity="0.2" className="light-flare" />
          <line x1="-500" y1="80%" x2="1500" y2="80%" stroke="#393185" strokeWidth="2" opacity="0.2" className="light-flare" />
        </svg>
      </div>
      <div className="w-full px-[10%] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Headline, Tagline, and CTA */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.1)',
              }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Proven Digital Marketing Solutions for 2025
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Boost Your Online Presence with Tailored Strategies
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="btn btn-primary hover:bg-brand-blue hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] transition-all duration-300"
                icon={<FaArrowRight />}
                iconPosition="right"
                href="/contact-us"
                ariaLabel="Get started with digital marketing solutions"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
          {/* Right: Enhanced SVG Illustration (Rotating Globe with Orbiting Icons) */}
          <div className="md:w-1/2 flex justify-center">
            <svg width="500" height="400" viewBox="0 0 500 400" className="w-full max-w-[500px] globe" aria-hidden="true">
              {/* Globe Background */}
              <circle cx="250" cy="200" r="150" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" />
              {/* Globe Grid Lines */}
              <g transform="translate(250, 200)">
                {[...Array(6)].map((_, i) => (
                  <circle key={i} cx="0" cy="0" r={20 * (i + 1)} fill="none" stroke="#00a0e3" strokeWidth="1" opacity="0.3" />
                ))}
                {[...Array(6)].map((_, i) => (
                  <path
                    key={i + 6}
                    d={`M0,${-150 + i * 50} A150,150 0 0,1 0,${150 - i * 50}`}
                    fill="none"
                    stroke="#00a0e3"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                ))}
              </g>
              {/* Orbiting Icons */}
              <g className="orbit" transform="translate(250, 200)">
                <path d="M0,-120 A120,120 0 0,1 0,120 A120,120 0 0,1 0,-120" fill="none" stroke="#00a0e3" strokeWidth="1" opacity="0.5" />
                <circle cx="0" cy="-120" r="15" fill="#14B8A6">
                  <FaSearch className="w-6 h-6 text-dark-950" x="-10" y="-10" />
                </circle>
              </g>
              <g className="orbit" transform="translate(250, 200)">
                <path d="M0,-160 A160,160 0 0,1 0,160 A160,160 0 0,1 0,-160" fill="none" stroke="#00a0e3" strokeWidth="1" opacity="0.5" />
                <circle cx="0" cy="-160" r="15" fill="#14B8A6">
                  <FaBullhorn className="w-6 h-6 text-dark-950" x="-10" y="-10" />
                </circle>
              </g>
              <g className="orbit" transform="translate(250, 200)">
                <path d="M0,-200 A200,200 0 0,1 0,200 A200,200 0 0,1 0,-200" fill="none" stroke="#00a0e3" strokeWidth="1" opacity="0.5" />
                <circle cx="0" cy="-200" r="15" fill="#14B8A6">
                  <FaChartLine className="w-6 h-6 text-dark-950" x="-10" y="-10" />
                </circle>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
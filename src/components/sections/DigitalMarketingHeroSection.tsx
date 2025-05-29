'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaSearch, FaBullhorn, FaChartLine, FaPen, FaChartBar, FaEnvelope, FaShoppingCart, FaDollarSign, FaHashtag, FaCamera, FaGlobe, FaLink, FaVideo } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function DigitalMarketingHeroSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Ensure elements exist before applying animations
    const funnel = document.querySelector('.funnel');
    const layers = gsap.utils.toArray('.funnel-layer') as HTMLElement[];
    const conversions = gsap.utils.toArray('.conversion-icon') as HTMLElement[];
    const growthGraphs = gsap.utils.toArray('.growth-graph') as HTMLElement[];
    const particles = gsap.utils.toArray('.particle') as HTMLElement[];
    const floatingIcons = gsap.utils.toArray('.floating-icon') as HTMLElement[];
    const lightFlares = gsap.utils.toArray('.light-flare') as HTMLElement[];

    // Animate the funnel
    if (funnel) {
      gsap.fromTo(
        funnel,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );
      // Parallax effect on scroll
      gsap.to(funnel, {
        y: -50,
        scrollTrigger: {
          trigger: funnel,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // Animate funnel layers (light up sequentially)
    if (layers.length > 0) {
      layers.forEach((layer, index) => {
        gsap.fromTo(
          layer,
          { opacity: 0.3, fill: '#1E293B' },
          {
            opacity: 1,
            fill: '#14B8A6',
            duration: 0.5,
            delay: index * 0.3,
            ease: 'power2.out',
          }
        );
      });
    }

    // Animate conversion icons (move outward)
    if (conversions.length > 0) {
      conversions.forEach((icon, index) => {
        gsap.fromTo(
          icon,
          { opacity: 0, x: 0, y: 0 },
          {
            opacity: 1,
            x: index % 2 === 0 ? -50 : 50,
            y: 20,
            duration: 1,
            repeat: -1,
            ease: 'power2.out',
            delay: index * 0.3,
          }
        );
      });
    }

    // Animate growth graphs
    if (growthGraphs.length > 0) {
      growthGraphs.forEach((graph, index) => {
        gsap.fromTo(
          graph,
          { strokeDasharray: 50, strokeDashoffset: 50 },
          {
            strokeDashoffset: 0,
            duration: 1,
            repeat: -1,
            ease: 'power2.out',
            delay: index * 0.3,
          }
        );
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

    // Animate floating digital marketing icons
    if (floatingIcons.length > 0) {
      floatingIcons.forEach((icon, index) => {
        gsap.fromTo(
          icon,
          { x: -50, opacity: 0 },
          {
            x: window.innerWidth + 50,
            opacity: () => Math.random() * 0.5 + 0.3,
            duration: 4 + index * 0.4,
            repeat: -1,
            ease: 'linear',
            delay: index * 0.2,
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
    "description": "Elevate your brand with our comprehensive digital marketing solutions, including SEO services, PPC advertising, and social media marketing, designed to maximize traffic, engagement, and conversions in 2025’s competitive landscape.",
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
      {/* Floating Digital Marketing Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <FaHashtag className="floating-icon absolute w-6 h-6 text-brand-blue" style={{ top: '10%', left: '5%', opacity: 0 }} />
        <FaCamera className="floating-icon absolute w-5 h-5 text-brand-blue" style={{ top: '20%', left: '15%', opacity: 0 }} />
        <FaGlobe className="floating-icon absolute w-7 h-7 text-brand-blue" style={{ top: '30%', left: '85%', opacity: 0 }} />
        <FaLink className="floating-icon absolute w-6 h-6 text-brand-blue" style={{ top: '70%', left: '10%', opacity: 0 }} />
        <FaVideo className="floating-icon absolute w-5 h-5 text-brand-blue" style={{ top: '80%', left: '90%', opacity: 0 }} />
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
          {/* Left: Headline, Tagline, Description, and CTA */}
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
              className="text-lg text-brand-blue font-semibold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Drive Online Growth with Expert Strategies in 2025
            </motion.p>
            <motion.p
              className="text-base text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Elevate your brand with our comprehensive digital marketing solutions, including SEO services, PPC advertising, and social media marketing, designed to maximize traffic, engagement, and conversions in 2025’s competitive landscape.
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
                ariaLabel="Supercharge your growth now with digital marketing solutions"
              >
                Supercharge Your Growth Now
              </Button>
            </motion.div>
          </div>
          {/* Right: Digital Marketing Success Funnel Illustration with Adjusted Alignment */}
          <div className="md:w-1/2 flex justify-center">
            <svg width="500" height="470" viewBox="0 0 500 470" className="w-full max-w-[500px] funnel" aria-hidden="true">
              {/* Background Glow */}
              <defs>
                <radialGradient id="funnelGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#393185', stopOpacity: 0 }} />
                </radialGradient>
              </defs>
              <circle cx="250" cy="235" r="250" fill="url(#funnelGlow)" />
              {/* Funnel Layers */}
              {/* SEO */}
              <g className="funnel-layer">
                <path d="M100 50 H400 L390 120 H110 Z" fill="#1E293B" stroke="#00a0e3" strokeWidth="1" />
                <FaSearch className="w-8 h-8 text-white" x="234" y="60" />
                <text x="250" y="105" fill="#fff" fontSize="14" textAnchor="middle">SEO</text>
              </g>
              {/* Social Media */}
              <g className="funnel-layer">
                <path d="M110 120 H390 L380 190 H120 Z" fill="#1E293B" stroke="#00a0e3" strokeWidth="1" />
                <FaBullhorn className="w-8 h-8 text-white" x="234" y="130" />
                <text x="250" y="175" fill="#fff" fontSize="14" textAnchor="middle">Social Media</text>
              </g>
              {/* PPC */}
              <g className="funnel-layer">
                <path d="M120 190 H380 L370 260 H130 Z" fill="#1E293B" stroke="#00a0e3" strokeWidth="1" />
                <FaChartLine className="w-8 h-8 text-white" x="234" y="200" />
                <text x="250" y="245" fill="#fff" fontSize="14" textAnchor="middle">PPC</text>
              </g>
              {/* Content Creation */}
              <g className="funnel-layer">
                <path d="M130 260 H370 L360 330 H140 Z" fill="#1E293B" stroke="#00a0e3" strokeWidth="1" />
                <FaPen className="w-8 h-8 text-white" x="234" y="270" />
                <text x="250" y="315" fill="#fff" fontSize="14" textAnchor="middle">Content</text>
              </g>
              {/* Analytics */}
              <g className="funnel-layer">
                <path d="M140 330 H360 L350 400 H150 Z" fill="#1E293B" stroke="#00a0e3" strokeWidth="1" />
                <FaChartBar className="w-8 h-8 text-white" x="234" y="340" />
                <text x="250" y="385" fill="#fff" fontSize="14" textAnchor="middle">Analytics</text>
              </g>
              {/* Email Marketing */}
              <g className="funnel-layer">
                <path d="M150 400 H350 L340 470 H160 Z" fill="#1E293B" stroke="#00a0e3" strokeWidth="1" />
                <FaEnvelope className="w-8 h-8 text-white" x="234" y="410" />
                <text x="250" y="455" fill="#fff" fontSize="14" textAnchor="middle">Email</text>
              </g>
              {/* Conversion Icons */}
              <g className="conversion-icon" transform="translate(230, 470)">
                <FaShoppingCart className="w-6 h-6 text-brand-blue" />
              </g>
              <g className="conversion-icon" transform="translate(270, 470)">
                <FaDollarSign className="w-6 h-6 text-brand-blue" />
              </g>
              {/* Growth Graphs */}
              <g className="growth-graph" transform="translate(100, 470)">
                <polyline points="0,50 20,30 40,40 60,20 80,30" fill="none" stroke="#00a0e3" strokeWidth="2" strokeDasharray="50" />
              </g>
              <g className="growth-graph" transform="translate(400, 470)">
                <polyline points="0,50 20,40 40,30 60,35 80,20" fill="none" stroke="#00a0e3" strokeWidth="2" strokeDasharray="50" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
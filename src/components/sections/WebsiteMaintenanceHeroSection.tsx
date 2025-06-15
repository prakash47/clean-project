
'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function WebsiteMaintenanceHeroSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Waveform Background Animation
    const waveform = document.querySelector('.waveform');
    if (waveform) {
      gsap.to(waveform, {
        x: -50,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    // Website Maintenance Universe Animation
    const universe = document.querySelector('.universe');
    const nebulaCore = document.querySelector('.nebula-core');
    const securityPlanet = document.querySelector('.security-planet');
    const updatePlanet = document.querySelector('.update-planet');
    const updateRings = document.querySelectorAll('.update-ring');
    const performancePlanet = document.querySelector('.performance-planet');
    const performanceTrail = document.querySelector('.performance-trail');
    const supportPlanet = document.querySelector('.support-planet');
    const supportSignals = document.querySelectorAll('.support-signal');
    const backupPlanet = document.querySelector('.backup-planet');
    const backupShield = document.querySelector('.backup-shield');
    const seoPlanet = document.querySelector('.seo-planet');
    const seoRings = document.querySelectorAll('.seo-ring');
    const contentPlanet = document.querySelector('.content-planet');
    const contentNodes = document.querySelectorAll('.content-node');
    const monitoringPlanet = document.querySelector('.monitoring-planet');
    const monitoringRays = document.querySelectorAll('.monitoring-ray');
    const stars = document.querySelectorAll('.star');
    const backgroundElements = document.querySelectorAll('.background-element');

    if (universe) {
      gsap.fromTo(
        universe,
        { opacity: 0, scale: 0.9, rotateX: 20 },
        { opacity: 1, scale: 1, rotateX: 0, duration: 1.2, ease: 'elastic.out(1, 0.5)' }
      );
    }
    if (nebulaCore) {
      gsap.fromTo(
        nebulaCore,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.5, ease: 'power2.out' }
      );
      gsap.to(nebulaCore, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'linear',
        delay: 1.5,
      });
    }
    if (securityPlanet) {
      gsap.fromTo(
        securityPlanet,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 1, ease: 'power2.out' }
      );
      gsap.to(securityPlanet, {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: 'linear',
        delay: 1.5,
      });
      gsap.to(securityPlanet.querySelector('.security-aura'), {
        scale: 1.2,
        opacity: 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5,
      });
    }
    if (updatePlanet) {
      gsap.fromTo(
        updatePlanet,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 1.2, ease: 'power2.out' }
      );
      gsap.to(updatePlanet, {
        rotation: 360,
        duration: 12,
        repeat: -1,
        ease: 'linear',
        delay: 1.7,
      });
    }
    if (updateRings.length > 0) {
      updateRings.forEach((ring, index) => {
        gsap.fromTo(
          ring,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 1.2 + index * 0.2, ease: 'power2.out' }
        );
        gsap.to(ring, {
          rotation: 360,
          duration: 5 + index * 0.5,
          repeat: -1,
          ease: 'linear',
          delay: 1.7 + index * 0.2,
        });
      });
    }
    if (performancePlanet) {
      gsap.fromTo(
        performancePlanet,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 1.4, ease: 'power2.out' }
      );
      gsap.to(performancePlanet, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: 'linear',
        delay: 1.9,
      });
    }
    if (performanceTrail) {
      gsap.fromTo(
        performanceTrail,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 1.4, ease: 'power2.out' }
      );
      gsap.to(performanceTrail, {
        scale: 1.1,
        opacity: 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.9,
      });
    }
    if (supportPlanet) {
      gsap.fromTo(
        supportPlanet,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 1.6, ease: 'power2.out' }
      );
      gsap.to(supportPlanet, {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: 'linear',
        delay: 2.1,
      });
    }
    if (supportSignals.length > 0) {
      supportSignals.forEach((signal, index) => {
        gsap.fromTo(
          signal,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 1.8 + index * 0.3, ease: 'power2.out' }
        );
        gsap.to(signal, {
          scale: 1.5,
          opacity: 0,
          duration: 1.5,
          repeat: -1,
          ease: 'sine.inOut',
          delay: 2.3 + index * 0.3,
        });
      });
    }
    if (backupPlanet) {
      gsap.fromTo(
        backupPlanet,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 1.8, ease: 'power2.out' }
      );
      gsap.to(backupPlanet, {
        rotation: 360,
        duration: 14,
        repeat: -1,
        ease: 'linear',
        delay: 2.3,
      });
    }
    if (backupShield) {
      gsap.fromTo(
        backupShield,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 1.8, ease: 'power2.out' }
      );
      gsap.to(backupShield, {
        rotation: 360,
        duration: 6,
        repeat: -1,
        ease: 'linear',
        delay: 2.3,
      });
    }
    if (seoPlanet) {
      gsap.fromTo(
        seoPlanet,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 2, ease: 'power2.out' }
      );
      gsap.to(seoPlanet, {
        rotation: 360,
        duration: 11,
        repeat: -1,
        ease: 'linear',
        delay: 2.5,
      });
    }
    if (seoRings.length > 0) {
      seoRings.forEach((ring, index) => {
        gsap.fromTo(
          ring,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 2 + index * 0.2, ease: 'power2.out' }
        );
        gsap.to(ring, {
          rotation: 360,
          duration: 4 + index * 0.5,
          repeat: -1,
          ease: 'linear',
          delay: 2.5 + index * 0.2,
        });
      });
    }
    if (contentPlanet) {
      gsap.fromTo(
        contentPlanet,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 2.2, ease: 'power2.out' }
      );
      gsap.to(contentPlanet, {
        rotation: 360,
        duration: 9,
        repeat: -1,
        ease: 'linear',
        delay: 2.7,
      });
    }
    if (contentNodes.length > 0) {
      contentNodes.forEach((node, index) => {
        gsap.fromTo(
          node,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 2.2 + index * 0.2, ease: 'power2.out' }
        );
        gsap.to(node, {
          rotation: 360,
          duration: 3 + index * 0.5,
          repeat: -1,
          ease: 'linear',
          delay: 2.7 + index * 0.2,
        });
      });
    }
    if (monitoringPlanet) {
      gsap.fromTo(
        monitoringPlanet,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 2.4, ease: 'power2.out' }
      );
      gsap.to(monitoringPlanet, {
        rotation: 360,
        duration: 7,
        repeat: -1,
        ease: 'linear',
        delay: 2.9,
      });
    }
    if (monitoringRays.length > 0) {
      monitoringRays.forEach((ray, index) => {
        gsap.fromTo(
          ray,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 2.4 + index * 0.3, ease: 'power2.out' }
        );
        gsap.to(ray, {
          scale: 1.3,
          opacity: 0,
          duration: 1.5,
          repeat: -1,
          ease: 'sine.inOut',
          delay: 2.9 + index * 0.3,
        });
      });
    }
    if (stars.length > 0) {
      stars.forEach((star, index) => {
        gsap.fromTo(
          star,
          { opacity: 0, scale: 0 },
          { opacity: 0.5, scale: 1, duration: 0.5, delay: 1 + index * 0.1, ease: 'power2.out' }
        );
        gsap.to(star, {
          opacity: 1,
          scale: 0.8,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1.5 + index * 0.1,
        });
      });
    }
    if (backgroundElements.length > 0) {
      gsap.fromTo(
        backgroundElements,
        { opacity: 0, scale: 0 },
        { opacity: 0.3, scale: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
      );
      gsap.to(backgroundElements, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2,
        delay: 0.8,
      });
    }
  }, []);

  return (
    <section className="relative bg-dark-950 py-12 md:py-12 overflow-hidden">
      {/* Skip to Content Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-brand-blue focus:text-white focus:p-2 focus:rounded">
        Skip to main content
      </a>

      {/* Structured Data for the Hero Section */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Website Maintenance Services",
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
            "description": "Keep your website secure, fast, and updated with Intention Infoservice’s expert website maintenance services in 2025. Prevent downtime and security risks with our reliable support.",
            "offers": {
              "@type": "Offer",
              "url": "https://intentioninfoservice.com/contact-us",
              "description": "Get a free website health check and maintenance quote to ensure your site’s security and performance."
            },
            "keywords": "website maintenance services 2025, website security services, website support tech city"
          }
        `}
      </script>

      <div className="max-w-7xl mx-auto px-[5%] md:px-[10%] sm:px-6 lg:px-8 relative z-10" id="main-content">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Headline, Tagline, Body, and CTA */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.1)',
              }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Expert Website Maintenance Services for Peak Performance
            </motion.h1>
            <motion.h2
              className="text-lg md:text-xl text-brand-blue mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Ensure Your Website is Secure, Fast, and Always Up-to-Date in 2025
            </motion.h2>
            <motion.p
              className="text-md md:text-lg text-gray-500 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Don’t let an outdated website or security vulnerabilities hold your business back. Our comprehensive website maintenance services provide proactive monitoring, security updates, performance optimization, and reliable support to keep your site running smoothly and securely.
            </motion.p>
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="btn btn-primary hover:bg-brand-blue hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] transition-all duration-300"
                icon={<FaArrowRight />}
                iconPosition="right"
                href="../contact-us"
                ariaLabel="Request a free website maintenance quote"
              >
                Request a Free Quote
              </Button>
            </motion.div>
          </div>
           {/* Right: Enhanced Website Maintenance Universe SVG Illustration */}
          <div className="lg:w-1/2 flex justify-center">
            <svg
              width="500"
              height="600"
              viewBox="0 0 500 400"
              className="w-full max-w-[500px]"
              role="img"
              aria-label="Website maintenance universe illustration, featuring a nebula core, security planet, update planet, performance comet, support satellite, backup planet, SEO planet, content planet, and monitoring planet"
            >
              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#393185', stopOpacity: 0.3 }} />
                </linearGradient>
                <linearGradient id="nebulaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 0.7 }} />
                  <stop offset="100%" style={{ stopColor: '#393185', stopOpacity: 0.7 }} />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="nebulaGlow">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background Elements */}
              <g className="background">
                <circle cx="50" cy="50" r="15" fill="url(#glowGradient)" className="background-element" filter="url(#glow)" />
                <circle cx="450" cy="50" r="15" fill="url(#glowGradient)" className="background-element" filter="url(#glow)" />
                <circle cx="50" cy="350" r="15" fill="url(#glowGradient)" className="background-element" filter="url(#glow)" />
                <circle cx="450" cy="350" r="15" fill="url(#glowGradient)" className="background-element" filter="url(#glow)" />
                <rect x="40" y="80" width="40" height="20" rx="5" fill="none" stroke="url(#glowGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                <rect x="420" y="80" width="40" height="20" rx="5" fill="none" stroke="url(#glowGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                <path d="M40,110 Q250,130 460,110" fill="none" stroke="url(#glowGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                <rect x="40" y="280" width="40" height="20" rx="5" fill="none" stroke="url(#glowGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                <rect x="420" y="280" width="40" height="20" rx="5" fill="none" stroke="url(#glowGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                <path d="M40,310 Q250,330 460,310" fill="none" stroke="url(#glowGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
              </g>

              {/* Cosmic Stars */}
              <g className="stars">
                <circle cx="50" cy="50" r="3" fill="#00a0e3" filter="url(#glow)" className="star" />
                <circle cx="450" cy="50" r="2" fill="#00a0e3" filter="url(#glow)" className="star" />
                <circle cx="100" cy="300" r="3" fill="#00a0e3" filter="url(#glow)" className="star" />
                <circle cx="400" cy="300" r="2" fill="#00a0e3" filter="url(#glow)" className="star" />
                <circle cx="200" cy="100" r="3" fill="#00a0e3" filter="url(#glow)" className="star" />
                <circle cx="300" cy="350" r="2" fill="#00a0e3" filter="url(#glow)" className="star" />
              </g>

              {/* Website Maintenance Universe */}
              <g className="universe" transform="translate(250, 200)">
                {/* Nebula Core */}
                <g className="nebula-core hover:scale-105 transition-transform duration-300">
                  <circle cx="0" cy="0" r="80" fill="url(#nebulaGradient)" filter="url(#nebulaGlow)" opacity="0.7" />
                  <circle cx="0" cy="0" r="60" fill="#0F172A" stroke="#00a0e3" strokeWidth="3" strokeDasharray="5,5" />
                  <path d="M-40,0 Q0,-40 40,0 Q0,40 -40,0 Z" fill="#00a0e3" opacity="0.3" />
                  <path d="M0,-40 Q40,0 0,40 Q-40,0 0,-40 Z" fill="#393185" opacity="0.3" />
                  <text x="-50" y="120" fill="#fff" fontSize="14" fontFamily="monospace">Website Galaxy</text>
                </g>

                {/* Security Planet */}
                <g transform="rotate(0 0 0)">
                  <g className="security-planet" transform="translate(0, -150)">
                    <path d="M0,-20 Q20,-10 20,10 Q0,20 -20,10 Q-20,-10 0,-20 Z" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" className="hover:scale-110 transition-transform duration-300" />
                    <circle cx="0" cy="0" r="15" fill="none" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" className="security-aura" filter="url(#glow)" />
                    <text x="-40" y="40" fill="#fff" fontSize="12" fontFamily="monospace">Security</text>
                  </g>
                </g>

                {/* Update Planet */}
                <g transform="rotate(60 0 0)">
                  <g className="update-planet" transform="translate(0, -180)">
                    <circle cx="0" cy="0" r="25" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" className="hover:scale-110 transition-transform duration-300" />
                    <path d="M0,-10 L0,-20 M0,10 L0,20 M-10,0 L-20,0 M10,0 L20,0 M-7,-7 L-14,-14 M7,7 L14,14 M-7,7 L-14,14 M7,-7 L14,-14" stroke="#00a0e3" strokeWidth="2" />
                    <g className="update-ring" transform="rotate(0 0 0)">
                      <circle cx="0" cy="0" r="35" fill="none" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" />
                    </g>
                    <g className="update-ring" transform="rotate(90 0 0)">
                      <circle cx="0" cy="0" r="35" fill="none" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" />
                    </g>
                    <text x="-30" y="60" fill="#fff" fontSize="12" fontFamily="monospace">Updates</text>
                  </g>
                </g>

                {/* Performance Comet */}
                <g transform="rotate(120 0 0)">
                  <g className="performance-planet" transform="translate(0, -210)">
                    <circle cx="0" cy="0" r="20" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" className="hover:scale-110 transition-transform duration-300" />
                    <path className="performance-trail" d="M0,0 Q-30,-20 -60,0 Q-90,20 -120,0" fill="none" stroke="#00a0e3" strokeWidth="3" strokeDasharray="5,5" filter="url(#glow)" />
                    <text x="-40" y="40" fill="#fff" fontSize="12" fontFamily="monospace">Performance</text>
                  </g>
                </g>

                {/* Support Satellite */}
                <g transform="rotate(180 0 0)">
                  <g className="support-planet" transform="translate(0, -240)">
                    <rect x="-15" y="-15" width="30" height="30" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" transform="rotate(45)" className="hover:scale-110 transition-transform duration-300" />
                    <circle cx="0" cy="0" r="10" fill="#00a0e3" filter="url(#glow)" />
                    <rect x="-20" y="-5" width="10" height="10" fill="#0F172A" stroke="#00a0e3" strokeWidth="1" transform="rotate(45)" />
                    <rect x="10" y="-5" width="10" height="10" fill="#0F172A" stroke="#00a0e3" strokeWidth="1" transform="rotate(45)" />
                    <g className="support-signal" transform="translate(0, 0)">
                      <circle cx="0" cy="0" r="20" fill="none" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" />
                    </g>
                    <g className="support-signal" transform="translate(0, 0)">
                      <circle cx="0" cy="0" r="30" fill="none" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" />
                    </g>
                    <text x="-30" y="50" fill="#fff" fontSize="12" fontFamily="monospace">Support</text>
                  </g>
                </g>

                {/* Backup Planet */}
                <g transform="rotate(240 0 0)">
                  <g className="backup-planet" transform="translate(0, -150)">
                    <path d="M-20,0 Q-15,-20 0,-20 Q15,-20 20,0 Q15,20 0,20 Q-15,20 -20,0 Z" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" className="hover:scale-110 transition-transform duration-300" />
                    <path d="M-15,-5 H15 V5 H-15 Z" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
                    <path d="M-15,-15 H15 V-5 H-15 Z" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
                    <path d="M-15,5 H15 V15 H-15 Z" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
                    <g className="backup-shield" transform="rotate(0 0 0)">
                      <circle cx="0" cy="0" r="35" fill="none" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" filter="url(#glow)" />
                    </g>
                    <text x="-30" y="40" fill="#fff" fontSize="12" fontFamily="monospace">Backups</text>
                  </g>
                </g>

                {/* SEO Optimization Planet */}
                <g transform="rotate(300 0 0)">
                  <g className="seo-planet" transform="translate(0, -180)">
                    <circle cx="0" cy="0" r="25" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" className="hover:scale-110 transition-transform duration-300" />
                    <circle cx="0" cy="0" r="10" fill="none" stroke="#00a0e3" strokeWidth="2" />
                    <line x1="10" y1="10" x2="15" y2="15" stroke="#00a0e3" strokeWidth="2" />
                    <g className="seo-ring" transform="rotate(0 0 0)">
                      <circle cx="0" cy="0" r="35" fill="none" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" />
                    </g>
                    <g className="seo-ring" transform="rotate(45 0 0)">
                      <circle cx="0" cy="0" r="40" fill="none" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" />
                    </g>
                    <text x="-30" y="60" fill="#fff" fontSize="12" fontFamily="monospace">SEO</text>
                  </g>
                </g>

                {/* Content Update Planet */}
                <g transform="rotate(30 0 0)">
                  <g className="content-planet" transform="translate(0, -210)">
                    <circle cx="0" cy="0" r="20" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" className="hover:scale-110 transition-transform duration-300" />
                    <path d="M-10,-10 L10,10 M-10,10 L10,-10" stroke="#00a0e3" strokeWidth="2" />
                    <g className="content-node" transform="rotate(0 0 0)">
                      <circle cx="0" cy="30" r="5" fill="#00a0e3" filter="url(#glow)" />
                    </g>
                    <g className="content-node" transform="rotate(120 0 0)">
                      <circle cx="0" cy="30" r="5" fill="#00a0e3" filter="url(#glow)" />
                    </g>
                    <g className="content-node" transform="rotate(240 0 0)">
                      <circle cx="0" cy="30" r="5" fill="#00a0e3" filter="url(#glow)" />
                    </g>
                    <text x="-40" y="40" fill="#fff" fontSize="12" fontFamily="monospace">Content</text>
                  </g>
                </g>

                {/* Monitoring Planet */}
                <g transform="rotate(150 0 0)">
                  <g className="monitoring-planet" transform="translate(0, -240)">
                    <circle cx="0" cy="0" r="20" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" className="hover:scale-110 transition-transform duration-300" />
                    <circle cx="0" cy="0" r="10" fill="none" stroke="#00a0e3" strokeWidth="2" />
                    <circle cx="0" cy="0" r="5" fill="#00a0e3" />
                    <g className="monitoring-ray" transform="rotate(0 0 0)">
                      <line x1="0" y1="0" x2="30" y2="0" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" filter="url(#glow)" />
                    </g>
                    <g className="monitoring-ray" transform="rotate(120 0 0)">
                      <line x1="0" y1="0" x2="30" y2="0" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" filter="url(#glow)" />
                    </g>
                    <g className="monitoring-ray" transform="rotate(240 0 0)">
                      <line x1="0" y1="0" x2="30" y2="0" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" filter="url(#glow)" />
                    </g>
                    <text x="-40" y="40" fill="#fff" fontSize="12" fontFamily="monospace">Monitoring</text>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}



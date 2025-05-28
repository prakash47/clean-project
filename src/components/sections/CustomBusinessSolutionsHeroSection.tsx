'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function CustomBusinessSolutionsHeroSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Ensure elements exist before applying animations
    const dashboard = document.querySelector('.dashboard');
    const dashboardBorder = document.querySelector('.dashboard-border');
    const dashboardShimmer = document.querySelector('.dashboard-shimmer');
    const aiNodes = document.querySelectorAll('.ai-node');
    const aiTrails = document.querySelectorAll('.ai-trail');
    const cloudConnections = document.querySelectorAll('.cloud-connection');
    const clouds = document.querySelectorAll('.cloud');
    const dataFlowLines = document.querySelectorAll('.data-flow-line');
    const shield = document.querySelector('.shield');
    const shieldGlow = document.querySelector('.shield-glow');
    const iotDevices = document.querySelectorAll('.iot-device');
    const chartLines = document.querySelectorAll('.chart-line');
    const touchpoints = document.querySelectorAll('.touchpoint');
    const backgroundParticles = document.querySelectorAll('.background-particle');
    const digitalGlobe = document.querySelector('.digital-globe');
    const workflowPaths = document.querySelectorAll('.workflow-path');
    const workflowNodes = document.querySelectorAll('.workflow-node');
    const notificationAlerts = document.querySelectorAll('.notification-alert');

    if (dashboard) {
      gsap.fromTo(
        dashboard,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );
    }
    if (dashboardBorder) {
      gsap.fromTo(
        dashboardBorder,
        { strokeOpacity: 0 },
        { strokeOpacity: 0.5, duration: 1, repeat: -1, yoyo: true, delay: 1, ease: 'sine.inOut' }
      );
    }
    if (dashboardShimmer) {
      gsap.fromTo(
        dashboardShimmer,
        { x: -400 },
        { x: 400, duration: 2, repeat: -1, ease: 'linear', delay: 1.5 }
      );
    }
    if (aiNodes.length > 0) {
      aiNodes.forEach((node, index) => {
        gsap.to(node, {
          rotation: 360,
          duration: 5 + index * 0.5,
          repeat: -1,
          ease: 'linear',
          delay: 0.5 + index * 0.2,
        });
        gsap.fromTo(
          node,
          { scale: 0.8 },
          { scale: 1.2, duration: 1, repeat: -1, yoyo: true, delay: 0.5 + index * 0.2, ease: 'sine.inOut' }
        );
      });
    }
    if (aiTrails.length > 0) {
      aiTrails.forEach((trail, index) => {
        gsap.to(trail, {
          rotation: 360,
          duration: 3 + index * 0.5,
          repeat: -1,
          ease: 'linear',
          delay: 0.5 + index * 0.2,
        });
      });
    }
    if (cloudConnections.length > 0) {
      cloudConnections.forEach((line, index) => {
        gsap.fromTo(
          line,
          { strokeDasharray: 50, strokeDashoffset: 50 },
          { strokeDashoffset: 0, duration: 1, delay: 0.7 + index * 0.2, ease: 'power2.out' }
        );
      });
    }
    if (clouds.length > 0) {
      clouds.forEach((cloud, index) => {
        gsap.fromTo(
          cloud,
          { scale: 0.8 },
          { scale: 1, duration: 0.5, delay: 1 + index * 0.2, ease: 'bounce.out' }
        );
      });
    }
    if (dataFlowLines.length > 0) {
      dataFlowLines.forEach((line, index) => {
        gsap.fromTo(
          line,
          { strokeDasharray: 20, strokeDashoffset: 20 },
          { strokeDashoffset: 0, duration: 1, repeat: -1, delay: 1 + index * 0.2, ease: 'linear' }
        );
      });
    }
    if (shield) {
      gsap.fromTo(
        shield,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 1.2, ease: 'power2.out' }
      );
    }
    if (shieldGlow) {
      gsap.fromTo(
        shieldGlow,
        { opacity: 0.3 },
        { opacity: 0.7, duration: 1, repeat: -1, yoyo: true, delay: 1.2, ease: 'sine.inOut' }
      );
    }
    if (iotDevices.length > 0) {
      iotDevices.forEach((device, index) => {
        gsap.fromTo(
          device,
          { scale: 0.8, opacity: 0.5 },
          { scale: 1, opacity: 1, duration: 0.8, repeat: -1, yoyo: true, delay: 1.4 + index * 0.2, ease: 'sine.inOut' }
        );
      });
    }
    if (chartLines.length > 0) {
      chartLines.forEach((line, index) => {
        gsap.fromTo(
          line,
          { strokeDasharray: 50, strokeDashoffset: 50 },
          { strokeDashoffset: 0, duration: 0.5, delay: 1.2 + index * 0.1, ease: 'power2.out' }
        );
        gsap.fromTo(
          line,
          { y: 0 },
          { y: -5, duration: 0.3, delay: 1.7 + index * 0.1, ease: 'bounce.out' }
        );
      });
    }
    if (touchpoints.length > 0) {
      touchpoints.forEach((point, index) => {
        gsap.fromTo(
          point,
          { opacity: 0.3 },
          { opacity: 0.7, duration: 1, repeat: -1, yoyo: true, delay: 1.6 + index * 0.2, ease: 'sine.inOut' }
        );
      });
    }
    if (backgroundParticles.length > 0) {
      backgroundParticles.forEach((particle, index) => {
        gsap.fromTo(
          particle,
          { x: 0, opacity: 0.3 },
          { x: gsap.utils.random(-50, 50), opacity: 0, duration: 3, repeat: -1, delay: index * 0.5, ease: 'power2.out' }
        );
      });
    }
    if (digitalGlobe) {
      gsap.fromTo(
        digitalGlobe,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 1.8, ease: 'power2.out' }
      );
      gsap.to(digitalGlobe, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: 'linear',
      });
    }
    if (workflowPaths.length > 0) {
      workflowPaths.forEach((path, index) => {
        gsap.fromTo(
          path,
          { strokeDasharray: 100, strokeDashoffset: 100 },
          { strokeDashoffset: 0, duration: 1, delay: 2 + index * 0.3, ease: 'power2.out' }
        );
      });
    }
    if (workflowNodes.length > 0) {
      workflowNodes.forEach((node, index) => {
        gsap.fromTo(
          node,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 2.3 + index * 0.3, ease: 'power2.out' }
        );
      });
    }
    if (notificationAlerts.length > 0) {
      notificationAlerts.forEach((alert, index) => {
        gsap.fromTo(
          alert,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 2.6 + index * 0.2, ease: 'power2.out' }
        );
        gsap.to(alert, {
          scale: 1.1,
          duration: 1,
          repeat: -1,
          yoyo: true,
          delay: 2.6 + index * 0.2,
          ease: 'sine.inOut',
        });
      });
    }

    // Click interaction for notification alerts
    notificationAlerts.forEach((alert) => {
      alert.addEventListener('click', () => {
        gsap.to(alert, {
          filter: 'drop-shadow(0 0 5px rgba(0, 160, 227, 0.7))',
          duration: 0.3,
          overwrite: 'auto',
        });
      });
    });
  }, []);

  // Structured data for the hero section
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Custom Business Solutions',
    provider: {
      '@type': 'Organization',
      name: 'Intention Infoservice',
      url: 'https://intentioninfoservice.com',
      logo: 'https://intentioninfoservice.com/images/logo.webp',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Digital Avenue',
        addressLocality: 'Tech City',
        postalCode: 'TC 12345',
      },
    },
    description: 'Elevate your business with custom software development in 2025. We provide business software solutions including custom CRM software development, scalable ERP solutions, AI-powered business solutions, and secure software development to drive digital transformation.',
    areaServed: 'Global',
    offers: {
      '@type': 'Offer',
      url: 'https://intentioninfoservice.com/services/custom-business-solutions',
      name: 'Custom Software Development',
      description: 'We provide custom business solutions including CRM, ERP, e-commerce platforms, BI dashboards, cybersecurity solutions, and more to address modern business challenges.',
      keywords: 'custom software development, business software solutions, custom CRM software development, scalable ERP solutions, AI-powered business solutions, cloud-based software, secure software development, digital transformation solutions, enterprise software, business automation software',
    },
  };

  return (
    <section className="relative bg-dark-950 pt-8 md:py-24 overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Subtle Grain Texture with Next.js Image */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/textures/grain.webp"
          alt="Grain texture background for visual effect"
          fill
          style={{ objectFit: 'cover' }}
          priority={false}
          quality={75}
        />
      </div>
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,160,227,0.1)_0%,_rgba(0,0,0,0)_70%)] opacity-30 pointer-events-none" />
      <div className="w-full px-[10%] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Headline, Tagline, Subheading, and CTA */}
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
              Elevate Your Business with Custom Software Development in 2025
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-brand-blue font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Business Software Solutions to Boost Productivity and Growth
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Tackle Digital Transformation with AI-Powered, Cloud-Based, and Secure Software
            </motion.p>
            <div>
              <Button
                size="lg"
                icon={<FaArrowRight />}
                iconPosition="right"
                href="/contact"
                ariaLabel="Unlock your custom business solution now"
              >
                Unlock Your Custom Solution Now
              </Button>
            </div>
          </div>
          {/* Right: Enhanced 2D Animated SVG Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <svg
              width="500"
              height="400"
              viewBox="0 0 500 400"
              className="w-full max-w-[500px] transition-all duration-300 hover:filter hover:drop-shadow-[0_0_10px_rgba(0,160,227,0.5)]"
              role="img"
              aria-label="Illustration of a digital dashboard for custom business solutions with AI, cloud, IoT, analytics, security, global scalability, workflow automation, and real-time alerts"
            >
              {/* Definitions for Gradients */}
              <defs>
                <linearGradient id="dashboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#1E293B', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#0F172A', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#393185', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2A275B', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'rgba(0,160,227,0)', stopOpacity: 0 }} />
                  <stop offset="50%" style={{ stopColor: 'rgba(0,160,227,0.3)', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'rgba(0,160,227,0)', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              {/* Background Particles */}
              <g>
                <circle cx="30" cy="30" r="3" fill="#00a0e3" opacity="0.3" className="background-particle" />
                <circle cx="450" cy="40" r="3" fill="#00a0e3" opacity="0.3" className="background-particle" />
                <circle cx="40" cy="350" r="3" fill="#00a0e3" opacity="0.3" className="background-particle" />
                <circle cx="460" cy="360" r="3" fill="#00a0e3" opacity="0.3" className="background-particle" />
              </g>
              {/* Dashboard Background */}
              <g transform="translate(50, 50)" className="dashboard">
                <rect
                  x="0"
                  y="0"
                  width="400"
                  height="300"
                  rx="20"
                  fill="url(#dashboardGradient)"
                  stroke="#00a0e3"
                  strokeWidth="4"
                  strokeOpacity="0.5"
                  className="dashboard-border"
                />
                {/* Shimmer Effect */}
                <rect
                  x="0"
                  y="0"
                  width="400"
                  height="300"
                  rx="20"
                  fill="url(#shimmerGradient)"
                  className="dashboard-shimmer"
                />
                {/* Dashboard Content */}
                <g transform="translate(30, 30)">
                  {/* Header */}
                  <rect x="0" y="0" width="340" height="30" fill="#00a0e3" />
                  {/* Content Area */}
                  <rect x="0" y="40" width="340" height="200" fill="#0F172A" />
                  {/* Data Visualization Bars */}
                  <rect x="20" y="60" width="40" height="160" fill="#393185" opacity="0.7" />
                  <rect x="80" y="100" width="40" height="120" fill="#393185" opacity="0.7" />
                  <rect x="140" y="80" width="40" height="140" fill="#393185" opacity="0.7" />
                  {/* Data Analytics Chart */}
                  <g transform="translate(200, 60)">
                    <polyline points="0,100 40,80 80,120 120,60 140,80" fill="none" stroke="#00a0e3" strokeWidth="2" className="chart-line" />
                    <polyline points="0,90 40,70 80,110 120,50 140,70" fill="none" stroke="#393185" strokeWidth="2" className="chart-line" />
                  </g>
                </g>
              </g>
              {/* AI Nodes with Trails */}
              <g transform="translate(100, 60)">
                <g className="ai-node">
                  <circle cx="0" cy="0" r="10" fill="#00a0e3" opacity="0.7" />
                  <circle cx="0" cy="0" r="5" fill="#393185" />
                </g>
                <g className="ai-trail">
                  <circle cx="0" cy="15" r="3" fill="#00a0e3" opacity="0.5" />
                  <circle cx="0" cy="-15" r="3" fill="#00a0e3" opacity="0.5" />
                </g>
              </g>
              <g transform="translate(400, 60)">
                <g className="ai-node">
                  <circle cx="0" cy="0" r="10" fill="#00a0e3" opacity="0.7" />
                  <circle cx="0" cy="0" r="5" fill="#393185" />
                </g>
                <g className="ai-trail">
                  <circle cx="0" cy="15" r="3" fill="#00a0e3" opacity="0.5" />
                  <circle cx="0" cy="-15" r="3" fill="#00a0e3" opacity="0.5" />
                </g>
              </g>
              {/* Cloud Elements with Connection Lines */}
              <g transform="translate(70, 300)" className="cloud">
                <path d="M0,20 Q20,0 40,20 T80,20 T120,20" fill="none" stroke="#00a0e3" strokeWidth="5" opacity="0.7" />
                <line x1="60" y1="20" x2="60" y2="70" stroke="#00a0e3" strokeWidth="2" strokeDasharray="50" className="cloud-connection" />
              </g>
              <g transform="translate(310, 300)" className="cloud">
                <path d="M0,20 Q20,0 40,20 T80,20 T120,20" fill="none" stroke="#00a0e3" strokeWidth="5" opacity="0.7" />
                <line x1="60" y1="20" x2="60" y2="70" stroke="#00a0e3" strokeWidth="2" strokeDasharray="50" className="cloud-connection" />
              </g>
              {/* IoT Devices */}
              <g transform="translate(110, 100)" className="iot-device transition-all duration-300 hover:scale-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(0,160,227,0.5)]">
                <rect x="0" y="0" width="30" height="20" rx="5" fill="#393185" />
                <circle cx="15" cy="10" r="5" fill="#00a0e3" />
              </g>
              <g transform="translate(360, 100)" className="iot-device transition-all duration-300 hover:scale-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(0,160,227,0.5)]">
                <rect x="0" y="0" width="30" height="20" rx="5" fill="#393185" />
                <circle cx="15" cy="10" r="5" fill="#00a0e3" />
              </g>
              {/* User Interaction Touchpoints */}
              <g transform="translate(160, 80)" className="touchpoint transition-all duration-300 hover:scale-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(0,160,227,0.5)]">
                <circle cx="0" cy="0" r="8" fill="#00a0e3" opacity="0.7" />
                <circle cx="0" cy="0" r="4" fill="#393185" />
              </g>
              <g transform="translate(340, 80)" className="touchpoint transition-all duration-300 hover:scale-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(0,160,227,0.5)]">
                <circle cx="0" cy="0" r="8" fill="#00a0e3" opacity="0.7" />
                <circle cx="0" cy="0" r="4" fill="#393185" />
              </g>
              {/* Digital Globe for Global Scalability */}
              <g transform="translate(420, 300)" className="digital-globe transition-all duration-300 hover:scale-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(0,160,227,0.5)]">
                <circle cx="30" cy="30" r="25" fill="none" stroke="#00a0e3" strokeWidth="3" opacity="0.7" />
                <path d="M5,30 H55 M30,5 V55 M10,10 Q30,30 50,10 M10,50 Q30,30 50,50" fill="none" stroke="#393185" strokeWidth="2" opacity="0.7" />
              </g>
              {/* Workflow Automation Nodes and Paths */}
              <g transform="translate(110, 160)">
                <g className="workflow-node transition-all duration-300 hover:scale-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(0,160,227,0.5)]">
                  <circle cx="0" cy="0" r="10" fill="#00a0e3" opacity="0.7" />
                  <circle cx="0" cy="0" r="5" fill="#393185" />
                </g>
                <path d="M0,0 Q50,-20 100,0" fill="none" stroke="#00a0e3" strokeWidth="2" strokeDasharray="100" className="workflow-path" />
                <g className="workflow-node transition-all duration-300 hover:scale-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(0,160,227,0.5)]">
                  <circle cx="100" cy="0" r="10" fill="#00a0e3" opacity="0.7" />
                  <circle cx="100" cy="0" r="5" fill="#393185" />
                </g>
                <path d="M100,0 Q150,20 200,0" fill="none" stroke="#00a0e3" strokeWidth="2" strokeDasharray="100" className="workflow-path" />
                <g className="workflow-node transition-all duration-300 hover:scale-110 hover:filter hover:drop-shadow-[0_0_5px_rgba(0,160,227,0.5)]">
                  <circle cx="200" cy="0" r="10" fill="#00a0e3" opacity="0.7" />
                  <circle cx="200" cy="0" r="5" fill="#393185" />
                </g>
              </g>
              {/* Notification Alerts */}
              <g transform="translate(160, 260)" className="notification-alert cursor-pointer transition-all duration-300">
                <circle cx="0" cy="0" r="12" fill="#00a0e3" opacity="0.7" />
                <text x="-5" y="5" fill="#fff" fontSize="10">!</text>
                <title>Real-time alert for system updates</title>
              </g>
              <g transform="translate(340, 260)" className="notification-alert cursor-pointer transition-all duration-300">
                <circle cx="0" cy="0" r="12" fill="#00a0e3" opacity="0.7" />
                <text x="-5" y="5" fill="#fff" fontSize="10">!</text>
                <title>Real-time alert for system updates</title>
              </g>
              {/* Secure Data Flow with Shield */}
              <g transform="translate(220, 340)" className="shield">
                <circle cx="30" cy="30" r="25" fill="none" stroke="#00a0e3" strokeWidth="2" opacity="0.3" className="shield-glow" />
                <path
                  d="M30,10 Q30,0 20,0 Q10,0 10,10 V50 Q10,60 30,70 Q50,60 50,50 V10 Q50,0 40,0 Q30,0 30,10 Z"
                  fill="url(#shieldGradient)"
                  stroke="#00a0e3"
                  strokeWidth="2"
                  className="transition-all duration-300 hover:scale-110"
                />
                <path d="M20,40 L30,50 L50,20" fill="none" stroke="#00a0e3" strokeWidth="2" />
                <line x1="30" y1="70" x2="30" y2="90" stroke="#00a0e3" strokeWidth="2" strokeDasharray="20" className="data-flow-line" />
                <line x1="10" y1="70" x2="-10" y2="90" stroke="#00a0e3" strokeWidth="2" strokeDasharray="20" className="data-flow-line" />
                <line x1="50" y1="70" x2="70" y2="90" stroke="#00a0e3" strokeWidth="2" strokeDasharray="20" className="data-flow-line" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
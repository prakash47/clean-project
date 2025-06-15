'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MobileAppHeroSection() {
  const [activeScreen, setActiveScreen] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mobileDevice = document.querySelector('.mobile-device');
    const appScreen1 = document.querySelector('.app-screen-1');
    const appScreen2 = document.querySelector('.app-screen-2');
    const appIcon1 = document.querySelector('.app-icon-1');
    const appIcon2 = document.querySelector('.app-icon-2');
    const appIcon3 = document.querySelector('.app-icon-3');
    const notification = document.querySelector('.notification');
    const aiChatbot = document.querySelector('.ai-chatbot');
    const aiSpeechBubble = document.querySelector('.ai-speech-bubble');
    const signalWaves = document.querySelectorAll('.signal-wave');
    const hologram = document.querySelector('.hologram');
    const particles = document.querySelectorAll('.data-particle');
    const appStoreIcon = document.querySelector('.app-store-icon');
    const playStoreIcon = document.querySelector('.play-store-icon');
    const codeSnippet = document.querySelector('.code-snippet');
    const codeLines = document.querySelectorAll('.code-line');
    const cursor = document.querySelector('.cursor');
    const tablet = document.querySelector('.tablet');
    const svgContainer = document.querySelector('.svg-container');

    if (mobileDevice) {
      gsap.fromTo(
        mobileDevice,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );
      gsap.to(mobileDevice, {
        filter: 'drop-shadow(0 0 10px rgba(0, 160, 227, 0.5))',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });
    }
    if (appScreen1) {
      gsap.fromTo(
        appScreen1,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 1, ease: 'power2.out' }
      );
    }
    if (appScreen2) {
      gsap.fromTo(
        appScreen2,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 1.3, ease: 'power2.out' }
      );
    }
    if (appIcon1) {
      gsap.fromTo(
        appIcon1,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 1.6, ease: 'power2.out' }
      );
      gsap.to(appIcon1, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2.1,
      });
      gsap.to(appIcon1, {
        filter: 'drop-shadow(0 0 5px rgba(0, 160, 227, 0.5))',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2.1,
      });
    }
    if (appIcon2) {
      gsap.fromTo(
        appIcon2,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 1.9, ease: 'power2.out' }
      );
      gsap.to(appIcon2, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2.4,
      });
      gsap.to(appIcon2, {
        filter: 'drop-shadow(0 0 5px rgba(57, 49, 133, 0.5))',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2.4,
      });
    }
    if (appIcon3) {
      gsap.fromTo(
        appIcon3,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 2.2, ease: 'power2.out' }
      );
      gsap.to(appIcon3, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2.7,
      });
      gsap.to(appIcon3, {
        filter: 'drop-shadow(0 0 5px rgba(0, 160, 227, 0.5))',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2.7,
      });
    }
    if (notification) {
      gsap.fromTo(
        notification,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 2.5, ease: 'power2.out' }
      );
      gsap.to(notification, {
        scale: 1.1,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 3,
      });
    }
    if (aiChatbot) {
      gsap.fromTo(
        aiChatbot,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 3, ease: 'power2.out' }
      );
    }
    if (aiSpeechBubble) {
      gsap.fromTo(
        aiSpeechBubble,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 3.5, ease: 'power2.out' }
      );
      gsap.to(aiSpeechBubble, {
        scale: 1.1,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 4,
      });
    }
    if (signalWaves.length > 0) {
      signalWaves.forEach((wave, index) => {
        gsap.fromTo(
          wave,
          { opacity: 1, scale: 1 },
          { opacity: 0, scale: 2, duration: 1, delay: 3 + index * 0.2, repeat: -1, ease: 'power2.out' }
        );
      });
    }
    if (hologram) {
      gsap.fromTo(
        hologram,
        { opacity: 0, rotate: 0 },
        { opacity: 1, rotate: 360, duration: 5, delay: 3.5, repeat: -1, ease: 'linear' }
      );
    }
    if (particles.length > 0) {
      particles.forEach((particle, index) => {
        gsap.fromTo(
          particle,
          { opacity: 1, x: 0, y: 0 },
          { opacity: 0, x: gsap.utils.random(-50, 50), y: gsap.utils.random(-50, 50), duration: 1, delay: 3 + index * 0.2, repeat: -1, ease: 'power2.out' }
        );
      });
    }
    if (appStoreIcon) {
      gsap.fromTo(
        appStoreIcon,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 3.8, ease: 'power2.out' }
      );
      gsap.to(appStoreIcon, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 4.3,
      });
    }
    if (playStoreIcon) {
      gsap.fromTo(
        playStoreIcon,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 4, ease: 'power2.out' }
      );
      gsap.to(playStoreIcon, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 4.5,
      });
    }
    if (codeSnippet) {
      gsap.fromTo(
        codeSnippet,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 4.2, ease: 'power2.out' }
      );
    }
    if (codeLines.length > 0) {
      codeLines.forEach((line, index) => {
        gsap.fromTo(
          line,
          { opacity: 0, scaleX: 0 },
          { opacity: 1, scaleX: 1, duration: 0.5, delay: 4.7 + index * 0.2, ease: 'power2.out' }
        );
      });
    }
    if (cursor) {
      gsap.fromTo(
        cursor,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 5.3, ease: 'power2.out' }
      );
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        ease: 'step.end',
        delay: 5.3,
      });
    }
    if (tablet) {
      gsap.fromTo(
        tablet,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, delay: 2.8, ease: 'power2.out' }
      );
    }
    if (svgContainer) {
      svgContainer.addEventListener('mouseenter', () => {
        gsap.to(mobileDevice, {
          filter: 'drop-shadow(0 0 15px rgba(0, 160, 227, 0.7))',
          duration: 0.3,
        });
        gsap.to([appIcon1, appIcon2, appIcon3], {
          filter: 'drop-shadow(0 0 8px rgba(0, 160, 227, 0.7))',
          duration: 0.3,
        });
      });
      svgContainer.addEventListener('mouseleave', () => {
        gsap.to(mobileDevice, {
          filter: 'drop-shadow(0 0 10px rgba(0, 160, 227, 0.5))',
          duration: 0.3,
        });
        gsap.to([appIcon1, appIcon2, appIcon3], {
          filter: 'drop-shadow(0 0 5px rgba(0, 160, 227, 0.5))',
          duration: 0.3,
        });
      });
    }

    return () => {
      if (svgContainer) {
        svgContainer.removeEventListener('mouseenter', () => {});
        svgContainer.removeEventListener('mouseleave', () => {});
      }
    };
  }, []);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Mobile App Development',
    provider: {
      '@type': 'Organization',
      name: 'Intention Infoservice',
      url: 'https://intentioninfoservice.com',
      logo: 'https://intentioninfoservice.com/images/logo.webp',
      address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Maharashtra',
      addressLocality: 'Mumbai, Naigaon, Palghar',
      postalCode: '401208',
      streetAddress: 'Naigaon East',
    },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150',
        bestRating: '5',
        worstRating: '1',
      },
    },
    description: 'Professional mobile app development services for iOS, Android, and cross-platform applications. We create custom mobile apps with AI integration, 5G optimization, and enterprise-grade security for businesses worldwide.',
    areaServed: 'Global',
    offers: {
      '@type': 'Offer',
      url: 'https://intentioninfoservice.com/services/mobile-app-development',
      name: 'Custom Mobile App Development Services',
      description: 'Comprehensive mobile app development services including iOS app development, Android app development, cross-platform apps, AI-powered mobile solutions, and 5G optimized applications.',
      priceRange: '$5000-$50000',
      availability: 'InStock',
      validFrom: '2025-01-01',
      validThrough: '2025-12-31',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mobile App Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'iOS App Development',
            description: 'Native iOS app development using Swift and SwiftUI for optimal performance and user experience.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Android App Development',
            description: 'Native Android app development using Kotlin and Jetpack Compose for maximum compatibility.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cross-Platform App Development',
            description: 'Cross-platform mobile apps using React Native and Flutter for cost-effective multi-platform deployment.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI-Powered Mobile Apps',
            description: 'Mobile applications with artificial intelligence features including machine learning, chatbots, and predictive analytics.',
          },
        },
      ],
    },
  };

  return (
    <section className="relative bg-dark-950 py-10 md:py-12 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      

      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none grain-texture">
        <Image
          src="/textures/grain.webp"
          alt="Grain texture background for visual effect"
          fill
          style={{ objectFit: 'cover' }}
          priority={false}
          quality={75}
        />
      </div>

      <div className="w-full px-[5%] md:px-[10%] relative z-10">
        <div className="flex flex-col lg:flex-row items-center md:items-center md:justify-between justify-between gap-0 md:gap-12">
          {/* Left: Enhanced Content */}
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
              Professional Mobile App Development Services
            </motion.h1>
            
            <motion.h2
              className="text-lg md:text-xl text-brand-blue mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Custom iOS, Android & Cross-Platform Apps That Drive Business Growth
            </motion.h2>
            
            <motion.p
              className="text-md md:text-lg text-gray-500 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your business with our expert mobile app development services. We specialize in iOS app development, Android app development, and cross-platform mobile solutions with AI integration, 5G optimization, and enterprise-grade security.
            </motion.p>


            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Button
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                icon={<FaArrowRight />}
                iconPosition="right"
                href="/contact-us"
                ariaLabel="Get started with professional mobile app development services"
              >
                Get Free Consultation
              </Button>
            </motion.div>

          </div>

          {/* Right: Interactive Mobile App Visualization */}
          <div className="lg:w-1/2 flex justify-center relative svg-container">
            <svg
              width="550"
              height="450"
              viewBox="0 0 550 450"
              className="w-full max-w-[550px]"
              role="img"
              aria-label="Interactive illustration showcasing mobile app development with device mockups, app screens, AI features, and development tools"
            >
              <defs>
                <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#1E293B', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#0F172A', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: '#393185', stopOpacity: 0.8 }} />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Main Mobile Device */}
              <rect
                x="200"
                y="50"
                width="150"
                height="280"
                rx="20"
                fill="url(#mobileGradient)"
                stroke="#00a0e3"
                strokeWidth="2"
                className="mobile-device"
                filter="url(#glow)"
              />
              
              {/* Screen */}
              <rect
                x="210"
                y="70"
                width="130"
                height="240"
                rx="10"
                fill="#000"
                className="main-screen"
              />

              {/* App Screen 1 */}
              <rect
                x="215"
                y="75"
                width="120"
                height="110"
                rx="8"
                fill="url(#screenGradient)"
                className="app-screen-1"
                opacity="0"
              />
              
              {/* App Screen 2 */}
              <rect
                x="215"
                y="195"
                width="120"
                height="110"
                rx="8"
                fill="url(#screenGradient)"
                className="app-screen-2"
                opacity="0"
              />

              {/* App Icons */}
              <circle
                cx="240"
                cy="120"
                r="15"
                fill="#00a0e3"
                className="app-icon-1"
                opacity="0"
              />
              <circle
                cx="275"
                cy="120"
                r="15"
                fill="#393185"
                className="app-icon-2"
                opacity="0"
              />
              <circle
                cx="310"
                cy="120"
                r="15"
                fill="#00a0e3"
                className="app-icon-3"
                opacity="0"
              />

              {/* Notification */}
              <rect
                x="220"
                y="80"
                width="100"
                height="20"
                rx="10"
                fill="rgba(0, 160, 227, 0.8)"
                className="notification"
                opacity="0"
              />
              <text x="270" y="92" textAnchor="middle" fill="white" fontSize="8">New Message</text>

              {/* AI Chatbot */}
              <circle
                cx="400"
                cy="100"
                r="25"
                fill="#393185"
                className="ai-chatbot"
                opacity="0"
              />
              <text x="400" y="105" textAnchor="middle" fill="white" fontSize="12">AI</text>

              {/* AI Speech Bubble */}
              <ellipse
                cx="450"
                cy="80"
                rx="40"
                ry="20"
                fill="rgba(57, 49, 133, 0.8)"
                className="ai-speech-bubble"
                opacity="0"
              />
              <text x="450" y="85" textAnchor="middle" fill="white" fontSize="8">Smart Features</text>

              {/* 5G Signal Waves */}
              <circle
                cx="100"
                cy="150"
                r="10"
                fill="none"
                stroke="#00a0e3"
                strokeWidth="2"
                className="signal-wave"
                opacity="0"
              />
              <circle
                cx="100"
                cy="150"
                r="20"
                fill="none"
                stroke="#00a0e3"
                strokeWidth="2"
                className="signal-wave"
                opacity="0"
              />
              <circle
                cx="100"
                cy="150"
                r="30"
                fill="none"
                stroke="#00a0e3"
                strokeWidth="2"
                className="signal-wave"
                opacity="0"
              />
              <text x="100" y="190" textAnchor="middle" fill="#00a0e3" fontSize="10">5G Ready</text>

              {/* Holographic AR Preview */}
              <polygon
                points="480,200 500,180 520,200 500,220"
                fill="rgba(0, 160, 227, 0.6)"
                className="hologram"
                opacity="0"
              />
              <text x="500" y="240" textAnchor="middle" fill="#00a0e3" fontSize="8">AR/VR</text>

              {/* Data Particles */}
              <circle cx="150" cy="250" r="3" fill="#393185" className="data-particle" opacity="0" />
              <circle cx="170" cy="270" r="3" fill="#00a0e3" className="data-particle" opacity="0" />
              <circle cx="130" cy="290" r="3" fill="#393185" className="data-particle" opacity="0" />

              {/* App Store Icons */}
              <rect
                x="380"
                y="300"
                width="40"
                height="30"
                rx="5"
                fill="#000"
                className="app-store-icon"
                opacity="0"
              />
              <text x="400" y="318" textAnchor="middle" fill="white" fontSize="8">App Store</text>

              <rect
                x="430"
                y="300"
                width="40"
                height="30"
                rx="5"
                fill="#393185"
                className="play-store-icon"
                opacity="0"
              />
              <text x="450" y="318" textAnchor="middle" fill="white" fontSize="8">Play Store</text>

              {/* Code Snippet */}
              <rect
                x="50"
                y="350"
                width="120"
                height="80"
                rx="5"
                fill="rgba(0, 0, 0, 0.8)"
                stroke="#00a0e3"
                strokeWidth="1"
                className="code-snippet"
                opacity="0"
              />
              <rect x="55" y="360" width="80" height="2" fill="#00a0e3" className="code-line" opacity="0" />
              <rect x="55" y="370" width="60" height="2" fill="#393185" className="code-line" opacity="0" />
              <rect x="55" y="380" width="90" height="2" fill="#00a0e3" className="code-line" opacity="0" />
              <rect x="55" y="390" width="70" height="2" fill="#393185" className="code-line" opacity="0" />
              <rect x="140" y="390" width="2" height="8" fill="#00a0e3" className="cursor" opacity="0" />

              {/* Tablet for Cross-Platform */}
              <rect
                x="400"
                y="350"
                width="100"
                height="70"
                rx="8"
                fill="url(#mobileGradient)"
                stroke="#393185"
                strokeWidth="2"
                className="tablet"
                opacity="0"
              />
              <rect
                x="405"
                y="355"
                width="90"
                height="60"
                rx="4"
                fill="#000"
              />
              <text x="450" y="440" textAnchor="middle" fill="#393185" fontSize="8">Cross-Platform</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}


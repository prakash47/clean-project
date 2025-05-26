'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
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
        streetAddress: '123 Digital Avenue',
        addressLocality: 'Tech City',
        postalCode: 'TC 12345',
      },
    },
    description: 'Launch your business into the future with expert mobile app development services. We specialize in iOS app development, Android app development, and cross-platform apps that are secure, AI-powered, and 5G optimized. Get a free quote today!',
    areaServed: 'Global',
    offers: {
      '@type': 'Offer',
      url: 'https://intentioninfoservice.com/services/mobile-app-development',
      name: 'Custom Mobile App Development',
      description: 'We offer custom mobile app development services for iOS, Android, and cross-platform apps, focusing on user-centric design, performance, and security.',
      keywords: 'mobile app development, iOS app development, Android app development, cross-platform app development, custom mobile apps, app development services, mobile app developers, secure mobile apps, AI-powered apps, 5G optimized apps',
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What platforms do you develop mobile apps for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We specialize in iOS app development, Android app development, and cross-platform apps using modern frameworks like React Native and Flutter.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does mobile app development take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The timeline varies based on complexity, but typically ranges from 3 to 6 months, including discovery, design, development, and testing phases.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide post-launch support for mobile apps?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we offer dedicated support and maintenance to keep your app secure, updated, and performing optimally after launch.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you develop AI-powered or 5G optimized apps?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely! We build AI-powered apps with features like personalization and chatbots, and 5G optimized apps for low-latency, high-speed performance.',
          },
        },
      ],
    },
  };

  return (
    <section className="relative bg-dark-950 pt-8 md:py-24 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
        .app-screen-1:focus,
        .app-screen-2:focus {
          outline: 2px solid #00a0e3;
          outline-offset: 2px;
        }
      `}</style>
      <div className="absolute inset-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
          aria-hidden="true"
          aria-label="Background video showcasing a mobile app demo"
        >
          <source src="/videos/mobile-app-demo.mp4" type="video/mp4" />
          <div className="bg-gradient-to-b from-dark-950 to-dark-800 w-full h-full"></div>
        </video>
      </div>
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
      <div className="w-full px-[10%] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
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
              Launch Winning Mobile Apps with Expert Development
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl font-semibold text-brand-blue mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Custom iOS, Android, and Cross-Platform Apps That Engage and Convert
            </motion.p>
            <motion.p
              className="text-md md:text-lg text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Need a secure, AI-powered app for your startup? Our mobile app developers deliver fast, scalable solutions with iOS app development, Android app development, and cross-platform apps that leverage 5G technology in 2025. Boost user engagement by 40%—get started today!
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
                className="bg-gradient-to-r from-brand-blue to-brand-indigo hover:from-brand-indigo hover:to-brand-blue text-white font-semibold shadow-lg hover:shadow-brand-blue/40"
                icon={<FaArrowRight />}
                iconPosition="right"
                href="/contact-us"
                aria-label="Get your free quote today for mobile app development"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(0, 160, 227, 0.5)",
                    "0 0 20px rgba(0, 160, 227, 0.7)",
                    "0 0 10px rgba(0, 160, 227, 0.5)",
                  ],
                  transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                Get Your Free Quote Today
              </Button>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center relative svg-container">
            <svg
              width="550"
              height="450"
              viewBox="0 0 550 450"
              className="w-full max-w-[550px]"
              role="img"
              aria-label="Illustration of a mobile device with app screens, icons, notification, AI chatbot, 5G signals, holographic AR preview, data particles, app store icons, code snippet, and tablet for cross-platform development"
            >
              <defs>
                <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#1E293B', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#0F172A', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <rect
                x="150"
                y="50"
                width="250"
                height="350"
                rx="20"
                fill="url(#mobileGradient)"
                stroke="#00a0e3"
                strokeWidth="3"
                className="mobile-device"
              />
              <g transform="translate(165, 75)">
                <rect
                  x="0"
                  y="0"
                  width="220"
                  height="120"
                  rx="10"
                  fill="#0F172A"
                  className="app-screen-1 cursor-pointer"
                  onClick={() => setActiveScreen(1)}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveScreen(1)}
                  role="button"
                  aria-label="View first app screen preview"
                />
                <rect
                  x="0"
                  y="140"
                  width="220"
                  height="120"
                  rx="10"
                  fill="#0F172A"
                  className="app-screen-2 cursor-pointer"
                  onClick={() => setActiveScreen(2)}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveScreen(2)}
                  role="button"
                  aria-label="View second app screen preview"
                />
              </g>
              <g transform="translate(100, 150)">
                <rect x="0" y="0" width="35" height="35" fill="#00a0e3" rx="5" className="app-icon-1" />
                <rect x="45" y="45" width="35" height="35" fill="#393185" rx="5" className="app-icon-2" />
                <rect x="0" y="90" width="35" height="35" fill="#00a0e3" rx="5" className="app-icon-3" />
              </g>
              <g transform="translate(370, 50)" className="notification">
                <circle cx="30" cy="30" r="20" fill="#00a0e3" />
                <text x="25" y="35" fill="#fff" fontSize="10" fontFamily="monospace">+3</text>
              </g>
              <g transform="translate(400, 50)" className="ai-chatbot">
                <circle cx="25" cy="25" r="20" fill="#393185" />
                <path d="M20,25 Q25,15 30,25" fill="none" stroke="#fff" strokeWidth="2" />
              </g>
              <g transform="translate(430, 30)" className="ai-speech-bubble">
                <rect x="0" y="0" width="60" height="30" rx="5" fill="#00a0e3" />
                <text x="10" y="20" fill="#fff" fontSize="10" fontFamily="monospace">Hi</text>
              </g>
              <g transform="translate(150, 50)">
                <circle cx="0" cy="0" r="10" fill="none" stroke="#00a0e3" strokeWidth="2" className="signal-wave" />
                <circle cx="0" cy="0" r="15" fill="none" stroke="#00a0e3" strokeWidth="2" className="signal-wave" />
                <circle cx="0" cy="0" r="20" fill="none" stroke="#00a0e3" strokeWidth="2" className="signal-wave" />
              </g>
              <g transform="translate(250, 10)" className="hologram">
                <path d="M30,40 Q50,30 70,40 L60,60 Q50,70 40,60 Z" fill="#00a0e3" opacity="0.7" />
                <path d="M40,60 L60,60 Q65,70 55,70 Q45,70 40,60 Z" fill="#393185" opacity="0.7" />
              </g>
              <g transform="translate(275, 200)">
                <circle cx="0" cy="0" r="3" fill="#00a0e3" className="data-particle" />
                <circle cx="10" cy="10" r="3" fill="#00a0e3" className="data-particle" />
                <circle cx="-10" cy="-10" r="3" fill="#00a0e3" className="data-particle" />
                <circle cx="15" cy="-5" r="3" fill="#00a0e3" className="data-particle" />
                <circle cx="-5" cy="15" r="3" fill="#00a0e3" className="data-particle" />
              </g>
              <g transform="translate(100, 300)" className="app-store-icon">
                <rect x="0" y="0" width="40" height="40" rx="8" fill="#00a0e3" />
                <path d="M15,15 L25,30 L35,15" fill="none" stroke="#fff" strokeWidth="2" />
              </g>
              <g transform="translate(150, 300)" className="play-store-icon">
                <rect x="0" y="0" width="40" height="40" rx="8" fill="#393185" />
                <path d="M10,30 L30,20 L10,10 Z" fill="#fff" />
              </g>
              <g transform="translate(400, 150)" className="code-snippet">
                <rect x="0" y="0" width="120" height="90" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" rx="5" />
                <rect x="5" y="5" width="110" height="80" fill="#0F172A" rx="3" />
                <g transform="translate(10, 10)">
                  <text x="0" y="15" fill="#00a0e3" fontSize="10" fontFamily="monospace" className="code-line">buildApp</text>
                  <text x="10" y="30" fill="#fff" fontSize="10" fontFamily="monospace" className="code-line">return Scaffold</text>
                  <text x="20" y="45" fill="#fff" fontSize="10" fontFamily="monospace" className="code-line">body Center</text>
                  <text x="30" y="60" fill="#fff" fontSize="10" fontFamily="monospace" className="code-line">child Text App</text>
                  <rect x="90" y="50" width="5" height="15" fill="#00a0e3" className="cursor" />
                </g>
              </g>
              <g transform="translate(400, 350)" className="tablet">
                <rect x="0" y="0" width="120" height="70" fill="url(#mobileGradient)" stroke="#393185" strokeWidth="2" rx="5" />
                <rect x="5" y="5" width="110" height="60" fill="#0F172A" rx="3" />
                <rect x="7" y="7" width="106" height="5" fill="#393185" rx="2" />
              </g>
            </svg>
            {activeScreen && (
              <div
                className="absolute top-20 md:top-0 md:right-0 bg-dark-900 p-4 rounded-lg shadow-lg text-white"
                aria-live="polite"
              >
                <h3 className="text-lg font-semibold">
                  {activeScreen === 1 ? 'App Screen 1' : 'App Screen 2'}
                </h3>
                <p className="text-gray-400">
                  {activeScreen === 1
                    ? 'A preview of a user-friendly dashboard.'
                    : 'A showcase of a seamless e-commerce experience.'}
                </p>
                <button
                  className="mt-2 text-brand-blue hover:underline"
                  onClick={() => setActiveScreen(null)}
                  aria-label="Close preview"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
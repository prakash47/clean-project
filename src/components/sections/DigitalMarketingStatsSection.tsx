'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaChartLine, FaUsers, FaSmile, FaRocket, FaGlobe, FaShieldAlt, FaHashtag, FaCamera, FaLink, FaVideo } from 'react-icons/fa';
import { useRef } from 'react';

// Note: Flowbite CSS and JS are included via CDN in the project setup
// <link href="https://cdn.jsdelivr.net/npm/flowbite@latest/dist/flowbite.min.css" rel="stylesheet" />
// <script src="https://cdn.jsdelivr.net/npm/flowbite@latest/dist/flowbite.min.js"></script>

export default function DigitalMarketingStatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animate the background glow effect based on scroll position
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0]);

  const stats = [
    {
      value: 500,
      suffix: '+',
      label: 'Successful Campaigns',
      icon: <FaChartLine className="w-8 h-8 text-brand-blue" aria-hidden="true" />,
    },
    {
      value: 10,
      suffix: '+',
      label: 'Years of Experience',
      icon: <FaRocket className="w-8 h-8 text-brand-blue" aria-hidden="true" />,
    },
    {
      value: 95,
      suffix: '%',
      label: 'Client Satisfaction',
      icon: <FaSmile className="w-8 h-8 text-brand-blue" aria-hidden="true" />,
    },
    {
      value: 300,
      suffix: '%',
      label: 'Average Client Growth',
      icon: <FaUsers className="w-8 h-8 text-brand-blue" aria-hidden="true" />,
    },
    {
      value: 1000,
      suffix: '+',
      label: 'Global Reach (Countries)',
      icon: <FaGlobe className="w-8 h-8 text-brand-blue" aria-hidden="true" />,
    },
    {
      value: 200,
      suffix: '+',
      label: 'Trusted Partners',
      icon: <FaShieldAlt className="w-8 h-8 text-brand-blue" aria-hidden="true" />,
    },
  ];

  // Structured data for the section
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    "name": "Intention Infoservice",
    "url": "https://intentioninfoservice.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Digital Avenue",
      "addressLocality": "Tech City",
      "postalCode": "TC 12345"
    },
    "description": "Trusted digital marketing partner in 2025 with over 500 successful campaigns, 10+ years of experience, 95% client satisfaction, 300% average client growth, and a global reach across 1000+ countries.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "200",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <section className="relative bg-dark-900 py-16 md:py-24 overflow-hidden">
      <div className="w-full px-2 sm:px-[10%] relative z-10">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Subtle Grain Texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none z-0"
          style={{ backgroundImage: "url('/textures/grain.webp')" }}
        />
        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="particle absolute w-2 h-2 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0,
                animation: `float-${index} ${5 + index * 0.5}s linear infinite`,
              }}
            >
              <style>
                {`
                  @keyframes float-${index} {
                    0% {
                      transform: translateX(-50px);
                      opacity: 0;
                    }
                    50% {
                      opacity: ${Math.random() * 0.5 + 0.2};
                    }
                    100% {
                      transform: translateX(${window.innerWidth + 50}px);
                      opacity: 0;
                    }
                  }
                `}
              </style>
            </div>
          ))}
        </div>
        {/* Floating Digital Marketing Icons */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <FaHashtag className="floating-icon absolute w-6 h-6 text-brand-blue" style={{ top: '10%', left: '5%', opacity: 0, animation: 'float-icon-1 4s linear infinite' }} />
          <FaCamera className="floating-icon absolute w-5 h-5 text-brand-blue" style={{ top: '20%', left: '15%', opacity: 0, animation: 'float-icon-2 4.4s linear infinite' }} />
          <FaGlobe className="floating-icon absolute w-7 h-7 text-brand-blue" style={{ top: '30%', left: '85%', opacity: 0, animation: 'float-icon-3 4.8s linear infinite' }} />
          <FaLink className="floating-icon absolute w-6 h-6 text-brand-blue" style={{ top: '70%', left: '10%', opacity: 0, animation: 'float-icon-4 5.2s linear infinite' }} />
          <FaVideo className="floating-icon absolute w-5 h-5 text-brand-blue" style={{ top: '80%', left: '90%', opacity: 0, animation: 'float-icon-5 5.6s linear infinite' }} />
          <style>
            {`
              @keyframes float-icon-1 {
                0% { transform: translateX(-50px); opacity: 0; }
                50% { opacity: 0.5; }
                100% { transform: translateX(${window.innerWidth + 50}px); opacity: 0; }
              }
              @keyframes float-icon-2 {
                0% { transform: translateX(-50px); opacity: 0; }
                50% { opacity: 0.4; }
                100% { transform: translateX(${window.innerWidth + 50}px); opacity: 0; }
              }
              @keyframes float-icon-3 {
                0% { transform: translateX(-50px); opacity: 0; }
                50% { opacity: 0.5; }
                100% { transform: translateX(${window.innerWidth + 50}px); opacity: 0; }
              }
              @keyframes float-icon-4 {
                0% { transform: translateX(-50px); opacity: 0; }
                50% { opacity: 0.3; }
                100% { transform: translateX(${window.innerWidth + 50}px); opacity: 0; }
              }
              @keyframes float-icon-5 {
                0% { transform: translateX(-50px); opacity: 0; }
                50% { opacity: 0.4; }
                100% { transform: translateX(${window.innerWidth + 50}px); opacity: 0; }
              }
            `}
          </style>
        </div>
        {/* Animated Light Flares */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg width="100%" height="100%">
            <line x1="-500" y1="20%" x2="1500" y2="20%" stroke="#00a0e3" strokeWidth="2" opacity="0.2" className="light-flare" />
            <line x1="-500" y1="40%" x2="1500" y2="40%" stroke="#393185" strokeWidth="2" opacity="0.2" className="light-flare" />
            <line x1="-500" y1="60%" x2="1500" y2="60%" stroke="#00a0e3" strokeWidth="2" opacity="0.2" className="light-flare" />
            <line x1="-500" y1="80%" x2="1500" y2="80%" stroke="#393185" strokeWidth="2" opacity="0.2" className="light-flare" />
            <style>
              {`
                .light-flare {
                  animation: flare 5s linear infinite;
                }
                @keyframes flare {
                  0% { transform: translateX(-500px); }
                  100% { transform: translateX(1500px); }
                }
              `}
            </style>
          </svg>
        </div>
        <div className="w-full px-2 sm:px-[10%] relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Proven Digital Marketing Success in 2025
            </motion.h2>
            <motion.p
              className="text-lg text-brand-blue font-semibold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Data-Driven Results That Speak for Themselves
            </motion.p>
            <motion.p
              className="text-base text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              As a trusted digital marketing partner, our 2025 success stats highlight our expertise in driving growth, engagement, and conversions for clients worldwide.
            </motion.p>
          </div>
          {/* Neon Stat Cards with Holographic Effects and Animated Progress Rings */}
          <div className="relative flex justify-center items-center" ref={ref}>
            {/* Background Glow Effect */}
            <motion.div
              className="absolute w-[900px] h-[900px] rounded-full bg-gradient-radial from-brand-blue/30 to-transparent z-0"
              style={{ opacity: glowOpacity }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto relative z-10 flex justify-center">
              {stats.map((stat, index) => {
                const isOdd = index % 2 === 0;
                const progress = isInView ? stat.value / 1000 : 0; // Normalize value for progress ring (max 1000)
                const circumference = 2 * Math.PI * 60; // Circumference of the progress ring (radius 60px)

                return (
                  <motion.div
                    key={index}
                    className="relative backdrop-blur-sm bg-dark-800 rounded-lg p-6 border border-[rgba(0,160,227,0.3)] hover:border-brand-blue hover:shadow-[0_0_20px_rgba(0,160,227,0.7)] hover:scale-105 transition-all duration-300 flex flex-col items-center text-center w-full max-w-sm mx-auto"
                    style={{
                      transform: `translateY(${isOdd ? '-20px' : '20px'})`,
                      background: 'linear-gradient(45deg, rgba(0, 160, 227, 0.1), rgba(57, 49, 133, 0.1))',
                      animation: 'holographic 3s linear infinite',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && console.log(`Selected ${stat.label}`)}
                  >
                    <style>
                      {`
                        @keyframes holographic {
                          0% { background: linear-gradient(45deg, rgba(0, 160, 227, 0.1), rgba(57, 49, 133, 0.1)); }
                          50% { background: linear-gradient(45deg, rgba(57, 49, 133, 0.1), rgba(0, 160, 227, 0.1)); }
                          100% { background: linear-gradient(45deg, rgba(0, 160, 227, 0.1), rgba(57, 49, 133, 0.1)); }
                        }
                      `}
                    </style>
                    <div className="relative w-32 h-32 mb-4">
                      <svg className="w-full h-full" viewBox="0 0 140 140">
                        <circle
                          cx="70"
                          cy="70"
                          r="60"
                          stroke="#393185"
                          strokeWidth="10"
                          fill="none"
                          opacity="0.2"
                        />
                        <motion.circle
                          cx="70"
                          cy="70"
                          r="60"
                          stroke="#00a0e3"
                          strokeWidth="10"
                          fill="none"
                          strokeDasharray={circumference}
                          strokeDashoffset={isInView ? circumference - (progress * circumference) : circumference}
                          strokeLinecap="round"
                          transform="rotate(-90 70 70)"
                          transition={{ duration: 2, ease: "easeOut" }}
                          aria-hidden="true"
                        />
                        <g transform="translate(55, 55)">
                          {stat.icon}
                        </g>
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {isInView ? stat.value : 0}{stat.suffix}
                    </h3>
                    <p className="text-base text-gray-300">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
          {/* CTA Button (Styled with Flowbite Button) */}
          <motion.div
            className="flex justify-center mt-12 z-20 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="btn btn-primary hover:bg-brand-blue hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] transition-all duration-300"
              icon={<FaArrowRight />}
              iconPosition="right"
              href="/contact-us"
              ariaLabel="Contact us to see our impact and achieve digital marketing success in 2025"
            >
              See Our Impact
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
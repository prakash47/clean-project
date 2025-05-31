'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurProcessSection() {
  const [hoveredStates, setHoveredStates] = useState<boolean[]>(new Array(8).fill(false));

  const steps = [
    {
      title: 'Discovery',
      description: 'We analyze your goals, audience, and brand to craft a tailored web strategy.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Discovery">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" />
          <circle cx="30" cy="30" r="12" fill="#0F172A" />
          <path d="M32,32 L40,40" stroke="#00a0e3" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Planning & Strategy',
      description: 'We create a detailed roadmap to ensure your project aligns with business objectives.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Planning and Strategy">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" />
          <path d="M20,20 L40,40 M20,40 L40,20" stroke="#00a0e3" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Design',
      description: 'Our team designs stunning, mobile-responsive mockups prioritizing user experience (UX).',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Design">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" />
          <path d="M20,40 Q30,20 40,40" fill="none" stroke="#00a0e3" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Prototyping',
      description: 'We build interactive prototypes to refine functionality and user flow.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Prototyping">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" />
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#00a0e3" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
      ),
    },
    {
      title: 'Development',
      description: 'Our developers bring designs to life with clean, SEO-optimized code.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Development">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" />
          <path d="M20,30 L25,25 L30,30 L35,25 L40,30" fill="none" stroke="#00a0e3" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Testing',
      description: 'We test for compatibility, performance, and Core Web Vitals to ensure quality.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Testing">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" />
          <path d="M20,30 L25,35 L40,20" fill="none" stroke="#00a0e3" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'SEO & Performance Optimization',
      description: 'We optimize for search rankings and speed to maximize impact.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing SEO and Performance Optimization">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" />
          <path d="M30,30 L30,20 A10,10 0 0,1 40,30" fill="none" stroke="#00a0e3" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Launch & Support',
      description: 'We launch your site and provide ongoing support to keep it ranking high.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Launch and Support">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" />
          <path d="M30,15 L40,25 L30,35 L20,25 Z" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  const handleMouseEnter = (index: number) => {
    const card = document.querySelectorAll('.step-card')[index];
    const icon = document.querySelectorAll('.step-icon')[index];

    gsap.killTweensOf(card);
    gsap.killTweensOf(icon);

    gsap.to(card, {
      borderColor: '#00a0e3',
      boxShadow: '0 0 15px rgba(0, 160, 227, 0.5)',
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to(icon, {
      scale: 1.2,
      boxShadow: '0 0 15px rgba(0, 160, 227, 0.7)',
      duration: 0.3,
      ease: 'power2.out',
    });

    setHoveredStates((prev) => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = document.querySelectorAll('.step-card')[index];
    const icon = document.querySelectorAll('.step-icon')[index];

    gsap.killTweensOf(card);
    gsap.killTweensOf(icon);

    gsap.to(card, {
      borderColor: 'rgba(0, 160, 227, 0.3)',
      boxShadow: 'none',
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to(icon, {
      scale: 1,
      boxShadow: 'none',
      duration: 0.3,
      ease: 'power2.out',
    });

    setHoveredStates((prev) => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });
  };

  const handleFocus = (index: number) => {
    handleMouseEnter(index);
  };

  const handleBlur = (index: number) => {
    handleMouseLeave(index);
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Our Web Design & Development Process',
    description: 'A proven step-by-step process to deliver high-quality websites.',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      description: step.description,
    })),
  };

  return (
    <section id="our-process" className="bg-gradient-to-b from-dark-900 to-dark-950 py-16 md:py-24 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
      />
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(45deg, rgba(0, 160, 227, 0.2), rgba(57, 49, 133, 0.2))',
            animation: 'wave 10s linear infinite',
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 160, 227, 0.2), rgba(57, 49, 133, 0.2))',
            animation: 'wave 15s linear infinite reverse',
          }}
        />
        <style>
          {`
            @keyframes wave {
              0% {
                background-position: 0% 0%;
              }
              100% {
                background-position: 200% 200%;
              }
            }
          `}
        </style>
      </div>
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
      <div className="w-full px-[10%] relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Step-by-Step Web Design & Development Process
          </motion.h2>
          <motion.p
            className="text-lg text-brand-blue font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A Proven Approach to Deliver High-Quality Results
          </motion.p>
          <motion.p
            className="text-base text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our comprehensive process ensures your website is strategically planned, beautifully designed, and optimized for success in 2025’s competitive digital landscape.
          </motion.p>
        </div>
        <div className="relative">
          <div className="relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`step-card flex items-start gap-6 mb-12 backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-[rgba(0,160,227,0.3)] transition-all duration-300 md:w-1/2 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onFocus={() => handleFocus(index)}
                onBlur={() => handleBlur(index)}
                tabIndex={0}
                aria-describedby={`step-description-${index}`}
              >
                <div className="step-icon w-14 h-14 flex items-center justify-center">{step.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{`${index + 1}. ${step.title}`}</h3>
                  <p id={`step-description-${index}`} className="text-base text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
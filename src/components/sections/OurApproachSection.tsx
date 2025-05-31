'use client';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function OurApproachSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Animate cycle of innovation
    const cycle = document.querySelector('.cycle');
    const segments = document.querySelectorAll('.segment');
    const segmentIcons = document.querySelectorAll('.segment-icon');
    const segmentLabels = document.querySelectorAll('.segment-label');
    const particles = document.querySelectorAll('.particle');

    if (cycle) {
      gsap.fromTo(
        cycle,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );
      // Ongoing rotation animation for the cycle (around its center axis)
      gsap.to(cycle, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'linear',
        transformOrigin: 'center center',
      });
    }
    if (segments.length > 0) {
      segments.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.6, delay: 0.5 + index * 0.3, ease: 'power2.out' }
        );
      });
    }
    if (segmentIcons.length > 0) {
      segmentIcons.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.6, delay: 0.7 + index * 0.3, ease: 'power2.out' }
        );
        // Ongoing pulsating animation
        gsap.to(element, {
          scale: 1.1,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.7 + index * 0.3,
        });
      });
    }
    if (segmentLabels.length > 0) {
      segmentLabels.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.9 + index * 0.3, ease: 'power2.out' }
        );
      });
    }
    if (particles.length > 0) {
      particles.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 1.5, ease: 'power2.out', stagger: 0.1 }
        );
        // Ongoing orbiting animation
        gsap.to(element, {
          rotation: 360,
          duration: 10,
          repeat: -1,
          ease: 'linear',
          transformOrigin: 'center center',
        });
      });
    }
  }, []);

  // Structured data for the Our Approach section
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Intention Infoservice',
    'url': 'https://intentioninfoservice.com/about-us',
    'description': 'Intention Infoservice follows a client-focused approach to deliver innovative web design, mobile apps, and digital marketing solutions in 2025.',
    'service': [
      {
        '@type': 'Service',
        'name': 'Discovery & Planning',
        'description': 'We start by understanding your goals to create tailored web design and digital marketing strategies.',
      },
      {
        '@type': 'Service',
        'name': 'Design & Development',
        'description': 'Our team designs and develops custom mobile apps and websites with a focus on user experience.',
      },
      {
        '@type': 'Service',
        'name': 'Launch & Support',
        'description': 'We ensure a smooth launch and provide ongoing support to keep your digital solutions optimized.',
      },
    ],
  };

  return (
    <section className="bg-dark-900 py-16 md:py-24 relative overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="w-full px-[10%] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Approach Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Approach: Building Your Digital Future
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              At Intention Infoservice, we follow a streamlined process to deliver innovative web design solutions, custom mobile apps, and digital marketing services. Our approach ensures that every project meets your unique needs and drives measurable results.
            </motion.p>
            <motion.p
              className="text-lg text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              From discovery to launch, we’re committed to quality, innovation, and client satisfaction, helping your business thrive in 2025 and beyond.
            </motion.p>
          </div>
          {/* Right: Updated Cycle of Innovation Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <svg
              width="400"
              height="300"
              viewBox="0 0 400 300"
              className="w-full max-w-[400px]"
              role="img"
              aria-label="Illustration of Intention Infoservice's approach as a cycle of innovation"
            >
              {/* Background */}
              <rect x="0" y="0" width="400" height="300" rx="20" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
              {/* Cycle of Innovation (Centered) */}
              <g transform="translate(200, 150)">
                {/* Rotating Cycle (Base, Segments, and Labels) */}
                <g className="cycle">
                  <circle cx="0" cy="0" r="80" fill="none" stroke="#14B8A6" strokeWidth="4" opacity="0.3" />
                  <circle cx="0" cy="0" r="60" fill="none" stroke="#14B8A6" strokeWidth="2" opacity="0.5" />
                  {/* Segment 1: Discovery & Planning */}
                  <g className="segment">
                    <path
                      d="M0,0 L0,-60 A60,60 0 0,1 51.96,-30 Z"
                      fill="#0F172A"
                      stroke="#14B8A6"
                      strokeWidth="2"
                    />
                    <text
                      x="0"
                      y="-110"
                      fill="#fff"
                      fontSize="14"
                      fontWeight="bold"
                      textAnchor="middle"
                      className="segment-label"
                      style={{ textShadow: '0 0 3px rgba(20, 184, 166, 0.5)' }}
                    >
                      Discovery & Planning
                    </text>
                  </g>
                  {/* Segment 2: Design & Development */}
                  <g transform="rotate(120)" className="segment">
                    <path
                      d="M0,0 L0,-60 A60,60 0 0,1 51.96,-30 Z"
                      fill="#0F172A"
                      stroke="#14B8A6"
                      strokeWidth="2"
                    />
                    <text
                      x="0"
                      y="-110"
                      fill="#fff"
                      fontSize="14"
                      fontWeight="bold"
                      textAnchor="middle"
                      className="segment-label"
                      style={{ textShadow: '0 0 3px rgba(20, 184, 166, 0.5)' }}
                    >
                      Design & Development
                    </text>
                  </g>
                  {/* Segment 3: Launch & Support */}
                  <g transform="rotate(240)" className="segment">
                    <path
                      d="M0,0 L0,-60 A60,60 0 0,1 51.96,-30 Z"
                      fill="#0F172A"
                      stroke="#14B8A6"
                      strokeWidth="2"
                    />
                    <text
                      x="0"
                      y="-110"
                      fill="#fff"
                      fontSize="14"
                      fontWeight="bold"
                      textAnchor="middle"
                      className="segment-label"
                      style={{ textShadow: '0 0 3px rgba(20, 184, 166, 0.5)' }}
                    >
                      Launch & Support
                    </text>
                  </g>
                </g>
                {/* Fixed Icons (Not Rotating) */}
                {/* Icon 1: Discovery & Planning (Magnifying Glass) */}
                <g className="segment-icon">
                  <g transform="translate(0, -100)">
                    <circle cx="0" cy="0" r="10" fill="#10B981" />
                    <path d="M-3,-3 L3,3 M-3,3 L3,-3" stroke="#1E293B" strokeWidth="2" />
                  </g>
                </g>
                {/* Icon 2: Design & Development (Pencil) */}
                <g transform="rotate(120)" className="segment-icon">
                  <g transform="translate(0, -100)">
                    <path d="M-8,-8 L8,8 M-8,8 L8,-8" stroke="#10B981" strokeWidth="3" />
                  </g>
                </g>
                {/* Icon 3: Launch & Support (Rocket) */}
                <g transform="rotate(240)" className="segment-icon">
                  <g transform="translate(0, -100)">
                    <path d="M-8,0 L8,0 M0,-8 L0,8" stroke="#10B981" strokeWidth="3" />
                  </g>
                </g>
              </g>
              {/* Orbiting Particles (Decorative) */}
              <g transform="translate(200, 150)">
                <g transform="rotate(0)" className="particle">
                  <circle cx="0" cy="100" r="5" fill="#14B8A6" opacity="0.7" />
                </g>
                <g transform="rotate(90)" className="particle">
                  <circle cx="0" cy="100" r="4" fill="#10B981" opacity="0.7" />
                </g>
                <g transform="rotate(180)" className="particle">
                  <circle cx="0" cy="100" r="6" fill="#14B8A6" opacity="0.7" />
                </g>
                <g transform="rotate(270)" className="particle">
                  <circle cx="0" cy="100" r="3" fill="#10B981" opacity="0.7" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
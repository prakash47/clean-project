'use client';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function OurStorySection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Animate timeline elements
    const timelineEvents = document.querySelectorAll('.timeline-event');
    const timelineLine = document.querySelector('.timeline-line');
    const timelineDotElements = document.querySelectorAll('.timeline-dot');

    if (timelineLine) {
      gsap.fromTo(
        timelineLine,
        { strokeDasharray: 200, strokeDashoffset: 200 },
        { strokeDashoffset: 0, duration: 1.5, ease: 'power2.out' }
      );
    }
    if (timelineDotElements.length > 0) {
      timelineDotElements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 1, ease: 'power2.out', stagger: 0.2 }
        );
      });
    }
    if (timelineEvents.length > 0) {
      timelineEvents.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: 1 + index * 0.2, ease: 'power2.out' }
        );
      });
    }
  }, []);

  // Structured data for the Our Story section
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Intention Infoservice',
    'url': 'https://intentioninfoservice.com/about-us',
    'description': 'Intention Infoservice, founded in 2016, is dedicated to providing innovative web design and digital marketing solutions, with a renewed focus in 2025.',
    'foundingDate': '2016',
    'history': [
      {
        '@type': 'Event',
        'name': 'Company Founded',
        'startDate': '2016-01-01',
        'description': 'Intention Infoservice was founded with a vision to deliver innovative digital solutions.',
      },
      {
        '@type': 'Event',
        'name': 'Revival and Rebranding',
        'startDate': '2020-01-01',
        'description': 'After overcoming challenges, we relaunched with a renewed focus on excellence.',
      },
      {
        '@type': 'Event',
        'name': 'First Project in 2025',
        'startDate': '2025-01-01',
        'description': 'Completed a significant web design project, marking our commitment to quality in 2025.',
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
          {/* Left: Updated Story Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Story: A Legacy of Resilience
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Intention Infoservice was founded in 2016 with a vision to create impactful digital solutions. After facing challenges that led to a temporary closure, we made a resilient comeback in 2020, redefining our mission to deliver excellence in web design, mobile apps, and digital marketing.
            </motion.p>
            <motion.p
              className="text-lg text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              In 2025, we completed a significant web design project, marking a new chapter in our journey. With a renewed focus, we’re committed to crafting innovative digital experiences that drive success for businesses worldwide.
            </motion.p>
          </div>
          {/* Right: Updated Timeline SVG */}
          <div className="md:w-1/2 flex justify-center">
            <svg
              width="400"
              height="300"
              viewBox="0 0 400 300"
              className="w-full max-w-[400px]"
              role="img"
              aria-label="Timeline of Intention Infoservice's journey"
            >
              {/* Timeline Background */}
              <rect x="0" y="0" width="400" height="300" rx="20" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
              {/* Timeline Line */}
              <g transform="translate(50, 50)">
                <line
                  x1="50"
                  y1="200"
                  x2="300"
                  y2="200"
                  stroke="#10B981"
                  strokeWidth="3"
                  strokeDasharray="200"
                  className="timeline-line"
                />
                {/* Timeline Events */}
                <g className="timeline-event">
                  <circle cx="50" cy="200" r="8" fill="#10B981" className="timeline-dot" />
                  <text x="50" y="230" fill="#fff" fontSize="12" textAnchor="middle">2016: Founded</text>
                </g>
                <g className="timeline-event">
                  <circle cx="150" cy="200" r="8" fill="#10B981" className="timeline-dot" />
                  <text x="150" y="230" fill="#fff" fontSize="12" textAnchor="middle">2020: Revival</text>
                </g>
                <g className="timeline-event">
                  <circle cx="250" cy="200" r="8" fill="#10B981" className="timeline-dot" />
                  <text x="250" y="230" fill="#fff" fontSize="12" textAnchor="middle">2025: First Project</text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
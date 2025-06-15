'use client';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { FaSearch, FaPalette, FaRocket, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';

export default function OurApproachSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Enhanced animations for approach section
    const cycle = document.querySelector('.cycle');
    const segments = document.querySelectorAll('.segment');
    const segmentIcons = document.querySelectorAll('.segment-icon');
    const segmentLabels = document.querySelectorAll('.segment-label');
    const particles = document.querySelectorAll('.particle');
    const approachCards = document.querySelectorAll('.approach-card');

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

    // Enhanced approach cards animations
    if (approachCards.length > 0) {
      approachCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.2 + index * 0.15, ease: 'power3.out' }
        );
        
        // Hover effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            boxShadow: '0 20px 40px rgba(0, 160, 227, 0.3)',
            duration: 0.3,
            ease: 'power2.out',
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });
    }
  }, []);

  // Enhanced structured data for the Our Approach section
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Intention Infoservice',
    'url': 'https://intentioninfoservice.com/about-us',
    'description': 'Leading software development company with a proven approach to delivering innovative web design, mobile app development, and digital marketing solutions worldwide.',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Software Development Process',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Discovery & Planning Phase',
            'description': 'Comprehensive analysis and strategic planning for custom software development projects, including requirements gathering and technical architecture design.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Design & Development Phase',
            'description': 'Professional UI/UX design and full-stack development services for web applications, mobile apps, and enterprise solutions.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Launch & Support Phase',
            'description': 'Seamless deployment, quality assurance testing, and ongoing maintenance support for all software development projects.',
          },
        },
      ],
    },
    'knowsAbout': [
      'Web Development',
      'Mobile App Development',
      'UI/UX Design',
      'Digital Marketing',
      'Software Architecture',
      'Project Management',
      'Quality Assurance',
      'DevOps',
    ],
  };

  const approachSteps = [
    {
      icon: <FaSearch className="text-3xl" />,
      title: 'Discovery & Research',
      description: 'We begin every software development project with comprehensive research and analysis to understand your business goals, target audience, and technical requirements.',
      features: ['Market Analysis', 'Competitor Research', 'Technical Feasibility', 'User Journey Mapping'],
    },
    {
      icon: <FaPalette className="text-3xl" />,
      title: 'Design & Architecture',
      description: 'Our expert UI/UX designers and software architects create intuitive designs and robust technical foundations for your web and mobile applications.',
      features: ['UI/UX Design', 'System Architecture', 'Database Design', 'API Planning'],
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: 'Development & Testing',
      description: 'Using cutting-edge technologies and agile methodologies, we develop high-quality software solutions with rigorous testing and quality assurance.',
      features: ['Agile Development', 'Code Reviews', 'Automated Testing', 'Performance Optimization'],
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: 'Launch & Support',
      description: 'We ensure smooth deployment and provide comprehensive ongoing support, maintenance, and optimization for your digital solutions.',
      features: ['Deployment Strategy', '24/7 Monitoring', 'Regular Updates', 'Performance Analytics'],
    },
  ];

  return (
    <section className="bg-dark-900 py-16 md:py-12 relative overflow-hidden" itemScope itemType="https://schema.org/Organization">
      {/* Enhanced structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-brand-indigo rounded-full blur-3xl"></div>
      </div>

      <div className="w-full px-[8%] md:px-[10%] lg:px-[10%] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue/20 to-brand-indigo/20 backdrop-blur-sm px-4 py-2 rounded-full border border-brand-blue/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaLightbulb className="text-brand-blue text-base" />
            <span className="text-base font-medium text-white">Our Proven Methodology</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            itemProp="name"
          >
            Our Approach: Building Your{' '}
            <span className="text-transparent bg-gradient-to-r from-brand-blue to-brand-indigo bg-clip-text">
              Digital Future
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            itemProp="description"
          >
            At Intention Infoservice, we follow a streamlined, client-focused process to deliver 
            innovative web development solutions, custom mobile applications, and comprehensive 
            digital marketing services that drive measurable business results.
          </motion.p>

          <motion.p
            className="text-lg text-gray-500 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            From discovery to deployment, we're committed to quality, innovation, and client satisfaction, 
            helping your business thrive in the digital landscape of 2025 and beyond.
          </motion.p>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-between gap-16">
          {/* Left: Enhanced Approach Steps */}
          <div className="xl:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {approachSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="approach-card bg-gradient-to-br from-dark-950 to-dark-900 rounded-2xl p-8 border border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-indigo rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{step.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-brand-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-brand-blue font-bold text-sm">{index + 1}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Trust Elements */}
            {/* <motion.div
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center p-6 bg-dark-950/50 rounded-xl border border-brand-blue/10">
                <FaUsers className="text-3xl text-brand-blue mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-sm text-gray-400">Successful Projects</div>
              </div>
              
              <div className="text-center p-6 bg-dark-950/50 rounded-xl border border-brand-blue/10">
                <FaRocket className="text-3xl text-brand-blue mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              
              <div className="text-center p-6 bg-dark-950/50 rounded-xl border border-brand-blue/10">
                <FaLightbulb className="text-3xl text-brand-blue mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </motion.div> */}
          </div>

          {/* Right: Enhanced Cycle of Innovation Illustration */}
          <div className="xl:w-2/5 flex justify-center">
            <svg
              width="500"
              height="400"
              viewBox="0 0 500 400"
              className="w-full max-w-[500px]"
              role="img"
              aria-label="Comprehensive illustration of Intention Infoservice's software development approach as a cycle of innovation"
            >
              {/* Enhanced Background */}
              <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E293B" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0F172A" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="serviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00a0e3" />
                  <stop offset="100%" stopColor="#393185" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <rect x="0" y="0" width="500" height="400" fill="url(#bgGradient)" rx="25" stroke="#00a0e3" strokeWidth="2" />
              
              {/* Central Cycle of Innovation */}
              <g transform="translate(250, 200)">
                {/* Rotating Cycle Base */}
                <g className="cycle">
                  <circle cx="0" cy="0" r="120" fill="none" stroke="#00a0e3" strokeWidth="4" opacity="0.3" filter="url(#glow)" />
                  <circle cx="0" cy="0" r="90" fill="none" stroke="#00a0e3" strokeWidth="3" opacity="0.5" />
                  <circle cx="0" cy="0" r="60" fill="none" stroke="#393185" strokeWidth="2" opacity="0.4" />
                  
                  {/* Segment 1: Discovery & Planning */}
                  <g className="segment">
                    <path
                      d="M0,0 L0,-90 A90,90 0 0,1 77.94,-45 Z"
                      fill="#0F172A"
                      stroke="#00a0e3"
                      strokeWidth="3"
                      opacity="0.8"
                    />
                    <text
                      x="0"
                      y="-140"
                      fill="#fff"
                      fontSize="16"
                      fontWeight="bold"
                      textAnchor="middle"
                      className="segment-label"
                      style={{ textShadow: '0 0 5px rgba(0, 160, 227, 0.8)' }}
                    >
                      Discovery & Planning
                    </text>
                  </g>
                  
                  {/* Segment 2: Design & Development */}
                  <g transform="rotate(90)" className="segment">
                    <path
                      d="M0,0 L0,-90 A90,90 0 0,1 77.94,-45 Z"
                      fill="#0F172A"
                      stroke="#00a0e3"
                      strokeWidth="3"
                      opacity="0.8"
                    />
                    <text
                      x="0"
                      y="-140"
                      fill="#fff"
                      fontSize="16"
                      fontWeight="bold"
                      textAnchor="middle"
                      className="segment-label"
                      style={{ textShadow: '0 0 5px rgba(0, 160, 227, 0.8)' }}
                    >
                      Design & Development
                    </text>
                  </g>
                  
                  {/* Segment 3: Testing & QA */}
                  <g transform="rotate(180)" className="segment">
                    <path
                      d="M0,0 L0,-90 A90,90 0 0,1 77.94,-45 Z"
                      fill="#0F172A"
                      stroke="#00a0e3"
                      strokeWidth="3"
                      opacity="0.8"
                    />
                    <text
                      x="0"
                      y="-140"
                      fill="#fff"
                      fontSize="16"
                      fontWeight="bold"
                      textAnchor="middle"
                      className="segment-label"
                      style={{ textShadow: '0 0 5px rgba(0, 160, 227, 0.8)' }}
                    >
                      Testing & QA
                    </text>
                  </g>
                  
                  {/* Segment 4: Launch & Support */}
                  <g transform="rotate(270)" className="segment">
                    <path
                      d="M0,0 L0,-90 A90,90 0 0,1 77.94,-45 Z"
                      fill="#0F172A"
                      stroke="#00a0e3"
                      strokeWidth="3"
                      opacity="0.8"
                    />
                    <text
                      x="0"
                      y="-140"
                      fill="#fff"
                      fontSize="16"
                      fontWeight="bold"
                      textAnchor="middle"
                      className="segment-label"
                      style={{ textShadow: '0 0 5px rgba(0, 160, 227, 0.8)' }}
                    >
                      Launch & Support
                    </text>
                  </g>
                </g>
                
                {/* Fixed Icons (Not Rotating) */}
                {/* Icon 1: Discovery (Search) */}
                <g className="segment-icon">
                  <g transform="translate(0, -120)">
                    <circle cx="0" cy="0" r="15" fill="url(#serviceGradient)" filter="url(#glow)" />
                    <path d="M-6,-6 L6,6 M-6,6 L6,-6" stroke="#fff" strokeWidth="3" />
                  </g>
                </g>
                
                {/* Icon 2: Design (Palette) */}
                <g transform="rotate(90)" className="segment-icon">
                  <g transform="translate(0, -120)">
                    <circle cx="0" cy="0" r="15" fill="url(#serviceGradient)" filter="url(#glow)" />
                    <path d="M-8,-4 Q0,-12 8,-4 Q0,4 -8,-4" stroke="#fff" strokeWidth="2" fill="none" />
                  </g>
                </g>
                
                {/* Icon 3: Testing (Check) */}
                <g transform="rotate(180)" className="segment-icon">
                  <g transform="translate(0, -120)">
                    <circle cx="0" cy="0" r="15" fill="url(#serviceGradient)" filter="url(#glow)" />
                    <path d="M-6,0 L-2,4 L6,-4" stroke="#fff" strokeWidth="3" fill="none" />
                  </g>
                </g>
                
                {/* Icon 4: Launch (Rocket) */}
                <g transform="rotate(270)" className="segment-icon">
                  <g transform="translate(0, -120)">
                    <circle cx="0" cy="0" r="15" fill="url(#serviceGradient)" filter="url(#glow)" />
                    <path d="M0,-8 L-4,8 L0,4 L4,8 Z" stroke="#fff" strokeWidth="2" fill="#fff" />
                  </g>
                </g>
                
                {/* Central Hub */}
                <circle cx="0" cy="0" r="25" fill="url(#serviceGradient)" filter="url(#glow)" />
                <text
                  x="0"
                  y="6"
                  fill="#fff"
                  fontSize="14"
                  fontWeight="bold"
                  textAnchor="middle"
                  style={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.8)' }}
                >
                  IIS
                </text>
              </g>
              
              {/* Orbiting Particles (Enhanced) */}
              <g transform="translate(250, 200)">
                <g transform="rotate(0)" className="particle">
                  <circle cx="0" cy="150" r="6" fill="#00a0e3" opacity="0.8" filter="url(#glow)" />
                </g>
                <g transform="rotate(72)" className="particle">
                  <circle cx="0" cy="150" r="5" fill="#393185" opacity="0.8" filter="url(#glow)" />
                </g>
                <g transform="rotate(144)" className="particle">
                  <circle cx="0" cy="150" r="7" fill="#00a0e3" opacity="0.8" filter="url(#glow)" />
                </g>
                <g transform="rotate(216)" className="particle">
                  <circle cx="0" cy="150" r="4" fill="#393185" opacity="0.8" filter="url(#glow)" />
                </g>
                <g transform="rotate(288)" className="particle">
                  <circle cx="0" cy="150" r="6" fill="#00a0e3" opacity="0.8" filter="url(#glow)" />
                </g>
              </g>
              
              {/* Corner Decorative Elements */}
              <g opacity="0.6">
                <circle cx="50" cy="50" r="8" fill="#00a0e3" opacity="0.5" />
                <circle cx="450" cy="50" r="6" fill="#393185" opacity="0.5" />
                <circle cx="50" cy="350" r="7" fill="#393185" opacity="0.5" />
                <circle cx="450" cy="350" r="9" fill="#00a0e3" opacity="0.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}


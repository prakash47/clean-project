'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { 
  FaSearch, FaPalette, FaCode, FaRocket, FaCheckCircle, FaUsers, FaClock, FaShieldAlt,
  FaLightbulb, FaDesktop, FaMobileAlt, FaDatabase, FaTools, FaChartLine
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function OurProcessSection() {
  const [hoveredStates, setHoveredStates] = useState<boolean[]>(new Array(8).fill(false));

  const steps = [
    {
      title: 'Discovery & Research',
      description: 'We conduct comprehensive research to understand your business goals, target audience, competitors, and market positioning to create a strategic foundation for your web project.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Discovery and Research">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" />
          <circle cx="30" cy="30" r="12" fill="#0F172A" />
          <path d="M32,32 L40,40" stroke="#00a0e3" strokeWidth="2" />
          <circle cx="42" cy="42" r="3" fill="none" stroke="#00a0e3" strokeWidth="2" />
        </svg>
      ),
      deliverables: ['Market Analysis', 'Competitor Research', 'User Personas', 'Project Roadmap'],
      timeline: '1-2 weeks',
      keyActivities: ['Stakeholder interviews', 'Technical requirements gathering', 'SEO audit', 'Content strategy planning'],
    },
    {
      title: 'Strategic Planning & Architecture',
      description: 'We create a detailed project blueprint including site architecture, user journey mapping, technology stack selection, and comprehensive project timeline to ensure success.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Strategic Planning and Architecture">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" />
          <path d="M20,20 L40,40 M20,40 L40,20" stroke="#00a0e3" strokeWidth="2" />
          <rect x="25" y="25" width="10" height="10" fill="none" stroke="#00a0e3" strokeWidth="1" />
        </svg>
      ),
      deliverables: ['Site Architecture', 'Wireframes', 'Technology Stack', 'Project Timeline'],
      timeline: '1-2 weeks',
      keyActivities: ['Information architecture', 'User flow mapping', 'Technical specifications', 'Resource planning'],
    },
    {
      title: 'UI/UX Design & Prototyping',
      description: 'Our design team creates stunning, mobile-responsive mockups and interactive prototypes that prioritize user experience, brand consistency, and conversion optimization.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing UI/UX Design and Prototyping">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" />
          <path d="M20,40 Q30,20 40,40" fill="none" stroke="#00a0e3" strokeWidth="2" />
          <circle cx="20" cy="40" r="2" fill="#00a0e3" />
          <circle cx="40" cy="40" r="2" fill="#00a0e3" />
        </svg>
      ),
      deliverables: ['Visual Designs', 'Interactive Prototypes', 'Style Guide', 'Asset Library'],
      timeline: '2-3 weeks',
      keyActivities: ['Visual design creation', 'Prototype development', 'User testing', 'Design system creation'],
    },
    {
      title: 'Content Strategy & Creation',
      description: 'We develop SEO-optimized content strategy and create compelling copy that resonates with your audience while improving search engine rankings and user engagement.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Content Strategy and Creation">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" />
          <rect x="20" y="20" width="20" height="20" fill="none" stroke="#00a0e3" strokeWidth="2" strokeDasharray="3,3" />
          <path d="M25,25 L35,25 M25,30 L35,30 M25,35 L30,35" stroke="#00a0e3" strokeWidth="1" />
        </svg>
      ),
      deliverables: ['Content Strategy', 'SEO Copy', 'Image Assets', 'Content Calendar'],
      timeline: '1-2 weeks',
      keyActivities: ['Keyword research', 'Content writing', 'Image optimization', 'SEO implementation'],
    },
    {
      title: 'Frontend & Backend Development',
      description: 'Our developers bring designs to life with clean, semantic code, implementing responsive layouts, interactive features, and robust backend functionality.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Frontend and Backend Development">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" />
          <path d="M20,30 L25,25 L30,30 L35,25 L40,30" fill="none" stroke="#00a0e3" strokeWidth="2" />
          <path d="M22,35 L28,35 M32,35 L38,35" stroke="#00a0e3" strokeWidth="1" />
        </svg>
      ),
      deliverables: ['Responsive Website', 'CMS Integration', 'Database Setup', 'API Development'],
      timeline: '3-6 weeks',
      keyActivities: ['Frontend coding', 'Backend development', 'Database design', 'Third-party integrations'],
    },
    {
      title: 'Quality Assurance & Testing',
      description: 'Comprehensive testing across devices, browsers, and performance metrics to ensure your website meets the highest standards of quality and user experience.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Quality Assurance and Testing">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" />
          <path d="M20,30 L25,35 L40,20" fill="none" stroke="#00a0e3" strokeWidth="2" />
          <circle cx="25" cy="35" r="2" fill="#00a0e3" />
        </svg>
      ),
      deliverables: ['Test Reports', 'Bug Fixes', 'Performance Optimization', 'Security Audit'],
      timeline: '1-2 weeks',
      keyActivities: ['Cross-browser testing', 'Mobile responsiveness', 'Performance testing', 'Security testing'],
    },
    {
      title: 'SEO & Performance Optimization',
      description: 'We optimize your website for search engines and peak performance, implementing technical SEO, speed optimization, and Core Web Vitals improvements.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing SEO and Performance Optimization">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" />
          <path d="M30,30 L30,20 A10,10 0 0,1 40,30" fill="none" stroke="#00a0e3" strokeWidth="2" />
          <path d="M30,30 L30,40 A10,10 0 0,0 40,30" fill="none" stroke="#00a0e3" strokeWidth="1" />
        </svg>
      ),
      deliverables: ['SEO Implementation', 'Performance Report', 'Analytics Setup', 'Speed Optimization'],
      timeline: '1 week',
      keyActivities: ['Technical SEO', 'Speed optimization', 'Analytics configuration', 'Search console setup'],
    },
    {
      title: 'Launch & Ongoing Support',
      description: 'We handle the complete launch process and provide ongoing support, maintenance, and optimization to keep your website secure, updated, and performing at its best.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Icon representing Launch and Ongoing Support">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#00a0e3" strokeWidth="2" />
          <path d="M30,15 L35,25 L30,35 L25,25 Z" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
          <path d="M30,35 L30,45" stroke="#00a0e3" strokeWidth="2" />
        </svg>
      ),
      deliverables: ['Live Website', 'Training Materials', 'Support Plan', 'Maintenance Schedule'],
      timeline: 'Ongoing',
      keyActivities: ['Domain setup', 'SSL installation', 'Team training', 'Ongoing maintenance'],
    },
  ];

  const handleMouseEnter = (index: number) => {
    const card = document.querySelectorAll('.step-card')[index];
    const icon = document.querySelectorAll('.step-icon')[index];

    if (card && icon) {
      gsap.killTweensOf(card);
      gsap.killTweensOf(icon);

      gsap.to(card, {
        borderColor: '#00a0e3',
        boxShadow: '0 0 20px rgba(0, 160, 227, 0.5)',
        duration: 0.3,
        ease: 'power2.out',
      });

      gsap.to(icon, {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }

    setHoveredStates((prev) => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = document.querySelectorAll('.step-card')[index];
    const icon = document.querySelectorAll('.step-icon')[index];

    if (card && icon) {
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
        duration: 0.3,
        ease: 'power2.out',
      });
    }

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
    name: 'Professional Web Design & Development Process 2025',
    description: 'Our proven 8-step process for delivering high-quality, SEO-optimized websites that drive business growth and user engagement.',
    totalTime: 'PT8W',
    supply: [
      'Project requirements',
      'Brand assets',
      'Content materials',
      'Domain and hosting access',
    ],
    tool: [
      'Figma for design',
      'React/Next.js for development',
      'WordPress/Custom CMS',
      'Google Analytics',
      'SEO tools',
    ],
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
      supply: step.deliverables,
      tool: step.keyActivities,
    })),
  };

  return (
    <section id="our-process" className="bg-gradient-to-b from-dark-900 to-dark-950 py-16 md:py-24 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Background Elements */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
      />
      
      {/* Animated Background Gradients */}
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
              0% { background-position: 0% 0%; }
              100% { background-position: 200% 200%; }
            }
          `}
        </style>
      </div>

      {/* Light Flares */}
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

      <div className="container mx-auto px-4 md:px-[10%] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Proven Web Design & Development Process
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-brand-blue font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            8 Strategic Steps to Digital Success in 2025
          </motion.p>
          <motion.p
            className="text-base md:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our comprehensive process ensures your website is strategically planned, beautifully designed, and optimized for success. From initial discovery to ongoing support, we guide you through every step of creating a powerful digital presence that drives results.
          </motion.p>
        </div>

        {/* Process Overview Stats */}
        {/* <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center text-brand-blue mb-2">
              <FaClock className="w-5 h-5" />
              <span className="text-2xl font-bold text-white ml-2">8-12</span>
            </div>
            <span className="text-sm text-gray-400">Weeks Timeline</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center text-green-400 mb-2">
              <FaCheckCircle className="w-5 h-5" />
              <span className="text-2xl font-bold text-white ml-2">98%</span>
            </div>
            <span className="text-sm text-gray-400">Success Rate</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center text-purple-400 mb-2">
              <FaUsers className="w-5 h-5" />
              <span className="text-2xl font-bold text-white ml-2">150+</span>
            </div>
            <span className="text-sm text-gray-400">Projects Delivered</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center text-yellow-400 mb-2">
              <FaShieldAlt className="w-5 h-5" />
              <span className="text-2xl font-bold text-white ml-2">24/7</span>
            </div>
            <span className="text-sm text-gray-400">Support Available</span>
          </div>
        </motion.div> */}

        {/* Process Steps */}
        <div className="relative">
          {/* Process Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-brand-blue to-purple-500 opacity-30 h-full"></div>
          
          <div className="relative z-10 space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`step-card flex flex-col md:flex-row items-start gap-6 backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-[rgba(0,160,227,0.3)] transition-all duration-300 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onFocus={() => handleFocus(index)}
                onBlur={() => handleBlur(index)}
                tabIndex={0}
                aria-describedby={`step-description-${index}`}
              >
                {/* Step Number and Icon */}
                <div className={`flex flex-col items-center ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} flex-shrink-0`}>
                  <div className="step-icon w-16 h-16 flex items-center justify-center mb-4 relative">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  {/* <div className="text-center md:text-left">
                    <div className="text-brand-blue font-semibold text-sm mb-1">{step.timeline}</div>
                  </div> */}
                </div>

                {/* Step Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p id={`step-description-${index}`} className="text-gray-400 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div className="mb-4">
                    <h4 className="text-brand-blue font-semibold mb-2">Key Deliverables:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center text-sm text-gray-300">
                          <FaCheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Activities */}
                  <div>
                    <h4 className="text-brand-blue font-semibold mb-2">Key Activities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.keyActivities.map((activity, activityIndex) => (
                        <span
                          key={activityIndex}
                          className="px-3 py-1 bg-brand-blue/20 text-white rounded-full text-xs font-medium"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 p-8 backdrop-blur-sm bg-white/5 rounded-xl border border-[rgba(0,160,227,0.3)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Web Design Project?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom timeline that fits your business goals. 
            Our team is ready to guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,160,227,0.5)] flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket className="mr-2" />
              Start Your Project Today
            </motion.button>
            {/* <motion.button
              className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChartLine className="mr-2" />
              View Case Studies
            </motion.button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaPencilRuler, FaCode, FaFlask, FaRocket, FaHeadset, FaCheckCircle, FaClock } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MobileAppProcessSection() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const processSteps = document.querySelectorAll('.process-step');
    const processLine = document.querySelector('.process-line');

    if (processSteps.length > 0) {
      gsap.fromTo(
        processSteps,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.process-section',
            start: 'top 80%',
          },
        }
      );

      processSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', () => {
          gsap.to(step, {
            scale: 1.05,
            y: -10,
            boxShadow: '0 15px 30px rgba(0, 160, 227, 0.3)',
            duration: 0.3,
            ease: 'power2.out',
          });
          const icon = step.querySelector('.process-icon');
          if (icon) {
            gsap.to(icon, {
              scale: 1.2,
              filter: 'drop-shadow(0 0 10px rgba(0, 160, 227, 0.8))',
              duration: 0.3,
              ease: 'power2.out',
            });
          }
        });
        step.addEventListener('mouseleave', () => {
          gsap.to(step, {
            scale: 1,
            y: 0,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            duration: 0.3,
            ease: 'power2.out',
          });
          const icon = step.querySelector('.process-icon');
          if (icon) {
            gsap.to(icon, {
              scale: 1,
              filter: 'drop-shadow(0 0 0 rgba(0, 0, 0, 0))',
              duration: 0.3,
              ease: 'power2.out',
            });
          }
        });
      });
    }

    if (processLine) {
      gsap.fromTo(
        processLine,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.process-section',
            start: 'top 70%',
          },
        }
      );
    }

    return () => {
      processSteps.forEach((step) => {
        step.removeEventListener('mouseenter', () => {});
        step.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We begin with comprehensive research and analysis to understand your business goals, target audience, and market requirements for optimal mobile app strategy.',
      icon: <FaLightbulb className="process-icon text-4xl text-brand-blue" />,
      duration: '1-2 weeks',
      deliverables: ['Market Research Report', 'User Persona Analysis', 'Technical Requirements', 'Project Roadmap'],
      keyActivities: ['Stakeholder interviews', 'Competitive analysis', 'Technical feasibility study', 'Budget planning'],
    },
    {
      number: '02',
      title: 'UI/UX Design',
      description: 'Our design team creates intuitive and engaging user interfaces with wireframes, prototypes, and visual designs that ensure exceptional user experience.',
      icon: <FaPencilRuler className="process-icon text-4xl text-brand-blue" />,
      duration: '2-3 weeks',
      deliverables: ['Wireframes', 'Interactive Prototypes', 'UI Design System', 'Style Guide'],
      keyActivities: ['User journey mapping', 'Wireframe creation', 'Visual design', 'Prototype testing'],
    },
    {
      number: '03',
      title: 'Development',
      description: 'Expert developers build your mobile app using cutting-edge technologies, following best practices for performance, security, and scalability.',
      icon: <FaCode className="process-icon text-4xl text-brand-blue" />,
      duration: '6-12 weeks',
      deliverables: ['Native/Cross-platform App', 'Backend API', 'Database Design', 'Admin Panel'],
      keyActivities: ['Frontend development', 'Backend development', 'API integration', 'Database setup'],
    },
    {
      number: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing across multiple devices and platforms ensures your app performs flawlessly with comprehensive quality assurance protocols.',
      icon: <FaFlask className="process-icon text-4xl text-brand-blue" />,
      duration: '2-3 weeks',
      deliverables: ['Test Reports', 'Bug Fixes', 'Performance Optimization', 'Security Audit'],
      keyActivities: ['Functional testing', 'Performance testing', 'Security testing', 'Device compatibility'],
    },
    {
      number: '05',
      title: 'Deployment',
      description: 'We handle the complete app store submission process, ensuring compliance with guidelines and successful launch on iOS App Store and Google Play Store.',
      icon: <FaRocket className="process-icon text-4xl text-brand-blue" />,
      duration: '1-2 weeks',
      deliverables: ['App Store Submission', 'Launch Strategy', 'Marketing Assets', 'Analytics Setup'],
      keyActivities: ['App store optimization', 'Submission process', 'Launch coordination', 'Marketing support'],
    },
    {
      number: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and maintenance ensure your app stays current with latest OS versions, security patches, and feature enhancements.',
      icon: <FaHeadset className="process-icon text-4xl text-brand-blue" />,
      duration: 'Ongoing',
      deliverables: ['Regular Updates', 'Bug Fixes', 'Performance Monitoring', 'Feature Enhancements'],
      keyActivities: ['24/7 monitoring', 'Regular updates', 'User feedback analysis', 'Continuous improvement'],
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Mobile App Development Process',
    description: 'Comprehensive 6-step mobile app development process from discovery to deployment and ongoing support.',
    image: 'https://intentioninfoservice.com/images/mobile-app-development-process.webp',
    totalTime: 'PT12W',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '15000',
    },
    supply: [
      {
        '@type': 'HowToSupply',
        name: 'Mobile App Development Team',
      },
      {
        '@type': 'HowToSupply',
        name: 'Design and Development Tools',
      },
      {
        '@type': 'HowToSupply',
        name: 'Testing Devices and Platforms',
      },
    ],
    tool: [
      {
        '@type': 'HowToTool',
        name: 'React Native / Flutter',
      },
      {
        '@type': 'HowToTool',
        name: 'Swift / Kotlin',
      },
      {
        '@type': 'HowToTool',
        name: 'Figma / Adobe XD',
      },
    ],
    step: processSteps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
      image: `https://intentioninfoservice.com/images/process-step-${index + 1}.webp`,
      url: `https://intentioninfoservice.com/services/mobile-app-development#step-${index + 1}`,
    })),
  };

  return (
    <section className="process-section bg-dark-950 py-12 md:py-12 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 160, 227, 0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="w-full px-[5%] md:px-[10%] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.1)',
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Proven Mobile App Development Process
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-brand-blue font-semibold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From Concept to App Store Success in 6 Strategic Steps
          </motion.p>
          
          <motion.p
            className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our comprehensive mobile app development methodology ensures successful project delivery with transparent communication, regular updates, and measurable results. We've refined this process through 150+ successful mobile app launches.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-indigo process-line transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.number}
                className="process-step bg-dark-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/50 hover:border-brand-blue/50 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Step Icon */}
                <div className="mb-6 pt-4">
                  {step.icon}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Duration */}
                <div className="flex items-center mb-6 text-brand-blue">
                  <FaClock className="mr-2" />
                  <span className="font-semibold">{step.duration}</span>
                </div>

                {/* Key Activities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-brand-blue mb-3 uppercase tracking-wide">
                    Key Activities
                  </h4>
                  <ul className="space-y-2">
                    {step.keyActivities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-center text-sm text-gray-300">
                        <FaCheckCircle className="text-brand-blue mr-3 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="border-t border-gray-700 pt-6">
                  <h4 className="text-sm font-semibold text-brand-blue mb-3 uppercase tracking-wide">
                    Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <span
                        key={deliverableIndex}
                        className="px-3 py-1 bg-brand-blue/20 text-brand-blue rounded-full text-xs font-medium border border-brand-indigo/30"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-brand-blue/10 to-brand-indigo/10 rounded-2xl p-8 border border-brand-blue/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why Our Process Delivers Results
            </h3>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our structured approach ensures project success with clear milestones, regular communication, and measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue mb-2">98%</div>
              <div className="text-sm text-gray-400">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue mb-2">50+</div>
              <div className="text-sm text-gray-400">Apps Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue mb-2">4.9★</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue mb-2">24/7</div>
              <div className="text-sm text-gray-400">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


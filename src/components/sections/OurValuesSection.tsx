'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FaLightbulb, FaHandshake, FaTrophy, FaUsers, FaHeart, FaLock, FaRocket, FaStar } from 'react-icons/fa';

export default function OurValuesSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Enhanced hover animations for value cards
    const valueCards = gsap.utils.toArray('.value-card') as HTMLElement[];
    const valueIcons = gsap.utils.toArray('.value-icon') as HTMLElement[];
    const trustMetrics = gsap.utils.toArray('.trust-metric') as HTMLElement[];

    if (valueCards.length > 0) {
      valueCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: index * 0.2, ease: 'power3.out' }
        );
        
        // Enhanced hover effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            boxShadow: '0 25px 50px rgba(0, 160, 227, 0.4)',
            duration: 0.4,
            ease: 'power2.out',
          });
          
          // Icon animation on hover
          const icon = card.querySelector('.value-icon');
          if (icon) {
            gsap.to(icon, {
              scale: 1.2,
              rotation: 360,
              duration: 0.6,
              ease: 'back.out(1.7)',
            });
          }
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
            duration: 0.4,
            ease: 'power2.out',
          });
          
          // Reset icon animation
          const icon = card.querySelector('.value-icon');
          if (icon) {
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.4,
              ease: 'power2.out',
            });
          }
        });
      });
    }

    if (valueIcons.length > 0) {
      valueIcons.forEach((icon, index) => {
        // Continuous subtle pulsing animation
        gsap.to(icon, {
          scale: 1.1,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.3,
        });
      });
    }

    if (trustMetrics.length > 0) {
      trustMetrics.forEach((metric, index) => {
        gsap.fromTo(
          metric,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.6, delay: 1 + index * 0.1, ease: 'back.out(1.7)' }
        );
      });
    }
  }, []);

  const values = [
    {
      title: 'Innovation & Excellence',
      description: 'We drive innovation to deliver cutting-edge web development, mobile app solutions, and digital marketing strategies, adapting to the latest industry trends and technologies in 2025.',
      icon: <FaLightbulb className="text-4xl" />,
      color: 'from-blue-500 to-cyan-500',
      features: ['Latest Technologies', 'Creative Solutions', 'Industry Best Practices', 'Continuous Learning'],
    },
    {
      title: 'Client-Centric Collaboration',
      description: 'We believe in collaborating closely with our clients to achieve shared goals through transparent communication, regular updates, and effective project management throughout the development process.',
      icon: <FaHandshake className="text-4xl" />,
      color: 'from-purple-500 to-pink-500',
      features: ['Transparent Communication', 'Regular Updates', 'Agile Methodology', 'Client Feedback Integration'],
    },
    {
      title: 'Quality & Reliability',
      description: 'We are committed to delivering exceptional quality in every software development project, ensuring reliability, security, and optimal performance for all our web and mobile applications.',
      icon: <FaTrophy className="text-4xl" />,
      color: 'from-green-500 to-emerald-500',
      features: ['Rigorous Testing', 'Code Quality Standards', 'Security Best Practices', 'Performance Optimization'],
    },
    {
      title: 'Trust & Integrity',
      description: 'Building long-term relationships based on trust, honesty, and integrity is at the core of our business philosophy, ensuring client satisfaction and project success.',
      icon: <FaLock className="text-4xl" />,
      color: 'from-orange-500 to-red-500',
      features: ['Honest Communication', 'Ethical Practices', 'Data Protection', 'Confidentiality'],
    },
    {
      title: 'Passion & Dedication',
      description: 'Our team is passionate about creating exceptional digital experiences and dedicated to helping businesses succeed through innovative software solutions and strategic digital marketing.',
      icon: <FaHeart className="text-4xl" />,
      color: 'from-pink-500 to-rose-500',
      features: ['Passionate Team', 'Dedicated Support', 'Creative Problem Solving', 'Results-Driven Approach'],
    },
    {
      title: 'Growth & Success',
      description: 'We measure our success by the growth and achievements of our clients, continuously striving to exceed expectations and deliver measurable business results.',
      icon: <FaRocket className="text-4xl" />,
      color: 'from-indigo-500 to-purple-500',
      features: ['Business Growth Focus', 'ROI Optimization', 'Scalable Solutions', 'Long-term Partnership'],
    },
  ];

  // Enhanced structured data for values
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Intention Infoservice',
    'url': 'https://intentioninfoservice.com/about-us',
    'description': 'Leading software development company committed to innovation, quality, and client success through professional web development, mobile app development, and digital marketing services.',
    'values': values.map((value) => ({
      '@type': 'Thing',
      'name': value.title,
      'description': value.description,
    })),
    'organizationPrinciple': [
      'Innovation and Excellence in Software Development',
      'Client-Centric Collaboration and Communication',
      'Quality and Reliability in All Deliverables',
      'Trust and Integrity in Business Relationships',
      'Passion and Dedication to Client Success',
      'Growth and Success Through Partnership',
    ],
    'award': [
      {
        '@type': 'Award',
        'name': 'Top Software Development Company 2024',
        'description': 'Recognized for excellence in web development and mobile app development services',
      },
      {
        '@type': 'Award',
        'name': 'Client Satisfaction Excellence Award',
        'description': 'Awarded for maintaining 98% client satisfaction rate',
      },
    ],
  };

  const trustMetrics = [
    { icon: <FaUsers />, value: '150+', label: 'Happy Clients', color: 'text-blue-400' },
    { icon: <FaStar />, value: '4.9/5', label: 'Client Rating', color: 'text-yellow-400' },
    { icon: <FaTrophy />, value: '98%', label: 'Success Rate', color: 'text-green-400' },
    { icon: <FaRocket />, value: '5+', label: 'Years Experience', color: 'text-purple-400' },
  ];

  return (
    <section className="bg-dark-950 py-16 md:py-12 relative overflow-hidden" itemScope itemType="https://schema.org/Organization">
      {/* Enhanced structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-brand-indigo rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Subtle Grain Texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
      />

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
            <FaHeart className="text-brand-blue text-base" />
            <span className="text-base font-medium text-white">Our Core Principles</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            itemProp="name"
          >
            Our Core{' '}
            <span className="text-transparent bg-gradient-to-r from-brand-blue to-brand-indigo bg-clip-text">
              Values
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The fundamental principles that guide our software development company and drive our commitment 
            to delivering exceptional web development, mobile app development, and digital marketing solutions.
          </motion.p>
        </div>

        {/* Trust Metrics */}
        {/* <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {trustMetrics.map((metric, index) => (
            <div
              key={index}
              className="trust-metric text-center p-6 bg-gradient-to-br from-dark-900 to-dark-950 rounded-xl border border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300"
            >
              <div className={`text-3xl ${metric.color} mx-auto mb-3`}>
                {metric.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          ))}
        </motion.div> */}

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-card bg-gradient-to-br from-dark-900 to-dark-950 rounded-2xl p-8 border border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 shadow-lg relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`value-icon w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {value.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{value.title}</h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">{value.description}</p>

                {/* Features */}
                <div className="space-y-3">
                  {value.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${value.color} rounded-full`}></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <div className={`w-6 h-6 bg-gradient-to-r ${value.color} rounded-full opacity-60`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-dark-900 to-dark-950 rounded-2xl p-8 border border-brand-blue/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience Our Values in Action?
            </h3>
            <p className="text-xl text-gray-400 mb-6 max-w-3xl mx-auto">
              Let's discuss how our commitment to innovation, quality, and client success can help 
              transform your business through exceptional software development solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact-us"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-blue to-brand-indigo text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket className="group-hover:translate-x-1 transition-transform duration-300" />
                Start Your Project
              </motion.a>
              {/* <motion.a
                href="/portfolio"
                className="inline-flex items-center gap-3 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTrophy />
                View Our Work
              </motion.a> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


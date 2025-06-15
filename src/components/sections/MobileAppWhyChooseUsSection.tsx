'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaRocket, FaShieldAlt, FaClock, FaHeadset, FaStar, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MobileAppWhyChooseUsSection() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reasonCards = document.querySelectorAll('.reason-card');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const statsCounters = document.querySelectorAll('.stat-counter');

    if (reasonCards.length > 0) {
      gsap.fromTo(
        reasonCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.why-choose-us-section',
            start: 'top 80%',
          },
        }
      );

      reasonCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            boxShadow: '0 15px 30px rgba(0, 160, 227, 0.3)',
            duration: 0.3,
            ease: 'power2.out',
          });
          const icon = card.querySelector('.reason-icon');
          if (icon) {
            gsap.to(icon, {
              scale: 1.2,
              filter: 'drop-shadow(0 0 10px rgba(0, 160, 227, 0.8))',
              duration: 0.3,
              ease: 'power2.out',
            });
          }
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            duration: 0.3,
            ease: 'power2.out',
          });
          const icon = card.querySelector('.reason-icon');
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

    if (testimonialCards.length > 0) {
      gsap.fromTo(
        testimonialCards,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 80%',
          },
        }
      );
    }

    if (statsCounters.length > 0) {
      statsCounters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        gsap.fromTo(
          counter,
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 90%',
            },
          }
        );
      });
    }

    return () => {
      reasonCards.forEach((card) => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const reasons = [
    {
      title: 'Proven Track Record',
      description: 'Over 50 successful mobile apps launched with 98% client satisfaction rate and measurable business growth.',
      icon: <FaAward className="reason-icon text-4xl text-brand-blue" />,
      metric: '50+ Apps Delivered',
    },
    {
      title: 'Expert Development Team',
      description: 'Certified iOS and Android developers with 10+ years experience in cutting-edge mobile technologies.',
      icon: <FaUsers className="reason-icon text-4xl text-brand-blue" />,
      metric: '10+ Years Experience',
    },
    {
      title: 'Faster Time to Market',
      description: 'Agile development methodology ensures 40% faster delivery without compromising quality or functionality.',
      icon: <FaRocket className="reason-icon text-4xl text-brand-blue" />,
      metric: '40% Faster Delivery',
    },
    {
      title: 'Enterprise-Grade Security',
      description: 'Advanced security protocols, data encryption, and compliance with industry standards for maximum protection.',
      icon: <FaShieldAlt className="reason-icon text-4xl text-brand-blue" />,
      metric: '100% Secure Apps',
    },
    {
      title: 'On-Time Delivery',
      description: 'Transparent project management with regular updates and milestone-based delivery ensures timely completion.',
      icon: <FaClock className="reason-icon text-4xl text-brand-blue" />,
      metric: '98% On-Time Rate',
    },
    {
      title: '24/7 Support & Maintenance',
      description: 'Comprehensive post-launch support with regular updates, bug fixes, and feature enhancements.',
      icon: <FaHeadset className="reason-icon text-4xl text-brand-blue" />,
      metric: '24/7 Availability',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      rating: 5,
      text: 'Intention Infoservice transformed our business idea into a stunning mobile app that increased our user engagement by 60%. Their expertise in iOS and Android development is unmatched.',
      result: '60% increase in user engagement',
      avatar: '/images/testimonials/sarah-johnson.webp',
    },
    {
      name: 'Michael Chen',
      company: 'RetailPro Solutions',
      role: 'CTO',
      rating: 5,
      text: 'The cross-platform app they developed saved us 40% in development costs while delivering native performance. Excellent communication and project management throughout.',
      result: '40% cost savings achieved',
      avatar: '/images/testimonials/michael-chen.webp',
    },
    {
      name: 'Emily Rodriguez',
      company: 'HealthTech Innovations',
      role: 'Product Manager',
      rating: 5,
      text: 'Their AI-powered mobile app features revolutionized our patient care system. The team\'s technical expertise and attention to detail exceeded our expectations.',
      result: '50% improvement in patient satisfaction',
      avatar: '/images/testimonials/emily-rodriguez.webp',
    },
  ];

  const achievements = [
    { number: 50, label: 'Apps Developed', suffix: '+' },
    { number: 98, label: 'Success Rate', suffix: '%' },
    { number: 4.9, label: 'Client Rating', suffix: '★' },
    { number: 10, label: 'Years Experience', suffix: '+' },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Intention Infoservice',
    url: 'https://intentioninfoservice.com',
    logo: 'https://intentioninfoservice.com/images/logo.webp',
    description: 'Leading mobile app development company with 50+ successful apps, 98% client satisfaction, and 5+ years of expertise in iOS, Android, and cross-platform development.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
    review: testimonials.map(testimonial => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: testimonial.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating,
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: testimonial.text,
      datePublished: '2025-01-01',
    })),
    award: [
      'Top Mobile App Development Company 2024',
      'Best Cross-Platform Development Services',
      'Excellence in iOS App Development',
      'Outstanding Android App Development',
    ],
  };

  return (
    <section className="why-choose-us-section bg-dark-900 py-12 md:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="w-full px-[5%] md:px-[10%]">
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
            Why Choose Intention Infoservice for Mobile App Development?
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-brand-blue font-semibold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Trusted by 50+ Businesses Worldwide for Mobile App Excellence
          </motion.p>
          
          <motion.p
            className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We combine technical expertise, proven methodologies, and innovative solutions to deliver mobile apps that drive business growth. Our track record speaks for itself with measurable results and satisfied clients.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              className="reason-card bg-dark-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/50 hover:border-brand-blue/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Reason Icon */}
              <div className="mb-6">
                {reason.icon}
              </div>

              {/* Reason Title */}
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                {reason.title}
              </h3>

              {/* Reason Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {reason.description}
              </p>

              {/* Metric */}
              <div className="border-t border-gray-700 pt-6">
                <span className="text-brand-blue font-bold text-lg">
                  {reason.metric}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        

     
        
      </div>
    </section>
  );
}


'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaMobile, FaApple, FaAndroid, FaReact, FaRobot, FaWifi } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { KeyboardEvent } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function MobileAppWhatWeOfferSection() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cards = document.querySelectorAll('.service-card');
    const icons = document.querySelectorAll('.service-icon');

    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.what-we-offer-section',
            start: 'top 80%',
          },
        }
      );

      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            boxShadow: '0 10px 20px rgba(0, 160, 227, 0.3)',
            duration: 0.3,
            ease: 'power2.out',
          });
          const icon = card.querySelector('.service-icon');
          if (icon) {
            gsap.to(icon, {
              scale: 1.2,
              filter: 'drop-shadow(0 0 8px rgba(0, 160, 227, 0.7))',
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
          const icon = card.querySelector('.service-icon');
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

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const services = [
    {
      title: 'Custom Mobile App Development',
      description: 'Tailored mobile applications designed specifically for your business needs, ensuring optimal user experience and functionality that drives engagement and conversions.',
      icon: <FaMobile className="service-icon text-4xl text-brand-blue" />,
      features: ['User-Centric Design', 'Scalable Architecture', 'Performance Optimization'],
      benefit: 'Boost user engagement by 40%',
      pricing: 'Starting from $8,000',
    },
    {
      title: 'iOS App Development',
      description: 'Native iOS applications built with Swift and SwiftUI, optimized for iPhone and iPad devices with seamless App Store integration and Apple ecosystem compatibility.',
      icon: <FaApple className="service-icon text-4xl text-brand-blue" />,
      features: ['Swift & SwiftUI', 'App Store Optimization', 'iOS 17+ Support'],
      benefit: 'Reach 1.3B+ iOS users worldwide',
      pricing: 'Starting from $10,000',
    },
    {
      title: 'Android App Development',
      description: 'Robust Android applications developed with Kotlin and Jetpack Compose, ensuring maximum compatibility across diverse Android devices and Google Play Store success.',
      icon: <FaAndroid className="service-icon text-4xl text-brand-blue" />,
      features: ['Kotlin & Jetpack Compose', 'Material Design 3', 'Android 14+ Support'],
      benefit: 'Access 2.5B+ Android users globally',
      pricing: 'Starting from $9,000',
    },
    {
      title: 'Cross-Platform App Development',
      description: 'Cost-effective cross-platform solutions using React Native and Flutter, delivering unified experiences across iOS and Android with shared codebase efficiency.',
      icon: <FaReact className="service-icon text-4xl text-brand-blue" />,
      features: ['React Native & Flutter', 'Shared Codebase', 'Native Performance'],
      benefit: 'Reduce development costs by 40%',
      pricing: 'Starting from $12,000',
    },
    {
      title: 'AI-Powered Mobile Apps',
      description: 'Intelligent mobile applications with machine learning capabilities, chatbots, predictive analytics, and personalization features that enhance user engagement.',
      icon: <FaRobot className="service-icon text-4xl text-brand-blue" />,
      features: ['Machine Learning', 'AI Chatbots', 'Predictive Analytics'],
      benefit: 'Increase user retention by 35%',
      pricing: 'Starting from $15,000',
    },
    {
      title: '5G Optimized Mobile Apps',
      description: 'Next-generation mobile applications optimized for 5G networks, delivering ultra-low latency, high-speed performance, and enhanced real-time capabilities.',
      icon: <FaWifi className="service-icon text-4xl text-brand-blue" />,
      features: ['Ultra-Low Latency', 'Real-Time Features', 'Edge Computing'],
      benefit: 'Achieve 10x faster performance',
      pricing: 'Starting from $18,000',
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Mobile App Development Services',
    description: 'Comprehensive mobile app development services including iOS, Android, cross-platform, AI-powered, and 5G optimized applications.',
    itemListElement: services.map((service, index) => ({
      '@type': 'Service',
      position: index + 1,
      name: service.title,
      description: service.description,
      provider: {
        '@type': 'Organization',
        name: 'Intention Infoservice',
        url: 'https://intentioninfoservice.com',
      },
      offers: {
        '@type': 'Offer',
        name: service.title,
        description: service.description,
        price: service.pricing.replace('Starting from ', ''),
        priceCurrency: 'USD',
        availability: 'InStock',
        validFrom: '2025-01-01',
        validThrough: '2025-12-31',
      },
      additionalProperty: service.features.map(feature => ({
        '@type': 'PropertyValue',
        name: 'Feature',
        value: feature,
      })),
    })),
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      window.location.href = '/contact-us';
    }
  };

  return (
    <section className="what-we-offer-section bg-dark-900 py-16 md:py-24">
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
            Comprehensive Mobile App Development Services
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-brand-blue font-semibold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From Native iOS & Android to Cross-Platform Solutions
          </motion.p>
          
          <motion.p
            className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our mobile app development services cover the complete spectrum of mobile solutions. Whether you need native iOS app development, Android app development, cross-platform apps, or cutting-edge AI-powered mobile applications, we deliver exceptional results that drive business growth in 2025.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="service-card bg-dark-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/50 hover:border-brand-blue/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              role="button"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              aria-label={`Learn more about ${service.title} services`}
            >
              {/* Service Icon */}
              <div className="mb-6">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-brand-blue mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-brand-blue rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefit & Pricing */}
              <div className="border-t border-gray-700 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-brand-blue font-semibold text-sm">
                    {service.benefit}
                  </span>
                  {/* <span className="text-white font-bold">
                    {service.pricing}
                  </span> */}
                </div>
                
                <Button
                  size="sm"
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-medium"
                  icon={<FaArrowRight />}
                  iconPosition="right"
                  href="/contact-us"
                  ariaLabel={`Get quote for ${service.title}`}
                >
                  Get Quote
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-brand-blue/10 to-brand-indigo/10 rounded-2xl p-8 border border-brand-blue/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with Mobile Apps?
          </h3>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            Join successful businesses who have launched their mobile apps with our expert development team. Get a free consultation and project estimate today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold px-8 py-4"
              icon={<FaArrowRight />}
              iconPosition="right"
              href="/contact-us"
              ariaLabel="Start your mobile app development project"
            >
              Start Your Project
            </Button>
            {/* <Button
              size="lg"
              className="bg-transparent border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-4"
              href="/portfolio"
              ariaLabel="View our mobile app development portfolio"
            >
              View Portfolio
            </Button> */}
          </div>

          {/* Trust Indicators */}
          {/* <div className="flex flex-wrap gap-8 justify-center mt-8 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-xl font-bold text-brand-blue">150+</div>
              <div className="text-sm text-gray-400">Apps Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-brand-blue">98%</div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-brand-blue">4.9★</div>
              <div className="text-sm text-gray-400">Client Rating</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-brand-blue">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}


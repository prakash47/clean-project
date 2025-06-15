'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaPhone, FaCalendarAlt, FaRocket, FaMobile } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function MobileAppCTABannerSection() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctaButton = document.querySelector('.cta-primary-button');
    const floatingElements = document.querySelectorAll('.floating-element');

    if (ctaButton) {
      gsap.to(ctaButton, {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1,
      });
    }

    if (floatingElements.length > 0) {
      floatingElements.forEach((element, index) => {
        gsap.to(element, {
          y: -20,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.3,
        });
      });
    }

    return () => {
      if (ctaButton) {
        gsap.killTweensOf(ctaButton);
      }
      if (floatingElements.length > 0) {
        gsap.killTweensOf(floatingElements);
      }
    };
  }, []);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Mobile App Development CTA',
    description: 'Get a free consultation for professional mobile app development services. Transform your business with custom iOS, Android, and cross-platform mobile applications.',
    url: 'https://intentioninfoservice.com/services/mobile-app-development',
    mainEntity: {
      '@type': 'Service',
      name: 'Mobile App Development Consultation',
      description: 'Free consultation for mobile app development projects including iOS, Android, and cross-platform applications.',
      provider: {
        '@type': 'Organization',
        name: 'Intention Infoservice',
        url: 'https://intentioninfoservice.com',
        telephone: '+91 70215 39267',
        email: 'info@intentioninfoservice.com',
      },
      offers: {
        '@type': 'Offer',
        name: 'Free Mobile App Development Consultation',
        description: 'Complimentary consultation session to discuss your mobile app requirements and project scope.',
        price: '0',
        priceCurrency: 'USD',
        availability: 'InStock',
        validFrom: '2025-01-01',
        validThrough: '2025-12-31',
      },
    },
    potentialAction: [
      {
        '@type': 'Action',
        name: 'Schedule Free Consultation',
        target: 'https://intentioninfoservice.com/contact-us',
      },
      {
        '@type': 'Action',
        name: 'Call for Immediate Support',
        target: 'tel:+91 70215 39267',
      },
    ],
  };

  return (
    <section className="cta-banner-section bg-dark-950 py-12 md:py-12 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 via-brand-indigo/20 to-brand-blue/20 opacity-50 pointer-events-none"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mobilePattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="2" fill="rgba(0, 160, 227, 0.5)" />
              <rect x="35" y="20" width="10" height="16" rx="2" fill="rgba(57, 49, 133, 0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mobilePattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FaMobile className="floating-element absolute top-20 left-10 text-brand-blue text-3xl opacity-30" />
        <FaRocket className="floating-element absolute top-32 right-20 text-brand-blue text-2xl opacity-40" />
        <FaMobile className="floating-element absolute bottom-20 left-20 text-brand-blue text-2xl opacity-35" />
        <FaRocket className="floating-element absolute bottom-32 right-10 text-brand-blue text-3xl opacity-30" />
      </div>

      <div className="w-full px-[5%] md:px-[10%] relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.1)',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Launch Your Mobile App in 2025?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-brand-blue font-semibold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Transform Your Business with Professional Mobile App Development
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Join 50+ successful businesses who have transformed their operations with our expert mobile app development services. Get a free consultation and discover how we can bring your vision to life with cutting-edge iOS, Android, and cross-platform solutions.
          </motion.p>

          {/* Value Propositions */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex items-center bg-brand-blue/20 px-4 py-2 rounded-full border border-brand-blue/30">
              <FaRocket className="text-brand-blue mr-2" />
              <span className="text-white font-medium">40% Faster Delivery</span>
            </div>
            <div className="flex items-center bg-brand-blue/20 px-4 py-2 rounded-full border border-brand-blue/30">
              <FaMobile className="text-brand-blue mr-2" />
              <span className="text-white font-medium">Native Performance</span>
            </div>
            <div className="flex items-center bg-brand-blue/20 px-4 py-2 rounded-full border border-brand-blue/30">
              <FaCalendarAlt className="text-brand-blue mr-2" />
              <span className="text-white font-medium">98% On-Time Delivery</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button
              size="lg"
              className="cta-primary-button bg-brand-blue hover:bg-brand-blue/90 text-white font-bold px-10 py-5 text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              icon={<FaArrowRight />}
              iconPosition="right"
              href="/contact-us"
              ariaLabel="Get free consultation for mobile app development"
            >
              Get Free Consultation Today
            </Button>
            
            <Button
              size="lg"
              className="bg-transparent border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold px-10 py-5 text-lg rounded-xl transition-all duration-300"
              icon={<FaPhone />}
              iconPosition="left"
              href="tel:+91 70215 39267"
              ariaLabel="Call us immediately for mobile app development support"
            >
              Call Now: +91 70215 39267
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="bg-gradient-to-r from-brand-blue/10 to-brand-indigo/10 rounded-2xl p-8 border border-brand-blue/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Why 50+ Businesses Choose Us for Mobile App Development
              </h3>
              <p className="text-gray-400">
                Proven results that speak for themselves
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-blue mb-1">50+</div>
                <div className="text-sm text-gray-400">Apps Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-blue mb-1">4.9★</div>
                <div className="text-sm text-gray-400">Client Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-blue mb-1">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-blue mb-1">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Urgency Message */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <p className="text-brand-blue font-semibold">
              🚀 Limited Time: Free project consultation + 20% discount on development costs
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Book your consultation within 48 hours to secure this exclusive offer
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

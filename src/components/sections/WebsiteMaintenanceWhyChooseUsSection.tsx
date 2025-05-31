'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function WebsiteMaintenanceWhyChooseUsSection() {
  const reasons = [
    {
      title: 'Proactive Security',
      description: 'We protect your site with advanced security measures, real-time monitoring, and daily backups to ensure safety in 2025.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" className="reason-icon-svg" aria-hidden="true">
          <path d="M12,6 Q12,3 9,3 Q6,3 6,6 V18 Q6,21 12,24 Q18,21 18,18 V6 Q18,3 15,3 Q12,3 12,6 Z" fill="#00a0e3" />
          <path d="M9,15 L12,18 L18,12" fill="none" stroke="#0F172A" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: 'Performance Focus',
      description: 'We optimize for speed and Core Web Vitals to enhance user experience and boost SEO rankings.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" className="reason-icon-svg" aria-hidden="true">
          <circle cx="12" cy="12" r="8" fill="#00a0e3" />
          <path d="M12,6 L12,12 L18,12" fill="none" stroke="#0F172A" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: 'SEO Expertise',
      description: 'We ensure your site stays competitive with ongoing SEO maintenance, audits, and content optimization.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" className="reason-icon-svg" aria-hidden="true">
          <rect x="4" y="4" width="16" height="12" rx="2" fill="#00a0e3" />
          <path d="M6,15 L9,12 L18,12" fill="none" stroke="#0F172A" strokeWidth="1.5" />
          <circle cx="9" cy="9" r="2" fill="#0F172A" />
        </svg>
      ),
    },
    {
      title: '24/7 Support',
      description: 'Our team is available round-the-clock to address any issues and keep your site running smoothly.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" className="reason-icon-svg" aria-hidden="true">
          <circle cx="12" cy="12" r="8" fill="#00a0e3" />
          <path d="M9,15 Q12,18 15,15" fill="none" stroke="#0F172A" strokeWidth="1.5" />
          <circle cx="9" cy="9" r="2" fill="#0F172A" />
          <circle cx="15" cy="9" r="2" fill="#0F172A" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // SVG Illustration Animations
    const securityShield = document.querySelector('.security-shield');
    const performanceGauge = document.querySelector('.performance-gauge');
    const seoChart = document.querySelector('.seo-chart');
    const supportIcon = document.querySelector('.support-icon');
    const backgroundElements = document.querySelectorAll('.background-element');

    if (securityShield) {
      gsap.fromTo(
        securityShield,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
      );
      gsap.to(securityShield, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });
    }
    if (performanceGauge) {
      gsap.fromTo(
        performanceGauge,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
      );
      gsap.to(performanceGauge, {
        rotation: 90,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.3,
      });
    }
    if (seoChart) {
      gsap.fromTo(
        seoChart,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.5, ease: 'power3.out' }
      );
    }
    if (supportIcon) {
      gsap.fromTo(
        supportIcon,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.7, ease: 'power3.out' }
      );
      gsap.to(supportIcon, {
        rotation: 360,
        duration: 5,
        repeat: -1,
        ease: 'linear',
        delay: 1.5,
      });
    }
    if (backgroundElements.length > 0) {
      gsap.fromTo(
        backgroundElements,
        { opacity: 0, scale: 0 },
        { opacity: 0.3, scale: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
      );
      gsap.to(backgroundElements, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2,
        delay: 0.8,
      });
    }

    // Hover animations for reason cards
    const reasonCards = gsap.utils.toArray('.reason-card') as HTMLElement[];
    reasonCards.forEach((card) => {
      const icon = card.querySelector('.reason-icon') as HTMLElement;
      const svgIcon = card.querySelector('.reason-icon svg') as SVGElement;
      const title = card.querySelector('.reason-title') as HTMLElement;
      const description = card.querySelector('.reason-description') as HTMLElement;

      card.addEventListener('mouseenter', () => {
        gsap.killTweensOf([icon, svgIcon, title, description]);

        gsap.to(icon, {
          scale: 1.3,
          rotate: 15,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        gsap.to(svgIcon, {
          filter: 'url(#glow)',
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
          onComplete: () => {
            gsap.to(svgIcon, {
              filter: 'url(#glow-pulse)',
              duration: 1,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              overwrite: 'auto',
            });
          },
        });

        gsap.to(title, {
          color: '#00a0e3',
          scale: 1.05,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        gsap.to(description, {
          color: '#d1d5db',
          y: -4,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.killTweensOf([icon, svgIcon, title, description]);

        gsap.to(icon, {
          scale: 1,
          rotate: 0,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        gsap.to(svgIcon, {
          filter: 'none',
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        gsap.to(title, {
          color: '#ffffff',
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        gsap.to(description, {
          color: '#9ca3af',
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      });
    });
  }, []);

  return (
    <section className="bg-dark-900 py-12 md:py-16 relative overflow-hidden">
      {/* Structured Data for the Section */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Website Maintenance Services',
          provider: {
            '@type': 'Organization',
            name: 'Intention Infoservice',
            url: 'https://intentioninfoservice.com',
          },
          description: 'Discover why Intention Infoservice is the best choice for website maintenance services in 2025, offering proactive security, performance optimization, SEO expertise, and 24/7 support in Tech City.',
          feature: reasons.map((reason) => ({
            '@type': 'PropertyValue',
            name: reason.title,
            value: reason.description,
          })),
        })}
      </script>

      {/* SVG Filter for Glowing Effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-pulse">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#393185', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Our Website Maintenance Services
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-brand-blue font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your Trusted Partner for Website Maintenance in 2025
          </motion.p>
          <motion.p
            className="text-md md:text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Choose Intention Infoservice for website maintenance services that go beyond updates. Our proactive approach in Tech City ensures your site remains secure, fast, and optimized for search engines, giving you peace of mind.
          </motion.p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Reasons to Choose Us */}
          <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                className={`reason-card group p-6 rounded-lg border shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                  index % 2 === 0
                    ? 'bg-dark-800 border-gray-700 hover:bg-dark-700 hover:border-brand-blue'
                    : 'bg-dark-700 border-gray-700 hover:bg-dark-600 hover:border-brand-indigo'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                role="button"
                tabIndex={0}
                aria-label={`Learn more about ${reason.title}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="reason-icon mb-3 transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-xl">
                    {reason.icon}
                  </div>
                  <h3 className="reason-title text-xl font-bold text-white mb-2 transition-transform duration-500">{reason.title}</h3>
                  <p className="reason-description text-base text-gray-400 transition-all duration-500">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Right: SVG Illustration */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <svg
              width="600"
              height="500"
              viewBox="0 0 600 500"
              className="w-full max-w-[600px]"
              role="img"
              aria-label="Illustration of why choose Intention Infoservice for website maintenance, featuring security, performance, SEO, and support elements"
            >
              {/* Background Elements */}
              <g className="background">
                <circle cx="50" cy="50" r="20" fill="url(#glowGradient)" className="background-element" filter="url(#glow)" />
                <circle cx="550" cy="50" r="20" fill="url(#glowGradient)" className="background-element" filter="url(#glow)" />
                <circle cx="50" cy="450" r="20" fill="url(#glowGradient)" className="background-element" filter="url(#glow)" />
                <circle cx="550" cy="450" r="20" fill="url(#glowGradient)" className="background-element" filter="url(#glow)" />
                <rect x="40" y="100" width="50" height="25" rx="5" fill="none" stroke="url(#glowGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                <rect x="510" y="100" width="50" height="25" rx="5" fill="none" stroke="url(#glowGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                <path d="M40,135 Q300,165 560,135" fill="none" stroke="url(#glowGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                <rect x="40" y="375" width="50" height="25" rx="5" fill="none" stroke="url(#glowGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                <rect x="510" y="375" width="50" height="25" rx="5" fill="none" stroke="url(#glowGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
                <path d="M40,410 Q300,440 560,410" fill="none" stroke="url(#glowGradient)" strokeWidth="1" strokeDasharray="3,3" className="background-element" />
              </g>
              {/* Security Shield */}
              <g className="security-shield" transform="translate(50, 50)">
                <path d="M100,60 Q100,40 80,40 Q60,40 60,60 V180 Q60,200 100,220 Q140,200 140,180 V60 Q140,40 120,40 Q100,40 100,60 Z" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
                <path d="M80,140 L100,160 L140,100" fill="none" stroke="#00a0e3" strokeWidth="2" />
                <text x="40" y="240" fill="#fff" fontSize="14" fontFamily="monospace">Security</text>
              </g>
              {/* Performance Gauge */}
              <g className="performance-gauge" transform="translate(350, 50)">
                <circle cx="100" cy="100" r="50" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
                <path d="M100,100 L100,50 A50,50 0 0,1 150,100" fill="none" stroke="#00a0e3" strokeWidth="2" />
                <text x="60" y="180" fill="#fff" fontSize="14" fontFamily="monospace">Performance</text>
              </g>
              {/* SEO Chart */}
              <g className="seo-chart" transform="translate(175, 250)">
                <rect x="0" y="0" width="200" height="100" rx="10" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
                <rect x="10" y="10" width="180" height="80" fill="#1E293B" />
                <path d="M30,70 L70,50 L110,70 L150,40 L170,60" fill="none" stroke="#00a0e3" strokeWidth="2" />
                <text x="60" y="120" fill="#fff" fontSize="14" fontFamily="monospace">SEO</text>
              </g>
              {/* Support Icon */}
              <g className="support-icon" transform="translate(300, 400)">
                <circle cx="50" cy="50" r="30" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
                <path d="M40,60 Q50,70 60,60" fill="none" stroke="#00a0e3" strokeWidth="2" />
                <circle cx="40" cy="40" r="5" fill="#00a0e3" />
                <circle cx="60" cy="40" r="5" fill="#00a0e3" />
                <text x="20" y="90" fill="#fff" fontSize="14" fontFamily="monospace">Support</text>
              </g>
            </svg>
          </div>
        </div>
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="btn btn-primary hover:bg-brand-blue hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] transition-all duration-300"
            icon={<FaArrowRight />}
            iconPosition="right"
            href="../contact-us"
            ariaLabel="Discover the difference with our website maintenance services and get a free website health check"
          >
            Discover the Difference
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
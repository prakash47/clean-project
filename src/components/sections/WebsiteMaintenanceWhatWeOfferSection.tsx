
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function WebsiteMaintenanceWhatWeOfferSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'Advanced Security & Updates',
      description: 'Protect your website from evolving threats with continuous security updates, proactive malware scanning, and robust daily backups, ensuring ironclad safety and compliance in 2025.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="service-icon-svg" aria-hidden="true">
          <path d="M20,10 Q20,5 15,5 Q10,5 10,10 V30 Q10,35 20,40 Q30,35 30,30 V10 Q30,5 25,5 Q20,5 20,10 Z" fill="#00a0e3" />
          <path d="M15,25 L20,30 L30,15" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
      stat: { label: 'Threats Blocked', value: 99, unit: '%' },
    },
    {
      title: 'Peak Performance Optimization',
      description: 'Achieve lightning-fast load times and seamless user experiences through meticulous performance optimization, significantly improving Core Web Vitals and search engine rankings.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="service-icon-svg" aria-hidden="true">
          <circle cx="20" cy="20" r="15" fill="#00a0e3" />
          <path d="M20,20 L20,10 A10,10 0 0,1 30,20" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
      stat: { label: 'Uptime Guaranteed', value: 99.99, unit: '%' },
    },
    {
      title: 'Strategic Content Management',
      description: 'Keep your website dynamic and engaging with regular content updates, ensuring your audience always accesses the most current and relevant information, boosting user retention.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="service-icon-svg" aria-hidden="true">
          <rect x="5" y="5" width="30" height="30" rx="3" fill="#00a0e3" />
          <path d="M10,10 L30,30 M10,30 L30,10" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
      stat: { label: 'Content Refresh Rate', value: 98, unit: '%' },
    },
    {
      title: 'Reliable Daily Backups & Recovery',
      description: 'Safeguard your valuable data with automated daily backups and a robust recovery protocol, guaranteeing swift restoration from any unforeseen issues or data loss scenarios.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="service-icon-svg" aria-hidden="true">
          <path d="M20,5 Q15,-5 0,5 Q15,15 20,25 Q25,15 40,5 Q25,-5 20,5 Z" fill="#00a0e3" />
          <path d="M15,10 H25 V15 H15 Z" fill="#0F172A" stroke="#00a0e3" strokeWidth="1" />
          <path d="M15,15 H25 V20 H15 Z" fill="#0F172A" stroke="#00a0e3" strokeWidth="1" />
        </svg>
      ),
      stat: { label: 'Data Recovery Rate', value: 100, unit: '%' },
    },
    {
      title: 'Proactive SEO Maintenance',
      description: 'Elevate your search engine visibility with continuous SEO audits, strategic keyword optimization, and timely content updates, ensuring your website remains highly competitive and ranks well.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="service-icon-svg" aria-hidden="true">
          <rect x="0" y="0" width="40" height="30" rx="3" fill="#00a0e3" />
          <path d="M10,25 L15,20 L30,20" fill="none" stroke="#0F172A" strokeWidth="2" />
          <circle cx="15" cy="15" r="3" fill="#0F172A" />
        </svg>
      ),
      stat: { label: 'SEO Improvement', value: 90, unit: '%' },
    },
    {
      title: '24/7 Real-Time Monitoring',
      description: 'Benefit from round-the-clock monitoring of your website for uptime, performance bottlenecks, and potential security threats, enabling immediate detection and swift resolution of any issues.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="service-icon-svg" aria-hidden="true">
          <circle cx="20" cy="20" r="15" fill="#00a0e3" />
          <circle cx="20" cy="20" r="5" fill="#0F172A" />
          <path d="M20,5 L25,10 M20,35 L25,30 M5,20 L10,25 M35,20 L30,25" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
      stat: { label: 'Monitoring Coverage', value: 100, unit: '%' },
    },
  ];

  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Set up GSAP animations for each card
    const cards = gsap.utils.toArray('.service-card') as HTMLElement[];
    cards.forEach((card) => {
      const icon = card.querySelector('.service-icon') as HTMLElement;
      const svgIcon = card.querySelector('.service-icon svg') as SVGElement;
      const title = card.querySelector('.service-title') as HTMLElement;
      const description = card.querySelector('.service-description') as HTMLElement;
      const progressBar = card.querySelector('.progress-bar') as HTMLElement;

      // Initial animations for icon, title, description, and progress bar
      gsap.set(icon, { scale: 1, rotate: 0 });
      gsap.set(svgIcon, { filter: 'none' });
      gsap.set(title, { color: '#ffffff' });
      gsap.set(description, { color: '#9ca3af', y: 0 });
      if (progressBar) {
        gsap.set(progressBar, { width: '0%' });
      }

      // Hover in
      card.addEventListener('mouseenter', () => {
        gsap.killTweensOf([icon, svgIcon, title, description, progressBar]);

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

        if (progressBar) {
          gsap.to(progressBar, {
            width: `${progressBar.dataset.value}%`,
            duration: 1,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      });

      // Hover out
      card.addEventListener('mouseleave', () => {
        gsap.killTweensOf([icon, svgIcon, title, description, progressBar]);

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

        if (progressBar) {
          gsap.to(progressBar, {
            width: '0%',
            duration: 0.5,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      });
    });
  }, []);

  return (
    <section className="bg-dark-900 py-12 md:py-12 relative overflow-hidden">
      {/* Structured Data for the Section */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: services.map((service, index) => ({
            '@type': 'Service',
            position: index + 1,
            name: service.title,
            description: service.description,
            provider: {
              '@type': 'Organization',
              name: 'Intention Infoservice',
            },
            keywords: `${service.title.toLowerCase().replace(/ & /g, ', ')}, website maintenance services, website security, performance optimization, SEO maintenance, daily backups, real-time monitoring, web support 2025`,
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
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-[5%] md:px-[2%] relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Comprehensive Website Maintenance Services
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-brand-blue font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Keeping Your Digital Presence Secure, Fast, and Always Optimized
          </motion.p>
          <motion.p
            className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Intention Infoservice provides end-to-end website maintenance solutions in Tech City, covering everything from advanced security updates and performance optimization to strategic SEO maintenance and real-time monitoring. Ensure your site performs at its absolute best in 2025 and beyond.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`service-card group relative p-8 rounded-xl border shadow-lg transition-all duration-500 hover:shadow-2xl ${
                index % 2 === 0
                  ? 'bg-dark-800 border-gray-700 hover:bg-dark-700 hover:border-brand-blue'
                  : 'bg-dark-700 border-gray-700 hover:bg-dark-600 hover:border-brand-indigo'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              role="button"
              tabIndex={0}
              aria-label={`Learn more about ${service.title}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-start gap-6">
                <div className="service-icon transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="service-title text-2xl font-bold text-white mb-3 transition-transform duration-500">{service.title}</h3>
                  <p className="service-description text-base text-gray-400 transition-all duration-500">{service.description}</p>
                  <div className="mt-5">
                    <p className="text-sm text-gray-500 font-medium">{service.stat.label}</p>
                    <div className="relative w-full h-2 bg-gray-700 rounded-full mt-2">
                      <div
                        className="progress-bar h-full rounded-full bg-brand-blue transition-all duration-1000"
                        data-value={service.stat.value}
                      />
                    </div>
                    <p className="text-sm text-gray-400 mt-2 font-semibold">{service.stat.value}{service.stat.unit}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="btn btn-primary hover:bg-brand-blue hover:shadow-[0_0_20px_rgba(0,160,227,0.6)] transition-all duration-300 transform hover:-translate-y-1"
            icon={<FaArrowRight />}
            iconPosition="right"
            href="../contact-us"
            ariaLabel="Explore our website maintenance plans and get a free website health check"
          >
            Explore Our Maintenance Plans
          </Button>
        </motion.div>
      </div>
    </section>
  );
}



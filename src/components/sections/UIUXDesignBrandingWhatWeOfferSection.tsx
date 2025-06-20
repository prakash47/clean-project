
'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function UIUXDesignBrandingWhatWeOfferSection() {
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

      // Hover animations for the icon
      gsap.set(icon, { scale: 1, rotate: 0 });
      gsap.set(svgIcon, { filter: 'none' });

      // Hover animations for the title and description
      gsap.set(title, { color: '#ffffff' });
      gsap.set(description, { color: '#9ca3af', y: 0 });

      // Hover in
      card.addEventListener('mouseenter', () => {
        // Kill any ongoing animations to prevent conflicts
        gsap.killTweensOf([icon, svgIcon, title, description]);

        // Icon animation
        gsap.to(icon, {
          scale: 1.3,
          rotate: 15,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        // Glowing effect with pulsing
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

        // Title and description animation
        gsap.to(title, {
          color: card.classList.contains('bg-dark-800') ? '#00a0e3' : '#393185',
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

      // Hover out
      card.addEventListener('mouseleave', () => {
        // Kill any ongoing animations to prevent conflicts
        gsap.killTweensOf([icon, svgIcon, title, description]);

        // Reset icon animation
        gsap.to(icon, {
          scale: 1,
          rotate: 0,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        // Reset glowing effect
        gsap.to(svgIcon, {
          filter: 'none',
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        // Reset title and description animation
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

  const services = [
    {
      title: 'UI/UX Design Services 2025',
      description:
        'Create intuitive, visually stunning interfaces with our UI/UX design services in 2025, boosting user engagement by up to 35%.',
      className: 'uiux-design-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="uiux-design-icon" aria-hidden="true">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#00a0e3" />
          <path d="M10,30 Q20,10 30,30" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Prototyping & Wireframing Services',
      description:
        'Visualize your ideas with interactive prototypes and detailed wireframes using our expert prototyping services.',
      className: 'prototyping-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="prototyping-icon" aria-hidden="true">
          <rect x="0" y="0" width="40" height="30" rx="3" fill="none" stroke="#393185" strokeWidth="2" strokeDasharray="5,5" />
          <rect x="5" y="5" width="30" height="20" fill="none" stroke="#393185" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
      ),
    },
    {
      title: 'User Research & Usability Testing',
      description:
        'Understand your audience with in-depth user research and usability testing services to ensure optimal design solutions.',
      className: 'research-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="research-icon" aria-hidden="true">
          <circle cx="20" cy="20" r="15" fill="#00a0e3" />
          <path d="M15,25 L25,15 M15,15 L25,25" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Interaction Design for Apps',
      description:
        'Enhance user engagement with seamless micro-interactions and animations through our interaction design services.',
      className: 'interaction-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="interaction-icon" aria-hidden="true">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#393185" />
          <path d="M10,10 L20,20 L30,10" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Brand Identity Development for Startups',
      description:
        'Craft a cohesive brand identity with logos, typography, and color schemes that reflect your vision and build loyalty.',
      className: 'branding-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="branding-icon" aria-hidden="true">
          <circle cx="20" cy="20" r="15" fill="#00a0e3" />
          <text x="10" y="25" fill="#0F172A" fontSize="12" fontFamily="monospace">Logo</text>
        </svg>
      ),
    },
    {
      title: 'Brand Strategy Solutions',
      description:
        'Develop a strategic roadmap for brand positioning and messaging with our expert brand strategy services.',
      className: 'strategy-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="strategy-icon" aria-hidden="true">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#393185" />
          <path d="M10,10 L30,10 L20,30 Z" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Visual Storytelling for Brands',
      description:
        'Connect emotionally with your audience through visual storytelling that enhances your brand’s narrative.',
      className: 'storytelling-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="storytelling-icon" aria-hidden="true">
          <circle cx="20" cy="20" r="15" fill="#00a0e3" />
          <path d="M10,20 Q20,10 30,20 Q20,30 10,20" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Design Systems for Consistency',
      description:
        'Build scalable design systems that integrate UI/UX and branding for consistent experiences across platforms.',
      className: 'design-system-icon',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="design-system-icon" aria-hidden="true">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#393185" />
          <rect x="10" y="10" width="10" height="10" fill="none" stroke="#0F172A" strokeWidth="2" />
          <rect x="20" y="20" width="10" height="10" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-dark-900 py-12 md:py-16 relative overflow-hidden">
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
            keywords: service.title.toLowerCase().replace(/ & /g, ', '),
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Comprehensive UI/UX Design & Branding Services
          </motion.h2>
          <motion.p
            className="text-xl text-[#00a0e3] font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From Startups to Enterprises, We Deliver User-Centered Design Solutions
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our UI/UX design and branding services combine creativity, strategy, and user insights to deliver experiences that captivate and convert. Explore our offerings to see how we can elevate your digital presence in 2025.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`service-card group relative p-6 rounded-lg border shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                index % 2 === 0
                  ? 'bg-dark-800 border-gray-700 hover:bg-dark-700 hover:border-[#00a0e3]'
                  : 'bg-dark-700 border-gray-700 hover:bg-dark-600 hover:border-[#393185]'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              role="button"
              tabIndex={0}
              aria-label={`Learn more about ${service.title}`}
            >
              {/* Card Header */}
              <div className="flex flex-col items-center mb-4">
                <div
                  className={`service-icon ${service.className} mb-3 p-2 rounded-full transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:bg-gradient-to-r ${
                    index % 2 === 0 ? 'group-hover:from-[#00a0e3] group-hover:to-[#393185]' : 'group-hover:from-[#393185] group-hover:to-[#00a0e3]'
                  }`}
                >
                  {service.icon}
                </div>
                <h3 className="service-title text-2xl font-bold text-white text-center transition-transform duration-500">
                  {service.title}
                </h3>
              </div>
              {/* Divider */}
              <div className="border-t border-gray-600 mb-4 transition-colors duration-500 group-hover:border-gray-500" />
              {/* Card Body */}
              <p className="service-description text-base text-gray-400 text-center transition-all duration-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        {/* CTA Button */}
        <motion.div   
                      className="flex justify-center "
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <Button
                        size="lg"
                        className="btn btn-primary hover:bg-brand-blue hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] transition-all duration-300"
                        icon={<FaArrowRight />}
                        iconPosition="right"
                        href="/contact-us"
                        ariaLabel="Explore our UI/UX design and branding services"
                      >
                        Explore Our Services
                      </Button>
                    </motion.div>
      </div>
    </section>
  );
}


'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useEffect } from 'react';

export default function UIUXDesignBrandingWhyChooseUsSection() {
  const reasons = [
    {
      title: 'Proven UI/UX Design Expertise in 2025',
      description:
        'With over a decade of experience, we deliver user-centered designs that drive engagement and conversions, making us a leader in UI/UX design services in 2025.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="reason-icon-svg" aria-hidden="true">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#00a0e3" />
          <path d="M10,20 L15,25 L30,10" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Tailored Branding Solutions for Startups',
      description:
        'We specialize in branding solutions for startups, creating cohesive and memorable brand identities that help you stand out in competitive markets.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="reason-icon-svg" aria-hidden="true">
          <circle cx="20" cy="20" r="15" fill="#393185" />
          <text x="10" y="25" fill="#0F172A" fontSize="12" fontFamily="monospace">Logo</text>
        </svg>
      ),
    },
    {
      title: 'User-Centered Design Approach',
      description:
        'Our user-centered design approach ensures intuitive experiences through in-depth research, testing, and iterative design tailored to your audience’s needs.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="reason-icon-svg" aria-hidden="true">
          <circle cx="20" cy="20" r="15" fill="#00a0e3" />
          <path d="M15,25 Q20,30 25,25" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Proven Results with Measurable Impact',
      description:
        'Our projects have delivered up to 40% increase in user engagement and 25% higher conversion rates, showcasing the impact of our design and branding solutions.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="reason-icon-svg" aria-hidden="true">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#393185" />
          <path d="M10,30 L20,10 L30,30" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Seamless Collaboration and Support',
      description:
        'We work closely with clients throughout the process, offering ongoing support to ensure your designs evolve with your business needs.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="reason-icon-svg" aria-hidden="true">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#00a0e3" />
          <path d="M10,20 Q20,10 30,20 Q20,30 10,20" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Cutting-Edge Design Tools and Trends',
      description:
        'We leverage the latest design tools like Figma and AI-driven insights to stay ahead of trends, ensuring your project is future-proof in 2025.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="reason-icon-svg" aria-hidden="true">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#393185" />
          <path d="M20,10 L30,20 L20,30 L10,20 Z" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // SVG Illustration Animations
    const designTools = document.querySelector('.design-tools');
    const userPersona = document.querySelector('.user-persona');
    const brandAssets = document.querySelector('.brand-assets');
    const backgroundElements = document.querySelectorAll('.background-element');

    if (designTools) {
      gsap.fromTo(
        designTools,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
      );
    }
    if (userPersona) {
      gsap.fromTo(
        userPersona,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' }
      );
      gsap.to(userPersona, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });
    }
    if (brandAssets) {
      gsap.fromTo(
        brandAssets,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.5, ease: 'power3.out' }
      );
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
          serviceType: 'UI/UX Design and Branding Services',
          provider: {
            '@type': 'Organization',
            name: 'Intention Infoservice',
            url: 'https://intentioninfoservice.com',
          },
          description: 'Discover why Intention Infoservice is the best choice for UI/UX design and branding services in 2025, offering proven expertise, user-centered design, and tailored solutions.',
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
            Why Choose Intention Infoservice for UI/UX & Branding
          </motion.h2>
          <motion.p
            className="text-xl text-[#00a0e3] font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your Partner for Exceptional Design in 2025
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Discover why Intention Infoservice is the best branding agency in 2025, offering proven UI/UX design expertise, user-centered solutions, and measurable results for businesses of all sizes.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left: Reasons to Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                className={`reason-card group p-6 rounded-lg border shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                  index % 2 === 0
                    ? 'bg-dark-800 border-gray-700 hover:bg-dark-700 hover:border-[#00a0e3]'
                    : 'bg-dark-700 border-gray-700 hover:bg-dark-600 hover:border-[#393185]'
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
                  <h3 className="reason-title text-xl font-bold text-white mb-2 transition-transform duration-500">
                    {reason.title}
                  </h3>
                  <p className="reason-description text-base text-gray-400 transition-all duration-500">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Right: SVG Illustration */}
          <div className="flex justify-center">
            <svg
              width="600"
              height="500"
              viewBox="0 0 600 500"
              className="w-full max-w-[600px]"
              role="img"
              aria-label="Illustration of why choose Intention Infoservice for UI/UX design and branding, featuring design tools, user persona, and brand assets"
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
              {/* Design Tools (Figma-like Interface) */}
              <g className="design-tools" transform="translate(50, 50)">
                <rect x="0" y="0" width="250" height="200" rx="10" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
                <rect x="10" y="10" width="230" height="180" fill="#1E293B" />
                <rect x="10" y="10" width="230" height="30" rx="5" fill="#00a0e3" />
                <rect x="20" y="50" width="50" height="100" rx="5" fill="#393185" />
                <rect x="80" y="50" width="140" height="50" rx="5" fill="#00a0e3" />
                <rect x="80" y="110" width="60" height="30" rx="5" fill="#393185" />
                <rect x="150" y="110" width="60" height="30" rx="5" fill="#393185" />
              </g>
              {/* User Persona */}
              <g className="user-persona" transform="translate(350, 125)">
                <circle cx="50" cy="50" r="50" fill="#00a0e3" />
                <path d="M50,70 Q60,80 70,70" fill="none" stroke="#0F172A" strokeWidth="2" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="#0F172A" strokeWidth="2" />
                <text x="15" y="125" fill="#fff" fontSize="14" fontFamily="monospace">User Persona</text>
              </g>
              {/* Brand Assets (Logo, Color Swatches) */}
              <g className="brand-assets" transform="translate(175, 300)">
                <circle cx="40" cy="40" r="30" fill="#393185" />
                <text x="25" y="45" fill="#0F172A" fontSize="14" fontFamily="monospace">Logo</text>
                <rect x="80" y="10" width="80" height="20" rx="5" fill="#FF6B6B" />
                <rect x="80" y="40" width="80" height="20" rx="5" fill="#4ECDC4" />
                <rect x="80" y="70" width="80" height="20" rx="5" fill="#45B7D1" />
                <text x="170" y="50" fill="#fff" fontSize="14" fontFamily="monospace">Colors</text>
              </g>
            </svg>
          </div>
        </div>
        <motion.div
                    className="flex justify-center mt-12 z-20 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Button
                      size="lg"
                      className="btn btn-primary hover:bg-brand-blue hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] transition-all duration-300"
                      icon={<FaArrowRight />}
                      iconPosition="right"
                      href="/contact-us"
                      ariaLabel="Discover why Intention Infoservice is the best choice for your design needs"
                    >
                      Discover the Difference
                    </Button>
                  </motion.div>
        
      </div>
    </section>
  );
}
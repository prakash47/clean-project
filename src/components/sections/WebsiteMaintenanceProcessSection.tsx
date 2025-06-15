
'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function WebsiteMaintenanceProcessSection() {
  const steps = [
    {
      title: 'Comprehensive Website Audit',
      description: 'We begin with an in-depth analysis of your website, meticulously identifying security vulnerabilities, performance bottlenecks, and areas ripe for optimization to ensure a robust foundation.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="step-icon-svg" aria-hidden="true">
          <circle cx="20" cy="20" r="15" fill="#00a0e3" />
          <path d="M20,20 L20,10 A10,10 0 0,1 30,20" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Proactive Updates & Patching',
      description: 'Our expert team ensures your site remains secure and functional through regular software updates, critical security patches, and systematic content refreshes, minimizing risks and maximizing stability.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="step-icon-svg" aria-hidden="true">
          <circle cx="20" cy="20" r="15" fill="#00a0e3" />
          <path d="M10,20 A10,10 0 0,1 30,20" fill="none" stroke="#0F172A" strokeWidth="2" />
          <path d="M30,20 L35,15 M30,20 L35,25" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Advanced Performance Optimization',
      description: 'We fine-tune your website for unparalleled speed and an exceptional user experience, focusing on achieving rapid load times and superior Core Web Vitals scores for enhanced engagement and SEO benefits.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="step-icon-svg" aria-hidden="true">
          <path d="M20,5 Q30,0 40,10 Q30,20 20,30 Q10,20 0,10 Q10,0 20,5 Z" fill="#00a0e3" />
          <path d="M10,20 L20,30 L30,20" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Continuous Monitoring & Dedicated Support',
      description: 'Benefit from 24/7 real-time monitoring to detect and resolve issues instantly, coupled with our dedicated support team ensuring your website operates flawlessly around the clock.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="step-icon-svg" aria-hidden="true">
          <circle cx="20" cy="20" r="15" fill="#00a0e3" />
          <circle cx="20" cy="20" r="5" fill="#0F172A" />
          <path d="M20,5 L25,10 M20,35 L25,30 M5,20 L10,25 M35,20 L30,25" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Animate SVG timeline path
    const timelinePath = document.querySelector('.timeline-path');
    const timelineDots = document.querySelectorAll('.timeline-dot');
    const timelineIcons = document.querySelectorAll('.timeline-icon');

    if (timelinePath) {
      gsap.fromTo(
        timelinePath,
        { strokeDasharray: 600, strokeDashoffset: 600 },
        { strokeDashoffset: 0, duration: 2, ease: 'power2.out' }
      );
    }

    if (timelineDots.length > 0) {
      gsap.fromTo(
        timelineDots,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.3, ease: 'power2.out', delay: 0.5 }
      );
    }

    if (timelineIcons.length > 0) {
      gsap.fromTo(
        timelineIcons,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.3, ease: 'power2.out', delay: 0.8 }
      );
    }

    // Animate step cards on hover
    const cards = gsap.utils.toArray('.step-card') as HTMLElement[];
    cards.forEach((card) => {
      const icon = card.querySelector('.step-icon') as HTMLElement;
      const svgIcon = card.querySelector('.step-icon svg') as SVGElement;
      const title = card.querySelector('.step-title') as HTMLElement;
      const description = card.querySelector('.step-description') as HTMLElement;

      gsap.set(icon, { scale: 1, rotate: 0 });
      gsap.set(svgIcon, { filter: 'none' });
      gsap.set(title, { color: '#ffffff' });
      gsap.set(description, { color: '#9ca3af', y: 0 });

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
    <section className="bg-dark-900 py-12 md:py-12 relative overflow-hidden">
      {/* Structured Data for the Section */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'Intention Infoservice Website Maintenance Process',
          description: 'Explore Intention Infoservice’s streamlined website maintenance process, designed to keep your site secure, fast, and optimized in Tech City for 2025 and beyond. From comprehensive audits to 24/7 support, we ensure peak performance.',
          step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.title,
            text: step.description,
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

      <div className="max-w-7xl mx-auto px-[5%] md:px-[10%] lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Streamlined Website Maintenance Process
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-brand-blue font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A Proven Approach to Keep Your Digital Presence Flawless
          </motion.p>
          <motion.p
            className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            From initial comprehensive audits to ongoing 24/7 support, our website maintenance process ensures your site stays secure, fast, and optimized for peak performance in 2025. Partner with us for peace of mind and a thriving online presence.
          </motion.p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Process Steps (Vertical List on Mobile, Cards on Desktop) */}
          <div className="lg:w-1/2 w-full">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`step-card group p-8 rounded-xl border shadow-lg transition-all duration-500 hover:shadow-2xl mb-6 lg:mb-0 ${
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
                aria-label={`Learn more about step ${index + 1}: ${step.title}`}
              >
                <div className="flex items-start gap-6">
                  <div className="step-icon transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="step-title text-2xl font-bold text-white mb-3 transition-transform duration-500">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="step-description text-base text-gray-400 transition-all duration-500">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Right: SVG Timeline (Hidden on Mobile) */}
          <div className="lg:w-1/2 hidden lg:flex justify-center">
            <svg
              width="600"
              height="400"
              viewBox="0 0 600 400"
              className="w-full max-w-[600px]"
              role="img"
              aria-label="Timeline of website maintenance process, featuring steps for audit, updates, optimization, and support"
            >
              {/* Timeline Path */}
              <path
                className="timeline-path"
                d="M100,50 Q300,100 500,50 Q300,150 100,200 Q300,250 500,300 Q300,350 100,350"
                fill="none"
                stroke="#00a0e3"
                strokeWidth="4"
                strokeDasharray="600"
              />
              {/* Timeline Dots */}
              <circle cx="100" cy="50" r="10" fill="#00a0e3" className="timeline-dot" />
              <circle cx="500" cy="50" r="10" fill="#00a0e3" className="timeline-dot" />
              <circle cx="100" cy="200" r="10" fill="#00a0e3" className="timeline-dot" />
              <circle cx="500" cy="300" r="10" fill="#00a0e3" className="timeline-dot" />
              {/* Timeline Icons */}
              <g transform="translate(85, 35)" className="timeline-icon">
                {steps[0].icon}
              </g>
              <g transform="translate(485, 35)" className="timeline-icon">
                {steps[1].icon}
              </g>
              <g transform="translate(85, 185)" className="timeline-icon">
                {steps[2].icon}
              </g>
              <g transform="translate(485, 285)" className="timeline-icon">
                {steps[3].icon}
              </g>
              {/* Timeline Labels */}
              <text x="100" y="90" fill="#fff" fontSize="14" fontFamily="monospace">{steps[0].title}</text>
              <text x="500" y="90" fill="#fff" fontSize="14" fontFamily="monospace">{steps[1].title}</text>
              <text x="100" y="240" fill="#fff" fontSize="14" fontFamily="monospace">{steps[2].title}</text>
              <text x="500" y="340" fill="#fff" fontSize="14" fontFamily="monospace">{steps[3].title}</text>
            </svg>
          </div>
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
            ariaLabel="Start your website maintenance project today with a free website health check"
          >
            Get Your Free Website Health Check
          </Button>
        </motion.div>
      </div>
    </section>
  );
}



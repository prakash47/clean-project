'use client';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function TechnologiesWeUseSection() {
  const technologies = [
    {
      name: 'React',
      description: 'For fast, interactive web apps.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="React Logo">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <circle cx="30" cy="30" r="10" fill="#0F172A" />
          <path d="M30,20 Q40,30 30,40 Q20,30 30,20" fill="none" stroke="#14B8A6" strokeWidth="2" />
          <path d="M20,30 Q30,40 40,30" fill="none" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: 'Next.js',
      description: 'For scalable, SEO-friendly applications.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Next.js Logo">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <path d="M20,20 L40,40 M40,20 V40" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      description: 'For modern, responsive styling.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Tailwind CSS Logo">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <path d="M20,40 Q30,20 40,40" fill="none" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: 'WordPress',
      description: 'For flexible content management.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="WordPress Logo">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <path d="M20,30 H40 M30,20 V40" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: 'Shopify',
      description: 'For robust e-commerce platforms.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Shopify Logo">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <path d="M20,40 Q30,45 40,40" fill="none" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      description: 'For scalable backend development.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="Node.js Logo">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <path d="M20,30 Q30,20 40,30" fill="none" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      description: 'For efficient database management.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="MongoDB Logo">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <path d="M30,20 Q20,30 30,40" fill="none" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: 'AWS',
      description: 'For reliable cloud hosting.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="AWS Logo">
          <circle cx="30" cy="30" r="25" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
          <path d="M20,30 H40 M25,25 L35,35 M35,25 L25,35" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  const handleMouseEnter = (index: number) => {
    const card = document.querySelectorAll('.tech-card')[index];
    const icon = document.querySelectorAll('.tech-icon')[index];

    gsap.killTweensOf(card);
    gsap.killTweensOf(icon);

    gsap.to(card, {
      y: -10,
      backgroundColor: '#1A2526',
      shadow: 'xl',
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to(icon, {
      scale: 1.2,
      boxShadow: '0 0 15px rgba(20, 184, 166, 0.7)',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = document.querySelectorAll('.tech-card')[index];
    const icon = document.querySelectorAll('.tech-icon')[index];

    gsap.killTweensOf(card);
    gsap.killTweensOf(icon);

    gsap.to(card, {
      y: 0,
      backgroundColor: '#0F172A',
      shadow: 'lg',
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to(icon, {
      scale: 1,
      boxShadow: 'none',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleFocus = (index: number) => {
    handleMouseEnter(index);
  };

  const handleBlur = (index: number) => {
    handleMouseLeave(index);
  };

  return (
    <section id="technologies-we-use" className="bg-gradient-to-b from-dark-900 to-dark-950 py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Grain Texture with Animation */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/textures/grain.webp')" }}
      />
      <div className="w-full px-[10%] relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Technologies We Use
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Cutting-Edge Tools for Modern Web Solutions
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We leverage the latest technologies to build innovative, high-performing websites that meet your business needs.
          </motion.p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="tech-card bg-dark-950 rounded-lg p-6 shadow-lg transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onFocus={() => handleFocus(index)}
              onBlur={() => handleBlur(index)}
              tabIndex={0}
              aria-describedby={`tech-description-${index}`}
            >
              <div className="tech-icon w-14 h-14 flex items-center justify-center mx-auto mb-4">{tech.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{tech.name}</h3>
              <p id={`tech-description-${index}`} className="text-lg text-gray-400">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
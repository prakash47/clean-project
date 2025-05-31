'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaLaptopCode, FaMobileAlt, FaSearch, FaUsers, FaChartLine, FaTools } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';

export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0]);

  const [particles, setParticles] = useState(
    Array.from({ length: 10 }, () => ({
      top: '0%',
      left: '0%',
      opacity: 0,
    }))
  );

  useEffect(() => {
    setParticles(
      Array.from({ length: 10 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.5 + 0.2,
      }))
    );
  }, []);

  const reasons = [
    {
      title: 'Expert Team & Innovation',
      description: 'Our skilled team leverages cutting-edge technology to deliver innovative web solutions.',
      icon: <FaLaptopCode className="w-10 h-10 text-brand-blue" aria-hidden="true" />,
    },
    {
      title: 'Mobile-First Design',
      description: 'We prioritize mobile-first design to ensure seamless experiences across all devices.',
      icon: <FaMobileAlt className="w-10 h-10 text-brand-blue" aria-hidden="true" />,
    },
    {
      title: 'SEO & Performance-Driven',
      description: 'Our SEO expertise and performance optimization boost your site’s visibility and speed.',
      icon: <FaSearch className="w-10 h-10 text-brand-blue" aria-hidden="true" />,
    },
    {
      title: 'Custom & Scalable Solutions',
      description: 'We build tailored websites that scale with your business, from startups to enterprises.',
      icon: <FaUsers className="w-10 h-10 text-brand-blue" aria-hidden="true" />,
    },
    {
      title: 'Proven Results & ROI',
      description: 'Our results-driven approach delivers measurable ROI and long-term success.',
      icon: <FaChartLine className="w-10 h-10 text-brand-blue" aria-hidden="true" />,
    },
    {
      title: 'Dedicated Support & Maintenance',
      description: 'We provide ongoing support to keep your website secure, updated, and ranking high.',
      icon: <FaTools className="w-10 h-10 text-brand-blue" aria-hidden="true" />,
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Design and Development',
    provider: {
      '@type': 'Organization',
      name: 'Intention Infoservice',
      url: 'https://intentioninfoservice.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Naigaon East, Juchandra',
        addressLocality: 'Naigaon',
        addressRegion: 'Maharashtra',
        postalCode: '401208',
        addressCountry: 'IN',
      },
    },
    description: 'Choose Intention Infoservice for web design and development in 2025 for expert innovation, mobile-first design, SEO excellence, custom solutions, proven ROI, and dedicated support.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Why Choose Us',
      itemListElement: reasons.map((reason, index) => ({
        '@type': 'Service',
        position: index + 1,
        name: reason.title,
        description: reason.description,
      })),
    },
  };

  return (
    <section id="why-choose-us" className="relative bg-dark-950 py-8 md:py-12 overflow-hidden">
      <div className="w-full px-2 sm:px-[10%] relative z-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="absolute inset-0 pointer-events-none z-0">
          {particles.map((particle, index) => (
            <div
              key={index}
              className="particle absolute w-2 h-2 bg-white rounded-full"
              style={{
                top: particle.top,
                left: particle.left,
                opacity: 0,
                animation: `float-${index} ${5 + index * 0.5}s linear infinite`,
              }}
            >
              <style>
                {`
                  @keyframes float-${index} {
                    0% {
                      transform: translateX(-50px);
                      opacity: 0;
                    }
                    50% {
                      opacity: ${particle.opacity};
                    }
                    100% {
                      transform: translateX(1500px);
                      opacity: 0;
                    }
                  }
                `}
              </style>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 pointer-events-none z-0">
          <FaLaptopCode className="floating-icon absolute w-6 h-6 text-brand-blue" style={{ top: '10%', left: '5%', opacity: 0, animation: 'float-icon-1 4s linear infinite' }} />
          <FaMobileAlt className="floating-icon absolute w-5 h-5 text-brand-blue" style={{ top: '20%', left: '15%', opacity: 0, animation: 'float-icon-2 4.4s linear infinite' }} />
          <FaSearch className="floating-icon absolute w-7 h-7 text-brand-blue" style={{ top: '30%', left: '85%', opacity: 0, animation: 'float-icon-3 4.8s linear infinite' }} />
          <FaUsers className="floating-icon absolute w-6 h-6 text-brand-blue" style={{ top: '70%', left: '10%', opacity: 0, animation: 'float-icon-4 5.2s linear infinite' }} />
          <FaChartLine className="floating-icon absolute w-5 h-5 text-brand-blue" style={{ top: '80%', left: '90%', opacity: 0, animation: 'float-icon-5 5.6s linear infinite' }} />
          <style>
            {`
              @keyframes float-icon-1 {
                0% { transform: translateX(-50px); opacity: 0; }
                50% { opacity: 0.5; }
                100% { transform: translateX(1500px); opacity: 0; }
              }
              @keyframes float-icon-2 {
                0% { transform: translateX(-50px); opacity: 0; }
                50% { opacity: 0.4; }
                100% { transform: translateX(1500px); opacity: 0; }
              }
              @keyframes float-icon-3 {
                0% { transform: translateX(-50px); opacity: 0; }
                50% { opacity: 0.5; }
                100% { transform: translateX(1500px); opacity: 0; }
              }
              @keyframes float-icon-4 {
                0% { transform: translateX(-50px); opacity: 0; }
                50% { opacity: 0.3; }
                100% { transform: translateX(1500px); opacity: 0; }
              }
              @keyframes float-icon-5 {
                0% { transform: translateX(-50px); opacity: 0; }
                50% { opacity: 0.4; }
                100% { transform: translateX(1500px); opacity: 0; }
              }
            `}
          </style>
        </div>
        <div className="w-full px-2 sm:px-[10%] relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Why Choose Intention Infoservice for Web Design & Development?
            </motion.h2>
            <motion.p
              className="text-lg text-brand-blue font-semibold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Your Trusted Partner for Digital Success in 2025
            </motion.p>
            <motion.p
              className="text-base text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Discover why businesses trust us to deliver innovative, high-performing websites that drive measurable results.
            </motion.p>
          </div>
          <div className="relative flex justify-center items-center" ref={ref}>
            <motion.div
              className="absolute w-[900px] h-[900px] rounded-full bg-gradient-radial from-brand-blue/30 to-transparent z-0"
              style={{ opacity: glowOpacity }}
            />
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 w-full sm:max-w-5xl mx-auto">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className={`relative backdrop-blur-sm bg-white/10 rounded-lg p-8 border border-[rgba(0,160,227,0.3)] shadow-inner hover:border-brand-blue hover:shadow-[0_0_20px_rgba(0,160,227,0.7)] hover:scale-105 transition-all duration-300 flex flex-col items-center text-center w-full max-w-md mx-auto ${
                    index % 2 === 0 ? 'sm:ml-0 sm:mr-auto rotate-2 md:-translate-y-12' : 'sm:ml-auto sm:mr-0 -rotate-2'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && console.log(`Selected ${reason.title}`)}
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-3">{reason.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                  <p className="text-base text-gray-300">{reason.description}</p>
                </motion.div>
              ))}
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
              ariaLabel="Ready to start your web design and development project? Contact us"
            >
              Ready to Start Your Project? Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
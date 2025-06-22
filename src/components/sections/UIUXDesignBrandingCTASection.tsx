
'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function UIUXDesignBrandingCTASection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(
      '.cta-headline',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        '.cta-subheading',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        '.cta-button',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.7)' },
        '-=0.3'
      );
  }, []);

  return (
    <section ref={sectionRef} className="bg-dark-900 py-12 md:py-16 relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00a0e3]/10 to-[#393185]/10 pointer-events-none" />

      {/* Structured Data for CTA */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'UI/UX Design and Branding Call to Action',
          description: 'Ready to transform your digital presence? Start your UI/UX design and branding project with Intention Infoservice today. Get a free consultation and elevate your brand.',
          callToAction: {
            '@type': 'CallToAction',
            name: 'Get Started Now',
            url: 'https://www.intentioninfoservice.com/contact-us',
          },
        })}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Heading */}
        <motion.h2
          className="cta-headline text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Transform Your Digital Presence?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="cta-subheading text-xl text-gray-400 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Start your UI/UX design and branding project with us today and create experiences that captivate and convert. Get a free consultation and discover your brand's full potential.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="cta-button"
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
            ariaLabel="Start your UI/UX design and branding project today"
          >
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}



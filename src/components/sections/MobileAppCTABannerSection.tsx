'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function MobileAppCTABannerSection() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Mobile App Development CTA',
    description: 'Get a free consultation for mobile app development in 2025 with Intention Infoservice.',
    url: 'https://intentioninfoservice.com/services/mobile-app-development',
    potentialAction: {
      '@type': 'Action',
      name: 'Get a Free Consultation',
      target: 'https://intentioninfoservice.com/contact-us',
    },
  };

  return (
    <section className="cta-banner-section bg-dark-900 py-16 md:py-24 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="bg-gradient-to-r from-brand-blue to-brand-indigo w-full h-full"></div>
      </div>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="50" fill="rgba(0, 160, 227, 0.2)" />
          <circle cx="300" cy="300" r="50" fill="rgba(57, 49, 133, 0.2)" />
          <path d="M50 50C150 150, 250 150, 350 250" stroke="rgba(0, 160, 227, 0.3)" strokeWidth="2" strokeDasharray="10,10" />
        </svg>
      </div>
      <div className="w-full px-[10%] relative z-10 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Build Your Mobile App?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Let’s bring your vision to life with our expert team. Get a free consultation for mobile app development in 2025.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            variant="primary"
            className="text-white font-semibold"
            icon={<FaArrowRight />}
            iconPosition="right"
            href="/contact-us"
            ariaLabel="Get a free consultation for mobile app development"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.05, 1],
              
              transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            Get a Free Consultation Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
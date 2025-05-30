'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function UIUXDesignBrandingCTASection() {
  return (
    <section className="bg-dark-900 py-10 md:py-14 relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00a0e3]/10 to-[#393185]/10 pointer-events-none" />

      {/* Structured Data for CTA */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'UI/UX Design and Branding CTA',
          description: 'Start your UI/UX design and branding project with Intention Infoservice today.',
          callToAction: {
            '@type': 'CallToAction',
            name: 'Get Started Now',
            url: '/contact-us',
          },
        })}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Transform Your Digital Presence?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Start your UI/UX design and branding project with us today and create experiences that captivate and convert.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="btn btn-primary !bg-gradient-to-r !from-[#00a0e3] !to-[#393185] !hover:from-[#006d9e] !hover:to-[#2a2465] text-white font-semibold shadow-lg hover:shadow-[#00a0e3]/40 transition-all duration-300 transform hover:scale-105"
            icon={<FaArrowRight />}
            iconPosition="right"
            href="../contact-us"
            ariaLabel="Start your UI/UX design and branding project today"
          >
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
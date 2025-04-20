'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function WebDesignCTASection() {
  return (
    <section className="bg-gradient-to-b from-dark-950 to-dark-800 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_70%)] opacity-30 pointer-events-none" />
      <div className="w-full px-[10%] relative z-10 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Elevate Your Online Presence?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Let’s create a website that drives traffic, engages visitors, and converts leads into customers.
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
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold shadow-lg hover:shadow-teal-500/40"
            icon={<FaArrowRight />}
            iconPosition="right"
            href="/contact"
          >
            Get a Free Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
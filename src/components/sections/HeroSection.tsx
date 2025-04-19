'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-dark-1000 via-teal-500/20 to-slate-800 py-16 md:py-24 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-dark-950/10 to-transparent opacity-30 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 tracking-tight">
            Innovate Your Digital Future
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            At Intention Infoservice, we craft cutting-edge web, mobile, and marketing solutions to empower your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="primary"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold shadow-lg hover:shadow-teal-500/40"
              icon={<FaArrowRight />}
              iconPosition="right"
              href="/contact"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-400 text-gray-400 hover:bg-gray-400/10 hover:border-gray-300"
              href="/services"
            >
              Discover Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
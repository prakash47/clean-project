'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function AboutSection() {
  const values = [
    'Innovation: We embrace cutting-edge technology to deliver modern solutions.',
    'Integrity: We prioritize transparency and trust in all our partnerships.',
    'Excellence: We strive for the highest quality in every project we undertake.',
  ];

  return (
    <section className="relative bg-dark-950 py-16 md:py-24">
      <div className="container mx-auto w-full px-[10%]">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Who We Are
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Intention Infoservice is a digital solutions provider dedicated to helping businesses thrive in 2025 and beyond.
        </motion.p>
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Our Core Values</h3>
          <ul className="text-gray-400 mb-8 max-w-xl mx-auto">
            {values.map((value, index) => (
              <li key={index} className="mb-2">
                {value}
              </li>
            ))}
          </ul>
          <Button size="lg">
            Learn More About Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
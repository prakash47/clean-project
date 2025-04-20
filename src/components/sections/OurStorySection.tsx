'use client';
import { motion } from 'framer-motion';

export default function OurStorySection() {
  return (
    <section className="bg-dark-900 py-16 md:py-24 relative overflow-hidden">
      <div className="w-full px-[10%] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Story Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Story
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Founded in 2020, Intention Infoservice started with a simple mission: to transform ideas into digital realities. Over the years, we’ve grown into a global leader in web design, mobile app development, and digital marketing, helping businesses worldwide achieve their digital goals.
            </motion.p>
            <motion.p
              className="text-lg text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Our passion for innovation and commitment to quality drives everything we do. We believe in creating solutions that not only meet but exceed our clients’ expectations.
            </motion.p>
          </div>
          {/* Right: Static Image or SVG */}
          <div className="md:w-1/2 flex justify-center">
            <svg width="400" height="300" viewBox="0 0 400 300" className="w-full max-w-[400px]">
              {/* Simple SVG representing growth */}
              <rect x="0" y="0" width="400" height="300" rx="20" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
              <polyline
                points="50,250 100,200 200,220 300,150 350,180"
                fill="none"
                stroke="#10B981"
                strokeWidth="3"
              />
              <circle cx="350" cy="180" r="5" fill="#10B981" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
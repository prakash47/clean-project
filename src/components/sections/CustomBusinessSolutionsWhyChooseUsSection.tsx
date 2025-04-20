'use client';
import { motion } from 'framer-motion';

export default function CustomBusinessSolutionsWhyChooseUsSection() {
  const reasons = [
    {
      title: 'Trend-Driven Solutions',
      description: 'We integrate trending technologies like AI, cloud, and IoT to keep your business ahead of the curve.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M20,10 L20,20 L30,20 M20,10 L20,20 L10,20 M20,10 L20,20 L20,30" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Tailored to Your Needs',
      description: 'Our solutions are custom-built to address your unique challenges, from cybersecurity to customer expectations.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#14B8A6" />
          <path d="M10,20 H30 M20,10 V30" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Scalable & Secure',
      description: 'We design solutions that scale with your business and protect against modern cyber threats.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M20,10 Q20,5 15,5 Q10,5 10,10 V30 Q10,35 20,40 Q30,35 30,30 V10 Q30,5 25,5 Q20,5 20,10 Z" fill="#14B8A6" />
          <path d="M15,25 L20,30 L30,15" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Proven Expertise',
      description: 'Our team has a track record of helping businesses overcome challenges and achieve growth through custom software.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#14B8A6" />
          <path d="M10,20 L15,25 L30,10" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-dark-900 py-16 md:py-24 relative overflow-hidden">
      <div className="w-full px-[10%] relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why We’re Your Trusted Partner for Custom Business Solutions
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover what sets us apart in delivering tailored software.
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Choose us for custom business solutions that leverage the latest technologies to address modern challenges. We help you overcome obstacles like cybersecurity threats and digital transformation resistance while driving efficiency and growth in 2025.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="flex items-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-10 h-10 flex items-center justify-center">{reason.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-base text-gray-400">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
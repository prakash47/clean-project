'use client';
import { motion } from 'framer-motion';

export default function MobileAppWhyChooseUsSection() {
  const reasons = [
    {
      title: 'User-Centric Design',
      description: 'We prioritize UX/UI design to create apps that delight and retain users.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M15,25 Q20,30 25,25" fill="none" stroke="#0F172A" strokeWidth="2" />
          <circle cx="15" cy="15" r="3" fill="#0F172A" />
          <circle cx="25" cy="15" r="3" fill="#0F172A" />
        </svg>
      ),
    },
    {
      title: 'Cross-Platform Expertise',
      description: 'Our expertise in Flutter and React Native ensures cost-effective, unified app experiences.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M10,20 H30 M20,10 V30" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Performance & Security',
      description: 'We optimize apps for speed and implement robust security measures to protect user data.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M20,20 L20,10 A10,10 0 0,1 30,20" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'End-to-End Support',
      description: 'From concept to maintenance, we provide comprehensive support to ensure your app’s success.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M20,0 L30,10 L20,20 L10,10 Z" fill="#14B8A6" />
          <path d="M20,20 L20,30 L10,30 L10,40 L30,40 L30,30 L20,30 Z" fill="#14B8A6" />
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
            Why We’re Your Trusted Mobile App Development Partner
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover what sets us apart in delivering user-friendly, high-performing mobile apps.
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Choose us for mobile app development services that combine innovation, expertise, and results. Our user-centric, performance-optimized approach ensures your app stands out in 2025’s competitive mobile landscape.
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
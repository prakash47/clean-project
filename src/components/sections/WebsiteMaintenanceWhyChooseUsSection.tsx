'use client';
import { motion } from 'framer-motion';

export default function WebsiteMaintenanceWhyChooseUsSection() {
  const reasons = [
    {
      title: 'Proactive Security',
      description: 'We protect your site with advanced security measures and regular monitoring.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M20,10 Q20,5 15,5 Q10,5 10,10 V30 Q10,35 20,40 Q30,35 30,30 V10 Q30,5 25,5 Q20,5 20,10 Z" fill="#14B8A6" />
          <path d="M15,25 L20,30 L30,15" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Performance Focus',
      description: 'We optimize for speed and Core Web Vitals to enhance user experience and SEO.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M20,20 L20,10 A10,10 0 0,1 30,20" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'SEO Expertise',
      description: 'We ensure your site stays competitive with ongoing SEO maintenance.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="0" y="0" width="40" height="30" rx="3" fill="#14B8A6" />
          <path d="M10,25 L15,20 L30,20" fill="none" stroke="#0F172A" strokeWidth="2" />
          <circle cx="15" cy="15" r="3" fill="#0F172A" />
        </svg>
      ),
    },
    {
      title: '24/7 Support',
      description: 'Our team is available round-the-clock to address any issues and keep your site running.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M15,25 Q20,30 25,25" fill="none" stroke="#0F172A" strokeWidth="2" />
          <circle cx="15" cy="15" r="3" fill="#0F172A" />
          <circle cx="25" cy="15" r="3" fill="#0F172A" />
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
            Why Choose Us for Website Maintenance
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover what sets us apart in keeping your website at its best.
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Choose us for website maintenance services that go beyond updates. Our proactive approach ensures your site remains secure, fast, and optimized for search engines in 2025.
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
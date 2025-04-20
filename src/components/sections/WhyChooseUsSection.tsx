'use client';
import { motion } from 'framer-motion';

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: 'SEO-Driven Design',
      description: 'Every website is built with on-page SEO in mind, ensuring higher rankings and organic traffic.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="0" y="0" width="40" height="30" rx="3" fill="#14B8A6" />
          <path d="M10,25 L15,20 L30,20" fill="none" stroke="#0F172A" strokeWidth="2" />
          <circle cx="15" cy="15" r="3" fill="#0F172A" />
        </svg>
      ),
    },
    {
      title: 'Mobile-First Approach',
      description: 'We prioritize mobile-first web development to meet Google’s mobile-first indexing standards.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="0" y="0" width="20" height="35" rx="3" fill="#14B8A6" transform="translate(10, 2.5)" />
          <rect x="3" y="3" width="14" height="29" fill="#0F172A" transform="translate(10, 2.5)" />
        </svg>
      ),
    },
    {
      title: 'Performance Optimization',
      description: 'Our sites are optimized for Core Web Vitals, ensuring fast load times and smooth user experiences.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M20,20 L20,10 A10,10 0 0,1 30,20" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Dedicated Support',
      description: 'From launch to maintenance, our team provides ongoing support to keep your site secure and updated.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M10,25 Q20,30 30,25" fill="none" stroke="#0F172A" strokeWidth="2" />
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
            Why We’re Your Go-To Web Design & Development Partner
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover what sets us apart in delivering SEO-driven, high-performing websites.
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Choose us for custom web design and web development services that combine innovation, expertise, and results. Our mobile-first, SEO-optimized approach ensures your website stands out in 2025’s competitive digital landscape.
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
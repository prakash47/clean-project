'use client';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import { FaCode, FaMobileAlt, FaCog, FaPaintBrush, FaChartLine, FaTools } from 'react-icons/fa';

export default function ServicesSection() {
  const services = [
    {
      icon: <FaCode size={40} className="text-teal-500" />,
      title: 'Web Design & Development',
      description: 'Stunning, responsive websites optimized for performance and SEO.',
    },
    {
      icon: <FaMobileAlt size={40} className="text-teal-500" />,
      title: 'Mobile App Development',
      description: 'Intuitive iOS and Android apps with seamless user experiences.',
    },
    {
      icon: <FaCog size={40} className="text-teal-500" />,
      title: 'Website Maintenance',
      description: 'Reliable updates and security for your digital presence.',
    },
    {
      icon: <FaPaintBrush size={40} className="text-teal-500" />,
      title: 'UI/UX Design & Branding',
      description: 'Memorable designs that elevate your brand identity.',
    },
    {
      icon: <FaChartLine size={40} className="text-teal-500" />,
      title: 'Digital Marketing',
      description: 'Strategic campaigns to boost engagement and growth.',
    },
    {
      icon: <FaTools size={40} className="text-teal-500" />,
      title: 'Custom Business Solutions',
      description: 'Tailored software to optimize your operations.',
    },
  ];

  return (
    <section className="bg-dark-950 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Discover how we can elevate your business with our expert services.
          </p>
        </motion.div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ rotate: 1, boxShadow: '0 0 15px rgba(20, 184, 166, 0.3)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <Card
                className="bg-dark-900 border border-gradient-to-r from-dark-1000 via-teal-500/20 to-dark-1000 rounded-xl shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(255,255,255,0.05)] transition-all duration-300"
                padding="lg"
                hoverEffect
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-dark-1000 rounded-full border border-teal-500/50">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
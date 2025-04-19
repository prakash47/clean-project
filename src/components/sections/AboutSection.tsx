'use client';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

export default function AboutSection() {
  const highlights = [
    'Client-first approach with personalized solutions',
    'Team of creative experts and technical specialists',
    'Cutting-edge technologies and industry best practices',
    'Proven track record of successful project delivery',
    'Ongoing support and maintenance services'
  ];

  return (
    <Section background="white" paddingY="lg" id="about">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* About image */}
        <motion.div 
          className="flex-1 order-2 lg:order-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-secondary-600 rounded-lg opacity-20 blur-lg transform -translate-x-4 translate-y-4"></div>
            <div className="relative bg-white p-2 rounded-lg shadow-xl">
              <div className="aspect-[4/3] bg-gray-100 rounded overflow-hidden">
                {/* Replace with actual image when available */}
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                  <span className="text-sm">About Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* About content */}
        <div className="flex-1 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Intention Infoservice</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Intention Infoservice, we transform ideas into stunning digital realities. As a leading provider of Web Design and Development, Mobile App Development, Digital Marketing, and Graphic Design services, we help businesses thrive in the digital era.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With a client-first approach, cutting-edge technologies, and a team of creative experts, we deliver solutions that drive results.
            </p>
            
            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <FaCheckCircle className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <Button variant="primary" size="lg">Learn More About Us</Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

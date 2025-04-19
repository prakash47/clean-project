'use client';
import { FaArrowRight } from 'react-icons/fa';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <Section 
      background="gradient" 
      paddingY="lg" 
      className="relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-secondary-300 opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Hero content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transform Your Ideas Into <span className="text-secondary-300">Digital Reality</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            At Intention Infoservice, we help businesses thrive in the digital era with cutting-edge web design, development, and marketing solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              size="lg"
              variant="secondary"
              icon={<FaArrowRight />}
              iconPosition="right"
            >
              Get Started
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Our Services
            </Button>
          </motion.div>
        </div>
        
        {/* Hero image */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary-600 rounded-lg opacity-20 blur-lg transform translate-x-4 translate-y-4"></div>
            <div className="relative bg-white p-2 rounded-lg shadow-xl">
              <div className="aspect-[4/3] bg-gray-100 rounded overflow-hidden">
                {/* Replace with actual image when available */}
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                  <span className="text-sm">Hero Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

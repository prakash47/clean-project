'use client';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({
  title = "Ready to Transform Your Digital Presence?",
  description = "Contact us today to discuss your project and discover how we can help your business thrive in the digital world.",
  buttonText = "Get Started",
  buttonLink = "/contact"
}: CTASectionProps) {
  return (
    <Section background="gradient" paddingY="lg">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        
        <motion.p 
          className="text-lg opacity-90 mb-8 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.p>
        
        <div>
          <Button 
            size="lg"
            icon={<FaArrowRight />}
            iconPosition="right"
            href={buttonLink}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </Section>
  );
}
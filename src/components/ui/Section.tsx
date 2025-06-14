'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark' | 'primary' | 'gradient';
  paddingY?: 'none' | 'sm' | 'md' | 'lg';
  container?: boolean;
}

export default function Section({
  children,
  className = '',
  id,
  background = 'white',
  paddingY = 'lg',
  container = true,
}: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-[theme(colors.dark.900)] text-white',
    primary: 'bg-[theme(colors.primary.50)]',
    gradient: 'bg-gradient-to-r from-[theme(colors.primary.600)] to-secondary-600 text-white',
  };
  
  const paddingStyles = {
    none: 'py-0',
    sm: 'py-8',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
  };
  
  return (
    <section
      id={id}
      className={`${backgroundStyles[background]} ${paddingStyles[paddingY]} ${className}`}
    >
      {container ? (
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </section>
  );
}

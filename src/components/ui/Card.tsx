'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverEffect?: boolean;
}

export default function Card({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  hoverEffect = false,
}: CardProps) {
  const baseStyles = 'rounded-lg overflow-hidden';
  
  const variantStyles = {
    default: 'bg-white',
    bordered: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-custom',
  };
  
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };
  
  const hoverStyles = hoverEffect 
    ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' 
    : '';
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
}
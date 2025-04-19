'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  href,
  onClick,
  disabled = false,
  type = 'button'
}: ButtonProps) {
  // Define base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500';
  
  // Size classes
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5 rounded',
    md: 'text-base px-4 py-2 rounded-md',
    lg: 'text-lg px-6 py-3 rounded-md'
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'bg-white hover:bg-gray-100 text-primary-600 border border-primary-600',
    outline: 'bg-transparent hover:bg-gray-50 text-gray-700 border border-gray-300',
    text: 'bg-transparent hover:text-primary-700 text-primary-600 hover:underline'
  };
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Disabled classes
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClasses} ${disabledClasses} ${className}`;
  
  // Icon rendering
  const renderIcon = () => {
    if (!icon) return null;
    return <span className={`${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`}>{icon}</span>;
  };
  
  // Content with icon
  const content = (
    <>
      {iconPosition === 'left' && renderIcon()}
      {children}
      {iconPosition === 'right' && renderIcon()}
    </>
  );
  
  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }
  
  // Otherwise render as button
  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}

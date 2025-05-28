'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

// Define possible values for size
type Size = 'sm' | 'md' | 'lg';

// Define the ButtonProps interface
interface ButtonProps {
  size?: Size;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  children: ReactNode;
}

export default function Button({
  size = 'md',
  className = '',
  icon,
  iconPosition = 'left',
  href,
  type,
  ariaLabel,
  children,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue bg-gradient-to-r from-brand-indigo to-brand-blue text-white shadow-lg border-2 border-brand-blue hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-indigo hover:shadow-brand-blue/40`;
  const sizeClasses: Record<Size, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  const motionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.6 },
    whileTap: { scale: 0.95 },
  };

  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button {...motionProps} type={type} className={classes} aria-label={ariaLabel}>
      {content}
    </motion.button>
  );
}
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

// Define possible values for size and variant
type Size = 'sm' | 'md' | 'lg';
type Variant = 'primary' | 'secondary' | 'text' | 'hero';

// Define the ButtonProps interface
interface ButtonProps {
  size?: Size;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  ariaLabel?: string;
  children: ReactNode;
  // Include framer-motion props for both motion.div and motion.button
  whileHover?: React.ComponentProps<typeof motion.div>['whileHover'] &
    React.ComponentProps<typeof motion.button>['whileHover'];
  whileTap?: React.ComponentProps<typeof motion.div>['whileTap'] &
    React.ComponentProps<typeof motion.button>['whileTap'];
  animate?: React.ComponentProps<typeof motion.div>['animate'] &
    React.ComponentProps<typeof motion.button>['animate'];
  transition?: React.ComponentProps<typeof motion.div>['transition'] &
    React.ComponentProps<typeof motion.button>['transition'];
  initial?: React.ComponentProps<typeof motion.div>['initial'] &
    React.ComponentProps<typeof motion.button>['initial'];
}

export default function Button({
  size = 'md',
  variant = 'primary',
  className = '',
  icon,
  iconPosition = 'left',
  href,
  ariaLabel,
  children,
  whileHover,
  whileTap,
  animate,
  transition,
  initial,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue`;
  const sizeClasses: Record<Size, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  const variantClasses: Record<Variant, string> = {
    primary: 'bg-transparent text-white border-2 border-brand-blue hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-indigo [background-clip:content-box]',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    text: 'bg-transparent text-brand-blue hover:text-brand-indigo',
    hero: 'bg-gradient-to-r from-brand-blue/80 to-cyan-500/80 text-white border-2 border-[rgba(255,255,255,0.2)] backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-gradient-to-r hover:from-brand-blue/80 hover:to-brand-indigo/80',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  const motionProps = {
    whileHover,
    whileTap,
    animate,
    transition,
    initial,
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
    <motion.button {...motionProps} className={classes} aria-label={ariaLabel}>
      {content}
    </motion.button>
  );
}
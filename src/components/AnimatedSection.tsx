'use client';

   import { motion } from 'framer-motion';
   import { ReactNode } from 'react';

   interface AnimatedSectionProps {
     children: ReactNode;
     initial?: Record<string, any>;
     animate?: Record<string, any>;
     transition?: Record<string, any>;
     className?: string;
     delay?: number;
   }

   export default function AnimatedSection({
     children,
     initial = { opacity: 0, y: 20 },
     animate = { opacity: 1, y: 0 },
     transition = { duration: 0.8 },
     className = '',
     delay = 0,
   }: AnimatedSectionProps) {
     return (
       <motion.div
         initial={initial}
         animate={animate}
         transition={{ ...transition, delay }}
         className={className}
       >
         {children}
       </motion.div>
     );
   }
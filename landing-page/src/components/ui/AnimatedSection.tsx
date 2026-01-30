'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationType = 'fadeInUp' | 'fadeIn' | 'slideInLeft' | 'slideInRight';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

const animationVariants = {
  fadeInUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
  },
};

export default function AnimatedSection({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className,
}: AnimatedSectionProps) {
  const variant = animationVariants[animation];

  return (
    <motion.div
      initial={variant.initial}
      whileInView={variant.animate}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

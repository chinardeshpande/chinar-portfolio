'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp, defaultViewportOptions } from '@/lib/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0
}: AnimatedSectionProps) {
  const customVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewportOptions}
      variants={customVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

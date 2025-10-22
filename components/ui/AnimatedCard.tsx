'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cardHover } from '@/lib/animations';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  delay?: number;
}

export default function AnimatedCard({
  children,
  className = '',
  onClick,
  delay = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
            delay,
          },
        },
        hover: {
          y: -8,
          transition: {
            duration: 0.3,
            ease: 'easeOut',
          },
        },
      }}
      className={className}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {children}
    </motion.div>
  );
}

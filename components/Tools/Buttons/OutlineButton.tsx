"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

interface OutlineButtonProps {
  to: string;
  label: string;
  ariaLabel?: string;
}

const OutlineButton = ({ to, label, ariaLabel }: OutlineButtonProps) => (
  <Link href={to}>
    <motion.button
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      aria-label={ariaLabel || label}
      variants={{
        rest: {
          scale: 1,
          y: 0,
          boxShadow: '0px 0px 0px rgba(0,0,0,0)',
        },
        hover: {
          scale: 1.08,
          y: -2,
          boxShadow: '0px 8px 25px rgba(20, 184, 166, 0.3)',
          transition: {
            type: 'spring',
            stiffness: 280,
            damping: 18,
          },
        },
        tap: {
          scale: 0.95,
          y: 1,
          boxShadow: '0px 4px 15px rgba(20, 184, 166, 0.2)',
          transition: {
            type: 'spring',
            stiffness: 280,
            damping: 18,
          },
        },
      }}
      className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg
                 transition-all font-medium text-lg
                 dark:border-teal-400 dark:text-teal-400"
    >
      {label}
    </motion.button>
  </Link>
);

export default OutlineButton;

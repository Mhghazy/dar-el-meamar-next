"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

interface PrimaryButtonProps {
  to: string;
  label: string;
  ariaLabel?: string;
}

const PrimaryButton = ({ to, label, ariaLabel }: PrimaryButtonProps) => (
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
          boxShadow: '0px 8px 25px rgba(20, 184, 166, 0.5)',
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
          },
        },
        tap: {
          scale: 0.95,
          y: 1,
          boxShadow: '0px 4px 15px rgba(20, 184, 166, 0.3)',
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
          },
        },
      }}
      className="bg-teal-600 text-white px-8 py-4 rounded-lg
                 transition-all font-medium text-lg
                 dark:bg-teal-500 dark:text-gray-900"
    >
      {label}
    </motion.button>
  </Link>
);

export default PrimaryButton;

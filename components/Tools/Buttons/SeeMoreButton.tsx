"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

interface SeeMoreButtonProps {
  to: string;
  label: string;
  ariaLabel?: string;
}

const SeeMoreButton = ({ to, label, ariaLabel }: SeeMoreButtonProps) => (
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
          boxShadow: '0px 8px 25px rgba(20, 184, 166, 0.4)',
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
      className="bg-teal-600 dark:bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold
                 transition-all"
    >
      {label}
    </motion.button>
  </Link>
);

export default SeeMoreButton;

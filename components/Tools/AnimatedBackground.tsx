"use client";
import craneImage from '../../assets/cranesafety.webp';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <motion.div
      initial={{ scale: 1.05 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 20, repeat: Infinity }}
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 dark:opacity-10
      "
      style={{
        backgroundImage: `url(${craneImage})`,
      }}
    />
  );
};

export default AnimatedBackground;

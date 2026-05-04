"use client";
import { motion } from 'framer-motion';
import { blueprintDraw } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';

const BlueprintAnimation = () => {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid Background */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-teal-300 dark:text-teal-700"
            opacity="0.3"
          />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#grid)" />

      {/* Building Outline - Drawing Animation */}
      <motion.path
        d="M 80 220 L 80 80 L 200 80 L 200 50 L 320 50 L 320 220 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-teal-600 dark:text-teal-400"
        variants={blueprintDraw}
        initial="hidden"
        animate="visible"
      />

      {/* Windows - Left Section */}
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2].map((col) => (
          <motion.rect
            key={`window-left-${row}-${col}`}
            x={90 + col * 30}
            y={100 + row * 30}
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-teal-500 dark:text-teal-300"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 2 + (row * 3 + col) * 0.1,
              duration: 0.3,
            }}
          />
        ))
      )}

      {/* Windows - Right Section */}
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2].map((col) => (
          <motion.rect
            key={`window-right-${row}-${col}`}
            x={220 + col * 30}
            y={70 + row * 30}
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-teal-500 dark:text-teal-300"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 2.5 + (row * 3 + col) * 0.1,
              duration: 0.3,
            }}
          />
        ))
      )}

      {/* Door */}
      <motion.rect
        x="140"
        y="180"
        width="40"
        height="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-teal-600 dark:text-teal-400"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 3.5, duration: 0.4 }}
        style={{ transformOrigin: 'bottom' }}
      />

      {/* Dimension Lines */}
      <motion.line
        x1="80"
        y1="230"
        x2="320"
        y2="230"
        stroke="currentColor"
        strokeWidth="1"
        className="text-yellow-500 dark:text-yellow-400"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 4, duration: 0.8 }}
      />
      <motion.line
        x1="80"
        y1="225"
        x2="80"
        y2="235"
        stroke="currentColor"
        strokeWidth="1"
        className="text-yellow-500 dark:text-yellow-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 0.3 }}
      />
      <motion.line
        x1="320"
        y1="225"
        x2="320"
        y2="235"
        stroke="currentColor"
        strokeWidth="1"
        className="text-yellow-500 dark:text-yellow-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 0.3 }}
      />

      {/* Measurement Text */}
      <motion.text
        x="200"
        y="250"
        textAnchor="middle"
        className="text-sm font-mono fill-current text-teal-700 dark:text-teal-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.8, duration: 0.5 }}
      >
        240 ft
      </motion.text>

      {/* Title */}
      <motion.text
        x={isArabic ? "280" : "20"}
        y="30"
        textAnchor={isArabic ? "end" : "start"}
        className="text-lg font-bold fill-current text-teal-700 dark:text-teal-300"
        initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 5, duration: 0.5 }}
      >
        {t.about.blueprint}
      </motion.text>
    </svg>
  );
};

export default BlueprintAnimation;


"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ConstructionProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full space-y-4 p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          Construction Progress
        </span>
        <span className="text-sm font-bold text-teal-700 dark:text-teal-300">
          {progress}%
        </span>
      </div>

      {/* Progress Bar */}
      <div
        className="relative h-10 bg-gray-300 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
        aria-label="Construction progress"
      >
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-600 to-teal-700 dark:from-teal-500 dark:to-teal-600 rounded-l-lg shadow-[0_6px_30px_rgba(16,185,129,0.12)]"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.28 }}
        />

        {/* Animated stripes */}
        <motion.div
          className="absolute inset-0 opacity-50 mix-blend-overlay"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.28) 8px, rgba(255,255,255,0.28) 16px)',
            filter: 'blur(0.2px)'
          }}
          animate={{
            x: [0, 24],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Glowing effect */}
        <motion.div
          className="absolute inset-y-0 right-0 bg-gradient-to-r from-transparent to-white/30"
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ width: progress > 8 ? '80px' : '0px' }}
        />
      </div>

      {/* Mini construction icons */}
      <div className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-teal-600 rounded-full animate-pulse shadow-md" />
          <span className="font-medium">Building in progress...</span>
        </div>
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-5 bg-teal-600 rounded-sm shadow-inner"
              animate={{
                scaleY: [0.6, 1.05, 0.6],
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConstructionProgress;


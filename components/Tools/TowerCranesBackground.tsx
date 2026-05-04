"use client";
import { motion } from 'framer-motion';

const TowerCranesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
      {/* Left Crane */}
      <motion.div
        className="absolute left-[10%] bottom-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Crane Tower */}
        <div className="relative">
          <motion.div
            className="w-3 bg-gradient-to-b from-gray-600 to-gray-800 dark:from-gray-500 dark:to-gray-700"
            initial={{ height: 0 }}
            animate={{ height: 350 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
          
          {/* Crane Arm */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 origin-left"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1, rotate: -2 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <div className="flex items-center">
              <div className="w-40 h-2 bg-gradient-to-r from-yellow-600 to-yellow-500 dark:from-yellow-500 dark:to-yellow-400" />
              {/* Hook Cable */}
              <motion.div
                className="w-0.5 h-20 bg-gray-700 dark:bg-gray-600 ml-32"
                animate={{
                  height: [80, 100, 80],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Center Crane */}
      <motion.div
        className="absolute left-[45%] bottom-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Crane Tower */}
        <div className="relative">
          <motion.div
            className="w-4 bg-gradient-to-b from-gray-600 to-gray-800 dark:from-gray-500 dark:to-gray-700"
            initial={{ height: 0 }}
            animate={{ height: 420 }}
            transition={{ duration: 2.2, ease: 'easeOut', delay: 0.3 }}
          />
          
          {/* Crane Arm */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 origin-left"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1, rotate: 3 }}
            transition={{ duration: 1.5, delay: 1.3 }}
          >
            <div className="flex items-center">
              <div className="w-48 h-2.5 bg-gradient-to-r from-yellow-600 to-yellow-500 dark:from-yellow-500 dark:to-yellow-400" />
              {/* Hook Cable */}
              <motion.div
                className="w-0.5 h-24 bg-gray-700 dark:bg-gray-600 ml-36"
                animate={{
                  height: [96, 120, 96],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>

          {/* Counter Weight */}
          <motion.div
            className="absolute top-0 right-0 w-8 h-6 bg-gray-700 dark:bg-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          />
        </div>
      </motion.div>

      {/* Right Crane */}
      <motion.div
        className="absolute right-[15%] bottom-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* Crane Tower */}
        <div className="relative">
          <motion.div
            className="w-3 bg-gradient-to-b from-gray-600 to-gray-800 dark:from-gray-500 dark:to-gray-700"
            initial={{ height: 0 }}
            animate={{ height: 380 }}
            transition={{ duration: 2.4, ease: 'easeOut', delay: 0.6 }}
          />
          
          {/* Crane Arm */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 origin-left"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1, rotate: -4 }}
            transition={{ duration: 1.5, delay: 1.6 }}
          >
            <div className="flex items-center">
              <div className="w-44 h-2 bg-gradient-to-r from-yellow-600 to-yellow-500 dark:from-yellow-500 dark:to-yellow-400" />
              {/* Hook Cable */}
              <motion.div
                className="w-0.5 h-16 bg-gray-700 dark:bg-gray-600 ml-28"
                animate={{
                  height: [64, 90, 64],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Dust Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"
          style={{
            left: `${10 + i * 10}%`,
            bottom: `${20 + (i % 3) * 15}%`,
          }}
          animate={{
            y: [-10, -30, -10],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default TowerCranesBackground;


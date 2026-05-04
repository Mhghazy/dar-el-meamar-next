"use client";
import { motion } from 'framer-motion';

const FloatingConstructionSite = () => {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Sun/Moon in background */}
      <motion.div
        className="absolute top-8 right-8 w-16 h-16 bg-yellow-400 dark:bg-blue-200 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          className="absolute inset-0 bg-yellow-300 dark:bg-blue-100 rounded-full blur-xl opacity-50"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Cloud 1 */}
      <motion.div
        className="absolute top-12 left-10"
        animate={{
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="flex gap-2">
          <div className="w-8 h-6 bg-white/70 dark:bg-gray-400/30 rounded-full" />
          <div className="w-10 h-8 bg-white/70 dark:bg-gray-400/30 rounded-full -ml-4" />
          <div className="w-6 h-6 bg-white/70 dark:bg-gray-400/30 rounded-full -ml-3" />
        </div>
      </motion.div>

      {/* Cloud 2 */}
      <motion.div
        className="absolute top-20 right-24"
        animate={{
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="flex gap-2">
          <div className="w-6 h-5 bg-white/60 dark:bg-gray-400/20 rounded-full" />
          <div className="w-8 h-6 bg-white/60 dark:bg-gray-400/20 rounded-full -ml-3" />
          <div className="w-5 h-5 bg-white/60 dark:bg-gray-400/20 rounded-full -ml-2" />
        </div>
      </motion.div>

      {/* Main Construction Site */}
      <div className="relative">
        {/* Building under construction */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Floors */}
          <div className="flex flex-col-reverse gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0, originY: 1 }}
                animate={{ scaleY: 1, originY: 1 }}
                transition={{
                  delay: i * 0.3,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
                className="w-64 h-12 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded-sm relative overflow-hidden"
              >
                {/* Windows */}
                <div className="absolute inset-0 flex items-center justify-around px-3">
                  {[...Array(8)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.3 + j * 0.05 + 0.5 }}
                      className="w-5 h-7 bg-cyan-300 dark:bg-cyan-400 rounded-sm"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Foundation */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="w-72 h-6 bg-gray-600 dark:bg-gray-800 rounded-sm mt-1 -ml-4"
          />
        </motion.div>

        {/* Crane */}
        <motion.div
          className="absolute -top-32 right-8 origin-bottom"
          initial={{ rotate: 0 }}
          animate={{ rotate: [-3, 3, -3] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Crane tower */}
          <div className="w-3 h-40 bg-yellow-500 dark:bg-yellow-600 relative">
            {/* Crane arm */}
            <div className="absolute -top-2 -left-20 w-32 h-2 bg-yellow-500 dark:bg-yellow-600" />
            {/* Hook */}
            <motion.div
              className="absolute -top-2 left-12"
              animate={{
                y: [0, 30, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="w-0.5 h-16 bg-gray-800 dark:bg-gray-300" />
              <div className="w-6 h-4 bg-gray-700 dark:bg-gray-400 rounded-sm" />
            </motion.div>
            {/* Crane cabin */}
            <div className="absolute -top-4 -left-2 w-7 h-6 bg-yellow-600 dark:bg-yellow-700 rounded-sm" />
          </div>
        </motion.div>

        {/* Worker (helmet) */}
        <motion.div
          className="absolute -bottom-2 left-8"
          animate={{
            x: [0, 20, 40, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="w-4 h-3 bg-yellow-500 dark:bg-yellow-400 rounded-t-full" />
          <div className="w-4 h-6 bg-orange-600 dark:bg-orange-500 rounded-sm mx-auto" />
        </motion.div>

        {/* Construction materials */}
        <motion.div
          className="absolute -bottom-8 right-12 flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-6 h-6 bg-orange-700 dark:bg-orange-800 rounded-sm"
              style={{ transform: `rotate(${i * 15}deg)` }}
            />
          ))}
        </motion.div>
      </div>

      {/* Sparkles/dust particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400 dark:bg-yellow-300 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${40 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingConstructionSite;


"use client";
import { motion } from 'framer-motion';

const ConstructionBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Subtle Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-6">
        <defs>
          <pattern id="construction-grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
              className="text-teal-900 dark:text-teal-300"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#construction-grid)" />
      </svg>

      {/* Floating Tools Layer */}
      <div className="absolute inset-0 opacity-70 dark:opacity-50">
        {/* Hammer */}
        <motion.div
          className="absolute top-20 left-8 drop-shadow-lg"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="86" height="86" viewBox="0 0 24 24" className="text-teal-600">
            <path d="M14 7l-7 7-2-2 7-7 2 2z" fill="currentColor" opacity="0.88" />
            <rect x="15" y="3" width="6" height="4" rx="1" fill="currentColor" opacity="0.95" />
            <circle cx="4" cy="18" r="3" fill="currentColor" opacity="0.85" />
          </svg>
        </motion.div>

        {/* Hard Hat */}
        <motion.div
          className="absolute top-1/3 right-2/4 drop-shadow-md"
          animate={{ y: [0, -30, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <svg width="72" height="72" viewBox="0 0 24 24" className="text-yellow-500">
            <path d="M12 3c-4 0-7 3-7 7v2h14v-2c0-4-3-7-7-7z" fill="currentColor" opacity="0.9" />
            <rect x="3" y="12" width="18" height="3" rx="1" fill="currentColor" opacity="0.95" />
            <circle cx="12" cy="8" r="1" fill="white" />
          </svg>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-60 dark:opacity-40">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-teal-500 dark:bg-t rounded-full shadow-sm"
            style={{
              left: `${4 + (i * 7.5)}%`,
              top: `${8 + (i % 5) * 18}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.85, 0],
              scale: [0, 1.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.35,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Building Silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around opacity-45 dark:opacity-45">
        {[80, 120, 70, 100, 85].map((height, i) => (
          <motion.div
            key={i}
            className="rounded-t-lg shadow-inner"
            style={{ width: '15%', height: `${height}px`, background: 'linear-gradient(to top, #064e3b, #0ea5a9)' }}
            animate={{
              height: [`${height * 0.75}px`, `${height}px`, `${height * 0.75}px`],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
          >
            <div className="grid grid-cols-2 gap-0.5 p-1">
              {[...Array(Math.floor(height / 18))].map((_, j) => (
                <motion.div
                  key={j}
                  className="bg-yellow-400 h-1.5 rounded-sm"
                  animate={{ opacity: [0.3, 0.95, 0.3] }}
                  transition={{
                    duration: 2,
                    delay: j * 0.08 + i * 0.25,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Crane */}
      <motion.div
        className="absolute top-1 right-24 opacity-45 dark:opacity-50 drop-shadow-xl"
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="160" height="220" viewBox="0 0 120 180" className="text-teal-700">
          <rect x="58" y="50" width="6" height="130" fill="currentColor" />
          <rect x="8" y="48" width="104" height="4" fill="currentColor" />
          <rect x="54" y="44" width="14" height="9" fill="currentColor" />
        </svg>
      </motion.div>
    </div>
  );
};

export default ConstructionBackground;


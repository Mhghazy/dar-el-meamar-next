"use client";
import { motion } from 'framer-motion';
import {
  floorByFloor,
  floor,
  craneSwing,
  pulseGlow,
  scaffoldingBuild,
  scaffoldPiece,
} from '../../utils/animations';

const AnimatedBuilding = () => {
  return (
    <div className="relative w-full h-full flex items-end justify-center p-8">
      {/* Crane */}
      <motion.div
        variants={craneSwing}
        initial="rest"
        animate="animate"
        className="absolute top-4 right-8 origin-bottom"
        style={{ transformOrigin: 'bottom center' }}
      >
        <div className="w-1 h-32 bg-yellow-500 dark:bg-yellow-400 relative">
          <div className="absolute -top-2 -left-3 w-7 h-4 bg-yellow-600 dark:bg-yellow-500 rounded-sm"></div>
          <div className="absolute top-8 -right-16 w-16 h-1 bg-yellow-500 dark:bg-yellow-400"></div>
          <div className="absolute top-8 right-0 w-1 h-12 bg-yellow-400 dark:bg-yellow-300"></div>
        </div>
      </motion.div>

      {/* Building Structure */}
      <motion.div
        variants={floorByFloor}
        initial="hidden"
        animate="visible"
        className="relative flex flex-col-reverse gap-1 items-center"
      >
        {/* Foundation */}
        <motion.div
          variants={floor}
          className="w-48 h-3 bg-gray-700 dark:bg-gray-600 rounded-sm"
        />

        {/* Floors - Building from bottom to top */}
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            variants={floor}
            className="relative w-48 h-8 bg-gradient-to-r from-teal-600 to-teal-700 dark:from-teal-500 dark:to-teal-600 rounded-sm overflow-hidden"
          >
            {/* Windows */}
            <div className="absolute inset-0 flex items-center justify-around px-2">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 + i * 0.05 + 0.5 }}
                  className="w-4 h-5 bg-yellow-300 dark:bg-yellow-200 rounded-sm shadow-inner"
                />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Roof */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="w-56 h-4 bg-red-700 dark:bg-red-600"
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
        />
      </motion.div>

      {/* Scaffolding */}
      <motion.div
        variants={scaffoldingBuild}
        initial="hidden"
        animate="visible"
        className="absolute left-8 bottom-8 flex flex-col gap-4"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            variants={scaffoldPiece}
            className="w-12 h-1 bg-gray-400 dark:bg-gray-500"
          />
        ))}
      </motion.div>

      {/* Construction particles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="absolute bottom-20 right-16"
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [-20, -40],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
          />
        ))}
      </motion.div>

      {/* Glowing base effect */}
      <motion.div
        variants={pulseGlow}
        initial="rest"
        animate="animate"
        className="absolute -bottom-4 w-56 h-2 bg-teal-500/30 dark:bg-teal-400/30 blur-xl rounded-full"
      />
    </div>
  );
};

export default AnimatedBuilding;


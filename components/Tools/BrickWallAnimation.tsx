"use client";
import { motion } from 'framer-motion';
import { brickByBrick, brick } from '../../utils/animations';

const BrickWallAnimation = () => {
  const rows = 6;
  const bricksPerRow = 8;

  return (
    <div className="w-full h-64 flex items-end justify-center p-4">
      <motion.div
        variants={brickByBrick}
        initial="hidden"
        animate="visible"
        className="flex flex-col-reverse gap-1"
      >
        {[...Array(rows)].map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="flex gap-1"
            style={{
              paddingLeft: rowIndex % 2 === 0 ? '0' : '1rem',
            }}
          >
            {[...Array(rowIndex % 2 === 0 ? bricksPerRow : bricksPerRow - 1)].map(
              (_, brickIndex) => (
                <motion.div
                  key={brickIndex}
                  variants={brick}
                  className="w-8 h-6 bg-gradient-to-br from-red-600 to-red-800 dark:from-red-700 dark:to-red-900 rounded-sm relative overflow-hidden"
                >
                  {/* Brick texture */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-px bg-red-900 dark:bg-red-950 absolute top-1/2" />
                    <div className="w-px h-full bg-red-900 dark:bg-red-950 absolute left-1/2" />
                  </div>
                  {/* Highlight */}
                  <div className="absolute top-0 left-0 w-full h-px bg-red-400 opacity-30" />
                </motion.div>
              )
            )}
          </div>
        ))}
        {/* Foundation */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full h-4 bg-gray-700 dark:bg-gray-600 rounded-sm mt-1"
        />
      </motion.div>
    </div>
  );
};

export default BrickWallAnimation;


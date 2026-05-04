"use client";
// components/StatsGrid.tsx
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from "../utils/animations";
import CountUp from "./Tools/motion/CountUp";
import React from "react";

type Stat = {
  value: string;
  suffix?: string;
  label: string;
};

type StatsGridProps = {
  stats: Stat[];
};

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  const getVariant = (idx: number) => {
    switch (idx) {
      case 0:
        return fadeInLeft;
      case 1:
        return scaleIn;
      case 2:
        return fadeInUp;
      default:
        return fadeInRight;
    }
  };

  return (
    <motion.div
      className="grid md:grid-cols-4 gap-8 text-center"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {stats.map((stat, idx) => (
        <motion.div key={idx} variants={getVariant(idx)} className="space-y-2">
          <motion.p variants={scaleIn} className="text-5xl font-bold dark:text-teal-400">
            <CountUp
              from={0}
              to={parseInt(stat.value.replace(/,/g, ""))}
              separator=","
              direction="up"
              duration={1.5}
              className="text-5xl font-bold text-white dark:text-teal-400"
            />
            {stat.suffix && (
              <span className="text-5xl font-bold">{stat.suffix}</span>
            )}
          </motion.p>
          <motion.p variants={fadeIn} className="text-teal-100 dark:text-gray-400 text-lg">
            {stat.label}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsGrid;


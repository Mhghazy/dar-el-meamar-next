"use client";
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Read saved theme once on mount — never write on this effect
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setDarkMode(shouldBeDark);
    setMounted(true);
  }, []);

  // Apply theme to <html> and persist — only when user actively toggles
  // (mounted guard ensures this doesn't run before we've read localStorage)
  const toggle = () => {
    const next = !darkMode;
    setDarkMode(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Don't render until mounted to avoid SSR mismatch
  if (!mounted) {
    return (
      <motion.button
        variants={fadeInUp}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors"
        aria-label="Toggle theme"
      >
        <div className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <motion.button
      variants={fadeInUp}
      onClick={toggle}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800 dark:text-gray-200" />}
    </motion.button>
  );
};

export default ThemeToggle;

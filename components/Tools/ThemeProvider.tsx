"use client";
import { useEffect } from 'react';

/**
 * ThemeProvider — runs once on mount to sync the <html> class
 * with the user's saved preference, then listens for changes
 * made by ThemeToggle across all pages.
 */
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Apply the saved theme immediately on mount
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved === 'dark' || (!saved && prefersDark);

    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return <>{children}</>;
}

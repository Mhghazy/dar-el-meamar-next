"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function RefinedFAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);
  const intro = t.faqServicesIntro;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <h3 className="text-3xl font-semibold mb-3">{intro.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{intro.subtitle}</p>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-4">
              {t.faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`bg-white dark:bg-gray-800 rounded-xl shadow transition transform hover:-translate-y-0.5 hover:shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between p-6 text-start"
                    >
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white">{item.q}</h4>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.35 }}
                        className="text-teal-600 dark:text-teal-400 shrink-0 ms-4"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="px-6 pb-6 pt-0 text-gray-700 dark:text-gray-300"
                        >
                          <p className="leading-relaxed">{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg mb-4">{intro.stillQuestions}</p>
              <Link href="/contact" className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:opacity-90">
                {intro.contactButton}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

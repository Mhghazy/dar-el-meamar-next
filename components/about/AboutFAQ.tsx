"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronDown, HelpCircle } from 'lucide-react';

const AboutFAQ: React.FC = () => {
  const { t, language } = useLanguage();
  const faq = t.aboutPage.faq as {
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden py-24
                        bg-white dark:bg-gray-950
                        transition-colors duration-300">
      {/* Teal grid decoration */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
           style={{
             backgroundImage:
               'linear-gradient(rgba(20,184,166,1) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,1) 1px, transparent 1px)',
             backgroundSize: '60px 60px',
           }} />
      {/* Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[700px] h-[400px] bg-teal-400/5 dark:bg-teal-500/8 blur-[120px] rounded-full" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={scaleIn} className="inline-flex items-center gap-2 mb-5">
            <HelpCircle size={18} className="text-teal-500" />
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold tracking-[0.2em] uppercase">
              FAQ
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {faq.title}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {faq.subtitle}
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {faq.items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden
                            ${isOpen
                              ? 'border-teal-400/50 dark:border-teal-500/40 shadow-[0_0_24px_rgba(20,184,166,0.12)]'
                              : 'border-gray-200 dark:border-gray-800 hover:border-teal-300/40 dark:hover:border-teal-700/40'
                            }
                            bg-white dark:bg-gray-900`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4
                             px-6 py-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className={`flex-shrink-0 flex items-center justify-center
                                     w-8 h-8 rounded-xl text-sm font-black
                                     transition-all duration-300
                                     ${isOpen
                                       ? 'bg-teal-500 text-white'
                                       : 'bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400'
                                     }`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`font-semibold text-base leading-snug transition-colors
                                     ${isOpen
                                       ? 'text-teal-700 dark:text-teal-300'
                                       : 'text-gray-800 dark:text-gray-200'
                                     }`}>
                      {item.q}
                    </span>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex-shrink-0 transition-colors ${isOpen ? 'text-teal-500' : 'text-gray-400'}`}
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="px-6 pb-6">
                        <div className="ml-12 pl-4 border-l-2 border-teal-400/40">
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA nudge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
          {language === 'ar'
              ? 'لديك سؤال آخر؟ '
              : 'Have more questions? '}
            <a href="/contact"
               className="text-teal-600 dark:text-teal-400 font-semibold hover:underline">
              {language === 'ar' ? 'تواصل معنا' : 'Contact us →'}
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutFAQ;

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const RefinedFAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const intro = t.faqWorksIntro;

  return (
    <section className="py-32 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4"
          >
            {intro.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 font-light"
          >
            {intro.subtitle}
          </motion.p>
        </div>

        <div className="space-y-2">
          {t.faqItems.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-100 dark:border-gray-800 last:border-0 overflow-hidden">
      <button
        type="button"
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-start group outline-none"
      >
        <h4
          className={`text-xl md:text-2xl font-light transition-all duration-300 ${
            isOpen
              ? 'text-teal-600 dark:text-teal-400 translate-x-2 rtl:-translate-x-2'
              : 'text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1'
          }`}
        >
          {question}
        </h4>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-gray-400 shrink-0 ms-4">
          <ChevronDown size={28} strokeWidth={1} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="pb-8 text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RefinedFAQ;

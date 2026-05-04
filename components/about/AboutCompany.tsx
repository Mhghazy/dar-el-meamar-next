"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';
import ConstructionBackground from '../Tools/ConstructionBackground';

const AboutCompany: React.FC = () => {
  const { t, language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.aboutPage.company.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.aboutPage.company.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <>
                {(Object.values(t.aboutPage.company.paragraphs) as string[]).map((p, i) => (
                  <React.Fragment key={i}>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {p}
                    </p>
                    {i === 0 && (
                      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-bold tracking-wide text-teal-700 dark:text-teal-400 italic">
                        "{t.aboutPage.company.quote}"
                      </p>
                    )}
                  </React.Fragment>
                ))}
              </>
          </motion.div>

          <motion.div 
            variants={fadeInRight} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="relative w-full bg-gradient-to-br from-teal-50 to-teal-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(20,184,166,0.3)] transition-shadow duration-300 overflow-hidden min-h-[320px] md:min-h-[420px]"
          >
            {isMounted && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full flex items-center justify-center">
                  <ConstructionBackground />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;

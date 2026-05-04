"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const WorksAwards: React.FC = () => {
  const { t } = useLanguage();
  const awardsFromT = t.worksPage?.awards || [];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div className="text-center mb-16" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t.worksPage?.awardsSection?.title || 'Awards & Recognition'}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t.worksPage?.awardsSection?.subtitle || 'Celebrating our industry accolades'}</p>
        </motion.div>
        {/* Awards */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {awardsFromT.map((award: any, index: number) => (
            <motion.div key={index} variants={fadeInUp} className="bg-gradient-to-br from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-teal-500 dark:border-teal-400">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-lg">
                  <Award className="text-teal-600 dark:text-teal-400" size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-teal-600 dark:text-teal-400 font-semibold mb-1">{award.year}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{award.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{award.organization}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorksAwards;


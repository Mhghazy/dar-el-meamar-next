"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn, staggerContainer } from '../../utils/animations';
import { Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const WorksCertifications: React.FC = () => {
  const { t } = useLanguage();
  const certificationsFromT = t.worksPage?.certifications || [];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div className="text-center mb-16" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t.worksPage?.certificationsSection?.title || 'Certifications'}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t.worksPage?.certificationsSection?.subtitle || 'Internationally recognized standards we uphold'}</p>
        </motion.div>

        {/* Certifications */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {certificationsFromT.map((cert: any, index: number) => (
            <motion.div key={index} variants={scaleIn} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all">
              <div className="bg-teal-100 dark:bg-teal-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-teal-600 dark:text-teal-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cert.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{cert.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorksCertifications;


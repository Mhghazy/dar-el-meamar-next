"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';

const AboutTimeline: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.aboutPage.timeline.title}</h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">{t.aboutPage.timeline.subtitle}</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-300 dark:bg-teal-700" />
          <motion.div
            className="space-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {t.aboutPage.timeline.milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">{milestone.year}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">{milestone.event}</p>
                  </div>
                </div>
                <div className="w-full md:w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-white dark:bg-teal-400 rounded-full border-4 border-teal-300 dark:border-teal-600" />
                </div>
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;


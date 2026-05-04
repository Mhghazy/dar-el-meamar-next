"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';

const ServicesProcess: React.FC = () => {
  const { t } = useLanguage();
  const processSteps = t.servicesPage.processSteps || [];

  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.servicesPage.sections.processTitle}</h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">{t.servicesPage.sections.processSubtitle}</p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {processSteps.map((step: any, index: number) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="
                bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative
                ltr:border-l-4 rtl:border-r-4
                border-teal-500 dark:border-teal-400
              "
            >
              <div
                className="
                  text-6xl font-bold text-teal-100 dark:text-gray-700
                  absolute top-6 opacity-50
                  ltr:right-6 rtl:left-6
                "
              >
                {step.number}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 relative z-10">
                {step.description}
              </p>
            </motion.div>

          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesProcess;


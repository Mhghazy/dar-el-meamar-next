"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { Target, Users, TrendingUp, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const WorksCapabilities: React.FC = () => {
  const { t } = useLanguage();
  const capabilitiesIcons = [Target, Users, TrendingUp, ThumbsUp];
  const capabilitiesFromT = (t.worksPage?.capabilities || []).map((c: any, i: number) => ({ icon: capabilitiesIcons[i] || Target, title: c.title, description: c.description }));

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div className="text-center mb-16" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t.worksPage?.capabilitiesSection?.title || 'Our Capabilities'}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t.worksPage?.capabilitiesSection?.subtitle || 'What makes us industry leaders'}</p>
        </motion.div>

        {/* Capabilities */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {capabilitiesFromT.map((capability: any, index: number) => (
            <motion.div key={index} variants={fadeInUp} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center">
              <capability.icon className="text-teal-600 dark:text-teal-400 mx-auto mb-4" size={56} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{capability.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{capability.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorksCapabilities;


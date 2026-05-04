"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Shield, Clock, Award } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';

const whyIcons = [HardHat, Shield, Clock, Award];

const ServicesWhy: React.FC = () => {
  const { t } = useLanguage();
  const whyChooseUs = (t.servicesPage.whyChooseUs || []).map((w, i) => ({ ...w, icon: whyIcons[i] || HardHat }));

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t.servicesPage.sections.achievementsTitle}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t.servicesPage.sections.achievementsSubtitle}</p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {whyChooseUs.map((item, index) => (
            <motion.div key={index} variants={fadeInUp} className="bg-gradient-to-br from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg text-center">
              <item.icon className="text-teal-600 dark:text-teal-400 mx-auto mb-4" size={56} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesWhy;


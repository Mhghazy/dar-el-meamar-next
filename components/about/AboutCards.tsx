"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn, staggerContainer } from '../../utils/animations';
import { Building2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const AboutCards: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {t.about.cards.map((card, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <Building2 className="text-teal-600 dark:text-teal-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCards;


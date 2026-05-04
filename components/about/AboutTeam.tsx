"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';
import PERSON_IMAGES from '../../config/personImages';
import { assets } from '@/lib/assets/assetFacade';




const AboutTeam: React.FC = () => {
  const { t } = useLanguage();
  const membersFromT = t.aboutPage.team.members;

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t.aboutPage.team.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t.aboutPage.team.subtitle}</p>
        </motion.div>
        {/* Members */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {membersFromT.map((member, index) => {
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-gradient-to-br from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="bg-teal-100 dark:bg-teal-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src={assets.resolveUrl(PERSON_IMAGES[index % PERSON_IMAGES.length] || member.image)}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-teal-100 dark:border-teal-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;


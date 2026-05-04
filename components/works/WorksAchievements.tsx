"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn, staggerContainer, fadeInUp } from '../../utils/animations';
import { Award, Building2, Users, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const WorksAchievements: React.FC = () => {
  const { t } = useLanguage();
  const achievementColors = ['from-yellow-400 to-yellow-600', 'from-blue-400 to-blue-600', 'from-green-400 to-green-600', 'from-purple-400 to-purple-600'];
  const achievementIcons = [Award, Building2, Users, Globe];
  const achievementsFromT = (t.worksPage?.achievements || []).map((a: any, i: number) => ({ icon: achievementIcons[i] || Award, title: a.title, count: a.count, description: a.description, color: achievementColors[i] || 'from-blue-400 to-blue-600' }));

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div className="text-center mb-16" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t.worksPage?.achievementsSection?.title || t.works.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t.worksPage?.achievementsSection?.subtitle || t.works.subtitle}</p>
        </motion.div>
        {/* Achievements */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {achievementsFromT.map((achievement: any, index: number) => (
            <motion.div key={index} variants={scaleIn} className="relative overflow-hidden rounded-xl shadow-lg group">
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color}`} />
              <div className="relative p-8 text-white">
                <achievement.icon size={48} className="mb-4" />
                <div className="text-5xl font-bold mb-2">{achievement.count}</div>
                <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-white/90">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorksAchievements;


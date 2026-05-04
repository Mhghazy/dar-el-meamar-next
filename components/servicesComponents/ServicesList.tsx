"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn, staggerContainer } from '../../utils/animations';
import { Building2, Home, Factory, Hammer, PaintBucket, Wrench } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const serviceIcons = [Building2, Home, Factory, Hammer, PaintBucket, Wrench];
const serviceColors = [
  'from-blue-500 to-blue-600',
  'from-teal-500 to-teal-600',
  'from-purple-500 to-purple-600',
  'from-orange-500 to-orange-600',
  'from-pink-500 to-pink-600',
  'from-green-500 to-green-600',
];

const ServicesList: React.FC = () => {
  const { t } = useLanguage();
  const detailedServices = (t.servicesPage.detailedServices || []).map((s, i) => ({
    ...s,
    icon: serviceIcons[i] || Building2,
    color: serviceColors[i] || 'from-teal-500 to-teal-600',
  }));

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {detailedServices.map((service: any, index: number) => (
            <motion.div key={index} variants={scaleIn} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <service.icon size={48} className="mb-4" />
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesList;


"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const WorksTestimonials: React.FC = () => {
  const { t } = useLanguage();
  const testimonialsFromT = t.worksPage?.testimonials || [];

  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div className="text-center mb-16" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.worksPage?.testimonialsSection?.title || 'Client Testimonials'}</h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">{t.worksPage?.testimonialsSection?.subtitle || 'What our clients say about working with us'}</p>
        </motion.div>

        {/* Testimonials */}
        <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {testimonialsFromT.map((testimonial: any, index: number) => (
            <motion.div key={index} variants={fadeInUp} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="flex gap-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />))}</div>
              <p className="text-gray-600 dark:text-gray-400 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorksTestimonials;


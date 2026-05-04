"use client";
import { useLanguage } from '../../context/LanguageContext';

import { motion } from 'framer-motion';
import {
  fadeInUp,

} from '../../utils/animations';
const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      variants={fadeInUp}
      viewport={{ once: true, amount: 0.2 }}
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors font-semibold text-sm min-w-[60px]"
    >
      {language === 'en' ? 'العربية' : 'English'}
    </motion.button>
  );
};

export default LanguageToggle;


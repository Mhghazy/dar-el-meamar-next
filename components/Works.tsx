"use client";
import { motion } from 'framer-motion';
import SeeMoreButton from './Tools/Buttons/SeeMoreButton';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from '../utils/animations';
import { useLanguage } from '../context/LanguageContext';
import {
  Home,
  Paintbrush,
  PenTool,
  ShieldCheck,
  Star,
  Clock,
} from 'lucide-react';

/* ── Feature card data ──────────────────────────────────────────── */
const EN_FEATURES = [
  {
    icon: Home,
    title: 'Real Estate Development',
    desc: 'We develop premium residential properties that redefine modern living — from elegant villas to sophisticated apartments — with a focus on long-term value and architectural excellence.',
  },
  {
    icon: Paintbrush,
    title: 'Premium Finishing',
    desc: 'Every surface, texture, and material is selected with care. Our finishing teams deliver luxury-grade interiors that impress from first glance and endure for decades.',
  },
  {
    icon: PenTool,
    title: 'Architectural Design',
    desc: 'Our in-house architects craft spaces that are as functional as they are beautiful — blending contemporary aesthetics with regional heritage and smart design principles.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    desc: 'We apply rigorous quality control at every stage — from raw material selection to final handover — ensuring each project stands as a benchmark of architectural excellence.',
  },
  {
    icon: Star,
    title: 'Signature Style',
    desc: 'Dar Al-Maamar properties are recognized for their distinct character: clean lines, rich finishes, and thoughtful layouts that reflect the lifestyle of today\'s discerning homeowner.',
  },
  {
    icon: Clock,
    title: '19+ Years of Trust',
    desc: 'Founded over 19 years ago, we have built a legacy of trust across hundreds of completed projects, earning the confidence of homeowners, investors, and partners alike.',
  },
];

const AR_FEATURES = [
  {
    icon: Home,
    title: 'التطوير العقاري',
    desc: 'نطور عقارات سكنية راقية تُعيد تعريف الحياة العصرية — من الفيلات الفاخرة إلى الشقق الأنيقة — مع التركيز على القيمة طويلة الأمد والتميز المعماري.',
  },
  {
    icon: Paintbrush,
    title: 'تشطيبات فاخرة',
    desc: 'يُختار كل سطح وملمس ومادة بعناية فائقة. تقدّم فرق التشطيب لدينا تصاميم داخلية بمستوى الفخامة تُبهر من النظرة الأولى وتدوم لعقود.',
  },
  {
    icon: PenTool,
    title: 'التصميم المعماري',
    desc: 'يصمّم معماريونا الداخليون فضاءات جميلة وعملية في آنٍ واحد — تمزج بين الجماليات المعاصرة والتراث الإقليمي ومبادئ التصميم الذكي.',
  },
  {
    icon: ShieldCheck,
    title: 'ضمان الجودة',
    desc: 'نُطبّق رقابة صارمة على الجودة في كل مرحلة — من اختيار المواد الخام حتى التسليم النهائي — لنضمن أن يكون كل مشروع معياراً للتميز.',
  },
  {
    icon: Star,
    title: 'الأسلوب المميز',
    desc: 'تتميز مشاريع دار المعمار بطابعها الخاص: خطوط نظيفة، تشطيبات غنية، ومخططات مدروسة تعكس أسلوب حياة المالك العصري الراقي.',
  },
  {
    icon: Clock,
    title: '+19 عاماً من الثقة',
    desc: 'منذ تأسيسنا قبل أكثر من 19 عاماً، بنينا إرثاً من الثقة عبر مئات المشاريع المنجزة، واكتسبنا ثقة الملاك والمستثمرين والشركاء.',
  },
];

/* ── Component ──────────────────────────────────────────────────── */
const Works = () => {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const features = isAr ? AR_FEATURES : EN_FEATURES;

  return (
    <motion.section
      id="works"
      className="relative py-24 text-white overflow-hidden dark:text-gray-100 transition-colors duration-300"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-700/65 via-teal-800/90 to-teal-950/95
                      dark:from-slate-900/80 dark:via-slate-950/80 dark:to-slate-950/95" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <motion.span
            variants={scaleIn}
            className="inline-block bg-teal-500/20 border border-teal-400/30 text-teal-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide"
          >
            {isAr ? 'من نحن' : 'WHO WE ARE'}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-teal-300">
            {t.works.title}
          </h2>
          <p className="text-xl text-teal-100 dark:text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
            {isAr
              ? 'دار المعمار — شركة رائدة في التطوير العقاري متخصصة في التشطيبات الفاخرة والتصميم المعماري الراقي. نحوّل الرؤى إلى مساكن استثنائية تدوم.'
              : 'Dar Al-Maamar is a premier real estate developer specializing in luxury finishing and architectural design. We transform visions into exceptional living spaces built to last.'}
          </p>
          <SeeMoreButton to="/works" label={t.common.seeMore} />
        </motion.div>


        {/* ── Feature Cards ── */}
        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            const variant = i % 3 === 0 ? fadeInLeft : i % 3 === 2 ? fadeInRight : fadeInUp;
            return (
              <motion.div
                key={i}
                variants={variant}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="group relative p-6 rounded-2xl border border-white/10
                           bg-white/5 backdrop-blur-sm
                           hover:bg-white/10 hover:border-teal-400/40
                           transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl
                                bg-teal-500/20 border border-teal-400/30 mb-4
                                group-hover:bg-teal-500/30 transition-colors">
                  <Icon size={24} className="text-teal-300" />
                </div>
                {/* Title */}
                <h3 className="text-lg font-bold text-white dark:text-teal-200 mb-2">
                  {f.title}
                </h3>
                {/* Description */}
                <p className="text-teal-100/80 dark:text-gray-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity
                                bg-gradient-to-br from-teal-500/5 to-transparent pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Works;

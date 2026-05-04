"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  fadeInUp, fadeIn, scaleIn, staggerContainer, fadeInLeft, fadeInRight,
} from '../utils/animations';
import { useLanguage } from '../context/LanguageContext';
import logoImage from '../assets/darImg.png';
import {
  FaFacebookF, FaLinkedinIn, FaWhatsapp,
  FaInstagram, FaPhoneAlt, FaTiktok,
  FaEnvelope, FaMapMarkerAlt,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SOCIAL = [
  { href: 'https://www.facebook.com/share/1CkkfEbiKA/', icon: FaFacebookF,  label: 'Facebook'    },
  { href: 'https://x.com/darelmeamar',                  icon: FaXTwitter,   label: 'X (Twitter)' },
  { href: 'https://www.linkedin.com/company/110319317/', icon: FaLinkedinIn, label: 'LinkedIn'    },
  { href: 'https://instagram.com',                       icon: FaInstagram,  label: 'Instagram'   },
  { href: 'https://www.tiktok.com/@darelmeamar',         icon: FaTiktok,     label: 'TikTok'      },
  { href: 'https://wa.me/201507412000',                  icon: FaWhatsapp,   label: 'WhatsApp'    },
];

const CONTACT = [
  { icon: FaPhoneAlt,     label: '+01507412000',        href: 'tel:+01507412000'            },
  { icon: FaPhoneAlt,     label: '+23131088',            href: 'tel:+23131088'               },
  { icon: FaWhatsapp,     label: 'WhatsApp Us',          href: 'https://wa.me/201507412000'  },
  { icon: FaEnvelope,     label: 'info@darelmeamar.com', href: 'mailto:info@darelmeamar.com' },
  { icon: FaMapMarkerAlt, label: 'Cairo, Egypt',        href: '#'                           },
];

const NAV_EN = [
  { label: 'Home',       href: '/'         },
  { label: 'About',      href: '/about'    },
  { label: 'Services',   href: '/services' },
  { label: 'Gallery',    href: '/gallery'  },
  { label: 'Works',      href: '/works'    },
  { label: 'Contact Us', href: '/contact'  },
];
const NAV_AR = [
  { label: 'الرئيسية',  href: '/'         },
  { label: 'من نحن',    href: '/about'    },
  { label: 'خدماتنا',  href: '/services' },
  { label: 'المعرض',   href: '/gallery'  },
  { label: 'أعمالنا',  href: '/works'    },
  { label: 'اتصل بنا', href: '/contact'  },
];

const ColHead = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-teal-400 dark:text-teal-300 mb-6 flex items-center gap-3">
    <span className="flex-1 h-px bg-gradient-to-r from-teal-500/60 to-transparent" />
    {children}
    <span className="flex-1 h-px bg-gradient-to-l from-teal-500/60 to-transparent" />
  </h3>
);

const Footer = () => {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const nav  = isAr ? NAV_AR : NAV_EN;

  return (
    <motion.footer
      className="relative overflow-hidden text-white
                 bg-[radial-gradient(ellipse_at_top,_#0f2a2a_0%,_#030f0f_60%)]
                 dark:bg-[radial-gradient(ellipse_at_top,_#0b1f1f_0%,_#020a0a_60%)]
                 pt-4 pb-8"
      style={{ borderTop: '1px solid rgba(20,184,166,0.2)' }}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {/* ── Top teal glow ── */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px]
                      bg-teal-500/10 blur-[120px] rounded-full -translate-y-1/2" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[400px] h-[200px]
                      bg-teal-700/8 blur-[80px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════════════════════════════════════════════════════
            HERO LOGO BAND — centered, full-width, very large
        ════════════════════════════════════════════════════════ */}
        <motion.div
          variants={scaleIn}
          className="flex flex-col items-center justify-center py-10 mb-4"
        >
          <motion.img
            src={logoImage.src}
            alt="Dar Al-Maamar"
            className="w-auto object-contain drop-shadow-[0_0_60px_rgba(20,184,166,0.25)]"
            style={{ height: 'clamp(180px, 22vw, 320px)' }}
            whileHover={{ scale: 1.03, filter: 'drop-shadow(0 0 80px rgba(20,184,166,0.45))' }}
            transition={{ duration: 0.4 }}
          />
          <motion.p
            variants={fadeIn}
            className="text-gray-400 text-sm md:text-base max-w-lg text-center mt-4 leading-relaxed"
          >
            {t.footer.description}
          </motion.p>

          {/* ── Social icons ── centered row directly under logo */}
          <motion.div
            variants={staggerContainer}
            className="flex items-center justify-center gap-3 mt-6 flex-wrap"
          >
            {SOCIAL.map(({ href, icon: Icon, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                variants={fadeInUp}
                custom={i}
                className="flex items-center justify-center w-12 h-12 rounded-2xl
                           bg-teal-900/30 border border-teal-700/40 text-teal-300
                           hover:bg-teal-500 hover:border-teal-400 hover:text-white
                           shadow-[0_2px_16px_rgba(20,184,166,0.08)]
                           hover:shadow-[0_4px_24px_rgba(20,184,166,0.35)]
                           transition-all duration-250"
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.88 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Teal divider line ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent mb-12" />

        {/* ═══════════════════════════════════════════════════════
            3-COLUMN INFO GRID
        ════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">

          {/* Quick Links */}
          <motion.div variants={fadeInLeft} className="text-center md:text-left">
            <ColHead>{isAr ? 'روابط سريعة' : 'Quick Links'}</ColHead>
            <ul className="space-y-3">
              {nav.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-2
                               text-gray-400 hover:text-teal-300
                               text-sm font-medium transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-teal-400
                                     transition-all duration-300 rounded-full flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp} className="text-center md:text-left">
            <ColHead>{isAr ? 'تواصل معنا' : 'Contact'}</ColHead>
            <ul className="space-y-4">
              {CONTACT.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3
                               text-gray-400 hover:text-teal-300
                               text-sm transition-colors duration-200"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center
                                     w-8 h-8 rounded-xl
                                     bg-teal-900/40 border border-teal-700/30
                                     group-hover:bg-teal-600/40 group-hover:border-teal-500
                                     transition-all duration-200">
                      <Icon size={13} className="text-teal-400" />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInRight} className="text-center md:text-left">
            <ColHead>{isAr ? 'تحدث إلينا' : 'Get In Touch'}</ColHead>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {isAr
                ? 'هل لديك مشروع؟ تواصل معنا واحصل على استشارة مجانية.'
                : 'Have a project in mind? Reach out for a free consultation.'}
            </p>

            <div className="flex flex-col gap-3">
              <motion.a
                href="https://wa.me/201507412000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2
                           bg-teal-600 hover:bg-teal-500 text-white
                           text-sm font-semibold px-6 py-3 rounded-xl
                           shadow-lg shadow-teal-900/40
                           transition-all duration-200"
                whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(20,184,166,0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                <FaWhatsapp size={17} />
                {isAr ? 'واتساب' : 'WhatsApp Us'}
              </motion.a>

              <motion.a
                href="mailto:info@darelmeamar.com"
                className="inline-flex items-center justify-center gap-2
                           border border-teal-600/50 hover:border-teal-400
                           hover:bg-teal-900/30 text-teal-300
                           text-sm font-semibold px-6 py-3 rounded-xl
                           transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaEnvelope size={14} />
                {isAr ? 'راسلنا' : 'Send Email'}
              </motion.a>

              <motion.a
                href="tel:+01507412000"
                className="inline-flex items-center justify-center gap-2
                           border border-gray-700 hover:border-teal-700
                           hover:bg-teal-950/50 text-gray-400 hover:text-teal-300
                           text-sm font-semibold px-6 py-3 rounded-xl
                           transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaPhoneAlt size={13} />
                +01507412000
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
        <motion.p
          variants={fadeIn}
          className="text-center text-gray-600 text-xs tracking-widest uppercase"
        >
          &copy; 2026 Dar Al-Maamar — {t.footer.rights}
        </motion.p>

      </div>
    </motion.footer>
  );
};

export default Footer;

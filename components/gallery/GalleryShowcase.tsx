'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { X, ArrowLeft, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { type GalleryFolder } from '@/config/galleryData';
import { publicGalleryCatalog } from '@/lib/gallery/publicCatalog';
import { nextFolderCircular, prevFolderCircular } from '@/lib/gallery/galleryNavigation';
import { assets } from '@/lib/assets/assetFacade';
import { useLanguage } from '@/context/LanguageContext';
import type { TranslationKey } from '@/locales/translations';

const GalleryShowcase = () => {
  const { t, language } = useLanguage();
  const [selectedFolder, setSelectedFolder] = useState<GalleryFolder | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="relative py-32 px-6 min-h-screen bg-white dark:bg-gray-950 transition-colors duration-700 overflow-hidden">
      {/* Background Texture & Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <LayoutGroup>
          {!selectedFolder ? (
            <motion.div 
              layout
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 overflow-x-auto md:overflow-x-visible pb-12 md:pb-0 snap-x snap-mandatory scrollbar-hide"
            >
              {publicGalleryCatalog.getOrderedFolders(language).map((folder) => (
                <div key={folder.id} className="min-w-[85vw] md:min-w-0 snap-center">
                  <FolderCard
                    folder={folder}
                    viewCollectionLabel={t.galleryUi.viewCollection}
                    onClick={() => setSelectedFolder(folder)}
                  />
                </div>
              ))}
            </motion.div>
          ) : (
            <FolderDetail
              folder={selectedFolder}
              ui={t.galleryUi}
              onBack={() => setSelectedFolder(null)}
              onNext={() => {
                const next = nextFolderCircular(selectedFolder.id, language);
                if (next) setSelectedFolder(next);
              }}
              onPrev={() => {
                const prev = prevFolderCircular(selectedFolder.id, language);
                if (prev) setSelectedFolder(prev);
              }}
              onImageClick={(src) => setActiveImage(src)}
              isLightboxOpen={!!activeImage}
            />
          )}
        </LayoutGroup>

        {/* Full Screen Lightbox */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
              onClick={() => setActiveImage(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
                onClick={() => setActiveImage(null)}
              >
                <X size={40} strokeWidth={1} />
              </button>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full h-full flex items-center justify-center p-4 md:p-10"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={assets.resolveUrl(activeImage)}
                  alt={t.galleryUi.fullSizeAlt}
                  fill
                  className="object-contain shadow-2xl rounded-sm"
                  priority
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

type GalleryUiStrings = TranslationKey['galleryUi'];

const FolderCard = ({
  folder,
  viewCollectionLabel,
  onClick,
}: {
  folder: GalleryFolder;
  viewCollectionLabel: string;
  onClick: () => void;
}) => {
  return (
    <motion.div
      layoutId={`folder-${folder.id}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      {/* Enhanced Folder Tab */}
      <motion.div 
        layoutId={`tab-${folder.id}`}
        className="absolute -top-3 left-6 w-28 h-8 bg-gray-100 dark:bg-[#1a1a1a] rounded-t-xl transition-colors duration-500 border-t border-x border-gray-200 dark:border-white/5" 
      />
      
      <div className="relative z-10 bg-white dark:bg-[#121212] rounded-xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-white/5 transition-all duration-700 group-hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] group-hover:-translate-y-3">
        <div className="relative h-80 overflow-hidden bg-gray-100 dark:bg-gray-900">
          <motion.div
            layoutId={`image-${folder.id}`}
            className="relative w-full h-full"
          >
            <Image 
              src={assets.resolveUrl(folder.heroImage)} 
              alt={folder.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
            />
          </motion.div>
          
          {/* Glass Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
          
          <div className="absolute top-6 left-6">
            <motion.div 
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1 }}
              className="px-4 py-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full"
            >
              <span className="text-[10px] text-white uppercase tracking-[0.2em] font-bold">
                {folder.category}
              </span>
            </motion.div>
          </div>
        </div>

        <div className="p-10">
          <motion.h3 
            layoutId={`title-${folder.id}`}
            className="text-2xl font-light text-gray-900 dark:text-white mb-6 leading-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
          >
            {folder.title}
          </motion.h3>
          <div className="flex items-center gap-3 text-teal-600 dark:text-teal-400 text-sm font-semibold tracking-wide">
            <span className="uppercase text-[11px] tracking-widest">{viewCollectionLabel}</span>
            <div className="h-[1px] w-8 bg-teal-600/30 group-hover:w-12 transition-all duration-500" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FolderDetail = ({
  folder,
  ui,
  onBack,
  onNext,
  onPrev,
  onImageClick,
  isLightboxOpen,
}: {
  folder: GalleryFolder;
  ui: GalleryUiStrings;
  onBack: () => void;
  onNext: () => void;
  onPrev: () => void;
  onImageClick: (src: string) => void;
  isLightboxOpen: boolean;
}) => {
  // Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'Escape') onBack();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev, onBack]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      {/* Floating Navigation Arrows - Hidden when Lightbox is open */}
      <AnimatePresence>
        {!isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-1/2 left-4 right-4 z-[60] flex justify-between pointer-events-none -translate-y-1/2"
          >
            <button 
              onClick={onPrev}
              className="p-4 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 text-white pointer-events-auto hover:bg-teal-600 transition-all group shadow-2xl"
            >
              <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onNext}
              className="p-4 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 text-white pointer-events-auto hover:bg-teal-600 transition-all group shadow-2xl"
            >
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="block"
              >
                <ArrowLeft size={24} className="rotate-180" />
              </motion.span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
        <div className="max-w-4xl">
          <motion.button 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="flex items-center gap-3 text-gray-400 hover:text-teal-600 transition-all mb-12 group"
          >
            <div className="p-2 rounded-full border border-gray-200 dark:border-white/10 group-hover:border-teal-600/30 group-hover:bg-teal-50 dark:group-hover:bg-teal-900/10 transition-all">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold">{ui.returnCollections}</span>
          </motion.button>
          
          <div className="overflow-hidden mb-6">
            <motion.h1 
              layoutId={`title-${folder.id}`}
              className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 dark:text-white leading-[0.9]"
            >
              {folder.title}
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-6 mb-12"
          >
            <div className="h-[1px] w-12 bg-teal-600" />
            <span className="text-teal-700 dark:text-teal-400 text-xs uppercase tracking-[0.3em] font-black">
              {folder.category}
            </span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-2xl"
          >
            {folder.description}
          </motion.p>
        </div>
      </div>

      <motion.div 
        layoutId={`folder-${folder.id}`}
        className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-40 group cursor-zoom-in bg-gray-100 dark:bg-gray-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/10"
        onClick={() => onImageClick(folder.heroImage)}
      >
        <motion.div 
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5 }}
        >
          <div className="relative w-full h-full">
            <Image 
              src={assets.resolveUrl(folder.heroImage)} 
              alt={folder.title}
              fill
              priority
              loading="eager"
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
        </motion.div>
        
        {/* Window Frame Effect */}
        <div className="absolute inset-0 border-[20px] border-white/5 backdrop-blur-[2px] pointer-events-none" />
        
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="p-6 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
            <ZoomIn className="text-white" size={40} strokeWidth={1.5} />
          </div>
        </div>
        
        {/* Animated Badge */}
        <div className="absolute bottom-10 right-10 flex items-center gap-4 text-white/80">
          <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold">{ui.featuredPortfolio}</span>
        </div>
      </motion.div>

      {/* Sections with Reveal Animations */}
      <div className="space-y-48">
        {folder.sections.map((section, sIdx) => (
          <section key={sIdx} className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-baseline justify-between mb-16 border-b border-gray-100 dark:border-white/5 pb-8"
            >
              <h2 className="text-3xl md:text-5xl font-light text-gray-900 dark:text-white">
                {section.title}
              </h2>
              <div className="flex items-center gap-4 text-gray-400 uppercase tracking-widest text-[10px] font-bold">
                <span>{section.images.length} {ui.perspectivesWord}</span>
                <div className="w-8 h-[1px] bg-gray-200 dark:bg-white/10" />
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {section.images.map((image, iIdx) => (
                <motion.div 
                  key={iIdx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: iIdx * 0.1 }}
                  onClick={() => onImageClick(image.src)}
                  className="group relative aspect-[4/5] bg-gray-100 dark:bg-[#0a0a0a] rounded-xl overflow-hidden cursor-zoom-in border border-transparent dark:hover:border-white/10 transition-all duration-500"
                >
                  <div className="relative w-full h-full">
                    <Image 
                      src={assets.resolveUrl(image.src)} 
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center backdrop-blur-0 group-hover:backdrop-blur-[2px]">
                    <div className="flex flex-col items-center gap-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
                        <ZoomIn className="text-white" size={24} />
                      </div>
                      <span className="text-white text-[10px] uppercase tracking-widest font-bold">{ui.viewDetail}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-40 text-center py-24 border-t border-gray-100 dark:border-white/5">
         <h3 className="text-3xl font-light text-gray-900 dark:text-white mb-8">{ui.inspiredBy}</h3>
         <a
          href="/contact"
          className="inline-block px-12 py-5 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-medium transition-all shadow-xl shadow-teal-600/20"
         >
          {ui.startYourProject}
         </a>
      </div>
    </motion.div>
  );
};

export default GalleryShowcase;

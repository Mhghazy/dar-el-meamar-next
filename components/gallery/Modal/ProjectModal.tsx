"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { assets } from '@/lib/assets/assetFacade';


interface ProjectModalProps {
  project: any | null;
  onClose: () => void;
  t: any;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, t }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal content */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full p-6 relative flex flex-col"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {/* Single Image Viewer */}
            <div className="relative mb-6 flex items-center justify-center">
              <motion.img
                key={currentIndex}
                src={assets.resolveUrl(project.images[currentIndex])}
                alt={`${project.title} ${currentIndex + 1}`}
                className="w-full h-64 object-cover rounded-md"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                <ChevronLeft size={20} className="text-gray-700 dark:text-gray-200" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                <ChevronRight size={20} className="text-gray-700 dark:text-gray-200" />
              </button>
            </div>

            {/* Project details */}
            <div className="flex items-center justify-between gap-4 mt-4">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.description}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Building2 size={16} className="mr-2" />
                  {project.location}
                </div>
                <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-xs mt-2">
                  {project.category}
                </span>
              </div>

              {/* Close Button at bottom */}
              <button
                onClick={onClose}
                className="bg-red-600 text-white rounded-md px-4 py-2 bottom-0 hover:bg-red-700 transition flex items-center gap-2 h-fit"
              >
                <X size={20} />
                {t.galleryPage.closeButton || 'Close'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;


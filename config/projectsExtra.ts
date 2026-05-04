// config/projectsExtra.ts
import GALLERY_IMAGES from './galleryImages';
import GALLERY_IMAGES_DETAILS from './galleryImagesDetails';

export const PROJECTS_EXTRA: Record<number, { main: string; details: string[]; color: string }> = {
  1: {
    main: GALLERY_IMAGES[0],
    details: GALLERY_IMAGES_DETAILS[0],
    color: 'from-blue-400 to-blue-600'
  },
  2: {
    main: GALLERY_IMAGES[1],
    details: GALLERY_IMAGES_DETAILS[1],
    color: 'from-teal-400 to-teal-600'
  },
  3: {
    main: GALLERY_IMAGES[2],
    details: GALLERY_IMAGES_DETAILS[2],
    color: 'from-purple-400 to-purple-600'
  },
  4: {
    main: GALLERY_IMAGES[3],
    details: GALLERY_IMAGES_DETAILS[3],
    color: 'from-orange-400 to-orange-600'
  },
  5: {
    main: GALLERY_IMAGES[4],
    details: GALLERY_IMAGES_DETAILS[4],
    color: 'from-pink-400 to-pink-600'
  },
  6: {
    main: GALLERY_IMAGES[5],
    details: GALLERY_IMAGES_DETAILS[5],
    color: 'from-green-400 to-green-600'
  },
  7: {
    main: GALLERY_IMAGES[6],
    details: GALLERY_IMAGES_DETAILS[6],
    color: 'from-gray-400 to-gray-600'
  },
  8: {
    main: GALLERY_IMAGES[7],
    details: GALLERY_IMAGES_DETAILS[7],
    color: 'from-gray-400 to-gray-600'
  },
  9: {
    main: GALLERY_IMAGES[8],
    details: GALLERY_IMAGES_DETAILS[8],
    color: 'from-gray-400 to-gray-600'
  },

};

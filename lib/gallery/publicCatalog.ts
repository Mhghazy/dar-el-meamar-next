import { galleryFolders, type GalleryFolder } from '@/config/galleryData';
import { galleryFoldersAr } from '@/config/galleryDataAr';

const ORDERED_IDS: readonly string[] = galleryFolders.map((f) => f.id);
const BY_ID_EN = new Map<string, GalleryFolder>(
  galleryFolders.map((f) => [f.id, f])
);
const BY_ID_AR = new Map<string, GalleryFolder>(
  galleryFoldersAr.map((f) => [f.id, f])
);

/**
 * Read-only catalog over static public gallery data (Repository-style API).
 */
export const publicGalleryCatalog = {
  getOrderedFolders(lang: string = 'en'): readonly GalleryFolder[] {
    return lang === 'ar' ? galleryFoldersAr : galleryFolders;
  },

  getOrderedIds(): readonly string[] {
    return ORDERED_IDS;
  },

  getById(id: string, lang: string = 'en'): GalleryFolder | undefined {
    return lang === 'ar' ? BY_ID_AR.get(id) : BY_ID_EN.get(id);
  },
} as const;

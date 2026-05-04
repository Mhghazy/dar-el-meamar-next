import type { GalleryFolder } from '@/config/galleryData';
import { publicGalleryCatalog } from './publicCatalog';

function orderedFolders(lang: string = 'en'): readonly GalleryFolder[] {
  return publicGalleryCatalog.getOrderedFolders(lang);
}

function orderedIds(): readonly string[] {
  return publicGalleryCatalog.getOrderedIds();
}

/** Index of `id` in catalog order, or -1 if unknown. */
export function indexOfFolderId(id: string): number {
  return orderedIds().indexOf(id);
}

/** Circular next folder in catalog order. */
export function nextFolderCircular(currentId: string, lang: string = 'en'): GalleryFolder | null {
  const folders = orderedFolders(lang);
  const ids = orderedIds();
  const len = folders.length;
  if (len === 0) return null;
  const i = ids.indexOf(currentId);
  if (i < 0) return null;
  return folders[(i + 1) % len] ?? null;
}

/** Circular previous folder in catalog order. */
export function prevFolderCircular(currentId: string, lang: string = 'en'): GalleryFolder | null {
  const folders = orderedFolders(lang);
  const ids = orderedIds();
  const len = folders.length;
  if (len === 0) return null;
  const i = ids.indexOf(currentId);
  if (i < 0) return null;
  return folders[(i - 1 + len) % len] ?? null;
}

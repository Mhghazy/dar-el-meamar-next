import { resolvePublicImageUrl } from '@/lib/assets/urlResolution';

/** Legacy name; delegates to `resolvePublicImageUrl`. Prefer `assets.resolveUrl` in UI code. */
export const getImageUrl = resolvePublicImageUrl;

// Preload critical images for better performance
export const preloadImages = (imagePaths: string[]) => {
  if (typeof document === 'undefined') return;
  
  imagePaths.forEach((path) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = resolvePublicImageUrl(path);
    document.head.appendChild(link);
  });
};

// Suppress THREE.js console warnings
export const suppressThreeWarnings = () => {
  if (typeof window === 'undefined') return;
  
  const originalWarn = console.warn;
  console.warn = (...args: any[]) => {
    // Suppress THREE.js Material warnings about vertexColors
    const message = args[0]?.toString() || '';
    if (
      message.includes('THREE.Material') ||
      message.includes('vertexColors') ||
      message.includes('non-static position')
    ) {
      return;
    }
    originalWarn.apply(console, args);
  };
};

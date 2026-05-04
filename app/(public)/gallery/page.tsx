import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryShowcase from '@/components/gallery/GalleryShowcase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Dar Al-Maamar',
  description: 'A visual exploration of our finest developments, architectural details, and luxury living spaces.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <GalleryHero />
      <GalleryShowcase />
    </main>
  );
}

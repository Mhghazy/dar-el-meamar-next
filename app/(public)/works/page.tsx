import WorksHero from '@/components/works/WorksHero';
import WorksPhilosophy from '@/components/works/WorksPhilosophy';
import Gallery from '@/components/Gallery';
import RefinedFAQ from '@/components/works/RefinedFAQ';
import WorksCTA from '@/components/works/WorksCTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dar Al-Maamar | Luxury Real Estate Development & Architectural Design',
  description: 'Dar Al-Maamar is a leading real estate developer specializing in luxury residential projects, architectural design, and premium finishing solutions with over 19 years of experience.',
};

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <WorksHero />
      <WorksPhilosophy />
      <Gallery />
      <RefinedFAQ />
      <WorksCTA />
    </main>
  );
}

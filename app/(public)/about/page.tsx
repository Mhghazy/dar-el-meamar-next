import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import AboutCompany from '@/components/about/AboutCompany';
import AboutFAQ from '@/components/about/AboutFAQ';
import AboutCards from '@/components/about/AboutCards';
import AboutValues from '@/components/about/AboutValues';

export const metadata: Metadata = {
  title: 'About Us | Dar Al-Maamar — Luxury Real Estate Development Since 2007',
  description:
    'Dar Al-Maamar Real Estate Development has crafted premium residential properties with distinctive architectural design and luxury finishing since 2007. Discover our story, values, and commitment to refined living.',
  keywords: [
    'Dar Al-Maamar',
    'luxury real estate development',
    'premium residential development Egypt',
    'architectural design Cairo',
    'luxury finishing',
    'real estate developer Egypt',
  ],
  openGraph: {
    title: 'About Dar Al-Maamar — Luxury Real Estate Development',
    description:
      'Crafting refined living since 2007. Distinctive architecture, luxurious entrances, and premium quality in every project.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <AboutHero />
      <AboutCompany />
      <AboutCards />
      <AboutValues />
      <AboutFAQ />
    </main>
  );
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  details: {
    concept: string;
    philosophy: string;
    finishing: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'villa-luxe',
    title: 'Villa Luxe',
    subtitle: 'A Masterpiece of Modern Privacy',
    description: 'An expansive estate designed with the philosophy of seamless indoor-outdoor living, featuring natural stone and architectural glass.',
    image: 'modern-villa-v3.jpg',
    category: 'Architecture & Development',
    details: {
      concept: 'The concept was driven by the desire to create a sanctuary that feels both open to nature and completely private.',
      philosophy: 'Minimalism meets organic warmth. We used raw materials to create a timeless aesthetic that ages gracefully.',
      finishing: 'Hand-selected marble, sustainable teak wood, and custom-engineered structural glass.',
    },
    stats: [
      { label: 'Location', value: 'New Cairo' },
      { label: 'Area', value: '1,200 m²' },
      { label: 'Year', value: '2025' },
    ],
  },
  {
    id: 'sky-penthouse',
    title: 'Sky Penthouse',
    subtitle: 'Elevated Living Above the Horizon',
    description: 'A sophisticated urban retreat featuring double-height ceilings and panoramic city views, executed with premium materials.',
    image: 'V 14 entrance Shot 1.jpg',
    category: 'Interior Design & Finishing',
    details: {
      concept: 'The design focuses on verticality and light, creating a sense of boundless space in an urban setting.',
      philosophy: 'Luxury is defined by the absence of noise. Every element is functional, elegant, and perfectly placed.',
      finishing: 'Bespoke metalwork, Venetian plaster, and intelligent lighting systems.',
    },
    stats: [
      { label: 'Location', value: 'Sheikh Zayed' },
      { label: 'Area', value: '450 m²' },
      { label: 'Year', value: '2024' },
    ],
  },
];

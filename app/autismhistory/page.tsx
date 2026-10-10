import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Autism History & Research | Speciality Homeopathy',
  description: 'The history of autism research and diagnosis — an educational resource from Speciality Homeopathy Clinic, Ahmedabad.',
  alternates: { canonical: 'https://specialityhomeopathy.com/autismhistory' },
  openGraph: {
    type: 'website',
    url: 'https://specialityhomeopathy.com/autismhistory',
    title: 'Autism History & Research | Speciality Homeopathy',
    description: 'The history of autism research and diagnosis — an educational resource from Speciality Homeopathy Clinic, Ahmedabad.',
    images: [{ url: 'https://specialityhomeopathy.com/images/og-default.jpg', width: 1200, height: 630, alt: 'Autism History & Research | Speciality Homeopathy' }],
  },
};
export { default } from '../autism-history/page';

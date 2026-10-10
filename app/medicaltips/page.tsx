import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Tips & Health Advice | Speciality Homeopathy',
  description: 'Expert health tips and medical advice from Dr. Ketan Patel — homeopathy, child neurology, autism care and general wellness.',
  alternates: { canonical: 'https://specialityhomeopathy.com/medicaltips' },
  openGraph: {
    type: 'website',
    url: 'https://specialityhomeopathy.com/medicaltips',
    title: 'Medical Tips & Health Advice | Speciality Homeopathy',
    description: 'Expert health tips and medical advice from Dr. Ketan Patel — homeopathy, child neurology, autism care and general wellness.',
    images: [{ url: 'https://specialityhomeopathy.com/images/og-default.jpg', width: 1200, height: 630, alt: 'Medical Tips & Health Advice | Speciality Homeopathy' }],
  },
};
export { default } from '../important-links/medical-tips/page';

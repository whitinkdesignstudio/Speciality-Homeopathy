import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Speciality Homeopathy',
  description: 'Documented clinical case observations from Speciality Homeopathy — autism, neurological conditions and more. Individual outcomes by Dr. Ketan Patel.',
  alternates: { canonical: 'https://specialityhomeopathy.com/casestudies' },
  openGraph: {
    type: 'website',
    url: 'https://specialityhomeopathy.com/casestudies',
    title: 'Case Studies | Speciality Homeopathy',
    description: 'Documented clinical case observations from Speciality Homeopathy — autism, neurological conditions and more. Individual outcomes by Dr. Ketan Patel.',
    images: [{ url: 'https://specialityhomeopathy.com/images/og-default.jpg', width: 1200, height: 630, alt: 'Case Studies | Speciality Homeopathy' }],
  },
};
export { default } from '../important-links/case-studies/page';

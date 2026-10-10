import type { Metadata } from 'next';
import AboutUsClient from '../about-us/AboutUsClient';

export const metadata: Metadata = {
  title: 'Our Approach | Specialist Homeopathy Treatment & Patient Care',
  description: 'Explore our individualized approach to specialist homeopathy treatment, patient care, and clinical case management.',
  keywords: 'homeopathy approach, holistic pediatric care, classical homeopathy Ahmedabad, Dr Ketan Patel methodology',
  alternates: {
    canonical: 'https://specialityhomeopathy.com/our-approach',
  },
  openGraph: {
    type: 'website',
    url: 'https://specialityhomeopathy.com/our-approach',
    title: 'Our Approach | Speciality Homeopathy',
    description: 'The clinical philosophy behind Speciality Homeopathy — individualized constitutional care for children and adults.',
    images: [{ url: 'https://specialityhomeopathy.com/images/og-default.jpg', width: 1200, height: 630, alt: 'Our Approach | Speciality Homeopathy' }],
  },
};

export default function OurApproachPage() {
  return <AboutUsClient />;
}

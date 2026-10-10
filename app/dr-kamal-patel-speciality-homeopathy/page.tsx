import type { Metadata } from 'next';
import DrKamalPatelClient from '../our-experts/drkamalpatel/DrKamalPatelClient';

export const metadata: Metadata = {
  title: 'Dr. Kamal Patel | Specialist Homeopathic Physician',
  description:
    'Dr. Kamal Patel offers compassionate homeopathic care for children and adults, focusing on personalized treatment and patient comfort.',
  keywords: 'Dr. Kamal Patel homeopath, homeopathic doctor Ahmedabad, pediatric homeopathy Ahmedabad, Speciality Homeopathy doctors, general homeopathy India',
  alternates: {
    canonical: 'https://specialityhomeopathy.com/dr-kamal-patel-speciality-homeopathy',
  },
  openGraph: {
    type: 'website',
    url: 'https://specialityhomeopathy.com/dr-kamal-patel-speciality-homeopathy',
    title: 'Dr. Kamal Patel | Speciality Homeopathy',
    description: 'Consulting homeopathic physician at Speciality Homeopathy Clinic, Ahmedabad.',
    images: [{ url: 'https://specialityhomeopathy.com/images/og-default.jpg', width: 1200, height: 630, alt: 'Dr. Kamal Patel | Speciality Homeopathy' }],
  },
};

export default function DrKamalPatelPage() {
  return <DrKamalPatelClient />;
}

import type { Metadata } from 'next';
import DrKamalPatelClient from '../our-experts/drkamalpatel/DrKamalPatelClient';

export const metadata: Metadata = {
  title: 'Dr. Kamal Patel | Specialist Homeopathic Physician',
  description:
    'Dr. Kamal Patel offers compassionate homeopathic care for children and adults, focusing on personalized treatment and patient comfort.',
  keywords: 'Dr. Kamal Patel homeopath, homeopathic doctor Ahmedabad, pediatric homeopathy Ahmedabad, Speciality Homeopathy doctors, general homeopathy India',
};

export default function DrKamalPatelPage() {
  return <DrKamalPatelClient />;
}

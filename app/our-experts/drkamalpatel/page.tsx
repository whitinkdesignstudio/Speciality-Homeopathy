import type { Metadata } from 'next';
import DrKamalPatelClient from './DrKamalPatelClient';

export const metadata: Metadata = {
  title: 'Dr. Kamal Patel — Skin & Hair Homeopathy Expert | Speciality Homeopathy',
  description:
    'Dr. Kamal Patel, BHMS with 30+ years of clinical experience specializing in homeopathic dermatology, chronic skin conditions, hair fall, and metabolic management in Ahmedabad.',
};

export default function DrKamalPatelPage() {
  return <DrKamalPatelClient />;
}

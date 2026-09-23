import type { Metadata } from 'next';
import DrBhaktiBataviaClient from './DrBhaktiBataviaClient';

export const metadata: Metadata = {
  title: 'Dr. Bhakti Batavia — Consultant Homeopath | Speciality Homeopathy',
  description:
    'Dr. Bhakti Batavia, BHMS with 27+ years of clinical practice integrating classical homeopathy and the Leap to Similimum neuroscience-driven case analysis.',
};

export default function DrBhaktiBataviaPage() {
  return <DrBhaktiBataviaClient />;
}

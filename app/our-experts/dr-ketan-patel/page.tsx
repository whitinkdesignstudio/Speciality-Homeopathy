import type { Metadata } from 'next';
import DrKetanPatelClient from './DrKetanPatelClient';

export const metadata: Metadata = {
  title: 'Dr. Ketan Patel — Founder & Chief Homeopathic Physician | Speciality Homeopathy',
  description:
    'Dr. Ketan Patel, BHMS, BCJP, MD with 34+ years of clinical experience in pediatric homeopathy, autism spectrum, exome sequencing analysis, and rare genetic conditions.',
};

export default function DrKetanPatelPage() {
  return <DrKetanPatelClient />;
}

import type { Metadata } from 'next';
import DrKetanPatelClient from '../our-experts/dr-ketan-patel/DrKetanPatelClient';

export const metadata: Metadata = {
  title: 'Dr. Ketan Patel | Autism Doctor in Ahmedabad',
  description:
    'Dr. Ketan Patel (BHMS, MD) has practised homeopathy since 1992, focusing on autism and child neurological conditions. ONGC panel doctor & AHML member.',
  keywords:
    'autism doctor, child autism specialist, autism specialist in Ahmedabad, Dr. Ketan Patel homeopathy',
};

export default function DrKetanPatelPage() {
  return <DrKetanPatelClient />;
}

import type { Metadata } from 'next';
import AboutUsClient from '../about-us/AboutUsClient';

export const metadata: Metadata = {
  title: 'Our Approach | Specialist Homeopathy Treatment & Patient Care',
  description: 'Explore our individualized approach to specialist homeopathy treatment, patient care, and clinical case management.',
  keywords: 'homeopathy approach, holistic pediatric care, classical homeopathy Ahmedabad, Dr Ketan Patel methodology',
};

export default function OurApproachPage() {
  return <AboutUsClient />;
}

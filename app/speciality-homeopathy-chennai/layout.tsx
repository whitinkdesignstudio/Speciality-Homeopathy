import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homeopathy Clinic in Chennai Tamil Nadu | Dr. Ketan Patel Centre',
  description:
    'Speciality Homeopathy center in Chennai. Holistic, evidence-backed treatment for autism, ADHD, developmental delays, and chronic pediatric conditions.',
  keywords:
    'homeopathy clinic Chennai, autism doctor Chennai, child neurology Tamil Nadu, Dr Ketan Patel Chennai, ADHD treatment Chennai',
};

export default function ChennaiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
